import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Chemistry Graduate & Industrial Chemist
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Muhammad Asim
                <span className="text-gradient block">Zulfiquar</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Motivated Chemistry professional with hands-on experience in power plant operations. 
                Skilled in industrial processes, quality control, and analytical techniques — passionate 
                about applying chemical knowledge in real-world settings.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button onClick={() => scrollTo("#projects")} className="gap-2">
                  View Projects <ArrowRight size={16} />
                </Button>
                <Button variant="outline" onClick={() => scrollTo("#contact")} className="gap-2">
                  <Mail size={16} /> Contact Me
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Download size={16} /> Download CV
                </Button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-accent/20 via-science/10 to-primary/20 flex items-center justify-center border border-border/50 overflow-hidden">
                  <div className="text-center space-y-3 p-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-accent">MA</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Your photo here</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-float">
                  <span className="text-2xl">⚗️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-science/10 border border-science/20 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <span className="text-xl">🔬</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
