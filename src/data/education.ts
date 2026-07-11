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
        major: "İnformasiya Texnologiyaları",
        date: "2023 - 2027",
        image: azmiuImage,
        description:
            "İnformasiya Texnologiyaları ixtisası üzrə təhsil alıram. Proqramlaşdırma, verilənlər bazası, şəbəkələr və informasiya sistemləri sahələrində biliklər əldə etmişəm.",
    },
    {
        id: 2,
        institution: "Div Academy",
        major: "Frontend Development",
        date: "2024 – 2025",
        image: divAcademyImage,
        description:
            "HTML, CSS, JavaScript, TypeScript, React və müasir frontend texnologiyaları üzrə praktiki təlim proqramını tamamlamışam.",
    },
    {
        id: 3,
        institution: "Code Academy",
        major: "Software Development",
        date: "2025 – 2026",
        image: codeAcademyImage,
        description:
            "Proqramlaşdırma, verilənlər bazaları, alqoritmlər və proqram təminatının hazırlanması üzrə nəzəri və praktiki biliklər əldə etmişəm.",
    },
    {
        id: 4,
        institution: "Holberton School",
        major: "Full Stack Web Specialization",
        date: "2025 – 2026",
        image: holbertonSchoolImage,
        description:
            "Frontend və backend texnologiyaları ilə tam funksional veb tətbiqlərin hazırlanması, Git əsaslı komanda işi və layihə yönümlü inkişaf qazanmışam.",
    },
];