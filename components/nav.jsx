export default function Nav() {
	return (
		<nav class='nav'>
			<div class='logo'>
				<a href='index.html'>
					<h3>MILLICENT MEHNDI</h3>
				</a>
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
					<a href='#'>ABOUT</a>
				</li>
				<li>
					<a href='gallery.html'>GALLERY</a>
				</li>
				<li>
					<a href='contact.html'>CONTACT</a>
				</li>
			</ul>
		</nav>
	);
}
