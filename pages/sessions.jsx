import Nav from '../components/Nav';
import style from '../styles/sessions.module.css';
import Head from 'next/head';

export default function Groups() {
	return (
		<>
			<Head>
				<title>Sessions | French Au Café</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<main className={style.main}>
				<section className={style.banner}>
					<h1>Sessions</h1>
				</section>
				<p className={style.covid}>
					Due to present circumstances all tuition is taking place online.
				</p>
				<section className={style.groups}>
					<div className={style.group}>
						<div className={style.day}>
							<h2>Monday</h2>
						</div>
						<p>
							Monmouth U3A
							<br />
							10:00am - 11:30am
							<br /> Intermediate
						</p>
					</div>
					<div className={style.group}>
						<div className={style.day}>
							<h2>Tuesday</h2>
						</div>
						<p>
							Ross-On-Wye
							<br /> 7:00pm - 8:30pm
							<br /> Advanced
						</p>
					</div>
					<div className={style.group}>
						<div className={style.day}>
							<h2>Wednesday</h2>
						</div>
						<p>
							Abergavenny
							<br /> 10:00am - 11:30am
							<br /> Intermediate
						</p>
						<p>
							Llangarron
							<br /> 1:00pm - 2:30pm
							<br /> Intermediate
						</p>
					</div>
					<div className={style.group}>
						<div className={style.day}>
							<h2>Thursday</h2>
						</div>
						<p>
							Monmouth
							<br /> 10:00am - 11:30am
							<br /> Conversation
						</p>
						<p>
							Abergavenny
							<br /> 4:00pm - 5:30pm
							<br /> Advanced
						</p>
						<p>
							Ross-On-Wye
							<br /> 6:30pm - 8:00pm
							<br /> Intermediate
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
