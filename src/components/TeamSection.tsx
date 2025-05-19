
import React, { useEffect } from "react";

interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-25 h-25 rounded-full overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-montserrat font-semibold mb-1">{name}</h3>
      <p className="text-sm dark:text-gray-400 text-gray-600">{position}</p>
    </div>
  );
};

const TeamSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal-animation");
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const teamMembers = [
    {
      name: "Vrindha Nair",
      position: "Chairperson",
      imageUrl: "/team/vrindha.jpg",
    },
    {
      name: "Parth Sharma",
      position: "Co-Chairperson",
      imageUrl: "/team/parth.jpg",
    },
    {
      name: "Shreya Sethi",
      position: "Secretary",
      imageUrl: "/team/shreya.jpg",
    },
    {
      name: "Pari Garg",
      position: "Co-Secretary",
      imageUrl: "/team/pari.jpg",
    },
    {
      name: "Ananya Shetty",
      position: "Human Resources and Collaboration head",
      imageUrl: "/team/ananya.jpg",
    },
    {
      name: "Avani Todi",
      position: "Events head",
      imageUrl: "/team/avani.jpg",
    },
    {
      name: "Armaan Budhiraja",
      position: "Publicity and Marketing head",
      imageUrl: "/team/armaan.jpg",
    },
    {
      name: "Aditya Patel",
      position: "Editorial head",
      imageUrl: "/team/patel.jpg",
    },
    {
      name: "Jagjeet Singh",
      position: "Outreach and Finance head",
      imageUrl: "/team/jagjeet.JPG",
    },
    {
      name: "Sampoora Ray",
      position: "Design head",
      imageUrl: "/team/sam.jpg",
    },
    {
      name: "Nirmit Jain",
      position: "Head Mentor",
      imageUrl: "/team/nirmit.jpg",
    },
  ];

  return (
    <section className="section-padding dark:bg-gray-800 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4 reveal-animation translate-y-10">
            Meet Our <span className="text-anchoring-blue">Team</span>
          </h2>
          <p className="dark:text-gray-300 text-gray-700 md:max-w-xl mx-auto reveal-animation translate-y-10">
            Get to know the dedicated team behind the VIT Anchoring Club
          </p>
          <div className="h-1 w-20 bg-anchoring-blue mx-auto mt-4 reveal-animation translate-y-10"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="reveal-animation translate-y-10" style={{animationDelay: `${index * 100}ms`}}>
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
