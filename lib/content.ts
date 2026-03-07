// ─────────────────────────────────────────────────────────────────────────────
// SITE CONTENT — All copy lives here. Swap text, links, and data without
// touching component files. REPLACE comments mark placeholder content.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV = {
  brand: '6TH DIMENSION',
  brandSub: 'Inc.',
  links: [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Who We Are', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contracts', href: '#contracts' },
    { label: 'News', href: '#news' },
    { label: 'Careers', href: '#careers' },
  ],
  cta: { label: 'Contact Us', href: '#contact' },
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
  primaryCta: { label: 'See Our Capabilities', href: '#capabilities' },
  secondaryCta: { label: 'View Our Products', href: '#products' },
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
  cta: { label: 'Explore Full Capabilities', href: '#capabilities' },
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
      program: 'Autonomy Research — Tellus Simulation Platform',
      description:
        'Deployed the Tellus simulation and visualization environment at AFRL to support cutting-edge autonomy research for next-generation aviation systems.',
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

// ─── Product Spotlight (Tellus) ───────────────────────────────────────────────
export const PRODUCT = {
  eyebrow: 'Our Products',
  headline: 'Introducing Tellus',
  subheadline:
    'A simulation and visualization environment built on service-oriented architecture — currently deployed at Air Force Research Labs.',
  body: 'Tellus is a plugin-extensible platform designed for high-fidelity mission environments. It enables rapid integration of new capabilities for UAS, Manned/Unmanned Teaming, and Ground-Based Sense and Avoid applications. Version 1.0 is approaching initial release.',
  features: [
    'Service-Oriented Architecture (SOA)',
    'Plugin-based extensibility',
    'Real-time visualization',
    'Manned/Unmanned Teaming (MUM-T)',
    'Ground-Based Sense & Avoid (GBSAA)',
    'UAS concept prototyping',
  ],
  cta: { label: 'Learn More About Tellus', href: '#products' },
  version: 'v1.0',
  status: 'Approaching Initial Release',
  deployedAt: 'Air Force Research Labs',
}

// ─── Leadership ───────────────────────────────────────────────────────────────
export const LEADERSHIP = {
  eyebrow: 'Built by People Who\'ve Done the Work',
  headline: 'Scott W. Brown',
  title: 'Founder, President & CEO',
  bio: '25+ years of leadership in simulation software development across Army Aviation, Air Force programs, and NASA. Scott founded 6th Dimension around a simple conviction: the gap between great engineering and great execution is process. He brings hands-on technical depth to every client engagement.',
  quote:
    '"We build software the way engineers think — architecture first, shortcuts never."',
  cta: { label: 'Meet the Team', href: '#about' },
  initials: 'SWB',
  // REPLACE: Set imageSrc to a real photo path e.g. "/images/scott-brown.jpg"
  imageSrc: null as string | null,
}

// ─── Careers Strip ────────────────────────────────────────────────────────────
export const CAREERS = {
  eyebrow: 'Join the Team',
  headline: 'Work Where the Problems Are Hard',
  body: 'We\'re looking for engineers and architects who want to build things that matter in the defense and simulation space. At 6th Dimension, you work directly on programs — not on slides about programs.',
  cta: { label: 'View Open Positions', href: '#careers' },
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
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Who We Are', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contracts', href: '#contracts' },
    { label: 'News', href: '#news' },
    { label: 'Careers', href: '#careers' },
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
