export default function About() {
    return (
        <section
            id="about"
            className="py-24 px-6"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">
                    About Me
                </h2>

                <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Engineering Manager and Software Architect with
                    13+ years of experience designing scalable,
                    distributed systems and leading high-performing
                    engineering teams.

                    I specialize in Java, Spring Boot,
                    Microservices, Kafka, AWS, Kubernetes,
                    System Design, and Event-Driven Architecture.

                    Throughout my career, I have built systems for
                    SaaS, FinTech, Mobility, E-commerce, and
                    Consumer platforms while mentoring engineers
                    and driving business outcomes.
                </p>

                <div className="grid md:grid-cols-4 gap-6 mt-12">

                    <div className="border rounded-xl p-6">
                        <h3 className="text-3xl font-bold">13+</h3>
                        <p>Years Experience</p>
                    </div>

                    <div className="border rounded-xl p-6">
                        <h3 className="text-3xl font-bold">9+</h3>
                        <p>Years Leadership</p>
                    </div>

                    <div className="border rounded-xl p-6">
                        <h3 className="text-3xl font-bold">4+</h3>
                        <p>Years Management</p>
                    </div>

                    <div className="border rounded-xl p-6">
                        <h3 className="text-3xl font-bold">11</h3>
                        <p>Engineers Led</p>
                    </div>

                </div>
            </div>
        </section>
    );
}