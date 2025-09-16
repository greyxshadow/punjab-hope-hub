import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-400 to-orange-400 rounded-full p-2">
                <Heart className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PunarNirman Trust</h3>
                <p className="text-sm text-background/70">Punjab Flood Relief</p>
              </div>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Dedicated to providing emergency relief and rebuilding hope for flood-affected communities in Punjab. 
              Every contribution helps us save lives and restore dignity.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-background/10 hover:bg-background/20 rounded-full p-2 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-background/20 rounded-full p-2 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-background/20 rounded-full p-2 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#team" className="text-background/80 hover:text-background transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <Link to="/donate" className="text-background/80 hover:text-background transition-colors">
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-background/80">help@punarnirmantrust.org</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-background/80">
                  Relief Headquarters<br />
                  Sector 17, Chandigarh<br />
                  Punjab, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-12 p-6 bg-red-600/20 border border-red-400/30 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-red-300 mb-2">24/7 Emergency Helpline</h4>
              <p className="text-background/80">For immediate assistance during disasters</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-2xl font-bold text-red-300">1800-123-HELP</div>
              <div className="text-sm text-background/70">Toll-free nationwide</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 PunarNirman Trust. All rights reserved. | Reg. No: NGO/2024/001
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Financial Transparency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;