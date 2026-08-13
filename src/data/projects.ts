import { projectRouteMetadata } from './projectRoutes';

export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
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
        ...projectRouteMetadata.worldTelecom,
        longDescription: "WorldTelecom Clone real bir ecommerce şirkətinin saytının klonu əsasında hazırlanmışdır. Layihənin əsas məqsədi real bir şirkət saytının əsas UI elementlərini və istifadəçi təcrübəsini frontend texnologiyalarından istifadə edərək yenidən yaratmaq idi. Saytda məhsulların təqdimatı, xidmətlər, naviqasiya və müxtəlif kontent bölmələri hazırlanmışdır. Bu layihəni mən Div Academy tərəfindən verilmiş final tapşırıq çərçivəsində hazırlamışam. ",
        technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "framer-motion", "CSS3", "Vercel"],
        image: getProjectImage('worldtelecom.png'),
        date: "2025",
        link: "https://github.com/FirudinManiyev/worldtelecom",
        liveDemo: "https://worldtelecomclone.vercel.app",
    },
    {
        id: 2,
        ...projectRouteMetadata.recipeFinder,
        longDescription: "Recipe Finder istifadəçilərə müxtəlif yeməkləri və reseptləri axtarmaq, reseptlər haqqında ətraflı məlumat əldə etmək və uyğun yeməkləri daha rahat şəkildə tapmaq imkanı verən web tətbiqidir. Layihənin frontend hissəsində müasir və responsiv istifadəçi interfeysi hazırlanmış, backend API ilə məlumat mübadiləsi həyata keçirilmişdir. Bu layihəni mən Code Academy'nin final layihəsi olaraq təqdim etmişəm.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "C#", "ASP.NET Core", "MS SQL", "REST API", "Swagger", "JWT", "axios"],
        image: getProjectImage('recipefinder.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/recipe_finder",
    },
    {
        id: 3,
        ...projectRouteMetadata.maniQrStudio,
        longDescription: "ManiQR Studio müxtəlif məlumatlardan QR kod yaratmağa imkan verən sadə və istifadəsi rahat web tətbiqidir. İstifadəçi mətn, link və digər məlumatları daxil etdikdən sonra tətbiq həmin məlumat əsasında QR kod yaradır. Layihənin əsas məqsədi sadə, sürətli və responsiv interfeys yaratmaqdır.",
        technologies: ["React", "JavaScript", "Tailwind CSS", "React Router", "Git", "qrcode.react", "Vercel", "motion", "sonner"],
        image: getProjectImage('qrkodgenerator.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/qr_kod_app",
        liveDemo: "https://qr-kod-app-firudin.vercel.app",
    },
    {
        id: 4,
        ...projectRouteMetadata.maniConvert,
        longDescription: "ManiConvert istifadəçilərə müxtəlif şəkil formatları arasında çevirmə əməliyyatı aparmağa imkan verən frontend əsaslı web tətbiqidir. PNG, JPG, JPEG, WEBP və SVG kimi formatlarla işləyir. Fayllar brauzer daxilində emal edilir və istifadəçi çevrilmiş faylı rahat şəkildə yükləyə bilir.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "sonner", "Browser APIs", "Vercel"],
        image: getProjectImage('imageconverter.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/image_converter_firudin",
        liveDemo: "https://image-converter-firudin.vercel.app",
    },
    {
        id: 5,
        ...projectRouteMetadata.masterSchool,
        longDescription: "MasterSchool Redesign layihəsi MasterSchool.az saytından ilhamlanaraq daha müasir və istifadəçi yönümlü interfeys yaratmaq məqsədilə hazırlanmışdır. Layihədə hero section, kurslar, xidmətlər və digər UI hissələri müasir dizayn prinsiplərinə uyğun hazırlanmışdır. Bu saytı mən Millisoftda təcrübədə olarkən hazırlamışam. ",
        technologies: ["React", "TypeScript", "Tailwind CSS", "framer-motion", "Git", "i18n", "@emailjs/browser", "Vercel"],
        image: getProjectImage('masterschool.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/masterschool",
        liveDemo: "https://masterschoolfirudin.vercel.app",
    },
    {
        id: 6,
        ...projectRouteMetadata.parkCinema,
        longDescription: "ParkCinema Clone layihəsi Div Academy tərəfindən verilmiş aylıq imtahan tapşırığı çərçivəsində hazırlanmışdır. Layihənin əsas məqsədi real kino platformasının əsas UI elementlərini və istifadəçi təcrübəsini frontend texnologiyalarından istifadə edərək yenidən yaratmaq idi. Saytda filmlərin təqdimatı, kateqoriyalar, naviqasiya və müxtəlif kontent bölmələri hazırlanmışdır.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git", "Vercel"],
        image: getProjectImage('parkcinema.png'),
        date: "2025",
        link: "https://github.com/FirudinManiyev/park_cinema",
        liveDemo: "https://park-cinema-six.vercel.app",
    },
    {
        id: 7,
        ...projectRouteMetadata.portfolio,
        longDescription: "Bu portfolio saytı mənim frontend developer kimi bacarıqlarımı, hazırladığım layihələri və öyrəndiyim texnologiyaları nümayiş etdirmək məqsədilə hazırlanmışdır. Saytın əsas məqsədi şəxsi brendimi formalaşdırmaq və real layihələr üzərindən frontend development bacarıqlarımı göstərməkdir. Dizayn responsiv şəkildə hazırlanıb və müasir UI yanaşmalarından istifadə edilmişdir.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "@emailjs/browser", "Vite", "framer-motion", "Vercel", "react-hot-toast", "Swiper"],
        image: getProjectImage('portfolio.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/portfolio",
        liveDemo: "https://firudinmaniyev.vercel.app",
    },
    {
        id: 8,
        ...projectRouteMetadata.manitation,
        longDescription: "Manitation istifadəçilərə müxtəlif tədbirlər üçün rəqəmsal dəvətnamələr hazırlamağa və onları paylaşmağa imkan verən mobil tətbiq layihəsidir. Tətbiq React Native ilə hazırlanmışdır. İstifadəçi dəvətnamə məlumatlarını daxil edə, görünüşünü formalaşdıra və nəticədə əldə etdiyi dəvətnaməni paylaşa bilər.",
        technologies: ["React Native", "JavaScript", "Expo", "Git", "replit", "node.js"],
        image: getProjectImage('manitation.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/Manitation_app",
    },
    {
        id: 9,
        ...projectRouteMetadata.campusConnect,
        longDescription: "CampusConnect tələbələrin universitet və kampus həyatını daha rahat idarə etməsinə kömək etmək məqsədilə hackathon çərçivəsində hazırlanmış layihədir. Layihə komanda işi formatında hazırlanmış və müəyyən edilmiş problemə texnoloji həll təqdim etmək məqsədi daşıyır. Hackathon prosesi zamanı komanda daxilində task bölgüsü və qısa müddətdə işlək prototip hazırlanması əsas təcrübələrdən olmuşdur.",
        technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "Responsive Design"],
        image: getProjectImage('smartcampus.png'),
        date: "2026",
        link: "https://github.com/JavadShukurlu/CampusConnectHackaton",
    },
    {
        id: 10,
        ...projectRouteMetadata.maniPalette,
        longDescription: "ManiPalette istifadəçilərə müxtəlif rənglər seçərək custom gradientlər yaratmağa imkan verən interaktiv web tətbiqidir. İstifadəçi rəngləri dəyişdirə, gradient istiqamətini müəyyən edə və nəticədə yaranan CSS gradient kodunu əldə edə bilər. Layihənin əsas məqsədi rənglərlə işləməyi və React state management anlayışlarını praktiki şəkildə tətbiq etmək idi.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "uuid", "clsx", "motion", "react-colorful", "Vercel"],
        image: getProjectImage('manipalette.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/gradient_generator",
        liveDemo: "https://manipalette-gradient.vercel.app",
    },
    {
        id: 11,
        ...projectRouteMetadata.superTraders,
        longDescription: "SuperTraders AI texnologiyalarından istifadə edərək müxtəlif biznes və maliyyə proseslərini bir platformada birləşdirməyə yönəlmiş layihədir. Platformada məhsul tövsiyələri, iş elanları, CV analizi və maliyyə analitikası kimi funksiyalar nəzərdə tutulmuşdur. Layihə Holberton School tərəfindən təşkil edilmiş Buildathon çərçivəsində hazırlanmışdır və komanda işi formatında həyata keçirilmişdir.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "AI", "REST API", "Git", "axios", "framer-motion", "sonner", "railway"],
        image: getProjectImage('supertraders.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/business_ai_buildathon",
    },
    {
        id: 12,
        ...projectRouteMetadata.maniWheel,
        longDescription: "ManiWheel istifadəçilərə öz seçimlərini və ya mətnlərini daxil edərək interaktiv çarx yaratmağa və onu fırladaraq təsadüfi nəticə əldə etməyə imkan verən web tətbiqidir. İstifadəçinin daxil etdiyi məlumatlar dinamik olaraq çarxın bölmələrinə əlavə olunur. Fırlatma zamanı animasiya və təsadüfi seçim mexanizmindən istifadə olunur.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "clsx", "Git", "use-sound", "Vercel"],
        image: getProjectImage('maniwheel.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/mani_wheel",
        liveDemo: "https://maniwheel.vercel.app",
    },
    {
        id: 13,
        ...projectRouteMetadata.maniBarcode,
        longDescription: "ManiBarcode istifadəçilərə müxtəlif məlumatları daxil edərək barkod yaratmağa imkan verən sadə və funksional web tətbiqidir. İstifadəçi lazım olan məlumatı daxil etdikdən sonra tətbiq həmin məlumat əsasında barkod yaradır. Yaradılmış barkodu görüntüləmək, yükləmək və paylaşmaq mümkündür.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "JsBarcode", "Motion", "Git", "sonner", "clsx", "Browser APIs", "Vercel"],
        image: getProjectImage('manibarcode.png'),
        date: "2026",
        link: "https://github.com/FirudinManiyev/mani_barcode",
        liveDemo: "https://manibarcode.vercel.app",
    },
];

export const getProjectBySlug = (slug: string) => (
    projects.find((project) => project.slug === slug)
);
