import { useState } from "react";
import {
  ArrowUpRight,
  Banknote,
  Blocks,
  Brain,
  Calendar,
  Code2,
  Cpu,
  Database,
  Github,
  GitBranch,
  Globe,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Shield,
  Smartphone,
  Terminal,
  Wallet,
  X,
} from "lucide-react";
import naitramImage from "./naitramImage.png";
import magnusmobileapp from "./magnusmobileapp.png";
import GayaImage from "./GayaImage.png";
import myProfileWithBlackbackground3 from "./myProfileWithBlackbackground3.jpeg";
import mobileAppDevelopment1 from "./mobileAppDevelopment1.jpg";
import WalletCreation from "./WalletCreation.jpg";
import WebApp from "./WebApp.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Expertise" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const experiences = [
    {
      company: "Blockmob Labs",
      role: "React Native Web3 Developer",
      period: "Aug 2024 - Present",
      description:
        "Leading end-to-end mobile wallet and Web3 product engineering with a focus on security, reliability, and exceptional UX.",
      achievements: [
        "Built single-chain and multi-chain wallet architecture for Ethereum, BSC, Polygon, and Solana.",
        "Implemented cross-chain swap and bridge workflows for seamless on-chain asset transfers.",
        "Strengthened account security through encrypted key management and biometric authentication.",
        "Delivered NFT marketplace features including minting, listing, buying, and auctions.",
      ],
    },
    {
      company: "Sentax Lab",
      role: "React Native Developer",
      period: "Mar 2023 - Jul 2024",
      description:
        "Developed high-quality cross-platform applications with strong performance, scalable architecture, and API-heavy product integrations.",
      achievements: [
        "Shipped production-ready React Native apps across multiple domains and user segments.",
        "Integrated third-party and internal APIs to support robust real-time data experiences.",
        "Implemented Redux and Zustand state patterns based on product complexity and team needs.",
      ],
    },
  ];

  const topSkills = [
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "React Native",
      desc: "Premium mobile experiences with native-level polish.",
      skills: ["iOS & Android", "Native Modules", "Performance Tuning"],
    },
    {
      icon: <Wallet className="h-7 w-7" />,
      title: "Wallet Development",
      desc: "Secure single-chain and multi-chain wallet systems.",
      skills: ["Ethereum", "BSC", "Polygon", "Solana"],
    },
    {
      icon: <Blocks className="h-7 w-7" />,
      title: "Web3 Products",
      desc: "Scalable dApps with practical blockchain integrations.",
      skills: ["Web3.js", "Ethers.js", "WalletConnect", "Smart Contracts"],
    },
    {
      icon: <Banknote className="h-7 w-7" />,
      title: "NFT Marketplaces",
      desc: "Marketplaces with minting, listings, and auction flows.",
      skills: ["ERC-721", "ERC-1155", "IPFS", "Trading Modules"],
    },
  ];

  const additionalSkills = [
    { icon: <Shield className="h-4 w-4" />, label: "Smart Contract Security" },
    { icon: <GitBranch className="h-4 w-4" />, label: "Git Workflows" },
    { icon: <Globe className="h-4 w-4" />, label: "REST & GraphQL APIs" },
    { icon: <Cpu className="h-4 w-4" />, label: "Blockchain API Integration" },
    { icon: <Database className="h-4 w-4" />, label: "SQL & NoSQL" },
    { icon: <Layers className="h-4 w-4" />, label: "Redux & Zustand" },
    { icon: <Terminal className="h-4 w-4" />, label: "TypeScript" },
    { icon: <Code2 className="h-4 w-4" />, label: "Scalable Architecture" },
    { icon: <Brain className="h-4 w-4" />, label: "Product-Driven UI/UX" },
  ];

  const projects = [
    {
      title: "Gaya Wallet",
      subtitle: "Solana-Based Single-Chain Wallet",
      desc: "A secure mobile wallet for the Solana ecosystem with SOL management, staking, and dApp connectivity.",
      image: GayaImage,
      tech: ["React Native", "Solana SDK", "Redux"],
      link: "https://apps.apple.com/app/gaya-wallet/id123456789",
    },
    {
      title: "Naitram",
      subtitle: "NFT Ticketing Platform",
      desc: "A blockchain-first ticketing platform that improves ownership transparency and protects event ticket authenticity.",
      image: naitramImage,
      tech: ["React Native", "Web3.js", "Solidity"],
      link: "https://naitram.live",
    },
    {
      title: "Magnus Capital",
      subtitle: "Automated Trading System",
      desc: "Automated trading with real-time market signals, strategy execution, and risk-aware decision systems.",
      image: magnusmobileapp,
      tech: ["Node.js", "WebSocket", "MongoDB"],
      link: "#",
    },
  ];

  const services = [
    {
      image: mobileAppDevelopment1,
      title: "Mobile App Development",
      features: [
        "Cross-platform React Native apps",
        "Performance optimization",
        "Native module integration",
        "Store deployment and release support",
      ],
      icon: <Smartphone className="h-7 w-7" />,
    },
    {
      image: WalletCreation,
      title: "Blockchain Solutions",
      features: [
        "Multi-chain wallet development",
        "Smart contract integration",
        "NFT marketplace modules",
        "DeFi and bridge integrations",
      ],
      icon: <Wallet className="h-7 w-7" />,
    },
    {
      image: WebApp,
      title: "Web Product Development",
      features: [
        "React and Next.js applications",
        "Modern dashboard experiences",
        "Web3 and real-time integrations",
        "Cloud deployment architecture",
      ],
      icon: <Globe className="h-7 w-7" />,
    },
  ];

  const stats = [
    { number: "20+", label: "Projects Delivered" },
    { number: "100%", label: "Client Focused" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24/7", label: "Communication" },
  ];

  return (
    <div className="min-h-screen bg-[#060A14] text-[#E8ECF3]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-80px] h-[380px] w-[380px] rounded-full bg-[#A88B4A]/15 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#3E5C87]/30 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060A14]/90 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-lg font-semibold tracking-[0.2em] text-[#D4B06A]"
          >
            USAMA ALI
          </a>

          <div className="hidden items-center gap-8 text-[0.92rem] font-medium text-[#D5DDE8] md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-transparent pb-1 transition-colors hover:border-[#D4B06A]/60 hover:text-[#E9D5A7]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md border border-white/20 p-2 text-[#E8ECF3] md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {isOpen && (
          <div className="mx-6 mb-4 flex flex-col gap-3 rounded-xl border border-white/10 bg-[#0D1422] p-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#CBD3DD] transition-colors hover:text-[#D4B06A]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-10 pt-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <h1 className="mb-5 text-4xl font-bold leading-[1.1] text-white md:text-6xl">
            Usama Ali
            <span className="block bg-gradient-to-r from-[#D4B06A] to-[#F0DFB4] bg-clip-text pb-1 text-3xl leading-[1.15] text-transparent md:text-[4.2rem]">
              React Native & Web3 Developer
            </span>
          </h1>
          <p className="max-w-2xl text-base text-[#C1CBD8] md:text-lg">
            I craft high-performing mobile products and blockchain platforms with
            a focus on security, elegant UX, and business outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-r from-[#B99757] to-[#DCC18A] px-6 py-3 text-sm font-semibold text-[#0B0F18] transition hover:brightness-105"
            >
              Let&apos;s Work Together
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-[#D4B06A]/40 px-6 py-3 text-sm font-semibold text-[#E5D1A2] transition hover:bg-[#D4B06A]/10"
            >
              Explore Projects
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-[#D4B06A]/20 to-[#24334A]/40 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D4B06A]/25 bg-[#0F1726] p-2 shadow-2xl shadow-black/50">
            <img
              src={myProfileWithBlackbackground3}
              alt="Usama Ali profile"
              className="h-[360px] w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="mb-8 text-3xl font-semibold text-white md:text-4xl">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="rounded-2xl border border-white/10 bg-[#0D1422]/90 p-7 shadow-lg shadow-black/20"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-[#F2E2BB]">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-[#C8D2DF]">{exp.role}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4B06A]/35 bg-[#D4B06A]/10 px-3 py-1 text-xs text-[#E4C98D]">
                  <Calendar className="h-3.5 w-3.5" />
                  {exp.period}
                </div>
              </div>
              <p className="mb-4 text-[#AEB8C6]">{exp.description}</p>
              <ul className="grid gap-2 md:grid-cols-2">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-[#CBD3DD]">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4B06A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="mb-3 text-3xl font-semibold text-white md:text-4xl">
          Technical Expertise
        </h2>
        <p className="mb-8 max-w-3xl text-[#AEB8C6]">
          Deep focus on mobile and blockchain engineering to build products that
          are technically strong and market-ready.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {topSkills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-2xl border border-white/10 bg-[#0D1422]/90 p-6 transition hover:border-[#D4B06A]/45"
            >
              <div className="mb-4 text-[#D4B06A]">{skill.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {skill.title}
              </h3>
              <p className="mb-4 text-sm text-[#AEB8C6]">{skill.desc}</p>
              <ul className="space-y-1.5">
                {skill.skills.map((item) => (
                  <li key={item} className="text-sm text-[#D5DDE7]">
                    - {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {additionalSkills.map((skill) => (
            <div
              key={skill.label}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0D1422]/70 px-4 py-3 text-sm text-[#C9D1DC]"
            >
              <span className="text-[#D4B06A]">{skill.icon}</span>
              {skill.label}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="mb-8 text-3xl font-semibold text-white md:text-4xl">
          Featured Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`grid gap-6 rounded-2xl border border-white/10 bg-[#0D1422]/90 p-6 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div>
                <p className="mb-2 text-xs tracking-[0.2em] text-[#D4B06A]">
                  FEATURED
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-[#D8BF85]">{project.subtitle}</p>
                <p className="mb-4 text-sm text-[#B4BECC]">{project.desc}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#D4B06A]/35 bg-[#D4B06A]/10 px-3 py-1 text-xs text-[#E8D7B1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#E4C98D] transition hover:text-[#F3DEB2]"
                >
                  View project <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="mb-3 text-3xl font-semibold text-white md:text-4xl">
          Services
        </h2>
        <p className="mb-8 max-w-2xl text-[#AEB8C6]">
          Strategic product engineering support for mobile, Web3, and modern web
          experiences.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative min-h-[430px] overflow-hidden rounded-2xl border border-white/15"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover blur-[2px] transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1324]/35 via-[#0A1324]/55 to-[#0A1324]/95" />
              </div>

              <div className="relative flex h-full flex-col justify-end p-6 backdrop-blur-sm">
                <div className="mb-3 inline-flex w-fit rounded-lg border border-[#D4B06A]/35 bg-[#D4B06A]/10 p-2 text-[#D4B06A]">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-md border border-white/10 bg-[#0B1527]/45 px-3 py-2 text-sm text-[#D5DDEA]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-[#0D1422]/80 p-5"
            >
              <p className="text-2xl font-bold text-[#E8CF9C]">{stat.number}</p>
              <p className="text-xs text-[#AAB4C2]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-16 pt-14">
        <div className="rounded-3xl border border-[#D4B06A]/30 bg-gradient-to-r from-[#0D1422] via-[#111B2E] to-[#0E1525] p-8 text-center md:p-12">
          <h2 className="mb-3 text-3xl font-semibold text-white">Get In Touch</h2>
          <p className="mx-auto mb-6 max-w-xl text-[#B7C1CE]">
            Looking for a developer who can deliver polished mobile and Web3
            products? Let&apos;s discuss your next build.
          </p>
          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/usamasahi96"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 p-3 text-[#D5DDE8] transition hover:border-[#D4B06A]/50 hover:text-[#EBD6A8]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/usama-ali-867567268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 p-3 text-[#D5DDE8] transition hover:border-[#D4B06A]/50 hover:text-[#EBD6A8]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:usamaalisahi@gmail.com"
              className="rounded-full border border-white/20 p-3 text-[#D5DDE8] transition hover:border-[#D4B06A]/50 hover:text-[#EBD6A8]"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6">
        <p className="text-center text-sm text-[#95A0AF]">
          © {new Date().getFullYear()} Usama Ali. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
