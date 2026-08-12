export interface ProjectRouteMetadata {
  slug: string
  title: string
  description: string
}

export const projectRouteMetadata = {
  worldTelecom: {
    slug: 'worldtelecom-clone',
    title: 'WorldTelecom Clone',
    description: 'Layihə real bir şirkət saytı olan WorldTelecom-un klonu əsasında hazırlanmışdır.',
  },
  recipeFinder: {
    slug: 'recipe-finder',
    title: 'Recipe Finder',
    description: 'İstifadəçilərin müxtəlif reseptləri axtara və araşdıra bildiyi müasir web tətbiqi.',
  },
  maniQrStudio: {
    slug: 'maniqr-studio',
    title: 'ManiQR Studio',
    description: 'İstifadəçilərin məlumatları daxil edərək QR kodlar yaratmalarına imkan verən web tətbiqi.',
  },
  maniConvert: {
    slug: 'maniconvert',
    title: 'ManiConvert',
    description: 'Müxtəlif şəkil formatlarını çevirməyə imkan verən müasir image converter web tətbiqi.',
  },
  masterSchool: {
    slug: 'masterschool-redesign',
    title: 'MasterSchool Redesign',
    description: 'MasterSchool.az üçün hazırlanmış modern və tam responsiv landing page redesign layihəsi.',
  },
  parkCinema: {
    slug: 'parkcinema-clone',
    title: 'ParkCinema Clone',
    description: 'ParkCinema saytının clone versiyası. Div Academy tərəfindən verilən aylıq imtahan layihəsi.',
  },
  portfolio: {
    slug: 'firudin-maniyev-portfolio',
    title: 'Firudin Maniyev Portfolio',
    description: 'Şəxsi portfolio saytım. Bacarıqlarımı, layihələrimi və developer kimi fəaliyyətimi təqdim edir.',
  },
  manitation: {
    slug: 'manitation-app',
    title: 'Manitation App',
    description: 'Dəvətnamələri yaratmaq və paylaşmaq üçün istifadə olunan mobil tətbiq.',
  },
  campusConnect: {
    slug: 'campusconnect-hackathon',
    title: 'CampusConnect Hackathon',
    description: 'Bir növ tələbə kabineti kimi fəaliyyət göstərən web tətbiqi, hackathon çərçivəsində hazırlanmışdır.',
  },
  maniPalette: {
    slug: 'manipalette',
    title: 'ManiPalette',
    description: 'İstifadəçilərin müxtəlif rənglər seçərək custom gradientlər yaratmasına imkan verən web tətbiqi.',
  },
  superTraders: {
    slug: 'supertraders',
    title: 'SuperTraders',
    description: 'AI-dəstəkli ticarət platforması: məhsul tövsiyəsi, iş elanları, CV analizi və maliyyə analitikası.',
  },
  maniWheel: {
    slug: 'maniwheel',
    title: 'ManiWheel',
    description: 'İstifadəçinin öz seçimlərini daxil edib təsadüfi nəticə əldə edə bildiyi interaktiv wheel-spinner.',
  },
  maniBarcode: {
    slug: 'manibarcode',
    title: 'ManiBarcode',
    description: 'Məlumatlardan barkod yaratmağa, yükləməyə və paylaşmağa imkan verən web tətbiqi.',
  },
} satisfies Record<string, ProjectRouteMetadata>

export const projectRouteList = Object.values(projectRouteMetadata)

export const getProjectRoute = (slug: string) => (
  projectRouteList.find((project) => project.slug === slug)
)

export const getProjectPath = (slug: string) => `/projects/${slug}`
