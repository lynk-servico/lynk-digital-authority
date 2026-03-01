import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Contato", href: "#contato" },
];

const LynkHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="inicio" className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />
      {/* Purple radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Lynk logo" className="h-9 w-auto" />
          <span className="text-xl font-bold tracking-tight text-foreground">Lynk</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity glow-purple"
        >
          Falar com especialista
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="relative z-20 md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 md:px-12 py-16 md:py-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="flex flex-col gap-6 animate-fade-in">
              <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                Agência Digital
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transformamos sua empresa em{" "}
                <span className="gradient-text">autoridade digital.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Criamos landing pages e interfaces web profissionais para comércios e empresas que
                desejam mais visibilidade no Google, mais clientes e uma presença digital sólida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="#contato"
                  className="inline-flex justify-center items-center px-7 py-4 rounded-xl text-base font-bold bg-gradient-hero text-primary-foreground hover:opacity-90 transition-all duration-300 glow-purple hover:scale-[1.02]"
                >
                  Quero meu site profissional
                </a>
                <a
                  href="#contato"
                  className="inline-flex justify-center items-center px-7 py-4 rounded-xl text-base font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  Falar com um especialista
                </a>
              </div>
            </div>

            {/* Mockup visual */}
            <div className="hidden md:flex justify-center items-center relative">
              <div className="relative w-full max-w-lg">
                {/* Glow behind mockup */}
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75" />
                {/* Browser mockup */}
                <div className="relative card-glow rounded-2xl overflow-hidden border border-border bg-card">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                    <span className="w-3 h-3 rounded-full bg-destructive/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    <div className="flex-1 mx-4 h-5 rounded bg-muted flex items-center px-2">
                      <span className="text-[10px] text-muted-foreground">lynk.com.br</span>
                    </div>
                  </div>
                  {/* Fake page content */}
                  <div className="p-6 space-y-4 bg-background min-h-[280px]">
                    <div className="h-4 rounded bg-primary/30 w-3/4" />
                    <div className="h-3 rounded bg-muted w-full" />
                    <div className="h-3 rounded bg-muted w-5/6" />
                    <div className="h-10 rounded-lg bg-gradient-hero w-40 mt-4" />
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-20 rounded-lg bg-card border border-border" />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Mobile mockup overlapping */}
                <div className="absolute -bottom-6 -right-6 w-32 card-glow rounded-2xl overflow-hidden border border-border bg-card">
                  <div className="flex items-center justify-center gap-1 px-2 py-2 bg-secondary border-b border-border">
                    <span className="w-2 h-2 rounded-full bg-primary/60" />
                  </div>
                  <div className="p-3 space-y-2 bg-background min-h-[120px]">
                    <div className="h-2 rounded bg-primary/30 w-full" />
                    <div className="h-2 rounded bg-muted w-4/5" />
                    <div className="h-6 rounded-md bg-gradient-hero w-full mt-2" />
                    <div className="h-2 rounded bg-muted w-3/4" />
                    <div className="h-2 rounded bg-muted w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LynkHeader;
