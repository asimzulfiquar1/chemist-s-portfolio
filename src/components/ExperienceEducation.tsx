import { useNavigate } from "react-router-dom";
import { Briefcase, GraduationCap, ArrowRight, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { experiences, education } from "@/data/portfolio";

const ExperienceEducation = () => {
  const navigate = useNavigate();

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            My professional journey and academic foundation in chemistry
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Briefcase className="text-accent" size={22} />
                </div>
                <h3 className="text-xl font-heading font-semibold">Experience</h3>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <ScrollReveal key={exp.id} delay={i * 100}>
                  <button
                    onClick={() => navigate(`/experience/${exp.id}`)}
                    className="w-full text-left glass-card rounded-xl p-6 hover-lift group cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                        {exp.title}
                      </h4>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors mt-1" />
                    </div>
                    <p className="text-accent text-sm font-medium mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {exp.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{exp.summary}</p>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-science/10">
                  <GraduationCap className="text-science" size={22} />
                </div>
                <h3 className="text-xl font-heading font-semibold">Education</h3>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="glass-card rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-accent text-sm font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {edu.duration}</span>
                      {edu.gpa && <span className="font-medium text-foreground">GPA: {edu.gpa}</span>}
                    </div>
                    {edu.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.highlights.map((h) => (
                          <span key={h} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
