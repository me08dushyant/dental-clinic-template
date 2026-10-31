// One entry per treatment detail page (/treatments/[slug]). Prices and timings are demo values:
// replace them with the clinic's own before launch.
import type { IconName } from '../components/Icon.astro';
import { photos, smileCases, type SitePhoto, type SmileCase } from './photos';

export type Category = 'General' | 'Cosmetic' | 'Restorative' | 'Orthodontic';

export interface Treatment {
	slug: string;
	name: string;
	/** One line for cards and meta descriptions. */
	summary: string;
	category: Category;
	icon: IconName;
	photo: SitePhoto;
	photoPosition?: string;
	headline: string;
	intro: string;
	/** Matched against the contact form's reason options to preselect one. */
	bookReason: string;
	facts: { label: string; value: string }[];
	idealFor: string[];
	benefits: { title: string; text: string }[];
	steps: { title: string; text: string }[];
	aftercare: string[];
	faqs: { q: string; a: string }[];
	case?: SmileCase;
	related: string[];
}

export const treatments: Treatment[] = [
	{
		slug: 'check-up-and-cleaning',
		name: 'Check-up & Cleaning',
		summary: 'A thorough exam, digital X-rays when needed and a gentle scale and polish.',
		category: 'General',
		icon: 'toothCheck',
		photo: photos.heroGeneral,
		photoPosition: 'center 35%',
		headline: 'The calm, thorough check-up every smile needs.',
		intro:
			'Most dental problems are painless until they are expensive. A six-monthly check-up and professional clean catches decay, gum disease and wear early, while they are still quick and inexpensive to fix.',
		bookReason: 'Check-up',
		facts: [
			{ label: 'Duration', value: '45 min' },
			{ label: 'Visits', value: '1' },
			{ label: 'Recovery', value: 'None' },
			{ label: 'From', value: '₹1,200' },
		],
		idealFor: ['Everyone, every 6 months', 'Bleeding or tender gums', 'Tea, coffee or tobacco stains', 'Bad breath that will not shift'],
		benefits: [
			{ title: 'Problems found early', text: 'Small cavities and early gum disease are found before they hurt or need bigger treatment.' },
			{ title: 'Fresher, brighter teeth', text: 'Ultrasonic scaling removes hardened tartar, then a polish lifts everyday surface stains.' },
			{ title: 'A clear written summary', text: 'You leave with a plain-language note of what we found and what, if anything, needs attention.' },
		],
		steps: [
			{ title: 'Chat & history', text: 'We ask about any pain, sensitivity or worries, and update your medical history.' },
			{ title: 'Full examination', text: 'Teeth, gums, bite and soft tissues are checked, with digital X-rays only when needed.' },
			{ title: 'Scale & polish', text: 'Gentle ultrasonic cleaning above and below the gumline, then a fine polish.' },
			{ title: 'Plan & advice', text: 'We show you what we saw on the intraoral camera and agree any next steps.' },
		],
		aftercare: ['Mild sensitivity for a day is normal', 'Avoid strongly coloured food for a few hours after polishing', 'Book your next check-up in six months'],
		faqs: [
			{ q: 'Does scaling damage enamel?', a: 'No. Scaling removes hardened deposits that sit on the enamel, not the enamel itself.' },
			{ q: 'How often should I have a cleaning?', a: 'Every six months for most people, or every three to four months if you have gum disease.' },
			{ q: 'Are X-rays safe?', a: 'Our digital X-rays use a fraction of the radiation of film, and we take them only when they will change your care.' },
		],
		related: ['kids-dentistry', 'teeth-whitening', 'root-canal-treatment'],
	},
	{
		slug: 'kids-dentistry',
		name: 'Children’s Dentistry',
		summary: 'Short, playful visits that build trust and protect growing teeth.',
		category: 'General',
		icon: 'kids',
		photo: photos.kidsDentist,
		headline: 'First visits that children actually enjoy.',
		intro:
			'We see children from their first tooth. Visits are short and playful, explained in words a child understands, so good habits start early and dental fear never gets a foothold.',
		bookReason: "Child's visit",
		facts: [
			{ label: 'Duration', value: '20–30 min' },
			{ label: 'Visits', value: 'Every 6 months' },
			{ label: 'Age', value: 'From 1 year' },
			{ label: 'From', value: '₹800' },
		],
		idealFor: ['A first dental visit', 'Cavities in milk teeth', 'Thumb-sucking or crowding concerns', 'Nervous young patients'],
		benefits: [
			{ title: 'Trust before treatment', text: 'Children explore the chair and tools first. Nothing happens until they are comfortable.' },
			{ title: 'Prevention that works', text: 'Fluoride varnish and pit-and-fissure sealants stop most cavities before they start.' },
			{ title: 'Growth tracked early', text: 'We watch jaw growth and bite, so any orthodontic need is spotted at the ideal age.' },
		],
		steps: [
			{ title: 'Meet & play', text: 'A tour of the room, a ride in the chair and a look at the “tooth counter”.' },
			{ title: 'Gentle check', text: 'A quick count and check of every tooth, often on a parent’s lap for little ones.' },
			{ title: 'Protect', text: 'Fluoride varnish or sealants where helpful, painless and over in minutes.' },
			{ title: 'Parent tips', text: 'Brushing, diet and habit advice tailored to your child’s age.' },
		],
		aftercare: ['No eating for 30 minutes after fluoride varnish', 'Brush twice daily with a rice-grain smear of fluoride paste', 'Limit sticky sweets between meals'],
		faqs: [
			{ q: 'When should my child first see a dentist?', a: 'By their first birthday, or when the first tooth appears, whichever is earlier.' },
			{ q: 'Do milk teeth really need fillings?', a: 'Yes. They hold space for adult teeth, and untreated decay can cause pain and infection.' },
			{ q: 'Can I stay with my child?', a: 'Of course. Parents are welcome in the room for every visit.' },
		],
		related: ['check-up-and-cleaning', 'clear-aligners', 'root-canal-treatment'],
	},
	{
		slug: 'root-canal-treatment',
		name: 'Root Canal Treatment',
		summary: 'Painless, single-sitting root canals that save your natural tooth.',
		category: 'Restorative',
		icon: 'rootCanal',
		photo: photos.rootCanalConsult,
		headline: 'Save the tooth. Stop the pain.',
		intro:
			'When decay reaches the nerve, a root canal removes the infection, cleans and seals the canals, and keeps your natural tooth. With modern anaesthesia and rotary instruments it feels much like a long filling.',
		bookReason: 'Root canal',
		facts: [
			{ label: 'Duration', value: '45–60 min' },
			{ label: 'Visits', value: '1–2' },
			{ label: 'Recovery', value: '1–2 days' },
			{ label: 'From', value: '₹4,500' },
		],
		idealFor: ['Lingering pain with hot or cold', 'Pain when biting', 'Swelling or a pimple on the gum', 'A darkened tooth'],
		benefits: [
			{ title: 'Keep your own tooth', text: 'Nothing chews or feels quite like a natural tooth. Saving it is almost always the best option.' },
			{ title: 'Relief, not pain', text: 'Profound local anaesthesia and rotary files mean most patients feel only pressure.' },
			{ title: 'Often one sitting', text: 'Most root canals are completed in a single visit with an apex locator for precision.' },
		],
		steps: [
			{ title: 'Diagnose', text: 'A digital X-ray and vitality test confirm the nerve is involved.' },
			{ title: 'Numb & isolate', text: 'Local anaesthesia, then a rubber dam keeps the tooth clean and dry.' },
			{ title: 'Clean & seal', text: 'The infected pulp is removed, canals shaped and disinfected, then sealed.' },
			{ title: 'Protect', text: 'A crown is usually fitted to protect the treated tooth for years to come.' },
		],
		aftercare: ['Chew on the other side until the crown is fitted', 'Mild tenderness for a day or two settles with simple painkillers', 'Return for your crown within two to three weeks'],
		faqs: [
			{ q: 'Is root canal treatment painful?', a: 'With modern anaesthesia it feels much like a filling. It is the infection that hurts, and the treatment relieves it.' },
			{ q: 'Do I always need a crown afterwards?', a: 'For back teeth, almost always, since treated teeth become more brittle. We will advise for your tooth.' },
			{ q: 'Is extraction a cheaper alternative?', a: 'Upfront, yes. But replacing the missing tooth later with an implant or bridge usually costs more.' },
		],
		related: ['crowns-and-bridges', 'dental-implants', 'check-up-and-cleaning'],
	},
	{
		slug: 'dental-implants',
		name: 'Dental Implants',
		summary: 'Permanent, natural-looking replacements for one tooth or a full arch.',
		category: 'Restorative',
		icon: 'implant',
		photo: photos.implantModel,
		headline: 'A permanent tooth that feels like your own.',
		intro:
			'A titanium implant replaces the missing root and fuses with the jawbone. A custom crown then sits on top. It does not slip, does not need neighbouring teeth to be cut, and with good care can last a lifetime.',
		bookReason: 'Implants',
		facts: [
			{ label: 'Duration', value: '3–6 months' },
			{ label: 'Visits', value: '3–4' },
			{ label: 'Surgery', value: '45 min' },
			{ label: 'From', value: '₹28,000' },
		],
		idealFor: ['One or more missing teeth', 'Loose or uncomfortable dentures', 'A failing bridge', 'Teeth that cannot be saved'],
		benefits: [
			{ title: 'Looks and feels natural', text: 'A custom-shaded crown matched to your other teeth. Nobody needs to know.' },
			{ title: 'Protects the jawbone', text: 'Implants stimulate the bone like a natural root, preventing the shrinkage that ages the face.' },
			{ title: 'Neighbours stay untouched', text: 'Unlike a bridge, no healthy teeth are cut down to support the replacement.' },
		],
		steps: [
			{ title: 'Plan', text: 'A 3D scan measures bone height and width, and maps nerves and sinuses precisely.' },
			{ title: 'Place', text: 'The implant is placed under local anaesthesia, usually in under an hour.' },
			{ title: 'Heal', text: 'Over three to six months the bone bonds to the implant. A temporary tooth can be worn.' },
			{ title: 'Restore', text: 'Your final crown is fixed in place, matched in shape and shade.' },
		],
		aftercare: ['Soft diet and cold compresses for the first 48 hours', 'Brush and floss around the implant like a natural tooth', 'Annual implant check and X-ray'],
		faqs: [
			{ q: 'Am I too old for implants?', a: 'Age itself is rarely a barrier. Bone health and general health matter more, and we check both.' },
			{ q: 'What if I do not have enough bone?', a: 'Bone grafting or shorter implants are often possible. Your 3D scan tells us exactly what is needed.' },
			{ q: 'How long do implants last?', a: 'With good hygiene and regular check-ups, many last decades. The crown may need replacing after 15–20 years.' },
		],
		case: smileCases.implant,
		related: ['crowns-and-bridges', 'root-canal-treatment', 'veneers'],
	},
	{
		slug: 'clear-aligners',
		name: 'Braces & Clear Aligners',
		summary: 'Straighter teeth with metal, ceramic or nearly invisible aligners.',
		category: 'Orthodontic',
		icon: 'braces',
		photo: photos.aligners,
		photoPosition: 'center 30%',
		headline: 'Straighter teeth, at any age.',
		intro:
			'From traditional braces for complex bites to nearly invisible aligners for busy adults, we help you choose the option that fits your bite, lifestyle and budget, and show you a digital preview of the result first.',
		bookReason: 'Braces',
		facts: [
			{ label: 'Duration', value: '9–24 months' },
			{ label: 'Reviews', value: 'Every 6–8 weeks' },
			{ label: 'Preview', value: 'Digital 3D' },
			{ label: 'From', value: '₹35,000' },
		],
		idealFor: ['Crowded or overlapping teeth', 'Gaps between teeth', 'Overbite, underbite or crossbite', 'Teeth that moved after braces'],
		benefits: [
			{ title: 'See the result first', text: 'A 3D simulation shows how your teeth will move, stage by stage, before you commit.' },
			{ title: 'Discreet options', text: 'Ceramic braces and clear aligners are barely noticeable in daily life and photos.' },
			{ title: 'Healthier bite', text: 'Straight teeth are easier to clean and wear more evenly, protecting them long term.' },
		],
		steps: [
			{ title: 'Assess', text: 'Photos, X-rays and a digital scan of your teeth and bite.' },
			{ title: 'Preview', text: 'We show you a 3D plan of the movement and the final result.' },
			{ title: 'Straighten', text: 'Braces are fitted, or you receive your first set of aligners.' },
			{ title: 'Retain', text: 'Retainers keep your new smile in place for good.' },
		],
		aftercare: ['Wear aligners 20–22 hours a day', 'Clean aligners morning and night', 'Wear retainers as advised, usually nightly'],
		faqs: [
			{ q: 'Am I too old for braces?', a: 'No. Teeth can be moved at any age as long as gums and bone are healthy.' },
			{ q: 'Do aligners hurt?', a: 'Each new set feels snug for a day or two. Most patients describe pressure rather than pain.' },
			{ q: 'Which option is right for me?', a: 'It depends on your bite and lifestyle. We will show you the pros and cons of each at your consultation.' },
		],
		case: smileCases.aligners,
		related: ['teeth-whitening', 'veneers', 'kids-dentistry'],
	},
	{
		slug: 'teeth-whitening',
		name: 'Teeth Whitening',
		summary: 'Safe, even whitening in a single visit, with take-home top-ups.',
		category: 'Cosmetic',
		icon: 'whitening',
		photo: photos.heroCosmetic,
		photoPosition: 'center 30%',
		headline: 'A brighter smile in a single visit.',
		intro:
			'Professional whitening lifts years of tea, coffee and age-related staining safely. We protect your gums, tailor the shade to your face, and give you take-home trays to keep the result.',
		bookReason: 'Whitening',
		facts: [
			{ label: 'Duration', value: '60–90 min' },
			{ label: 'Visits', value: '1' },
			{ label: 'Lasts', value: '1–2 years' },
			{ label: 'From', value: '₹9,500' },
		],
		idealFor: ['Yellowing with age', 'Tea, coffee or wine stains', 'A big occasion coming up', 'Before veneers or bonding'],
		benefits: [
			{ title: 'Natural, not chalky', text: 'We aim for a shade that suits your skin tone and eyes, not a one-size-fits-all white.' },
			{ title: 'Safe for enamel', text: 'Clinical-grade gels applied with gum protection. Far gentler than DIY kits.' },
			{ title: 'Easy to maintain', text: 'Custom trays let you top up at home in just a few evenings a year.' },
		],
		steps: [
			{ title: 'Shade check', text: 'We record your starting shade and confirm teeth and gums are healthy.' },
			{ title: 'Protect', text: 'A barrier protects your gums and lips throughout the treatment.' },
			{ title: 'Whiten', text: 'Whitening gel is applied in short cycles, checking comfort as we go.' },
			{ title: 'Maintain', text: 'You take home custom trays and gel for future top-ups.' },
		],
		aftercare: ['Avoid coloured food and drinks for 48 hours', 'Use a sensitivity toothpaste for a few days if needed', 'Top up with your trays every few months'],
		faqs: [
			{ q: 'Will whitening make my teeth sensitive?', a: 'Some people have mild sensitivity for a day or two. We minimise it and give you a soothing gel.' },
			{ q: 'Does whitening work on crowns or fillings?', a: 'No, only natural enamel lightens. We plan any visible restorations around your new shade.' },
			{ q: 'How long does it last?', a: 'One to two years for most people, longer with occasional top-ups.' },
		],
		case: smileCases.whitening,
		related: ['veneers', 'check-up-and-cleaning', 'clear-aligners'],
	},
	{
		slug: 'veneers',
		name: 'Veneers & Smile Design',
		summary: 'Custom porcelain or composite veneers, planned digitally around your face.',
		category: 'Cosmetic',
		icon: 'veneer',
		photo: photos.smileCloseup,
		headline: 'A smile that still looks like you.',
		intro:
			'Veneers are thin, custom shells that change the shape, colour and alignment of front teeth. With digital smile design you see a preview of the result on your own face before we touch a tooth.',
		bookReason: 'cosmetic',
		facts: [
			{ label: 'Duration', value: '2–3 weeks' },
			{ label: 'Visits', value: '2–3' },
			{ label: 'Lasts', value: '10–15 years' },
			{ label: 'From', value: '₹12,000 / tooth' },
		],
		idealFor: ['Chipped or worn teeth', 'Gaps and uneven shapes', 'Deep stains whitening cannot lift', 'A complete smile makeover'],
		benefits: [
			{ title: 'Previewed on your face', text: 'Digital smile design and a trial smile let you approve the look in advance.' },
			{ title: 'Minimal preparation', text: 'Modern porcelain needs very little enamel removed, sometimes none at all.' },
			{ title: 'Stain-resistant', text: 'Porcelain keeps its colour and lustre for years with normal care.' },
		],
		steps: [
			{ title: 'Design', text: 'Photos and scans are used to design your new smile digitally.' },
			{ title: 'Trial smile', text: 'A temporary mock-up lets you see and feel the result in your mouth.' },
			{ title: 'Prepare', text: 'Teeth are gently prepared and precise scans sent to our ceramist.' },
			{ title: 'Bond', text: 'Your custom veneers are bonded in place and polished.' },
		],
		aftercare: ['Avoid biting very hard objects like nuts or pen caps', 'Wear a night guard if you grind', 'Regular check-ups and cleanings'],
		faqs: [
			{ q: 'Will veneers look fake?', a: 'Not when they are designed around your face. We aim for natural texture, translucency and shade.' },
			{ q: 'Porcelain or composite?', a: 'Porcelain lasts longer and resists stains. Composite is quicker and more affordable. We will compare both for you.' },
			{ q: 'Are veneers reversible?', a: 'Porcelain veneers usually involve some enamel preparation, so they are considered permanent.' },
		],
		case: smileCases.veneers,
		related: ['teeth-whitening', 'clear-aligners', 'crowns-and-bridges'],
	},
	{
		slug: 'crowns-and-bridges',
		name: 'Crowns & Bridges',
		summary: 'Strong, natural-looking caps and bridges in zirconia and E-max.',
		category: 'Restorative',
		icon: 'crown',
		photo: photos.dentistXray,
		headline: 'Strengthen a tooth or bridge a gap.',
		intro:
			'A crown is a custom cap that restores a broken, worn or root-canal-treated tooth. A bridge replaces a missing tooth by anchoring to the teeth on either side. Both are fixed, so there is nothing to take out.',
		bookReason: 'Other',
		facts: [
			{ label: 'Duration', value: '1–2 weeks' },
			{ label: 'Visits', value: '2' },
			{ label: 'Lasts', value: '10–15 years' },
			{ label: 'From', value: '₹7,500' },
		],
		idealFor: ['Cracked or heavily filled teeth', 'After a root canal', 'One missing tooth', 'Replacing old metal crowns'],
		benefits: [
			{ title: 'Metal-free and natural', text: 'Zirconia and E-max ceramics match the translucency of real enamel.' },
			{ title: 'Strength restored', text: 'A crown holds a weakened tooth together and lets you chew confidently again.' },
			{ title: 'Precise fit', text: 'Digital impressions mean no messy trays and a better-fitting result.' },
		],
		steps: [
			{ title: 'Prepare', text: 'The tooth is shaped under local anaesthesia and a temporary fitted.' },
			{ title: 'Scan', text: 'A digital impression is sent to our lab with your shade details.' },
			{ title: 'Craft', text: 'Your crown or bridge is milled and hand-finished by our ceramist.' },
			{ title: 'Fit', text: 'We check fit, bite and shade, then cement it permanently.' },
		],
		aftercare: ['Floss carefully around the crown margins', 'Use a floss threader under bridges', 'Avoid very hard foods on new crowns for 24 hours'],
		faqs: [
			{ q: 'Which crown material is best?', a: 'Zirconia for strength on back teeth, E-max for the most lifelike look on front teeth.' },
			{ q: 'Bridge or implant?', a: 'An implant leaves neighbouring teeth untouched. A bridge is quicker and suits teeth that already need crowns.' },
			{ q: 'Does getting a crown hurt?', a: 'No. The tooth is numbed during preparation and fitting is usually painless.' },
		],
		case: smileCases.crowns,
		related: ['root-canal-treatment', 'dental-implants', 'veneers'],
	},
];

export const findTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
