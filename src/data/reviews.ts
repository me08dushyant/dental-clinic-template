// Patient reviews. These are demo reviews written for the template, not real patients:
// replace them with the clinic's own Google reviews (with the reviewer's permission) before launch.
export interface Review {
	name: string;
	treatment: string;
	date: string;
	rating: 4 | 5;
	quote: string;
	/** Short pull-quote shown in larger type on featured cards. */
	headline?: string;
	source: 'Google' | 'Practo';
	/** Patients who have been coming for years read as more credible than one-off visits. */
	visits?: string;
}

export const reviews: Review[] = [
	{
		name: 'Ritika Sharma',
		treatment: 'Root canal',
		date: 'Sep 2026',
		rating: 5,
		headline: 'I put off a root canal for two years out of fear. I wish I hadn’t.',
		quote:
			'Dr. Meera showed me the X-ray, explained exactly what she would do and checked in every few minutes. It genuinely felt like a long filling. The tooth has been fine since and the cost matched the written estimate to the rupee.',
		source: 'Google',
		visits: 'Patient since 2023',
	},
	{
		name: 'Arjun Menon',
		treatment: 'Kids’ dentistry',
		date: 'Aug 2026',
		rating: 5,
		quote:
			'Our five-year-old now asks when she can “go see the tooth doctor” again. They let her sit in the chair and press the buttons before anything happened. Unbelievably patient team.',
		source: 'Google',
		visits: 'Family of four',
	},
	{
		name: 'Sanjay Kulkarni',
		treatment: 'Dental implant',
		date: 'Jul 2026',
		rating: 5,
		headline: 'The implant feels exactly like my own tooth.',
		quote:
			'Clear timeline from day one, no surprise charges, and the final crown matches perfectly. I can finally chew properly on the left side again after three years.',
		source: 'Google',
	},
	{
		name: 'Fatima Sheikh',
		treatment: 'Cleaning',
		date: 'Oct 2026',
		rating: 5,
		quote:
			'The cleanest clinic I have been to. They opened the sealed instrument pouch in front of me, which I really appreciated. Quick, thorough scaling with zero upselling.',
		source: 'Google',
	},
	{
		name: 'Kavya Reddy',
		treatment: 'Veneers',
		date: 'Jun 2026',
		rating: 5,
		headline: 'I saw my new smile on screen before a single tooth was touched.',
		quote:
			'The digital preview made it so easy to decide. Six veneers later, friends keep saying I look rested, not “done”. That was exactly what I asked for.',
		source: 'Google',
	},
	{
		name: 'Rahul Verma',
		treatment: 'Consultation',
		date: 'Sep 2026',
		rating: 5,
		quote:
			'Another clinic quoted me four crowns. Dr. Meera said two fillings were enough and showed me why on the intraoral camera. That honesty earned a patient for life.',
		source: 'Google',
		visits: 'Patient since 2019',
	},
	{
		name: 'Ananya Das',
		treatment: 'Clear aligners',
		date: 'May 2026',
		rating: 5,
		quote:
			'Fourteen months with aligners and every review visit started on time. The WhatsApp reminders and progress photos kept me motivated the whole way through.',
		source: 'Practo',
	},
	{
		name: 'Prakash Nair',
		treatment: 'Emergency visit',
		date: 'Apr 2026',
		rating: 5,
		quote:
			'Cracked a tooth on a Saturday evening. Messaged on WhatsApp, got a reply in ten minutes and was seen the same night. Pain gone, temporary crown fitted.',
		source: 'Google',
	},
	{
		name: 'Neha Joshi',
		treatment: 'Teeth whitening',
		date: 'Mar 2026',
		rating: 4,
		quote:
			'Lovely, even result in one sitting. Teeth were a bit sensitive for a day, which they warned me about in advance. Would happily go back for a top-up.',
		source: 'Google',
	},
];

/** Star-count breakdown for the rating summary (percentages of all reviews). */
export const ratingBreakdown = [
	{ stars: 5, share: 92 },
	{ stars: 4, share: 6 },
	{ stars: 3, share: 1 },
	{ stars: 2, share: 1 },
	{ stars: 1, share: 0 },
];

export const initials = (name: string) =>
	name
		.split(' ')
		.map((part) => part[0])
		.slice(0, 2)
		.join('');
