import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const CertificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cert: any = certifications.find((c: any) => c.id === id);

  if (!cert) {
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
              <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-3">
                <Trophy size={16} /> {cert.highlight}
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{cert.title}</h1>
              {cert.description && (
                <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
              )}
            </div>
          </ScrollReveal>

          {cert.image && (
            <ScrollReveal delay={100}>
              <figure className="glass-card rounded-xl overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full h-auto object-contain bg-muted/30" />
              </figure>
            </ScrollReveal>
          )}

          {cert.gallery && cert.gallery.length > 0 && (
            <div className="mt-12">
              <ScrollReveal>
                <h2 className="text-2xl font-heading font-bold mb-6">Gallery</h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-5">
                {cert.gallery.map((item: any, i: number) => (
                  <ScrollReveal key={i} delay={i * 60}>
                    <figure className="glass-card rounded-xl overflow-hidden">
                      <img src={item.src} alt={item.caption} className="w-full h-auto object-contain bg-muted/30" />
                      {item.caption && (
                        <figcaption className="text-xs text-muted-foreground p-3">{item.caption}</figcaption>
                      )}
                    </figure>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CertificationDetail;