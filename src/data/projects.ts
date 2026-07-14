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
    {
        id: 4,
        title: "ParkCinema clone",
        description:
            "ParkCinema saytının clone versiyası. Div Academy tərəfindən verilən aylıq imtahan işidir.",
        image: getProjectImage('parkcinema.png'),
        date: "2025",
        link: "https://github.com/FirudinManiyev/park_cinema",
    },
    {
        id: 5,
        title: "MasterSchool redesign",
        description:
            "Bu layihə MasterSchool.az üçün hazırlanmış tək səhifəli landing page saytıdır. Sayt modern dizayn prinsiplərinə uyğun hazırlanıb və tam responsivedir.",
        image: getProjectImage('masterschool.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/masterschool",
    },
    {
        id: 6,
        title: "CampusConnect Hackaton",
        description:
            "CampusConnect Hackaton layihəsi. Bu layihə Code Academy tərəfindən təşkil olunmuş müəyyən bir məqsəd üçün tələbələr tərəfindən hazırlanan bir layihədir.",
        image: getProjectImage('smartcampus.png'),
        date: "2026",
        link: "https://github.com/JavadShukurlu/CampusConnectHackaton",
    },
    {
        id: 7,
        title: "Firudin Maniyev portfolio",
        description:
            "Mənim portfolyo saytım. Bu layihə mən tərəfindən hazırlanmışdır və bu sayt mənim haqqımda məlumatları və layihələrimi göstərir.",
        image: getProjectImage('portfolio.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/portfolio",
    },
    {
        id: 8,
        title: "Manitation app",
        description:
            "Bu mobil app react native ilə hazırlanmışdır və dəvətnamələri düzəldib paylaşmaq üçün istifadə edilən bir tətbiqdır.",
        image: getProjectImage('manitation.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/Manitation_app",
    },
];