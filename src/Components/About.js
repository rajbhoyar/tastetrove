import React from "react";
import User from "./User";

const statistics = {
  restaurantPartners: 3500,
  employees: 12000,
  deliveryExecutives: 5000,
  cities: 150,
};

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-2">About Us</h1>
        <p className="text-2xl">Delivering delicious meals to your doorstep!</p>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our mission at [App Name] is to revolutionize food delivery by
            offering the fastest, most reliable service, and by partnering with
            a diverse range of local restaurants to bring you the best dining
            experiences right to your door.
          </p>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Future Scope
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            We aim to expand our services to new regions, enhance our technology
            for even faster delivery, and build more partnerships with
            restaurants to provide an ever-growing variety of meals. Our goal is
            to become the leading food delivery service across the country.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(statistics).map(([key, value]) => (
            <div
              key={key}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-2 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </h3>
              <p className="text-4xl font-extrabold text-blue-600">{value}</p>
              <p className="text-gray-600 capitalize">
                {key === "cities" ? "Cities" : key.replace(/([A-Z])/g, " $1")}
              </p>
            </div>
          ))}
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <User />
        </section>
      </main>
    </div>
  );
}

export default About;
