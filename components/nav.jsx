import Link from 'next/link';

export default function Nav() {
	return (
		<nav class='nav'>
			<div class='logo'>
				<Link href='/'>
					<a>
						<h3>MILLICENT MEHNDI</h3>
					</a>
				</Link>
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
			<div class='burger'>
				<div class='line'></div>
				<div class='line'></div>
				<div class='line'></div>
			</div>
			<ul class='menu'>
				<li>
					<Link href='/about'>
						<a>ABOUT</a>
					</Link>
				</li>
				<li>
					<Link href='/gallery'>
						<a>GALLERY</a>
					</Link>
				</li>
				<li>
					<Link href='/contact'>
						<a>CONTACT</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
