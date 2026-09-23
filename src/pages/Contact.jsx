import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import Reveal from '../components/Reveal';
import './Contact.css';

export default function Contact() {
	const { t } = useSite();

	return (
		<div className="contact-page">
			<Reveal className="contact-intro">
				<h1>{t.contactPage.title}</h1>
				<p>{t.contactPage.intro}</p>
			</Reveal>

			<Reveal className="contact-reasons">
				<div className="contact-reasons__header">
					<h3 className="contact-reasons__title">
						{t.contactPage.reasonsTitle}
					</h3>
					<span className="contact-reasons__eyebrow">
						{t.contactPage.reasonsEyebrow}
					</span>
				</div>
				<div className="contact-reasons__grid">
					{t.contactPage.reasons.map((reason, index) => (
						<div className="contact-reason" key={reason.title}>
							<span className="contact-reason__number">0{index + 1}</span>

							<div>
								<h3>{reason.title}</h3>
								<p>{reason.text}</p>
							</div>
						</div>
					))}
				</div>
			</Reveal>

			<div className="contact-content">
				<Reveal className="contact-info">
					<h2>{t.contact.title}</h2>

					<p className="contact-info__desc">{t.contact.desc}</p>

					<div className="contact-info__details">
						<p>255 rue de Vaugirard, 75015 Paris</p>
						<p>contact@ora-events.fr</p>
						<p>{t.contact.metro}</p>
						<p>{t.contact.gare}</p>
					</div>
				</Reveal>

				<Reveal>
					<form className="contact-form" onSubmit={(e) => e.preventDefault()}>
						<input placeholder={t.form.name} />
						<input placeholder={t.form.email} />
						<textarea placeholder={t.form.msg} rows={5} />

						<button>
							{t.form.send}
							<ArrowRight size={15} />
						</button>
					</form>
				</Reveal>
			</div>

			<Reveal className="contact-map">
				<iframe
					title={t.contactPage.mapTitle}
					src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Le%20Carr%C3%A9%20Vaugirard%20by%20Ora%20Events&maptype=roadmap&zoom=14"
					loading="lazy"
				/>
			</Reveal>
		</div>
	);
}
