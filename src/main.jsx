import {
	ArrowRight,
	BriefcaseBusiness,
	CheckCircle2,
	Code2,
	Database,
	ExternalLink,
	GraduationCap,
	Mail,
	MapPin,
	Menu,
	Server,
	Sparkles,
	X,
} from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function GitHubIcon({ size = 24, ...props }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='currentColor'
			aria-hidden='true'
			{...props}
		>
			<path d='M12 .7a11.3 11.3 0 0 0-3.57 22c.57.1.78-.25.78-.55v-2.16c-3.18.7-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.11 1.17A10.8 10.8 0 0 1 12 5.92c.96 0 1.92.13 2.82.38 2.16-1.48 3.11-1.17 3.11-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.36-5.23 5.64.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z' />
		</svg>
	)
}

function LinkedInIcon({ size = 24, ...props }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='currentColor'
			aria-hidden='true'
			{...props}
		>
			<path d='M5.2 7.9H1.6V22h3.6V7.9ZM3.4 2A2.1 2.1 0 1 0 3.4 6.2 2.1 2.1 0 0 0 3.4 2ZM22.4 13.9c0-4.25-2.27-6.22-5.3-6.22-2.44 0-3.54 1.34-4.15 2.29V7.9H9.35V22h3.6v-7c0-1.85.35-3.65 2.65-3.65 2.27 0 2.3 2.12 2.3 3.77V22h3.6l.9-8.1Z' />
		</svg>
	)
}

function applyTilt(event, strength = 8) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

	const card = event.currentTarget
	const rect = card.getBoundingClientRect()
	const x = (event.clientX - rect.left) / rect.width
	const y = (event.clientY - rect.top) / rect.height

	card.style.setProperty('--tilt-x', `${(0.5 - y) * strength}deg`)
	card.style.setProperty('--tilt-y', `${(x - 0.5) * strength}deg`)
	card.style.setProperty('--shine-x', `${x * 100}%`)
	card.style.setProperty('--shine-y', `${y * 100}%`)
}

function resetTilt(event) {
	const card = event.currentTarget
	card.style.setProperty('--tilt-x', '0deg')
	card.style.setProperty('--tilt-y', '0deg')
	card.style.setProperty('--shine-x', '50%')
	card.style.setProperty('--shine-y', '50%')
}

const projectImages = {
	Podorozhnyky: [
		'/projects/podorozhnyky/home.webp',
		'/projects/podorozhnyky/stories.webp',
		'/projects/podorozhnyky/profile.webp',
	],
	'KURB Global': [
		'/projects/kurb/home.webp',
		'/projects/kurb/product.webp',
		'/projects/kurb/bundles.webp',
		'/projects/kurb/checkout.webp',
	],
	'Habit Tracker': [
		'/projects/habit/dashboard.webp',
		'/projects/habit/habits.webp',
		'/projects/habit/mobile.webp',
	],
	'Rental Car': [
		'/projects/rental-car/catalogue.webp',
		'/projects/rental-car/filters.webp',
		'/projects/rental-car/details.webp',
	],
}

const translations = {
	en: {
		metaTitle: 'Vladyslav Mashyrov — Full-Stack Developer',
		navAria: 'Primary navigation',
		brandAria: 'Vladyslav Mashyrov home',
		menuAria: 'Toggle navigation',
		languageAria: 'Select website language',
		nav: [
			['About', '#about'],
			['Experience', '#experience'],
			['Projects', '#projects'],
			['Skills', '#skills'],
			['Contact', '#contact'],
		],
		letsTalk: 'Let’s talk',
		hero: {
			available: 'Available for Full-Stack opportunities in Germany',
			title: 'Building reliable web products with',
			accent: ' JavaScript & TypeScript.',
			lead: 'Full-Stack Developer based in Mannheim, specialising in React, Next.js, Node.js, NestJS, PostgreSQL, and MongoDB.',
			stackAria: 'Primary technology stack',
			viewWork: 'View selected work',
			contactMe: 'Contact me',
			socialAria: 'Social links',
			location: 'Mannheim, Germany',
			profileAria: 'Profile image',
			role: 'Full-Stack Developer',
			scrollAria: 'Scroll to about section',
			scroll: 'Scroll',
		},
		about: {
			kicker: 'About',
			title: 'From business requirements to production-ready solutions.',
			paragraphs: [
				'I develop responsive web applications and APIs, combining clean user interfaces with maintainable backend architecture. My work covers the complete delivery cycle: requirements, implementation, testing, deployment, optimisation, and support.',
				'I hold a Bachelor’s degree in Software Engineering and enjoy turning complex requirements into practical products that are easy to use and easy to maintain.',
			],
			facts: [
				['2+', 'Years building web applications'],
				['Full-Stack', 'Frontend, APIs, databases, deployment'],
				['Germany', 'Work authorisation and immediate availability'],
			],
		},
		experienceSection: {
			kicker: 'Experience',
			title: 'Commercial delivery and product development.',
		},
		experience: [
			{
				role: 'Full-Stack Developer',
				company: 'Independent / Project-based, Germany (Remote)',
				date: 'January 2024 — Present',
				bullets: [
					'Developed responsive and modern web applications using React, TypeScript, Next.js, and Node.js.',
					'Designed REST APIs, JWT authentication, and data models with Express, NestJS, MongoDB, and PostgreSQL.',
					'Owned development, testing, deployment, maintenance, performance optimisation, and debugging.',
					'Worked directly with clients to gather requirements, prioritise tasks, and deliver features on schedule.',
				],
			},
			{
				role: 'Frontend Developer',
				company: 'Confidential Product Company, Croatia (Remote)',
				date: 'April 2025 — October 2025',
				bullets: [
					'Developed and maintained user-facing features using React, TypeScript, HTML, and CSS.',
					'Built reusable UI components and integrated frontend logic with REST APIs and backend services.',
					'Resolved production issues while improving performance, maintainability, and user experience.',
					'Worked independently in a distributed team and safely delivered changes across devices and browsers.',
				],
			},
		],
		projectsSection: {
			kicker: 'Selected work',
			title: 'Projects built for users, clients, and real workflows.',
			more: 'More on GitHub',
			open: 'Open live project',
			viewGallery: 'View gallery',
			closeGallery: 'Close gallery',
			previousImage: 'Previous image',
			nextImage: 'Next image',
			imageLabel: 'Image',
		},
		projects: [
			{
				title: 'Podorozhnyky',
				label: 'Full-Stack Travel Platform',
				description:
					'A full-stack platform for publishing and exploring travel stories, with authentication, image uploads, profiles, and a documented REST API.',
				stack: ['React 19', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
				live: 'https://podorozhnyky.vercel.app',
				accent: 'travel',
				mark: 'P',
			},
			{
				title: 'KURB Global',
				label: 'Commercial E-commerce',
				description:
					'Production e-commerce development with custom bundle logic, email automation, checkout improvements, responsive UI, and ongoing technical support.',
				stack: ['WordPress', 'WooCommerce', 'Brevo', 'Mollie', 'CSS'],
				live: 'https://kurb-global.com',
				accent: 'commerce',
				mark: 'K',
			},
			{
				title: 'Habit Tracker',
				label: 'Productivity Application',
				description:
					'A responsive habit-management interface focused on clear state handling, reusable React components, and a fast user experience.',
				stack: ['React', 'Redux Toolkit', 'JavaScript', 'Vite'],
				live: 'https://habit-jcsz.vercel.app',
				accent: 'habit',
				mark: 'H',
			},
			{
				title: 'Rental Car',
				label: 'Frontend Marketplace',
				description:
					'A modern vehicle marketplace with filtering, favourites, detailed listings, responsive layouts, and API-driven content.',
				stack: ['React', 'Redux Toolkit', 'REST API', 'CSS'],
				live: 'https://rental-car-khaki.vercel.app',
				accent: 'car',
				mark: 'R',
			},
		],
		skillsSection: {
			kicker: 'Technical skills',
			title: 'A modern JavaScript / TypeScript stack.',
		},
		skillGroups: [
			{
				icon: Code2,
				title: 'Frontend',
				skills: [
					'JavaScript',
					'TypeScript',
					'React',
					'Next.js',
					'Redux Toolkit',
					'HTML5',
					'CSS3',
					'Tailwind CSS',
				],
			},
			{
				icon: Server,
				title: 'Backend',
				skills: [
					'Node.js',
					'Express.js',
					'NestJS',
					'REST APIs',
					'JWT',
					'Swagger / OpenAPI',
				],
			},
			{
				icon: Database,
				title: 'Data & Tools',
				skills: [
					'PostgreSQL',
					'MongoDB',
					'Prisma',
					'Mongoose',
					'Git',
					'Docker',
					'Postman',
					'Vite',
				],
			},
		],
		education: {
			aria: 'Education',
			kicker: 'Education',
			title: 'Bachelor of Engineering in Software Engineering',
			university:
				'National Technical University “Kharkiv Polytechnic Institute” · 2021—2025',
			note: 'Degree recognised in Germany through a ZAB Statement of Comparability.',
		},
		contact: {
			kicker: 'Contact',
			title: 'Let’s build something useful.',
			text: 'I am available for Full-Stack, Frontend React, and Node.js opportunities in Germany.',
		},
		footer: 'Built with React & TypeScript-oriented thinking.',
	},
	de: {
		metaTitle: 'Vladyslav Mashyrov — Full-Stack-Entwickler',
		navAria: 'Hauptnavigation',
		brandAria: 'Startseite von Vladyslav Mashyrov',
		menuAria: 'Navigation öffnen oder schließen',
		languageAria: 'Sprache der Website auswählen',
		nav: [
			['Über mich', '#about'],
			['Erfahrung', '#experience'],
			['Projekte', '#projects'],
			['Kenntnisse', '#skills'],
			['Kontakt', '#contact'],
		],
		letsTalk: 'Kontakt',
		hero: {
			available: 'Verfügbar für Full-Stack-Positionen in Deutschland',
			title: 'Zuverlässige Webprodukte mit',
			accent: ' JavaScript & TypeScript.',
			lead: 'Full-Stack-Entwickler aus Mannheim mit Schwerpunkt auf React, Next.js, Node.js, NestJS, PostgreSQL und MongoDB.',
			stackAria: 'Wichtigste Technologien',
			viewWork: 'Projekte ansehen',
			contactMe: 'Kontakt aufnehmen',
			socialAria: 'Social-Media-Links',
			location: 'Mannheim, Deutschland',
			profileAria: 'Profilbild',
			role: 'Full-Stack-Entwickler',
			scrollAria: 'Zum Abschnitt Über mich scrollen',
			scroll: 'Scrollen',
		},
		about: {
			kicker: 'Über mich',
			title: 'Von fachlichen Anforderungen zu produktionsreifen Lösungen.',
			paragraphs: [
				'Ich entwickle responsive Webanwendungen und APIs und verbinde übersichtliche Benutzeroberflächen mit einer wartbaren Backend-Architektur. Meine Arbeit umfasst den gesamten Entwicklungszyklus: Anforderungsanalyse, Implementierung, Tests, Deployment, Optimierung und Support.',
				'Ich habe einen Bachelorabschluss in Software Engineering und setze komplexe Anforderungen gern in praktische Produkte um, die benutzerfreundlich und langfristig wartbar sind.',
			],
			facts: [
				['2+', 'Jahre Erfahrung in der Webentwicklung'],
				['Full-Stack', 'Frontend, APIs, Datenbanken und Deployment'],
				['Deutschland', 'Arbeitserlaubnis und kurzfristige Verfügbarkeit'],
			],
		},
		experienceSection: {
			kicker: 'Berufserfahrung',
			title: 'Kommerzielle Umsetzung und Produktentwicklung.',
		},
		experience: [
			{
				role: 'Full-Stack-Entwickler',
				company: 'Selbstständig / projektbasiert, Deutschland (Remote)',
				date: 'Januar 2024 — heute',
				bullets: [
					'Entwicklung responsiver und moderner Webanwendungen mit React, TypeScript, Next.js und Node.js.',
					'Konzeption und Implementierung von REST-APIs, JWT-Authentifizierung und Datenmodellen mit Express, NestJS, MongoDB und PostgreSQL.',
					'Verantwortung für Entwicklung, Tests, Deployment, Wartung, Performance-Optimierung und Fehleranalyse.',
					'Direkte Abstimmung mit Kunden, Aufnahme und Priorisierung von Anforderungen sowie termingerechte Umsetzung neuer Funktionen.',
				],
			},
			{
				role: 'Frontend-Entwickler',
				company: 'Vertrauliches Produktunternehmen, Kroatien (Remote)',
				date: 'April 2025 — Oktober 2025',
				bullets: [
					'Entwicklung und Pflege benutzerorientierter Funktionen mit React, TypeScript, HTML und CSS.',
					'Erstellung wiederverwendbarer UI-Komponenten und Anbindung der Frontend-Logik an REST-APIs und Backend-Services.',
					'Analyse und Behebung von Fehlern im Produktivsystem sowie Verbesserung von Performance, Wartbarkeit und User Experience.',
					'Selbstständige Arbeit in einem verteilten Team und sichere Umsetzung von Änderungen für verschiedene Geräte und Browser.',
				],
			},
		],
		projectsSection: {
			kicker: 'Ausgewählte Projekte',
			title: 'Projekte für Nutzer, Kunden und reale Arbeitsabläufe.',
			more: 'Mehr auf GitHub',
			open: 'Live-Projekt öffnen',
			viewGallery: 'Galerie ansehen',
			closeGallery: 'Galerie schließen',
			previousImage: 'Vorheriges Bild',
			nextImage: 'Nächstes Bild',
			imageLabel: 'Bild',
		},
		projects: [
			{
				title: 'Podorozhnyky',
				label: 'Full-Stack-Reiseplattform',
				description:
					'Eine Full-Stack-Plattform zum Veröffentlichen und Entdecken von Reiseberichten mit Authentifizierung, Bilduploads, Profilen und dokumentierter REST-API.',
				stack: ['React 19', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
				live: 'https://podorozhnyky.vercel.app',
				accent: 'travel',
				mark: 'P',
			},
			{
				title: 'KURB Global',
				label: 'Kommerzieller Online-Shop',
				description:
					'Weiterentwicklung eines produktiven Online-Shops mit individueller Bundle-Logik, E-Mail-Automatisierung, Checkout-Optimierung, responsiver Oberfläche und laufendem technischem Support.',
				stack: ['WordPress', 'WooCommerce', 'Brevo', 'Mollie', 'CSS'],
				live: 'https://kurb-global.com',
				accent: 'commerce',
				mark: 'K',
			},
			{
				title: 'Habit Tracker',
				label: 'Produktivitätsanwendung',
				description:
					'Eine responsive Anwendung zur Verwaltung von Gewohnheiten mit klarer Zustandsverwaltung, wiederverwendbaren React-Komponenten und schneller Benutzeroberfläche.',
				stack: ['React', 'Redux Toolkit', 'JavaScript', 'Vite'],
				live: 'https://habit-jcsz.vercel.app',
				accent: 'habit',
				mark: 'H',
			},
			{
				title: 'Rental Car',
				label: 'Frontend-Marktplatz',
				description:
					'Ein moderner Fahrzeug-Marktplatz mit Filtern, Favoriten, Detailansichten, responsiven Layouts und API-basierten Inhalten.',
				stack: ['React', 'Redux Toolkit', 'REST API', 'CSS'],
				live: 'https://rental-car-khaki.vercel.app',
				accent: 'car',
				mark: 'R',
			},
		],
		skillsSection: {
			kicker: 'Technische Kenntnisse',
			title: 'Ein moderner JavaScript-/TypeScript-Stack.',
		},
		skillGroups: [
			{
				icon: Code2,
				title: 'Frontend',
				skills: [
					'JavaScript',
					'TypeScript',
					'React',
					'Next.js',
					'Redux Toolkit',
					'HTML5',
					'CSS3',
					'Tailwind CSS',
				],
			},
			{
				icon: Server,
				title: 'Backend',
				skills: [
					'Node.js',
					'Express.js',
					'NestJS',
					'REST APIs',
					'JWT',
					'Swagger / OpenAPI',
				],
			},
			{
				icon: Database,
				title: 'Daten & Tools',
				skills: [
					'PostgreSQL',
					'MongoDB',
					'Prisma',
					'Mongoose',
					'Git',
					'Docker',
					'Postman',
					'Vite',
				],
			},
		],
		education: {
			aria: 'Studium',
			kicker: 'Studium',
			title: 'Bachelor of Engineering in Software Engineering',
			university:
				'National Technical University “Kharkiv Polytechnic Institute” · 2021—2025',
			note: 'Der Hochschulabschluss wurde in Deutschland durch eine ZAB-Zeugnisbewertung anerkannt.',
		},
		contact: {
			kicker: 'Kontakt',
			title: 'Lassen Sie uns gemeinsam etwas Nützliches entwickeln.',
			text: 'Ich bin offen für Positionen als Full-Stack-, React-Frontend- oder Node.js-Entwickler in Deutschland.',
		},
		footer: 'Entwickelt mit React und einem TypeScript-orientierten Ansatz.',
	},
}

function getInitialLanguage() {
	try {
		return localStorage.getItem('portfolio-language') === 'de' ? 'de' : 'en'
	} catch {
		return 'en'
	}
}

function LanguageSwitch({ language, onChange, ariaLabel }) {
	return (
		<div className='language-switch' role='group' aria-label={ariaLabel}>
			<span
				className='language-switch-indicator'
				data-language={language}
				aria-hidden='true'
			/>
			{['en', 'de'].map(code => (
				<button
					key={code}
					type='button'
					className={language === code ? 'active' : undefined}
					aria-pressed={language === code}
					onClick={() => onChange(code)}
				>
					{code.toUpperCase()}
				</button>
			))}
		</div>
	)
}

function App() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [photoFailed, setPhotoFailed] = useState(false)
	const [activeSection, setActiveSection] = useState('about')
	const [language, setLanguage] = useState(getInitialLanguage)
	const [activeGallery, setActiveGallery] = useState(null)
	const [activeImageIndex, setActiveImageIndex] = useState(0)
	const shellRef = useRef(null)
	const t = translations[language]

	useEffect(() => {
		const close = () => setMenuOpen(false)
		window.addEventListener('resize', close)
		return () => window.removeEventListener('resize', close)
	}, [])

	useEffect(() => {
		document.documentElement.lang = language
		document.title = t.metaTitle

		try {
			localStorage.setItem('portfolio-language', language)
		} catch {
			// The website still works if browser storage is unavailable.
		}
	}, [language, t.metaTitle])

	useEffect(() => {
		const reducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches
		const revealElements = Array.from(document.querySelectorAll('.reveal'))

		let revealObserver

		if (reducedMotion) {
			revealElements.forEach(element => element.classList.add('is-visible'))
		} else {
			revealObserver = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach(entry => {
						if (!entry.isIntersecting) return
						entry.target.classList.add('is-visible')
						observer.unobserve(entry.target)
					})
				},
				{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
			)

			revealElements.forEach(element => revealObserver.observe(element))
		}

		const sections = Array.from(document.querySelectorAll('main section[id]'))
		const sectionObserver = new IntersectionObserver(
			entries => {
				const visibleEntry = entries
					.filter(entry => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

				if (visibleEntry && visibleEntry.target.id !== 'top') {
					setActiveSection(visibleEntry.target.id)
				}
			},
			{ threshold: [0.18, 0.35, 0.55], rootMargin: '-18% 0px -58% 0px' }
		)

		sections.forEach(section => sectionObserver.observe(section))

		let scrollFrame = 0
		const updateScrollProgress = () => {
			if (scrollFrame) return
			scrollFrame = window.requestAnimationFrame(() => {
				const scrollable =
					document.documentElement.scrollHeight - window.innerHeight
				const progress =
					scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
				document.documentElement.style.setProperty(
					'--scroll-progress',
					`${progress}%`
				)
				scrollFrame = 0
			})
		}

		let pointerFrame = 0
		const updatePointerGlow = event => {
			if (pointerFrame || !shellRef.current) return
			pointerFrame = window.requestAnimationFrame(() => {
				shellRef.current.style.setProperty('--mouse-x', `${event.clientX}px`)
				shellRef.current.style.setProperty('--mouse-y', `${event.clientY}px`)
				pointerFrame = 0
			})
		}

		updateScrollProgress()
		window.addEventListener('scroll', updateScrollProgress, { passive: true })

		const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
		if (supportsFinePointer && !reducedMotion) {
			window.addEventListener('pointermove', updatePointerGlow, {
				passive: true,
			})
		}

		return () => {
			window.removeEventListener('scroll', updateScrollProgress)
			window.removeEventListener('pointermove', updatePointerGlow)
			if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
			if (pointerFrame) window.cancelAnimationFrame(pointerFrame)
			sectionObserver.disconnect()
			revealObserver?.disconnect()
		}
	}, [language])

	useEffect(() => {
		if (!activeGallery) return undefined

		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				setActiveGallery(null)
				setActiveImageIndex(0)
			}

			if (event.key === 'ArrowLeft') {
				setActiveImageIndex(current =>
					current === 0 ? activeGallery.images.length - 1 : current - 1
				)
			}

			if (event.key === 'ArrowRight') {
				setActiveImageIndex(current =>
					current === activeGallery.images.length - 1 ? 0 : current + 1
				)
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			document.body.style.overflow = previousOverflow
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [activeGallery])

	const changeLanguage = nextLanguage => {
		if (nextLanguage === language) return
		setLanguage(nextLanguage)
		setMenuOpen(false)
		setActiveGallery(null)
		setActiveImageIndex(0)
	}

	const openGallery = project => {
		const images = projectImages[project.title] ?? []
		if (!images.length) return

		setActiveGallery({ ...project, images })
		setActiveImageIndex(0)
	}

	const closeGallery = () => {
		setActiveGallery(null)
		setActiveImageIndex(0)
	}

	const showPreviousImage = () => {
		if (!activeGallery) return
		setActiveImageIndex(current =>
			current === 0 ? activeGallery.images.length - 1 : current - 1
		)
	}

	const showNextImage = () => {
		if (!activeGallery) return
		setActiveImageIndex(current =>
			current === activeGallery.images.length - 1 ? 0 : current + 1
		)
	}

	return (
		<div className='app-shell' ref={shellRef}>
			<div className='scroll-progress' aria-hidden='true' />
			<div className='cursor-glow' aria-hidden='true' />
			<div className='ambient-grid' aria-hidden='true' />
			<div className='grain' aria-hidden='true' />

			<header className='site-header'>
				<a className='brand' href='#top' aria-label={t.brandAria}>
					<span className='brand-mark'>VM</span>
					<span>Vladyslav Mashyrov</span>
				</a>

				<nav className={menuOpen ? 'nav open' : 'nav'} aria-label={t.navAria}>
					{t.nav.map(([label, href]) => (
						<a
							key={href}
							href={href}
							className={activeSection === href.slice(1) ? 'active' : undefined}
							onClick={() => setMenuOpen(false)}
						>
							{label}
						</a>
					))}
					<a className='nav-cta' href='mailto:foundybash@gmail.com'>
						{t.letsTalk}
					</a>
					<LanguageSwitch
						language={language}
						onChange={changeLanguage}
						ariaLabel={t.languageAria}
					/>
				</nav>

				<button
					className='menu-button'
					type='button'
					aria-label={t.menuAria}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen(value => !value)}
				>
					{menuOpen ? <X size={22} /> : <Menu size={22} />}
				</button>
			</header>

			<main className='language-content' key={language}>
				<section className='hero section' id='top'>
					<div className='hero-mesh' aria-hidden='true'>
						<span className='mesh-orb orb-a' />
						<span className='mesh-orb orb-b' />
						<span className='mesh-orb orb-c' />
					</div>

					<div className='hero-copy reveal is-visible' data-reveal='left'>
						<div className='eyebrow'>
							<span className='status-dot' />
							{t.hero.available}
						</div>
						<h1>
							{t.hero.title}
							<span className='gradient-text'>{t.hero.accent}</span>
						</h1>
						<p className='hero-lead'>{t.hero.lead}</p>
						<div className='hero-stack' aria-label={t.hero.stackAria}>
							<span>React</span>
							<i />
							<span>TypeScript</span>
							<i />
							<span>Node.js</span>
							<i />
							<span>PostgreSQL</span>
						</div>
						<div className='hero-actions'>
							<a className='button primary' href='#projects'>
								{t.hero.viewWork} <ArrowRight size={18} />
							</a>
							<a
								className='button secondary'
								href='mailto:foundybash@gmail.com'
							>
								<Mail size={18} /> {t.hero.contactMe}
							</a>
						</div>
						<div className='hero-links' aria-label={t.hero.socialAria}>
							<a
								href='https://github.com/FoUndY121'
								target='_blank'
								rel='noreferrer'
							>
								<GitHubIcon size={18} /> GitHub
							</a>
							<a
								href='https://linkedin.com/in/vladyslav-mashyrov'
								target='_blank'
								rel='noreferrer'
							>
								<LinkedInIcon size={18} /> LinkedIn
							</a>
							<span>
								<MapPin size={18} /> {t.hero.location}
							</span>
						</div>
					</div>

					<div
						className='hero-visual reveal is-visible delay-1'
						data-reveal='right'
						aria-label={t.hero.profileAria}
					>
						<div className='portrait-glow' />
						<div className='orbit orbit-one' aria-hidden='true'>
							<span />
						</div>
						<div className='orbit orbit-two' aria-hidden='true'>
							<span />
						</div>
						<div
							className='portrait-card tilt-card'
							onMouseMove={event => applyTilt(event, 9)}
							onMouseLeave={resetTilt}
						>
							<div className='card-shine' aria-hidden='true' />
							<img
								src={
									photoFailed
										? '/profile-placeholder.svg'
										: '/profile-photo.png'
								}
								alt='Vladyslav Mashyrov'
								onError={() => setPhotoFailed(true)}
							/>
							<div className='portrait-caption'>
								<div>
									<strong>Vladyslav Mashyrov</strong>
									<span>{t.hero.role}</span>
								</div>
								<Sparkles size={22} />
							</div>
						</div>
						<div className='floating-tech tech-react'>React</div>
						<div className='floating-tech tech-node'>Node.js</div>
						<div className='floating-tech tech-ts'>TypeScript</div>
					</div>

					<a
						className='scroll-cue'
						href='#about'
						aria-label={t.hero.scrollAria}
					>
						<span>{t.hero.scroll}</span>
						<ArrowRight size={16} />
					</a>
				</section>

				<section className='section about' id='about'>
					<div className='section-heading reveal is-visible'>
						<span className='section-kicker'>{t.about.kicker}</span>
						<h2>{t.about.title}</h2>
					</div>
					<div className='about-grid'>
						<div className='about-copy reveal is-visible'>
							{t.about.paragraphs.map(paragraph => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
						<div className='facts reveal is-visible delay-1'>
							{t.about.facts.map(([value, label]) => (
								<div className='fact' key={value}>
									<strong>{value}</strong>
									<span>{label}</span>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className='section' id='experience'>
					<div className='section-heading reveal is-visible'>
						<span className='section-kicker'>{t.experienceSection.kicker}</span>
						<h2>{t.experienceSection.title}</h2>
					</div>
					<div className='timeline reveal is-visible'>
						{t.experience.map((item, index) => (
							<article
								className='timeline-item reveal is-visible'
								style={{ '--reveal-delay': `${index * 130}ms` }}
								key={`${language}-${item.role}-${item.date}`}
							>
								<div className='timeline-marker'>
									<BriefcaseBusiness size={20} />
								</div>
								<div className='timeline-content'>
									<div className='timeline-topline'>
										<div>
											<h3>{item.role}</h3>
											<p>{item.company}</p>
										</div>
										<time>{item.date}</time>
									</div>
									<ul>
										{item.bullets.map(bullet => (
											<li key={bullet}>
												<CheckCircle2 size={17} /> <span>{bullet}</span>
											</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className='section' id='projects'>
					<div className='section-heading projects-heading reveal is-visible'>
						<div>
							<span className='section-kicker'>{t.projectsSection.kicker}</span>
							<h2>{t.projectsSection.title}</h2>
						</div>
						<a
							className='text-link'
							href='https://github.com/FoUndY121'
							target='_blank'
							rel='noreferrer'
						>
							{t.projectsSection.more} <ArrowRight size={17} />
						</a>
					</div>
					<div className='projects-grid'>
						{t.projects.map((project, index) => (
							<article
								className='project-card reveal is-visible tilt-card'
								style={{ '--reveal-delay': `${index * 100}ms` }}
								onMouseMove={event => applyTilt(event, 6)}
								onMouseLeave={resetTilt}
								key={project.title}
							>
								<div className='card-shine' aria-hidden='true' />
								<button
									className={`project-preview project-image-preview ${project.accent}`}
									type='button'
									onClick={() => openGallery(project)}
									aria-label={`${t.projectsSection.viewGallery}: ${project.title}`}
								>
									<span className='project-image-fallback' aria-hidden='true'>
										{project.mark}
									</span>
									<img
										src={projectImages[project.title]?.[0]}
										alt={`${project.title} project preview`}
										loading='lazy'
										decoding='async'
										onError={event => {
											event.currentTarget.style.display = 'none'
										}}
									/>
									<span className='project-image-count'>
										1 / {projectImages[project.title]?.length ?? 1}
									</span>
									<span className='project-image-overlay'>
										<span>{t.projectsSection.viewGallery}</span>
									</span>
								</button>
								<div className='project-body'>
									<span className='project-label'>{project.label}</span>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<div className='tags'>
										{project.stack.map(technology => (
											<span key={technology}>{technology}</span>
										))}
									</div>
									<a href={project.live} target='_blank' rel='noreferrer'>
										{t.projectsSection.open} <ExternalLink size={17} />
									</a>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className='section' id='skills'>
					<div className='section-heading reveal is-visible'>
						<span className='section-kicker'>{t.skillsSection.kicker}</span>
						<h2>{t.skillsSection.title}</h2>
					</div>
					<div className='skills-grid'>
						{t.skillGroups.map(({ icon: Icon, title, skills }, index) => (
							<article
								className='skill-card reveal is-visible tilt-card'
								style={{ '--reveal-delay': `${index * 110}ms` }}
								onMouseMove={event => applyTilt(event, 5)}
								onMouseLeave={resetTilt}
								key={title}
							>
								<div className='card-shine' aria-hidden='true' />
								<div className='skill-icon'>
									<Icon size={24} />
								</div>
								<h3>{title}</h3>
								<div className='skill-list'>
									{skills.map(skill => (
										<span key={skill}>{skill}</span>
									))}
								</div>
							</article>
						))}
					</div>
				</section>

				<section className='section education' aria-label={t.education.aria}>
					<div
						className='education-card reveal is-visible tilt-card'
						onMouseMove={event => applyTilt(event, 3)}
						onMouseLeave={resetTilt}
					>
						<div className='card-shine' aria-hidden='true' />
						<div className='education-icon'>
							<GraduationCap size={30} />
						</div>
						<div>
							<span className='section-kicker'>{t.education.kicker}</span>
							<h2>{t.education.title}</h2>
							<p>{t.education.university}</p>
							<p className='education-note'>{t.education.note}</p>
						</div>
					</div>
				</section>

				<section className='section contact-section' id='contact'>
					<div className='contact-card reveal is-visible'>
						<div
							className='contact-orbit orbit-contact-one'
							aria-hidden='true'
						/>
						<div
							className='contact-orbit orbit-contact-two'
							aria-hidden='true'
						/>
						<span className='section-kicker'>{t.contact.kicker}</span>
						<h2>{t.contact.title}</h2>
						<p>{t.contact.text}</p>
						<div className='contact-actions'>
							<a className='button primary' href='mailto:foundybash@gmail.com'>
								<Mail size={18} /> foundybash@gmail.com
							</a>
							<a
								className='button secondary'
								href='https://linkedin.com/in/vladyslav-mashyrov'
								target='_blank'
								rel='noreferrer'
							>
								<LinkedInIcon size={18} /> LinkedIn
							</a>
						</div>
					</div>
				</section>
			</main>

			{activeGallery && (
				<div
					className='gallery-backdrop'
					role='dialog'
					aria-modal='true'
					aria-label={`${activeGallery.title} gallery`}
					onMouseDown={event => {
						if (event.target === event.currentTarget) closeGallery()
					}}
				>
					<div className='gallery-modal'>
						<button
							className='gallery-close'
							type='button'
							onClick={closeGallery}
							aria-label={t.projectsSection.closeGallery}
						>
							<X size={24} />
						</button>

						<div className='gallery-image-wrapper'>
							<img
								key={activeGallery.images[activeImageIndex]}
								src={activeGallery.images[activeImageIndex]}
								alt={`${activeGallery.title} — ${
									t.projectsSection.imageLabel
								} ${activeImageIndex + 1}`}
							/>

							{activeGallery.images.length > 1 && (
								<>
									<button
										className='gallery-arrow gallery-arrow-left'
										type='button'
										onClick={showPreviousImage}
										aria-label={t.projectsSection.previousImage}
									>
										‹
									</button>
									<button
										className='gallery-arrow gallery-arrow-right'
										type='button'
										onClick={showNextImage}
										aria-label={t.projectsSection.nextImage}
									>
										›
									</button>
								</>
							)}
						</div>

						<div className='gallery-footer'>
							<div className='gallery-meta'>
								<div>
									<span className='project-label'>{activeGallery.label}</span>
									<strong>{activeGallery.title}</strong>
								</div>
								<span>
									{activeImageIndex + 1} / {activeGallery.images.length}
								</span>
							</div>

							<div className='gallery-thumbnails'>
								{activeGallery.images.map((image, index) => (
									<button
										className={
											index === activeImageIndex
												? 'gallery-thumbnail active'
												: 'gallery-thumbnail'
										}
										type='button'
										key={image}
										onClick={() => setActiveImageIndex(index)}
										aria-label={`${t.projectsSection.imageLabel} ${index + 1}`}
									>
										<img src={image} alt='' loading='lazy' />
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			<footer>
				<span>© {new Date().getFullYear()} Vladyslav Mashyrov</span>
				<span>{t.footer}</span>
			</footer>
		</div>
	)
}

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
