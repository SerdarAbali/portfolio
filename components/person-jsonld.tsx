const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://serdar.abali.fi/#person",
  name: "Serdar Abali",
  url: "https://serdar.abali.fi",
  image: "https://serdar.abali.fi/images/hero/mainimage.jpg",
  jobTitle: "Robotics Engineer",
  description:
    "Full-stack robotics engineer specializing in ROS2 autonomy, UGV platforms, mechatronics, embedded systems, and bionic prosthetics.",
  knowsAbout: [
    "Robotics",
    "ROS2",
    "UGV",
    "Bionic Hand",
    "Mechatronics",
    "Embedded Systems",
  ],
  homeLocation: {
    "@type": "Place",
    name: "Helsinki, Finland",
  },
  sameAs: [
    "https://github.com/SerdarAbali",
    "https://www.linkedin.com/in/serdar-abali/",
    "https://youtube.com/@serdar-abali",
    "https://x.com/serdar_abali",
  ],
};

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
    />
  );
}
