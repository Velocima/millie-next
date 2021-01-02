import Head from 'next/head';
import Nav from '../components/nav';
import GallerySection from '../components/gallerySection';
import Modal from '../components/Modal';
import { useState, useEffect } from 'react';
import next from 'next';

export default function Gallery() {
	const gallerySection1 = [
		{ image: '/images/HENNA/003.jpg', alt: '' },
		{ image: '/images/HENNA/005.jpg', alt: '' },
		{ image: '/images/HENNA/007.jpg', alt: '' },
		{ image: '/images/HENNA/0012.jpg', alt: '' },
		{ image: '/images/HENNA/0014.jpg', alt: '' },
		{ image: '/images/HENNA/0029.jpg', alt: '' },
		{ image: '/images/HENNA/0019.jpg', alt: '' },
		{ image: '/images/HENNA/0020.jpg', alt: '' },
		{ image: '/images/HENNA/0021.jpg', alt: '' },
	];
	const gallerySection2 = [
		{ image: '/images/HENNA/101.jpg', alt: '' },
		{ image: '/images/HENNA/102.jpg', alt: '' },
		{ image: '/images/HENNA/103.jpg', alt: '' },
		{ image: '/images/HENNA/104.jpg', alt: '' },
		{ image: '/images/HENNA/105.jpg', alt: '' },
		{ image: '/images/HENNA/106.jpg', alt: '' },
		{ image: '/images/HENNA/107.jpg', alt: '' },
		{ image: '/images/HENNA/108.jpg', alt: '' },
		{ image: '/images/HENNA/109.jpg', alt: '' },
		{ image: '/images/HENNA/110.jpg', alt: '' },
		{ image: '/images/HENNA/111.jpg', alt: '' },
		{ image: '/images/HENNA/112.jpg', alt: '' },
	];
	const gallerySection3 = [
		{ image: '/images/HENNA/113.jpg', alt: '' },
		{ image: '/images/HENNA/114.jpg', alt: '' },
		{ image: '/images/HENNA/115.jpg', alt: '' },
		{ image: '/images/HENNA/116.jpg', alt: '' },
		{ image: '/images/HENNA/117.jpg', alt: '' },
		{ image: '/images/HENNA/118.jpg', alt: '' },
		{ image: '/images/HENNA/119.jpg', alt: '' },
		{ image: '/images/HENNA/130.jpg', alt: '' },
		{ image: '/images/HENNA/131.jpg', alt: '' },
		{ image: '/images/HENNA/132.jpg', alt: '' },
		{ image: '/images/HENNA/133.jpg', alt: '' },
		{ image: '/images/HENNA/135.jpg', alt: '' },
	];
	const gallerySection4 = [
		{ image: '/images/HENNA/Banner-About.jpg', alt: '' },
		{ image: '/images/HENNA/Banner-Contact.jpg', alt: '' },
		{ image: '/images/HENNA/Banner-Gallery.jpg', alt: '' },
		{ image: '/images/HENNA/126.jpg', alt: '' },
		{ image: '/images/HENNA/127.jpg', alt: '' },
		{ image: '/images/HENNA/128.jpg', alt: '' },
	];
	const gallerySection5 = [
		{ image: '/images/HENNA/120.jpg', alt: '' },
		{ image: '/images/HENNA/121.jpg', alt: '' },
		{ image: '/images/HENNA/122.jpg', alt: '' },
		{ image: '/images/HENNA/123.jpg', alt: '' },
		{ image: '/images/HENNA/124.jpg', alt: '' },
		{ image: '/images/HENNA/grey-6.jpg', alt: '' },
	];

	const allGalleryImages = [
		...gallerySection1,
		...gallerySection2,
		...gallerySection3,
		...gallerySection4,
		...gallerySection5,
	];

	// Modal related state and functions
	const [modalImage, setModalImage] = useState({
		imageOne: { image: '', alt: '' },
		imageTwo: { image: '', alt: '' },
	});
	const [isImageChanging, setIsImageChanging] = useState(false);
	const [isFirstImage, setIsFirstImage] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCloseModal = () => {
		setIsFirstImage(true);
		setIsModalOpen(false);
	};

	const handleImageClick = ({ target }) => {
		setIsFirstImage(true);
		setModalImage((prevState) => {
			return { ...prevState, imageOne: { image: target.src, alt: target.alt } };
		});
		setIsModalOpen(true);
	};

	const getNextImage = () => {
		const currentImageSrc = isFirstImage
			? modalImage.imageOne.image
			: modalImage.imageTwo.image;
		let index = allGalleryImages.findIndex((image) => image.image === currentImageSrc);
		if (index === allGalleryImages.length - 1) {
			return allGalleryImages[0];
		} else {
			return allGalleryImages[index + 1];
		}
	};
	const getPrevImage = () => {
		const currentImageSrc = isFirstImage
			? modalImage.imageOne.image
			: modalImage.imageTwo.image;
		let index = allGalleryImages.findIndex((image) => image.image === currentImageSrc);

		if (index === 0) {
			return allGalleryImages[allGalleryImages.length - 1];
		} else {
			return allGalleryImages[index - 1];
		}
	};

	const handleModalRightClick = () => {
		if (isImageChanging) return;
		const nextImage = getNextImage();
		setIsImageChanging(true);
		if (isFirstImage) {
			setModalImage((prevState) => {
				return { ...prevState, imageTwo: { image: nextImage.image, alt: nextImage.alt } };
			});
		} else {
			setModalImage((prevState) => {
				return { ...prevState, imageOne: { image: nextImage.image, alt: nextImage.alt } };
			});
		}
		setIsFirstImage((prevState) => !prevState);
		setTimeout(() => {
			setIsImageChanging(false);
		}, 500);
	};
	const handleModalLeftClick = () => {
		if (isImageChanging) return;
		const prevImage = getPrevImage();
		setIsImageChanging(true);
		if (isFirstImage) {
			setModalImage((prevState) => {
				return { ...prevState, imageTwo: { image: prevImage.image, alt: prevImage.alt } };
			});
		} else {
			setModalImage((prevState) => {
				return { ...prevState, imageOne: { image: prevImage.image, alt: prevImage.alt } };
			});
		}
		setIsFirstImage((prevState) => !prevState);
		setTimeout(() => {
			setIsImageChanging(false);
		}, 500);
	};

	useEffect(() => {
		const onKeyPress = ({ key }) => {
			if (key === 'ArrowLeft') handleModalLeftClick();
			if (key === 'ArrowRight') handleModalRightClick();
			if (key === 'Escape') handleCloseModal();
		};
		document.addEventListener('keydown', onKeyPress);
		return () => {
			document.removeEventListener('keydown', onKeyPress);
		};
	}, [handleCloseModal, handleModalLeftClick, handleModalRightClick]);
	return (
		<>
			<Head>
				<link rel='icon' type='image/png' href='/images/icon.png' />
				<title>Gallery | Millicent Mehndi</title>
			</Head>
			<Nav />
			<div className='banner'>
				<h1>GALLERY</h1>
			</div>
			<GallerySection images={gallerySection1} onClick={handleImageClick} />
			<div className='headline headline-1'>
				<h2>UNIQUE SETUP</h2>
				<h4>VINTAGE VW CAMPERVAN</h4>
			</div>
			<GallerySection images={gallerySection2} onClick={handleImageClick} />
			<div className='headline headline-2'>
				<h2>BESPOKE DESIGNS</h2>
				<h4>FOR EVERY OCCASION</h4>
			</div>
			<GallerySection images={gallerySection3} onClick={handleImageClick} />
			<div className='quote headline-3 headline'>
				<h4>“Beautifully intricate henna tattoo, leaving a lovely defined stain.”</h4>
				<p>— Caroline Scamell</p>
			</div>
			<GallerySection images={gallerySection4} onClick={handleImageClick} />
			<div className='headline-4 quote headline'>
				<h4>
					“I can’t quite describe Millie’s amazing talent with henna, she is phenomenal. ”
				</h4>
				<p>— Hannah Jones</p>
			</div>
			<GallerySection images={gallerySection5} onClick={handleImageClick} />
			<Modal
				images={modalImage}
				isFirstImage={isFirstImage}
				isVisible={isModalOpen}
				onClose={handleCloseModal}
				prevImage={handleModalLeftClick}
				nextImage={handleModalRightClick}
			/>
		</>
	);
}
