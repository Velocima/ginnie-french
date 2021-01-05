import Link from 'next/link';
import style from '../styles/nav.module.css';

export default function Nav() {
	const pages = ['Home', 'Groups', 'Contact'];
	return (
		<nav className={style.nav}>
			{pages.map((page) => {
				return (
					<Link href={page === 'Home' ? '/' : page.toLowerCase()}>
						<a>{page}</a>
					</Link>
				);
			})}
		</nav>
	);
}
