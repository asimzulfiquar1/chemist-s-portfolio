import ScrollReveal from "@/components/ScrollReveal";
import { skillCategories, type SkillLevel } from "@/data/portfolio";

const levelColors: Record<SkillLevel, string> = {
  Expert: "text-accent",
  Medium: "text-primary",
  Beginner: "text-muted-foreground",
};

const levelLabels: Record<SkillLevel, string> = {
  Expert: "Advanced",
  Medium: "Intermediate",
  Beginner: "Basic",
};

// Generate a 1-2 letter symbol from skill name (like periodic table)
const getSymbol = (name: string): string => {
  const words = name.split(/[\s&\/()-]+/).filter(Boolean);
  if (words.length === 1) {
    return words[0].substring(0, 2);
    }
  return words.slice(0, 2).map(w => w[0]).join("");
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Skills & Tools
          </h2>
        </ScrollReveal>

        {skillCategories.map((category) => (
          <ScrollReveal key={category.title}>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 mt-8">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 mb-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass-card rounded-xl p-4 flex flex-col items-center text-center gap-1 hover:shadow-md transition-shadow"
                >
                  <span className={`text-2xl font-bold ${levelColors[skill.level]}`}>
                    {getSymbol(skill.name)}
                  </span>
                  <span className="text-xs font-medium text-foreground leading-tight">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {levelLabels[skill.level]}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
