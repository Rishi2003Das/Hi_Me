const stats = [
  { value: '05+', label: 'Hackathon Wins', color: 'text-secondary' },
  { value: '03+', label: 'Internships', color: 'text-tertiary' },
  { value: '02+', label: 'Certifications', color: 'text-primary' },
  { value: '01', label: 'IEEE Paper', color: 'text-primary-fixed-dim' },
]

const timeline = [
  { year: '2025', title: "April Cohort '26 — Reverie Language Technology", org: "1st Runner's Up" },
  { year: '2025', title: 'Odoo 2025 Hackathon — Gandhinagar, Gujarat', org: 'Top 20 Finalist' },
  { year: '2025', title: 'Hackfest 2025 — 2nd Place', org: 'IIT (ISM) Dhanbad' },
  { year: '2025', title: 'IEEE Conference — 3rd Position', org: 'IEEE IMS Kolkata Chapter' },
  { year: '2024', title: 'Kaggle Competitions — ISIC Skin Cancer Research Competition', org: 'Research Competition' },
  { year: '2024', title: 'Amazon ML Challenge — All-India Ranking', org: 'Top 10%' },
  { year: '2024', title: 'EY Techathon — Qualified twice till 3rd Round', org: 'Prototype Round' },
  { year: '2024', title: 'StatusCode 1.0 — 3rd Place', org: 'IIIT Kalyani / IISER Kalyani' },
  { year: '2024', title: "IIT BBSR MUN '24 — Special Mention", org: 'AWARD' },
  { year: '2024', title: 'Kaggle Competitions — Leash BELKA Stanford research competition', org: 'Top 200 / 1800' },
  { year: '2023', title: 'Best Delegate — NITRIMUN 2023', org: 'NIT Rourkela' },
  { year: '2023', title: "Eleganos MUN '23 Bhubaneswar — High Recommendation", org: 'AWARD' },
  { year: '2022', title: 'JEE Mains Qualified — Top 5 Percentile', org: '14 Lakh+ Candidates' },
  { year: '2022', title: 'Qualified for JEE Advanced (IIT-JEE)', org: 'Academic' },
  { year: '2017', title: 'National Talent Search Examination (NTSE)', org: 'State Round (2 Rounds)' },
]

export default function Achievements() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="px-6 pt-12 pb-8 max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-end gap-6 mb-12">
          <h1 className="font-headline text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            WINNING
            <br />
            <span className="text-tertiary">STREAK.</span>
          </h1>
          <div className="bg-primary-fixed p-6 border-4 border-primary neo-shadow max-w-xs mb-4">
            <p className="font-headline font-bold text-xl uppercase italic">
              "Execution is the only differentiator."
            </p>
          </div>
        </div>
        <p className="font-body text-xl md:text-2xl font-bold max-w-2xl border-l-8 border-secondary pl-6">
          A definitive record of hackathon victories, research contributions,
          and academic excellence — NIT Rourkela, Dual Degree (B.Tech. + M.Tech.) 2027.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface border-4 border-primary p-6 neo-shadow-sm flex flex-col items-center transition-all cursor-default"
            >
              <span className={`font-headline text-5xl font-black ${s.color}`}>
                {s.value}
              </span>
              <span className="font-headline font-bold uppercase text-sm tracking-widest mt-2 text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Achievements */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Hackfest 2025 — 2nd Place */}
          <div className="md:col-span-8 bg-primary text-background p-8 border-4 border-primary neo-shadow flex flex-col justify-between min-h-100 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="material-symbols-outlined text-primary-fixed text-4xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  trophy
                </span>
                <span className="font-headline font-black uppercase text-xl tracking-tighter">
                  2nd Place Winner
                </span>
              </div>
              <h3 className="font-headline text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
                HACKFEST
                <br />
                2025
              </h3>
              <p className="font-body text-lg opacity-80 max-w-md">
                Participated at IIT (ISM) Dhanbad with team NITROUS. Awarded
                2nd position in the Pathway problem statement — built a
                real-time RAG Assistant for Enterprise and Marketing support.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 relative z-10">
              <span className="border-2 border-background px-4 py-1 font-headline font-bold text-xs uppercase">
                RAG
              </span>
              <span className="border-2 border-background px-4 py-1 font-headline font-bold text-xs uppercase">
                REAL-TIME
              </span>
              <span className="border-2 border-background px-4 py-1 font-headline font-bold text-xs uppercase">
                ENTERPRISE AI
              </span>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <span className="material-symbols-outlined text-[300px] leading-none">
                smart_toy
              </span>
            </div>
          </div>

          {/* Best Delegate — NITRIMUN */}
          <div className="md:col-span-4 bg-tertiary text-white p-8 border-4 border-primary neo-shadow flex flex-col justify-center text-center">
            <span className="material-symbols-outlined text-6xl mb-6">
              public
            </span>
            <h3 className="font-headline text-3xl font-black uppercase mb-4">
              BEST DELEGATE
            </h3>
            <div className="w-full h-1 bg-white mb-6"></div>
            <p className="font-body font-bold uppercase tracking-widest">
              NITRIMUN 2023
            </p>
            <p className="mt-4 font-headline italic">
              Represented INDIA in the ECOSOC committee at NIT Rourkela's Model United Nations.
            </p>
          </div>

          {/* Research Internship — IIT Kharagpur */}
          <div className="md:col-span-12 bg-primary-fixed text-primary p-8 border-4 border-primary neo-shadow flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-primary text-background font-headline text-3xl font-black p-4 -rotate-3 shrink-0">
                IIT KGP
              </div>
              <div>
                <h3 className="font-headline text-2xl font-black uppercase">
                  Research Internship — Summer 2025
                </h3>
                <p className="font-body font-bold">
                  Electronics & Electrical Dept. / Prof. Aurobindo Routray — "Contactless
                  Monitoring of Human Vitals: Determined from Thermal Images and FMCW Radar Images"
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-5xl text-primary shrink-0">
              biotech
            </span>
          </div>

          {/* StatusCode 1.0 Hackathon */}
          <div className="md:col-span-4 bg-surface-container border-4 border-primary p-8 neo-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span
              className="material-symbols-outlined text-4xl mb-4 text-secondary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              emoji_events
            </span>
            <h4 className="font-headline font-black uppercase text-xl mb-2">
              StatusCode 1.0
            </h4>
            <p className="text-sm font-bold opacity-60 uppercase mb-4">
              3rd Place — GIAN Problem Statement
            </p>
            <p className="font-body text-sm">
              Hackathon at IIIT Kalyani held at IISER Kalyani with team
              Cookies. August 2024.
            </p>
          </div>

          {/* IEEE Conference Paper */}
          <div className="md:col-span-4 bg-surface-container border-4 border-primary p-8 neo-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span
              className="material-symbols-outlined text-4xl mb-4 text-secondary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              description
            </span>
            <h4 className="font-headline font-black uppercase text-xl mb-2">
              IEEE Conference Paper
            </h4>
            <p className="text-sm font-bold opacity-60 uppercase mb-4">
              3rd Position — Paper Presentation
            </p>
            <p className="font-body text-sm">
              Presented at the IEEE Instrumentation and Measurement Society
              (Kolkata Chapter) conference.
            </p>
          </div>

          {/* LeetCode & Certifications */}
          <div className="md:col-span-4 bg-secondary text-white p-8 border-4 border-primary neo-shadow flex flex-col justify-between min-h-75">
            <div>
              <span className="material-symbols-outlined text-4xl mb-4">
                code
              </span>
              <h3 className="font-headline text-3xl font-black uppercase leading-none mb-4">
                DSA & CERTS
              </h3>
            </div>
            <div className="space-y-3">
              <p className="font-body font-bold uppercase tracking-widest text-sm">
                LeetCode — Consistent DSA Practice
              </p>
              <div className="w-full h-px bg-white opacity-40"></div>
              <p className="font-body font-bold uppercase tracking-widest text-sm">
                Finlatics — Portfolio Mgmt Internship
              </p>
              <div className="w-full h-px bg-white opacity-40"></div>
              <p className="font-body font-bold uppercase tracking-widest text-sm">
                Udemy Python — Avinash Jain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Log */}
      <section className="px-6 max-w-7xl mx-auto">
        <h2 className="font-headline text-5xl font-black uppercase mb-12 border-b-8 border-primary inline-block">
          Historical Log
        </h2>
        <div className="space-y-4">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="group bg-surface hover:bg-primary hover:text-background border-4 border-primary p-6 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-default"
            >
              <div className="flex items-center gap-8">
                <span className="font-headline font-black text-2xl opacity-20 group-hover:opacity-100 transition-opacity">
                  {item.year}
                </span>
                <h4 className="font-headline font-extrabold text-xl md:text-2xl uppercase tracking-tighter">
                  {item.title}
                </h4>
              </div>
              <span className="font-body font-bold uppercase text-xs tracking-widest px-3 py-1 border-2 border-primary group-hover:border-background transition-colors">
                {item.org}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
