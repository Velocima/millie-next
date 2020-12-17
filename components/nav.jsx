import Link from 'next/link';
import style from '../styles/nav.module.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Icon from './icon';

export default function Nav() {
	return (
		<nav className={style.nav}>
			<div className={style.logo}>
				<Link href='/'>
					<a>
						<h3 className={style.logoHeader}>MILLICENT MEHNDI</h3>
					</a>
				</Link>
				<div className={style.social}>
					<Icon color='#3b5998' href='https://www.facebook.com/Millicentmehndi'>
						<FaFacebookF />
					</Icon>
					<Icon color='#125688' href='https://www.instagram.com/millicent_mehndi/'>
						<FaInstagram />
					</Icon>
				</div>
			</div>
			<div className={style.burger}>
				<div className={style.line}></div>
				<div className={style.line}></div>
				<div className={style.line}></div>
			</div>
			<ul className={`menu ${style.list}`}>
				<li className={style.listItem}>
					<Link href='/about'>
						<a>ABOUT</a>
					</Link>
				</li>
				<li className={style.listItem}>
					<Link href='/gallery'>
						<a>GALLERY</a>
					</Link>
				</li>
				<li className={style.listItem}>
					<Link href='/contact'>
						<a>CONTACT</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
