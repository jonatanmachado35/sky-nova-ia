import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Inovação em Inteligência Artificial</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Transforme Seu Negócio <br />
          com Inteligência Artificial
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Soluções de IA de ponta para automação, análise de dados e crescimento exponencial do seu negócio
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 shadow-glow-primary">
            Começar Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
            Conhecer Soluções
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { value: "500+", label: "Projetos" },
            { value: "98%", label: "Satisfação" },
            { value: "24/7", label: "Suporte" },
            { value: "50+", label: "Clientes" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
