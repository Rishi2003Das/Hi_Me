import { useState } from 'react'

const contactMethods = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'rishikakalidas@gmail.com',
    href: 'mailto:rishikakalidas@gmail.com',
  },
  {
    icon: 'mail',
    label: 'Institute Email',
    value: '722mn1055@nitr.ac.in',
    href: 'mailto:722mn1055@nitr.ac.in',
  },
  {
    icon: 'code',
    label: 'GitHub',
    value: 'github.com/Rishi2003Das',
    href: 'https://github.com/Rishi2003Das',
  },
  {
    icon: 'share',
    label: 'LinkedIn',
    value: 'linkedin.com/in/rishi2003das',
    href: 'https://www.linkedin.com/in/rishi2003das/',
  },
  {
    icon: 'bar_chart',
    label: 'Kaggle',
    value: 'kaggle.com/rishi2003das',
    href: 'https://www.kaggle.com/rishi2003das',
  },
  {
    icon: 'terminal',
    label: 'LeetCode',
    value: 'leetcode.com/u/Rishi2003Das',
    href: 'https://leetcode.com/u/Rishi2003Das/',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (Demo — no backend connected)')
  }

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-primary-fixed px-6 py-20 border-b-4 border-primary">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black uppercase tracking-tighter leading-none mb-8">
            Let's Build
            <br />
            Together.
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto">
            Currently seeking opportunities in AI/ML Engineering, Software
            Development, Backend Engineering, Generative AI & LLM Systems, and
            Applied Research.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Form */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-primary"></div>
              <span className="font-headline font-black uppercase tracking-widest text-secondary">
                Send a Message
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-headline font-black uppercase text-sm tracking-widest mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="YOUR NAME"
                    className="w-full bg-background border-4 border-primary px-6 py-4 font-headline font-bold text-lg focus:ring-0 focus:outline-none focus:border-tertiary placeholder:opacity-40 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-headline font-black uppercase text-sm tracking-widest mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="EMAIL@DOMAIN.COM"
                    className="w-full bg-background border-4 border-primary px-6 py-4 font-headline font-bold text-lg focus:ring-0 focus:outline-none focus:border-tertiary placeholder:opacity-40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-headline font-black uppercase text-sm tracking-widest mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="PROJECT // COLLABORATION // HIRING"
                  className="w-full bg-background border-4 border-primary px-6 py-4 font-headline font-bold text-lg focus:ring-0 focus:outline-none focus:border-tertiary placeholder:opacity-40 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-headline font-black uppercase text-sm tracking-widest mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-background border-4 border-primary px-6 py-4 font-body text-lg focus:ring-0 focus:outline-none focus:border-tertiary placeholder:opacity-40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-background px-12 py-5 font-headline font-black text-xl uppercase border-4 border-primary neo-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:translate-x-2 active:translate-y-2"
              >
                SEND MESSAGE{' '}
                <span className="material-symbols-outlined align-middle ml-2">
                  send
                </span>
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-primary"></div>
              <span className="font-headline font-black uppercase tracking-widest text-tertiary">
                Direct Links
              </span>
            </div>

            <div className="space-y-4 mb-12">
              {contactMethods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-surface border-4 border-primary p-5 neo-shadow-sm hover:bg-primary hover:text-background transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <span
                    className="material-symbols-outlined text-3xl text-tertiary group-hover:text-primary-fixed transition-colors"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {m.icon}
                  </span>
                  <div>
                    <p className="font-headline font-black uppercase text-sm tracking-widest">
                      {m.label}
                    </p>
                    <p className="font-body text-sm opacity-70 group-hover:opacity-100">
                      {m.value}
                    </p>
                  </div>
                  <span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_outward
                  </span>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="bg-primary-fixed border-4 border-primary p-6 neo-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-headline font-black uppercase text-sm tracking-widest">
                  Available for Opportunities
                </span>
              </div>
              <p className="font-body text-sm leading-relaxed">
                Actively seeking roles in AI/ML Engineering, SDE, Backend
                Engineering, Full Stack Development, Generative AI & LLM
                Systems, Data Science, and Applied Research.
              </p>
            </div>

            {/* Location */}
            <div className="mt-4 bg-primary text-background border-4 border-primary p-6 neo-shadow">
              <span
                className="material-symbols-outlined text-3xl text-primary-fixed mb-2 block"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                location_on
              </span>
              <p className="font-headline font-black uppercase text-lg">
                NIT Rourkela, India
              </p>
              <p className="font-body text-sm opacity-80 mt-1">
                Open to remote & relocation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
