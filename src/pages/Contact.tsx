import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Send email using a serverless function or email service
    try {
      // In a real application, this would be an API call to your backend
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would add code to send the email to anchoring@vit.ac.in
      // Using a service like EmailJS, Formspree, or a custom backend endpoint
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      
      // Clear the form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-anchoring-bg-dark dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            Contact <span className="text-anchoring-purple">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? Want to join? Reach out to us!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding dark:bg-gray-800 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-animation translate-y-10">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-6">
                Get In <span className="text-anchoring-purple">Touch</span>
              </h2>
              <p className="dark:text-gray-300 text-gray-700 mb-8">
                Whether you're interested in joining our club, have questions about our activities, or want to collaborate on an event, we'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-anchoring-purple mr-4 mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold mb-1">Email</h3>
                    <a href="mailto:anchoring@vit.ac.in" className="text-anchoring-purple hover:underline">anchoring@vit.ac.in</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-anchoring-purple mr-4 mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold mb-1">Phone</h3>
                    <p>+91 8595730083</p>
                    <p>+91 7907228331</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-anchoring-purple mr-4 mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold mb-1">Location</h3>
                    <p>VIT University, Vellore</p>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-montserrat font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/anchoring2020/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full dark:bg-gray-700 bg-gray-200 hover:bg-anchoring-purple hover:text-white flex items-center justify-center transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/vit.anchoringclub/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full dark:bg-gray-700 bg-gray-200 hover:bg-anchoring-purple hover:text-white flex items-center justify-center transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/vit-anchoring-club/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full dark:bg-gray-700 bg-gray-200 hover:bg-anchoring-purple hover:text-white flex items-center justify-center transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.004-3.096 1.548 1.548 0 01.004 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="reveal-animation translate-y-10">
              <form onSubmit={handleSubmit} className="dark:bg-gray-900 bg-white p-6 md:p-8 rounded-lg shadow-md dark:border-gray-700 border border-gray-100">
                <h2 className="text-2xl font-montserrat font-bold mb-6">
                  Send us a <span className="text-anchoring-purple">Message</span>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-anchoring-purple hover:bg-anchoring-dark-purple text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <p className="text-sm dark:text-gray-400 text-gray-500 text-center">
                    We'll get back to you within 24-48 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding dark:bg-gray-900 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4 reveal-animation translate-y-10">
              Our <span className="text-anchoring-purple">Location</span>
            </h2>
            <p className="dark:text-gray-300 text-gray-700 max-w-2xl mx-auto reveal-animation translate-y-10">
              Find us at VIT University, Vellore Campus
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md reveal-animation translate-y-10">
            <div className="w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.041079981824!2d79.15335867469304!3d12.96922318734594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1747500770413!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="VIT University Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding dark:bg-gray-800 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4 reveal-animation translate-y-10">
              Frequently Asked <span className="text-anchoring-purple">Questions</span>
            </h2>
            <p className="dark:text-gray-300 text-gray-700 max-w-2xl mx-auto reveal-animation translate-y-10">
              Find quick answers to common questions about the VIT Anchoring Club
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="dark:bg-gray-900 bg-gray-50 rounded-lg p-6 reveal-animation translate-y-10">
              <h3 className="text-lg font-montserrat font-semibold mb-2">How do I join the VIT Anchoring Club?</h3>
              <p className="dark:text-gray-300 text-gray-700">
                Membership applications are accepted at the beginning of each semester. You'll need to fill out an application form and may be invited for a short interview or audition to assess your communication skills and enthusiasm.
              </p>
            </div>
            
            <div className="dark:bg-gray-900 bg-gray-50 rounded-lg p-6 reveal-animation translate-y-10">
              <h3 className="text-lg font-montserrat font-semibold mb-2">Do I need prior anchoring experience to join?</h3>
              <p className="dark:text-gray-300 text-gray-700">
                No, we welcome members with all levels of experience. Our training programs are designed to help you develop and enhance your skills regardless of your starting point.
              </p>
            </div>
            
            <div className="dark:bg-gray-900 bg-gray-50 rounded-lg p-6 reveal-animation translate-y-10">
              <h3 className="text-lg font-montserrat font-semibold mb-2">How often does the club meet?</h3>
              <p className="dark:text-gray-300 text-gray-700">
                We typically have weekly general meetings and additional training sessions or workshops 1-2 times per month. Event preparations may require additional meetings as needed.
              </p>
            </div>
            
            <div className="dark:bg-gray-900 bg-gray-50 rounded-lg p-6 reveal-animation translate-y-10">
              <h3 className="text-lg font-montserrat font-semibold mb-2">Can I get academic credit for participating?</h3>
              <p className="dark:text-gray-300 text-gray-700">
                While club participation doesn't directly count for academic credit, members can earn activity points recognized by the university. Additionally, the skills developed are valuable for academic presentations and future career prospects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
