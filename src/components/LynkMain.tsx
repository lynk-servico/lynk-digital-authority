import {
  Globe,
  Layout,
  Search,
  Smartphone,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Layout, title: "Criação de Landing Pages", desc: "Páginas de alta conversão com copy estratégica." },
  { icon: Globe, title: "Desenvolvimento de Interfaces Web", desc: "Sistemas e sites completos com design moderno." },
  { icon: Search, title: "SEO Básico para Google", desc: "Estrutura otimizada para você ser encontrado." },
  { icon: Smartphone, title: "Design Responsivo", desc: "Perfeito em qualquer dispositivo, do celular ao desktop." },
  { icon: TrendingUp, title: "Foco em Conversão", desc: "Cada elemento pensado para transformar visitas em clientes." },
];

const benefits = [
  "Mais credibilidade para sua empresa",
  "Maior visibilidade no Google",
  "Canal direto de vendas",
  "Presença digital própria (sem depender apenas de redes sociais)",
  "Diferencial competitivo no mercado",
];

const steps = [
  { num: "01", title: "Entendemos seu negócio", desc: "Analisamos seu mercado, público e objetivos." },
  { num: "02", title: "Criamos o design estratégico", desc: "Layout pensado para converter visitantes em clientes." },
  { num: "03", title: "Desenvolvemos sua landing page", desc: "Código limpo, rápido e responsivo." },
  { num: "04", title: "Publicamos e entregamos", desc: "Seu site no ar, pronto para gerar resultados." },
];

const LynkMain = () => {
  return (
    <main>
      {/* ── 1. Problema + Solução ─────────────────────────────── */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Seu negócio não aparece{" "}
              <span className="gradient-text">no Google?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Hoje, empresas que não possuem um site profissional perdem clientes todos os dias. Sem
              presença digital, sua marca perde credibilidade e oportunidades.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A <span className="text-primary font-semibold">Lynk</span> cria landing pages estratégicas que posicionam sua empresa no
              digital, aumentando sua visibilidade e fortalecendo sua autoridade.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Serviços ───────────────────────────────────────── */}
      <section id="servicos" className="py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">O que fazemos</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Soluções digitais para{" "}
              <span className="gradient-text">o seu negócio</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl border border-border bg-background transition-all duration-300 hover:border-primary/70 hover:[box-shadow:0_0_18px_4px_hsl(var(--primary)/0.45),0_0_40px_8px_hsl(var(--primary)/0.2)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors duration-300">
                  <s.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Benefícios ─────────────────────────────────────── */}
      <section id="beneficios" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Vantagens</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 leading-tight">
                Por que ter um{" "}
                <span className="gradient-text">site profissional?</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                    <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Stats visual */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: "3×", label: "Mais credibilidade percebida" },
                { val: "67%", label: "Dos consumidores pesquisam online antes de comprar" },
                { val: "24h", label: "Seu negócio disponível todos os dias" },
                { val: "100%", label: "Seu canal direto de vendas" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card card-glow text-center">
                  <p className="text-3xl font-bold gradient-text mb-1">{stat.val}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Como funciona ──────────────────────────────────── */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Como <span className="gradient-text">funciona</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col gap-4 p-6 rounded-2xl border border-border bg-background hover:border-primary/40 transition-all duration-300">
                <span className="text-4xl font-black gradient-text opacity-60">{step.num}</span>
                <h3 className="font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/40 z-10" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA Final ──────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-cta opacity-10 pointer-events-none" />
        <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center p-10 md:p-16 rounded-3xl border border-primary/30 bg-card card-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Seu concorrente já pode{" "}
              <span className="gradient-text">estar na frente.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Não perca mais oportunidades por não ter presença digital profissional.
            </p>
            <a
              href="https://wa.me/5519936197548?text=Ol%C3%A1!%20Quero%20minha%20landing%20page%20profissional."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 rounded-xl text-lg font-bold bg-gradient-hero text-primary-foreground hover:opacity-90 transition-all duration-300 glow-purple hover:scale-[1.03]"
            >
              Quero minha landing page agora
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LynkMain;
