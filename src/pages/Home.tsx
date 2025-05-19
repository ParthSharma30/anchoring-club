
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
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
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2940&auto=format&fit=crop" 
            alt="Anchoring Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 leading-tight text-white">
            <span className="text-anchoring-blue">Master</span> the Art of 
            <br />
            <span className="text-anchoring-blue">Public Speaking</span> & 
            <br />
            <span className="text-anchoring-blue">Stage Anchoring</span>
          </h1>
          <p className="text-lg font-inter text-gray-300 mb-8 max-w-2xl mx-auto">
            Join VIT Anchoring Club and transform your communication skills, build confidence, and become an exceptional speaker and performer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-anchoring-blue hover:bg-anchoring-dark-blue text-white px-6 py-3 rounded-md text-lg btn-primary">
              Join Us
            </Button>
            <Button variant="outline" className="border-anchoring-blue text-anchoring-blue hover:bg-anchoring-blue hover:text-white px-6 py-3 rounded-md text-lg btn-outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding dark:bg-gray-800 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 reveal-animation translate-y-10">
              About <span className="text-anchoring-purple">Anchoring</span> Club
            </h2>
            <div className="h-1 w-20 bg-anchoring-purple mx-auto reveal-animation translate-y-10"></div>
          </div>

          <div className="md:flex justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 reveal-animation translate-y-10">
              <p className="text-lg dark:text-gray-300 text-gray-700 mb-6">
                Anchoring on a stage is not an easy task. It is not a cakewalk to address a large crowd, making a connection with them and at the same time wearing multiple other hats and performing other duties too.
              </p>
              <p className="text-lg dark:text-gray-300 text-gray-700 mb-6">
                The Anchoring Club trains its members in the art of becoming an interesting and engaging anchor. We organize sessions on how to engage your audience, identify your audience, use relevant examples and dialogues to which your audience can relate to and understand easily.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-anchoring-purple text-anchoring-purple hover:bg-anchoring-purple hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="md:w-5/12 reveal-animation translate-y-10">
              <img 
                src="/images/about.JPG" 
                alt="Anchoring Club Session"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding dark:bg-gray-900 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 reveal-animation translate-y-10">
              What We <span className="text-anchoring-purple">Offer</span>
            </h2>
            <p className="dark:text-gray-300 text-gray-700 md:max-w-xl mx-auto reveal-animation translate-y-10">
              Our comprehensive training program covers all aspects of public speaking and stage anchoring
            </p>
            <div className="h-1 w-20 bg-anchoring-purple mx-auto mt-4 reveal-animation translate-y-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg reveal-animation translate-y-10 card-hover dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-anchoring-purple bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-anchoring-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Public Speaking</h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Master the fundamentals of effective public speaking, from voice modulation to audience engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg reveal-animation translate-y-10 card-hover delay-100 dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-anchoring-purple bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-anchoring-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Stage Anchoring</h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Learn how to host events, manage transitions, and keep the audience engaged throughout performances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg reveal-animation translate-y-10 card-hover delay-200 dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-anchoring-purple bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-anchoring-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Personality Development</h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Develop confidence, improvisation skills, and a charismatic stage presence through our workshops.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-anchoring-bg-dark dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 reveal-animation translate-y-10">
            Ready to become a <span className="text-anchoring-blue">Master</span> of the stage?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto reveal-animation translate-y-10">
            Join the VIT Anchoring Club today and transform your communication skills, build confidence, and become an exceptional speaker and performer.
          </p>
          <Link to="/contact">
            <Button className="bg-anchoring-blue hover:bg-anchoring-dark-blue text-white px-8 py-3 text-lg font-medium rounded-md reveal-animation translate-y-10 btn-primary">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding dark:bg-gray-800 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 reveal-animation translate-y-10">
              What Our <span className="text-anchoring-purple">Members</span> Say
            </h2>
            <div className="h-1 w-20 bg-anchoring-purple mx-auto reveal-animation translate-y-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md reveal-animation translate-y-10 dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="ml-3">
                    <p className="font-montserrat font-semibold">Rahul Sharma</p>
                    <p className="text-sm dark:text-gray-400 text-gray-500">Computer Science, 3rd Year</p>
                  </div>
                </div>
                <p className="dark:text-gray-300 text-gray-700 italic">
                  "Joining the Anchoring Club was one of the best decisions I made at VIT. The training and opportunities helped me overcome my stage fear completely."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md reveal-animation translate-y-10 delay-100 dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="ml-3">
                    <p className="font-montserrat font-semibold">Priya Patel</p>
                    <p className="text-sm dark:text-gray-400 text-gray-500">Electronics Engineering, 4th Year</p>
                  </div>
                </div>
                <p className="dark:text-gray-300 text-gray-700 italic">
                  "The techniques I learned at the club have been invaluable, not just for anchoring events but also for my academic presentations and interviews."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md reveal-animation translate-y-10 delay-200 dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="ml-3">
                    <p className="font-montserrat font-semibold">Arjun Nair</p>
                    <p className="text-sm dark:text-gray-400 text-gray-500">Business Administration, 2nd Year</p>
                  </div>
                </div>
                <p className="dark:text-gray-300 text-gray-700 italic">
                  "From a shy freshman to hosting the college's annual fest - that's the transformation the Anchoring Club brought in me. Forever grateful!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
