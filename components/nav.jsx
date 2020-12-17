import Link from 'next/link';
import { useState, useEffect } from 'react';
import useWindowSize from '../lib/useWindowSize';
import style from '../styles/nav.module.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Icon from './icon';

export default function Nav() {
	const [width, height] = useWindowSize();
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleBurgerClick = () => {
		setIsNavOpen((prevState) => !prevState);
	};

	useEffect(() => {
		if (width > 1050) {
			setIsNavOpen(true);
		} else {
			setIsNavOpen(false);
		}
	}, [width, height]);

	const burgerStyle = {
		transform: isNavOpen ? 'rotate(180deg)' : 'none',
	};

	const menuStyle = {
		transform: isNavOpen ? 'translateY(0)' : 'translateY(-100%)',
		opacity: isNavOpen ? 1 : 0,
	};

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
			<div className={style.burger} onClick={handleBurgerClick} style={burgerStyle}>
				<div className={style.line}></div>
				<div className={style.line}></div>
				<div className={style.line}></div>
			</div>
			<ul className={style.menu} style={menuStyle}>
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
