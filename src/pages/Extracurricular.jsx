const activities = [
  {
    icon: 'groups',
    title: 'Tech Club President',
    org: 'University Computing Society',
    period: '2025 — Present',
    desc: 'Leading a 200-member technical community. Organized 15+ workshops, 3 hackathons, and established partnerships with 5 tech companies for sponsored events.',
    tags: ['Leadership', 'Event Management', 'Community'],
    bg: 'bg-primary',
    text: 'text-background',
    tagStyle: 'border-background text-background',
    span: 'md:col-span-7',
  },
  {
    icon: 'volunteer_activism',
    title: 'Code for Good',
    org: 'NGO Tech Volunteer',
    period: '2024 — Present',
    desc: 'Built pro-bono digital tools for 3 non-profits. Developed a student management system serving 500+ underprivileged students.',
    tags: ['Social Impact', 'Full-Stack', 'Pro Bono'],
    bg: 'bg-tertiary',
    text: 'text-background',
    tagStyle: 'border-background text-background',
    span: 'md:col-span-5',
  },
  {
    icon: 'sports_esports',
    title: 'Competitive Programming',
    org: 'Codeforces / LeetCode',
    period: '2023 — Present',
    desc: 'Codeforces Expert (1600+). Solved 1200+ problems across platforms. Represented university in 3 ICPC regionals.',
    tags: ['Algorithms', 'Data Structures', 'ICPC'],
    bg: 'bg-secondary',
    text: 'text-background',
    tagStyle: 'border-background text-background',
    span: 'md:col-span-5',
  },
  {
    icon: 'edit_note',
    title: 'Technical Blogging',
    org: 'Dev.to / Medium',
    period: '2024 — Present',
    desc: 'Published 25+ in-depth technical articles on systems design, ML engineering, and Rust. 50K+ cumulative readers with a 4.8★ average rating.',
    tags: ['Writing', 'Systems Design', 'Education'],
    bg: 'bg-primary-fixed',
    text: 'text-primary',
    tagStyle: 'border-primary text-primary',
    span: 'md:col-span-7',
  },
]

const interests = [
  'Open Source',
  'Mechanical Keyboards',
  'Chess',
  'Photography',
  'Hiking',
  'Science Fiction',
  'Classical Music',
  'Generative Art',
  'Board Games',
  'Rock Climbing',
]

const interestMarquee = interests.join(' // ')

export default function Extracurricular() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="px-6 pt-12 pb-8 max-w-7xl mx-auto mb-12">
        <h1 className="font-headline text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          BEYOND
          <br />
          <span className="text-secondary">CODE.</span>
        </h1>
        <p className="font-body text-xl md:text-2xl font-bold max-w-2xl border-l-8 border-tertiary pl-6">
          Engineering excellence extends beyond the terminal. Leadership,
          community, and creative pursuit shape a complete developer.
        </p>
      </section>

      {/* Activities Bento Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {activities.map((a, i) => (
            <div
              key={i}
              className={`${a.span} ${a.bg} ${a.text} border-4 border-primary p-8 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col justify-between min-h-[320px]`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span
                    className="material-symbols-outlined text-5xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {a.icon}
                  </span>
                  <span
                    className={`font-headline font-bold text-sm uppercase tracking-widest px-3 py-1 border-2 ${a.tagStyle}`}
                  >
                    {a.period}
                  </span>
                </div>
                <h3 className="font-headline text-3xl md:text-4xl font-black uppercase mb-2 tracking-tight">
                  {a.title}
                </h3>
                <p className="font-headline font-bold text-lg uppercase tracking-widest mb-4 opacity-80">
                  {a.org}
                </p>
                <p className="text-base leading-relaxed opacity-90">
                  {a.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {a.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`border-2 px-3 py-1 font-bold text-xs uppercase ${a.tagStyle}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Marquee */}
      <section className="border-y-4 border-primary overflow-hidden whitespace-nowrap bg-tertiary py-5 mb-24">
        <div className="flex gap-12 animate-marquee">
          <span className="text-background font-headline font-black text-4xl md:text-5xl uppercase italic tracking-widest">
            {interestMarquee}
          </span>
          <span className="text-background font-headline font-black text-4xl md:text-5xl uppercase italic tracking-widest">
            {interestMarquee}
          </span>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-5xl md:text-6xl font-headline font-black uppercase tracking-tighter">
            Community Impact
          </h2>
          <div className="h-1 bg-primary flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface border-4 border-primary p-8 neo-shadow text-center">
            <span className="font-headline text-6xl font-black text-secondary">
              200+
            </span>
            <p className="font-headline font-bold uppercase tracking-widest mt-2">
              Members Led
            </p>
          </div>
          <div className="bg-surface border-4 border-primary p-8 neo-shadow text-center">
            <span className="font-headline text-6xl font-black text-tertiary">
              50K+
            </span>
            <p className="font-headline font-bold uppercase tracking-widest mt-2">
              Blog Readers
            </p>
          </div>
          <div className="bg-surface border-4 border-primary p-8 neo-shadow text-center">
            <span className="font-headline text-6xl font-black text-primary-fixed-dim">
              1200+
            </span>
            <p className="font-headline font-bold uppercase tracking-widest mt-2">
              Problems Solved
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
