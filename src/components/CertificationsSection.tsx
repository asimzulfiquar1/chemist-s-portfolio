import { Trophy, Award, BadgeCheck, Medal, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { certifications } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  award: Award,
  certificate: BadgeCheck,
  medal: Medal,
  star: Star,
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Recognitions and professional development milestones
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="glass-card rounded-xl p-6 text-center hover-lift h-full">
                  <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h4 className="font-heading font-semibold text-sm mb-2">{cert.title}</h4>
                  <span className="text-xs font-medium text-accent">{cert.highlight}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
