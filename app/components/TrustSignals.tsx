import React from "react";

const TrustSignals = () => {
  const trustBadges = [
    { src: "/licensed-insured.webp", alt: "Licensed & Insured" },
    { src: "/bbb-accredited.webp", alt: "BBB Accredited" },
    { src: "/5-star-reviews.webp", alt: "5-Star Reviews" },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-gray-700 text-lg font-medium">Trusted by Homeowners</h3>
        <h2 className="text-norange text-3xl font-bold mb-6">Why Choose New Force Construction?</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {trustBadges.map((badge, index) => (
            <img
              key={index}
              src={badge.src}
              alt={badge.alt}
              className="w-28 h-auto object-contain transition-transform transition-opacity duration-700 opacity-0 hover:scale-110 hover:shadow-lg"
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
