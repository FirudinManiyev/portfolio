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

const skillImageModules = import.meta.glob<string>('../assets/images/skills/*', {
    eager: true,
    import: 'default',
});

const getSkillImage = (fileName: string) => {
    const image = skillImageModules[`../assets/images/skills/${fileName}`];

    return image ?? '';
};

export const skillCategories: SkillCategory[] = [
    {
        id: 1,
        title: "Frontend Development",
        skills: [
            {
                id: 1,
                name: "HTML5",
                image: getSkillImage('html.jpg'),
            },
            {
                id: 2,
                name: "CSS3",
                image: getSkillImage('css.jpg'),
            },
            {
                id: 3,
                name: "JavaScript",
                image: getSkillImage('javascript.webp'),
            },
            {
                id: 4,
                name: "TypeScript",
                image: getSkillImage('typescript.png'),
            },
            {
                id: 5,
                name: "React",
                image: getSkillImage('react.png'),
            },
            {
                id: 6,
                name: "Bootstrap",
                image: getSkillImage('boostrap.png'),
            },
            {
                id: 7,
                name: "Tailwind CSS",
                image: getSkillImage('tailwind.png'),
            },
            {
                id: 8,
                name: "Material UI",
                image: getSkillImage('materialui.png'),
            },
            {
                id: 9,
                name: "jQuery",
                image: getSkillImage('jquery.png'),
            },
            {
                id: 10,
                name: "EmailJS",
                image: getSkillImage('emailjs.jpg'),
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        skills: [
            {
                id: 11,
                name: "C#",
                image: getSkillImage('csharp.png'),
            },
            {
                id: 12,
                name: "Python",
                image: getSkillImage('python.jpg'),
            },
            {
                id: 13,
                name: "ASP.NET Core MVC",
                image: getSkillImage('aspnetcore.jpg'),
            },
            {
                id: 14,
                name: "ASP.NET Web API",
                image: getSkillImage('webapi.png'),
            },
        ],
    },
    {
        id: 3,
        title: "Database & DevOps",
        skills: [
            {
                id: 15,
                name: "Microsoft SQL Server",
                image: getSkillImage('sqlserver.jpg'),
            },
            {
                id: 16,
                name: "MySQL",
                image: getSkillImage('mysql.png'),
            },
            {
                id: 17,
                name: "Docker",
                image: getSkillImage('docker.png'),
            },
            {
                id: 18,
                name: "Postman",
                image: getSkillImage('postman.png'),
            },
        ],
    },
    {
        id: 4,
        title: "Tools & Platforms",
        skills: [
            {
                id: 19,
                name: "Git",
                image: getSkillImage('git.png'),
            },
            {
                id: 20,
                name: "GitHub",
                image: getSkillImage('github.png'),
            },
            {
                id: 21,
                name: "VS Code",
                image: getSkillImage('vscode.jpg'),
            },
            {
                id: 22,
                name: "WordPress",
                image: getSkillImage('wordpress.jpg'),
            },
            {
                id: 23,
                name: "Figma",
                image: getSkillImage('figma.png'),
            },
            {
                id: 24,
                name: "Visual Studio",
                image: getSkillImage('visualstudio.png'),
            },
            {
                id: 25,
                name: "Canva",
                image: getSkillImage('canva.jpg'),
            },
            {
                id: 26,
                name: "CapCut",
                image: getSkillImage('capcut.png'),
            },
            {
                id: 27,
                name: "Notepad++",
                image: getSkillImage('notepadplusplus.jpg'),
            },
        ],
    },
    {
        id: 5,
        title: "AI & Productivity",
        skills: [
            {
                id: 28,
                name: "OpenAI",
                image: getSkillImage('openai.jpg'),
            },
            {
                id: 29,
                name: "Claude",
                image: getSkillImage('claude.png'),
            },
            {
                id: 30,
                name: "Cursor",
                image: getSkillImage('cursor.jpg'),
            },
            {
                id: 31,
                name: "Replit",
                image: getSkillImage('replit.webp'),
            },
            {
                id: 32,
                name: "Antigravity",
                image: getSkillImage('antigravity.jpg'),
            },
            {
                id: 33,
                name: "Notion",
                image: getSkillImage('notion.webp'),
            },
            {
                id: 34,
                name: "ClickUp",
                image: getSkillImage('clickup.png'),
            },
            {
                id: 35,
                name: "Slack",
                image: getSkillImage('slack.png'),
            },
            {
                id: 36,
                name: "Codex",
                image: getSkillImage('codex.png'),
            },
            {
                id: 37,
                name: "Windsurf",
                image: getSkillImage('windsurf.jpg'),
            },
        ],
    },
];