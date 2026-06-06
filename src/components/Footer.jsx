import { Link } from 'react-router-dom'

const socialLinks = [
  { icon: 'mail', label: 'Email', href: 'mailto:rishikakalidas@gmail.com' },
  { icon: 'code', label: 'GitHub', href: 'https://github.com/Rishi2003Das' },
  { icon: 'share', label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishi2003das/' },
  { icon: 'bar_chart', label: 'Kaggle', href: 'https://www.kaggle.com/rishi2003das' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-background w-full border-t-4 border-primary">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-background font-headline font-black text-3xl uppercase tracking-tighter hover:text-primary-fixed transition-colors"
        >
          Rishi Das // NIT Rourkela
        </Link>

        {/* Copyright */}
        <div className="font-body text-sm font-bold uppercase tracking-widest text-background text-center md:text-left opacity-80">
          Made by Rishi Das with LOVE!
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-background hover:text-primary-fixed transition-colors active:scale-95 duration-100"
            >
              <span className="material-symbols-outlined text-3xl">
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
