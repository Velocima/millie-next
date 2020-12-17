import Head from 'next/head';
import Link from 'next/link';
import style from '../styles/index.module.css';
import Icon from '../components/icon';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Index() {
	return (
		<>
			<Head>
				<link rel='icon' type='image/png' href='/images/icon.png' />
				<title>Millicent Mehndi</title>
			</Head>
			<div className={style.landing}>
				<div className={style.landingShadow}>
					<nav className={style.nav}>
						<Link href='/about'>
							<a>
								<span>ABOUT</span>
							</a>
						</Link>
						<Link href='/gallery'>
							<a>
								{/* <span className='center'>GALLERY</span> */}
								<span>GALLERY</span>
							</a>
						</Link>
						<Link href='/contact'>
							<a>
								<span>CONTACT</span>
							</a>
						</Link>
					</nav>
					<div className={style.burger}>
						<div className={style.line}></div>
						<div className={style.line}></div>
						<div className={style.line}></div>
					</div>
					<div className={style.titleContainer}>
						<div className={style.title}>
							<h1>MILLICENT MEHNDI</h1>
							<h3>HENNA TATTOO ARTIST</h3>
						</div>
						<div className={style.social}>
							<Icon color='#3b5998' href='https://www.facebook.com/Millicentmehndi'>
								<FaFacebookF />
							</Icon>
							<Icon
								color='#125688'
								href='https://www.instagram.com/millicent_mehndi/'
							>
								<FaInstagram />
							</Icon>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
