export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Personal Portfolio",
        description:
            "React, TypeScript və Tailwind CSS istifadə edilərək hazırlanmış şəxsi portfolio saytı.",
        image: "/images/projects/portfolio.png",
        date: "2026",
        link: "https://portfolio.vercel.app",
    },
    {
        id: 2,
        title: "Recipe Finder",
        description:
            "İstifadəçilərin müxtəlif reseptləri axtara və araşdıra bildiyi müasir web tətbiqi.",
        image: "/images/projects/recipe-finder.png",
        date: "2025",
        link: "https://recipe-finder.vercel.app",
    },
    {
        id: 3,
        title: "Matanat A Clone",
        description:
            "Universitet layihəsi olaraq hazırlanmış Matanat A şirkətinin veb saytının klonu.",
        image: "/images/projects/matanat-a.png",
        date: "2025",
        link: "https://matanat-a.vercel.app",
    },
];