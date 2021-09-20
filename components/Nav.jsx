import Link from 'next/link';
import style from '../styles/nav.module.css';
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

export default function Nav() {
	const pages = ['Home', 'Sessions', 'Contact'];

	const [width, height] = useWindowSize();
	let isScreenSmall = height < 500 || width < 1060;

	const [isNavOpen, setIsNavOpen] = useState(!isScreenSmall);

	const toggleNav = () => {
		setIsNavOpen((prevState) => !prevState);
	};

	const iconStyle = {
		transform: isNavOpen ? 'rotate(180deg)' : 'rotate(0)',
	};

	const navStyle = {
		transform: isNavOpen ? 'translateY(0)' : 'translateY(-120%)',
	};
	return (
		<>
			<div className={style.burger} onClick={toggleNav} style={iconStyle}>
				<div className={style.line}></div>
				<div className={style.line}></div>
				<div className={style.line}></div>
			</div>
			<div className={style.overflowContainer}>
				<nav className={style.nav} style={navStyle}>
					{pages.map((page) => {
						return (
							<Link href={page === 'Home' ? '/' : `/${page.toLowerCase()}`} key={page}>
								<a>{page}</a>
							</Link>
						);
					})}
				</nav>
			</div>
		</>
	);
}
