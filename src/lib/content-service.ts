import { prisma } from '@/lib/prisma';

export async function getFeaturedProjects() {
  return await prisma.project.findMany({
    where: { isFeatured: true },
    orderBy: { sortOrder: 'asc' },
  });
}

export async function getAllProjects() {
  return await prisma.project.findMany({
    orderBy: { sortOrder: 'asc' },
  });
}

export async function getProjectBySlug(slug: string) {
  return await prisma.project.findUnique({
    where: { slug },
  });
}

export async function getPublishedArticles() {
  return await prisma.article.findMany({
    where: { status: 'published' },
    orderBy: { publishedAt: 'desc' },
  });
}

export async function getArticleBySlug(slug: string) {
  return await prisma.article.findUnique({
    where: { slug },
  });
}
