import { useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { LoaderCircle, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { sendContactEmail } from '../services/emailjs';
import { CONTACT_LIMITS, validateContactForm } from '../utils/contactValidation';
import type { ContactField, ContactFormPayload } from '../utils/contactValidation';

type ContactFormProps = { headingLevel: 'h2' | 'h3' };
type ContactErrors = Partial<Record<ContactField, string>>;

const initialFormState: ContactFormPayload = { name: '', email: '', subject: '', message: '' };
const inputClassName = 'h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-300/30 focus:bg-black/35';

function ContactForm({ headingLevel }: ContactFormProps) {
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState<ContactErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const lastSubmissionAt = useRef(0);
    const errorSummaryRef = useRef<HTMLDivElement>(null);
    const Heading = headingLevel;

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (!(name in initialFormState)) return;
        const field = name as ContactField;
        setErrors((current) => {
            if (!current[field]) return current;
            const next = { ...current };
            delete next[field];
            return next;
        });
        setFormData((current) => ({ ...current, [field]: value.slice(0, CONTACT_LIMITS[field].max) }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const honeypot = new FormData(event.currentTarget).get('website');
        if (typeof honeypot === 'string' && honeypot.trim()) return;

        const validation = validateContactForm(formData);
        if (!validation.success) {
            setErrors({ [validation.field]: validation.message });
            toast.error(validation.message);
            window.requestAnimationFrame(() => errorSummaryRef.current?.focus());
            return;
        }
        if (Date.now() - lastSubmissionAt.current < 15_000) {
            toast.error('Yeni mesaj göndərməzdən əvvəl bir qədər gözləyin.');
            return;
        }

        setIsSubmitting(true);
        try {
            await sendContactEmail(validation.data);
            toast.success('Mesajınız göndərildi.');
            setFormData(initialFormState);
            setErrors({});
            lastSubmissionAt.current = Date.now();
        } catch {
            toast.error('Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const fieldError = (field: ContactField) => errors[field] ? (
        <span id={`contact-${field}-error`} role="alert" className="text-sm text-red-200">{errors[field]}</span>
    ) : null;

    return (
        <motion.form
            initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={handleSubmit} aria-busy={isSubmitting}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 lg:p-7"
        >
            <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-300/10 blur-3xl" />
            <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300/90">Mesaj göndər</p>
                <Heading className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Formu doldur</Heading>
            </div>

            {Object.keys(errors).length > 0 ? (
                <div ref={errorSummaryRef} role="alert" tabIndex={-1} className="mt-5 rounded-2xl border border-red-400/35 bg-red-400/10 p-4 text-sm text-red-100 outline-none focus-visible:ring-2 focus-visible:ring-red-300">
                    <p className="font-semibold">Formda düzəldilməli məlumat var.</p>
                    {Object.entries(errors).map(([field, message]) => (
                        <a key={field} href={`#contact-${field}`} className="mt-2 block underline decoration-red-300/60 underline-offset-4 hover:text-white">{message}</a>
                    ))}
                </div>
            ) : null}

            <div className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2">
                        <span className="text-sm font-medium text-neutral-200">Ad soyad <span aria-hidden="true" className="text-yellow-300">*</span></span>
                        <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required minLength={CONTACT_LIMITS.name.min} maxLength={CONTACT_LIMITS.name.max} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} className={inputClassName} placeholder="Adınız" />
                        {fieldError('name')}
                    </label>
                    <label className="grid gap-2">
                        <span className="text-sm font-medium text-neutral-200">Email <span aria-hidden="true" className="text-yellow-300">*</span></span>
                        <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required minLength={CONTACT_LIMITS.email.min} maxLength={CONTACT_LIMITS.email.max} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} className={inputClassName} placeholder="email@example.com" />
                        {fieldError('email')}
                    </label>
                </div>
                <label className="grid gap-2">
                    <span className="text-sm font-medium text-neutral-200">Mövzu <span aria-hidden="true" className="text-yellow-300">*</span></span>
                    <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required minLength={CONTACT_LIMITS.subject.min} maxLength={CONTACT_LIMITS.subject.max} autoComplete="off" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'contact-subject-error' : undefined} className={inputClassName} placeholder="Layihə və ya əməkdaşlıq mövzusu" />
                    {fieldError('subject')}
                </label>
                <label className="grid gap-2">
                    <span className="text-sm font-medium text-neutral-200">Mesaj <span aria-hidden="true" className="text-yellow-300">*</span></span>
                    <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required minLength={CONTACT_LIMITS.message.min} maxLength={CONTACT_LIMITS.message.max} rows={6} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} className="resize-y rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-300/30 focus:bg-black/35" placeholder="Mesajınızı yazın..." />
                    {fieldError('message')}
                </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-neutral-400 sm:max-w-sm">Mesajınızı göndərin, ən qısa zamanda cavablandırım.</p>
                <button type="submit" disabled={isSubmitting} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-yellow-300/25 bg-gradient-to-r from-yellow-300 to-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_16px_34px_rgba(250,204,21,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(250,204,21,0.28)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                    {isSubmitting ? <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" /> : null}
                    <span>{isSubmitting ? 'Göndərilir...' : 'Göndər'}</span>
                    {!isSubmitting ? <Send aria-hidden="true" className="h-4 w-4" /> : null}
                </button>
            </div>
        </motion.form>
    );
}

export default ContactForm;
