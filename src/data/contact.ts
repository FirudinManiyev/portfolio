import { siteProfile, socialLinks } from './site'

const getSocialLink = (label: string) => (
    socialLinks.find((link) => link.label === label)?.href ?? '#'
)

export const contacts = [
    {
        label: "Phone",
        value: siteProfile.phoneDisplay,
        href: `tel:${siteProfile.phoneValue}`,
    },
    {
        label: "Email",
        value: siteProfile.email,
        href: `mailto:${siteProfile.email}`,
    },
    {
        label: "Location",
        value: siteProfile.location,
        href: "#",
    },
    {
        label: "GitHub",
        value: "github.com/firudinmaniyev",
        href: getSocialLink('GitHub'),
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/firudin-maniyev-4843242b7/",
        href: getSocialLink('LinkedIn'),
    },
    {
        label: "Instagram",
        value: "@firudin.coder",
        href: getSocialLink('Instagram'),
    },
];
