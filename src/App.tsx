import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldAlert, 
  Target, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Mail,
  BarChart3,
  BookOpen,
  Lightbulb,
  ShieldCheck,
  Linkedin,
  Instagram,
  Youtube,
  ExternalLink,
  Clock,
  AlertTriangle,
  Smartphone,
  Landmark,
  UserCheck,
  Dumbbell,
  BrainCircuit,
  LineChart,
  Check
} from 'lucide-react';

// --- Configuration & Constants ---

const BRAND_DARK = '#0d234f';
const BRAND_BLUE = '#3b82f6';
const BRAND_ORANGE = '#d97706';

// Links
const LINKS = {
  linkedin: "https://www.linkedin.com/in/leonardorossipolledri",
  instagram: "#", 
  youtube: "#", 
  x: "#", 
  personalSite: "http://www.rossipolledri.com",
  privacy: "/privacy-policy",
  terms: "/termini-condizioni"
};

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "È una consulenza finanziaria?",
    answer: "No. consi.online offre educazione operativa, non consulenza personalizzata. Non raccomandiamo prodotti specifici, non costruiamo portafogli su misura. Ti alleniamo a capire i meccanismi, poi decidi tu."
  },
  {
    question: "Quanto costa?",
    answer: "Modello fee-only subscription. Paghi l'accesso alla piattaforma educativa, non commissioni su prodotti. Pricing definitivo comunicato al lancio Q1 2026. Assessment iniziale sempre gratuito."
  },
  {
    question: "I miei dati sono sicuri?",
    answer: "Architettura privacy-by-design con crittografia end-to-end. I tuoi dati finanziari sono crittografati: solo tu hai la chiave. Zero-log policy: non tracciamo comportamenti per profilazione. GDPR compliant."
  },
  {
    question: "Quando lanciate?",
    answer: "Q1 2026 (gennaio-marzo). Entra in lista d'attesa per essere tra i primi ad accedere all'assessment gratuito e ricevere condizioni di early adopter."
  }
];

// --- Custom Icons & UI Elements ---

const XIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// --- Components ---

const BentoCard = ({ 
  children, 
  className = "", 
  dark = false, 
  noPadding = false,
  gradient = false,
  style = {}
}: { 
  children?: React.ReactNode; 
  className?: string; 
  dark?: boolean;
  noPadding?: boolean;
  gradient?: boolean;
  style?: React.CSSProperties;
}) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-[2rem] transition-all duration-500 group
        ${dark 
          ? 'text-white shadow-2xl shadow-slate-900/40' 
          : 'bg-white/90 backdrop-blur-sm text-slate-800 shadow-xl shadow-slate-200/60 border border-white/60'}
        ${noPadding ? '' : 'p-6 md:p-10'}
        ${gradient && !dark ? 'bg-gradient-to-br from-white via-slate-50 to-blue-50/50' : ''}
        ${className}
      `}
      style={{
        backgroundColor: dark ? BRAND_DARK : undefined,
        ...style
      }}
    >
      {children}
    </div>
  );
};

const Badge = ({ text, dark = false, color }: { text: string, dark?: boolean, color?: string }) => (
  <span 
    className={`
      inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border
      ${dark ? 'bg-white/10 text-white backdrop-blur-md border-white/20' : 'bg-white/80 backdrop-blur-md text-slate-600 border-slate-200'}
    `}
    style={color ? { color: color, borderColor: `${color}30`, backgroundColor: `${color}10` } : {}}
  >
    {text}
  </span>
);

const SectionTitle = ({ title, subtitle, dark = false, center = false }: { title: string, subtitle?: string, dark?: boolean, center?: boolean }) => (
  <div className={`mb-10 ${center ? 'text-center' : ''}`}>
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tighter ${dark ? 'text-white' : 'text-slate-900'}`} style={{ color: !dark ? BRAND_DARK : undefined }}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl font-light ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const AccordionItem: React.FC<{ item: FaqItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className={`border-b last:border-0 transition-colors duration-300 ${isOpen ? 'border-blue-100' : 'border-slate-100'}`}>
      <button 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span 
          className={`font-bold text-lg md:text-xl transition-colors tracking-tight ${isOpen ? 'text-[#3b82f6]' : 'text-slate-800 group-hover:text-[#3b82f6]'}`}
        >
          {item.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-50 rotate-180' : 'bg-slate-50 group-hover:bg-blue-50'}`}>
            {isOpen ? (
            <ChevronUp size={20} className="text-[#3b82f6]" /> 
            ) : (
            <ChevronDown size={20} className="text-slate-400 group-hover:text-[#3b82f6]" />
            )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed text-lg font-light">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name || !privacy) {
      setError('Compila tutti i campi obbligatori');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setName('');
        setReason('');
        setPrivacy(false);
      } else {
        throw new Error('Errore invio form');
      }
    } catch (err) {
      setError('Errore durante l\'invio. Riprova tra qualche istante.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-orange-100 selection:text-orange-900 text-slate-800 relative overflow-x-hidden">
      {/* Background Dot Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 relative z-10">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-12 px-2 py-4">
          <div className="flex items-center gap-3 group cursor-pointer">
             <img
               src="/logos/logo-header.svg"
               alt="consi.online"
               className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-105"
             />
          </div>
          <a 
            href="#waitlist" 
            className="hidden md:block px-8 py-3 rounded-full text-sm font-bold text-white transition-all hover:shadow-xl hover:shadow-blue-900/20 transform hover:-translate-y-0.5 active:scale-95"
            style={{ backgroundColor: BRAND_DARK }}
          >
            Inizia l'allenamento
          </a>
        </header>

        {/* BENTO GRID LAYOUT */}
        <main className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">

          {/* 1. HERO SECTION */}
          <BentoCard className="md:col-span-12 min-h-[600px] flex flex-col justify-center items-center text-center border-none shadow-2xl shadow-blue-200/40 relative overflow-hidden bg-white">
            {/* Aurora Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] opacity-60 animate-pulse mix-blend-multiply"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-100/60 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center">
              <Badge text="Educazione Finanziaria Personalizzata" color={BRAND_BLUE} />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.95] tracking-tighter mb-8" style={{ color: BRAND_DARK }}>
                La prima palestra finanziaria <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#0d234f] to-[#0d234f]">
                  digitale italiana
                </span>
              </h1>
              
              <p className="text-xl md:text-3xl text-slate-500 mb-12 max-w-2xl mx-auto font-light tracking-tight leading-tight">
                analizza, capisci, migliora
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
                <a 
                  href="#waitlist"
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-white font-bold text-lg rounded-2xl shadow-xl shadow-orange-500/20 transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden ring-4 ring-orange-100"
                  style={{ backgroundColor: BRAND_ORANGE }}
                >
                  <span className="relative z-10 flex items-center">Entra in lista d'attesa <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </a>
              </div>
            </div>
          </BentoCard>

          {/* 2. STATS SECTION */}
          <BentoCard className="md:col-span-12 bg-white/80 backdrop-blur-sm p-8 md:p-12">
             <SectionTitle title="Perché consi.online può fare la differenza" center />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                
                {/* Stat 1 */}
                <div className="bg-gradient-to-b from-white to-blue-50 rounded-[2rem] p-8 text-center border border-blue-100 hover:border-blue-300 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1">
                   <div className="text-7xl md:text-8xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400 tracking-tighter">40%</div>
                   <p className="text-slate-600 font-medium leading-tight max-w-[200px] mx-auto text-lg">degli italiani raggiunge la sufficienza in educazione finanziaria</p>
                </div>
                
                {/* Stat 2 */}
                <div className="bg-gradient-to-b from-white to-blue-50 rounded-[2rem] p-8 text-center border border-blue-100 hover:border-blue-300 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1">
                   <div className="flex items-baseline justify-center gap-1 mb-2">
                     <div className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400 tracking-tighter">36°</div>
                     <div className="text-4xl font-bold text-slate-300">/39</div>
                   </div>
                   <p className="text-slate-600 font-medium leading-tight max-w-[200px] mx-auto text-lg">Posizione Italia nel ranking OCSE alfabetizzazione finanziaria</p>
                </div>
                
                {/* Stat 3 */}
                <div className="bg-gradient-to-b from-white to-blue-50 rounded-[2rem] p-8 text-center border border-blue-100 hover:border-blue-300 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1">
                   <div className="flex items-baseline justify-center gap-1 mb-2">
                     <div className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400 tracking-tighter">€2.8</div>
                     <div className="text-3xl font-bold text-blue-400 uppercase">Mld</div>
                   </div>
                   <p className="text-slate-600 font-medium leading-tight max-w-[200px] mx-auto text-lg">Mercato EdTech italiano (2022) con crescita +26% annua</p>
                </div>
             </div>
             <p className="text-center text-xs font-medium uppercase tracking-widest text-slate-400 mt-12">Fonti: Banca d'Italia 2024, OCSE, Osservatori Politecnico Milano</p>
          </BentoCard>

          {/* 3. PROBLEM / SOLUTION */}
          <BentoCard className="md:col-span-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
             <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Column: Problems */}
                <div className="flex flex-col h-full">
                   <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter" style={{ color: BRAND_DARK }}>Perché una palestra finanziaria?</h2>
                   <p className="text-xl text-slate-500 mb-10 font-light leading-relaxed">Per gestire le tue finanze, hai tre soluzioni a disposizione:</p>

                   <div className="space-y-6 flex-grow">
                      {[
                        { icon: Smartphone, title: "App di trading", text: "dove rischi di comprare senza consapevolezza." },
                        { icon: Landmark, title: "Consulenti tradizionali (in banca o presso altri intermediari)", text: "che sono soggetti a dinamiche commerciali non indipendenti." },
                        { icon: UserCheck, title: "Consulenti autonomi", text: "spesso la scelta migliore ma non sempre accessibili a chiunque." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 p-6 bg-white rounded-[1.5rem] border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all items-start hover:-translate-x-1">
                          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 text-slate-600 mt-1 border border-slate-200">
                              <item.icon size={32} className="mb-3" />
                          </div>
                          <div>
                              <h4 className="font-bold text-xl mb-2 text-slate-800">{item.title}</h4>
                              <p className="text-slate-600 text-base leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      ))}
                   </div>

                   {/* Blue Box: Consi Solution */}
                   <div className="rounded-[2rem] p-10 text-white relative overflow-hidden mt-10 shadow-2xl shadow-blue-900/30 transform transition-transform hover:scale-[1.02]" style={{ backgroundColor: BRAND_DARK }}>
                       {/* Decorative blur */}
                       <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                       
                       <div className="flex items-start gap-6 relative z-10">
                          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 text-[#d97706] shadow-inner border border-white/20">
                              <Dumbbell size={32} strokeWidth={2.5} />
                          </div>
                          <div>
                             <h4 className="font-bold text-2xl mb-4">consi.online ti prepara</h4>
                             <p className="text-lg text-blue-100 leading-relaxed font-light opacity-90">
                                consi.online ti prepara per tutte e tre le soluzioni. Non scegliamo per te, non vendiamo prodotti. Ti alleniamo a comunicare meglio con qualsiasi professionista o piattaforma sceglierai. Come in palestra: ti prepariamo prima della gara, non corriamo al posto tuo.
                             </p>
                          </div>
                       </div>
                   </div>
                </div>

                {/* Right Column: Programs */}
                <div className="flex flex-col h-full pt-8 md:pt-0">
                   <div className="bg-white p-8 rounded-[2.5rem] h-full border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden flex flex-col">
                      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="text-center mb-8">
                            <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-slate-400 bg-slate-50 px-4 py-2 rounded-full">I 4 Programmi di allenamento</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 flex-grow">
                          {[
                            { icon: AlertTriangle, title: "Emergenza", desc: "Strategie e simulazioni personalizzate su come costituire un proprio fondo di emergenza", sub: "Standard educativo: 6-12 mesi" },
                            { icon: TrendingUp, title: "Risparmio e Investimenti", desc: "Strategie di pianificazione finanziaria e di portafoglio simulate e personalizzate", sub: "Principi generali di diversificazione" },
                            { icon: ShieldAlert, title: "Protezione", desc: "Risk awareness personalizzata", sub: "Analisi gap coperture • individuazione necessità potenziali" },
                            { icon: Clock, title: "Previdenza", desc: "Pubblica e privata", sub: "Calcolo gap pensionistico atteso" }
                          ].map((prog, i) => (
                            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-orange-200 hover:shadow-orange-100/50 transition-all group flex flex-col hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-5 group-hover:scale-110 transition-transform shadow-sm">
                                  <prog.icon size={32} className="mb-3" />
                                </div>
                                <h5 className="font-bold text-xl md:text-2xl uppercase mb-3 leading-tight tracking-tight" style={{ color: BRAND_DARK }}>{prog.title}</h5>
                                <p className="text-sm text-slate-600 mb-5 leading-relaxed flex-grow font-medium">{prog.desc}</p>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-auto border-t border-slate-100 pt-4">{prog.sub}</p>
                            </div>
                          ))}
                        </div>

                        {/* Disclaimer Warning */}
                        <div className="bg-amber-50 border border-amber-100 p-6 rounded-[1.5rem] flex gap-5 mt-auto relative overflow-hidden">
                          <div className="absolute -right-6 -top-6 w-20 h-20 bg-amber-100 rounded-full blur-2xl"></div>
                          <AlertTriangle size={32} className="text-amber-600 shrink-0 relative z-10 mb-3" />
                          <p className="text-xs text-amber-900/80 leading-relaxed font-medium relative z-10">
                              <strong>IMPORTANTE:</strong> Questi contenuti hanno finalità esclusivamente educativa e non costituiscono consulenza finanziaria personalizzata. consi.online non raccomanda prodotti specifici né costruisce portafogli su misura. Per consulenza personalizzata, rivolgiti a professionista autorizzato iscritto ai registri Consob/IVASS.
                          </p>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </BentoCard>

          {/* 4. FINFIT SYSTEM - Premium Visuals */}
          <BentoCard dark className="md:col-span-12 py-20 md:py-32 relative overflow-hidden border-0">
            {/* Deep Premium Gradient */}
            <div className="absolute inset-0 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#0d234f] via-[#172554] to-[#020617] z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] z-0 pointer-events-none mix-blend-screen"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>

            <div className="relative z-10">
              <div className="text-center max-w-5xl mx-auto mb-20">
                <div className="inline-block px-10 py-4 rounded-full bg-[#d97706] text-white text-xl font-black mb-10 tracking-widest shadow-[0_0_50px_-10px_rgba(217,119,6,0.6)] transform hover:scale-105 transition-transform cursor-default border-2 border-orange-400/30 uppercase">
                  FINFIT SYSTEM™
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-white tracking-tighter leading-tight drop-shadow-xl">Il metodo esclusivo che ti allena a decidere meglio. <br /><span className="text-[#d97706] relative inline-block mt-2">Sì, meglio!</span></h2>
                <p className="text-2xl text-blue-100/80 font-light max-w-3xl mx-auto">Educazione operativa, non teoria. Simulazioni pratiche, non lezioni frontali.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
                {[
                  { num: "1.", title: "Analizza", icon: BarChart3, text: "Assessment iniziale gratuito per capire dove sei. Nessun giudizio, solo dati." },
                  { num: "2.", title: "Capisci", icon: BrainCircuit, text: "Simulazioni interattive sui 4 programmi. Impari facendo, non solo leggendo." },
                  { num: "3.", title: "Migliora", icon: LineChart, text: "Progressione visibile. Ogni step ti avvicina alla consapevolezza finanziaria." }
                ].map((step, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] relative group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-3 shadow-2xl">
                      <div className="absolute top-8 right-10 text-white/5 font-black text-9xl -z-10 select-none group-hover:text-white/10 transition-colors">{i + 1}</div>
                      <div className="text-[#3b82f6] mb-8 bg-white/10 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-lg ring-1 ring-white/20">
                        <step.icon size={36} strokeWidth={2} />
                      </div>
                      <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-6 tracking-tighter">{step.num}</div>
                      <h3 className="text-4xl font-bold mb-5 text-white tracking-tight">{step.title}</h3>
                      <p className="text-blue-100/70 text-xl leading-relaxed font-light">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-24">
                <a 
                  href="#waitlist"
                  className="inline-block bg-white text-[#0d234f] font-extrabold text-xl px-12 py-6 rounded-full hover:bg-blue-50 transition-all shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:scale-105 hover:shadow-3xl"
                >
                  Voglio iniziare. Sì, meglio!
                </a>
              </div>
            </div>
          </BentoCard>

          {/* 5. HOW IT WORKS (Timeline) */}
          <BentoCard className="md:col-span-5 bg-white flex flex-col border-white shadow-xl shadow-slate-200/50">
             <SectionTitle title="Il tuo percorso in consi.online" />
             <div className="space-y-12 relative pl-4 mt-8 flex-grow">
                {/* Timeline Line */}
                <div className="absolute left-[34px] top-4 bottom-4 w-1 bg-slate-100 rounded-full"></div>
                
                {[
                   { step: 1, title: "Assessment iniziale gratuito", text: "5 minuti per fotografare la tua situazione. Nessun dato sensibile richiesto." },
                   { step: 2, title: "Report personalizzato", text: "Scopri dove sei forte e dove hai gap da colmare." },
                   { step: 3, title: "Scegli il tuo programma", text: "Emergenza, Risparmio e Investimenti, Protezione e Previdenza" },
                   { step: 4, title: "Allenamento operativo", text: "Simulazioni interattive, casi pratici, calcoli reali. Zero teoria inutile." },
                   { step: 5, title: "Progressione misurabile", text: "Vedi i tuoi miglioramenti. Conquisti autonomia decisionale." }
                ].map((item) => (
                   <div key={item.step} className="relative flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-2xl bg-[#3b82f6] text-white font-bold text-xl flex items-center justify-center shrink-0 relative z-10 shadow-lg shadow-blue-500/30 border-[4px] border-white transition-transform group-hover:scale-110 group-hover:rotate-6 ring-1 ring-blue-100">
                         {item.step}
                      </div>
                      <div className="pt-1">
                         <h4 className="font-bold text-xl mb-2 group-hover:text-[#3b82f6] transition-colors" style={{ color: BRAND_DARK }}>{item.title}</h4>
                         <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.text}</p>
                      </div>
                   </div>
                ))}
             </div>
          </BentoCard>

          {/* 6. BIO SECTION */}
          <BentoCard className="md:col-span-7 bg-slate-50/80 flex flex-col border-white shadow-xl">
             <div className="text-center mb-6">
                <Badge text="Chi c'è dietro consi.online" />
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter" style={{ color: BRAND_DARK }}>Leonardo Rossi Polledri</h2>
             <p className="text-center text-[#d97706] font-bold text-xl mb-12 tracking-wide">Educatore Finanziario AIEF n.1771 • 30 anni nel settore</p>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all hover:-translate-y-2">
                   <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <span className="font-extrabold text-2xl">1.</span>
                   </div>
                   <h4 className="font-bold text-lg mb-3 text-slate-900 leading-tight">30+ anni nel settore</h4>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">Esperienza diretta in banche, assicurazioni e wealth management. Ho visto migliaia di decisioni finanziarie, corrette e sbagliate.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all hover:-translate-y-2">
                   <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <CheckCircle2 size={28} />
                   </div>
                   <h4 className="font-bold text-lg mb-3 text-slate-900 leading-tight">Educatore Certificato AIEF</h4>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">Iscritto al Registro AIEF n.1771. Formazione professionale continua su educazione finanziaria e bias cognitivi.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                   <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <Target size={28} />
                   </div>
                   <h4 className="font-bold text-lg mb-3 text-slate-900 leading-tight">Modello fee-only radicale</h4>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">Zero vendita prodotti. Zero commissioni nascoste. Paghi l'educazione, scegli gli strumenti. Trasparenza totale.</p>
                </div>
             </div>

             <div className="mt-auto text-center">
                <a href={LINKS.personalSite} className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-blue-800 text-base font-bold transition-colors px-8 py-4 rounded-full bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 ring-1 ring-slate-100">
                   Leggi di più su www.rossipolledri.com <ArrowRight size={16} />
                </a>
             </div>
          </BentoCard>

          {/* 7. FAQ SECTION */}
          <BentoCard className="md:col-span-12 bg-white">
             <SectionTitle title="Domande frequenti" center />
             <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
               {FAQ_DATA.map((item, index) => (
                 <div key={index} className="bg-white rounded-2xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all px-8 py-2">
                   <AccordionItem 
                     item={item} 
                     isOpen={openFaqIndex === index}
                     onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                   />
                 </div>
               ))}
             </div>
          </BentoCard>

          {/* 8. WAITLIST & CONTACT */}
          <div id="waitlist" className="md:col-span-12 grid md:grid-cols-12 gap-6">
             
             {/* Form Card */}
             <BentoCard dark className="md:col-span-7 lg:col-span-8 flex flex-col justify-center py-16 bg-gradient-to-br from-[#020617] to-[#0d234f]">
                <div className="max-w-lg mx-auto w-full relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">Inizia l'allenamento</h2>
                  <p className="text-blue-200/80 mb-12 text-center text-xl font-light">
                    Entra in lista d'attesa. Ti avvisiamo al lancio con accesso prioritario e condizioni early adopter.
                  </p>
                  
                  <form 
                    name="waitlist" 
                    method="POST" 
                    data-netlify="true" 
                    onSubmit={handleWaitlistSubmit} 
                    className="flex flex-col gap-6"
                  >
                    <input type="hidden" name="form-name" value="waitlist" />
                    
                    <div className="group">
                       <label className="block text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 ml-1 group-focus-within:text-orange-400 transition-colors">Nome *</label>
                       <input 
                         type="text" 
                         name="name"
                         placeholder="Il tuo nome" 
                         required
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:bg-white/10 transition-all placeholder-white/20 text-lg"
                       />
                    </div>

                    <div className="group">
                       <label className="block text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 ml-1 group-focus-within:text-orange-400 transition-colors">Email *</label>
                       <input 
                         type="email" 
                         name="email"
                         placeholder="la-tua-email@esempio.com" 
                         required
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:bg-white/10 transition-all placeholder-white/20 text-lg"
                       />
                    </div>

                    <div className="group">
                       <label className="block text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 ml-1 group-focus-within:text-orange-400 transition-colors">Perché ti interessa? (facoltativo)</label>
                       <textarea 
                         name="reason"
                         rows={2}
                         placeholder="Racconta in due righe cosa ti ha portato qui..." 
                         value={reason}
                         onChange={(e) => setReason(e.target.value)}
                         className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:bg-white/10 transition-all placeholder-white/20 text-lg resize-none"
                       />
                    </div>

                    <div className="flex items-start gap-4 mt-2 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer" onClick={() => setPrivacy(!privacy)}>
                       <input 
                         type="checkbox" 
                         id="privacy" 
                         required 
                         checked={privacy}
                         onChange={(e) => setPrivacy(e.target.checked)}
                         className="mt-1 w-6 h-6 rounded border-white/30 bg-white/10 text-[#d97706] focus:ring-[#d97706] cursor-pointer" 
                       />
                       <label htmlFor="privacy" className="text-sm text-blue-200 cursor-pointer select-none leading-relaxed">
                          Ho letto e accetto <a href={LINKS.privacy} onClick={e => e.stopPropagation()} className="text-white underline decoration-blue-400/50 hover:decoration-orange-400 underline-offset-4 transition-all">Privacy Policy</a> e <a href={LINKS.terms} onClick={e => e.stopPropagation()} className="text-white underline decoration-blue-400/50 hover:decoration-orange-400 underline-offset-4 transition-all">Termini d'uso</a>
                       </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !privacy}
                      className={`
                        w-full py-6 rounded-2xl font-bold text-xl mt-4 transition-all shadow-xl
                        ${isSubmitting || !privacy ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'bg-[#d97706] hover:bg-[#c86a05] hover:-translate-y-1'}
                      `}
                      style={!isSubmitting && privacy ? { backgroundColor: '#d97706' } : {}}
                    >
                      {isSubmitting ? 'Invio in corso...' : submitted ? '✓ Sei in lista!' : "Entra in lista d'attesa. Sì, meglio!"}
                    </button>

                    {error && (
                      <p className="text-red-400 text-sm mt-4 text-center">{error}</p>
                    )}

                    <p className="text-xs text-center text-blue-300/50 mt-4">
                       Zero spam. Ti scriviamo solo per il lancio. Puoi cancellarti quando vuoi.
                    </p>
                  </form>
                </div>
             </BentoCard>

             {/* Profile/Contact Card */}
             <BentoCard className="md:col-span-5 lg:col-span-4 bg-white flex flex-col items-center text-center p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
                 <div className="w-48 h-48 rounded-full bg-slate-200 mb-8 overflow-hidden border-[10px] border-slate-50 shadow-2xl">
                    {/* Profile Image */}
                    <img src="/profile.jpg" alt="Leonardo Rossi Polledri" className="w-full h-full object-cover" />
                 </div>
                 <h3 className="font-bold text-3xl mb-2 text-slate-900 tracking-tight">Leonardo Rossi Polledri</h3>
                 <p className="text-lg text-slate-500 mb-10 font-medium">Founder & Edu-Coach</p>
                 
                 <div className="grid grid-cols-3 gap-4 mb-12 w-full max-w-[280px]">
                     <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 rounded-2xl hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg flex justify-center items-center text-slate-400">
                        <Linkedin size={24} />
                     </a>
                     <a href={LINKS.x} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 rounded-2xl hover:bg-black hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg flex justify-center items-center text-slate-400">
                        <XIcon size={24} />
                     </a>
                     <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 rounded-2xl hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg flex justify-center items-center text-slate-400">
                        <Instagram size={24} />
                     </a>
                     <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 rounded-2xl hover:bg-red-600 hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg flex justify-center items-center text-slate-400 col-span-1">
                        <Youtube size={24} />
                     </a>
                     <a href={LINKS.personalSite} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 rounded-2xl hover:bg-slate-800 hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg flex justify-center items-center text-slate-400 col-span-2 w-full">
                        <span className="text-xs font-bold mr-2">Sito Web</span> <ExternalLink size={18} />
                     </a>
                 </div>
                 
                 <div className="w-full bg-slate-50 p-8 rounded-3xl text-left text-sm border border-slate-100 group hover:border-blue-200 transition-colors">
                    <p className="font-bold mb-2 text-slate-900 text-base">Contatti diretti</p>
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-blue-500"><Mail size={16} /></div>
                      <span className="text-lg">info@consi.online</span>
                    </div>
                 </div>
             </BentoCard>

          </div>

          {/* 9. FOOTER */}
          <BentoCard dark className="md:col-span-12 mt-12 border-0 bg-[#020617]">
             <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-1">
                   <div className="mb-6">
                      <img
                        src="/logos/logo-footer.svg"
                        alt="consi.online"
                        className="h-8 w-auto"
                      />
                   </div>
                   <p className="text-slate-400 text-sm mb-6 font-light leading-relaxed max-w-xs">La prima palestra finanziaria digitale italiana. Preparati a gestire il tuo futuro con consapevolezza.</p>
                   <p className="text-[10px] text-slate-600 font-mono uppercase tracking-[0.2em]">analizza, capisci, migliora</p>
                </div>
                
                <div>
                   <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-500">Scopri</h4>
                   <ul className="space-y-4 text-sm text-slate-400">
                      <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div> Chi sono</a></li>
                      <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div> Il metodo FinFit System™</a></li>
                      <li><a href={LINKS.privacy} className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div> Privacy Policy</a></li>
                      <li><a href={LINKS.terms} className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div> Termini e Condizioni</a></li>
                      <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div> Cookie Policy</a></li>
                   </ul>
                </div>

                <div>
                   <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-500">Contatti</h4>
                   <ul className="space-y-5 text-sm text-slate-400 mb-8">
                      <li className="flex items-center gap-3"><Mail size={16} className="text-slate-600"/> info@consi.online</li>
                      <li className="flex items-center gap-3"><ExternalLink size={16} className="text-slate-600"/> www.rossipolledri.com</li>
                   </ul>
                   <div className="flex gap-4">
                      <a href={LINKS.linkedin} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#0077b5] transition-all"><Linkedin size={18} /></a>
                      <a href={LINKS.x} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all"><XIcon size={18} /></a>
                      <a href={LINKS.instagram} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-pink-600 transition-all"><Instagram size={18} /></a>
                      <a href={LINKS.youtube} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-red-600 transition-all"><Youtube size={18} /></a>
                   </div>
                </div>

                <div>
                   <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-500">Legal</h4>
                   <div className="text-sm text-slate-400 space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                      <p className="font-bold text-white">Leonardo Rossi Polledri</p>
                      <p>Educatore Finanziario AIEF n.1771</p>
                      <p className="font-mono text-xs text-slate-500 pt-2 border-t border-white/10">P.IVA 05528760282</p>
                   </div>
                </div>
             </div>

             <div className="border-t border-white/10 pt-12 text-center md:text-left">
                <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed mb-10 text-justify opacity-50 max-w-6xl mx-auto hover:opacity-100 transition-opacity duration-500">
                   <strong>DISCLAIMER:</strong> consi.online offre educazione finanziaria operativa, non consulenza personalizzata. Non raccomandiamo prodotti specifici, non valutiamo l'adeguatezza di strumenti finanziari, non costruiamo portafogli su misura. Il nostro obiettivo è formare clienti più consapevoli per qualsiasi consulente o servizio finanziario sceglieranno. Per consulenza autorizzata, rivolgiti a professionisti iscritti ai registri Consob/IVASS.
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
                   <p>© 2025 consi.online - Educazione finanziaria operativa, non consulenza</p>
                   <div className="flex items-center gap-2 mt-4 md:mt-0">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <p className="text-slate-300">Sistemi operativi. <span className="text-[#d97706]">Sì, meglio!</span></p>
                   </div>
                </div>
             </div>
          </BentoCard>

        </main>
      </div>
    </div>
  );
}