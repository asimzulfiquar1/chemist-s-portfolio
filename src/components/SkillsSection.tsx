import ScrollReveal from "@/components/ScrollReveal";
import { skillCategories, type SkillLevel } from "@/data/portfolio";

const levelColors: Record<SkillLevel, string> = {
  Expert: "bg-accent text-accent-foreground",
  Medium: "bg-sky-light/20 text-sky",
  Beginner: "bg-secondary text-muted-foreground",
};

const SkillsSection = () => {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

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

        <ScrollReveal>
          <div className="flex flex-wrap gap-3 justify-center">
            {allSkills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card rounded-lg px-4 py-3 flex items-center gap-3"
              >
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColors[skill.level]}`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
