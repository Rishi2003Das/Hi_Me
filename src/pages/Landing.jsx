import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const domains = [
  {
    icon: 'neurology',
    number: '01',
    title: 'AI/ML Engineer',
    desc: 'Building Vision Transformers, deep learning pipelines, and generative models. Researching medical AI (leukemia classification, vital monitoring) and drug discovery with PyTorch, scikit-learn, and HuggingFace.',
    tags: ['PyTorch', 'Computer Vision', 'NLP'],
    bg: 'bg-background',
    text: '',
    iconColor: 'text-tertiary',
    span: 'md:col-span-7',
  },
  {
    icon: 'terminal',
    number: '02',
    title: 'SDE // Backend',
    desc: 'Designing scalable backend systems, RESTful APIs, and microservice architectures using FastAPI, Flask, SpringBoot, and Docker. Building full-stack applications with React and Next.js.',
    tags: ['FastAPI', 'SpringBoot', 'Docker'],
    bg: 'bg-primary-fixed',
    text: '',
    iconColor: 'text-primary',
    span: 'md:col-span-5',
  },
  {
    icon: 'analytics',
    number: '03',
    title: 'Data Science & Research',
    desc: 'Competing in NeurIPS and Kaggle challenges. Published research in medical AI and healthcare systems. Experience with signal processing, image analysis, and statistical modeling.',
    tags: ['Kaggle', 'NeurIPS', 'Medical AI'],
    bg: 'bg-secondary',
    text: 'text-background',
    iconColor: 'text-background',
    tagStyle: 'bg-background text-primary',
    span: 'md:col-span-5',
  },
  {
    icon: 'monitoring',
    number: '04',
    title: 'GenAI & LLM Systems',
    desc: 'Building RAG pipelines, agentic AI systems, and LLM-powered applications. Experience with LangChain, Qdrant vector DB, prompt engineering, and enterprise knowledge retrieval engines.',
    tags: ['LangChain', 'RAG', 'Qdrant'],
    bg: 'bg-tertiary',
    text: 'text-background',
    iconColor: 'text-background',
    tagStyle: 'bg-background text-primary',
    span: 'md:col-span-7',
  },
]

const techStack =
  'Python // Java // JavaScript // SQL // ReactJS // NextJS // FastAPI // Flask // SpringBoot // PyTorch // scikit-learn // LangChain // OpenCV // Pandas // NumPy // MongoDB // PostgreSQL // Qdrant // Docker // Git // GCP // Linux'

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
        <div className="absolute top-10 right-10 opacity-[0.06] pointer-events-none select-none">
          <span className="text-[18rem] font-black font-headline leading-none">
            01
          </span>
        </div>

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary-fixed text-primary px-4 py-1 border-2 border-primary font-black uppercase tracking-widest text-sm">
              Software Engineer × AI/ML Researcher
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-black leading-[0.9] tracking-tighter uppercase">
              Rishi Das
            </h1>

            <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed">
              Dual Degree (B.Tech + M.Tech) student at NIT Rourkela in Mining
              Engineering & Remote Sensing, with deep interdisciplinary focus
              on AI/ML, backend engineering, and generative AI systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="bg-primary text-primary-fixed hover:bg-primary-fixed hover:text-primary px-8 py-4 font-black font-headline text-lg border-4 border-primary neo-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
              >
                View Portfolio
              </Link>
              <a
                href="https://github.com/Rishi2003Das"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-on-primary hover:bg-background hover:text-secondary px-8 py-4 font-black font-headline text-lg border-4 border-primary neo-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhW0PhqAkxEY2T7NDGBeeu_-_VlCmO6d3EyX56H74MQIkGQDZMa5RURBMWrQasM328ZHirB-GM177smKUdyHQ8mleVOOrsDNC8KTqT5US9eM1sGUyPIZRK6eMGxKLXUJffQkvNTmUWQwHGrmtNPamghbZmxM_mnnurLNSISAxfwuXOlNvk7ZWXu0aBBsG5D8qnJ98m7zAN1kPe9i09pDmgfjf2oQfHQRRIkteFvu8M91fP_2T5P2si5xGcjLo9MUefEdKkYP3smzlK"
                alt="Rishi Das — AI/ML & Software Engineer"
                style={{ transform: 'scale(1.05)' }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-fixed text-primary p-4 sm:p-6 border-4 border-primary neo-shadow font-headline font-black text-xl sm:text-2xl uppercase">
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
              <h2 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter">
                Strategic Domains
              </h2>
              <p className="text-xl max-w-xl">
                Interdisciplinary expertise spanning AI/ML, software engineering,
                data science, and generative AI — despite a core mining engineering background.
              </p>
            </div>
            <div className="hidden md:block text-8xl font-black opacity-[0.06] font-headline">
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
                <h3 className="text-3xl md:text-4xl font-headline font-black uppercase mb-4">
                  {d.title}
                </h3>
                <p className="text-lg mb-6 leading-snug">{d.desc}</p>
                <div className="flex flex-wrap gap-2">
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo-vrtAz_kMXJkBiMPForfNmKhlpBaaNVNRVpg9hp-2blEqzDNNq1DusqN7wlKgEoJNg1jt_yKNQPeCIQQ2lBJA3s3KUvN0j4UPT40z0GHLaZU34-KCBTtgjmv5skJLf7wS3C1etyD8l1KR_Pw-J8LUwg9Q5Z3Hdc4W3NqbiMPtC95WhIlsawyv5dmoflZtcQwFLiQup1Y5QHdXtydWe2Yq9nZOqtQjs5st_cJcdcBQ6Shcr-BWvXeSc3QLdiFeQTCUrEw9yCoN8mp"
                  alt="Research visualization — contactless vital monitoring using FMCW radar and thermal imaging"
                />
              </div>
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-primary"></div>
                <span className="font-headline font-black uppercase tracking-widest text-secondary">
                  Featured Research // IIT Kharagpur
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black uppercase leading-none tracking-tighter">
                Contactless <br /> Vital & Emotion <br /> Monitoring
              </h2>
              <p className="text-xl leading-relaxed">
                Non-invasive healthcare monitoring using FMCW Radar and Thermal
                Camera Imaging under Prof. Arabinda Routray. Predicting heart
                rate, respiratory rate, and emotional variations using radar
                and thermal signatures. Improved screening efficiency by ~70%.
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
            Actively seeking opportunities in AI/ML Engineering, SDE, Backend
            Engineering, Generative AI & LLM Systems, Data Science, and Applied
            Research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="YOUR_EMAIL@DOMAIN.COM"
              className="bg-background border-4 border-primary px-8 py-4 font-headline font-black text-lg focus:ring-0 focus:outline-none placeholder:opacity-50 min-w-0 sm:min-w-[300px]"
            />
            <button className="bg-primary text-background px-12 py-4 font-black font-headline text-lg border-4 border-primary neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase">
              CONNECT
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
