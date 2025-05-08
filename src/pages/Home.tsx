import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="space-y-12">
            <section className="bg-blue-50 rounded-lg p-8 text-center">
                <h1 className="text-5xl font-bold text-blue-700">
                    Empowering Maternal Care Anywhere
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Med2Care brings clinic-quality monitoring and support to pregnant
                    individuals in underserved areas.
                </p>
                <button className="mt-6 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">Request Demo</button>
            </section>

            {/* Features Preview */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-800">Preparation Kits</h2>
                        <p className="mt-2 text-gray-600">
                            Enrollment packages with BP cuffs, thermometers, and more to
                            get started.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-800">Remote Monitoring</h2>
                        <p className="mt-2 text-gray-600">
                            Track vitals via basic or advanced home-monitoring kits.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-800">AI Chat Support</h2>
                        <p className="mt-2 text-gray-600">
                            SMS-based chatbot offering low-literacy guidance and alerts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <Link to="/mission" className="inline-block mt-8 text-blue-600 hover:underline font-medium">
                Learn More About Our Mission →
            </Link>
        </div>
    );
}

