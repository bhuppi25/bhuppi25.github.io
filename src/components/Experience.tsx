const experiences = [
    {
        company: "Ola Electric",
        role: "Senior Engineering Manager",
        period: "2023 - 2026",
    },
    {
        company: "Gaana",
        role: "Engineering Manager",
        period: "2023",
    },
    {
        company: "OYO",
        role: "SDE III",
        period: "2021 - 2023",
    },
    {
        company: "Gojek",
        role: "Senior Software Engineer",
        period: "2019 - 2021",
    },
    {
        company: "Airtel Payments Bank",
        role: "Senior Software Engineer",
        period: "2018 - 2019",
    },
    {
        company: "App Street",
        role: "Software Engineer",
        period: "2016 - 2018",
    },
    {
        company: "Twist Future Software",
        role: "Software Engineer",
        period: "2013 - 2016",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    Experience
                </h2>

                <div className="space-y-6">

                    {experiences.map((job) => (
                        <div
                            key={job.company}
                            className="border-l-4 border-blue-500 pl-6"
                        >
                            <h3 className="text-2xl font-semibold">
                                {job.company}
                            </h3>

                            <p className="text-lg">
                                {job.role}
                            </p>

                            <p className="text-gray-500">
                                {job.period}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}