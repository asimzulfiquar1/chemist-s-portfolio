import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = experiences.find((e) => e.id === id);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">Go Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding pt-12">
        <div className="container mx-auto max-w-3xl">
          <Button onClick={() => navigate("/")} variant="ghost" className="mb-8 gap-2">
            <ArrowLeft size={16} /> Back to Portfolio
          </Button>

          <ScrollReveal>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">{experience.title}</h1>
              <p className="text-accent font-medium text-lg mb-3">{experience.company}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {experience.location}</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {experience.duration}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="font-heading font-semibold mb-4">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">{experience.summary}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="font-heading font-semibold mb-4">Responsibilities</h3>
              <ul className="space-y-3">
                {experience.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="font-heading font-semibold mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {experience.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-science mt-2 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="glass-card rounded-xl p-8 text-center">
              <Camera className="mx-auto text-muted-foreground mb-3" size={32} />
              <h3 className="font-heading font-semibold mb-2">Gallery</h3>
              <p className="text-sm text-muted-foreground">Photos and videos from this experience will be displayed here.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExperienceDetail;
