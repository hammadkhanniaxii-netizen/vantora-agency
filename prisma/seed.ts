import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  console.log('🌱 Seeding VANTORA database...');

  // Clear existing data to avoid duplicates
  await prisma.enquiry.deleteMany();
  await prisma.article.deleteMany();
  await prisma.project.deleteMany();

  // 1. Seed Concept Projects
  const projects = [
    {
      title: 'Aetheria Digital',
      slug: 'aetheria-digital',
      shortDescription: 'A luxury immersive experience for a futuristic skincare brand.',
      fullIntroduction: 'Aetheria required a digital presence that mirrored the ethereal nature of their products. We built a high-performance WebGL experience focusing on organic motion and crystalline visuals.',
      industry: 'Beauty & Wellness',
      services: ['Web Design', 'Creative Technology', '3D Motion'],
      heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8f858131?q=80&w=2000',
      galleryAssets: [
        'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000',
        'https://images.unsplash.com/photo-1618005182384-a83a8f858131?q=80&w=1000',
      ],
      isFeatured: true,
      isConcept: true,
      sortOrder: 1,
    },
    {
      title: 'Nova Architecture',
      slug: 'nova-architecture',
      shortDescription: 'Minimalist identity and portfolio for a sustainable urban design firm.',
      fullIntroduction: 'Nova focuses on the intersection of nature and concrete. We developed a brutalist-inspired visual identity and a high-contrast portfolio site emphasizing geometric precision.',
      industry: 'Architecture',
      services: ['Brand Strategy', 'Visual Identity', 'Web Design'],
      heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000',
      galleryAssets: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000',
        'https://images.unsplash.com/photo-1449156001437-3a16c77c3742?q=80&w=1000',
      ],
      isFeatured: true,
      isConcept: true,
      sortOrder: 2,
    },
    {
      title: 'Kinetix Ecommerce',
      slug: 'kinetix-ecommerce',
      shortDescription: 'Performance-driven storefront for high-end athletic apparel.',
      fullIntroduction: 'Kinetix needed a site that felt fast. We implemented a headless commerce architecture with ultra-smooth transitions and a conversion-focused checkout flow.',
      industry: 'Retail',
      services: ['Ecommerce', 'UX/UI Design', 'Performance Engineering'],
      heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000',
      galleryAssets: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000',
      ],
      isFeatured: false,
      isConcept: true,
      sortOrder: 3,
    },
    {
      title: 'Lumina Campaigns',
      slug: 'lumina-campaigns',
      shortDescription: 'A multi-channel digital campaign for an experimental art gallery.',
      fullIntroduction: 'Lumina aimed to democratize art. We created a series of interactive social assets and a landing page that used generative art to engage visitors.',
      industry: 'Arts & Culture',
      services: ['Digital Marketing', 'Campaigns', 'Creative Technology'],
      heroImage: 'https://images.unsplash.com/photo-1547826039-6357f2a6727a?q=80&w=2000',
      galleryAssets: [
        'https://images.unsplash.com/photo-1547826039-6357f2a6727a?q=80&w=1000',
      ],
      isFeatured: true,
      isConcept: true,
      sortOrder: 4,
    },
    {
      title: 'Vertex Fintech',
      slug: 'vertex-fintech',
      shortDescription: 'Rebranding a legacy financial institution for the Gen-Z market.',
      fullIntroduction: 'Vertex wanted to shed its "corporate" image. We introduced a bold, neon-accented visual system and a mobile-first interface for their new app.',
      industry: 'Finance',
      services: ['Brand Strategy', 'UI/UX Design', 'Messaging'],
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38a71?q=80&w=2000',
      galleryAssets: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38a71?q=80&w=1000',
      ],
      isFeatured: false,
      isConcept: true,
      sortOrder: 5,
    },
    {
      title: 'Solis Energy',
      slug: 'solis-energy',
      shortDescription: 'A clean-energy dashboard and brand identity for a solar startup.',
      fullIntroduction: 'Solis makes complex energy data simple. We designed a data-rich dashboard that emphasizes clarity and environmental impact.',
      industry: 'Energy',
      services: ['Web Design', 'Dashboard UI', 'Visual Identity'],
      heroImage: 'https://images.unsplash.com/photo-1509391366360-2b1bb367f68a?q=80&w=2000',
      galleryAssets: [
        'https://images.unsplash.com/photo-1509391366360-2b1bb367f68a?q=80&w=1000',
      ],
      isFeatured: false,
      isConcept: true,
      sortOrder: 6,
    },
  ];

  for (const p of projects) {
    await prisma.project.create({ data: p });
  }

  // 2. Seed Demo Articles
  const articles = [
    {
      title: 'The Future of Immersive Web',
      slug: 'future-of-immersive-web',
      summary: 'Exploring how WebGL and 3D motion are redefining digital storytelling.',
      content: 'Long form content about the evolution of the web...',
      category: 'Technology',
      heroImage: 'https://images.unsplash.com/photo-1633356122544-f13436ad85c5?q=80&w=2000',
      author: 'Vantora Editorial',
    },
    {
      title: 'Defining Brand Resonance',
      slug: 'defining-brand-resonance',
      summary: 'Why emotional connection is the only metric that truly matters in 2026.',
      content: 'Deep dive into brand strategy and emotional psychology...',
      category: 'Strategy',
      heroImage: 'https://images.unsplash.com/photo-1557800636-894a64678bc7?q=80&w=2000',
      author: 'Vantora Editorial',
    },
    {
      title: 'Minimalism vs. Expressionism',
      slug: 'minimalism-vs-expressionism',
      summary: 'Finding the balance between clean aesthetics and bold creative expression.',
      content: 'Analysis of contemporary design trends...',
      category: 'Design',
      heroImage: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000',
      author: 'Vantora Editorial',
    },
    {
      title: 'The Headless Commerce Shift',
      slug: 'headless-commerce-shift',
      summary: 'How decoupled architectures are enabling a new era of retail experiences.',
      content: 'Technical breakdown of headless commerce...',
      category: 'Technology',
      heroImage: 'https://images.unsplash.com/photo-1557821552-174078f7673d?q=80&w=2000',
      author: 'Vantora Editorial',
    },
  ];

  for (const a of articles) {
    await prisma.article.create({ data: a });
  }

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
