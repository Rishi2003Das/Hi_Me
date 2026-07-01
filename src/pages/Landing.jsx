import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import portfolioPic from '../assets/Portfolio_Pic.png'
import iitKgpPic from '../assets/IIT_KGP.jpg'
import temDashboardPic from '../assets/tem_dashboard.png'


const domains = [
  {
    icon: 'memory',
    number: '01',
    title: 'AI/ML Researcher',
    desc: 'Designing and implementing deep learning architectures like Convoluted Vision Transformers (CVT) and GANs. Researching medical AI at NIT Rourkela (Leukemia classification on Raspberry Pi) and contactless vitals monitoring using FMCW radar and thermal imaging at IIT Kharagpur. Top 5% in NeurIPS BELKA challenge.',
    tags: ['PyTorch', 'Vision Transformers', 'Medical AI'],
    bg: 'bg-background',
    text: '',
    iconColor: 'text-tertiary',
    span: 'md:col-span-7',
    cv: '/722MN1055_Research_Internship.pdf',
  },
  {
    icon: 'terminal',
    number: '02',
    title: 'SDE // Backend',
    desc: 'Building scalable RESTful APIs, microservices, and secure backends using FastAPI, Flask, SpringBoot, and Docker. Developed GlobeTrotter (Top-20 at Odoo Hackathon), GadgetHive (Flask, Bcrypt, FIDO2 passkeys), and Cervello (real-time RAG with Qdrant vector DB).',
    tags: ['Flask', 'MongoDB', 'TypeScript', 'SpringBoot', 'Docker'],
    bg: 'bg-primary-fixed',
    text: '',
    iconColor: 'text-primary',
    span: 'md:col-span-5',
    cv: '/722MN1055_RishiDas_SDE.pdf',
  },
  {
    icon: 'analytics',
    number: '03',
    title: 'Data Science & Analyst',
    desc: 'Analyzing complex datasets and building predictive pipelines. Experienced with data preprocessing, augmentation, and evaluation metrics (Binary AUROC) in Kaggle challenges and medical imaging. Proficient in Pandas, NumPy, scikit-learn, Power BI, and MS Excel.',
    tags: ['Python', 'MS Excel', 'Power BI', 'SQL'],
    bg: 'bg-secondary',
    text: 'text-background',
    iconColor: 'text-background',
    tagStyle: 'bg-background text-primary',
    span: 'md:col-span-5',
    cv: '/722MN1055_RishiDas_AI.pdf',
  },
  {
    icon: 'show_chart',
    number: '04',
    title: 'Financial Analyst',
    desc: 'Conducted market research and simulated trading at Finlatics (70-80% accuracy). Built AlgoCash, a Python-based portfolio construction and analysis pipeline evaluating S&P 500 sector exposure and rebalancing logic. Led NIT Rourkela Finance Club as Secretary.',
    tags: ['Portfolio Management', 'Algo Trading', 'Fundamental and Technical Analysis'],
    bg: 'bg-tertiary',
    text: 'text-background',
    iconColor: 'text-background',
    tagStyle: 'bg-background text-primary',
    span: 'md:col-span-7',
    cv: '/722MN1055_RishiDas_Finance.pdf',
  },
]

const techStack =
  'Python // Java // JavaScript // SQL // ReactJS // Flask // SpringBoot // PyTorch // LangChain // OpenCV // MongoDB // PostgreSQL // Qdrant // Docker // Git // Linux'

export default function Landing() {
  const heroImgRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroImgRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      heroImgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <>
      {/* ========== HERO ========== */}
      <section
        id="hero"
        className="min-h-[90vh] px-6 py-12 flex flex-col justify-center border-b-4 border-primary relative overflow-hidden"
      >
        {/* Decorative number */}
        <div className="absolute top-10 right-10 opacity-[0.06] pointer-events-none select-none hidden md:block">
          <span className="text-[18rem] font-black font-headline leading-none">
            01
          </span>
        </div>

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary-fixed text-primary px-4 py-1 border-2 border-primary font-black uppercase tracking-widest text-sm">
              Software Engineer × AI/ML Researcher
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black leading-[0.9] tracking-tighter uppercase">
              Rishi Das
            </h1>

            <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed">
              Dual Degree (B.Tech + M.Tech) student at NIT Rourkela in Mining
              Engineering & Remote Sensing, with deep interdisciplinary focus
              on Computer Vision, Backend systems and  DevOps engineering.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <a
                href="https://drive.google.com/file/d/1eSBhnPcIi3qUnEA0hv1he6lg4oo-kHey/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-fixed hover:bg-primary-fixed hover:text-primary px-6 py-3 sm:px-8 sm:py-4 font-black font-headline text-base sm:text-lg border-4 border-primary neo-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-center"
              >
                View Portfolio
              </a>
              <a
                href="https://github.com/Rishi2003Das"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-on-primary hover:bg-background hover:text-secondary px-6 py-3 sm:px-8 sm:py-4 font-black font-headline text-base sm:text-lg border-4 border-primary neo-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-center"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="aspect-square bg-surface border-4 border-primary neo-shadow-lg overflow-hidden">
              <img
                ref={heroImgRef}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src={portfolioPic}
                alt="Rishi Das — AI/ML & Software Engineer"
                style={{ transform: 'scale(1.05)' }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-primary-fixed text-primary p-3 sm:p-6 border-4 border-primary neo-shadow font-headline font-black text-lg sm:text-2xl uppercase">
              EST. 2003
            </div>
          </div>
        </div>
      </section>

      {/* ========== STRATEGIC DOMAINS ========== */}
      <section id="domains" className="px-6 py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter">
                Strategic Domains
              </h2>
              <p className="text-xl max-w-xl">
                Interdisciplinary expertise spanning AI Research, Backend Systems,
                Data Science, Finance and Data Analyst and Technical Consulting — despite a core mining engineering background.
              </p>
            </div>
            <div className="hidden lg:block text-8xl font-black opacity-[0.06] font-headline">
              DOMAINS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {domains.map((d) => (
              <div
                key={d.number}
                className={`${d.span} ${d.bg} ${d.text} border-4 border-primary p-8 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
              >
                <div className="flex justify-between items-start mb-10">
                  <span
                    className={`material-symbols-outlined text-5xl ${d.iconColor}`}
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {d.icon}
                  </span>
                  <span className="font-headline font-black text-4xl opacity-20">
                    {d.number}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black uppercase mb-4">
                  {d.title}
                </h3>
                <p className="text-lg mb-6 leading-snug">{d.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-bold uppercase ${d.tagStyle || 'bg-primary text-background'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={d.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 font-headline font-black border-2 border-primary neo-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase text-xs ${
                      d.number === '03' || d.number === '04'
                        ? 'bg-background text-primary hover:bg-primary-fixed hover:text-primary'
                        : 'bg-primary text-background hover:bg-primary-fixed hover:text-primary'
                    }`}
                  >
                    View CV{' '}
                    <span className="material-symbols-outlined text-sm">
                      description
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TECH STACK MARQUEE ========== */}
      <section className="border-y-4 border-primary overflow-hidden whitespace-nowrap bg-primary py-5">
        <div className="flex gap-12 animate-marquee">
          <span className="text-background font-headline font-black text-4xl md:text-5xl uppercase italic tracking-widest">
            {techStack}
          </span>
          <span className="text-background font-headline font-black text-4xl md:text-5xl uppercase italic tracking-widest">
            {techStack}
          </span>
        </div>
      </section>

      {/* ========== FEATURED RESEARCH ========== */}
      <section id="research-spotlight" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-video bg-surface border-4 border-primary neo-shadow-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={iitKgpPic}
                  alt="Research visualization — contactless vital monitoring using FMCW radar and thermal imaging"
                />
              </div>
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-primary"></div>
                <span className="font-headline font-black uppercase tracking-widest text-secondary">
                  Summer Research Intern // IIT Kharagpur
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black uppercase leading-none tracking-tighter">
                Contactless <br /> Vital & Emotion <br /> Monitoring
              </h2>
              <p className="text-xl leading-relaxed">
                Non-invasive healthcare monitoring using FMCW Radar and Thermal
                Camera Imaging under Prof. Arabinda Routray. Predicting heart
                rate, respiratory rate, and emotional variations using radar
                and thermal signatures. Improved screening efficiency by 70%.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/file/d/1z1De5r4UOGzgA4RxBbggj0FfsI2Xtv-C/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-headline font-black text-lg uppercase border-b-4 border-tertiary hover:bg-tertiary hover:text-background transition-colors p-1"
                >
                  View Certificate{' '}
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                </a>
                <a
                  href="https://www.iitkgp.ac.in/department/EE/faculty/ee-aroutray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-headline font-black text-lg uppercase border-b-4 border-primary hover:bg-primary hover:text-background transition-colors p-1"
                >
                  Prof. Routray{' '}
                  <span className="material-symbols-outlined">person</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED PROJECT ========== */}
      <section id="project-spotlight" className="px-6 py-20 bg-surface border-t-4 border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text column - 1st on mobile, 1st on desktop */}
            <div className="space-y-8 order-1 md:order-1">
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-primary"></div>
                <span className="font-headline font-black uppercase tracking-widest text-secondary">
                  Summer SDE Intern // SRK Consulting
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black uppercase leading-none tracking-tighter">
                Techno-Economic <br /> Model (TEM) <br /> Web Platform
              </h2>
              <p className="text-xl leading-relaxed">
                Engineered a secure web-based transformation of SRK Consulting’s proprietary Techno-Economic Model (TEM), migrating complex Excel-driven calculations, assumptions, and financial workflows into a scalable client-server architecture with encrypted databases, role-based access control, dynamic dashboards, and backend-secured business logic to enable interactive scenario analysis while protecting intellectual property and computational models.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://tem-mining.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-headline font-black text-lg uppercase border-b-4 border-tertiary hover:bg-tertiary hover:text-background transition-colors p-1"
                >
                  View Prototype{' '}
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                </a>
                <a
                  href="https://www.srk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-headline font-black text-lg uppercase border-b-4 border-primary hover:bg-primary hover:text-background transition-colors p-1"
                >
                  SRK Consulting{' '}
                  <span className="material-symbols-outlined">corporate_fare</span>
                </a>
              </div>
            </div>

            {/* Image column - 2nd on mobile, 2nd on desktop */}
            <div className="order-2 md:order-2">
              <div className="aspect-video bg-surface border-4 border-primary neo-shadow-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={temDashboardPic}
                  alt="Techno-Economic Model (TEM) Web Platform Dashboard - SRK Consulting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT CTA ========== */}
      <section
        id="cta"
        className="bg-primary-fixed px-6 py-24 text-center border-t-4 border-primary"
      >
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-headline font-black uppercase tracking-tighter leading-none">
            Let's Build <br /> Together.
          </h2>
          <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto">
            Actively seeking opportunities in AI/ML Research, SDE, Backend
            Engineering, Data Analyst and Science and Finance Analyst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="YOUR_EMAIL@DOMAIN.COM"
              className="bg-background border-4 border-primary px-4 py-3 sm:px-8 sm:py-4 font-headline font-bold text-base sm:text-lg focus:ring-0 focus:outline-none placeholder:opacity-50 min-w-0 sm:min-w-75 w-full sm:w-auto"
            />
            <button className="bg-primary text-background px-8 py-3 sm:px-12 sm:py-4 font-black font-headline text-base sm:text-lg border-4 border-primary neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase w-full sm:w-auto">
              CONNECT
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
