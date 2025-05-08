export default function Mission() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold text-blue-700">Our Mission</h1>
            <p className="text-lg text-gray-600">
                Bridging healthcare gaps via preparation, monitoring, and communication.
            </p>
            {/* Key stats */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="bg-blue-50 rounded-lg p-6 shadow">
                    <div className="text-3xl font-extrabold text-blue-600">30.1</div>
                    <div className="mt-2 text-gray-700">
                        Maternal deaths per 100,000 in Oklahoma (4th highest in U.S.)
                    </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 shadow">
                    <div className="text-3xl font-extrabold text-blue-600">237K</div>
                    <div className="mt-2 text-gray-700">
                        Pilot program cost (Year 1)
                    </div>
                </div>
            </section>

            {/* Mission statement call-out */}
            <section className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600">
                <strong>“Bridge healthcare gaps via preparation, monitoring, and communication.”</strong>
            </section>

            {/* Why it matters */}
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Reduce maternal complications in underserved areas.</li>
                <li>Equip community health workers with actionable data.</li>
                <li>Empower patients with low-literacy support tools.</li>
            </ul>
        </div>
    );
}
