const stats = [
  { value: '12', label: 'Hackathon Wins', color: 'text-secondary' },
  { value: '04', label: 'Scholarships', color: 'text-tertiary' },
  { value: '08', label: 'Certifications', color: 'text-primary' },
  { value: '01', label: 'Global Ranking', color: 'text-primary-fixed-dim' },
]

const timeline = [
  { year: '2026', title: 'National Merit Finalist', org: 'Education Board' },
  { year: '2025', title: 'Gold Medal // Math Olympiad', org: 'STEM Alliance' },
  { year: '2025', title: 'Best UX Design Award', org: 'Global Creative Expo' },
  { year: '2024', title: 'Open Source Contributor Award', org: 'GitHub Universe' },
  { year: '2024', title: 'Regional Coding Champion', org: 'ACM Chapter' },
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
          A definitive record of technical excellence, academic rigor, and
          competitive dominance in engineering and computation.
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
          {/* Hackathon Grand Prize */}
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
                  Grand Prize Winner
                </span>
              </div>
              <h3 className="font-headline text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
                NEO-GENESIS
                <br />
                HACKATHON 2024
              </h3>
              <p className="font-body text-lg opacity-80 max-w-md">
                Engineered an AI-driven structural optimization engine for
                sustainable urban density. Outperformed 200+ international
                teams.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 relative z-10">
              <span className="border-2 border-background px-4 py-1 font-headline font-bold text-xs uppercase">
                RUST
              </span>
              <span className="border-2 border-background px-4 py-1 font-headline font-bold text-xs uppercase">
                WEBASSEMBLY
              </span>
              <span className="border-2 border-background px-4 py-1 font-headline font-bold text-xs uppercase">
                PYTORCH
              </span>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <span className="material-symbols-outlined text-[300px] leading-none">
                architecture
              </span>
            </div>
          </div>

          {/* Scholarship */}
          <div className="md:col-span-4 bg-tertiary text-white p-8 border-4 border-primary neo-shadow flex flex-col justify-center text-center">
            <span className="material-symbols-outlined text-6xl mb-6">
              school
            </span>
            <h3 className="font-headline text-3xl font-black uppercase mb-4">
              IVY-ENGINEERING SCHOLARSHIP
            </h3>
            <div className="w-full h-1 bg-white mb-6"></div>
            <p className="font-body font-bold uppercase tracking-widest">
              Full Merit Endowment
            </p>
            <p className="mt-4 font-headline italic">
              Awarded for "Exceptional synthesis of aesthetic form and
              mechanical function."
            </p>
          </div>

          {/* Academic Honor */}
          <div className="md:col-span-12 bg-primary-fixed text-primary p-8 border-4 border-primary neo-shadow flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-primary text-background font-headline text-4xl font-black p-4 -rotate-3 shrink-0">
                4.0
              </div>
              <div>
                <h3 className="font-headline text-2xl font-black uppercase">
                  Dean's List Excellence
                </h3>
                <p className="font-body font-bold">
                  Consecutive 8 semesters / Top 1% of Graduating Class
                </p>
              </div>
            </div>
            <button className="bg-primary text-background px-8 py-3 font-headline font-black uppercase text-sm border-2 border-primary hover:bg-background hover:text-primary transition-all shrink-0">
              VIEW TRANSCRIPT
            </button>
          </div>

          {/* Cert 1 */}
          <div className="md:col-span-4 bg-surface-container border-4 border-primary p-8 neo-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span
              className="material-symbols-outlined text-4xl mb-4 text-secondary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              verified
            </span>
            <h4 className="font-headline font-black uppercase text-xl mb-2">
              AWS Solutions Architect
            </h4>
            <p className="text-sm font-bold opacity-60 uppercase mb-4">
              Professional Level
            </p>
            <img
              className="w-full grayscale border-2 border-primary"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI95-H9awR737jIApM7SIK5q9Ny_4mYT-yjhiC6tm6XuGzzMwY0Nt0lgSvhXp6baMm0EgVbM3tNHaZPgb6ttyRswfSDbOo1p6bpXGILMyB4aBTgW6_EIIHoUaSDk8ebZNEdFwMgDiOPCVrQEHT6VY4wTUw6wIYFt239srS7_4Tgj_x-Sg4gcS7sagaAvYouu--hRwb5S-4NDLjnaQBHEazUq5HMKquM3MMoAf2Bv3F6lEpk8vnBEdR0Z6iqzKle45tg-FF0h7fK5w5"
              alt="AWS certification - server racks in data center"
            />
          </div>

          {/* Cert 2 */}
          <div className="md:col-span-4 bg-surface-container border-4 border-primary p-8 neo-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span
              className="material-symbols-outlined text-4xl mb-4 text-secondary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              verified
            </span>
            <h4 className="font-headline font-black uppercase text-xl mb-2">
              Google Cloud Professional
            </h4>
            <p className="text-sm font-bold opacity-60 uppercase mb-4">
              ML Engineer
            </p>
            <img
              className="w-full grayscale border-2 border-primary"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALuU56sQhHW2LfQnnsIJIPlZPZQhJwZEtENttrdCYE2ENlQXJ1Jo-Iqo4jHG1TKSVtVXkW6bBYPJvogOFX2RApHK5bgRlDF653D5J_iRwGns5bA-yZw7oQx78iqz_xc5Gx1t3P3jI6mH29SrpXPTKusUi3PpQ7qExVNGu846zpwEnVoiiRTudz6YNcOkxFfrDLLnLgfLB4NkHgR0XNZqBOaGvvng8Wswe43Drc_vGuMTKrZmV94adlPlRjX9JQK-rZYaKVJGhbi7gB"
              alt="Sustainable architecture and modern building facade"
            />
          </div>

          {/* Coming Soon */}
          <div className="md:col-span-4 bg-secondary text-white p-8 border-4 border-primary neo-shadow flex flex-col justify-end min-h-75">
            <h3 className="font-headline text-4xl font-black uppercase leading-none mb-6">
              MORE COMING SOON.
            </h3>
            <p className="font-body font-bold uppercase tracking-widest text-sm">
              Active Research Phase: High-Load Systems
            </p>
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
