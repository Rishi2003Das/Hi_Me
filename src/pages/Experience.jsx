const experiences = [
  {
    role: 'Undergraduate Research Intern',
    company: 'IIT Kharagpur — Dept. of Electrical Engineering',
    period: 'May 2025 — Aug 2025',
    desc: 'Contactless Monitoring of Human Vitals and Emotions under Prof. Arabinda Routray. Built non-invasive healthcare monitoring system using FMCW Radar and Thermal Camera Imaging. Predicted heart rate, respiratory rate, and emotional variations using radar and thermal signatures. Improved screening efficiency by ~70%.',
    tags: ['FMCW Radar', 'Signal Processing', 'Thermal Imaging', 'Embedded Systems'],
    color: 'bg-primary',
    textColor: 'text-background',
    tagStyle: 'border-background text-background',
    link: 'https://drive.google.com/file/d/1z1De5r4UOGzgA4RxBbggj0FfsI2Xtv-C/view?usp=sharing',
    linkLabel: 'View Certificate',
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'NIT Rourkela — Prof. Saptarshi Chatterjee',
    period: 'Aug 2024 — Sept 2025',
    desc: 'Acute Lymphoblastic Leukemia Classification using Vision Transformers. Developed a custom lightweight Convoluted Vision Transformer (CvT) with Sparse Self-Attention and Squeeze-and-Excitation Blocks. Edge deployment on Raspberry Pi 4B with Dockerised Flask REST API. Reduced preliminary diagnostic time by 70–80% and screening cost by 60–80%.',
    tags: ['PyTorch', 'Vision Transformers', 'Docker', 'Raspberry Pi'],
    color: 'bg-tertiary',
    textColor: 'text-background',
    tagStyle: 'border-background text-background',
  },
  {
    role: 'Summer Intern',
    company: 'SRK Consulting',
    period: 'Industrial Training',
    desc: 'Worked on STEM (Standard Techno-Economic Model). Reverse-engineered complex TEM Excel systems. Led web migration of techno-economic models with backend abstraction of formulas and assumptions. Designed dashboard-based analytics platform.',
    tags: ['Techno-Economic Modeling', 'Web Migration', 'Analytics', 'Dashboards'],
    color: 'bg-secondary',
    textColor: 'text-background',
    tagStyle: 'border-background text-background',
  },
  {
    role: 'Vocational Training',
    company: 'UCIL (Uranium Corporation of India)',
    period: 'Field Training',
    desc: 'Gained hands-on exposure to underground uranium mines, open cast mining systems, CHP operations, and drilling & bench design systems. Applied core mining engineering concepts in real industrial environments.',
    tags: ['Underground Mining', 'Open Cast', 'CHP Operations', 'Drilling'],
    color: 'bg-primary-fixed',
    textColor: 'text-primary',
    tagStyle: 'border-primary text-primary',
  },
]

const skillCategories = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'AI/ML & Data',
    icon: 'neurology',
    skills: ['PyTorch', 'scikit-learn', 'LangChain', 'OpenCV', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib'],
  },
  {
    title: 'Frameworks',
    icon: 'dns',
    skills: ['ReactJS', 'NextJS', 'FastAPI', 'Flask', 'SpringBoot', 'Hibernate', 'ExpressJS'],
  },
  {
    title: 'Databases',
    icon: 'storage',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite', 'Qdrant Vector DB'],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'cloud',
    skills: ['Docker', 'Git/GitHub', 'GCP', 'Maven', 'Linux', 'Postman'],
  },
  {
    title: 'Domain Tools',
    icon: 'build',
    skills: ['MATLAB', 'QGIS', 'Pix4DMapper', 'ANSYS', 'Power BI', 'MS Excel'],
  },
]

export default function Experience() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="px-6 pt-12 pb-8 max-w-7xl mx-auto mb-12">
        <h1 className="font-headline text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          EXPERIENCE.
          <br />
          <span className="text-tertiary">01 — 04</span>
        </h1>
        <p className="font-body text-xl md:text-2xl font-bold max-w-2xl border-l-8 border-secondary pl-6">
          From IIT Kharagpur research labs to NIT Rourkela's AI projects to
          industrial field training — every role built a sharper engineering edge.
        </p>
      </section>

      {/* Experience Cards */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`${exp.color} ${exp.textColor} border-4 border-primary p-8 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col justify-between min-h-[340px]`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-headline font-black text-5xl opacity-20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`font-headline font-bold text-sm uppercase tracking-widest px-3 py-1 border-2 ${exp.tagStyle}`}>
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-headline text-3xl md:text-4xl font-black uppercase mb-2 tracking-tight">
                  {exp.role}
                </h3>
                <p className="font-headline font-bold text-base uppercase tracking-widest mb-4 opacity-80">
                  {exp.company}
                </p>
                <p className="text-base leading-relaxed mb-6 opacity-90">
                  {exp.desc}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`border-2 px-3 py-1 font-bold text-xs uppercase ${exp.tagStyle}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-headline font-bold text-sm uppercase opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {exp.linkLabel}{' '}
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kaggle Competitions */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-5xl md:text-6xl font-headline font-black uppercase tracking-tighter">
            Competitions
          </h2>
          <div className="h-1 bg-primary flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface border-4 border-primary p-8 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>emoji_events</span>
              <span className="font-headline font-black uppercase text-sm tracking-widest text-tertiary">NeurIPS 2024</span>
            </div>
            <h3 className="font-headline text-2xl font-black uppercase mb-3">BELKA Challenge — Predict New Medicines</h3>
            <p className="font-body text-base mb-4 leading-relaxed">
              Built ML models for small molecule-protein binding prediction and drug discovery acceleration using ChemBERTa, CNNs, Ensemble Models, and Boosting Algorithms.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-primary text-background px-3 py-1 text-xs font-bold uppercase">Top 5% Public LB</span>
              <span className="bg-primary text-background px-3 py-1 text-xs font-bold uppercase">Top 12% Overall</span>
            </div>
          </div>
          <div className="bg-surface border-4 border-primary p-8 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>dermatology</span>
              <span className="font-headline font-black uppercase text-sm tracking-widest text-tertiary">ISIC 2024</span>
            </div>
            <h3 className="font-headline text-2xl font-black uppercase mb-3">Skin Cancer Detection</h3>
            <p className="font-body text-base mb-4 leading-relaxed">
              Worked on early melanoma classification with image preprocessing, AUROC optimisation, and metadata-aware skin lesion classification. Gained expertise in medical image analysis and diagnostic AI systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-primary text-background px-3 py-1 text-xs font-bold uppercase">Medical AI</span>
              <span className="bg-primary text-background px-3 py-1 text-xs font-bold uppercase">AUROC Optimisation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-5xl md:text-6xl font-headline font-black uppercase tracking-tighter">
            Technical Arsenal
          </h2>
          <div className="h-1 bg-primary flex-grow"></div>
          <div className="w-12 h-12 border-4 border-primary bg-primary-fixed"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-surface border-4 border-primary p-6 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <span
                className="material-symbols-outlined text-4xl mb-4 text-tertiary block"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                {cat.icon}
              </span>
              <h3 className="font-headline font-black uppercase text-xl mb-4 border-b-4 border-primary pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary text-background px-3 py-1 text-xs font-bold uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="bg-primary-fixed border-4 border-primary p-8 md:p-12 neo-shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="bg-primary text-background font-headline text-4xl font-black p-4 rotate-[-3deg] shrink-0">
                8.35
              </div>
              <div>
                <h3 className="font-headline text-2xl md:text-3xl font-black uppercase">
                  Dual Degree (B.Tech + M.Tech)
                </h3>
                <p className="font-body font-bold text-lg">
                  Mining Engineering & Remote Sensing // NIT Rourkela
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface border-4 border-primary p-8 neo-shadow flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-primary text-background font-headline text-4xl font-black p-4 rotate-[-3deg] shrink-0">
                10.0
              </div>
              <div>
                <h3 className="font-headline text-xl md:text-2xl font-black uppercase">
                  Higher Secondary Education
                </h3>
                <p className="font-body font-bold">
                  Salt Lake School (E.M.) // Kolkata
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
