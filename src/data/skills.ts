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
                name: "Bootstrap",
                image: "/images/skills/bootstrap.png",
            },
            {
                id: 7,
                name: "Tailwind CSS",
                image: "/images/skills/tailwind.png",
            },
            {
                id: 8,
                name: "Material UI",
                image: "/images/skills/materialui.png",
            },
            {
                id: 9,
                name: "jQuery",
                image: "/images/skills/jquery.png",
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        skills: [
            {
                id: 10,
                name: "C#",
                image: "/images/skills/csharp.png",
            },
            {
                id: 11,
                name: "Python",
                image: "/images/skills/python.png",
            },
            {
                id: 12,
                name: "ASP.NET Core MVC",
                image: "/images/skills/aspnetcore.png",
            },
            {
                id: 13,
                name: "ASP.NET Web API",
                image: "/images/skills/webapi.png",
            },
        ],
    },
    {
        id: 3,
        title: "Database & DevOps",
        skills: [
            {
                id: 14,
                name: "Microsoft SQL Server",
                image: "/images/skills/sqlserver.png",
            },
            {
                id: 15,
                name: "MySQL",
                image: "/images/skills/mysql.png",
            },
            {
                id: 16,
                name: "Docker",
                image: "/images/skills/docker.png",
            },
            {
                id: 17,
                name: "Postman",
                image: "/images/skills/postman.png",
            },
        ],
    },
    {
        id: 4,
        title: "Tools & Platforms",
        skills: [
            {
                id: 18,
                name: "Git",
                image: "/images/skills/git.png",
            },
            {
                id: 19,
                name: "GitHub",
                image: "/images/skills/github.png",
            },
            {
                id: 20,
                name: "VS Code",
                image: "/images/skills/vscode.png",
            },
            {
                id: 21,
                name: "Visual Studio",
                image: "/images/skills/visualstudio.png",
            },
            {
                id: 22,
                name: "Figma",
                image: "/images/skills/figma.png",
            },
            {
                id: 23,
                name: "WordPress",
                image: "/images/skills/wordpress.png",
            },
            {
                id: 24,
                name: "Canva",
                image: "/images/skills/canva.png",
            },
            {
                id: 25,
                name: "CapCut",
                image: "/images/skills/capcut.png",
            },
        ],
    },
    {
        id: 5,
        title: "AI & Productivity",
        skills: [
            {
                id: 26,
                name: "OpenAI",
                image: "/images/skills/openai.png",
            },
            {
                id: 27,
                name: "Claude",
                image: "/images/skills/claude.png",
            },
            {
                id: 28,
                name: "Cursor",
                image: "/images/skills/cursor.png",
            },
            {
                id: 29,
                name: "Replit",
                image: "/images/skills/replit.png",
            },
            {
                id: 30,
                name: "Antigravity",
                image: "/images/skills/antigravity.png",
            },
            {
                id: 31,
                name: "Notion",
                image: "/images/skills/notion.png",
            },
            {
                id: 32,
                name: "ClickUp",
                image: "/images/skills/clickup.png",
            },
            {
                id: 33,
                name: "Slack",
                image: "/images/skills/slack.png",
            },
            {
                id: 34,
                name: "Codex",
                image: "/images/skills/codex.png",
            },
            {
                id: 35,
                name: "Windsurf",
                image: "/images/skills/windsurf.png",
            },
        ],
    },
];