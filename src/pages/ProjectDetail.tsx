import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Target, User, Cog, BarChart3, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">Go Home</Button>
        </div>
      </div>
    );
  }

  const sections = [
    { icon: Target, title: "Objectives", items: project.objectives },
    { icon: Cog, title: "Methodology", items: project.methodology },
    { icon: BarChart3, title: "Results & Impact", items: project.results },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding pt-12">
        <div className="container mx-auto max-w-3xl">
          <Button onClick={() => navigate("/")} variant="ghost" className="mb-8 gap-2">
            <ArrowLeft size={16} /> Back to Portfolio
          </Button>

          <ScrollReveal>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">{project.title}</h1>
              <p className="text-accent font-medium mb-4">{project.tagline}</p>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="glass-card rounded-xl p-6 mb-8 flex items-center gap-3">
              <User className="text-accent" size={20} />
              <div>
                <span className="text-xs text-muted-foreground">My Role</span>
                <p className="font-heading font-semibold text-sm">{project.role}</p>
              </div>
            </div>
          </ScrollReveal>

          {sections.map((section, si) => (
            <ScrollReveal key={section.title} delay={150 + si * 50}>
              <div className="glass-card rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="text-accent" size={20} />
                  <h3 className="font-heading font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={300}>
            <div className="glass-card rounded-xl p-8 text-center">
              <Camera className="mx-auto text-muted-foreground mb-3" size={32} />
              <h3 className="font-heading font-semibold mb-2">Project Gallery</h3>
              <p className="text-sm text-muted-foreground">Photos and videos from this project will be displayed here.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
