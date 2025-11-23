import Image from "next/image";
import Link from "next/link";
import { HiOutlineBolt, HiOutlineShieldCheck, HiOutlineSwatch, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { BsSpeedometer2 } from "react-icons/bs";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import type { IconType } from "react-icons";

type ServiceItem = {
  title: string;
  description: string;
  icon: IconType;
};

const services: ServiceItem[] = [
  {
    title: "Froid industriel",
    description:
      "Conception, installation et maintenance de solutions frigorifiques industrielles adaptées aux normes internationales.",
    icon: HiOutlineBolt
  },
  {
    title: "Maintenance multi-technique",
    description:
      "Programmes de maintenance préventive et corrective optimisés pour garantir la continuité de vos opérations 24/7.",
    icon: HiOutlineWrenchScrewdriver
  },
  {
    title: "Ingénierie sur mesure",
    description:
      "Études, modélisation et pilotage de projets complexes avec une équipe d'ingénieurs pluridisciplinaires.",
    icon: HiOutlineSwatch
  },
  {
    title: "Sécurité & conformité",
    description:
      "Audits, certifications et mise en conformité de vos environnements industriels selon les meilleures pratiques.",
    icon: HiOutlineShieldCheck
  }
];

const highlights = [
  {
    title: "+150 projets",
    description: "Réalisés avec succès dans l'industrie agroalimentaire, logistique et pharmaceutique."
  },
  {
    title: "98% satisfaction",
    description: "Une relation de confiance durable grâce à la qualité d'exécution et au suivi proactif."
  },
  {
    title: "15 ans d'expertise",
    description: "Une équipe certifiée, engagée à vos côtés sur toute la chaîne de valeur."
  }
];

const testimonials = [
  {
    quote:
      "Iceem a su transformer notre infrastructure de froid industriel avec une approche agile et une exécution impeccable.",
    name: "Amel Ben Romdhane",
    role: "Directrice des opérations, FreshLog",
    initials: "AB"
  },
  {
    quote:
      "Leur équipe nous accompagne depuis 5 ans. Disponibilité, réactivité et maîtrise technique sont au rendez-vous.",
    name: "Karim Jelassi",
    role: "Responsable maintenance, Tunilog",
    initials: "KJ"
  },
  {
    quote:
      "Des solutions sur mesure et une mise en service rapide qui ont réduit nos coûts énergétiques de 20%.",
    name: "Sonia Zouari",
    role: "CEO, PharmaCool",
    initials: "SZ"
  }
];

type ProcessStep = {
  title: string;
  description: string;
  icon: IconType;
};

const process: ProcessStep[] = [
  {
    title: "Diagnostic précis",
    description:
      "Visite sur site, analyse des contraintes et évaluation énergétique pour définir le périmètre optimal.",
    icon: BsSpeedometer2
  },
  {
    title: "Conception & prototypage",
    description:
      "Modélisation 3D, simulations thermiques et scénarios budgétaires pour valider chaque étape.",
    icon: HiOutlineSwatch
  },
  {
    title: "Déploiement & pilotage",
    description:
      "Installation orchestrée, suivi en temps réel et formation de vos équipes pour une adoption sereine.",
    icon: HiOutlineWrenchScrewdriver
  }
];

export default function HomePage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 bg-slate-950" aria-hidden />

      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-pattern" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),_transparent_60%)]" aria-hidden />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-8 sm:px-10 lg:px-12">
          <nav className="flex items-center justify-between text-white">
            <Link href="/" className="flex items-center gap-3" aria-label="Iceem.tn">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl font-bold">I</span>
              <div>
                <p className="text-lg font-semibold tracking-wide">Iceem.tn</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Engineering & Maintenance</p>
              </div>
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="#services" className="hidden font-medium text-white/80 hover:text-white md:inline">
                Services
              </Link>
              <Link href="#expertise" className="hidden font-medium text-white/80 hover:text-white md:inline">
                Expertise
              </Link>
              <Link href="#contact" className="hidden font-medium text-white/80 hover:text-white md:inline">
                Contact
              </Link>
              <Link href="#contact" className="btn-secondary">
                Nous contacter
              </Link>
            </div>
          </nav>

          <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8 text-white">
              <div className="badge fade-up" style={{ animationDelay: "100ms" }}>
                <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden />
                Expertises industrielles 360°
              </div>
              <h1 className="fade-up text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
                Ingénierie, froid industriel et maintenance performante pour vos infrastructures critiques.
              </h1>
              <p className="fade-up max-w-xl text-lg text-white/80" style={{ animationDelay: "220ms" }}>
                Iceem accompagne les industriels tunisiens avec des solutions fiables, éco-efficaces et conçues pour durer. Une équipe d'experts, un support réactif et des résultats mesurables.
              </p>
              <div className="fade-up flex flex-wrap items-center gap-4" style={{ animationDelay: "280ms" }}>
                <Link href="#contact" className="btn-primary">
                  Obtenir un devis
                </Link>
                <Link href="#services" className="inline-flex items-center gap-2 text-white/80 transition-opacity hover:text-white">
                  Découvrir nos expertises
                  <span aria-hidden className="text-xl">→</span>
                </Link>
              </div>
              <dl className="fade-up grid grid-cols-1 gap-6 text-white/80 sm:grid-cols-3" style={{ animationDelay: "340ms" }}>
                <div>
                  <dt className="text-sm uppercase tracking-wide text-white/60">Projets suivis</dt>
                  <dd className="mt-1 text-3xl font-semibold text-white">250+</dd>
                </div>
                <div>
                  <dt className="text-sm uppercase tracking-wide text-white/60">Temps de réponse</dt>
                  <dd className="mt-1 text-3xl font-semibold text-white">&lt; 2h</dd>
                </div>
                <div>
                  <dt className="text-sm uppercase tracking-wide text-white/60">Gain énergétique moyen</dt>
                  <dd className="mt-1 text-3xl font-semibold text-white">-18%</dd>
                </div>
              </dl>
            </div>
            <div className="fade-up relative h-[420px] overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-brand-900/30" style={{ animationDelay: "200ms" }}>
              <Image
                src="https://images.unsplash.com/photo-1520607162-911581e1f2d5?auto=format&fit=crop&w=1080&q=80"
                alt="Techniciens Iceem intervenant sur une installation industrielle"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 via-brand-800/10 to-transparent" aria-hidden />
            </div>
          </section>
        </div>
      </header>

      <section id="services" className="relative -mt-24 bg-transparent pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Des expertises ciblées pour vos enjeux</h2>
            <p className="section-subtitle">
              De la conception à la maintenance, Iceem déploie des équipes spécialisées pour assurer la performance de vos infrastructures et une optimisation durable.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="card fade-up" style={{ animationDelay: `${100 + index * 80}ms` }}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h2 className="section-title">Une approche projet centrée performance</h2>
              <p className="section-subtitle">
                Nous co-construisons des solutions robustes qui respectent vos impératifs de sécurité, d'efficacité énergétique et de continuité opérationnelle.
              </p>
              <div className="mt-10 space-y-8">
                {process.map(step => (
                  <div key={step.title} className="flex gap-5">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <step.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-base text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 p-8 text-white shadow-glow">
                <p className="text-lg font-semibold">Pilotez vos installations avec sérénité.</p>
                <p className="mt-2 text-sm text-white/80">
                  Nos équipes opérationnelles se déplacent partout en Tunisie avec des engagements SLA stricts et des outils digitaux pour assurer un reporting transparent.
                </p>
              </div>
            </div>
            <div>
              <div className="grid gap-6 sm:grid-cols-2">
                {highlights.map(highlight => (
                  <div key={highlight.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8 shadow-brand-500/5">
                    <p className="text-3xl font-semibold text-brand-600">{highlight.title}</p>
                    <p className="mt-3 text-base text-slate-600">{highlight.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-brand-500/5">
                <h3 className="text-2xl font-semibold text-slate-900">Des technologies de pointe</h3>
                <p className="mt-3 text-base text-slate-600">
                  Automates Siemens, Schneider, systèmes de télésupervision, capteurs IoT, solutions cloud et IA pour anticiper les incidents.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li>• Mise à niveau énergétique et récupération de chaleur fatale.</li>
                  <li>• Contrats de service modulables avec reporting énergétique.</li>
                  <li>• Formations sur site et assistance hotline dédiée.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ils nous font confiance</h2>
              <p className="mt-4 text-base text-white/80">
                Des leaders de l'agroalimentaire, de la logistique et de la santé collaborative s'appuient sur Iceem pour sécuriser leurs infrastructures stratégiques.
              </p>
            </div>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-10 lg:px-12">
          <h2 className="section-title">Prêt·e à booster la performance de vos installations ?</h2>
          <p className="section-subtitle mx-auto">
            Discutons de vos objectifs techniques et budgétaires autour d'un audit express. Nous répondrons sous 24h ouvrées.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="btn-primary">
              Planifier un échange
            </Link>
            <a href="tel:+21671345678" className="inline-flex items-center gap-2 text-brand-600">
              <span aria-hidden className="text-xl">☎</span> +216 71 345 678
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="space-y-6 text-white">
              <h2 className="text-3xl font-semibold">Contact direct</h2>
              <p className="text-white/70">
                Besoin d'une intervention urgente ou d'un devis détaillé ? Notre cellule support est disponible du lundi au samedi de 8h à 20h.
              </p>
              <div className="space-y-4 text-white/80">
                <p><span className="text-white">Téléphone :</span> <a href="tel:+21671345678" className="hover:text-white">+216 71 345 678</a></p>
                <p><span className="text-white">Email :</span> <a href="mailto:contact@iceem.tn" className="hover:text-white">contact@iceem.tn</a></p>
                <p><span className="text-white">Adresse :</span> Zone Industrielle Charguia II, Tunis</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/iceem"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="LinkedIn Iceem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in
                </a>
                <a
                  href="https://www.facebook.com/iceem.tn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Facebook Iceem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  f
                </a>
              </div>
            </div>
            <form className="rounded-3xl bg-white p-10 shadow-2xl shadow-brand-900/40">
              <h3 className="text-2xl font-semibold text-slate-900">Décrivons votre projet</h3>
              <p className="mt-3 text-base text-slate-600">
                Remplissez ce formulaire et notre équipe vous recontacte sous 24h pour planifier un audit personnalisé.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Nom et prénom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm shadow-brand-500/5 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">
                    Société
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Votre entreprise"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm shadow-brand-500/5 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email professionnel
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@entreprise.com"
                    required
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm shadow-brand-500/5 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+216"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm shadow-brand-500/5 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="project" className="text-sm font-medium text-slate-700">
                  Besoins & objectifs
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={4}
                  placeholder="Décrivez votre projet, vos contraintes et vos délais."
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm shadow-brand-500/5 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div className="mt-6 flex items-start gap-3 text-sm text-slate-500">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-500 focus:ring-brand-400"
                />
                <label htmlFor="consent">
                  J&apos;autorise Iceem à me contacter pour répondre à ma demande. Mes données ne seront pas partagées avec des tiers.
                </label>
              </div>
              <div className="mt-8">
                <button type="submit" className="btn-primary w-full">
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="text-lg font-semibold text-slate-900">Iceem.tn</p>
            <p className="mt-2 text-sm text-slate-500">
              © {new Date().getFullYear()} Iceem. Tous droits réservés. Numéro RC: B123456789.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:gap-6">
            <Link href="#services">Expertises</Link>
            <Link href="#expertise">Méthodologie</Link>
            <Link href="#contact">Contact</Link>
            <Link href="mailto:contact@iceem.tn">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
