import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
	return (
		<>
			<Head>
				<link rel='icon' type='image/png' href='/images/icon.png' />
				<title>Millicent Mehndi</title>
			</Head>
			<div class='landing'>
				<div class='landing-shadow'>
					<nav class='nav menu'>
						<Link href='/about'>
							<a>
								<span>ABOUT</span>
							</a>
						</Link>
						<Link href='/gallery'>
							<a>
								<span class='center'>GALLERY</span>
							</a>
						</Link>
						<Link href='/contact'>
							<a>
								<span>CONTACT</span>
							</a>
						</Link>
					</nav>
					<div class='burger'>
						<div class='line'></div>
						<div class='line'></div>
						<div class='line'></div>
					</div>
					<div class='title-container'>
						<div class='title'>
							<h1>MILLICENT MEHNDI</h1>
							<h3>HENNA TATTOO ARTIST</h3>
						</div>
						<div class='social'>
							<a
								href='https://www.facebook.com/Millicentmehndi'
								target='_blank'
								class='fa fa-facebook'
							></a>
							<a
								href='https://www.instagram.com/millicent_mehndi/'
								target='_blank'
								class='fa fa-instagram'
							></a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
