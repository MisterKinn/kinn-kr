"use client";
import React, { useState } from "react";
import "./roadmap.css";

export default function FrontendRoadmap() {
    const [openNode, setOpenNode] = useState<number | null>(null);

    const toggleNode = (index: number) => {
        setOpenNode(openNode === index ? null : index);
    };

    const roadmap = [
        {
            category: "Internet",
            steps: [
                {
                    title: "How the Internet Works",
                    description:
                        "Understand the fundamentals of internet operations.",
                    details: [
                        {
                            resource: "DNS and how it works",
                            url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
                        },
                        {
                            resource: "What is a domain name",
                            url: "https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/",
                        },
                        {
                            resource: "What is hosting",
                            url: "https://www.hostinger.com/tutorials/what-is-web-hosting",
                        },
                        {
                            resource: "Cloudflare Learning",
                            url: "https://www.cloudflare.com/learning/",
                        },
                    ],
                },
                {
                    title: "HTTP Basics",
                    description: "Learn the core protocol of the web.",
                    details: [
                        {
                            resource: "HTTP methods",
                            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",
                        },
                        {
                            resource: "Status codes",
                            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
                        },
                        {
                            resource: "Headers",
                            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
                        },
                        {
                            resource: "MDN HTTP Guide",
                            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
                        },
                    ],
                },
            ],
        },
        {
            category: "HTML",
            steps: [
                {
                    title: "HTML Basics",
                    description: "The foundation of web structure.",
                    details: [
                        {
                            resource: "Semantic HTML",
                            url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_html",
                        },
                        {
                            resource: "Forms and validations",
                            url: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
                        },
                        {
                            resource: "Accessibility basics",
                            url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
                        },
                        {
                            resource: "MDN HTML Guide",
                            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                        },
                    ],
                },
            ],
        },
        {
            category: "CSS",
            steps: [
                {
                    title: "CSS Basics",
                    description: "Style and layout for web pages.",
                    details: [
                        {
                            resource: "Selectors and properties",
                            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors",
                        },
                        {
                            resource: "Box model",
                            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",
                        },
                        {
                            resource: "Positioning",
                            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning",
                        },
                        {
                            resource: "CSS-Tricks",
                            url: "https://css-tricks.com/",
                        },
                    ],
                },
                {
                    title: "Layouts",
                    description: "Create responsive and flexible layouts.",
                    details: [
                        {
                            resource: "Flexbox",
                            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
                        },
                        {
                            resource: "CSS Grid",
                            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",
                        },
                        {
                            resource: "Responsive design",
                            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
                        },
                        {
                            resource: "CSS Grid Guide",
                            url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
                        },
                    ],
                },
                {
                    title: "Advanced CSS",
                    description: "Enhance designs with advanced techniques.",
                    details: [
                        {
                            resource: "Animations",
                            url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations",
                        },
                        {
                            resource: "Transitions",
                            url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
                        },
                        {
                            resource: "CSS variables",
                            url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
                        },
                        {
                            resource: "MDN CSS Guide",
                            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                        },
                    ],
                },
            ],
        },
        {
            category: "JavaScript",
            steps: [
                {
                    title: "JavaScript Basics",
                    description: "Add interactivity to web pages.",
                    details: [
                        {
                            resource: "Syntax and operators",
                            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types",
                        },
                        {
                            resource: "Functions",
                            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
                        },
                        {
                            resource: "DOM manipulation",
                            url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
                        },
                        {
                            resource: "JavaScript.info",
                            url: "https://javascript.info/",
                        },
                    ],
                },
                {
                    title: "Advanced JavaScript",
                    description: "Master modern JavaScript features.",
                    details: [
                        {
                            resource:
                                "ES6+ features (arrow functions, destructuring)",
                            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
                        },
                        {
                            resource: "Promises and async/await",
                            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
                        },
                        {
                            resource: "Modules",
                            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
                        },
                        {
                            resource: "MDN JavaScript Guide",
                            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                        },
                    ],
                },
            ],
        },
        {
            category: "Version Control System (VCS)",
            steps: [
                {
                    title: "Git & GitHub",
                    description: "Track and collaborate on code.",
                    details: [
                        {
                            resource: "Basic commands (commit, push, pull)",
                            url: "https://git-scm.com/docs",
                        },
                        {
                            resource: "Branching and merging",
                            url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
                        },
                        {
                            resource: "GitHub workflows",
                            url: "https://docs.github.com/en/actions/learn-github-actions",
                        },
                        {
                            resource: "GitHub Guides",
                            url: "https://guides.github.com/",
                        },
                    ],
                },
            ],
        },
        {
            category: "Hosting",
            steps: [
                {
                    title: "Web Hosting Fundamentals",
                    description:
                        "Learn how to deploy and manage web applications.",
                    details: [
                        {
                            resource: "Choosing a hosting provider",
                            url: "https://www.hostinger.com/tutorials/how-to-choose-web-hosting",
                        },
                        {
                            resource: "Domain setup",
                            url: "https://www.godaddy.com/help/set-up-your-domain-16501",
                        },
                        {
                            resource: "SSL/TLS configuration",
                            url: "https://www.ssl.com/how-to/secure-website-with-ssl/",
                        },
                        {
                            resource: "Netlify Docs",
                            url: "https://docs.netlify.com/",
                        },
                    ],
                },
            ],
        },
        {
            category: "Package Managers",
            steps: [
                {
                    title: "npm & Yarn",
                    description: "Manage dependencies efficiently.",
                    details: [
                        {
                            resource: "Installing packages",
                            url: "https://docs.npmjs.com/downloading-and-installing-packages-locally",
                        },
                        {
                            resource: "Scripts and automation",
                            url: "https://docs.npmjs.com/cli/v10/using-npm/scripts",
                        },
                        {
                            resource: "Dependency management",
                            url: "https://classic.yarnpkg.com/en/docs/dependency-management/",
                        },
                        {
                            resource: "npm Docs",
                            url: "https://docs.npmjs.com/",
                        },
                    ],
                },
            ],
        },
        {
            category: "Frameworks",
            steps: [
                {
                    title: "React",
                    description: "Build component-based UIs.",
                    details: [
                        {
                            resource: "Components and hooks",
                            url: "https://react.dev/learn",
                        },
                        {
                            resource: "State management",
                            url: "https://react.dev/learn/managing-state",
                        },
                        {
                            resource: "React Router",
                            url: "https://reactrouter.com/en/main",
                        },
                        { resource: "React Docs", url: "https://react.dev/" },
                    ],
                },
                {
                    title: "Vue",
                    description: "A progressive framework for UIs.",
                    details: [
                        {
                            resource: "Reactive data binding",
                            url: "https://vuejs.org/guide/essentials/reactivity-fundamentals.html",
                        },
                        {
                            resource: "Vue components",
                            url: "https://vuejs.org/guide/essentials/component-basics.html",
                        },
                        {
                            resource: "Vue Router",
                            url: "https://router.vuejs.org/",
                        },
                        {
                            resource: "Vue Docs",
                            url: "https://vuejs.org/guide/introduction.html",
                        },
                    ],
                },
                {
                    title: "Angular",
                    description: "Enterprise-grade framework.",
                    details: [
                        {
                            resource: "TypeScript integration",
                            url: "https://angular.io/guide/typescript-configuration",
                        },
                        {
                            resource: "Dependency injection",
                            url: "https://angular.io/guide/dependency-injection",
                        },
                        {
                            resource: "Angular CLI",
                            url: "https://angular.io/cli",
                        },
                        {
                            resource: "Angular Docs",
                            url: "https://angular.io/docs",
                        },
                    ],
                },
            ],
        },
        {
            category: "Web Security",
            steps: [
                {
                    title: "Security Basics",
                    description: "Protect web applications from threats.",
                    details: [
                        {
                            resource: "HTTPS",
                            url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS",
                        },
                        {
                            resource: "CORS",
                            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
                        },
                        {
                            resource: "Content Security Policy",
                            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
                        },
                        {
                            resource: "OWASP Security Guide",
                            url: "https://owasp.org/www-project-top-ten/",
                        },
                    ],
                },
            ],
        },
        {
            category: "Type Checkers",
            steps: [
                {
                    title: "TypeScript Basics",
                    description: "Enhance JavaScript with static typing.",
                    details: [
                        {
                            resource: "Type annotations",
                            url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
                        },
                        {
                            resource: "Interfaces and types",
                            url: "https://www.typescriptlang.org/docs/handbook/2/objects.html",
                        },
                        {
                            resource: "Compilation to JavaScript",
                            url: "https://www.typescriptlang.org/docs/handbook/compiler-options.html",
                        },
                        {
                            resource: "TypeScript Docs",
                            url: "https://www.typescriptlang.org/docs/",
                        },
                    ],
                },
            ],
        },
        {
            category: "CSR (Client-Side Rendering)",
            steps: [
                {
                    title: "CSR Fundamentals",
                    description: "Build dynamic client-rendered applications.",
                    details: [
                        {
                            resource: "Single Page Applications (SPA)",
                            url: "https://developer.mozilla.org/en-US/docs/Glossary/SPA",
                        },
                        {
                            resource: "React with CSR",
                            url: "https://react.dev/learn",
                        },
                        {
                            resource: "Hydration techniques",
                            url: "https://nextjs.org/docs/advanced-features/automatic-static-optimization",
                        },
                        {
                            resource: "React CSR Guide",
                            url: "https://react.dev/learn",
                        },
                    ],
                },
            ],
        },
        {
            category: "SSR (Server-Side Rendering)",
            steps: [
                {
                    title: "SSR Frameworks",
                    description: "Improve performance and SEO.",
                    details: [
                        { resource: "Next.js", url: "https://nextjs.org/docs" },
                        { resource: "Nuxt.js", url: "https://nuxt.com/docs" },
                        { resource: "Remix", url: "https://remix.run/docs" },
                        {
                            resource: "Next.js Docs",
                            url: "https://nextjs.org/docs",
                        },
                    ],
                },
            ],
        },
        {
            category: "Mobile Apps",
            steps: [
                {
                    title: "Mobile Development with React Native",
                    description: "Create cross-platform mobile apps.",
                    details: [
                        {
                            resource: "Components and props",
                            url: "https://reactnative.dev/docs/components-and-apis",
                        },
                        {
                            resource: "Navigation",
                            url: "https://reactnavigation.org/docs/getting-started",
                        },
                        {
                            resource: "State management",
                            url: "https://reactnative.dev/docs/state",
                        },
                        {
                            resource: "React Native Docs",
                            url: "https://reactnative.dev/docs/getting-started",
                        },
                    ],
                },
            ],
        },
        {
            category: "Desktop Apps",
            steps: [
                {
                    title: "Desktop Development with Electron",
                    description:
                        "Build desktop applications using web technologies.",
                    details: [
                        {
                            resource: "Main and renderer processes",
                            url: "https://www.electronjs.org/docs/latest/tutorial/process-model",
                        },
                        {
                            resource: "Packaging apps",
                            url: "https://www.electronjs.org/docs/latest/tutorial/application-distribution",
                        },
                        {
                            resource: "Cross-platform support",
                            url: "https://www.electronjs.org/docs/latest/tutorial/supported-platforms",
                        },
                        {
                            resource: "Electron Docs",
                            url: "https://www.electronjs.org/docs",
                        },
                    ],
                },
            ],
        },
        {
            category: "Backend",
            steps: [
                {
                    title: "Backend Basics with Node.js",
                    description: "Integrate frontend with backend services.",
                    details: [
                        {
                            resource: "Express.js fundamentals",
                            url: "https://expressjs.com/en/starter/installing.html",
                        },
                        {
                            resource: "API creation",
                            url: "https://expressjs.com/en/guide/routing.html",
                        },
                        {
                            resource: "Database integration",
                            url: "https://nodejs.org/en/docs/guides/mysql/",
                        },
                        {
                            resource: "Node.js Docs",
                            url: "https://nodejs.org/en/docs/",
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="roadmap-container">
            <header className="header">
                <h1>Frontend Developer RoadMap</h1>
                <p>
                    Step by step guide to become a skilled modern frontend
                    developer in 2025
                </p>
            </header>

            <main className="mindmap">
                <div className="branches">
                    {roadmap.map((category, catIndex) => (
                        <div
                            key={catIndex}
                            className={`branch branch-${catIndex}`}
                        >
                            <div className="category-node">
                                {category.category}
                            </div>
                            <div className="nodes">
                                {category.steps.map((step, index) => {
                                    const globalIndex = catIndex * 100 + index;
                                    return (
                                        <div key={globalIndex} className="node">
                                            <div className="node-header">
                                                <h3>{step.title}</h3>
                                                <button
                                                    onClick={() =>
                                                        toggleNode(globalIndex)
                                                    }
                                                    className="toggle-btn"
                                                    aria-label={
                                                        openNode === globalIndex
                                                            ? "Collapse"
                                                            : "Expand"
                                                    }
                                                >
                                                    {openNode === globalIndex
                                                        ? "−"
                                                        : "+"}
                                                </button>
                                            </div>
                                            {openNode === globalIndex && (
                                                <div
                                                    className={`node-details ${
                                                        openNode === globalIndex
                                                            ? "open"
                                                            : ""
                                                    }`}
                                                >
                                                    <p>{step.description}</p>
                                                    <ul>
                                                        {step.details.map(
                                                            (item, idx) => (
                                                                <li key={idx}>
                                                                    <a
                                                                        href={
                                                                            item.url
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        {
                                                                            item.resource
                                                                        }
                                                                    </a>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="footer">
                <p>© 2025 Kinn. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
