
import React, { useEffect } from "react";
import TeamSection from "@/components/TeamSection";
import { Link } from "react-router-dom";

const About = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-anchoring-bg-dark dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            About <span className="text-anchoring-blue">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about the VIT Anchoring Club and our mission to develop exceptional public speakers
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding dark:bg-gray-800 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-6 reveal-animation translate-y-10">
              Our <span className="text-anchoring-blue">Story</span>
            </h2>
            
            <div className="space-y-6 reveal-animation translate-y-10">
              <p className="dark:text-gray-300 text-gray-700">
                The VIT Anchoring Club was established in 2010 with the vision of nurturing and developing exceptional anchoring and public speaking skills among students. What began as a small group of enthusiastic speakers has grown into one of the most active and prestigious clubs on campus.
              </p>
              
              <p className="dark:text-gray-300 text-gray-700">
                Anchoring on a stage is not an easy task. It is not a cakewalk to address a large crowd, making a connection with them and at the same time wearing multiple other hats and performing other duties too. The Anchoring Club trains its members the best way to become an interesting anchor.
              </p>
              
              <p className="dark:text-gray-300 text-gray-700">
                Sessions are organized for how to engage your audience, identify your audience, use relevant examples and dialogues to which your audience can relate to and understand easily. The use of a backup plan and helps to practice until you become perfect.
              </p>
            </div>
            
            <div className="mt-12 reveal-animation translate-y-10">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-6">
                Our <span className="text-anchoring-blue">Mission</span>
              </h2>
              
              <p className="dark:text-gray-300 text-gray-700 mb-6">
                Our mission is to provide students with a platform to develop their communication skills, gain confidence in public speaking, and master the art of stage anchoring. We believe these skills are invaluable assets that will serve our members throughout their academic and professional careers.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-montserrat font-bold mb-3 text-anchoring-blue">Vision</h3>
                  <p className="dark:text-gray-300 text-gray-700">
                    To be the leading platform for developing exceptional communicators and anchors who can confidently command any stage or platform.
                  </p>
                </div>
                
                <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-montserrat font-bold mb-3 text-anchoring-blue">Values</h3>
                  <ul className="dark:text-gray-300 text-gray-700 list-disc list-inside space-y-2">
                    <li>Excellence in communication</li>
                    <li>Continuous improvement</li>
                    <li>Supportive learning environment</li>
                    <li>Professionalism</li>
                    <li>Creativity and innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding dark:bg-gray-900 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4 reveal-animation translate-y-10">
              What We <span className="text-anchoring-blue">Do</span>
            </h2>
            <div className="h-1 w-20 bg-anchoring-blue mx-auto reveal-animation translate-y-10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md reveal-animation translate-y-10">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-anchoring-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Training Sessions</h3>
              <p className="dark:text-gray-300 text-gray-700">
                Regular workshops on voice modulation, stage presence, impromptu speaking, script writing, and audience engagement.
              </p>
            </div>
            
            <div className="dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md reveal-animation translate-y-10 delay-100">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-anchoring-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Event Hosting</h3>
              <p className="dark:text-gray-300 text-gray-700">
                Our members host a variety of university events, from formal academic conferences to cultural festivals and competitions.
              </p>
            </div>
            
            <div className="dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md reveal-animation translate-y-10 delay-200">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-anchoring-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Celebrity Introductions</h3>
              <p className="dark:text-gray-300 text-gray-700">
                We introduce VIPs, guest speakers, and celebrity performers at university events, requiring thorough research and professional delivery.
              </p>
            </div>
            
            <div className="dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md reveal-animation translate-y-10">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-anchoring-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Script Writing</h3>
              <p className="dark:text-gray-300 text-gray-700">
                Developing scripts for events, ensuring smooth flow, appropriate content, and engaging presentations.
              </p>
            </div>
            
            <div className="dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md reveal-animation translate-y-10 delay-100">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-anchoring-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Competitions</h3>
              <p className="dark:text-gray-300 text-gray-700">
                Organizing and participating in various public speaking, anchoring, and debate competitions to hone skills in a competitive environment.
              </p>
            </div>
            
            <div className="dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md reveal-animation translate-y-10 delay-200">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-anchoring-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Mentorship</h3>
              <p className="dark:text-gray-300 text-gray-700">
                Senior members mentor juniors, providing personalized feedback, guidance, and support to help them improve their skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      
      {/* Join Us CTA */}
      <section className="py-16 bg-anchoring-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-6 text-white reveal-animation translate-y-10">
            Ready to Develop Your Public Speaking Skills?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto reveal-animation translate-y-10">
            Join the VIT Anchoring Club and embark on a journey to become a confident, eloquent, and impactful communicator.
          </p>
          <Link to="/contact" className="inline-block bg-white text-anchoring-blue font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors reveal-animation translate-y-10">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
