export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    link: string;
}

const projectImageModules = import.meta.glob<string>('../assets/images/projects/*', {
    eager: true,
    import: 'default',
});

const getProjectImage = (fileName: string) => {
    const image = projectImageModules[`../assets/images/projects/${fileName}`];

    return image ?? '';
};

export const projects: Project[] = [
    {
        id: 1,
        title: "WorldTelecom clone",
        description:
            "React, JavaScript və Tailwind CSS istifadə edilərək hazırlanmış WorldTelecomun clone saytı.",
        image: getProjectImage('worldtelecom.png'),
        date: "2025",
        link: "https://github.com/FirudinManiyev/worldtelecom",
    },
    {
        id: 2,
        title: "Recipe Finder",
        description:
            "İstifadəçilərin müxtəlif reseptləri axtara və araşdıra bildiyi müasir web tətbiqi.",
        image: getProjectImage('recipefinder.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/recipe_finder",
    },
    {
        id: 3,
        title: "QR Kod Generator",
        description:
            "İstifadəçilərin istədikləri məlumatları daxil edərək QR kodlar yaratmalarına imkan verən web tətbiqi.",
        image: getProjectImage('qrkodgenerator.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/qr_kod_app",
    },
];