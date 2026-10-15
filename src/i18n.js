import colline_amphi_full from './ressources/images/Amphi/amphi_full.jpg';
import colline_amphi_bas from './ressources/images/Amphi/amphi_contre_plongee.jpg';
import colline_amphi_regi from './ressources/images/Amphi/amphi_regie.jpg';

import auditorium_face from './ressources/images/Auditorium/auditorium_face.jpg';
import auditorium_profil from './ressources/images/Auditorium/auditorium_profil.jpg';
import foyer_principal from './ressources/images/Foyer/foyer_principal.jpg';
import foyer_profil from './ressources/images/Foyer/foyer_profil.jpg';
import lounge_principal from './ressources/images/Lounge/lounge_principal.jpg';
import rooftop_ia from './ressources/images/Rooftop/rooftop_ia.png';
import rooftop_principal from './ressources/images/Rooftop/rooftop_principal.jpg';
import rooftop_secondaire from './ressources/images/Rooftop/rooftop_secondaire.jpg';
import auditorium_plafond from './ressources/images/Auditorium/auditorium_plafond.jpg';
import auditorium_face_plafond from './ressources/images/Auditorium/auditorium_face_plafond.jpg';
import lounge_secondaire from './ressources/images/Lounge/lounge_secondaire.jpg';
import lounge_chaises from './ressources/images/Lounge/lounge_chaises.jpg';
import lounge_profil from './ressources/images/Lounge/lounge_profil.jpg';
import lounge_full from './ressources/images/Lounge/lounge_full.jpg';
import lounge_tabouret from './ressources/images/Lounge/lounge_tabouret.jpg';
import salle_conseil from './ressources/images/Salle du Conseil/Salle du conseil.jpg';
import salle_conseil_face from './ressources/images/Salle du Conseil/Salle du conseil_face.jpg';
import salle_conseil_full from './ressources/images/Salle du Conseil/Salle du conseil_full.jpg';
import foyer_full from './ressources/images/Foyer/foyer_full.jpg';
import foyer_chaises from './ressources/images/Foyer/foyer_chaises.jpg';
import patio_satellite_1 from './ressources/images/Patio/patio_satellite_1.jpg';
import patio_satellite_2 from './ressources/images/Patio/patio_satellite_2.jpg';

import rooftop_effeil from './ressources/images/Rooftop/rooftop_effeil.jpg';
import rooftop_montparnasse from './ressources/images/Rooftop/rooftop_montparnasse.jpg';
import rooftop_pyramide from './ressources/images/Rooftop/rooftop_pyramide.jpg';


import jardin_exterieur from './ressources/images/Jardin/jardin_exterieur.jpg';
import facade_exterieur from './ressources/images/Facade/facade_exterieur.jpg';
import lustre from './ressources/images/Facade/lustre.jpg';
import facade from './ressources/images/Facade/facade.jpg';
import restaurant_principal from './ressources/images/Restaurant/restaurant_principal.jpg';
import restaurant_profil from './ressources/images/Restaurant/restaurant_profil.jpg';


export const dict = {
	fr: {
		nav: {
			accueil: 'Accueil',
			lieux: 'Nos lieux',
			espaces: 'Nos espaces',
			rse: 'RSE',
			contact: 'Contact',
			visite: 'Demander une visite',
			enSavoirPlus: 'En savoir plus',
		},
		slides: [
			{
				n: '01',
				title: "Un lieu d'événements professionnels haut de gamme à Paris",
			},
			{ n: '02', title: "2 000 m² d'espaces modulables au cœur du 15ᵉ" },
			{
				n: '03',
				title: 'Conférences, séminaires, conventions, lancements de produits',
			},
		],
		heroCta: 'Découvrir le lieu',
		intro: {
			p1: 'Ora Events conçoit et exploite des espaces dédiés aux événements corporate, alliant exigence opérationnelle, élégance et fiabilité.',
			p2: "De la première prise de contact jusqu'au jour J, un interlocuteur unique vous accompagne dans l'organisation de votre événement.",
		},
		presentation: {
			title: "Votre événement, dans un lieu qui s'adapte à vos envies",
			paragraphs: [
				'Au cœur du 15ᵉ arrondissement de Paris, le Carré Vaugirard offre un cadre élégant et modulable pour accueillir tous vos rendez-vous professionnels et privés.',
				"Séminaire, journée d'étude, conférence, cocktail, soirée, lancement de produit… Chaque espace se transforme et se configure selon vos besoins, votre programme et le nombre de participants.",
				"De la prise de brief jusqu'au jour J, nos équipes vous accompagnent à chaque étape pour imaginer un événement fluide, personnalisé et à votre image.",
			],
			tagline: 'Un lieu. Plusieurs formats. Une multitude de possibilités.',
		},
		stats: {
			m2: "d'espaces modulables",
			pers: 'pers.',
			cap: 'capacité maximale',
			metro: '3 min du métro',
		},
		lieuxIntroTitle: 'Deux espaces, une infinité de possibilités',
		lieuxIntro:
			'Au Carré Vaugirard, deux espaces complémentaires permettent d’imaginer des événements sur mesure, depuis la réunion confidentielle de 10 personnes jusqu’au rendez-vous professionnel réunissant 400 personnes.',
		lieuxDetail: 'En savoir plus',
		lieuxTitle: 'Nos lieux',
		lieuxSub:
			"Des espaces modulables, conçus pour s'adapter à tous les formats professionnels.",
		lieux: [
			{
				nom: 'La Colline',
				tag: "Jusqu'à 500 pers.",
				desc: "L'espace principal, pour les conférences, conventions et formats plénières.",
			},
			{
				nom: 'Le Satellite',
				tag: 'Format modulable',
				desc: 'Un espace flexible, adapté aux formats hybrides, digitaux et en comité restreint.',
			},
			{
				nom: 'Espace réception',
				tag: 'Cocktails & dîners',
				desc: 'Pour vos cocktails, dîners et moments de convivialité entre équipes ou partenaires.',
			},
		],
		rseTtile: 'Nos engagements RSE',
		rseIntro:
			'Au Carré Vaugirard, nous sommes convaincus qu’un événement peut être à la fois élégant, convivial et responsable.',
		rseIntro2:
			'Notre démarche RSE est évaluée par l’organisme FairScore au niveau A-. Une reconnaissance qui reflète les engagements que nous faisons vivre au quotidien, dans le choix de nos partenaires, la gestion de nos ressources et notre façon de concevoir chaque événement.',
		rseDetail: 'Découvrir nos engagements',
		rseCommitments: {
			inclusion: {
				title: 'Inclusion',
				desc: 'Nous travaillons notamment avec Le Trèfle, restaurant d’entreprise qui favorise l’emploi de personnes en situation de handicap mental.',
			},
			waste: {
				title: 'Moins de déchets',
				desc: 'Nous privilégions les solutions réutilisables et limitons les emballages et le plastique à usage unique à chaque étape de l’événement.',
			},
			partners: {
				title: 'Partenaires engagés',
				desc: 'Nous privilégions les partenaires locaux, les circuits courts et les produits et menus de saison.',
			},
		},
		infos: {
			capacite: {
				h: 'CAPACITÉ',
				bullets: ['Configurations : conférence, cocktail, réunion, formation'],
			},
			equip: {
				h: 'ÉQUIPEMENTS',
				bullets: [
					'Espaces ERP',
					'Équipements techniques intégrés',
					'Accessibilité PMR',
				],
			},
			types: {
				h: "TYPES D'ÉVÉNEMENTS",
				bullets: [
					'Conférences et conventions',
					"Séminaires d'entreprise",
					'Lancements de produits',
					'Événements institutionnels',
				],
			},
		},
		contact: {
			title: 'Parlons de votre événement',
			desc: "Un interlocuteur unique vous accompagne de la première prise de contact jusqu'au jour J.",
			metro: 'Métro Vaugirard (L12, 3 min) · Pasteur (L6, 7 min)',
			gare: 'Gare Montparnasse à 15 min à pied',
		},
		form: {
			name: 'Nom et prénom',
			email: 'Email',
			msg: 'Décrivez votre projet',
			send: 'Envoyer la demande',
		},
		footer: 'Ora Events — Le Carré Vaugirard',
		nosEspacesPage: {
			title: 'Nos espaces',
			intro:
				"Deux espaces modulables, un accompagnement technique et logistique complet — pensés pour s'adapter à tous vos formats d'événements professionnels.",
			detailTitle: 'En détail',
			virtualTourTitle: 'Visite virtuelle',
		},
		collinePage: {
			title: 'La Colline',
			intro:
				"L'espace principal du Carré Vaugirard, pensé pour les conférences, conventions et formats plénières.",
			hero: {
				title: 'Un espace modulable pour vos grands rendez-vous',
				headerTitle: "Jusqu'à 200 pers.",
				paragraphs: [
					'Un business center spacieux, lumineux et intimiste, pensé pour favoriser les échanges, la réflexion et la convivialité.',
					'La Colline réunit un amphithéâtre pouvant accueillir jusqu’à 200 personnes, 400 m² d’espaces de réception, cinq salles de réunion de 6 à 50 personnes, un patio privatif de 120 m², un restaurant ainsi qu’une salle de fitness.',
					'Grâce à la diversité de ses espaces, La Colline se prête particulièrement aux événements nécessitant plusieurs configurations : ateliers, stands, salles de sous-commission, temps de networking ou moments de convivialité. Une grande modularité qui permet de composer un événement sur mesure et de faire évoluer les espaces au fil de la journée.',
				],
			},
			virtualTourTitle: 'Visite virtuelle',
			virtualTourSubTitle: 'RDC, Lounge',
			sections: [
				{
					title: 'L’amphitéâtre',
					text: 'L’amphithéâtre offre un cadre idéal pour vos conférences, prises de parole et présentations. Son architecture soignée, sa régie technique et son confort optimal garantissent une expérience immersive pour vos participants. Tablettes et prises à chaque siège.',
					photos: [
						{ src: colline_amphi_full, alt: "" },
						{ src: colline_amphi_bas, alt: "" },
						{ src: colline_amphi_regi, alt: "" },
					],
				},
				{
					title: 'L’Atelier Business Center',
					text: 'Modulable et baigné de lumière, cet espace s’adapte à tous vos formats : présentations, cocktails, workshops, dîners assis... Son design épuré et ses larges ouvertures sur l’extérieur créent une atmosphère à la fois professionnelle et conviviale, propice aux échanges et à la créativité. Accès direct à un patio privatif inclus.',
				},
				{
					title: 'Le Foyer',
					text: 'Idéal pour vos pauses, stands, cocktails ou moments de networking, le Foyer de La Colline offre une atmosphère chaleureuse et fluide, où les interactions se font naturellement. Un lieu de transition qui devient un véritable temps fort de votre événement.',
				},
				{
					title: 'La Grande salle de réunion',
					text: 'Cet espace est divisible en deux espaces grâce à une cloison amovible complètement insonorisée. Complétement équipée en audiovisuel, la Grande Salle de Réunion s’adapte à tous formats.',
				},
				{
					title: 'Le Patio',
					text: 'Le patio extérieur privatif offre un cadre agréable et lumineux, idéal pour vos pauses ou cocktails. Un lieu qui apporte une touche de fraîcheur et de verdure à votre événement.',
				},
				{
					title: 'La salle de fitness',
					text: 'Pensée pour accueillir vos sessions de team building ou moments de détente, la salle de fitness offre un cadre dynamique et fonctionnel. Un lieu idéal pour intégrer énergie, mouvement et convivialité à votre événement.',
				},
			],
		},
		satellitePage: {
			title: 'Le Satellite',
			intro:
				'Un espace lumineux et modulable pensé pour accueillir des événements de grande ampleur comme des rencontres plus intimistes.',
			hero: {
				title: 'Un espace qui s’adapte à vos ambitions',
				headerTitle: 'Auditorium modulable de 247 m²',
				paragraphs: [
					'Le Satellite réunit un grand auditorium modulable de 247 m², un foyer d’accueil de 100 m², une grande salle de réunion (jusqu’à 60 personnes), ainsi qu’un espace lounge de 205 m².',
					'Le tout s’ouvre sur un patio privatif de 80 m², idéal pour prolonger les échanges en extérieur.',
					'Au 6ᵉ étage, un rooftop extérieur avec vue sur la Tour Eiffel est privatisable.',
				],
			},
			virtualTourTitle: 'Visite virtuelle',
			virtualTourSubTitle: 'RDC, Lounge',
			sections: [
				{
					title: 'L’auditorium',
					text: 'Totalement modulable, le Grand Auditorium se transforme selon vos besoins : théâtre, îlots, classe, cocktail… Chaque configuration est possible, pour créer une expérience sur mesure, fluide et impactante. Présence d’une scène et d’une régie technique.',
					photos: [
						{ src: auditorium_plafond, alt: "le Grand Auditorium" },
						{ src: auditorium_face_plafond, alt: "Auditorium en îlots" },
					],
				},
				{
					title: 'Le lounge',
					text: 'Avec sa lumière traversante via ses doubles baies vitrées, le Lounge est un espace d’exception spacieux et élégant. Il conviendra parfaitement à vos cocktails. Cette salle allie confort, modernité et esthétisme pour sublimer chacun de vos événements. Accès direct à un patio privatif inclus.',
					photos: [
						{ src: lounge_secondaire, alt: "" },
						{ src: lounge_chaises, alt: "" },
						{ src: lounge_full, alt: "" },
						{ src: lounge_profil, alt: "" },
						{ src: lounge_tabouret, alt: "" },
					],
				},
				{
					title: 'La Salle du Conseil',
					text: 'La Salle du Conseil offre un cadre confidentiel et structuré, idéal pour vos réunions, comités, prises de décision et formations. Pensée pour favoriser la concentration et la qualité des échanges, elle s’adapte à vos formats tout en garantissant confort, efficacité, et équipement audiovisuel haut de gamme.',
					photos: [
						{ src: salle_conseil, alt: "" },
						{ src: salle_conseil_full, alt: "" },
						{ src: salle_conseil_face, alt: "" },
					],
				},
				{
					title: 'Le Foyer',
					text: 'Le Foyer du Satellite accompagne vos temps de pause, en offrant un cadre spacieux et confortable. Pensé pour s’intégrer avec fluidité à vos formats, il facilite les échanges tout en maintenant le rythme de votre événement.',
					photos: [
						{ src: foyer_profil, alt: "" },
						{ src: foyer_principal, alt: "" },
						{ src: foyer_chaises, alt: "" },
						{ src: foyer_full, alt: "" },
					],
				},
				{
					title: 'Le Patio',
					text: 'Le patio extérieur privatif offre un cadre agréable et lumineux, idéal pour vos pauses ou cocktails. Un lieu qui apporte une touche de fraîcheur et de verdure à votre événement.',
					photos: [
						{ src: patio_satellite_1, alt: "" },
						{ src: patio_satellite_2, alt: "" },
					],
				},
				{
					title: 'Le Rooftop',
					text: 'Avec sa vue imprenable sur la ville, le rooftop crée une atmosphère unique pour vos cocktails et moments de détente. Un instant privilégié au-dessus des toits de Paris.',
					photos: [
						{ src: rooftop_principal, alt: "" },
						{ src: rooftop_effeil, alt: "" },
						{ src: rooftop_ia, alt: "" },
						{ src: rooftop_pyramide, alt: "" },
						{ src: rooftop_montparnasse, alt: "" },
					],
				},
			],
		},
		rsePage: {
			badge: 'FairScore A-',
			title:
				'Un lieu événementiel engagé au cœur du 15ᵉ arrondissement de Paris',
			intro:
				'Au Carré Vaugirard, nous sommes convaincus qu’un événement peut être à la fois élégant, convivial et responsable. Une reconnaissance qui vient saluer des engagements que nous faisons vivre au quotidien, dans le choix de nos partenaires, la gestion de nos ressources et notre façon de concevoir chaque événement.',
			introHome:
				'Notre démarche RSE s’inscrit dans nos choix quotidiens : partenaires, gestion des ressources et conception de chaque événement.',
			pillarsTitle: 'Des engagements qui se vivent au quotidien',
			pillars: [
				{
					icon: '🍽️',
					title: 'Lutter contre le gaspillage alimentaire',
					desc: "Lorsque cela est possible, les surplus alimentaires peuvent être redistribués à des personnes sans-abri à proximité du Carré Vaugirard, afin que ce qui n'a pas été consommé puisse bénéficier à ceux qui en ont besoin.",
				},

				{
					icon: '🏢',
					title: 'Un bâtiment certifié HQE',
					desc: "Le Carré Vaugirard s'inscrit dans un bâtiment certifié Haute Qualité Environnementale (HQE), une certification qui évalue notamment la performance énergétique, la gestion de l'eau et des ressources, ainsi que le confort et la qualité des espaces intérieurs.",
				},
				{
					icon: '♻️',
					title: 'Des événements pensés pour générer moins de déchets',
					desc: "De la préparation au démontage, nous cherchons à réduire l'empreinte de chaque événement : limitation des emballages et du plastique à usage unique, recours à des solutions réutilisables et choix de prestations pensées pour éviter le superflu.",
				},
				{
					icon: '🥕',
					title: 'Des partenaires engagés et locaux',
					desc: 'Nous privilégions des partenaires engagés, les circuits courts, les produits et menus de saison, ainsi que les entreprises de proximité.',
				},
				{
					icon: '🚶',
					title: 'Des livraisons plus responsables',
					desc: 'Nous favorisons autant que possible des modes de livraison à faible impact. Certaines sont même réalisées à pied !',
				},
				{
					icon: '🤝',
					title: "L'inclusion",
					desc: "Nous travaillons avec Le Trèfle, restaurant d'entreprise qui favorise l'emploi de personnes en situation de handicap mental.",
				},

				{
					icon: '🌱',
					title: "Des produits d'entretien éco-responsables",
					desc: "Notre engagement se poursuit jusque dans l'entretien quotidien de nos espaces, avec le choix de produits plus respectueux de l'environnement.",
				},
			],
			closingTitle:
				"Un FairScore A-, c'est une reconnaissance. Mais surtout, c'est une invitation à continuer.",
			closingText:
				'Parce que nous sommes convaincus que la RSE se joue dans les grandes décisions comme dans les petits gestes, nous continuons à faire évoluer nos pratiques pour proposer des événements toujours plus responsables.',
		},
		contactPage: {
			title: 'Contactez-nous',
			intro:
				"Une question, un projet d'événement ? Notre équipe vous répond rapidement pour organiser une visite du lieu ou discuter de votre besoin.",

			reasonsEyebrow: 'Nos engagements',
			reasonsTitle: 'Pourquoi choisir Ora Events ?',

			reasons: [
				{
					title: 'Des espaces prestigieux et modulables',
					text: 'Des espaces élégants aux finitions haut de gamme, entièrement modulables selon vos besoins. Mobilier soigné, équipements techniques de dernière génération et configurations sur mesure s’adaptent à chaque format d’événement.',
				},
				{
					title: 'Une offre complète',
					text: 'Un accompagnement à 360° pour simplifier l’organisation de votre événement : location des espaces, restauration, prestations techniques, décoration sur mesure, animations et services complémentaires.',
				},
				{
					title: 'Un emplacement privilégié',
					text: 'Au cœur du 15ᵉ arrondissement de Paris, le Carré Vaugirard bénéficie d’une excellente accessibilité, à proximité immédiate des lignes 6 et 12 du métro et de la gare Montparnasse. Le lieu dispose également d’un parking souterrain pour les voitures ainsi que d’un espace dédié aux vélos.',
				},
				{
					title: 'Une équipe dédiée à votre événement',
					text: 'Un chargé de projet vous accompagne à chaque étape, de la préparation de votre événement jusqu’au jour J, avec une présence sur place pour veiller au bon déroulement de votre événement.',
				},
				{
					title: 'Une véritable unité de lieu',
					text: 'Réunissez tous les temps forts de votre événement en une seule adresse : accueil café, réunions, plénières, ateliers, déjeuners, cocktails et soirées. Le Carré Vaugirard vous accueille tout au long de la journée et jusque dans la soirée.',
				},
			],
		},
	},
	en: {
		nav: {
			accueil: 'Home',
			lieux: 'Our venues',
			espaces: 'Our spaces',
			rse: 'CSR',
			contact: 'Contact',
			visite: 'Request a visit',
			enSavoirPlus: 'Learn more',
		},
		slides: [
			{ n: '01', title: 'A premium event venue in the heart of Paris' },
			{
				n: '02',
				title: '2,000 sqm of modular space in the 15th arrondissement',
			},
			{
				n: '03',
				title: 'Conferences, seminars, conventions, product launches',
			},
		],
		heroCta: 'Discover the venue',
		intro: {
			p1: 'Ora Events designs and operates venues dedicated to corporate events, combining operational rigor, elegance and reliability.',
			p2: 'From first contact to the day of your event, a single point of contact supports you throughout.',
		},
		presentation: {
			title: 'Your event, in a venue that adapts to you',
			paragraphs: [
				"In the heart of Paris' 15th arrondissement, Le Carré Vaugirard offers an elegant, modular setting for all your professional and private gatherings.",
				'Seminar, study day, conference, cocktail, evening event, product launch… Each space transforms and configures itself to your needs, your programme and your number of guests.',
				'From the first brief to the day itself, our teams support you at every step to shape a smooth, tailor-made event in your image.',
			],
			tagline: 'One venue. Several formats. Countless possibilities.',
		},
		stats: {
			m2: 'of modular space',
			pers: 'guests',
			cap: 'maximum capacity',
			metro: '3 min from the metro',
		},
		lieuxTitle: 'Our places',
		lieuxIntroTitle: 'Two spaces, endless possibilities',
		lieuxIntro:
			'At Carré Vaugirard, two complementary spaces make it possible to create tailor-made events, from intimate meetings for 10 people to professional events welcoming up to 400 guests.',
		lieuxDetail: 'Learn more',
		lieux: [
			{
				nom: 'La Colline',
				tag: 'Up to 500 guests',
				desc: 'The main venue, for conferences, conventions and plenary formats.',
			},
			{
				nom: 'Le Satellite',
				tag: 'Modular format',
				desc: 'A flexible space, suited to hybrid, digital and smaller-scale formats.',
			},
			{
				nom: 'Reception space',
				tag: 'Cocktails & dinners',
				desc: 'For your cocktails, dinners and moments of connection with teams or partners.',
			},
		],
		infos: {
			capacite: {
				h: 'CAPACITY',
				bullets: ['Configurations: conference, cocktail, meeting, training'],
			},
			equip: {
				h: 'FACILITIES',
				bullets: [
					'ERP-compliant spaces',
					'Integrated technical equipment',
					'Wheelchair accessible',
				],
			},
			types: {
				h: 'EVENT TYPES',
				bullets: [
					'Conferences and conventions',
					'Corporate seminars',
					'Product launches',
					'Institutional events',
				],
			},
		},
		contact: {
			title: "Let's talk about your event",
			desc: 'A single point of contact supports you from first contact to the day of your event.',
			metro: 'Vaugirard metro (L12, 3 min) · Pasteur (L6, 7 min)',
			gare: '15 min walk from Gare Montparnasse',
		},
		form: {
			name: 'Full name',
			email: 'Email',
			msg: 'Describe your project',
			send: 'Send request',
		},
		footer: 'Ora Events — Le Carré Vaugirard',
		nosEspacesPage: {
			title: 'Our spaces',
			intro:
				'Two modular venues, with full technical and logistical support — designed to adapt to every professional event format.',
			detailTitle: 'In detail',
			virtualTourTitle: 'Virtual tour',
		},
		collinePage: {
			title: 'La Colline',
			intro:
				"Le Carré Vaugirard's main space, designed for conferences, conventions and plenary formats.",
			hero: {
				title: 'A modular space for your major events',
				headerTitle: 'Up to 200 people.',
				paragraphs: [
					'La Colline is the main space at Le Carré Vaugirard. It hosts conferences, conventions and plenary formats in an elegant, fully modular setting.',
					'Its layout adapts to your programme and number of guests.',
				],
			},
			sections: [
				{
					title: 'Conferences and conventions',
					text: 'A layout designed to bring your teams and guests together, with integrated technical equipment for every format, including hybrid and digital.',
				},
				{
					title: 'Cocktails and evening events',
					text: 'The space transforms to host cocktails, dinners and moments of connection, in an elegant, welcoming atmosphere.',
				},
				{
					title: 'An accessible venue',
					text: 'ERP-compliant and wheelchair accessible, to welcome all your guests under good conditions.',
				},
			],
		},
		satellitePage: {
			title: 'Le Satellite',
			intro:
				'A bright, modular space designed to host both large-scale events and more intimate gatherings.',
			hero: {
				headerTitle: 'Modular auditorium of 247 m²',
				paragraphs: [
					'Le Satellite brings together a large modular auditorium of 247 m², a 100 m² welcome foyer, a large meeting room (up to 60 people) and a 205 m² lounge. Everything opens onto a private 80 m² patio, ideal for continuing conversations outdoors. On the 6th floor, an outdoor rooftop with a view of the Eiffel Tower can be privatised.',
				],
			},
			virtualTourTitle: 'Virtual tour',
			virtualTourSubTitle: 'Ground floor, Lounge',
			sections: [
				{
					title: 'The auditorium',
					text: 'Fully modular, the Grand Auditorium transforms to your needs: theatre, islands, classroom, cocktail… Every configuration is possible, to create a tailor-made, fluid and impactful experience. Includes a stage and a technical control room.',
				},
				{
					title: 'The lounge',
					text: 'With light streaming through its double bay windows, the Lounge is an exceptional space, spacious and elegant. It is perfect for your cocktails. This room combines comfort, modernity and aesthetics to enhance each of your events. Direct access to a private patio included.',
				},
				{
					title: 'The Boardroom',
					text: 'The Boardroom offers a confidential, structured setting, ideal for your meetings, committees, decision-making and training. Designed to foster concentration and quality of exchange, it adapts to your formats while guaranteeing comfort, efficiency and high-end audiovisual equipment.',
				},
				{
					title: 'The Foyer',
					text: 'The Satellite’s Foyer supports your break times, offering a spacious and comfortable setting. Designed to blend seamlessly into your formats, it encourages exchange while keeping your event on pace.',
				},
				{
					title: 'The Patio',
					text: 'The private outdoor patio offers a pleasant, bright setting, ideal for your breaks or cocktails. A place that brings a touch of freshness and greenery to your event.',
				},
				{
					title: 'The Rooftop',
					text: 'With its breathtaking view over the city, the rooftop creates a unique atmosphere for your cocktails and moments of relaxation. A privileged moment above the rooftops of Paris.',
				},
			],
		},
		rseTtile: 'Our CSR commitments',
		rseIntro:
			'At Le Carré Vaugirard, we believe an event can be elegant, welcoming and responsible at the same time.',
		rseIntro2:
			'Our CSR approach has been assessed by FairScore at A- level. This recognition reflects the commitments we put into practice every day, from our choice of partners to resource management and the way we design each event.',
		rseDetail: 'Discover our commitments',
		rseCommitments: {
			inclusion: {
				title: 'Inclusion',
				desc: 'We work with Le Trèfle, a company restaurant that promotes employment for people with intellectual disabilities.',
			},
			waste: {
				title: 'Waste reduction',
				desc: 'We favour reusable solutions and limit packaging and single-use plastic throughout the event process.',
			},
			partners: {
				title: 'Committed partners',
				desc: 'We favour local partners, short supply chains and seasonal products and menus.',
			},
		},
		rsePage: {
			badge: 'FairScore A-',
			title:
				"A committed event venue in the heart of Paris' 15th arrondissement",
			intro:
				'At Carré Vaugirard, we believe that an event can be elegant, welcoming, and responsible at the same time. This recognition highlights the commitments we uphold every day through our choice of partners, the way we manage our resources, and our approach to designing every event.',
			introHome:
				'Our CSR approach is reflected in the choices we make every day:  partners, resource management, and the design of every event.',
			pillarsTitle: 'Commitments we live by every day',
			pillars: [
				{
					icon: '🍽️',
					title: 'Fighting food waste',
					desc: 'Where possible, surplus food is redistributed to people experiencing homelessness near Le Carré Vaugirard, so nothing goes to waste.',
				},
				{
					icon: '🏢',
					title: 'An HQE-certified building',
					desc: 'Le Carré Vaugirard is part of a High Environmental Quality (HQE) certified building, assessing energy performance, water and resource management, and indoor comfort and quality.',
				},
				{
					icon: '♻️',
					title: 'Events designed to generate less waste',
					desc: "From setup to teardown, we work to reduce each event's footprint: limiting packaging and single-use plastic, using reusable solutions, and choosing services designed to avoid excess.",
				},
				{
					icon: '🥕',
					title: 'Committed, local partners',
					desc: 'We favour committed partners, local sourcing, seasonal products and menus, and nearby businesses.',
				},
				{
					icon: '🚶',
					title: 'More responsible deliveries',
					desc: 'We favour low-impact delivery methods wherever possible — some are even made on foot!',
				},
				{
					icon: '🤝',
					title: 'Inclusion',
					desc: 'We work with Le Trèfle, a company restaurant supporting employment for people with mental disabilities.',
				},

				{
					icon: '🌱',
					title: 'Eco-friendly cleaning products',
					desc: 'Our commitment extends to the daily upkeep of our spaces, with more environmentally friendly cleaning products.',
				},
			],
			closingTitle:
				"A FairScore A- rating is a recognition. But above all, it's an invitation to keep going.",
			closingText:
				'Because we believe CSR happens through both major decisions and small daily gestures, we keep evolving our practices to offer ever more responsible events.',
		},
		contactPage: {
			title: 'Get in touch',
			intro:
				'A question, an event project? Our team responds quickly to arrange a venue visit or discuss your needs.',
			reasonsEyebrow: 'Our commitments',
			reasonsTitle: 'Why choose Ora Events?',
			reasons: [
				{
					title: 'Prestigious, modular spaces',
					text: 'Elegant spaces with high-end finishes, fully modular to your needs. Refined furniture, the latest technical equipment and tailor-made configurations adapt to every event format.',
				},
				{
					title: 'A complete offer',
					text: '360° support to simplify organising your event: venue rental, catering, technical services, bespoke decoration, entertainment and additional services.',
				},
				{
					title: 'A prime location',
					text: "In the heart of Paris' 15th arrondissement, Le Carré Vaugirard offers excellent accessibility, right next to metro lines 6 and 12 and Gare Montparnasse. The venue also has an underground car park and a dedicated bike space.",
				},
				{
					title: 'A team dedicated to your event',
					text: 'A project manager supports you at every step, from preparation through to the day itself, with an on-site presence to ensure your event runs smoothly.',
				},
				{
					title: 'A true single-venue experience',
					text: 'Bring together every key moment of your event under one address: coffee reception, meetings, plenaries, workshops, lunches, cocktails and evening events. Le Carré Vaugirard welcomes you throughout the day and into the evening.',
				},
			],
		},
	},
};

export const PHOTOS = {
	auditorium:
		'https://images.unsplash.com/photo-1623093018048-87079f9bc70f?auto=format&fit=crop&w=1800&q=80',
	reception:
		'https://images.unsplash.com/photo-1762765685348-4bced247d12c?auto=format&fit=crop&w=1800&q=80',
	meeting:
		'https://images.unsplash.com/photo-1762176264161-09219da49794?auto=format&fit=crop&w=1800&q=80',
	colline_amphi_full: colline_amphi_full,
	colline_amphi_bas: colline_amphi_bas,

	colline_jardin_ext: jardin_exterieur,
	colline_facade_ext: facade_exterieur,
	colline_facade: facade,
	colline_lustre: lustre,
	colline_restaurant_principal: restaurant_principal,
	colline_restaurant_profil: restaurant_profil,

	satellite_auditorium_face: auditorium_face,
	satellite_auditorium_profil: auditorium_profil,
	satellite_foyer_principal: foyer_principal,
	satellite_foyer_profil: foyer_profil,
	satellite_lounge_principal: lounge_principal,
	satellite_rooftop_principal: rooftop_principal,
	satellite_rooftop_secondaire: rooftop_secondaire,
	satellite_rooftop_ia: rooftop_ia,
};
