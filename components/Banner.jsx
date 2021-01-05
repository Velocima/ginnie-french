import style from '../styles/banner.module.css';

export default function Banner({ title, image }) {
	return (
		<section className={style.banner} style={{ backgroundImage: `url(${image})` }}>
			<h1>{title}</h1>
		</section>
	);
}
