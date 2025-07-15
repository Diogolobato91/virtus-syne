import React, { useEffect } from 'react';
import Navigation from './ui/navigation';
import ScrollReveal from './ui/scroll-reveal';
import AnimatedCounter from './ui/animated-counter';
import { HeroFloatingElements, SectionFloatingElements } from './ui/floating-elements';
import { 
  Target, 
  Bot, 
  Video, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Instagram, 
  Mail, 
  MapPin,
  Phone,
  CheckCircle,
  Zap,
  BarChart3,
  Star,
  ArrowRight,
  PlayCircle,
  Shield,
  Rocket,
  Award,
  Eye,
  BrainCircuit,
  Gauge
} from 'lucide-react';

const VirtusLanding = () => {
  const whatsappNumber = "5591988468600";
  const whatsappMessage = "Olá! Quero conhecer as estratégias da VirtusSyne para escalar meu negócio.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    // Initialize scroll reveal animations
    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
    };

    observeElements();
  }, []);

  return (
    <div className="min-h-screen bg-animated">
      {/* Navigation */}
      <Navigation whatsappUrl={whatsappUrl} />

      {/* Enhanced WhatsApp Float */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-super w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </a>

      {/* HERO SECTION - SUPER ENHANCED */}
      <section id="hero" className="hero-3d min-h-screen flex items-center relative overflow-hidden">
        <HeroFloatingElements />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="scale" delay={200}>
              <div className="text-center mb-12">
                <img 
                  src="/lovable-uploads/28c4bc50-bb82-45f1-86af-d5292c5aa473.png" 
                  alt="VirtusSyne Logo" 
                  className="h-24 mx-auto mb-8 filter drop-shadow-2xl"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-center">
                <span className="text-white">Crescimento</span>
                <span className="text-gradient block">previsível.</span>
                <span className="text-white">Estratégia</span>
                <span className="text-gradient">sob medida.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={600}>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-2xl md:text-3xl mb-8 text-white font-light leading-relaxed">
                  Na VirtusSyne, <span className="text-gradient font-semibold">performance não é promessa</span> — é método.
                </p>
                
                <p className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed">
                  Com tráfego pago inteligente, automações personalizadas e criativos feitos sob medida, 
                  ajudamos negócios prontos para o próximo nível a crescer com consistência.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                <div className="card-glass flex items-center px-6 py-4">
                  <Target className="text-primary mr-4" size={24} />
                  <span className="text-lg font-semibold text-white">
                    Atuamos com poucos clientes por vez, porque excelência exige foco.
                  </span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={1000}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <button className="btn-super-primary text-xl px-10 py-5 group">
                    🔵 Quero escalar com estratégia
                    <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={20} />
                  </button>
                </a>
                <button className="btn-glass text-xl px-10 py-5 group">
                  <PlayCircle className="mr-3" size={20} />
                  ⚪ Entenda nosso processo
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* SOBRE NÓS SECTION - ENHANCED */}
      <section id="sobre" className="py-32 relative">
        <SectionFloatingElements />
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up">
              <div className="text-center mb-20">
                <div className="inline-flex items-center card-glass px-8 py-4 mb-8">
                  <Zap className="text-primary mr-4" size={32} />
                  <h2 className="text-5xl md:text-6xl font-bold text-gradient">Sobre Nós</h2>
                </div>
                
                <p className="text-2xl md:text-3xl mb-8 text-white font-light leading-relaxed">
                  A VirtusSyne é uma agência estratégica com <span className="text-gradient font-semibold">DNA de performance.</span>
                </p>
                
                <p className="text-xl mb-16 leading-relaxed text-gray-300 max-w-4xl mx-auto">
                  Trabalhamos com empresas e profissionais que sabem onde querem chegar — e buscam um parceiro que saiba como levá-los.
                  <br /><br />
                  Não existe "receita pronta". Cada projeto nasce de uma imersão real no seu negócio e se transforma em uma operação personalizada de vendas online.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Shield, title: "Planejamento estratégico", desc: "Base sólida para crescimento" },
                { icon: Target, title: "Tráfego pago com inteligência", desc: "Investimento que retorna vendas" },
                { icon: Bot, title: "Funis automatizados", desc: "Processo respeitoso e eficiente" },
                { icon: Video, title: "Criativos internos", desc: "Foco total em conversão" }
              ].map((item, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 200}>
                  <div className="card-3d text-center group">
                    <item.icon className="text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" size={48} />
                    <h3 className="font-bold text-xl mb-3 text-white">📌 {item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal direction="scale">
              <div className="card-glass text-center max-w-2xl mx-auto">
                <p className="text-xl font-semibold mb-6 text-white">
                  🚫 Não atendemos em volume.
                </p>
                <p className="text-2xl font-bold text-gradient">
                  ✅ Atendemos com profundidade.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVIÇOS SECTION - ENHANCED */}
      <section id="servicos" className="py-32 relative bg-gradient-to-br from-background/50 to-card/50">
        <SectionFloatingElements variant="secondary" />
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                🛠️ <span className="text-gradient">Serviços de Alta Performance</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluções integradas. Execução com método. Resultados com consistência.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "📊 Tráfego Pago Estratégico",
                description: "Campanhas otimizadas no Meta Ads e Google Ads, Youtube Ads, com inteligência de dados, testes estruturados e otimizações de performance.",
                highlight: "Você não investe por likes. Investe pra vender.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Bot,
                title: "🤖 Funis Automatizados e Conversacionais",
                description: "Sua estrutura de vendas online funcionando mesmo fora do horário comercial. Automatizamos seu relacionamento com leads usando lógica, copy e comportamento.",
                highlight: "Ganho de escala sem perder personalização.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Video,
                title: "🎥 Criativos Internos com Foco em Conversão",
                description: "Nada é terceirizado. Produzimos vídeos, imagens e reels com estratégia, baseados nos gatilhos certos e no momento certo do funil.",
                highlight: "Criativos feitos por quem entende do que converte.",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 300}>
                <div className="card-3d group min-h-[400px] flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="card-glass p-4 text-center">
                    <p className="font-semibold text-gradient">
                      {service.highlight}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO SECTION - ENHANCED */}
      <section id="metodo" className="py-32 relative">
        <SectionFloatingElements />
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                📈 <span className="text-gradient">Nosso Método - As 5 Premissas</span>
              </h2>
              <p className="text-2xl text-gray-300 mb-4">
                Da análise profunda à escala. Sem achismos, sem ruído.
              </p>
              <p className="text-xl text-gray-400">
                Nosso processo é consultivo, baseado em dados e projetado para resultados consistentes:
              </p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {[
                { number: "01", text: "Diagnóstico profundo da presença digital", icon: Eye },
                { number: "02", text: "Definição de metas e verba de mídia", icon: Target },
                { number: "03", text: "Estratégia de comunicação + criativos", icon: BrainCircuit },
                { number: "04", text: "Execução, testes e otimização contínua", icon: Gauge },
                { number: "05", text: "Relatórios, aprendizados e escala", icon: TrendingUp }
              ].map((step, index) => (
                <ScrollReveal key={index} direction="left" delay={index * 200}>
                  <div className="card-3d flex items-center group">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-2xl mr-8 group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    </div>
                    
                    <div className="flex-1 flex items-center">
                      <step.icon className="text-primary mr-4 group-hover:scale-110 transition-transform" size={32} />
                      <p className="text-xl font-semibold text-white">{step.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal direction="scale" delay={1000}>
              <div className="text-center mt-16">
                <div className="card-glass inline-block px-8 py-6">
                  <p className="text-xl font-bold text-gradient">
                    🧠 Cada passo tem método. Cada decisão, base.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* RESULTADOS SECTION - ENHANCED */}
      <section id="resultados" className="py-32 relative bg-gradient-to-br from-background/50 to-card/50">
        <SectionFloatingElements variant="secondary" />
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                🔥 <span className="text-gradient">Resultados Comprovados</span>
              </h2>
              <p className="text-2xl text-gray-300">
                Performance real. Negócios em outro patamar.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            {[
              { 
                icon: TrendingUp, 
                number: 300000, 
                suffix: "+", 
                prefix: "R$", 
                label: "em faturamento gerado",
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                icon: Users, 
                number: 20, 
                suffix: "+", 
                prefix: "", 
                label: "empresas atendidas com soluções personalizadas",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                icon: Zap, 
                number: 30, 
                suffix: " dias", 
                prefix: "", 
                label: "primeiros resultados visíveis",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((stat, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 200}>
                <div className="card-3d text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <stat.icon size={32} className="text-white" />
                  </div>
                  <div className="mb-4">
                    <AnimatedCounter
                      end={stat.number}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="text-4xl font-bold text-gradient"
                    />
                  </div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up">
              <h3 className="text-3xl font-bold text-center mb-16 text-white">
                Mini-cases selecionados:
              </h3>
            </ScrollReveal>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "📍 Restaurante Box 49",
                  description: "Estratégia local + vídeos autorais = aumento direto nos espaços físicos",
                  highlight: "Crescimento local explosivo"
                },
                {
                  title: "📍 Samarone Distribuidora Barber",
                  description: "Aumento das vendas com leads qualificados no WhatsApp",
                  highlight: "Pipeline de vendas automatizado"
                },
                {
                  title: "📍 Fit Imports",
                  description: "ROI triplicado com criativos e copy orientados à ação",
                  highlight: "Performance 3x superior"
                }
              ].map((caseStudy, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 200}>
                  <div className="card-3d group">
                    <div className="mb-4">
                      <Award className="text-primary group-hover:scale-110 transition-transform" size={32} />
                    </div>
                    <h4 className="font-bold text-xl mb-4 text-white">
                      {caseStudy.title}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {caseStudy.description}
                    </p>
                    <div className="card-glass p-3">
                      <p className="text-sm font-semibold text-gradient">
                        {caseStudy.highlight}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS SECTION - ENHANCED */}
      <section className="py-32 relative">
        <SectionFloatingElements />
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                💬 <span className="text-gradient">Depoimentos</span>
              </h2>
              <p className="text-xl text-gray-300">
                Depoimentos de quem experimentou o que fazemos de melhor: resultado.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                quote: "A VirtusSyne foi além da execução. serviço de qualidade.",
                author: "Marcelo",
                company: "Container Móveis planejados",
                rating: 5
              },
              {
                quote: "A agência aumentou a visibilidade que nós não tínhamos no instagram e isso tem ajudado no nosso crescimento.",
                author: "Eliana",
                company: "Restaurante Box 49",
                rating: 5
              },
              {
                quote: "Tráfego afiado, equipe comprometida. O tipo de parceria que todo negócio precisa. Alavancou as vendas da Ápice",
                author: "Thiago Pires - TT",
                company: "APICE",
                rating: 5
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 200}>
                <div className="card-3d group min-h-[300px] flex flex-col">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current mr-1" size={20} />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-6 italic leading-relaxed flex-grow text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="card-glass p-4">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gradient">{testimonial.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL SECTION - ENHANCED */}
      <section id="contato" className="py-32 hero-3d relative overflow-hidden">
        <HeroFloatingElements />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal direction="scale">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                📲 <span className="text-white">Seu negócio não precisa de</span><br />
                <span className="text-gradient">mais uma agência.</span><br />
                <span className="text-white">Precisa de um</span><br />
                <span className="text-gradient">parceiro estratégico.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-300">
                Estamos prontos para escalar o seu negócio com um plano sob medida, criativos alinhados à performance 
                e uma operação pensada para durar.
              </p>
              
              <p className="text-lg mb-12 text-gray-400">
                Mas antes de tudo, vamos conversar — pra entender se faz sentido, dos dois lados.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <button className="btn-super-primary text-xl px-12 py-6 group">
                    🔵 Falar com a VirtusSyne
                    <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={24} />
                  </button>
                </a>
                <a href="https://instagram.com/virtussyne" target="_blank" rel="noopener noreferrer">
                  <button className="btn-glass text-xl px-12 py-6 group">
                    <Instagram className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                    📸 Ver Instagram da VirtusSyne
                  </button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FOOTER - ENHANCED */}
      <footer className="bg-gradient-to-br from-primary to-secondary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal direction="up">
              <h3 className="text-3xl md:text-4xl font-bold mb-12">
                🧩 VirtusSyne — Estratégia que vende. Crescimento previsível.
              </h3>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {[
                  { icon: MapPin, text: "📍 Belém - PA" },
                  { icon: Phone, text: "📱 (91) 98846-8600" },
                  { icon: Mail, text: "📧 virtussyne@gmail.com" },
                  { icon: Instagram, text: "📲 @virtussyne" }
                ].map((contact, index) => (
                  <div key={index} className="card-glass flex items-center p-4 group hover:scale-105 transition-transform">
                    <contact.icon className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-sm">{contact.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <div className="pt-8 border-t border-white/20">
                <p className="text-sm text-white/70">
                  🧾 CNPJ: 59.165.836/0001-99
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VirtusLanding;