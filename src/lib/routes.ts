// The site's pages, in reading order, and how each is addressed and illustrated.
import type { Lang } from '../i18n/content';

export const CHAPTERS = ['science', 'facility', 'results', 'future', 'about'] as const;
export type Chapter = (typeof CHAPTERS)[number];
export type PageKey = 'home' | Chapter;

// Header photo for each chapter, reused on the home page cards and the
// "next chapter" panels so a chapter always has the same face.
export const COVERS: Record<Chapter, { image: string; pos: string }> = {
  science: { image: 'cosmos.jpg', pos: '50% 50%' },
  facility: { image: 'jinping-dam.jpg', pos: '50% 40%' },
  results: { image: 'hall-2021.jpg', pos: '50% 60%' },
  future: { image: 'a1-hall-render.jpg', pos: '50% 50%' },
  about: { image: 'team-accelerator.jpg', pos: '50% 35%' },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const href = (lang: Lang, page: PageKey) =>
  `${base}/${lang === 'en' ? 'en/' : ''}${page === 'home' ? '' : `${page}/`}`;

export const nextChapter = (page: Chapter): Chapter => CHAPTERS[(CHAPTERS.indexOf(page) + 1) % CHAPTERS.length];
