import React from 'react'

const Visa = () => {
    const countries = [
        "Austria", "Belgium", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia",
        "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy",
        "Latvia", "Lithuania", "Netherlands", "Poland", "Spain"
    ];

    return (

        <div className="bg-gray-50 font-sans">
            {/* Header Section */}
            <header className="bg-green-600 text-white p-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-bold">Expert Visa Consultation Services for Europe</h1>
                    <p className="mt-4 text-lg">Helping you navigate the complexities of European visa applications with ease and confidence.</p>
                </div>
            </header>
            <div className="container">
                {/* Content Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="mt-4 text-lg text-gray-600">
                            At Linkfare we offer professional visa consultation services to help you obtain your visa for travel, study, or work in Europe. Our experienced team guides you through each step of the process, ensuring your application is handled efficiently and correctly.
                        </p>

                        <p className="mt-6 text-lg text-gray-600">
                            Whether you’re planning a short visit, long-term stay, or studying abroad, we provide tailored advice to suit your needs. Let us manage the paperwork while you focus on your journey.
                        </p>

                        <h3 className="mt-8 text-2xl font-semibold text-gray-800">Countries We Help You with</h3>
                        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-lg text-gray-600">
                            {countries.map((country, index) => (
                                <li key={index} className="p-2 bg-white shadow-md rounded-lg">{country}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Visa