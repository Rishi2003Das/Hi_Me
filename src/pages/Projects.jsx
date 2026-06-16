import { Link } from 'react-router-dom'
import globeTrotterPic from '../assets/GlobeTrotter.jpeg'
import temDashboardPic from '../assets/tem_dashboard.png'
import gadgetHivePic from '../assets/GadgetHive.jpeg'
import workflowCervelloPic from '../assets/Workflow_Cervello.jpeg'

export default function Projects() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="px-6 pt-12 pb-8 max-w-7xl mx-auto mb-12">
        <h1 className="font-headline text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          WORK.
          <br />
          <span className="text-tertiary">01 — 06</span>
        </h1>
        <p className="font-body text-xl md:text-2xl font-bold max-w-2xl border-l-8 border-secondary pl-6">
          AI-powered service platforms (SaaS), RAG engines in Web Applications,
          Coomputer Vision and Geospatial imaging, NLP pipelines, and Backend systems with complete CI/CD pipeline.
          Every project solves a real-world industry problem with entreprise-grade engineering solutions.
        </p>
      </section>

      {/* Projects Grid */}
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* ===== Project: TEM Web Platform (Large Featured) ===== */}
          <div className="md:col-span-8 group">
            <div className="bg-surface-bright border-4 border-primary p-1 neo-shadow-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--color-primary)] transition-all duration-150 h-full flex flex-col">
              <div className="relative overflow-hidden aspect-video border-b-4 border-primary">
                <img
                  alt="Techno-Economic Model (TEM) Web Platform"
                  className="w-full h-full object-cover"
                  src={temDashboardPic}
                />
                <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary font-headline font-black px-4 py-1 uppercase text-sm">
                  Full Stack / Consulting
                </div>
              </div>
              <div className="p-8 grow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter">
                    TEM Web Platform
                  </h2>
                  <span className="material-symbols-outlined text-4xl">
                    analytics
                  </span>
                </div>
                <p className="font-body text-lg mb-4 leading-relaxed">
                  Engineered a secure web-based transformation of SRK Consulting’s proprietary Techno-Economic Model (TEM), migrating complex Excel-driven calculations, assumptions, and financial workflows into a scalable client-server architecture with encrypted databases, role-based access control, dynamic dashboards, and backend-secured business logic to enable interactive scenario analysis while protecting intellectual property and computational models.
                </p>
                <p className="font-body text-sm font-bold text-secondary mb-6">
                  💼 SDE Intern // SRK Consulting (Summer 2026)
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['PYTHON', 'TYPESCRIPT', 'REACTJS', 'MONGODB', 'DOCKER', 'GIT'].map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-primary px-3 py-1 font-bold text-xs uppercase bg-surface-container"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://tem-mining.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 font-headline font-black border-2 border-primary neo-shadow hover:bg-primary-fixed hover:text-primary transition-all uppercase"
                  >
                    WORKING PROTOTYPE{' '}
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </a>
                  <a
                    href="https://www.srk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-8 py-4 font-headline font-black border-2 border-primary neo-shadow hover:bg-primary-fixed hover:text-primary transition-all uppercase"
                  >
                    SRK Consulting{' '}
                    <span className="material-symbols-outlined">
                      corporate_fare
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Project 4: GadgetHive ===== */}
          <div className="md:col-span-4 group">
            <div className="bg-surface-bright border-4 border-primary p-1 neo-shadow-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--color-primary)] transition-all duration-150 h-full flex flex-col">
              <div className="relative overflow-hidden aspect-video border-b-4 border-primary bg-background">
                <img
                  alt="GadgetHive Secure Marketplace"
                  className="w-full h-full object-cover"
                  src={gadgetHivePic}
                />
                <div className="absolute top-4 left-4 bg-primary text-background font-headline font-black px-4 py-1 uppercase text-sm">
                  SECURE / BACKEND
                </div>
              </div>
              <div className="p-8 grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="font-headline text-3xl font-black uppercase tracking-tighter">
                      GadgetHive
                    </h2>
                    <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                      security
                    </span>
                  </div>
                  <p className="font-body text-base mb-6 leading-relaxed">
                    Secure marketplace backend with encrypted storage, FIDO2/WebAuthn
                    passwordless authentication, session management, and SQLite relational DB.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['FLASK', 'SQLITE', 'FIDO2', 'BCRYPT'].map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-primary px-3 py-1 font-bold text-xs uppercase bg-surface-container"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto pt-4">
                    <a
                      href="https://gadgethive.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-background px-4 py-2.5 font-headline font-black text-xs border-2 border-primary neo-shadow-sm hover:bg-primary-fixed hover:text-primary transition-all uppercase"
                    >
                      VIEW PROTOTYPE{' '}
                      <span className="material-symbols-outlined text-sm">
                        arrow_outward
                      </span>
                    </a>
                    <a
                      href="https://github.com/Rishi2003Das/GadgetHive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-4 py-2.5 font-headline font-black text-xs border-2 border-primary neo-shadow-sm hover:bg-primary-fixed hover:text-primary transition-all uppercase"
                    >
                      VIEW REPOSITORY{' '}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Project 1: GlobeTrotter (Large Featured) ===== */}
          <div className="md:col-span-8 group">
            <div className="bg-surface-bright border-4 border-primary p-1 neo-shadow-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--color-primary)] transition-all duration-150 h-full flex flex-col">
              <div className="relative overflow-hidden aspect-video border-b-4 border-primary">
                <img
                  alt="GlobeTrotter AI Travel Platform"
                  className="w-full h-full object-cover"
                  src={globeTrotterPic}
                />
                <div className="absolute top-4 left-4 bg-primary text-background font-headline font-black px-4 py-1 uppercase text-sm">
                  AI / TRAVEL PLATFORM
                </div>
              </div>
              <div className="p-8 grow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter">
                    GlobeTrotter
                  </h2>
                  <span className="material-symbols-outlined text-4xl">
                    travel_explore
                  </span>
                </div>
                <p className="font-body text-lg mb-4 leading-relaxed">
                  AI-powered travel planning platform built at the Odoo Offline
                  Finale Hackathon, Gandhinagar. Features multi-city itinerary
                  generation, AI activity recommendations, dynamic budget
                  forecasting, and public itinerary sharing.
                </p>
                <p className="font-body text-sm font-bold text-secondary mb-6">
                  🏆 Ranked Top-20 among 400+ teams • Reduced planning effort by 80% • Improved budget reliability by 3×
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['NEXTJS', 'MONGODB', 'OPENAI API', 'PYTORCH', 'EXPRESSJS', 'TAILWINDCSS'].map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-primary px-3 py-1 font-bold text-xs uppercase bg-surface-container"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://globe-trotter-nitrous.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-500 text-background px-8 py-4 font-headline font-black border-2 border-primary neo-shadow hover:bg-primary-fixed hover:text-primary transition-all uppercase"
                  >
                    WORKING PROTOTYPE{' '}
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </a>
                  <a
                    href="https://github.com/Rishi2003Das/GlobeTrotter_NITROUS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-8 py-4 font-headline font-black border-2 border-primary neo-shadow hover:bg-primary-fixed hover:text-primary transition-all uppercase"
                  >
                    VIEW REPOSITORY{' '}
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Hackathon Stats Card ===== */}
          <div className="md:col-span-4">
            <div className="bg-primary text-background border-4 border-primary p-8 h-full flex flex-col justify-center neo-shadow-lg">
              <span
                className="material-symbols-outlined text-6xl mb-6 text-primary-fixed"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                trophy
              </span>
              <h3 className="font-headline text-5xl font-black uppercase mb-2">
                5+
              </h3>
              <p className="font-headline text-xl font-bold uppercase tracking-widest text-primary-fixed mb-8">
                Hackathon Awards
              </p>
              <p className="font-body text-sm leading-relaxed opacity-80">
                Consistent top finishes at IIT(ISM) Dhanbad HackFest, Odoo Finale,
                IIIT Kalyani StatusCode, Amazon ML Challenge, IEEE Conference Kolkata Chapter,
                LEASH BELKA Challenge on Kaggle and Reverie Language Technologies.
              </p>
            </div>
          </div>

          {/* ===== Project 2: Cervello ===== */}
          <div className="md:col-span-6 group">
            <div className="bg-surface-bright border-4 border-primary p-1 neo-shadow-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--color-primary)] transition-all duration-150 h-full flex flex-col">
              <div className="relative overflow-hidden aspect-square border-b-4 border-primary">
                <img
                  alt="Cervello Enterprise RAG System"
                  className="w-full h-full object-cover"
                  src={workflowCervelloPic}
                />
                <div className="absolute top-4 left-4 bg-secondary text-on-primary font-headline font-black px-4 py-1 uppercase text-sm">
                  RAG / ENTERPRISE AI
                </div>
              </div>
              <div className="p-8 grow">
                <h2 className="font-headline text-4xl font-black uppercase tracking-tighter mb-4">
                  Cervello
                </h2>
                <p className="font-body text-lg mb-4 leading-relaxed">
                  Enterprise RAG system with real-time retrieval-augmented generation,
                  knowledge retrieval engine, and AI support ticketing. Reduced support
                  resolution time by 50–70% and manual workload by 60%.
                </p>
                <p className="font-body text-sm font-bold text-secondary mb-6">
                  🏆 2nd Position — HackFest 2025 at IIT(ISM) Dhanbad
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['FASTAPI', 'OPENAI API', 'QDRANT', 'MONGODB', 'PYTORCH', 'FAISS'].map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-primary px-3 py-1 font-bold text-xs uppercase bg-surface-container"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-auto pt-4">
                  <a
                    href="https://github.com/Rishi2003Das/Cervello"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-6 py-3 font-headline font-black text-sm border-2 border-primary neo-shadow hover:bg-primary-fixed hover:text-primary transition-all uppercase"
                  >
                    VIEW REPOSITORY{' '}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Project 3: Bhashamitra AI ===== */}
          <div className="md:col-span-6 group">
            <div className="bg-primary-fixed border-4 border-primary p-1 neo-shadow-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--color-primary)] transition-all duration-150 h-full flex flex-col">
              <div className="relative overflow-hidden aspect-square border-b-4 border-primary bg-background">
                <div className="p-12 h-full w-full flex flex-col justify-center items-center gap-4">
                  <span className="material-symbols-outlined text-[80px] text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>
                    translate
                  </span>
                  <div className="text-center">
                    <p className="font-headline font-black text-2xl uppercase">Hindi → Bhojpuri</p>
                    <p className="font-body text-sm opacity-60 mt-2">Real-time dialect translation</p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="w-20 h-8 bg-tertiary border-2 border-primary"></div>
                    <div className="w-20 h-8 bg-secondary border-2 border-primary"></div>
                    <div className="w-20 h-8 bg-primary border-2 border-primary"></div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-primary text-background font-headline font-black px-4 py-1 uppercase text-sm">
                  NLP / TRANSLATION
                </div>
              </div>
              <div className="p-8 grow">
                <h2 className="font-headline text-4xl font-black uppercase tracking-tighter mb-4">
                  Bhashamitra AI
                </h2>
                <p className="font-body text-lg mb-4 leading-relaxed">
                  Hindi-to-Bhojpuri dialect translation platform with real-time
                  speech-to-text pipeline using Whisper API and mBART-50 fine-tuning.
                  Docker-deployed multilingual NLP system.
                </p>
                <p className="font-body text-sm font-bold text-secondary mb-6">
                  🏆 1st Runners-Up — Reverie Language Technologies
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['REACTJS', 'NLP', 'PYTORCH', 'HUGGINGFACE API', 'INDICBERT'].map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-primary px-3 py-1 font-bold text-xs uppercase bg-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-auto pt-4">
                  <a
                    href="https://github.com/Rishi2003Das/Bhashamitra.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-6 py-3 font-headline font-black text-sm border-2 border-primary neo-shadow hover:bg-primary-fixed hover:text-primary transition-all uppercase"
                  >
                    VIEW REPOSITORY{' '}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Project 5: Anime Face Generator ===== */}
          <div className="md:col-span-6 group">
            <div className="bg-tertiary text-background border-4 border-primary p-1 neo-shadow-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--color-primary)] transition-all duration-150 h-full flex flex-col">
              <div className="p-8 grow">
                <span className="material-symbols-outlined text-5xl mb-4 block" style={{ fontVariationSettings: '"FILL" 1' }}>
                  auto_awesome
                </span>
                <h2 className="font-headline text-3xl font-black uppercase tracking-tighter mb-4">
                  Anime Face GAN
                </h2>
                <p className="font-body text-base mb-6 leading-relaxed opacity-90">
                  GAN model for anime face image generation. Trained on
                  AnimeFaceDataset. Achieved Kaggle Bronze Medal with 500+
                  notebook views.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['GANS', 'PYTORCH', 'PYTHON'].map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-background px-3 py-1 font-bold text-xs uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== Project 6: AlgoCash ===== */}
          <div className="md:col-span-6 group">
            <div className="bg-secondary text-background border-4 border-primary p-1 neo-shadow-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--color-primary)] transition-all duration-150 h-full flex flex-col">
              <div className="p-8 grow">
                <span className="material-symbols-outlined text-5xl mb-4 block" style={{ fontVariationSettings: '"FILL" 1' }}>
                  candlestick_chart
                </span>
                <h2 className="font-headline text-3xl font-black uppercase tracking-tighter mb-4">
                  AlgoCash
                </h2>
                <p className="font-body text-base mb-6 leading-relaxed opacity-90">
                  Equal-weight S&P500 portfolio analysis system with sector
                  exposure and benchmark comparison pipeline using financial APIs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['PYTHON', 'PANDAS', 'NUMPY', 'FINANCIAL APIS'].map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-background px-3 py-1 font-bold text-xs uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <section className="mt-24 bg-secondary text-on-primary p-12 border-4 border-primary neo-shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
              LET'S COLLABORATE
            </h2>
            <p className="font-body text-xl font-bold mb-10 max-w-xl">
              Open to hackathons, research collaborations, open-source projects,
              and building innovative AI-powered solutions together.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-background px-10 py-5 font-headline font-black text-2xl uppercase border-4 border-primary hover:bg-background hover:text-primary transition-all neo-shadow active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              GET IN TOUCH
            </Link>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[300px]">
              rocket_launch
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}
