import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Globe, Youtube, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { PdfExport } from "@/components/pdf-export";
import { ScrambleText } from "@/components/scramble-text";
import { TextReveal } from "@/components/text-reveal";
import { CounterAnimation } from "@/components/counter-animation";
import { LineDraw } from "@/components/line-draw";

// Helper function to parse achievement text and wrap numbers with CounterAnimation
function parseAchievement(text: string) {
  // Match patterns like $320M+, 83K+, 150+, $302M+, 6,200+, 1,000, $35M+, $100M, $230M+, $30M, $150M+
  const regex = /(\$?\d{1,3}(?:,\d{3})*(?:\.\d+)?[KMB]?\+?)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (regex.test(part) || /^\$?\d{1,3}(?:,\d{3})*(?:\.\d+)?[KMB]?\+?$/.test(part)) {
      return <CounterAnimation key={index}>{part}</CounterAnimation>;
    }
    return part;
  });
}

const experiences = [
  {
    company: "Magic Eden",
    role: "Senior UX Designer",
    period: "2024 - Present",
    description: "Leading UX initiatives at the world's largest cross-chain NFT marketplace, improving trading experiences across Bitcoin, Ethereum, Solana, and Polygon.",
    achievements: [
      "Owning end-to-end design for NFT discovery, listing, and trading flows across web and mobile.",
      "Partnering with product and engineering to drive marketplace conversion and retention improvements.",
      "Simplifying cross-chain wallet connections and multi-chain transaction flows.",
      "Leading user research initiatives to uncover friction points in the NFT trading journey.",
      "Architecting and scaling a unified design system across all platforms.",
    ],
  },
  {
    company: "BOB (Build on Bitcoin)",
    role: "Lead UX Designer",
    period: "2023 - 2024",
    description: "Shaped the product experience from zero to launch, collaborating across product, engineering, and marketing.",
    achievements: [
      "Led user research and competitive analysis to define product positioning and onboarding strategy.",
      "Designed intuitive wallet connect flows based on usability testing with target user segments.",
      "Defined user journeys and personas spanning first-time Bitcoin users to DeFi power users.",
      "Delivered the mainnet/testnet dApp, marketing site, and launch campaign touchpoints.",
      "Drove an airdrop campaign that generated $320M+ TVL in 3 weeks.",
      "Onboarded 83K+ wallets and facilitated 1,000+ BTC bridged to the ecosystem.",
      "Supported 150+ ecosystem projects processing 120K+ daily on-chain transactions.",
    ],
  },
  {
    company: "Pari.fi",
    role: "Lead UX Designer",
    period: "2023 - 2024",
    description: "Contracted to overhaul the platform's UX and visual design, resolving critical usability issues and modernizing the experience.",
    achievements: [
      "Owned full UX design from wireframes through final UI implementation.",
      "Validated core user flows through research sessions with early adopters.",
      "Designed end-to-end experiences for trading, liquidity provision, and staking.",
      "Balanced advanced DeFi functionality with accessibility for first-time users.",
      "Built a flexible design system accelerating development velocity.",
      "Launched to 6,200+ active users in the first weeks.",
      "Contributed to $302M+ in trade volume within the first month.",
      "Defined the brand visual identity to differentiate in the DeFi market.",
    ],
  },
  {
    company: "Interlay.io",
    role: "Lead UX Designer",
    period: "2021 - 2023",
    description: "Led a ground-up redesign of the dApp for desktop and mobile, establishing it as a top Polkadot DeFi protocol.",
    achievements: [
      "Built a comprehensive design system and UX documentation.",
      "Helped establish Interlay as one of the leading DeFi protocols on Polkadot.",
      "Designed UX for the first trustless Bitcoin bridge to Polkadot.",
    ],
  },
  {
    company: "Spectrum Protocol",
    role: "Lead UX Designer",
    period: "2021 - 2022",
    description: "Led a complete UX/UI overhaul for this Terra Luna yield optimizer, driving significant platform growth.",
    achievements: [
      "Identified and resolved UX friction through structured user testing.",
      "Delivered a modern, responsive design system with streamlined user flows.",
      "Grew TVL from $100M to $230M+ during tenure.",
      "Contributed to a $35M+ increase in market cap.",
    ],
  },
  {
    company: "Nexus Protocol",
    role: "Lead UX Designer",
    period: "2021 - 2022",
    description: "Designed the UX for a DeFi yield optimization platform with liquidation protection on Terra Luna.",
    achievements: [
      "Grew TVL from $30M to $150M+ during tenure.",
      "Designed UX for vaults, DEX/AMM, governance, and cross-chain bridge features.",
      "Unified the product ecosystem with consistent design patterns.",
      "Recognized for delivering one of the best UX experiences in the Terra ecosystem.",
    ],
  },
  {
    company: "Tenerity",
    role: "Senior UX Designer",
    period: "2020 - 2021",
    description: "Designed native and web applications for enterprise clients including CNN, British Gas, Vodafone, and Chevrolet.",
    achievements: [
      "Led user testing workshops to validate and iterate on prototypes.",
      "Built and maintained scalable, multi-brand design systems.",
      "Delivered high-quality UX under tight enterprise deadlines.",
    ],
  },
  {
    company: "CX Loyalty",
    role: "Lead UX Designer",
    period: "2019 - 2020",
    description: "Led UX design for mobile and desktop loyalty platforms serving NatWest and RBS customers.",
    achievements: [
      "Optimized conversion funnels while maintaining banking compliance standards.",
      "Evolved complex multi-brand design systems across platforms.",
      "Produced marketing assets for digital and print campaigns.",
    ],
  },
  {
    company: "Party Poker",
    role: "Lead UX Designer",
    period: "2017 - 2019",
    description: "Led a complete redesign of the core poker product across desktop and mobile platforms.",
    achievements: [
      "Delivered a full redesign of mobile and desktop applications.",
      "Created a unified design system spanning web and native apps.",
      "Designed all poker table illustrations and game interface assets.",
      "Produced marketing assets for digital and print campaigns.",
    ],
  },
  {
    company: "GVC Group",
    role: "UX Designer",
    period: "2015 - 2017",
    description: "Designed experiences for major gaming brands including Ladbrokes, Foxy Bingo, Party Casino, and Bwin.",
    achievements: [
      "Redesigned the Ladbrokes cashier, streamlining the deposit experience.",
      "Delivered conversion-focused UX improvements across multiple brands.",
      "Created detailed UI specifications and design documentation.",
    ],
  },
  {
    company: "Betway",
    role: "UX Designer",
    period: "2012 - 2015",
    description: "Grew from junior to senior designer in a fast-paced, lean team environment.",
    achievements: [
      "Mentored junior designers on UX principles and best practices.",
      "Created 3D assets for Premier League stadium advertising.",
      "Balanced product UX and marketing design across the brand.",
    ],
  },
  {
    company: "GIMO/Netbet",
    role: "Graphic Designer / UI Designer",
    period: "2010 - 2012",
    description: "Built foundational skills in visual and UI design, advancing from junior to senior level.",
    achievements: [],
  },
];

const skills = [
  "User Research",
  "UI Design",
  "Prototyping",
  "Information Architecture",
  "Design Systems",
  "Interaction Design",
  "Motion Design",
  "Usability Testing",
  "HTML/CSS",
  "3D Design",
  "Generative AI",
  "Responsive Design",
  "Accessibility",
];

const tools = [
  "Figma",
  "Adobe CC",
  "Framer",
  "Webflow",
  "Blender",
  "Rive",
  "LottieFiles",
  "Midjourney",
  "Claude Code",
  "v0",
  "Cursor",
  "Notion",
  "Linear",
  "Miro",
  "Spline",
  "After Effects",
  "Jitter",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-[#0a0a0a] py-8 md:py-16 font-mono noise-texture">
      <div className="mx-auto max-w-3xl mb-4 flex justify-end gap-2 no-print">
        <PdfExport />
        <ThemeToggle />
      </div>
      <main className="mx-auto max-w-3xl bg-white dark:bg-[#141414] shadow-xl shadow-black/5 dark:shadow-none rounded-lg border border-zinc-200 dark:border-zinc-800 px-8 md:px-12 py-12 md:py-16">
        <header className="mb-12">
          <ScrambleText as="h1" text="Jay Herbert" className="text-3xl font-semibold tracking-tight mb-4" />
          <TextReveal delay={0.3}>
            <p className="text-xs text-muted-foreground mb-4 max-w-2xl leading-relaxed">
              UX/UI Designer with 14+ years of experience shipping products across fintech, gaming, and DeFi. I specialize in turning complex systems into intuitive experiences from onboarding flows to full design systems. Currently at Magic Eden, designing cross-chain NFT trading experiences.
            </p>
          </TextReveal>
          <TextReveal delay={0.5}>
            <p className="text-xs text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              I leverage AI tools like Claude Code, Cursor, v0, and Midjourney to accelerate my design and development workflow turning ideas into polished prototypes faster without compromising on quality.
            </p>
          </TextReveal>

          <TextReveal delay={0.7}>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <a href="https://www.layer84.co.uk/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Globe className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              <span className="border-b border-transparent group-hover:border-foreground/30 transition-colors">layer84.co.uk</span>
            </a>
            <a href="tel:+447429579090" className="group flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              <span className="border-b border-transparent group-hover:border-foreground/30 transition-colors">+447429579090</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>Northampton, UK</span>
            </span>
            <a href="mailto:Jaylukeherbert@gmail.com" className="group flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              <span className="border-b border-transparent group-hover:border-foreground/30 transition-colors">Jaylukeherbert@gmail.com</span>
            </a>
            <a href="https://www.youtube.com/@3DJay429" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Youtube className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              <span className="border-b border-transparent group-hover:border-foreground/30 transition-colors">3DJay429</span>
            </a>
            </div>
          </TextReveal>
        </header>

        <LineDraw className="separator-notched mb-20" />

        <section className="mb-12 pt-4 animate-fade-in animation-delay-100">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="p-4 rounded-lg border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-sm font-medium">
                    {exp.company} <span className="font-normal text-muted-foreground">— {exp.role}</span>
                  </h3>
                  <span className="text-xs text-muted-foreground shrink-0 tabular-nums">{exp.period}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{exp.description}</p>
                {exp.achievements.length > 0 && (
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-muted-foreground/60 shrink-0">•</span>
                        <span>{parseAchievement(achievement)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <LineDraw className="separator-notched mb-12" />

        <section className="mb-12 pt-4 animate-fade-in animation-delay-200">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Education</h2>
          <div className="p-4 rounded-lg border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-200">
            <h3 className="text-sm font-medium">University of the Arts, London</h3>
            <p className="text-xs text-muted-foreground">BA (Hons) Digital Media Production</p>
            <p className="text-xs text-muted-foreground tabular-nums mt-1">Graduated: 2010</p>
          </div>
        </section>

        <LineDraw className="separator-notched mb-12" />

        <section className="pt-4 space-y-8 animate-fade-in animation-delay-300">
          <div>
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Skills</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs font-normal px-2 py-0.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Tools & Tech</h2>
            <div className="flex flex-wrap gap-1.5">
              {tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="text-xs font-normal px-2 py-0.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 cursor-default">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
