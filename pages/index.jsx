import Head from 'next/head';
import styles from '../styles/index.module.css';
import Nav from '../components/Nav';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<h1>Hello World</h1>
		</div>
	);
}
