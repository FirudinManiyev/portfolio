export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    description: string;
}

import azconHackathonImage from '../assets/images/sertifikatlar/azcon_holding_hackathon.png';
import cyberBridgeImage from '../assets/images/sertifikatlar/cyberbridge_project.jpg';
import divAcademyDiplomaImage from '../assets/images/sertifikatlar/diploma_div_academy.jpeg';
import codeAcademyDiplomaImage from '../assets/images/sertifikatlar/codeacademy_diploma.jpeg';

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "Frontend Development Diploma",
        issuer: "Div Academy",
        date: "14-07-2025",
        image: divAcademyDiplomaImage,
        description:
            "Frontend Development proqramını 1-ci dərəcə uğurla tamamlayaraq HTML, CSS, JavaScript, React və müasir web texnologiyaları üzrə biliklər əldə etmişəm.",
    },
    {
        id: 2,
        title: "Software Development Diploma",
        issuer: "Code Academy",
        date: "19-05-2026",
        image: codeAcademyDiplomaImage,
        description:
            "Proqramlaşdırma, verilənlər bazaları, alqoritmlər və proqram təminatının hazırlanması üzrə nəzəri və praktiki biliklər əldə etmişəm.",
    },
    {
        id: 3,
        title: "AZCON Future Tech Hackathon",
        issuer: "Azcon Holding & Holberton School Azerbaijan",
        date: "27-04-2026",
        image: azconHackathonImage,
        description:
            "Holberton School Azerbaijan-da keçirilən AZCON Future Tech Hackathon-unda aktiv iştirakım və göstərdiyim töhfəyə görə təqdim olunmuş təşəkkür sertifikatı.",
    },
    {
        id: 4,
        title: "CyberBridge Training",
        issuer: "CyberBridge",
        date: "10-12-2025",
        image: cyberBridgeImage,
        description:
            "Kibertəhlükəsizlik sahəsində ümumi anlayışlar, təhlükəsizlik prinsipləri və praktiki yanaşmalar üzrə təlim proqramını tamamlamışam.",
    },
];