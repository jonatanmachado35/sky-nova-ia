import { Card } from "@/components/ui/card";
import { Target, Users, Rocket, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Democratizar o acesso à inteligência artificial de qualidade empresarial.",
    },
    {
      icon: Users,
      title: "Time Expert",
      description: "Profissionais especializados em IA, ML e ciência de dados.",
    },
    {
      icon: Rocket,
      title: "Inovação",
      description: "Sempre na vanguarda das tecnologias de IA mais recentes.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometimento com resultados mensuráveis e satisfação do cliente.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Sobre a Sky Solution
            </h2>
            <p className="text-lg text-foreground/70 mb-6">
              Somos uma empresa pioneira em soluções de inteligência artificial, dedicada a transformar 
              negócios através da tecnologia de ponta. Nossa abordagem AI-first garante que cada solução 
              seja otimizada para máxima eficiência e resultados.
            </p>
            <p className="text-lg text-foreground/70 mb-6">
              Com anos de experiência e dezenas de projetos bem-sucedidos, combinamos expertise técnica 
              com profundo entendimento de negócios para entregar soluções que realmente fazem a diferença.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Especialistas</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 bg-card hover:bg-card/80 transition-all duration-300 border-border hover:border-primary/50 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
