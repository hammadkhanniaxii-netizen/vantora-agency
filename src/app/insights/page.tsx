import { getPublishedArticles } from '@/lib/content-service';
import ArticleCard from '@/components/insights/ArticleCard';

export default async function InsightsPage() {
  const articles = await getPublishedArticles();

  return (
    <div className="bg-porcelain min-h-screen">
      <section className="pt-32 pb-24 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-acid-lime text-xs uppercase tracking-widest font-bold mb-4 block">Thoughts & Perspectives</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-obsidian tracking-tighter leading-tight">
              Insights <br /> & Analysis.
            </h1>
          </div>
          <p className="text-muted-grey text-lg max-w-sm">
            Exploring the intersection of design, technology, and human behavior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
