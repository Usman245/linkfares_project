import Link from "next/link";
import React, { useState } from "react";

const PackagesDetailMiniBanner = () => {
  const [showFullText, setShowFullText] = useState(false);

  const fullText =
    "The Maldives is a beautiful string of coral islands located in the Indian Ocean. It is famous for its stunning beaches, crystal-clear waters, and luxurious resorts. With abundant marine life, vibrant coral reefs, and a unique cultural heritage, it’s an ideal destination for both relaxation and adventure seekers. Tourists enjoy snorkeling, scuba diving, and underwater experiences unlike any other. Explore the Maldives for a perfect mix of relaxation and thrilling activities.";

  const truncatedText = fullText.slice(0, 100) + "...";

  return (
    <div className="container my-12">
      <div className="bg-[#F5F5F5] text-black border border-[#D9D9D9] rounded py-2 px-4 gap-2">
        <h1 className="text-base font-bold font-reemkufi">
          Maldives Tour Packages
        </h1>
        <p className="text-base font-normal inset-0">
          {showFullText ? fullText : truncatedText}
          <button
            onClick={() => setShowFullText(!showFullText)}
            className="text-blue-400 ml-2"
          >
            {showFullText ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default PackagesDetailMiniBanner;
