const skillGroups = {
    Backend: [
        "Java",
        "Spring Boot",
        "Node.js",
        "Python"
    ],

    Architecture: [
        "Microservices",
        "System Design",
        "DDD",
        "Event Driven Architecture"
    ],

    Cloud: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform"
    ],

    Data: [
        "Kafka",
        "MongoDB",
        "MySQL",
        "Elasticsearch"
    ],

    Monitoring: [
        "Prometheus",
        "Grafana",
        "Elastic APM"
    ]
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    Technical Skills
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {Object.entries(skillGroups).map(
                        ([category, skills]) => (
                            <div
                                key={category}
                                className="border rounded-xl p-6"
                            >
                                <h3 className="text-xl font-semibold mb-4">
                                    {category}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        )
                    )}

                </div>
            </div>
        </section>
    );
}