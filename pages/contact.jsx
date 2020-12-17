import Head from 'next/head';
import Nav from '../components/nav';
export default function Contact() {
	return (
		<>
			<Head>
				<link rel='icon' type='image/png' href='/images/icon.png' />
				<title>Contact | Millicent Mehndi</title>
			</Head>
			<Nav />
			<div className='banner'>
				<h1>CONTACT</h1>
			</div>
			<div className='content'>
				<h2>Millicent Sutton</h2>
				<p>To book me for a festival or commission some work get in touch with me via: </p>
				<a href='mailto:millie@millicent-mehndi.co.uk'>
					<div className='contact'>
						<i className='far fa-envelope'></i>
						<h4>
							millie@millicent-
							<br />
							mehndi.co.uk
						</h4>
					</div>
				</a>
				<a href='tel:07874816348'>
					<div className='contact'>
						<i className='fas fa-phone'></i>
						<h4>07874 816348</h4>
					</div>
				</a>
			</div>
		</>
	);
}
