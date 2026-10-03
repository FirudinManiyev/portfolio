import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfoPanel from './ContactInfoPanel';

type ContactSectionProps = {
    className?: string;
    headingLevel?: 'h1' | 'h2';
};

function ContactSection({
    className = 'mt-20 sm:mt-24 lg:mt-28',
    headingLevel = 'h2',
}: ContactSectionProps) {
    const Heading = headingLevel;
    const subheadingLevel = headingLevel === 'h1' ? 'h2' : 'h3';

    return (
        <section id="contact" aria-labelledby="contact-title" className={`relative ${className} w-full`}>
            <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-10">
                <div className="mx-auto mb-8 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <Heading id="contact-title" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-lg font-semibold uppercase tracking-[0.22em] text-yellow-300 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-8 sm:py-3.5 sm:text-xl">
                            ƏLAQƏ
                        </Heading>
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
                        <ContactInfoPanel headingLevel={subheadingLevel} />
                        <ContactForm headingLevel={subheadingLevel} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
