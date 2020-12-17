import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
	return (
		<>
			<Head>
				<link rel='icon' type='image/png' href='/images/icon.png' />
				<title>Millicent Mehndi</title>
			</Head>
			<div className='landing'>
				<div className='landing-shadow'>
					<nav className='nav menu'>
						<Link href='/about'>
							<a>
								<span>ABOUT</span>
							</a>
						</Link>
						<Link href='/gallery'>
							<a>
								<span className='center'>GALLERY</span>
							</a>
						</Link>
						<Link href='/contact'>
							<a>
								<span>CONTACT</span>
							</a>
						</Link>
					</nav>
					<div className='burger'>
						<div className='line'></div>
						<div className='line'></div>
						<div className='line'></div>
					</div>
					<div className='title-container'>
						<div className='title'>
							<h1>MILLICENT MEHNDI</h1>
							<h3>HENNA TATTOO ARTIST</h3>
						</div>
						<div className='social'>
							<a
								href='https://www.facebook.com/Millicentmehndi'
								target='_blank'
								className='fa fa-facebook'
							></a>
							<a
								href='https://www.instagram.com/millicent_mehndi/'
								target='_blank'
								className='fa fa-instagram'
							></a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
