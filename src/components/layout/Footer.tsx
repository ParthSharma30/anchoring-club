import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-anchoring-bg-dark dark:bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-montserrat font-bold text-xl mb-4">
              VIT <span className="text-anchoring-blue">Anchoring</span> Club
            </h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              Training students in stage anchoring and public speaking skills to excel in all walks of life.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/vit.anchoringclub/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-anchoring-blue transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/vit-anchoring-club/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-anchoring-blue transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.004-3.096 1.548 1.548 0 01.004 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/anchoring2020/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-anchoring-blue transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-anchoring-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-anchoring-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-anchoring-blue transition-colors">Media Gallery</Link>
              </li>
              <li>
                <Link to="/celebrities" className="text-gray-400 hover:text-anchoring-blue transition-colors">Celebrity Intros</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-anchoring-blue transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-anchoring-blue transition-colors">Events</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-anchoring-blue transition-colors">Membership</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-anchoring-blue transition-colors">Workshops</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-anchoring-blue transition-colors">FAQs</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-white mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>VIT University</p>
              <p>Vellore, Tamil Nadu</p>
              <p>Email: <a href="mailto:anchoring@vit.ac.in" className="text-anchoring-blue hover:underline">anchoring@vit.ac.in</a></p>
              <p>Phone: <a href="tel:+918595730083" className="text-anchoring-blue hover:underline">+91 8595730083</a></p>
              <p>Phone: <a href="tel:+917907228331" className="text-anchoring-blue hover:underline">+91 7907228331</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} VIT Anchoring Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
