import Nav from '../components/Nav';
import style from '../styles/sessions.module.css';
import Head from 'next/head';

export default function Groups() {
	return (
		<>
			<Head>
				<title>Sessions | French Au Café</title>
				<link rel='icon' href='/images/icon.png' />
				<meta
					name='description'
					content='French au café group tuition schedule. Learn French in small relaxed groups.'
				/>
			</Head>
			<Nav />
			<main className={style.main}>
				<section className={style.banner}>
					<h1>Sessions</h1>
				</section>
				<section className={style.groups}>
					<div className={style.group}>
						<div className={style.day}>
							<h2>Monday</h2>
						</div>
						<p>
							Intermediate/Advanced
							<br /> U3A French
							<br />
							10am – 11.30am
							<br /> Member’s Home/Monmouth
						</p>
					</div>
					<div className={style.group}>
						<div className={style.day}>
							<h2>Tuesday</h2>
						</div>
						<p>
							Intermediate
							<br /> 5.45pm – 7.15pm
							<br /> Larruperz Centre/Ross on Wye
						</p>
						<p>
							Advanced
							<br /> 7.30pm – 9pm
							<br /> Larruperz Centre/Ross on Wye
						</p>
					</div>
					<div className={style.group}>
						<div className={style.day}>
							<h2>Wednesday</h2>
						</div>
						<p>
							Intermediate/Advanced
							<br /> 1pm-2.30pm
							<br /> Garron Centre, Llangarron
						</p>
					</div>
					<div className={style.group}>
						<div className={style.day}>
							<h2>Thursday</h2>
						</div>
						<p>
							Conversation
							<br />
							Intermediate/Advanced
							<br /> 10am – 11.30am
							<br /> Zoom (online)
						</p>
						<p>
							Intermediate/Advanced
							<br />
							3pm, to be confirmed
							<br /> The Trading Post, Abergavenny
						</p>
					</div>
				</section>
			</main>
		</>
	);
}

// <h2>Thursday</h2>
// <p className={style.description}>Advanced Conversation Only</p>
// <p>10:00am - 11:30am</p>
// <p>Punch House Monmouth</p>
// <p className={style.description}>Advanced Conversation and Translation</p>
// <p>4:00pm - 5:30pm</p>
// <p>Abergavenny</p>
// </div>
