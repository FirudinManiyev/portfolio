export interface Skill {
    id: number;
    name: string;
    image: string;
}

export interface SkillCategory {
    id: number;
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: 1,
        title: "Frontend Development",
        skills: [
            {
                id: 1,
                name: "HTML5",
                image: "/images/skills/html.png",
            },
            {
                id: 2,
                name: "CSS3",
                image: "/images/skills/css.png",
            },
            {
                id: 3,
                name: "JavaScript",
                image: "/images/skills/javascript.png",
            },
            {
                id: 4,
                name: "TypeScript",
                image: "/images/skills/typescript.png",
            },
            {
                id: 5,
                name: "React",
                image: "/images/skills/react.png",
            },
            {
                id: 6,
                name: "Next.js",
                image: "/images/skills/nextjs.png",
            },
            {
                id: 7,
                name: "Tailwind CSS",
                image: "/images/skills/tailwind.png",
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        skills: [
            {
                id: 8,
                name: "Node.js",
                image: "/images/skills/nodejs.png",
            },
            {
                id: 9,
                name: "NestJS",
                image: "/images/skills/nestjs.png",
            },
            {
                id: 10,
                name: "PHP",
                image: "/images/skills/php.png",
            },
            {
                id: 11,
                name: "Laravel",
                image: "/images/skills/laravel.png",
            },
        ],
    },
    {
        id: 3,
        title: "Database",
        skills: [
            {
                id: 12,
                name: "SQL Server",
                image: "/images/skills/sqlserver.png",
            },
            {
                id: 13,
                name: "SQLite",
                image: "/images/skills/sqlite.png",
            },
            {
                id: 14,
                name: "Oracle SQL",
                image: "/images/skills/oracle.png",
            },
            {
                id: 15,
                name: "Firebase",
                image: "/images/skills/firebase.png",
            },
        ],
    },
    {
        id: 4,
        title: "Mobile Development",
        skills: [
            {
                id: 16,
                name: "React Native",
                image: "/images/skills/react-native.png",
            },
            {
                id: 17,
                name: "Expo",
                image: "/images/skills/expo.png",
            },
            {
                id: 18,
                name: "NativeWind",
                image: "/images/skills/nativewind.png",
            },
        ],
    },
    {
        id: 5,
        title: "Tools & Technologies",
        skills: [
            {
                id: 19,
                name: "Git",
                image: "/images/skills/git.png",
            },
            {
                id: 20,
                name: "GitHub",
                image: "/images/skills/github.png",
            },
            {
                id: 21,
                name: "Docker",
                image: "/images/skills/docker.png",
            },
            {
                id: 22,
                name: "Postman",
                image: "/images/skills/postman.png",
            },
            {
                id: 23,
                name: "VS Code",
                image: "/images/skills/vscode.png",
            },
        ],
    },
];