// Stock photos from Pexels (free to use, attribution appreciated). Files live in public/images.
// Swap any entry for the clinic's own photo by replacing the file and updating `alt`.
export interface SitePhoto {
	src: string;
	alt: string;
	credit: string;
	pexels: string;
}

const photo = (file: string, alt: string, credit: string, id: number): SitePhoto => ({
	src: `/images/${file}.jpg`,
	alt,
	credit,
	pexels: `https://www.pexels.com/photo/${id}/`,
});

export const photos = {
	heroHome: photo('hero-home', 'A dentist examining a young girl while her parent looks on', 'Ông Ngọc Dư', 19854753),
	heroAbout: photo('hero-about', 'A patient checking in at the clinic reception desk', 'Pavel Danilyuk', 6812427),
	heroDentist: photo('hero-dentist', 'A dentist showing a patient how to brush using a teeth model', 'Cedric Fauntleroy', 4269687),
	heroServices: photo('hero-services', 'A patient relaxing in the dental chair during a check-up', 'Filip Rankovic Grobgaard', 14235198),
	heroGeneral: photo('hero-general', "A dentist checking a young boy's teeth", 'Pixabay', 52527),
	heroCosmetic: photo('hero-cosmetic', 'A young woman with a bright, natural smile', 'Vitaly Gariev', 39219430),
	heroTreatments: photo('hero-treatments', 'A dentist explaining X-ray results to a patient on a tablet', 'Cedric Fauntleroy', 4269204),
	heroReviews: photo('hero-reviews', 'A smiling family together outdoors', 'Daniel Duarte', 15797922),
	heroContact: photo('hero-contact', 'A patient handing paperwork to the front desk', 'Pavel Danilyuk', 6812445),
	teamTreating: photo('team-treating', 'Two dentists treating a patient in a modern clinic', 'Andrea Piacquadio', 3881290),
	dentistPortrait: photo('dentist-portrait', 'Portrait of a smiling dentist in uniform', 'The Row Dental', 31017709),
	dentistXray: photo('dentist-xray', 'A dentist walking a patient through their X-ray', 'cottonbro studio', 6529217),
	founderTeam: photo('founder-team', 'A dentist and assistant treating a patient together', 'Tima Miroshnichenko', 5355924),
	treatmentRoom: photo('treatment-room', 'A bright treatment room with a dental chair', 'Emeric Kalil', 7422520),
	reception: photo('reception', 'A receptionist taking notes at the front desk', 'Pavel Danilyuk', 6812436),
	sterilisation: photo('sterilisation', 'A dental assistant organising sterilised instruments', 'Gustavo Fring', 5622274),
	digitalXray: photo('digital-xray', 'A digital dental X-ray shown on a tablet', 'Cedric Fauntleroy', 4270094),
	kidsDentist: photo('kids-dentist', 'A smiling child during a friendly dental visit', 'Nadezhda Moryak', 7800560),
	consultation: photo('consultation', 'A dentist talking with a patient before treatment', 'Pavel Danilyuk', 6812429),
	smileCloseup: photo('smile-closeup', 'Close-up of a bright, even smile', 'Shiny Diamond', 3762402),
	rootCanalConsult: photo('root-canal-consult', 'A dentist going over a treatment plan with a patient', 'Tima Miroshnichenko', 5355730),
} satisfies Record<string, SitePhoto>;

// Before/after smile pairs in public/images/gallery. These are AI-generated samples, not real
// patients: replace them with the clinic's own consented cases and set `sample` to false.
export interface SmileCase {
	before: string;
	after: string;
	sample: boolean;
}

const smile = (name: string): SmileCase => ({
	before: `/images/gallery/${name}-before.jpg`,
	after: `/images/gallery/${name}-after.jpg`,
	sample: true,
});

export const smileCases = {
	whitening: smile('whitening'),
	veneers: smile('veneers'),
	aligners: smile('aligners'),
	implant: smile('implant'),
	bonding: smile('bonding'),
	crowns: smile('crowns'),
} satisfies Record<string, SmileCase>;
