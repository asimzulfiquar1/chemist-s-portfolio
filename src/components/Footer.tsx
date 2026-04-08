import { Mail, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-heading font-bold text-lg text-primary">MAZ<span className="text-accent">.</span></span>
          <p className="text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} Muhammad Asim Zulfiquar. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:asimzulfiquar1@gmail.com" className="p-2 rounded-lg bg-secondary hover:bg-accent/10 transition-colors">
            <Mail size={16} className="text-muted-foreground" />
          </a>
          <a href="https://www.linkedin.com/in/asim-zulfiquar/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary hover:bg-accent/10 transition-colors">
            <Linkedin size={16} className="text-muted-foreground" />
          </a>
          <a href="tel:+923024974667" className="p-2 rounded-lg bg-secondary hover:bg-accent/10 transition-colors">
            <Phone size={16} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
