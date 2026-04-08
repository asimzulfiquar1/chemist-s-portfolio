import { FlaskConical, Microscope, Factory, Monitor } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { skillCategories, type SkillLevel } from "@/data/portfolio";

const categoryIcons: Record<string, React.ElementType> = {
  flask: FlaskConical,
  microscope: Microscope,
  industry: Factory,
  computer: Monitor,
};

const levelColors: Record<SkillLevel, string> = {
  Expert: "bg-accent text-accent-foreground",
  Medium: "bg-sky-light/20 text-sky",
  Beginner: "bg-secondary text-muted-foreground",
};

const levelWidths: Record<SkillLevel, string> = {
  Expert: "w-full",
  Medium: "w-2/3",
  Beginner: "w-1/3",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Technical proficiencies developed through academic training and industrial experience
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, ci) => {
            const Icon = categoryIcons[category.icon] || FlaskConical;
            return (
              <ScrollReveal key={category.title} delay={ci * 100}>
                <div className="glass-card rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon className="text-accent" size={20} />
                    </div>
                    <h3 className="font-heading font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColors[skill.level]}`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-secondary">
                          <div className={`h-full rounded-full bg-accent/70 transition-all duration-700 ${levelWidths[skill.level]}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
