import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { Camera, Code2, Mail, MapPin, MessageSquareText, Network, Phone } from 'lucide-react';
import { contacts } from '../data/contact';

type ContactInfoPanelProps = { headingLevel: 'h2' | 'h3' };
type ContactItem = (typeof contacts)[number];

const contactIconMap: Record<string, ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
    Phone, Email: Mail, Location: MapPin, GitHub: Code2, LinkedIn: Network, Instagram: Camera,
};

function ContactInfoPanel({ headingLevel }: ContactInfoPanelProps) {
    const Heading = headingLevel;

    return (
        <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 lg:p-7"
        >
            <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-yellow-300/10 blur-3xl" />
            <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300/90">Məlumatlarım</p>
                <Heading className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Birbaşa əlaqə üçün kanallar</Heading>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {contacts.map((item: ContactItem) => {
                    const Icon = contactIconMap[item.label] ?? MessageSquareText;
                    const hasLink = item.href !== '#';
                    const opensNewTab = item.href.startsWith('http');
                    const content = (
                        <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 transition duration-300 hover:border-yellow-300/25 hover:bg-black/35">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
                                <Icon aria-hidden={true} className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 space-y-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300/90">{item.label}</p>
                                <p className="break-words text-sm font-medium leading-6 text-white/90 sm:text-[15px]">{item.value}</p>
                            </div>
                        </div>
                    );

                    return hasLink ? (
                        <a
                            key={item.label}
                            href={item.href}
                            target={opensNewTab ? '_blank' : undefined}
                            rel={opensNewTab ? 'noopener noreferrer' : undefined}
                            className="block"
                        >
                            {content}
                        </a>
                    ) : <div key={item.label}>{content}</div>;
                })}
            </div>
        </motion.div>
    );
}

export default ContactInfoPanel;
