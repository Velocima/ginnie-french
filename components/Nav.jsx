import Link from 'next/link';
import style from '../styles/nav.module.css';

export default function Nav() {
	const pages = ['home', 'groups', 'contact'];
	return (
		<nav className={style.nav}>
			{pages.map((page) => {
				return (
					<Link href={page === 'home' ? '/' : page}>
						<a>{page.toUpperCase()}</a>
					</Link>
				);
			})}
		</nav>
	);
}
