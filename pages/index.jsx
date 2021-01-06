import Head from 'next/head';
import style from '../styles/index.module.css';
import Nav from '../components/Nav';
export default function Home() {
	return (
		<div className={style.container}>
			<Head>
				<title>French Au Café</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<main className={style.main}>
				<section className={style.banner}>
					<h1>French Au Café</h1>
				</section>
				<section className={style.why}>
					<h2>
						Pourquoi? <span>Why?</span>
					</h2>
					<p>
						Picture this: your are relaxing at a bistrot terrace in the shade of the
						plane trees lining a quaint French village square, watching the world drift
						by...
						<br />
						<br />
						Stay in the mood and meet native French tutor Virginie Hartley at one of
						several pubs and hotels in Monmouthshire to enjoy speaking French, talking
						about all things French, and much more.
						<br />
						<br />
						Whatever your level of proficiency, you will be given the opportunity to
						practice and learn in enjoyable surroundings.
					</p>
				</section>
				<section className={style.about}>
					<h2>
						La Prof! <span>The Tutor!</span>
					</h2>
					<img src='/images/profile.jpg' alt='' />
					<p>
						Ginnie is a qualified linguist and artist with over 20 years teaching
						experience in the UK. Her approach and resources are individually tailored
						to reflect learners' requirements and personal interests.
						<br />
						<br />
						Tuition in small groups and one to one home tution at all levels - including
						exam preparation - are offered.
					</p>
				</section>
			</main>
		</div>
	);
}
