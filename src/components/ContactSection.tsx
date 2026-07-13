import { useState } from 'react';
import type { ChangeEvent, ComponentType, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    MapPin,
    MessageSquareText,
    Phone,
    Send,
} from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { contacts } from '../data/contact';
import { sendContactEmail } from '../services/emailjs';
import toast from 'react-hot-toast';

type ContactSectionProps = {
    className?: string;
};

type ContactItem = (typeof contacts)[number];

const contactIconMap: Record<string, ComponentType<{ className?: string }>> = {
    Phone,
    Email: Mail,
    Location: MapPin,
    GitHub: FaGithub,
    LinkedIn: FaLinkedin,
    Instagram: FaInstagram,
};

const initialFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

function getContactIcon(label: ContactItem['label']) {
    return contactIconMap[label] ?? MessageSquareText;
}

function ContactSection({ className = 'mt-20 sm:mt-24 lg:mt-28' }: ContactSectionProps) {
    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            await sendContactEmail(formData);
            toast.success('Mesajınız göndərildi.');
            setFormData(initialFormState);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Mesaj göndərilmədi.';
            toast.error(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className={`relative ${className}`}>
            <div className="container relative z-10 mx-auto px-6">
                <div className="mx-auto max-w-6xl mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-lg font-semibold uppercase tracking-[0.22em] text-yellow-300 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-8 sm:py-3.5 sm:text-xl">
                            ƏLAQƏ
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-neutral-400 sm:text-base"
                    >
                        Layihə, əməkdaşlıq və ya sadəcə salam vermək üçün mənimlə əlaqə saxlayın. Solda məlumatlarım, sağda isə birbaşa mesaj formu var.
                    </motion.p>

                    <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] xl:gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 lg:p-7"
                        >
                            <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-yellow-300/10 blur-3xl" />
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300/90">
                                        Məlumatlarım
                                    </p>
                                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                        Birbaşa əlaqə üçün kanallar
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {contacts.map((item) => {
                                    const Icon = getContactIcon(item.label);
                                    const isExternalLink = item.href !== '#';

                                    const content = (
                                        <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 transition duration-300 hover:border-yellow-300/25 hover:bg-black/35">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0 space-y-1">
                                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300/90">
                                                    {item.label}
                                                </p>
                                                <p className="break-words text-sm font-medium leading-6 text-white/90 sm:text-[15px]">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    );

                                    return isExternalLink ? (
                                        <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={item.label}>{content}</div>
                                    );
                                })}
                            </div>

                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, x: 18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.08 }}
                            onSubmit={handleSubmit}
                            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 lg:p-7"
                        >
                            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-300/10 blur-3xl" />
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300/90">
                                        Mesaj göndər
                                    </p>
                                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                        Formu doldur
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <label className="grid gap-2">
                                        <span className="text-sm font-medium text-neutral-200">Ad soyad</span>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-300/30 focus:bg-black/35"
                                            placeholder="Adınız"
                                        />
                                    </label>

                                    <label className="grid gap-2">
                                        <span className="text-sm font-medium text-neutral-200">Email</span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-300/30 focus:bg-black/35"
                                            placeholder="email@example.com"
                                        />
                                    </label>
                                </div>

                                <label className="grid gap-2">
                                    <span className="text-sm font-medium text-neutral-200">Mövzu</span>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-300/30 focus:bg-black/35"
                                        placeholder="Layihə və ya əməkdaşlıq mövzusu"
                                    />
                                </label>

                                <label className="grid gap-2">
                                    <span className="text-sm font-medium text-neutral-200">Mesaj</span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-300/30 focus:bg-black/35"
                                        placeholder="Mesajınızı yazın..."
                                    />
                                </label>
                            </div>

                            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs leading-6 text-neutral-400 sm:max-w-sm">
                                    Mesaj göndər ən qısa zamanda cavablandırım
                                </p>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-300/25 bg-gradient-to-r from-yellow-300 to-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_16px_34px_rgba(250,204,21,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(250,204,21,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    <span>{isSubmitting ? 'Göndərilir...' : 'Göndər'}</span>
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
