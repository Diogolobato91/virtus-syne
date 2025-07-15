import React from 'react';
import { ButtonVirtus } from './ui/button-virtus';
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
  Smartphone,
  Star
} from 'lucide-react';

const VirtusLanding = () => {
  const whatsappNumber = "5591988468600";
  const whatsappMessage = "Olá! Quero conhecer as estratégias da VirtusSyne para escalar meu negócio.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float btn-whatsapp rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* HERO SECTION */}
      <section className="section-gradient text-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/28c4bc50-bb82-45f1-86af-d5292c5aa473.png" 
                alt="VirtusSyne Logo" 
                className="h-20 mx-auto mb-6"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crescimento previsível.<br />
              <span className="text-secondary-foreground">Estratégia sob medida.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Na VirtusSyne, performance não é promessa — é método.
            </p>
            
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Com tráfego pago inteligente, automações personalizadas e criativos feitos sob medida, 
              ajudamos negócios prontos para o próximo nível a crescer com consistência.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <Target className="text-secondary-foreground" size={24} />
              <span className="text-lg font-semibold">
                Atuamos com poucos clientes por vez, porque excelência exige foco.
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <ButtonVirtus variant="hero" size="xl" className="shadow-2xl">
                  🔵 Quero escalar com estratégia
                </ButtonVirtus>
              </a>
              <ButtonVirtus variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                ⚪ Entenda nosso processo
              </ButtonVirtus>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE NÓS SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="flex items-center justify-center mb-8">
              <Zap className="text-primary mr-3" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Sobre Nós</h2>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              A VirtusSyne é uma agência estratégica com DNA de performance.
            </p>
            
            <p className="text-lg mb-12 leading-relaxed text-muted-foreground">
              Trabalhamos com empresas e profissionais que sabem onde querem chegar — e buscam um parceiro que saiba como levá-los.
              <br /><br />
              Não existe "receita pronta". Cada projeto nasce de uma imersão real no seu negócio e se transforma em uma operação personalizada de vendas online.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="performance-card hover-lift">
                <CheckCircle className="text-primary mb-4" size={32} />
                <h3 className="font-semibold text-lg mb-2">📌 Planejamento estratégico</h3>
              </div>
              <div className="performance-card hover-lift">
                <Target className="text-primary mb-4" size={32} />
                <h3 className="font-semibold text-lg mb-2">📌 Tráfego pago com inteligência</h3>
              </div>
              <div className="performance-card hover-lift">
                <Bot className="text-primary mb-4" size={32} />
                <h3 className="font-semibold text-lg mb-2">📌 Funis automatizados que respeitam o seu processo</h3>
              </div>
              <div className="performance-card hover-lift">
                <Video className="text-primary mb-4" size={32} />
                <h3 className="font-semibold text-lg mb-2">📌 Criativos internos com foco em conversão</h3>
              </div>
            </div>
            
            <div className="bg-muted rounded-xl p-8">
              <p className="text-lg font-semibold mb-4">
                🚫 Não atendemos em volume.
              </p>
              <p className="text-lg font-semibold text-primary">
                ✅ Atendemos com profundidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS SECTION */}
      <section className="py-20 section-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              🛠️ Serviços de Alta Performance
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluções integradas. Execução com método. Resultados com consistência.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tráfego Pago */}
            <div className="performance-card hover-lift text-center">
              <BarChart3 className="text-primary mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-primary">📊 Tráfego Pago Estratégico</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Campanhas otimizadas no Meta Ads e Google Ads, Youtube Ads, com inteligência de dados, 
                testes estruturados e otimizações de performance.
              </p>
              <p className="font-semibold text-primary">
                Você não investe por likes. Investe pra vender.
              </p>
            </div>
            
            {/* Funis Automatizados */}
            <div className="performance-card hover-lift text-center">
              <Bot className="text-primary mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-primary">🤖 Funis Automatizados e Conversacionais</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sua estrutura de vendas online funcionando mesmo fora do horário comercial.
                Automatizamos seu relacionamento com leads usando lógica, copy e comportamento.
              </p>
              <p className="font-semibold text-primary">
                Ganho de escala sem perder personalização.
              </p>
            </div>
            
            {/* Criativos */}
            <div className="performance-card hover-lift text-center">
              <Video className="text-primary mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-primary">🎥 Criativos Internos com Foco em Conversão</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nada é terceirizado. Produzimos vídeos, imagens e reels com estratégia, 
                baseados nos gatilhos certos e no momento certo do funil.
              </p>
              <p className="font-semibold text-primary">
                Criativos feitos por quem entende do que converte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              📈 Nosso Método - As 5 Premissas
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Da análise profunda à escala. Sem achismos, sem ruído.
            </p>
            <p className="text-lg text-muted-foreground">
              Nosso processo é consultivo, baseado em dados e projetado para resultados consistentes:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                { number: "01", text: "Diagnóstico profundo da presença digital" },
                { number: "02", text: "Definição de metas e verba de mídia" },
                { number: "03", text: "Estratégia de comunicação + criativos" },
                { number: "04", text: "Execução, testes e otimização contínua" },
                { number: "05", text: "Relatórios, aprendizados e escala" }
              ].map((step, index) => (
                <div key={index} className="performance-card hover-lift flex items-center">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-6">
                    {step.number}
                  </div>
                  <p className="text-lg font-semibold">{step.text}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg font-semibold text-primary">
                🧠 Cada passo tem método. Cada decisão, base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS SECTION */}
      <section className="py-20 section-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              🔥 Resultados Comprovados
            </h2>
            <p className="text-xl text-muted-foreground">
              Performance real. Negócios em outro patamar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="performance-card hover-lift text-center">
              <TrendingUp className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-primary mb-2">R$300 mil+</h3>
              <p className="text-muted-foreground">em faturamento gerado</p>
            </div>
            <div className="performance-card hover-lift text-center">
              <Users className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-primary mb-2">+20 empresas</h3>
              <p className="text-muted-foreground">atendidas com soluções personalizadas</p>
            </div>
            <div className="performance-card hover-lift text-center">
              <Zap className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-primary mb-2">30 dias</h3>
              <p className="text-muted-foreground">primeiros resultados visíveis</p>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12 text-primary">Mini-cases selecionados:</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="performance-card hover-lift">
                <h4 className="font-bold text-lg mb-3 text-primary">📍 Restaurante Box 49</h4>
                <p className="text-muted-foreground">
                  Estratégia local + vídeos autorais = aumento direto nos espaços físicos
                </p>
              </div>
              <div className="performance-card hover-lift">
                <h4 className="font-bold text-lg mb-3 text-primary">📍 Samarone Distribuidora Barber</h4>
                <p className="text-muted-foreground">
                  Aumento das vendas com leads qualificados no WhatsApp
                </p>
              </div>
              <div className="performance-card hover-lift">
                <h4 className="font-bold text-lg mb-3 text-primary">📍 Fit Imports</h4>
                <p className="text-muted-foreground">
                  ROI triplicado com criativos e copy orientados à ação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              💬 Depoimentos
            </h2>
            <p className="text-xl text-muted-foreground">
              Depoimentos de quem experimentou o que fazemos de melhor: resultado.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="performance-card hover-lift">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "A VirtusSyne foi além da execução. serviço de qualidade."
              </p>
              <p className="font-semibold text-primary">— Marcelo, Container Móveis planejados</p>
            </div>
            
            <div className="performance-card hover-lift">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "A agência aumentou a visibilidade que nós não tínhamos no instagram e isso tem ajudado no nosso crescimento."
              </p>
              <p className="font-semibold text-primary">— Eliana, Restaurante Box 49</p>
            </div>
            
            <div className="performance-card hover-lift">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Tráfego afiado, equipe comprometida. O tipo de parceria que todo negócio precisa. Alavancou as vendas da Ápice"
              </p>
              <p className="font-semibold text-primary">— Thiago Pires - TT, APICE</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL SECTION */}
      <section className="py-20 section-gradient text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              📲 Seu negócio não precisa de mais uma agência.<br />
              <span className="text-secondary-foreground">Precisa de um parceiro estratégico.</span>
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed">
              Estamos prontos para escalar o seu negócio com um plano sob medida, criativos alinhados à performance 
              e uma operação pensada para durar.
            </p>
            
            <p className="text-lg mb-12">
              Mas antes de tudo, vamos conversar — pra entender se faz sentido, dos dois lados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <ButtonVirtus variant="hero" size="xl" className="shadow-2xl">
                  🔵 Falar com a VirtusSyne
                </ButtonVirtus>
              </a>
              <a href="https://instagram.com/virtussyne" target="_blank" rel="noopener noreferrer">
                <ButtonVirtus variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                  📸 Ver Instagram da VirtusSyne
                </ButtonVirtus>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">
              🧩 VirtusSyne — Estratégia que vende. Crescimento previsível.
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="flex items-center">
                <MapPin className="mr-3" size={20} />
                <span>📍 Belém - PA</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3" size={20} />
                <span>📱 (91) 98846-8600</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3" size={20} />
                <span>📧 virtussyne@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Instagram className="mr-3" size={20} />
                <span>📲 @virtussyne</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-secondary">
              <p className="text-sm text-secondary-foreground">
                🧾 CNPJ: 59.165.836/0001-99
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VirtusLanding;