import React, { useState } from 'react';
import TestimonialSlider from './components/ui/testimonial-slider';
import {
  Scale, Briefcase, Users, Gavel, BookOpen, Building2,
  HeartHandshake, ShieldCheck, Car, FileText, Star,
  Phone, Mail, MapPin, ArrowRight, MessageCircle,
  CheckCircle2, Clock, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-light/80 backdrop-blur-xl border-b border-primary/10 h-24">
    <div className="container mx-auto px-6 h-full flex items-center justify-between">
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="h-10 w-auto overflow-hidden border border-primary/20 p-1 bg-white">
          <img
            src="https://imgur.com/koobVhZ.png"
            alt="Santos & Tavares Logo"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-black text-lg tracking-tighter text-ink leading-none uppercase">Santos & <span className="text-primary italic font-serif font-normal lowercase tracking-normal">Tavares.</span></h2>
          <span className="text-[8px] font-black tracking-[0.3em] text-primary uppercase mt-1">Advocacia</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-12">
        <a href="#home" className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/40 hover:text-primary transition-all relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
        </a>
        <a href="#servicos" className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/40 hover:text-primary transition-all relative group">
          Serviços
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
        </a>
        <a href="#equipe" className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/40 hover:text-primary transition-all relative group">
          Equipe
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
        </a>
        <a href="#contato" className="bg-ink text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary transition-all">
          Consulta
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-bg-light pt-20">
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(circle, var(--color-ink) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1"
        >
          <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase leading-none">Santos & Tavares</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-ink uppercase mb-8">
            Para nós, cada <br />
            <span className="text-primary italic font-serif font-normal lowercase tracking-normal">processo é ÚNICO!</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-ink/60 font-medium mb-12 max-w-lg mx-auto lg:mx-0 border-l-0 lg:border-l-4 border-primary lg:pl-8">
            Atendimento humanizado e especializado para a proteção estratégica dos seus interesses jurídicos.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a href="#contato" className="w-full sm:w-auto bg-ink text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary transition-all text-center">
              Consultar Agora
            </a>
            <a href="#servicos" className="text-[10px] font-black uppercase tracking-[0.3em] text-ink hover:text-primary transition-all flex items-center gap-3">
              Nossas Áreas <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden border-2 border-primary/10 shadow-2xl group">
            <img
              src="https://imgur.com/HhUuEuo.png"
              alt="Escritório Santos & Tavares"
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
          </div>
          {/* Subtle Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-primary/20 -z-10"></div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="pt-12 pb-32 bg-bg-light relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        {/* Visual Fragment */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/2 relative"
        >
          <div className="relative z-10 border-2 border-primary/20 aspect-[4/3] overflow-hidden group">
            <img
              src="https://imgur.com/uXl7RSm.png"
              alt="Escritório Santos & Tavares"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
          </div>
          {/* Architectural Background Artifacts */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 -z-10 border-l-2 border-t-2 border-primary/10"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-ink/5 -z-10 border-r-2 border-b-2 border-ink/10"></div>

          {/* Floating Metric */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-10 right-10 bg-ink text-white p-8 border-l-4 border-primary z-20 shadow-2xl"
          >
            <p className="text-4xl font-black tracking-tight mb-1">15+</p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80">Anos de Excelência</p>
          </motion.div>
        </motion.div>

        {/* Narrative Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase leading-none">O Escritório</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-ink leading-[0.9] uppercase tracking-tighter mb-10">
            Tradição <br />
            <span className="text-primary italic font-serif font-normal lowercase tracking-normal">e Estratégia.</span>
          </h2>

          <div className="space-y-6 text-ink/70 text-lg leading-relaxed font-light">
            <p>
              Fundado com o propósito de oferecer soluções jurídicas estratégicas, o <span className="text-ink font-medium">Santos & Tavares Advocacia</span> destaca-se pelo compromisso inabalável com a ética e pela proximidade com o cliente.
            </p>
            <p>
              Nossa equipe é composta por especialistas dedicados a transformar complexidade em segurança jurídica, operando com o rigor técnico necessário para proteger seus interesses em esferas críticas.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px bg-primary/10 border border-primary/10">
            <div className="p-8 bg-white/50 backdrop-blur-sm">
              <Star className="text-primary w-5 h-5 mb-4" fill="currentColor" />
              <p className="text-xl font-black text-ink mb-1">5.0</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-ink/40">Google Rating</p>
            </div>
            <div className="p-8 bg-bg-light/50 backdrop-blur-sm">
              <ShieldCheck className="text-primary w-5 h-5 mb-4" />
              <p className="text-xl font-black text-ink mb-1">100%</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-ink/40">Transparência</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const services = [
  { icon: Briefcase, title: 'Direito do Trabalho', desc: 'Defesa dos direitos do trabalhador e conformidade empresarial.' },
  { icon: Users, title: 'Previdenciário', desc: 'Auxílio em aposentadorias, pensões e benefícios do INSS.' },
  { icon: ShieldCheck, title: 'Penal', desc: 'Defesa criminal técnica com foco na garantia de direitos.' },
  { icon: BookOpen, title: 'Sucessões', desc: 'Planejamento sucessório, heranças e inventários.' },
  { icon: Scale, title: 'Civil', desc: 'Resolução de conflitos contratuais e responsabilidade civil.' },
  { icon: HeartHandshake, title: 'Famílias', desc: 'Ações de divórcio, guarda e pensão alimentícia.' },
  { icon: Building2, title: 'Empresarial', desc: 'Consultoria jurídica para o crescimento de empresas.' },
  { icon: FileText, title: 'Consumidor', desc: 'Proteção contra abusos comerciais e fraudes.' },
  { icon: Car, title: 'Trânsito', desc: 'Assessoria em multas e processos administrativos.' },
  { icon: CheckCircle2, title: 'Recursos CNH', desc: 'Defesa para processos de suspensão e cassação.' },
];

const Services = () => (
  <section id="servicos" className="py-32 bg-ink relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3 sticky top-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Expertise</span>
          </div>
          <h2 className="text-5xl font-black text-white leading-tight uppercase tracking-tighter mb-8">
            Áreas de <br />
            <span className="text-primary italic font-serif font-normal lowercase tracking-normal">Atuação.</span>
          </h2>
          <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
            Oferecemos suporte jurídico de alto nível em múltiplas esferas, com foco em resultados precisos e proteção integral do cliente.
          </p>
          <div className="h-40 w-[2px] bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-ink p-12 group hover:bg-primary/5 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <service.icon size={80} strokeWidth={1} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono text-primary/40">0{idx + 1}</span>
                <service.icon className="text-primary w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">{service.desc}</p>

              <div className="mt-8 overflow-hidden h-px w-0 group-hover:w-full bg-primary transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="equipe" className="bg-bg-light py-24">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-ink uppercase">Nossa Equipe <br /><span className="text-primary italic font-serif font-normal lowercase tracking-normal">Jurídica.</span></h2>
        <p className="mt-6 text-lg text-ink/60 font-light leading-relaxed">
          Profissionais dedicados e comprometidos com a excelência na representação jurídica, unindo experiência e inovação para proteger seus interesses.
        </p>
      </motion.div>

      <div className="grid gap-24">
        {/* Profile 1 */}
        <div className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 lg:grid lg:grid-cols-12 items-center gap-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-primary/20 group">
                <img
                  src="https://imgur.com/vqXwsMv.png"
                  alt="Rafaela Veloso Tavares"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-ink/80 backdrop-blur-sm p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-black tracking-widest text-primary uppercase">Especialista em Gestão Jurídica</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col justify-center space-y-8 mt-12 lg:mt-0"
            >
              <div className="relative">
                <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-2 block">Sócia Fundadora</span>
                <h3 className="text-4xl md:text-5xl font-black text-ink mb-2 uppercase tracking-tighter">Rafaela Veloso <br /><span className="text-primary italic font-serif font-normal lowercase tracking-normal">Tavares.</span></h3>
                <p className="text-ink/60 font-bold tracking-widest uppercase text-[10px] mt-4">Advogada, OAB/SC 456.789</p>
              </div>
              <p className="text-lg text-ink/70 leading-relaxed font-light border-l-2 border-primary/20 pl-8">
                Especialista em <span className="font-medium text-ink border-b border-primary/30">Direito do Trabalho, Previdenciário e Sucessões</span>.
                Com uma abordagem consultiva e estratégica, Rafaela lidera a resolução de conflitos complexos no âmbito corporativo e familiar.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-ink text-white text-[9px] font-black uppercase tracking-widest px-4 py-2">Trabalhista</span>
                <span className="bg-primary/10 text-ink text-[9px] font-black uppercase tracking-widest px-4 py-2 text-primary">Previdenciário</span>
              </div>
              <div className="pt-4">
                <a
                  href="https://api.whatsapp.com/send?phone=5549999713889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-ink transition-all"
                >
                  <span>Falar com Rafaela</span>
                  <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all"></div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile 2 */}
        <div className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8 order-2 lg:order-1"
          >
            <div className="relative">
              <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-2 block">Sócio Fundador</span>
              <h3 className="text-4xl md:text-5xl font-black text-ink mb-2 uppercase tracking-tighter">Rafael dos <br /><span className="text-primary italic font-serif font-normal lowercase tracking-normal">Santos Silva.</span></h3>
              <p className="text-ink/60 font-bold tracking-widest uppercase text-[10px] mt-4">Advogado, OAB/SC 123.456</p>
            </div>
            <p className="text-lg text-ink/70 leading-relaxed font-light border-l-2 border-primary/20 pl-8">
              Atua com maestria em <span className="font-medium text-ink border-b border-primary/30">Direito Penal, do Consumidor e de Família</span>.
              Sua trajetória é marcada pela defesa intransigente das garantias fundamentais e pela mediação eficaz de disputas cíveis.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-ink text-white text-[9px] font-black uppercase tracking-widest px-4 py-2">Direito Penal</span>
              <span className="bg-primary/10 text-ink text-[9px] font-black uppercase tracking-widest px-4 py-2 text-primary">Consumidor</span>
            </div>
            <div className="pt-4">
              <a
                href="https://api.whatsapp.com/send?phone=5549999784237"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-ink transition-all"
              >
                <span>Falar com Rafael</span>
                <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all"></div>
                <ArrowRight className="w-4 h-4 text-primary" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden transition-all duration-700 border-2 border-primary/20">
              <img
                src="https://imgur.com/tbbDvgX.png"
                alt="Rafael dos Santos Silva"
                className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 bg-ink/80 backdrop-blur-sm p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] font-black tracking-widest text-primary uppercase">Defesa Criminal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-primary/5 py-24 overflow-hidden">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight font-serif text-ink">O que dizem nossos clientes</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contato" className="py-32 bg-bg-light relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-ink translate-y-full group-hover:translate-y-1/2 transition-transform opacity-[0.02]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase leading-none">Contato</span>
            </div>
            <h2 className="text-6xl font-black text-ink uppercase tracking-tighter mb-8 leading-[0.9]">
              Inicie sua <br />
              <span className="text-primary italic font-serif font-normal lowercase tracking-normal">Consulta.</span>
            </h2>
            <p className="text-ink/50 text-xl font-light leading-relaxed mb-12 max-w-md">
              Estamos prontos para oferecer a clareza jurídica necessária para o seu caso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Jurídico</p>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-ink leading-tight flex flex-col">
                    <span>Dra. Rafaela Tavares</span>
                    <span className="text-ink/40 font-medium">(49) 99971-3889</span>
                  </p>
                  <p className="text-sm font-bold text-ink leading-tight flex flex-col">
                    <span>Dr. Rafael Santos</span>
                    <span className="text-ink/40 font-medium">(49) 99978-4237</span>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Administrativo</p>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-ink leading-tight flex flex-col">
                    <span>Financeiro</span>
                    <span className="text-ink/40 font-medium">(49) 99908-3360</span>
                  </p>
                  <p className="text-sm font-bold text-ink leading-tight flex flex-col">
                    <span>Cobranças</span>
                    <span className="text-ink/40 font-medium">(49) 99825-1787</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-bg-light/80 backdrop-blur-xl p-12 border border-primary/10 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 -z-10"></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-ink/40">Nome Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full bg-bg-light border-0 px-4 py-4 text-xs font-bold focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-ink/20"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-ink/40">WhatsApp / Celular</label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 0 0000-0000"
                      className="w-full bg-bg-light border-0 px-4 py-4 text-xs font-bold focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-ink/20"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-ink/40">Assunto / Mensagem</label>
                  <textarea
                    required
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    className="w-full bg-bg-light border-0 px-4 py-4 text-xs font-bold focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-ink/20"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-ink text-white py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary transition-all disabled:opacity-50 group"
                >
                  {loading ? 'Enviando...' : (
                    <span className="flex items-center justify-center gap-2">
                      Enviar Solicitação <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 border border-primary/10 shadow-2xl overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000 group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.4277735398715!2d-50.3236772!3d-27.8118076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e01fb33c675713%3A0x6a0a09e078a1686b!2sR.%20Jo%C3%A3o%20de%20Castro%2C%20602%20-%20Centro%2C%20Lages%20-%20SC%2C%2088501-161!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter group-hover:filter-none transition-all duration-1000"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};



const Footer = () => (
  <footer className="bg-ink text-white py-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20 border-b border-white/5 pb-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-auto overflow-hidden border border-white/10 p-1 bg-white">
              <img
                src="https://imgur.com/koobVhZ.png"
                alt="Santos & Tavares Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="font-black text-2xl tracking-tighter uppercase">Santos & <span className="text-primary italic font-serif font-normal lowercase tracking-normal">Tavares.</span></h2>
          </div>
          <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm mb-10">
            Advocacia de excelência focada em resultados estratégicos e atendimento humanizado.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 px-4 py-2">Lages, SC</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40 border border-white/10 px-4 py-2">Consultoria 24h</span>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10">Navegação</p>
          <ul className="space-y-6">
            <li><a href="#home" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-colors">Início</a></li>
            <li><a href="#servicos" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-colors">Áreas de Atuação</a></li>
            <li><a href="#equipe" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-colors">Nossa Equipe</a></li>
            <li><a href="#contato" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-colors">Contato</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10">Contatos Diretos</p>
          <div className="grid grid-cols-2 gap-8">
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[7px] font-black uppercase tracking-widest text-white/20">Dra. Rafaela</span>
                <p className="text-sm font-bold tracking-tight">(49) 99971-3889</p>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[7px] font-black uppercase tracking-widest text-white/20">Dr. Rafael</span>
                <p className="text-sm font-bold tracking-tight">(49) 99978-4237</p>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[7px] font-black uppercase tracking-widest text-white/20">Financeiro</span>
                <p className="text-sm font-bold tracking-tight">(49) 99908-3360</p>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[7px] font-black uppercase tracking-widest text-white/20">Cobranças</span>
                <p className="text-sm font-bold tracking-tight">(49) 99825-1787</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-bold text-white/20 tracking-widest uppercase">© 2024 Santos & Tavares Advocacia — Todos os direitos reservados.</p>
          <p className="text-[10px] font-bold text-white/10 tracking-widest uppercase">CNPJ: 48.849.819/0001-54</p>
        </div>
        <div className="flex gap-12">
          <a href="#" className="text-[9px] font-black uppercase tracking-widest text-white/30 hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="text-[9px] font-black uppercase tracking-widest text-white/30 hover:text-primary transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg-light text-ink font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

