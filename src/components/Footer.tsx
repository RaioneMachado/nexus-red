import { Play, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    "Navegação": ["Início", "Filmes", "Séries", "Games", "Novidades"],
    "Suporte": ["Central de Ajuda", "Contato", "FAQ", "Termos de Uso"],
    "Conta": ["Minha Conta", "Assinaturas", "Dispositivos", "Configurações"],
  };

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Facebook, href: "#" },
  ];

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] red-glow-bg opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-border">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            PRONTO PARA <span className="text-primary text-glow">COMEÇAR</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Junte-se a milhões de usuários e experimente o futuro do entretenimento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <Play className="w-5 h-5 fill-current" />
              Assinar Agora
            </Button>
            <Button variant="glass" size="xl">
              7 Dias Grátis
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="font-display text-2xl tracking-wider text-foreground">
                STREAM<span className="text-primary">X</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              A plataforma mais avançada de streaming do Brasil. Filmes, séries e games em um só lugar.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-lg text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 StreamX. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
