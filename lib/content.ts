// ─────────────────────────────────────────────────────────────────────────────
// SITE CONTENT — All copy lives here. Swap text, links, and data without
// touching component files. REPLACE comments mark placeholder content.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV = {
  brand: '6TH DIMENSION',
  brandSub: 'Inc.',
  links: [
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Who We Are', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contracts', href: '#contracts' },
    { label: 'News', href: '#news' },
    { label: 'Careers', href: '/careers' },
  ],
  cta: { label: 'Contact Us', href: '/contact' },
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'Huntsville, AL  ·  Defense & Aerospace Software',
  headlineParts: [
    'Simulation & Software',
    'Engineering for Programs',
    'That Matter.',
  ],
  body: '6th Dimension delivers modeling, simulation, and software architecture solutions for Army Aviation, DoD programs, and government agencies.',
  primaryCta: { label: 'See Our Capabilities', href: '/capabilities' },
  secondaryCta: { label: 'View Our Products', href: '/products' },
}

// ─── Credibility Bar ──────────────────────────────────────────────────────────
export const CREDIBILITY = {
  items: [
    { label: 'Huntsville, AL' },
    { label: '25+ Years Leadership' },
    { label: 'SISO Member' },
    { label: 'Microsoft GCC Certified' },
    { label: 'Army Aviation & DoD Programs' },
  ],
}

// ─── Capabilities ─────────────────────────────────────────────────────────────
export const CAPABILITIES = {
  eyebrow: 'What We Do',
  headline: 'Specialized Capabilities for Critical Programs',
  subheadline:
    'Software and engineering solutions for the programs that cannot afford to get it wrong.',
  cta: { label: 'Explore Full Capabilities', href: '/capabilities' },
  items: [
    {
      icon: 'radar' as const,
      title: 'Simulation & Modeling',
      description:
        'High-fidelity simulation environments for aviation mission systems, autonomy research, and operational analysis.',
    },
    {
      icon: 'layers' as const,
      title: 'Software Architecture',
      description:
        'Scalable, standards-based system design across the full product lifecycle — from concept through deployment.',
    },
    {
      icon: 'cpu' as const,
      title: 'Systems Engineering',
      description:
        'Integration of complex hardware and software systems for defense programs, on schedule and within scope.',
    },
    {
      icon: 'zap' as const,
      title: 'Process Innovation',
      description:
        'DevSecOps-aligned, iterative delivery with automation at every stage. Beyond DevOps.',
    },
    {
      icon: 'git-merge' as const,
      title: 'Technology Integration',
      description:
        'Risk-managed implementation of emerging technologies into existing DoD and government systems.',
    },
    {
      icon: 'plane' as const,
      title: 'Aviation Mission Systems',
      description:
        'Manned/Unmanned Teaming (MUM-T), Ground-Based Sense and Avoid (GBSAA), and UAS concept development.',
    },
  ],
}

// ─── Past Performance ─────────────────────────────────────────────────────────
export const PAST_PERFORMANCE = {
  eyebrow: 'Programs We\'ve Supported',
  headline: 'A Track Record That Speaks to Buyers',
  subheadline:
    'Named past performance across Army Aviation, AFRL, and DoD mission-critical programs.',
  items: [
    {
      client: 'Air Force Research Labs (AFRL)',
      program: 'Autonomy Research — Ceres Simulation Platform',
      description:
        'Deployed the Ceres simulation and visualization environment at AFRL to support cutting-edge autonomy research for next-generation aviation systems.',
      tags: ['Simulation', 'Autonomy', 'AFRL'],
    },
    {
      client: 'U.S. Army Aviation',
      program: 'S3I HWIL M&S (HMSD) — SAIC Prime Contract',
      description:
        'Providing software and system engineering support under a major SAIC-led contract, supporting Army Aviation simulation and hardware-in-the-loop testing.',
      tags: ['Systems Engineering', 'M&S', 'Army Aviation'],
    },
    {
      client: 'Space & Missile Defense Command',
      program: 'SMDC Program Support',
      description:
        'Simulation and software engineering engagement supporting SMDC program objectives through modeling, analysis, and technical advisory services.',
      tags: ['Simulation', 'Software Engineering', 'SMDC'],
    },
  ],
}

// ─── Product Spotlight (Ceres) ───────────────────────────────────────────────
export const PRODUCT = {
  eyebrow: 'Our Products',
  headline: 'Introducing Ceres',
  subheadline:
    'A configuration-based simulation and visualization platform built on service-oriented architecture — supporting multi-domain defense and government programs.',
  body: 'Ceres is a plugin-extensible platform designed for high-fidelity mission environments. It integrates multi-source data, real-time visualization, and cloud-based DevSecOps to enable rapid capability integration across UAS, autonomy research, and large-scale digital twin applications.',
  features: [
    'Service-Oriented Architecture (SOA)',
    'Plugin-based extensibility',
    'Real-time visualization',
    'Multi-source data integration',
    'Cloud-based DevSecOps',
    'Generative AI + GIS support',
  ],
  cta: { label: 'Learn More About Ceres', href: '/products' },
  version: 'v1.0',
  status: 'Approaching Initial Release',
  deployedAt: 'Air Force Research Labs',
}

// ─── Use Cases (Ceres) ────────────────────────────────────────────────────────
export const USE_CASES = {
  eyebrow: 'Use Cases',
  headline: 'Built for the Problems That Matter',
  subheadline: 'Ceres is purpose-built for complex, multi-domain applications across defense, government, and critical infrastructure.',
  items: [
    {
      icon: 'bot' as const,
      title: 'Autonomy AI',
      description: 'Multi-modal interfaces, sensor modeling, and a configurable platform design for next-generation autonomous systems research.',
    },
    {
      icon: 'globe' as const,
      title: 'Large Scale Digital Twin',
      description: 'Real-time scenery generation using AI/ML for data association and high-fidelity environment replication at scale.',
    },
    {
      icon: 'cloud' as const,
      title: 'Service Architecture',
      description: 'Cloud-based DevSecOps delivering optimized, secure datasets across distributed systems and programs.',
    },
    {
      icon: 'map-pin' as const,
      title: 'GIS + Generative AI',
      description: 'Data collection and curation from disparate geospatial sources for intelligent mapping and domain analysis.',
    },
    {
      icon: 'target' as const,
      title: 'Mission-Based Training',
      description: 'Digital Training Environment (DTE) leveraging simulation for realistic, high-fidelity mission preparation.',
    },
    {
      icon: 'layout' as const,
      title: 'UI/UX Design Tools',
      description: 'Integrates intuitive modeling tools with advanced data linking for streamlined operator workflows.',
    },
    {
      icon: 'compass' as const,
      title: 'Transportation, Energy, Environment & Mapping',
      description: 'Domain-specific simulation and visualization across critical infrastructure sectors.',
    },
  ],
}

// ─── Leadership ───────────────────────────────────────────────────────────────
export const LEADERSHIP = {
  eyebrow: 'Built by People Who\'ve Done the Work',
  headline: 'Scott W. Brown',
  title: 'Founder, President & CEO',
  bio: '25+ years of leadership in simulation software development across Army Aviation, Air Force programs, and NASA. Scott founded 6th Dimension around a simple conviction: the gap between great engineering and great execution is process. He brings hands-on technical depth to every client engagement.',
  quote:
    '"We build software the way engineers think — architecture first, shortcuts never."',
  cta: { label: 'Meet the Team', href: '/about' },
  initials: 'SWB',
  // REPLACE: Set imageSrc to a real photo path e.g. "/images/scott-brown.jpg"
  imageSrc: null as string | null,
}

// ─── Careers ──────────────────────────────────────────────────────────────────
export const CAREERS = {
  eyebrow: 'Join the Team',
  headline: 'Work Where the Problems Are Hard',
  body: 'We\'re looking for engineers and architects who want to build things that matter in the defense and simulation space. At 6th Dimension, you work directly on programs — not on slides about programs.',
  cta: { label: 'View Open Positions', href: '/careers' },
  values: [
    {
      title: 'Work on Real Programs',
      description:
        'No internal tooling projects. You work directly on defense and government programs that have real-world impact.',
    },
    {
      title: 'Architecture First',
      description:
        'We build software the right way — architecture-first, with a long-term focus on quality over shortcuts.',
    },
    {
      title: 'Small Team, High Ownership',
      description:
        'Our lean team means your contributions are visible and meaningful. You own your work end to end.',
    },
  ],
  openPositionsNote:
    'We hire for quality and fit. No open positions are listed right now — but if you\'re a strong engineer who wants to work in defense simulation, reach out directly.',
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT = {
  eyebrow: 'Get in Touch',
  headline: "Let's Talk About Your Program",
  body: "Whether you're scoping a new engagement or exploring how 6th Dimension fits your contracting needs, we're ready to have a real conversation.",
  details: {
    phone: '(256) 652-6735',
    email: 'info@6thdpro.com',
    address: '7800 Madison Blvd, Suite 610',
    city: 'Huntsville, AL 35806',
  },
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER = {
  brand: '6TH DIMENSION',
  tagline: 'Defense simulation and software engineering — Huntsville, AL.',
  links: [
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Who We Are', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contracts', href: '#contracts' },
    { label: 'News', href: '#news' },
    { label: 'Careers', href: '/careers' },
  ],
  contact: {
    phone: '(256) 652-6735',
    email: 'info@6thdpro.com',
    address: '7800 Madison Blvd, Suite 610',
    city: 'Huntsville, AL 35806',
  },
  // REPLACE: Add real certification badges as { label, imageSrc } once available
  badges: [
    { label: 'SISO Member' },
    { label: 'MSFT GCC Certified' },
    { label: 'DoD Programs' },
  ],
  social: {
    // REPLACE: Update LinkedIn URL to verified company page URL
    linkedin: 'https://www.linkedin.com/company/6th-dimension-inc',
  },
  legal: '© 2026 6th Dimension, Inc. All Rights Reserved.',
}
