import { Card } from "@/components/ui/card";
import { Brain, Bot, ChartBar, Database, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Modelos preditivos avançados que aprendem com seus dados para otimizar processos e decisões.",
    },
    {
      icon: Bot,
      title: "Chatbots & Assistentes",
      description: "Atendimento automatizado inteligente 24/7 com processamento de linguagem natural.",
    },
    {
      icon: ChartBar,
      title: "Análise de Dados",
      description: "Transforme dados brutos em insights acionáveis com visualizações inteligentes.",
    },
    {
      icon: Database,
      title: "Big Data & IA",
      description: "Processamento e análise de grandes volumes de dados com algoritmos de IA.",
    },
    {
      icon: Zap,
      title: "Automação de Processos",
      description: "Automatize tarefas repetitivas e aumente a produtividade com RPA e IA.",
    },
    {
      icon: Shield,
      title: "IA Segura",
      description: "Soluções com criptografia e conformidade com LGPD e padrões de segurança.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em IA para impulsionar seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 bg-card hover:bg-card/80 transition-all duration-300 border-border hover:border-primary/50 hover:shadow-glow-primary group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
