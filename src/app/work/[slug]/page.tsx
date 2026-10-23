import { getProjectBySlug } from '@/lib/content-service';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default async function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-porcelain min-h-screen">
      {/* Project Header */}
      <section className="pt-32 pb-16 px-6 max-w-[1440px] mx-auto">
        <Link
          href="/work"
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-obsidian hover:text-acid-lime transition-colors mb-12 group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-9xl font-display font-bold text-obsidian tracking-tighter leading-none mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-12">
              <span className="bg-obsidian text-porcelain px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                {project.industry}
              </span>
              {project.services.map(s => (
                <span key={s} className="border border-obsidian/10 px-3 py-1 text-[10px] uppercase tracking-widest font-medium text-obsidian">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-xl text-muted-grey leading-relaxed italic">
              "{project.shortDescription}"
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="px-6 max-w-[1440px] mx-auto mb-32">
        <div className="relative aspect-video overflow-hidden bg-obsidian">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* Project Narrative */}
      <section className="py-32 px-6 bg-obsidian text-porcelain">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-8 text-acid-lime">The Challenge</h2>
            <p className="text-lg text-muted-grey leading-relaxed mb-12">
              {project.fullIntroduction}
              <br /><br />
              The primary goal was to redefine how the brand interacted with its digital audience, moving away from static templates towards a fluid, immersive experience.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Key Deliverables</h3>
              {project.services.map(service => (
                <div key={service} className="flex items-center gap-3 text-muted-grey">
                  <CheckCircle2 size={16} className="text-acid-lime" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            {project.galleryAssets.map((asset, i) => (
              <div key={i} className={`relative overflow-hidden bg-elevated-dark ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                <img src={asset} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-obsidian tracking-tighter mb-8">
            Ready to build something <span className="text-acid-lime">extraordinary?</span>
          </h2>
          <Link href="/contact" className="btn-primary px-12 py-6 text-lg uppercase tracking-widest">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
