import Head from 'next/head';
import Nav from '../components/nav';
// import '../styles/about.css';
{
	/* 
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://use.typekit.net/bkw3yql.css">
<!-- Icons -->
<script src="https://kit.fontawesome.com/be80390338.js" crossorigin="anonymous"></script>
<!-- Title -->
	*/
}

export default function About() {
	return (
		<div>
			<Head>
				<link rel='icon' type='image/png' href='/images/icon.png' />
				<title>About | Millicent Mehndi</title>
			</Head>
			<Nav />
			<div class='banner'>
				<h1>ABOUT</h1>
			</div>
			<div class='content'>
				<img src='/images/profile.jpg' alt='Henna artist Millie' />
				<p>
					<span>Millie Sutton</span>
					<br />
					<br />
					My practise is engaged with hybridising the traditional henna patterns with
					contemporary illustration. I do not work from stencils; therefore, each design
					is freehand and unique to the client. I only use natural brown lavender infused
					henna for all my designs
					<br />
					<br />
					After completing my BA (Hons) Contemporary Design degree with a 1st Class
					honours in 2020. I will be continuing my education within the arts at Central
					Saint Martins. My henna work is seasonal and has been a skill I have shared
					professionally since 2015.
					<br />
					<br />
					Working from a vintage VW Campervan, I usually trade at festivals, local events
					and private parties. Festivals include: Camper Calling, Nozstock, Live on the
					Wye and Rock the Farm.
				</p>
			</div>
		</div>
	);
}
