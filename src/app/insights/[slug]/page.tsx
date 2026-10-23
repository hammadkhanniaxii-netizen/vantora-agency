import { getArticleBySlug } from '@/lib/content-service';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Share2 } from 'lucide-react';

export default async function ArticleDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-porcelain min-h-screen">
      {/* Article Navigation */}
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto">
        <Link
          href="/insights"
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-obsidian hover:text-acid-lime transition-colors mb-12 group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </Link>

        <div className="flex flex-col gap-6 mb-12">
          <span className="text-acid-lime text-xs uppercase tracking-widest font-bold">
            {article.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-obsidian tracking-tighter leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-muted-grey text-sm">
            <span className="font-medium text-obsidian">{article.author}</span>
            <span>•</span>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden bg-obsidian mb-24">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-12 border-b border-obsidian/10 pb-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-muted-grey">
              Reading Time: 5 min
            </div>
            <button className="p-2 rounded-full hover:bg-obsidian/5 transition-colors text-obsidian">
              <Share2 size={20} />
            </button>
          </div>

          <div className="prose prose-lg max-w-none text-obsidian leading-relaxed">
            {/* In a real app, we'd use a markdown parser. For now, we use the content string. */}
            <p className="text-xl leading-relaxed mb-8 text-muted-grey italic">
              {article.summary}
            </p>
            <div className="space-y-6 text-lg leading-relaxed">
              {article.content.split('\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 text-center bg-obsidian text-porcelain">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-display font-bold tracking-tighter mb-8">
            Interested in our approach?
          </h2>
          <Link href="/contact" className="btn-primary px-12 py-6 text-lg uppercase tracking-widest">
            Let's Collaborate
          </Link>
        </div>
      </section>
    </div>
  );
}
