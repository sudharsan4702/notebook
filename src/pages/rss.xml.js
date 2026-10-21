import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = await getCollection('entries');
  const sorted = entries.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Notebook',
    description: 'A small corner of the internet for things that enter the mind and things that come out of it.',
    site: context.site,
    items: sorted.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.description || '',
      link: `/entries/${entry.slug}/`,
      categories: entry.data.tags || [],
    })),
    customData: '<language>en-us</language>',
  });
}
