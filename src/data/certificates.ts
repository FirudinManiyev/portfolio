// src/data/certificates.ts

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    description: string;
}

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "Frontend Development Diploma",
        issuer: "Div Academy",
        date: "14-07-2025",
        image: "/images/sertifikatlar/diploma_div_academy.jpeg",
        description:
            "Frontend Development proqramını 1-ci dərəcə uğurla tamamlayaraq HTML, CSS, JavaScript, React və müasir web texnologiyaları üzrə biliklər əldə etmişəm.",
    },
    {
        id: 2,
        title: "CyberBridge Training",
        issuer: "CyberBridge",
        date: "10-12-2025",
        image: "/images/sertifikatlar/cyberbridge_project.jpg",
        description:
            "Kibertəhlükəsizlik sahəsində ümumi anlayışlar, təhlükəsizlik prinsipləri və praktiki yanaşmalar üzrə təlim proqramını tamamlamışam.",
    },
    {
        id: 3,
        title: "AZCON Future Tech Hackathon",
        issuer: "Azcon Holding & Holberton School Azerbaijan",
        date: "27-04-2026",
        image: "/images/sertifikatlar/azcon_holding_hackathon.png",
        description:
            "Holberton School Azerbaijan-da keçirilən AZCON Future Tech Hackathon-unda aktiv iştirakım və göstərdiyim töhfəyə görə təqdim olunmuş təşəkkür sertifikatı.",
    },
];