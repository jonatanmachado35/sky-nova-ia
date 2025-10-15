import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ShoppingCart, Heart, Briefcase, ArrowRight } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Empresas",
      description: "Otimize operações, reduza custos e aumente a produtividade com IA empresarial.",
      features: ["Automação de processos", "Análise preditiva", "Business Intelligence"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Recomendações personalizadas, previsão de demanda e otimização de preços.",
      features: ["Recomendação de produtos", "Análise de comportamento", "Gestão de estoque"],
    },
    {
      icon: Heart,
      title: "Saúde",
      description: "Diagnósticos assistidos por IA, gestão de prontuários e análise de exames.",
      features: ["Análise de imagens médicas", "Prontuários inteligentes", "Telemedicina"],
    },
    {
      icon: Briefcase,
      title: "Finanças",
      description: "Detecção de fraudes, análise de risco e consultoria financeira automatizada.",
      features: ["Prevenção de fraudes", "Credit scoring", "Robô-advisors"],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Soluções por Segmento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            IA customizada para as necessidades específicas do seu mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="p-8 bg-card hover:bg-card/80 transition-all duration-300 border-border hover:border-primary/50 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10 group">
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
