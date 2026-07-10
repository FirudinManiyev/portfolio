export interface Education {
    id: number;
    institution: string;
    major: string;
    date: string;
    image: string;
    description: string;
}

export const education: Education[] = [
    {
        id: 1,
        institution: "Azərbaycan Memarlıq və İnşaat Universiteti",
        major: "İnformasiya Texnologiyaları",
        date: "2023 - 2027",
        image: "/images/education/azmiu.jpg",
        description:
            "İnformasiya Texnologiyaları ixtisası üzrə təhsil alıram. Proqramlaşdırma, verilənlər bazası, şəbəkələr və informasiya sistemləri sahələrində biliklər əldə etmişəm.",
    },
    {
        id: 2,
        institution: "Div Academy",
        major: "Frontend Development",
        date: "2024 – 2025",
        image: "/images/education/div-academy.jpeg",
        description:
            "HTML, CSS, JavaScript, TypeScript, React və müasir frontend texnologiyaları üzrə praktiki təlim proqramını tamamlamışam.",
    },
    {
        id: 3,
        institution: "Code Academy",
        major: "Software Engineering",
        date: "2025 – 2026",
        image: "/images/education/code-academy.jpg",
        description:
            "Proqram təminatının hazırlanması və komanda işi üzrə praktiki təcrübə qazanmışam.",
    },
    {
        id: 4,
        institution: "Holberton School",
        major: "Full Stack Web Specialization",
        date: "2025 – 2026",
        image: "/images/education/holberton_school.jpg",
        description:
            "Proqram təminatının hazırlanması və komanda işi üzrə praktiki təcrübə qazanmışam.",
    },
];