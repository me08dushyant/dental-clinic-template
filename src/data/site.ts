// Clinic details shared across pages. Replace the bracketed placeholders.
const name = 'Aster Dental';
// Pre-filled first message so patients don't face an empty WhatsApp chat
const whatsappText = encodeURIComponent(`Hi ${name}, I'd like to book an appointment.\nName:\nPreferred day:\nReason for visit:`);

export const site = {
	name,
	city: '[City]',
	phoneDisplay: '+91 [XXXXX XXXXX]',
	phoneHref: 'tel:+910000000000',
	whatsapp: `https://wa.me/910000000000?text=${whatsappText}`,
	email: '[hello@clinic.in]',
	emailHref: 'mailto:hello@example.com',
	addressShort: '[Street], [Area], [City]',
	hoursShort: 'Mon – Sat · [10:00 – 20:00]',
	registration: '[Clinic registration no.]',
	maps: 'https://maps.google.com',
	googleReviews: 'https://www.google.com/maps',
	// Used for search-engine structured data; leave a field empty to omit it
	url: 'https://example.com',
	street: '',
	postalCode: '',
	rating: { value: '', count: '' },
	// Weekly schedule in clinic local time (24h). Drives the "Open now" badge and search-engine hours.
	timeZone: 'Asia/Kolkata',
	schedule: [
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '20:00' },
		{ days: ['Saturday'], opens: '10:00', closes: '18:00' },
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

// Booking link that preselects the reason on the contact form (matched against the reason options)
export const bookFor = (reason: string) => `${routes.contact}?reason=${encodeURIComponent(reason)}#book`;
