import { Instagram, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const LynkFooter = () => {
  const waLink = "https://wa.me/5519936197548?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Lynk.";

  return (
    <>
      {/* Footer */}
      <footer id="contato" className="bg-[hsl(0,0%,3%)] border-t border-border">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <a href="#inicio" className="flex items-center gap-2 w-fit">
                <img src={logo} alt="Lynk" className="h-8 w-auto" />
                <span className="text-xl font-bold text-foreground">Lynk</span>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lynk é uma empresa especializada na criação de landing pages e interfaces web modernas
                para negócios que desejam crescer no ambiente digital.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-5">Navegação</h3>
              <ul className="flex flex-col gap-3">
                {["Início", "Serviços", "Benefícios", "Contato"].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-5">Contato</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://www.instagram.com/lynk.servicos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <Instagram size={16} className="text-primary" />
                    </span>
                    @lynk.servicos
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5519936197548"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <Phone size={16} className="text-primary" />
                    </span>
                    +55 19 93619-7548
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lynk. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Criação de landing pages · Site profissional · Presença digital
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: "hsl(142 70% 45%)" }}
      >
        <MessageCircle size={26} style={{ color: "white" }} fill="white" />
      </a>
    </>
  );
};

export default LynkFooter;
