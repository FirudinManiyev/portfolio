export interface Education {
    id: number;
    institution: string;
    major: string;
    date: string;
    image: string;
    description: string;
}

import azmiuImage from '../assets/images/education/azmiu.jpg';
import divAcademyImage from '../assets/images/education/div_academy.jpeg';
import codeAcademyImage from '../assets/images/education/code_academy.jpg';
import holbertonSchoolImage from '../assets/images/education/holberton_school.jpg';

export const education: Education[] = [
    {
        id: 1,
        institution: "Azərbaycan Memarlıq və İnşaat Universiteti",
        major: "İnformasiya Texnologiyaları - Bakalavr",
        date: "2023 - 2027",
        image: azmiuImage,
        description:
            "İnformasiya Texnologiyaları ixtisası üzrə bakalavr təhsili alıram. Təhsil müddətində proqramlaşdırma, verilənlər bazası, kompüter şəbəkələri, informasiya sistemləri, alqoritmlər və proqram təminatının hazırlanması üzrə nəzəri və praktiki biliklər əldə etmişəm. Universitet layihələri vasitəsilə problem həll etmə, analitik düşünmə və komanda ilə işləmək bacarıqlarımı inkişaf etdirmişəm.",
    },
    {
        id: 2,
        institution: "Div Academy",
        major: "Frontend Development",
        date: "2024 – 2025",
        image: divAcademyImage,
        description:
            "Frontend Development proqramını uğurla tamamlayaraq HTML, CSS, JavaScript, TypeScript, React və Tailwind CSS texnologiyalarında praktiki təcrübə qazanmışam. Təlim müddətində responsiv və müasir istifadəçi interfeysləri hazırlamış, Git və GitHub ilə versiya idarəetməsindən istifadə etmiş, real layihələr üzərində işləyərək frontend inkişaf bacarıqlarımı gücləndirmişəm.",
    },
    {
        id: 3,
        institution: "Code Academy",
        major: "Software Development",
        date: "2025 – 2026",
        image: codeAcademyImage,
        description:
            "Software Development proqramı çərçivəsində proqramlaşdırma prinsipləri, obyekt yönümlü proqramlaşdırma, verilənlər bazalarının idarə olunması və alqoritmlər üzrə biliklər əldə etmişəm. Müxtəlif praktiki tapşırıqlar və layihələr hazırlayaraq proqram təminatının planlaşdırılması, hazırlanması və test edilməsi proseslərində təcrübə qazanmışam.",
    },
    {
        id: 4,
        institution: "Holberton School",
        major: "Full Stack Web Specialization",
        date: "2025 – 2026",
        image: holbertonSchoolImage,
        description:
            "Full Stack Web Specialization proqramı çərçivəsində həm frontend, həm də backend texnologiyalarından istifadə edərək tam funksional veb tətbiqlərin hazırlanmasını öyrənmişəm. Layihə əsaslı təhsil modeli sayəsində Git ilə komanda işi, REST API inteqrasiyası, verilənlər bazaları ilə işləmək və müasir proqram təminatı inkişafı prosesləri üzrə praktiki təcrübə qazanmışam.",
    },
];