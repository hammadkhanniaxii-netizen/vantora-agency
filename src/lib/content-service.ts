import { cacheLife } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { EnquirySchema } from '@/lib/validations/enquiry';

export async function getFeaturedProjects() {
  'use cache';
  cacheLife('hours');
  return await prisma.project.findMany({
    where: { isFeatured: true },
    orderBy: { sortOrder: 'asc' },
  });
}

export async function getAllProjects() {
  'use cache';
  cacheLife('hours');
  return await prisma.project.findMany({
    orderBy: { sortOrder: 'asc' },
  });
}

export async function getProjectBySlug(slug: string) {
  'use cache';
  cacheLife('hours');
  return await prisma.project.findUnique({
    where: { slug },
  });
}

export async function getPublishedArticles() {
  'use cache';
  cacheLife('hours');
  return await prisma.article.findMany({
    where: { status: 'published' },
    orderBy: { publishedAt: 'desc' },
  });
}

export async function getArticleBySlug(slug: string) {
  'use cache';
  cacheLife('hours');
  return await prisma.article.findUnique({
    where: { slug },
  });
}

export async function submitEnquiry(data: unknown) {
  const parsed = EnquirySchema.safeParse(data);

  if (!parsed.success) {
    return { success: false as const, errors: parsed.error.flatten().fieldErrors };
  }

  const { privacyConsent, ...enquiry } = parsed.data;

  try {
    await prisma.enquiry.create({
      data: {
        ...enquiry,
        company: enquiry.company || null,
        website: enquiry.website || null,
      },
    });
    return { success: true as const };
  } catch (e) {
    console.error('Failed to save enquiry', e);
    return { success: false as const, message: 'Failed to submit enquiry' };
  }
}
