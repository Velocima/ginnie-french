import Nav from '../components/Nav';
import style from '../styles/contact.module.css';
import Head from 'next/head';
import { GoMail } from 'react-icons/go';
import { AiFillPhone } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function Groups() {
	return (
		<>
			<Head>
				<title>Contact | French Au Café</title>
				<link rel='icon' href='/images/icon.png' />
				<meta
					name='description'
					content='Contact French au café tutor Virginnie Hartley for enquires and bookings. Contact details.'
				/>
			</Head>
			<Nav />
			<main className={style.main}>
				<section className={style.banner}>
					<h1>Contact</h1>
				</section>
				<section className={style.contact}>
					<h2>Get in touch!</h2>
					<a href='mailto:virginie.hartley@virgin.net'>
						<IconContext.Provider value={{ className: style.icon }}>
							<GoMail />
						</IconContext.Provider>
						virginie.hartley@virgin.net
					</a>
					<a href='tel:01600712850'>
						<IconContext.Provider value={{ className: style.icon }}>
							<AiFillPhone />
						</IconContext.Provider>
						01600 712850
					</a>
				</section>
			</main>
		</>
	);
}
