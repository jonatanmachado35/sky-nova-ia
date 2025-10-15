import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar seu negócio com IA? Vamos conversar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border animate-fade-in">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">E-mail</h3>
                  <p className="text-muted-foreground">contato@skysolution.com.br</p>
                  <p className="text-muted-foreground">suporte@skysolution.com.br</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">Telefone</h3>
                  <p className="text-muted-foreground">(11) 98765-4321</p>
                  <p className="text-muted-foreground">(11) 3456-7890</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av. Paulista, 1000 - Conj. 1001<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-primary">
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Horário de Atendimento</h3>
              <p className="text-primary-foreground/90">Segunda a Sexta: 9h às 18h</p>
              <p className="text-primary-foreground/90">Suporte 24/7 disponível</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
