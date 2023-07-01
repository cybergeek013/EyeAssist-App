import React from "react";

const Footer = () => {
  // Sample data for social links and ratings
  const socialLinks = [
    { name: "Facebook" },
    { name: "Twitter" },
    { name: "Instagram" },
  ];

  const address = "123 Eye Street, City, Country";
  const contactInfo = "info@eyeassist.com";

  // Function to generate star ratings based on the given number
  const generateStarRatings = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <footer className="bg-[--dark_green] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Social Links</h3>
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[--orange_color] transition duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400">{address}</p>
            <p className="text-gray-400">{contactInfo}</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Ratings</h3>
            <p className="text-[--orange_color]">{generateStarRatings(5)}</p>
          </div>
          <div className="text-white">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} EyeAssist. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
