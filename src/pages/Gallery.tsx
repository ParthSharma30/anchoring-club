
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GalleryItem {
  id: number;
  type: "event" | "workshop" | "competition";
  title: string;
  date: string;
  imageUrl: string;
}

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

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
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: "event",
      title: "Annual Cultural Fest",
      date: "March 15, 2025",
      imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      type: "workshop",
      title: "Voice Modulation Workshop",
      date: "January 20, 2025",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      type: "competition",
      title: "Inter-College Anchoring Contest",
      date: "November 5, 2024",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      type: "event",
      title: "Tech Symposium Opening",
      date: "September 12, 2024",
      imageUrl: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      type: "workshop",
      title: "Public Speaking Masterclass",
      date: "July 30, 2024",
      imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      type: "competition",
      title: "Impromptu Speaking Challenge",
      date: "June 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 7,
      type: "event",
      title: "Alumni Meet Hosting",
      date: "April 22, 2024",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 8,
      type: "workshop",
      title: "Stage Presence Training",
      date: "March 8, 2024",
      imageUrl: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 9,
      type: "competition",
      title: "Annual Anchoring Awards",
      date: "February 10, 2024",
      imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
  ];

  const openModal = (item: GalleryItem) => {
    setActiveImage(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto";
  };

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.type === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-anchoring-bg-dark dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            Media <span className="text-anchoring-purple">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A visual journey through our events, workshops, and competitions
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding dark:bg-gray-900 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="bg-gray-100 dark:bg-gray-800">
                <TabsTrigger 
                  value="all" 
                  onClick={() => setSelectedCategory("all")}
                  className="data-[state=active]:bg-anchoring-purple data-[state=active]:text-white dark:text-gray-300"
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="events" 
                  onClick={() => setSelectedCategory("event")}
                  className="data-[state=active]:bg-anchoring-purple data-[state=active]:text-white dark:text-gray-300"
                >
                  Events
                </TabsTrigger>
                <TabsTrigger 
                  value="workshops" 
                  onClick={() => setSelectedCategory("workshop")}
                  className="data-[state=active]:bg-anchoring-purple data-[state=active]:text-white dark:text-gray-300"
                >
                  Workshops
                </TabsTrigger>
                <TabsTrigger 
                  value="competitions" 
                  onClick={() => setSelectedCategory("competition")}
                  className="data-[state=active]:bg-anchoring-purple data-[state=active]:text-white dark:text-gray-300"
                >
                  Competitions
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md reveal-animation translate-y-10 dark:bg-gray-800 bg-white"
                style={{animationDelay: `${index * 100}ms`}}
                onClick={() => openModal(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-xl font-montserrat font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.date}</p>
                    <span className="mt-2 px-3 py-1 bg-anchoring-purple rounded-full text-xs uppercase">{item.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="max-w-4xl w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={activeImage.imageUrl} 
                alt={activeImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 rounded-full p-2 text-black dark:text-white hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 dark:text-white">
              <h3 className="text-2xl font-montserrat font-bold mb-2">{activeImage.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">{activeImage.date}</p>
              <span className="inline-block px-3 py-1 bg-anchoring-purple text-white rounded-full text-xs uppercase">{activeImage.type}</span>
            </div>
          </div>
        </div>
      )}

      {/* Video Gallery Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold mb-4 reveal-animation translate-y-10 dark:text-white">
              Video <span className="text-anchoring-purple">Highlights</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 md:max-w-xl mx-auto reveal-animation translate-y-10">
              Watch recordings of our best performances and events
            </p>
            <div className="h-1 w-20 bg-anchoring-purple mx-auto mt-4 reveal-animation translate-y-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal-animation translate-y-10">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-0 pb-[56.25%] relative bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* This is a placeholder for a YouTube video */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-anchoring-purple opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mt-4 dark:text-white">Annual Cultural Fest Highlights</h3>
              <p className="text-gray-600 dark:text-gray-400">Watch our talented anchors host the biggest event of the year</p>
            </div>
            
            <div className="reveal-animation translate-y-10 delay-100">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-0 pb-[56.25%] relative bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* This is a placeholder for a YouTube video */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-anchoring-purple opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mt-4 dark:text-white">Workshop Session: Voice Modulation</h3>
              <p className="text-gray-600 dark:text-gray-400">Learn techniques to improve your vocal range and projection</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
