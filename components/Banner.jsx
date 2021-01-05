import style from '../styles/banner.module.css';

export default function Banner({ title, image, position }) {
	return (
		<section
			className={style.banner}
			style={{
				backgroundImage: `url(${image})`,
				backgroundPosition: `50% ${position || '50'}%`,
			}}
		>
			<h1>{title}</h1>
		</section>
	);
}
