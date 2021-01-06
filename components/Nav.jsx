import Link from 'next/link';
import style from '../styles/nav.module.css';
import { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';

export default function Nav() {
	const pages = ['Home', 'Sessions', 'Contact'];

	const [height, width] = useWindowSize();
	const [isNavCollapsible, setIsNavCollapsible] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		if (height < 500 || width < 550) {
			setIsNavCollapsible(true);
			setIsNavOpen(true);
		} else {
			setIsNavOpen(false);
			setIsNavCollapsible(false);
		}
		return null;
	}, [height, width]);

	const toggleNav = () => {
		setIsNavOpen((prevState) => !prevState);
	};

	const iconStyle = {
		transform: isNavOpen ? 'rotate(180deg)' : 'rotate(0)',
		display: isNavCollapsible ? 'flex' : 'none',
	};

	const navStyle = {
		transform: !isNavOpen ? 'translateY(0)' : 'translateY(-120%)',
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
							<Link href={page === 'Home' ? '/' : page.toLowerCase()} key={page}>
								<a>{page}</a>
							</Link>
						);
					})}
				</nav>
			</div>
		</>
	);
}
