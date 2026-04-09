import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socialLinks = [
  { href: "https://www.facebook.com/dbfin01", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/dbfin01/", label: "Instagram", Icon: InstagramIcon },
];

const Footer = () => (
  <footer className="border-t bg-muted/30">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="DB Financial Planning" className="h-20 w-auto" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Short-term security. Long-term peace of mind.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/faqs" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Areas We Serve</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            While we're based in Cape Town, we support clients across South Africa and around the world.
          </p>
          <h4 className="font-semibold text-foreground">Compliance</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            DB Financial Planning (Pty) Ltd is a licensed Financial Services Provider.<br />
            <strong>FSP Number: 45874</strong>
          </p>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DB Financial Planning. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
