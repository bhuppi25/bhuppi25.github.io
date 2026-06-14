import {
    FaJava,
    FaAws,
    FaDocker,
    FaPython,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiSpringboot,
    SiApachekafka,
    SiKubernetes,
    SiTerraform,
    SiMongodb,
    SiMysql,
    SiElasticsearch,
    SiPrometheus,
    SiGrafana,
} from "react-icons/si";

const skills = [
    {
        category: "Backend",
        items: [
            { name: "Java", icon: <FaJava /> },
            { name: "Spring Boot", icon: <SiSpringboot /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Python", icon: <FaPython /> },
        ],
    },

    {
        category: "Data & Messaging",
        items: [
            { name: "Kafka", icon: <SiApachekafka /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Elasticsearch", icon: <SiElasticsearch /> },
        ],
    },

    {
        category: "Cloud & DevOps",
        items: [
            { name: "AWS", icon: <FaAws /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "Kubernetes", icon: <SiKubernetes /> },
            { name: "Terraform", icon: <SiTerraform /> },
            { name: "Git", icon: <FaGitAlt /> },
        ],
    },

    {
        category: "Observability",
        items: [
            { name: "Prometheus", icon: <SiPrometheus /> },
            { name: "Grafana", icon: <SiGrafana /> },
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="Skills"
            className="py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold mb-12">
                    Technical Expertise
                </h2>

                <div className="space-y-12">

                    {skills.map((group) => (
                        <div key={group.category}>

                            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                                {group.category}
                            </h3>

                            <div className="grid md:grid-cols-4 gap-6">

                                {group.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="
                    bg-zinc-900
                    border
                    border-zinc-800
                    rounded-3xl
                    p-6
                    hover:border-blue-500
                    hover:-translate-y-1
                    transition
                    "
                                    >
                                        <div className="text-5xl text-blue-500 mb-4">
                                            {skill.icon}
                                        </div>

                                        <h4 className="font-medium">
                                            {skill.name}
                                        </h4>
                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}