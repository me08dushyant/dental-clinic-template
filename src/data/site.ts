// Clinic details shared across pages. Everything here is demo content: replace it with the
// clinic's real details before going live (see README).
const name = 'Aster Dental';
// Digits only, with country code. Drives the call link, the WhatsApp chat and the displayed number.
const phone = '919876543210';

/** WhatsApp click-to-chat link with a pre-filled first message. */
export const whatsappLink = (text: string) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export const site = {
	name,
	legalName: 'Aster Dental Care',
	tagline: 'Gentle, premium family dentistry',
	area: 'Indiranagar',
	city: 'Bengaluru',
	street: '42, 12th Main Road, HAL 2nd Stage',
	postalCode: '560038',
	region: 'Karnataka',
	addressShort: '12th Main Rd, Indiranagar, Bengaluru',
	landmark: 'Two buildings after the 100 Ft Road signal',
	parking: 'Free basement parking for patients',
	access: 'Ground floor, step-free entrance and lift',
	phone,
	phoneDisplay: '+91 98765 43210',
	phoneHref: `tel:+${phone}`,
	// Pre-filled first message so patients don't face an empty WhatsApp chat
	whatsapp: whatsappLink(`Hi ${name}, I'd like to book an appointment.\nName:\nPreferred day:\nReason for visit:`),
	email: 'hello@asterdental.in',
	emailHref: 'mailto:hello@asterdental.in',
	hoursShort: 'Mon – Sat · 10:00 – 20:00',
	registration: 'KPME Reg. No. BLR/2014/0457',
	founded: 2014,
	confirmWithin: '2 hours',
	maps: 'https://maps.google.com/?q=Indiranagar+Bengaluru',
	googleReviews: 'https://www.google.com/maps',
	instagram: 'https://instagram.com',
	// Optional: a form endpoint (Formspree, Web3Forms, your own API) that accepts a JSON POST.
	// Leave empty and the booking form hands the request over to WhatsApp instead.
	bookingEndpoint: '',
	// Production URL, used for canonical links, social cards and the sitemap. Keep in sync with astro.config.mjs.
	url: 'https://asterdental.in',
	rating: { value: '4.9', count: '312', source: 'Google' },
	// Weekly schedule in clinic local time (24h). Drives the "Open now" badge and search-engine hours.
	timeZone: 'Asia/Kolkata',
	schedule: [
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '20:00' },
		{ days: ['Saturday'], opens: '10:00', closes: '18:00' },
	],
	hours: [
		['Mon – Fri', '10:00 – 20:00'],
		['Saturday', '10:00 – 18:00'],
		['Sunday', 'Emergencies only'],
	],
};

export const routes = {
	home: '/',
	about: '/about',
	dentist: '/dentist',
	services: '/services',
	general: '/services/general-dentistry',
	cosmetic: '/services/cosmetic-dentistry',
	treatments: '/services/treatments',
	reviews: '/reviews',
	contact: '/contact',
};

/** Detail page of a single treatment (see data/treatments.ts). */
export const treatmentHref = (slug: string) => `/treatments/${slug}`;

// Booking link that preselects the reason on the contact form (matched against the reason options)
export const bookFor = (reason: string) => `${routes.contact}?reason=${encodeURIComponent(reason)}#book`;
