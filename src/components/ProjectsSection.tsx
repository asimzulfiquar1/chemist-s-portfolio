import { useNavigate } from "react-router-dom";
import { ArrowRight, FlaskConical, Droplets, TestTubeDiagonal } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/portfolio";

const icons = [FlaskConical, Droplets, TestTubeDiagonal];

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Projects & Research
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Applied chemistry in product development, industrial analysis, and academic research
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={project.id} delay={i * 100}>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="w-full text-left glass-card rounded-xl p-8 hover-lift group cursor-pointer h-full flex flex-col"
                >
                  <div className="p-3 rounded-xl bg-accent/10 w-fit mb-5">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-accent font-medium">
                    View Details <ArrowRight size={14} />
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
