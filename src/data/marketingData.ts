// Centralized Marketing Data for Nikhilesh Mendhe
// All stats, case studies, testimonials, and services are editable here.
// Every placeholder is marked with a TODO comment and [Placeholder] marker.

import nightCartImg from '@/assets/projects/nightcart.png';
import pinkSocialImg from '@/assets/projects/pinksocial.png';
import finMentorImg from '@/assets/projects/finmentor.png';
import fancyBeignetImg from '@/assets/projects/fancybeignet.png';
import portfolioImg from '@/assets/projects/portfolio.png';

export interface PersonalInfo {
  name: string;
  heroTitle: string;
  heroTagline: string;
  heroPitch: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  whatsAppUrl: string;
  resumeUrl: string;
  aboutBio: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Nikhilesh Mendhe",
  heroTitle: "Aspiring Digital Marketing Professional | Performance Ads & Growth",
  heroTagline: "I turn ad spend into leads and sales.",
  heroPitch: "Developer-turned-marketer: I build the landing page, set up tracking, and run the ads myself.",
  email: "nikhileshmendhe07@gmail.com",
  phone: "+91-7558424907",
  linkedinUrl: "https://www.linkedin.com/in/nikhileshmendhe",
  whatsAppUrl: "https://wa.me/qr/MR63RCXL43JDP1",
  resumeUrl: "/NIKHILESH_MENDHE_RESUME.pdf",
  aboutBio: [
    "I'm a Digital Marketing Specialist dedicated to transforming digital marketing budgets into predictable, profitable revenue. My approach revolves around four core pillars: deep audience research, high-converting creative testing, ruthless funnel optimization, and full-funnel tracking.",
    "Having a Computer Science Engineering background gives me a distinct unfair advantage in performance marketing. I don't just draft ad copy—I code responsive, blazing-fast landing pages, configure server-side GA4 and Meta Pixel tracking, troubleshoot conversion APIs, and build automated workflows that prevent lead leakage.",
    "Whether scaling Meta and Google ad campaigns, recovering abandoned checkouts, or structuring high-intent search funnels, I bridge the gap between creative storytelling, technical infrastructure, and data-driven ROI."
  ]
};

// ---------------------------------------------------------------------------
// 1. By the Numbers (Stats)
// ---------------------------------------------------------------------------
export interface MarketingStat {
  id: string;
  label: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  icon: string;
  // TODO: [Placeholder] Replace with your actual marketing metrics
  isPlaceholder: true;
}

export const marketingStats: MarketingStat[] = [
  {
    id: "ad-spend",
    label: "Ad Spend Managed",
    // TODO: [Placeholder] Replace with your real total ad spend managed
    numericValue: 150000,
    prefix: "$",
    suffix: "+",
    icon: "💰",
    isPlaceholder: true
  },
  {
    id: "leads-generated",
    label: "Leads Generated",
    // TODO: [Placeholder] Replace with your verified lead generation total
    numericValue: 8500,
    prefix: "",
    suffix: "+",
    icon: "🎯",
    isPlaceholder: true
  },
  {
    id: "roas",
    label: "Average ROAS",
    // TODO: [Placeholder] Replace with your verified average return on ad spend
    numericValue: 4.2,
    prefix: "",
    suffix: "x",
    icon: "📈",
    isPlaceholder: true
  },
  {
    id: "ctr",
    label: "Average CTR",
    // TODO: [Placeholder] Replace with your verified average click-through rate
    numericValue: 3.8,
    prefix: "",
    suffix: "%",
    icon: "⚡",
    isPlaceholder: true
  },
  {
    id: "campaigns",
    label: "Campaigns Run",
    // TODO: [Placeholder] Replace with your verified campaigns count
    numericValue: 85,
    prefix: "",
    suffix: "+",
    icon: "🚀",
    isPlaceholder: true
  }
];

// ---------------------------------------------------------------------------
// 2. Skills & Technologies
// ---------------------------------------------------------------------------
export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    icon: string;
  }[];
}

export const marketingSkillCategories: SkillCategory[] = [
  {
    title: "Paid Ads",
    skills: [
      { name: "Meta Ads", level: 92, icon: "🎯" },
      { name: "Google Ads", level: 88, icon: "🔍" },
      { name: "Retargeting", level: 90, icon: "🔄" },
      { name: "A/B Testing", level: 86, icon: "🧪" }
    ]
  },
  {
    title: "Analytics & Tracking",
    skills: [
      { name: "GA4", level: 90, icon: "📊" },
      { name: "Meta Pixel", level: 92, icon: "👾" },
      { name: "Google Tag Manager", level: 88, icon: "🏷️" },
      { name: "Looker Studio", level: 84, icon: "📈" }
    ]
  },
  {
    title: "Organic & Content",
    skills: [
      { name: "SEO", level: 85, icon: "🌐" },
      { name: "Content Strategy", level: 88, icon: "📝" },
      { name: "Copywriting", level: 90, icon: "✍️" },
      { name: "Social Media", level: 87, icon: "📱" }
    ]
  },
  {
    title: "Creative & Tools",
    skills: [
      { name: "Canva", level: 94, icon: "🎨" },
      { name: "Video Editing", level: 82, icon: "🎬" },
      { name: "Landing Pages", level: 95, icon: "💻" },
      { name: "Email Marketing", level: 85, icon: "📧" }
    ]
  }
];

// ---------------------------------------------------------------------------
// 3. What I'm Good At (About Section Strengths)
// ---------------------------------------------------------------------------
export const marketingStrengths = [
  "Paid Media Strategy (Meta & Google Ads)",
  "Full-Funnel Conversion Rate Optimization (CRO)",
  "Custom Landing Page Architecture & A/B Testing",
  "Server-Side Tagging & GA4 / Meta Pixel Tracking",
  "High-Converting Direct Response Copywriting",
  "Marketing Automation & Lead Nurturing Workflows"
];

// ---------------------------------------------------------------------------
// 4. Case Studies (formerly Projects)
// ---------------------------------------------------------------------------
export interface CaseStudy {
  id: number;
  title: string;
  category: 'meta-ads' | 'google-ads' | 'seo' | 'social' | 'creative';
  categoryLabel: string;
  problem: string;
  whatIDid: string;
  result: string;
  resultHighlight: string;
  tags: string[];
  image: string;
  featured?: boolean;
  // TODO: [Placeholder] Replace case study numbers and details with your real case studies
  isPlaceholder: true;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    // TODO: [Placeholder] Case Study 1: Replace with real client/campaign info
    title: "D2C Skincare Brand: Scaled ROAS & Lowered Acquisition Cost",
    category: "meta-ads",
    categoryLabel: "Meta Ads",
    problem: "Rising customer acquisition costs on Meta had compressed profit margins to under 1.5x ROAS with high checkout abandonment.",
    whatIDid: "Rebuilt the entire funnel: restructured Advantage+ ad sets, created UGC video hooks, and deployed an optimized high-speed landing page with custom Meta Pixel purchase tracking.",
    result: "Achieved a 40% reduction in cost per message/acquisition and scaled monthly revenue by 2.8x within 60 days.",
    resultHighlight: "40% Lower Cost Per Message & 3.4x ROAS",
    tags: ["Meta Ads", "Landing Page", "Meta Pixel", "A/B Testing"],
    image: nightCartImg,
    featured: true,
    isPlaceholder: true
  },
  {
    id: 2,
    // TODO: [Placeholder] Case Study 2: Replace with real client/campaign info
    title: "B2B SaaS Growth: High-Intent Google Search Lead Pipeline",
    category: "google-ads",
    categoryLabel: "Google Ads",
    problem: "Client had high CPCs ($18+) bidding on broad tech keywords that delivered unverified clicks and minimal demo requests.",
    whatIDid: "Executed negative keyword scrubbing, re-architected single-theme ad groups focusing on commercial intent, and redesigned the trial demo landing page with dynamic headline injection.",
    result: "Lowered average CPL from $78 to $34 while boosting demo booking completion rate by 64%.",
    resultHighlight: "56% Cheaper Cost-Per-Lead (CPL)",
    tags: ["Google Ads", "GTM Tracking", "Landing Pages", "Copywriting"],
    image: pinkSocialImg,
    featured: true,
    isPlaceholder: true
  },
  {
    id: 3,
    // TODO: [Placeholder] Case Study 3: Replace with real client/campaign info
    title: "E-Commerce Footwear: Retargeting Engine & Abandoned Cart Recovery",
    category: "creative",
    categoryLabel: "Creative & Retargeting",
    problem: "Over 74% cart abandonment rate and ad fatigue from static lifestyle images across Facebook and Instagram.",
    whatIDid: "Produced 12 dynamic video ad variations featuring unboxing reels and customer review overlays. Configured 3-day and 7-day catalog retargeting with exclusive discount triggers.",
    result: "Generated 4.8x blended ROAS during holiday season and recovered $42,000 in previously lost cart revenue.",
    resultHighlight: "4.8x Blended ROAS & $42K Recovered",
    tags: ["Video Creatives", "Catalog Retargeting", "Canva", "Meta Ads"],
    image: finMentorImg,
    featured: true,
    isPlaceholder: true
  },
  {
    id: 4,
    // TODO: [Placeholder] Case Study 4: Replace with real client/campaign info
    title: "FinTech Platform: Organic Search Authority & Technical SEO",
    category: "seo",
    categoryLabel: "SEO",
    problem: "Zero organic footprint for core personal finance keywords; heavy reliance on expensive paid acquisition.",
    whatIDid: "Conducted deep keyword gap analysis, built 15 high-authority comparison guides, fixed crawl budget issues, and implemented schema markup for financial calculators.",
    result: "Grew monthly organic impressions from 1.2K to 145K in 5 months, capturing #1-3 ranking positions for 18 competitive keywords.",
    resultHighlight: "12x Organic Traffic Growth in 5 Months",
    tags: ["SEO", "Content Strategy", "GA4", "Schema Markup"],
    image: fancyBeignetImg,
    isPlaceholder: true
  },
  {
    id: 5,
    // TODO: [Placeholder] Case Study 5: Replace with real client/campaign info
    title: "Local Healthcare Clinic: Multi-Channel Lead Generation",
    category: "social",
    categoryLabel: "Social & Local Ads",
    problem: "Inconsistent patient appointments and wasted budget targeting wide zip codes without geo-exclusions.",
    whatIDid: "Deployed hyper-local Meta & Google Local Service Ads with instant WhatsApp booking integration and automated SMS confirmation reminders.",
    result: "Generated 320+ qualified patient inquiries in 90 days at an average cost of $6.20 per verified lead.",
    resultHighlight: "320+ Verified Inquiries at $6.20/Lead",
    tags: ["Meta Ads", "Google Ads", "Local SEO", "WhatsApp Funnel"],
    image: portfolioImg,
    isPlaceholder: true
  },
  {
    id: 6,
    // TODO: [Placeholder] Case Study 6: Replace with real client/campaign info
    title: "EdTech Bootcamp: High-Converting Webinar Funnel",
    category: "creative",
    categoryLabel: "Funnel & Creative",
    problem: "High webinar registration costs and poor live attendance rates (under 18%) for career transition workshops.",
    whatIDid: "Designed an interactive 2-step registration funnel, tested 8 video creative hooks highlighting career salaries, and automated a 4-part email/SMS reminder sequence.",
    result: "Doubled live attendee rate to 44% and generated 82 enrolled students totaling $120,000 in course fees.",
    resultHighlight: "44% Attendance Rate & $120K Course Sales",
    tags: ["Landing Page", "Email Funnel", "Video Editing", "A/B Testing"],
    image: nightCartImg,
    isPlaceholder: true
  }
];

export const caseStudyCategories = [
  { id: 'all', label: 'All Case Studies' },
  { id: 'meta-ads', label: 'Meta Ads' },
  { id: 'google-ads', label: 'Google Ads' },
  { id: 'seo', label: 'SEO' },
  { id: 'social', label: 'Social' },
  { id: 'creative', label: 'Creative' }
];

// ---------------------------------------------------------------------------
// 5. Testimonials (Client-Style Quotes)
// ---------------------------------------------------------------------------
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  // TODO: [Placeholder] Replace with real client reviews
  isPlaceholder: true;
}

export const marketingTestimonials: Testimonial[] = [
  {
    name: "Aman Verma",
    role: "Founder & CEO",
    company: "D2C Lifestyle Brand",
    image: "👔",
    // TODO: [Placeholder] Testimonial 1
    quote: "Nikhilesh took our Meta ad campaigns from breaking even to consistent 3.8x+ ROAS within two months. His developer background means our landing pages load instantly and our pixel tracking actually matches our Stripe revenue.",
    rating: 5,
    isPlaceholder: true
  },
  {
    name: "Sneha Patel",
    role: "Marketing Director",
    company: "SaaS Enterprise Solutions",
    image: "👩‍💼",
    // TODO: [Placeholder] Testimonial 2
    quote: "We struggled with wasted ad spend on Google until Nikhilesh re-engineered our search campaign keywords and built dedicated landing pages for each vertical. Our cost per qualified demo plummeted by 52%.",
    rating: 5,
    isPlaceholder: true
  },
  {
    name: "David Chen",
    role: "E-Commerce Brand Manager",
    company: "Aura Apparel",
    image: "👨‍💻",
    // TODO: [Placeholder] Testimonial 3
    quote: "The combination of technical understanding and creative copywriting is super rare. Nikhilesh writes hooks that grab attention and configures GTM events that give us clear attribution across our entire funnel.",
    rating: 5,
    isPlaceholder: true
  },
  {
    name: "Rohan Kulkarni",
    role: "Operations Head",
    company: "MedCare Health Network",
    image: "🏥",
    // TODO: [Placeholder] Testimonial 4
    quote: "Our local clinic went from struggling with empty consultation slots to a 3-week waiting list. His WhatsApp lead funnel and Google Ads setup gave us reliable, low-cost patient bookings every single week.",
    rating: 5,
    isPlaceholder: true
  }
];

// ---------------------------------------------------------------------------
// 6. Achievements Wall (Marketing)
// ---------------------------------------------------------------------------
export interface MarketingAchievement {
  title: string;
  category: string;
  description: string;
  // TODO: [Placeholder] Replace with your actual achievements
  isPlaceholder: true;
}

export const marketingAchievements: MarketingAchievement[] = [
  {
    title: "SIH 2024 Runner-up",
    category: "National Hackathon",
    description: "Runner-up at the prestigious Smart India Hackathon (SIH) 2024, competing against top tech innovators nationwide.",
    isPlaceholder: true
  },
  {
    title: "Triple Hackathon Winner",
    category: "Innovation Competitions",
    description: "Winner of 2 college-level hackathons and 1 national-level hackathon at JAGSoM.",
    isPlaceholder: true
  },
  {
    title: "100-Hr Digital Marketing Mastery",
    category: "Professional Training",
    description: "Completed intensive 100-hour Digital Marketing program by Tanmoy Das covering Google Ads, Meta Ads, SEO, and SMM.",
    isPlaceholder: true
  },
  {
    title: "Tech Club Active Member",
    category: "Academic & Community",
    description: "Consistently strong academic performer and active member of the college tech club at GH Raisoni.",
    isPlaceholder: true
  }
];

// ---------------------------------------------------------------------------
// 7. Certificates (Marketing)
// ---------------------------------------------------------------------------
export interface MarketingCertificate {
  title: string;
  issuer: string;
  date: string;
  type: string;
  image: string;
  skills: string[];
  description: string;
  credentialId: string;
  // TODO: [Placeholder] Replace with your actual certificates
  isPlaceholder: true;
}

export const marketingCertificates: MarketingCertificate[] = [
  {
    title: "100-Hour Digital Marketing Certification",
    issuer: "Course by Tanmoy Das",
    date: "2026",
    type: "Professional Certification",
    image: "🎓",
    skills: ["Google Ads", "Meta Ads", "SEO", "SMM", "Shopify Marketing", "Email & Content"],
    description: "Comprehensive 100-hour hands-on curriculum covering Google Ads (Search, Display, Video, Shopping, App & Demand Gen, remarketing), Meta/Facebook Ads, LinkedIn, Microsoft, X, Pinterest, SEO, SMM, and influencer marketing.",
    credentialId: "TD-DM-100HRS-2026",
    isPlaceholder: true
  },
  {
    title: "Google Ads Search & Display",
    issuer: "Google Skillshop",
    date: "2026",
    type: "Industry Certification",
    image: "🎯",
    skills: ["Search Ads", "Display Network", "Conversion Tracking", "Remarketing"],
    description: "Mastery in setting up, optimizing, and tracking high-intent Google Search and Display advertising campaigns.",
    credentialId: "GGL-SEARCH-2026",
    isPlaceholder: true
  },
  {
    title: "Meta Certified Media Specialist",
    issuer: "Meta Blueprint",
    date: "2026",
    type: "Media Buying",
    image: "📱",
    skills: ["Facebook Ads", "Instagram Ads", "Meta Ads Manager", "Audience Retargeting"],
    description: "Hands-on expertise in launching and optimizing paid social ad campaigns with custom audience targeting and retargeting.",
    credentialId: "META-BUY-2026",
    isPlaceholder: true
  },
  {
    title: "SEO & Local Search Optimization",
    issuer: "Google Analytics & SEO Academy",
    date: "2026",
    type: "Organic Growth",
    image: "🌐",
    skills: ["On-Page SEO", "Off-Page SEO", "Local SEO", "Google Business Profile"],
    description: "Technical search engine optimization, keyword research, Google Analytics for SEO, and Google Business Profile & Maps ranking.",
    credentialId: "SEO-LOCAL-2026",
    isPlaceholder: true
  }
];

// ---------------------------------------------------------------------------
// 8. Work Experience (Marketing)
// ---------------------------------------------------------------------------
export interface MarketingExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  skills: string[];
  contributions: string[];
  // TODO: [Placeholder] Replace with your actual marketing job roles
  isPlaceholder: true;
}

export const marketingExperiences: MarketingExperience[] = [
  {
    company: "Career Domain",
    role: "Digital Marketing Intern",
    duration: "Jun 2026 - Oct 2026",
    location: "Nagpur, India",
    type: "Internship",
    logo: "🎯",
    skills: ["Meta Ads Manager", "Google Ads", "Local SEO", "Google Business Profile", "A/B Testing", "Conversion Tracking"],
    contributions: [
      "Planned, launched and managed paid ad campaigns on Meta (Facebook and Instagram) using Meta Ads Manager, with audience targeting and retargeting.",
      "Supported Google Ads campaigns across Search and Display, including keyword research, ad copy and conversion tracking.",
      "Worked on Local SEO and Google Business Profile optimization to improve local visibility and Maps ranking.",
      "Tracked campaign performance and used the data to refine targeting, creatives and budgets."
    ],
    isPlaceholder: true
  }
];

// ---------------------------------------------------------------------------
// 9. Marketing Insights (Knowledge Hub)
// ---------------------------------------------------------------------------
export interface MarketingInsight {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  // TODO: [Placeholder] Replace with your real articles or blog posts
  isPlaceholder: true;
}

export const marketingInsights: MarketingInsight[] = [
  {
    title: "How to Scale Meta Ads Past $1,000/Day Without Tanking ROAS",
    excerpt: "A systematic framework for horizontal and vertical scaling on Meta: testing creative fatigue, broad audience targeting, and Advantage+ budget optimization.",
    date: "Dec 18, 2024",
    readTime: "7 min",
    category: "Paid Ads",
    tags: ["MetaAds", "Scaling", "ROAS", "PerformanceMarketing"],
    image: "📊",
    isPlaceholder: true
  },
  {
    title: "Server-Side Tracking & Meta CAPI: Fixing Attribution After iOS 14.5",
    excerpt: "Why browser-only cookies lose 30%+ of purchase events and how a developer-level GTM Server Container setup restores clean conversion tracking.",
    date: "Nov 30, 2024",
    readTime: "10 min",
    category: "Tracking",
    tags: ["GA4", "MetaPixel", "CAPI", "GTM"],
    image: "⚙️",
    isPlaceholder: true
  },
  {
    title: "Landing Page Teardown: 5 Tweaks That Boosted CVR From 2.1% to 5.4%",
    excerpt: "Analyzing real heatmap tests: removing navigation friction, rewriting the above-the-fold value prop, and adding instant social proof triggers.",
    date: "Nov 14, 2024",
    readTime: "6 min",
    category: "CRO",
    tags: ["LandingPages", "CRO", "ABTesting", "Conversion"],
    image: "⚡",
    isPlaceholder: true
  },
  {
    title: "Google Search vs Performance Max: When To Use Each For Maximum ROI",
    excerpt: "Demystifying when to bid on high-intent exact search keywords versus letting Google's machine learning distribute budget across YouTube and Display.",
    date: "Oct 28, 2024",
    readTime: "8 min",
    category: "Google Ads",
    tags: ["GoogleAds", "PMax", "SearchAds", "Bidding"],
    image: "🔍",
    isPlaceholder: true
  },
  {
    title: "The 3-Hook Creative Framework for High-Converting Short-Form Video Ads",
    excerpt: "Breakdown of the Question Hook, the Contrarian Hook, and the Problem-Agitate Hook used to lower 3-second drop-offs on Reels and TikTok.",
    date: "Oct 12, 2024",
    readTime: "5 min",
    category: "Creative",
    tags: ["VideoAds", "Reels", "Canva", "Copywriting"],
    image: "🎬",
    isPlaceholder: true
  },
  {
    title: "Local SEO Playbook: Ranking in the Google Map 3-Pack in 60 Days",
    excerpt: "Step-by-step audit of Google Business Profile optimization, local citation cleanup, review velocity, and geo-tagged landing page architecture.",
    date: "Sep 20, 2024",
    readTime: "9 min",
    category: "SEO",
    tags: ["LocalSEO", "GoogleMaps", "OrganicGrowth"],
    image: "📍",
    isPlaceholder: true
  }
];

// ---------------------------------------------------------------------------
// 10. Services (Contact Section)
// ---------------------------------------------------------------------------
export interface MarketingService {
  title: string;
  description: string;
  iconName: string;
}

export const marketingServices: MarketingService[] = [
  {
    title: "Meta & Google Ads Management",
    description: "End-to-end paid campaign setup, audience segmentation, bidding strategies, and daily budget optimization to maximize ROAS.",
    iconName: "Target"
  },
  {
    title: "Social Media Management & Strategy",
    description: "Data-driven organic content calendar, direct response copywriting, community engagement, and brand storytelling.",
    iconName: "Share2"
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Keyword research, technical website audits, on-page optimization, and content roadmaps to capture high-intent organic traffic.",
    iconName: "Search"
  },
  {
    title: "Landing Page & Funnel Setup",
    description: "Custom-coded, lightning-fast landing pages paired with GA4, Meta Pixel, and GTM event tracking for leak-proof conversion funnels.",
    iconName: "Layout"
  }
];
