const activities = [
  {
    icon: 'neurology',
    title: 'Vice President',
    org: 'Machine Learning for Everyone (ML4E), NIT Rourkela',
    period: 'Leadership & Student Orgs',
    desc: 'Led technical workshops, hackathons, AI/ML projects, mentorship programs, and research initiatives. Coordinated multidisciplinary teams and organized community-driven learning events.',
    tags: ['AI/ML', 'Leadership', 'Mentorship'],
    bg: 'bg-primary',
    text: 'text-background',
    tagStyle: 'border-background text-background',
    span: 'md:col-span-8',
  },
  {
    icon: 'payments',
    title: 'Secretary',
    org: 'Finance Club, NIT Rourkela',
    period: 'Leadership & Student Orgs',
    desc: 'Organized flagship finance and entrepreneurship events. Led sponsorship negotiations, stakeholder engagement, and event management activities.',
    tags: ['Finance', 'Management', 'Sponsorship'],
    bg: 'bg-tertiary',
    text: 'text-background',
    tagStyle: 'border-background text-background',
    span: 'md:col-span-4',
  },
  {
    icon: 'public',
    title: 'Best Delegate',
    org: 'NITRIMUN 2023',
    period: 'Public Speaking & Diplomacy',
    desc: 'Represented India in the ECOSOC committee and secured the Best Delegate Award, demonstrating excellence in public speaking, negotiation, diplomacy, and critical thinking.',
    tags: ['Diplomacy', 'Public Speaking', 'Negotiation'],
    bg: 'bg-secondary',
    text: 'text-background',
    tagStyle: 'border-background text-background',
    span: 'md:col-span-4',
  },
  {
    icon: 'music_note',
    title: 'Classical Guitarist',
    org: 'Trinity College London Certified',
    period: 'Music & Performing Arts',
    desc: 'Completed formal training and certification in Classical Guitar, developing advanced musical proficiency, creativity, discipline, and performance skills. Practiced classical guitar repertoire, strengthening artistic expression, patience, and attention to detail.',
    tags: ['Classical Guitar', 'Trinity College', 'Performing Arts'],
    bg: 'bg-primary-fixed',
    text: 'text-primary',
    tagStyle: 'border-primary text-primary',
    span: 'md:col-span-8',
  },
  {
    icon: 'sports_soccer',
    title: 'Football Enthusiast & Team Player',
    org: 'NIT Rourkela Football Community',
    period: 'Sports & Physical Activities',
    desc: 'Actively represented and played football with the NIT Rourkela football community/team, participating in inter-hostel and institute-level competitions, fostering teamwork, discipline, leadership, and strategic decision-making skills. Regular participant in recreational and competitive sports activities, emphasizing physical fitness, resilience, and collaborative problem-solving.',
    tags: ['Football', 'Teamwork', 'Fitness', 'Discipline'],
    bg: 'bg-surface',
    text: 'text-primary',
    tagStyle: 'border-primary text-primary',
    span: 'md:col-span-6',
  },
  {
    icon: 'campaign',
    title: 'Guest Lecture & Sponsorship Coordinator',
    org: 'Innovision 2023, NIT Rourkela',
    period: 'Oct 2023 – Dec 2023',
    desc: 'Led a team of 20+ people in guest lectures and sponsorship. Gained hands-on experience in public relations, corporate outreach, sponsorship negotiations, and professional mailing.',
    tags: ['Sponsorship', 'Outreach', 'Leadership'],
    bg: 'bg-secondary',
    text: 'text-background',
    tagStyle: 'border-background text-background',
    span: 'md:col-span-6',
  },
]

const interests = [
  'Football',
  'Classical Guitar',
  'Machine Learning',
  'Quantitative Finance',
  'Diplomacy',
  'Public Speaking',
  'Algorithmic Trading',
  'Open Source',
  'AI Research',
]

const interestMarquee = interests.join(' // ')

export default function Extracurricular() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="px-6 pt-12 pb-8 max-w-7xl mx-auto mb-12">
        <h1 className="font-headline text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          BEYOND
          <br />
          <span className="text-secondary">CODE.</span>
        </h1>
        <p className="font-body text-xl md:text-2xl font-bold max-w-2xl border-l-8 border-tertiary pl-6">
          Engineering excellence extends beyond the terminal. Leadership,
          community, and creative pursuits shape a complete developer.
        </p>
      </section>

      {/* Activities Bento Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {activities.map((a, i) => (
            <div
              key={i}
              className={`${a.span} ${a.bg} ${a.text} border-4 border-primary p-8 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col justify-between min-h-80`}
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
                <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-2 tracking-tight">
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black uppercase tracking-tighter">
            Community Impact
          </h2>
          <div className="h-1 bg-primary grow"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface border-4 border-primary p-8 neo-shadow text-center">
            <span className="font-headline text-5xl sm:text-6xl font-black text-secondary">
              6k+
            </span>
            <p className="font-headline font-bold uppercase tracking-widest mt-2">
              LinkedIn Connections
            </p>
          </div>
          <div className="bg-surface border-4 border-primary p-8 neo-shadow text-center">
            <span className="font-headline text-5xl sm:text-6xl font-black text-tertiary">
              20+
            </span>
            <p className="font-headline font-bold uppercase tracking-widest mt-2">
              Events & Workshops
            </p>
          </div>
          <div className="bg-surface border-4 border-primary p-8 neo-shadow text-center">
            <span className="font-headline text-5xl sm:text-6xl font-black text-primary-fixed-dim">
              10+
            </span>
            <p className="font-headline font-bold uppercase tracking-widest mt-2">
              Non-Academic Awards
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
