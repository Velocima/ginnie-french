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
			<main>
				<section className={style.banner}>
					<h1>French Au Café</h1>
				</section>
				<section className={style.why}>
					<h2>Pourquoi? Why?</h2>
					<p>
						Speak French <i>au café!</i>
						<br />
						Picture this: your are relaxing at a bistrot terrace in the shade of the
						plane trees lining a quaint French village square, watching the world drift
						by...
						<br />
						Stay in the mood and meet native French tutor Virginie Hartley at one of
						several pubs and hotels in Monmouthshire to enjoy speaking French, talking
						about all things French, and much more. Whatever your level of proficiency,
						you will be given the opportunity to practice and learn in enjoyable
						surroundings.
						<br />
						Ginnie is a qualified linquist, teacher and artist. Her approach and
						resources are individually tailored to reflect learners' requirements and
						personal interests.
						<br />
						Tution in small groups and one to one home tution are available.
					</p>
				</section>
			</main>
		</div>
	);
}
