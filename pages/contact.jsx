import Head from 'next/head';
import Nav from '../components/nav';
import style from '../styles/contact.module.css';
import { FaRegEnvelope, FaPhone } from 'react-icons/fa';
import Icon from '../components/icon';

export default function Contact() {
	return (
		<>
			<Head>
				<link rel='icon' type='image/png' href='/images/icon.png' />
				<title>Contact | Millicent Mehndi</title>
			</Head>
			<Nav />
			<div className={style.banner}>
				<h1>CONTACT</h1>
			</div>
			<div className={style.content}>
				<h2>Millicent Sutton</h2>
				<p>To book me for a festival or commission some work get in touch with me via: </p>
				<Icon
					color='rgb(41, 122, 228)'
					href='mailto:millie@millicent-mehndi.co.uk'
					text={<h4>millie@millicent-mehndi.co.uk</h4>}
				>
					<FaRegEnvelope />
				</Icon>
				<Icon
					color='rgb(41, 122, 228)'
					href='mailto:millie@millicent-mehndi.co.uk'
					text={<h4>07874 816348</h4>}
				>
					<FaPhone />
				</Icon>
			</div>
		</>
	);
}
