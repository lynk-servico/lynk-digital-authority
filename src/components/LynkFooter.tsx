import { Instagram, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
                <li>
                  <a
                    href="mailto:lynk.servicos@gmail.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <Mail size={16} className="text-primary" />
                    </span>
                    lynk.servicos@gmail.com
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
        <WhatsAppIcon />
      </a>
    </>
  );
};

export default LynkFooter;

