export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    link: string;
    liveDemo?: string;
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
        liveDemo: "https://worldtelecomclone.vercel.app",
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
        title: "ManiQR Studio",
        description:
            "İstifadəçilərin istədikləri məlumatları daxil edərək QR kodlar yaratmalarına imkan verən web tətbiqi.",
        image: getProjectImage('qrkodgenerator.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/qr_kod_app",
        liveDemo: "https://qr-kod-app-firudin.vercel.app",
    },
    {
        id: 4,
        title: "ManiConvert",
        description:
            "Image Convertor olan bu web tətbiqi istifadəçilərə müxtəlif fayl formatlarını çevirməyə imkan verir. İstifadəçilər şəkilləri, sənədləri və digər faylları fərqli formatlara çevirə bilərlər.",
        image: getProjectImage('imageconverter.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/image_converter_firudin",
        liveDemo: "https://image-converter-firudin.vercel.app",
    },
    {
        id: 5,
        title: "MasterSchool redesign",
        description:
        "Bu layihə MasterSchool.az üçün hazırlanmış tək səhifəli landing page saytıdır. Sayt modern dizayn prinsiplərinə uyğun hazırlanıb və tam responsivedir.",
        image: getProjectImage('masterschool.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/masterschool",
        liveDemo: "https://masterschoolfirudin.vercel.app",
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
        liveDemo: "https://firudinmaniyev.vercel.app",
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
    {
        id: 9,
        title: "ParkCinema clone",
        description:
            "ParkCinema saytının clone versiyası. Div Academy tərəfindən verilən aylıq imtahan işidir.",
        image: getProjectImage('parkcinema.png'),
        date: "2025",
        link: "https://github.com/FirudinManiyev/park_cinema",
        liveDemo: "https://park-cinema-seven.vercel.app",
    },
    {
        id: 10,
        title: "ManiPalette",
        description:
            "Bu layihə gradient generator tətbiqidir və react ilə hazırlanmışdır. İstifadəçilərə müxtəlif gradientlər yaratmaq imkanı verir.",
        image: getProjectImage('manipalette.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/gradient_generator",
        liveDemo: "https://manipalette-gradient.vercel.app",
    },
    {
        id: 11,
        title: "ManiWheel",
        description:
            "Bu layihə çarx fırlatmaq üçün istifadə edilən bir web tətbiqidir. İstifadəçilər çarxı fırladaraq müxtəlif nəticələr əldə edə bilərlər.",
        image: getProjectImage('maniwheel.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/mani_wheel",
        liveDemo: "https://maniwheel.vercel.app/",
    },
];