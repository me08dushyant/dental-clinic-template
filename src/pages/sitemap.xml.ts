import type { APIRoute } from 'astro';
import { routes, treatmentHref } from '../data/site';
import { treatments } from '../data/treatments';

// Lists every page for search engines. New static pages go in `routes`; treatment pages are added automatically.
export const GET: APIRoute = ({ site }) => {
	const paths = [...Object.values(routes), ...treatments.map((t) => treatmentHref(t.slug))];
	const urls = paths.map((path) => `\t<url><loc>${new URL(path, site).href}</loc></url>`).join('\n');
	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
		headers: { 'Content-Type': 'application/xml' },
	});
};
