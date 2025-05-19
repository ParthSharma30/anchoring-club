
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Celebrity {
  id: number;
  name: string;
  title: string;
  event: string;
  date: string;
  imageUrl: string;
  description: string;
}

const Celebrities = () => {
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
  
  const celebrities: Celebrity[] = [
    {
      id: 1,
      name: "Ayushmaan Khurana",
      title: "Actor, Singer & Songwriter",
      event: "Annual Cultural Festival",
      date: "February 2023",
      imageUrl: "/celebrities/ayushmann.jpg",
      description: "The Club had the honor of introducing the multi-talented Ayushmaan Khurana at our Annual Cultural Festival. Our introduction highlighted his journey from a reality show contestant to one of India's most versatile actors and musicians, known for his unconventional roles and socially relevant films."
    },
    {
      id: 2,
      name: "Armaan Malik",
      title: "Playback Singer",
      event: "Music Festival",
      date: "October 2022",
      imageUrl: "/celebrities/armaan.jpg",
      description: "Our anchors introduced the melodious Armaan Malik during the university's Music Festival. The introduction covered his rise to fame, international collaborations, and his contribution to Indian music with multiple chart-topping hits across languages."
    },
    {
      id: 3,
      name: "Javed Ali",
      title: "Playback Singer",
      event: "Classical Music Night",
      date: "August 2022",
      imageUrl: "/celebrities/javed.jpg",
      description: "The anchoring team crafted a beautiful introduction for the soulful singer Javed Ali at Classical Music Night. The introduction celebrated his mastery over classical and semi-classical genres, his versatile voice that brings depth to both romantic ballads and high-energy tracks."
    },
    {
      id: 4,
      name: "Nalayak",
      title: "Music Band",
      event: "Rock Night",
      date: "November 2023",
      imageUrl: "/celebrities/nalayak.jpg",
      description: "Our club introduced the energetic band Nalayak during Rock Night, highlighting their unique fusion of rock music with Indian classical elements, their meteoric rise in the indie music scene, and their passionate performances that resonate with young audiences."
    },
    {
      id: 5,
      name: "Shankar Mahadevan",
      title: "Composer & Playback Singer",
      event: "Annual Music Concert",
      date: "January 2023",
      imageUrl: "/celebrities/shankar.jpg",
      description: "The Anchoring Club had the prestigious opportunity to introduce the legendary musician Shankar Mahadevan at our Annual Music Concert. Our introduction celebrated his revolutionary contributions to Indian film music as part of Shankar-Ehsaan-Loy, his classical training, and his ability to blend traditional Indian music with contemporary sounds."
    },
    {
      id: 6,
      name: "Vijay Prakash",
      title: "Playback Singer",
      event: "South Indian Music Festival",
      date: "September 2022",
      imageUrl: "/celebrities/vijay.jpg",
      description: "Our anchors introduced the melodious Vijay Prakash during the South Indian Music Festival. The introduction traced his journey from classical training to becoming one of the most sought-after singers in South Indian cinema, highlighting his work with A.R. Rahman and his versatility across languages."
    },
    {
      id: 7,
      name: "GV Prakash",
      title: "Music Composer & Actor",
      event: "Tamil Music Night",
      date: "December 2022",
      imageUrl: "/celebrities/gv.png",
      description: "The club crafted an engaging introduction for GV Prakash Kumar, highlighting his dual career as an innovative music composer and talented actor. The introduction emphasized his evolution from being A.R. Rahman's keyboard player to revolutionizing Tamil film music with his own unique style."
    },
    {
      id: 8,
      name: "Pineapple Express",
      title: "Rock Band",
      event: "Rock Concert",
      date: "April 2023",
      imageUrl: "/celebrities/pineapple.jpg",
      description: "Our anchors introduced the dynamic band Pineapple Express at the university's Rock Concert. The introduction highlighted the band's unique sound, their rise in the indie music scene, and their passionate performances that combine rock elements with contemporary beats."
    },
    {
      id: 9,
      name: "Rahul Dua",
      title: "Stand-up Comedian",
      event: "Comedy Night",
      date: "March 2023",
      imageUrl: "/celebrities/rahul.jpg",
      description: "The Anchoring Club introduced the hilarious Rahul Dua during Comedy Night. The introduction charted his journey from an engineering background to becoming one of India's most popular stand-up comedians, known for his relatable everyday humor and quick wit."
    },
    {
      id: 10,
      name: "Biswa Kalyan Rath",
      title: "Stand-up Comedian & Writer",
      event: "Humor Festival",
      date: "May 2023",
      imageUrl: "/celebrities/biswa.jpg",
      description: "Our team introduced the intellectual comedian Biswa Kalyan Rath at the Humor Festival. The introduction highlighted his unique analytical style of comedy, his journey from an IIT graduate to comedy stardom, and his contributions to Indian comedy through stand-up specials and web series."
    },
    {
      id: 11,
      name: "Gurleen Pannu",
      title: "Stand-up Comedian",
      event: "Women in Comedy",
      date: "June 2023",
      imageUrl: "/celebrities/gurleen.jpg",
      description: "The club crafted an inspiring introduction for Gurleen Pannu at the Women in Comedy event. The introduction celebrated her rise in the male-dominated comedy industry, her refreshing perspective on everyday situations, and her ability to tackle social issues through humor."
    },
    {
      id: 12,
      name: "Ashish Solanki",
      title: "Stand-up Comedian",
      event: "Comedy Festival",
      date: "July 2023",
      imageUrl: "/celebrities/ashish.jpg",
      description: "Our anchors introduced the talented Ashish Solanki during the Comedy Festival. The introduction highlighted his journey in the comedy circuit, his sharp observational humor, and his ability to create laughter from relatable daily experiences."
    },
    {
      id: 13,
      name: "Gaurav Gupta",
      title: "Stand-up Comedian",
      event: "Comedy Evening",
      date: "August 2023",
      imageUrl: "/celebrities/gaurav.png",
      description: "The club welcomed Gaurav Gupta at our Comedy Evening. Our introduction highlighted his quick wit, his ability to connect with audiences through relatable situations, and his journey from corporate life to comedy stardom."
    },
    {
      id: 14,
      name: "Nishant Tanwar",
      title: "Stand-up Comedian",
      event: "Laughter Night",
      date: "September 2023",
      imageUrl: "/celebrities/nishant.jpg",
      description: "Our anchors introduced Nishant Tanwar at Laughter Night, highlighting his unique storytelling style, his observational humor, and his ability to find comedy in everyday Indian situations."
    },
    {
      id: 15,
      name: "Raunaq Rajani",
      title: "Stand-up Comedian",
      event: "Campus Comedy Fest",
      date: "October 2023",
      imageUrl: "/celebrities/raunaq.jpg",
      description: "The club crafted a fun introduction for Raunaq Rajani at the Campus Comedy Fest, highlighting his millennial humor, relatable content about urban life, and his connection with young audiences."
    },
    {
      id: 16,
      name: "Andrea Jeremiah",
      title: "Singer & Actor",
      event: "Cultural Night",
      date: "November 2023",
      imageUrl: "/celebrities/andrea.jpg",
      description: "The club introduced the versatile Andrea Jeremiah at Cultural Night. Our introduction celebrated her multifaceted career as a singer, actor, and musician, highlighting her contributions to South Indian cinema and music."
    },
    {
      id: 17,
      name: "Kenny Sebastian",
      title: "Stand-up Comedian",
      event: "Annual Comedy Show",
      date: "December 2023",
      imageUrl: "/celebrities/kenny.jpg",
      description: "Our anchors introduced Kenny Sebastian at the Annual Comedy Show, highlighting his unique observational comedy, musical talents, and his journey from YouTuber to one of India's most loved comedians."
    },
    {
      id: 18,
      name: "Shreya Ghoshal",
      title: "Playback Singer",
      event: "Music Symposium",
      date: "January 2024",
      imageUrl: "/celebrities/shreya.jpg",
      description: "The club had the honor of introducing the melodious Shreya Ghoshal at our Music Symposium. The introduction traced her journey from a reality show winner to becoming one of India's most celebrated playback singers, with numerous awards and accolades."
    },
    {
      id: 19,
      name: "Jonita Gandhi",
      title: "Playback Singer",
      event: "Fusion Music Festival",
      date: "February 2024",
      imageUrl: "/celebrities/jonita.jpg",
      description: "Our anchors introduced the versatile Jonita Gandhi at the Fusion Music Festival. The introduction highlighted her unique journey from YouTube covers to Bollywood playback singing, and her ability to sing in multiple languages with perfect diction and feeling."
    }
  ];

  const featuredCelebrity = celebrities[18]; // Choosing Shreya Ghoshal as featured

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-anchoring-bg-dark dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            Celebrity <span className="text-anchoring-blue">Introductions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our club's prestigious opportunities to introduce notable personalities
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding dark:bg-gray-800 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg dark:text-gray-300 text-gray-700 mb-6 reveal-animation translate-y-10">
              One of the most prestigious aspects of the VIT Anchoring Club is our opportunity to introduce celebrity guests and notable personalities at various university events. These introductions require extensive research, eloquent delivery, and professional stage presence - skills that our club takes pride in developing.
            </p>
            <p className="text-lg dark:text-gray-300 text-gray-700 reveal-animation translate-y-10">
              Below are some of the distinguished personalities our members have had the honor to introduce on stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {celebrities.map((celebrity, index) => (
              <Card 
                key={celebrity.id} 
                className="border-none shadow-lg overflow-hidden reveal-animation translate-y-10 dark:bg-gray-900"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={celebrity.imageUrl} 
                    alt={celebrity.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-1">{celebrity.name}</h3>
                  <p className="text-anchoring-blue font-medium mb-2">{celebrity.title}</p>
                  <div className="flex items-center dark:text-gray-400 text-gray-500 text-sm mb-4">
                    <span>{celebrity.event}</span>
                    <span className="mx-2">•</span>
                    <span>{celebrity.date}</span>
                  </div>
                  <p className="dark:text-gray-300 text-gray-700 text-sm line-clamp-4">{celebrity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Introduction */}
      <section className="section-padding dark:bg-gray-900 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold mb-4 reveal-animation translate-y-10">
              Featured <span className="text-anchoring-blue">Introduction</span>
            </h2>
            <div className="h-1 w-20 bg-anchoring-blue mx-auto reveal-animation translate-y-10"></div>
          </div>

          <div className="md:flex items-center max-w-5xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0 reveal-animation translate-y-10">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 relative dark:bg-gray-800 bg-gray-200">
                  <img 
                    src={featuredCelebrity.imageUrl} 
                    alt={featuredCelebrity.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-anchoring-blue opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 reveal-animation translate-y-10">
              <h3 className="text-2xl font-montserrat font-bold mb-4">{featuredCelebrity.name} Introduction</h3>
              <p className="dark:text-gray-300 text-gray-700 mb-4">
                Watch as our club member delivers a powerful and respectful introduction for {featuredCelebrity.name}, highlighting her journey from a reality show winner to one of India's most celebrated playback singers, with numerous awards and accolades.
              </p>
              <p className="dark:text-gray-300 text-gray-700 mb-4">
                This introduction earned special recognition from {featuredCelebrity.name} herself, who complimented the precise research and elegant delivery.
              </p>
              <div className="flex items-center dark:text-gray-400 text-gray-500 text-sm">
                <span>{featuredCelebrity.event}</span>
                <span className="mx-2">•</span>
                <span>{featuredCelebrity.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Process */}
      <section className="section-padding dark:bg-gray-800 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold mb-4 reveal-animation translate-y-10">
              Our Introduction <span className="text-anchoring-blue">Process</span>
            </h2>
            <p className="dark:text-gray-300 text-gray-700 md:max-w-xl mx-auto reveal-animation translate-y-10">
              How we prepare for celebrity introductions
            </p>
            <div className="h-1 w-20 bg-anchoring-blue mx-auto mt-4 reveal-animation translate-y-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center reveal-animation translate-y-10">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-anchoring-blue font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Research</h3>
              <p className="dark:text-gray-300 text-gray-600">
                In-depth research about the personality's achievements, background, and connection to the event theme.
              </p>
            </div>

            <div className="text-center reveal-animation translate-y-10 delay-100">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-anchoring-blue font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Script Development</h3>
              <p className="dark:text-gray-300 text-gray-600">
                Crafting an engaging, respectful, and informative introduction that captures the essence of the personality.
              </p>
            </div>

            <div className="text-center reveal-animation translate-y-10 delay-200">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-anchoring-blue font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Rehearsal</h3>
              <p className="dark:text-gray-300 text-gray-600">
                Multiple practice sessions focusing on pronunciation, pacing, emphasis, and stage presence.
              </p>
            </div>

            <div className="text-center reveal-animation translate-y-10 delay-300">
              <div className="h-14 w-14 bg-anchoring-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-anchoring-blue font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Delivery</h3>
              <p className="dark:text-gray-300 text-gray-600">
                Professional execution with confidence, respect, and appropriate formality for the occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-anchoring-bg-dark dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <svg className="h-12 w-12 text-anchoring-blue mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8v6a6 6 0 01-6 6H2v4h4a10 10 0 0010-10V8h-6zm18 0v6a6 6 0 01-6 6h-2v4h4a10 10 0 0010-10V8h-6z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-light mb-6 reveal-animation translate-y-10">
            The introduction I received from the VIT Anchoring Club was one of the most well-researched and eloquently delivered I have experienced in my many years of public speaking engagements.
          </blockquote>
          <div className="reveal-animation translate-y-10">
            <p className="font-montserrat font-semibold text-lg">Shreya Ghoshal</p>
            <p className="text-gray-400">Playback Singer & Music Icon</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Celebrities;
