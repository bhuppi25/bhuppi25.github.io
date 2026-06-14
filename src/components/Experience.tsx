type Experience = {
    company: string;
    role: string;
    period: string;
    logo: string;
    highlights: string[];
};

const experiences: Experience[] = [
    {
        company: "Ola Electric",
        role: "Senior Engineering Manager / Architect",
        period: "Dec 2023 – Apr 2026",
        logo: "/companies/olaelectric.jpeg",
        highlights: [
            "Led team of 11 engineers",
            "20% dealership growth",
            "40% Kafka optimization",
            "20TB/month savings",
        ],
    },

    {
        company: "Gaana",
        role: "Engineering Manager",
        period: "Jan 2023 – Aug 2023",
        logo: "/companies/gaana.jpeg",
        highlights: [
            "Android Auto integration",
            "QR payment architecture",
        ],
    },

    {
        company: "OYO",
        role: "SDE III",
        period: "Oct 2021 – Jan 2023",
        logo: "/companies/oyo.jpeg",
        highlights: [
            "Multi-theme architecture",
            "Unified monitoring platform",
        ],
    },

    {
        company: "Gojek",
        role: "Senior Software Engineer",
        period: "Dec 2019 – Oct 2021",
        logo: "/companies/goto.jpeg",
        highlights: [
            "Bulk Pricing API",
            "AWS infrastructure",
        ],
    },

    {
        company: "Airtel Payments Bank",
        role: "Senior Software Engineer",
        period: "Jun 2018 – Dec 2019",
        logo: "/companies/airtelpayments.jpeg",
        highlights: [
            "Aadhaar OCR platform",
            "Encryption architecture",
        ],
    },

    {
        company: "App Street",
        role: "Software Engineer",
        period: "Aug 2016 – Jun 2018",
        logo: "/companies/appstreet.jpeg",
        highlights: [
            "Video processing pipeline",
            "AWS Lambda integration",
        ],
    },

    {
        company: "Twist Future Software",
        role: "Software Engineer",
        period: "Apr 2013 – Aug 2016",
        logo: "/companies/twistfuture.jpeg",
        highlights: [
            "Stock crawler",
            "Gaming server",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 px-6"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold mb-16">
                    Experience
                </h2>

                <div className="space-y-8">

                    {experiences.map((exp) => (
                        <div
                            key={exp.company}
                            className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-3xl
                p-8
                hover:border-blue-500
                transition-all
              "
                        >
                            <div className="flex gap-6">

                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="
                    h-16
                    w-16
                    rounded-xl
                    bg-white
                    p-2
                    object-contain
                  "
                                />

                                <div className="flex-1">

                                    <h3 className="text-2xl font-semibold">
                                        {exp.company}
                                    </h3>

                                    <p className="text-blue-400">
                                        {exp.role}
                                    </p>

                                    <p className="text-zinc-500">
                                        {exp.period}
                                    </p>

                                    <ul className="mt-4 space-y-2">

                                        {exp.highlights.map((item) => (
                                            <li
                                                key={item}
                                                className="text-zinc-300"
                                            >
                                                • {item}
                                            </li>
                                        ))}

                                    </ul>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}