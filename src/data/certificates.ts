export type CertificateCategory =
    | "IT"
    | "Şəxsi İnkişaf"
    | "Digər";

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    description: string;
    category: CertificateCategory;
}

import azconHackathonImage from "../assets/images/sertifikatlar/azcon_holding_hackathon.png";
import cffHackathonImage from "../assets/images/sertifikatlar/cff_hackathon.jpeg";
import awsTrainingImage from "../assets/images/sertifikatlar/cloud_security_aws.jpg";
import codeAcademyCertificateImage from "../assets/images/sertifikatlar/codeacademy_certicate.jpeg";
import codeAcademyDiplomaImage from "../assets/images/sertifikatlar/codeacademy_diploma.jpeg";
import cyberBridgeImage from "../assets/images/sertifikatlar/cyberbridge_project.jpg";
import divAcademyDiplomaImage from "../assets/images/sertifikatlar/diploma_div_academy.jpeg";
import dizaynxSeminarImage from "../assets/images/sertifikatlar/dizaynx_seminar.png";
import excelDataPrimeImage from "../assets/images/sertifikatlar/excel_dataprime.jpg";
import frontendUdemyImage from "../assets/images/sertifikatlar/frontend_udemy.jpg";
import gitUdemyImage from "../assets/images/sertifikatlar/git_udemy.jpg";
import gsmfImage from "../assets/images/sertifikatlar/gsmf.jpg";
import holbertonHackathonImage from "../assets/images/sertifikatlar/holberton_school_hackathon.jpeg";
import itEssentialsImage from "../assets/images/sertifikatlar/it_essentials_ugur_academy.jpg";
import codeKloudWebinarImage from "../assets/images/sertifikatlar/it_vebinar_codekloud_academy.jpg";
import oracleSqlImage from "../assets/images/sertifikatlar/oracle_sql_dataprime.jpg";
import phpConferenceImage from "../assets/images/sertifikatlar/php_konf.jpg";
import seherMobilliyiImage from "../assets/images/sertifikatlar/seher_mobilliyi_telim.jpg";
import skillUpImage from "../assets/images/sertifikatlar/skill_up_secret_academy.png";
import dusuncedeyisİmage from "../assets/images/sertifikatlar/dusunceni_heyatini_deyis.jpeg";
import esasheyatImage from "../assets/images/sertifikatlar/esas_heyat_bacariqlari.jpeg";
import sexsibacariqImage from "../assets/images/sertifikatlar/sexsi_bacariqlarini_kesfet.jpeg";

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "Frontend Development Diploma",
        issuer: "Div Academy",
        date: "14-07-2025",
        image: divAcademyDiplomaImage,
        category: "IT",
        description:
            "Frontend Development proqramını uğurla tamamlayaraq HTML, CSS, JavaScript, React və müasir veb texnologiyaları üzrə biliklər əldə etmişəm.",
    },
    {
        id: 2,
        title: "AZCON Future Tech Hackathon",
        issuer: "Azcon Holding & Holberton School",
        date: "27-04-2026",
        image: azconHackathonImage,
        category: "IT",
        description:
            "AZCON Future Tech Hackathon tədbirində iştirak edərək komanda işi, innovativ düşüncə və problem həll etmə bacarıqlarımı inkişaf etdirmişəm.",
    },
    {
        id: 3,
        title: "Software Development Diploma",
        issuer: "Code Academy",
        date: "19-05-2026",
        image: codeAcademyDiplomaImage,
        category: "IT",
        description:
            "Software Development proqramını uğurla tamamlayaraq proqramlaşdırma və proqram təminatının hazırlanması üzrə praktiki biliklər qazanmışam.",
    },
    {
        id: 4,
        title: "CyberBridge Training Program",
        issuer: "CyberBridge",
        date: "10-12-2025",
        image: cyberBridgeImage,
        category: "IT",
        description:
            "Kibertəhlükəsizlik sahəsində əsas anlayışlar, təhlükəsizlik prinsipləri və praktiki yanaşmalar üzrə təlim proqramını tamamlamışam.",
    },
    {
        id: 5,
        title: "Code8 Hackathon",
        issuer: "Code Academy",
        date: "16-05-2026",
        image: cffHackathonImage,
        category: "IT",
        description:
            "Hackathon çərçivəsində komanda ilə birlikdə layihə hazırlayaraq texniki və analitik bacarıqlarımı inkişaf etdirmişəm.",
    },
    {
        id: 6,
        title: "Cloud Security Essentials",
        issuer: "AWS Training",
        date: "17-07-2024",
        image: awsTrainingImage,
        category: "IT",
        description:
            "Bulud təhlükəsizliyi, AWS xidmətləri və təhlükəsizlik yanaşmaları üzrə əsas biliklər əldə etmişəm.",
    },
    {
        id: 7,
        title: "DizaynX Seminar",
        issuer: "DizaynX",
        date: "01-03-2025",
        image: dizaynxSeminarImage,
        category: "Digər",
        description:
            "Dizayn, istifadəçi təcrübəsi və müasir rəqəmsal məhsul yanaşmaları ilə bağlı seminarda iştirak etmişəm.",
    },
    {
        id: 8,
        title: "Software Development Certificate",
        issuer: "Code Academy",
        date: "19-05-2026",
        image: codeAcademyCertificateImage,
        category: "IT",
        description:
            "Software Development proqramı üzrə əldə etdiyim bilik və bacarıqları təsdiq edən sertifikat.",
    },
    {
        id: 9,
        title: "Microsoft Excel Training",
        issuer: "DataPrime Academy",
        date: "10-09-2025",
        image: excelDataPrimeImage,
        category: "IT",
        description:
            "Microsoft Excel üzrə praktiki təlim proqramında iştirak edərək məlumatların emalı və analizi bacarıqlarımı inkişaf etdirmişəm.",
    },
    {
        id: 10,
        title: "AI4CYBER Hackathon",
        issuer: "Holberton School Azerbaijan",
        date: "24-01-2026",
        image: holbertonHackathonImage,
        category: "IT",
        description:
            "Holberton School tərəfindən təşkil olunan hackathon tədbirində iştirak etmişəm.",
    },
    {
        id: 11,
        title: "GSMF Program",
        issuer: "GSMF",
        date: "19-04-2025",
        image: gsmfImage,
        category: "Digər",
        description:
            "Peşəkar inkişaf və texnologiya yönümlü proqram çərçivəsində müxtəlif fəaliyyətlərdə iştirak etmişəm.",
    },
    {
        id: 12,
        title: "Frontend Development Course",
        issuer: "Udemy",
        date: "04-07-2025",
        image: frontendUdemyImage,
        category: "IT",
        description:
            "Frontend Development kursunu tamamlayaraq HTML, CSS, JavaScript və müasir frontend texnologiyalarını öyrənmişəm.",
    },
    {
        id: 13,
        title: "Git & GitHub Course",
        issuer: "Udemy",
        date: "26-08-2025",
        image: gitUdemyImage,
        category: "IT",
        description:
            "Git və GitHub üzrə versiya nəzarəti, branch idarəetməsi və komanda işi prinsiplərini öyrənmişəm.",
    },
    {
        id: 14,
        title: "IT Essentials",
        issuer: "Uğur IT Academy",
        date: "07-09-2025",
        image: itEssentialsImage,
        category: "IT",
        description:
            "Kompüter avadanlıqları, əməliyyat sistemləri və İT əsasları üzrə təlim proqramını tamamlamışam.",
    },
    {
        id: 15,
        title: "IT Webinar",
        issuer: "CodeKloud Academy",
        date: "22-12-2024",
        image: codeKloudWebinarImage,
        category: "IT",
        description:
            "İnformasiya texnologiyaları sahəsində keçirilən vebinarda iştirak etmişəm.",
    },
    {
        id: 16,
        title: "Oracle SQL Training",
        issuer: "DataPrime Academy",
        date: "12-02-2025",
        image: oracleSqlImage,
        category: "IT",
        description:
            "Oracle SQL üzrə verilənlər bazası sorğuları, məlumatların idarə olunması və optimizasiya mövzularını öyrənmişəm.",
    },
    {
        id: 17,
        title: "PHP Conference",
        issuer: "PHP Azerbaijan",
        date: "26-10-2025",
        image: phpConferenceImage,
        category: "IT",
        description:
            "PHP və backend texnologiyaları üzrə keçirilən konfransda iştirak etmişəm.",
    },
    {
        id: 18,
        title: "Şəhər Mobilliyi Təlimi",
        issuer: "Təlim Proqramı",
        date: "15-08-2024",
        image: seherMobilliyiImage,
        category: "Digər",
        description:
            "Şəhər mobilliyi və dayanıqlı inkişaf mövzularında keçirilən təlim proqramında iştirak etmişəm.",
    },
    {
        id: 19,
        title: "Skill Up Program",
        issuer: "Secret Academy",
        date: "24-07-2024",
        image: skillUpImage,
        category: "Şəxsi İnkişaf",
        description:
            "Peşəkar və şəxsi inkişaf bacarıqlarının artırılmasına yönəlmiş Skill Up proqramını tamamlamışam.",
    },
    {
        id: 20,
        title: "Düşüncəni dəyiş, Həyatını dəyiş",
        issuer: "CAT and YUVA Center",
        date: "18-08-2019",
        image: dusuncedeyisİmage,
        category: "Şəxsi İnkişaf",
        description:
            "Düşüncə tərzini dəyişərək şəxsi və peşəkar inkişafı təşviq edən təlim proqramında iştirak etmişəm.",
    },
    {
        id: 21,
        title: "Əsas Həyat Bacarıqları",
        issuer: "UNICEF və XGE",
        date: "30-09-2022",
        image: esasheyatImage,
        category: "Şəxsi İnkişaf",
        description:
            "Əsas həyat bacarıqları üzrə təlim proqramını tamamlayaraq şəxsi inkişaf və sosial bacarıqlarımı artırmışam.",
    },
    {
        id: 22,
        title: "Şəxsi Bacarıqlarını Kəşf Et",
        issuer: "AIESEC və XGE",
        date: "20-08-2018",
        image: sexsibacariqImage,
        category: "Şəxsi İnkişaf",
        description:
            "Şəxsi bacarıqların kəşfi və inkişafı üzrə təlim proqramında iştirak edərək öz potensialımı daha yaxşı anlamışam.",
    },
];