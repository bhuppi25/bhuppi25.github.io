const stats = [
    {
        value: "13+",
        title: "Years Experience",
    },
    {
        value: "11",
        title: "Engineers Led",
    },
    {
        value: "20TB",
        title: "Storage Saved",
    },
    {
        value: "50%",
        title: "Issue Reduction",
    },
];

export default function Highlights() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

                {stats.map((item) => (
                    <div
                        key={item.title}
                        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
                    >
                        <h2 className="text-5xl font-bold text-blue-500">
                            {item.value}
                        </h2>

                        <p className="mt-4">
                            {item.title}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}