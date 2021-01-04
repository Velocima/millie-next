import Head from 'next/head';
import Nav from '../components/nav';
import GallerySection from '../components/gallerySection';
import Modal from '../components/Modal';
import { useState, useEffect } from 'react';
import style from '../styles/gallery.module.css';

export default function Gallery() {
	const gallerySection1 = [
		{ image: '/images/HENNA/003-full.jpg', alt: '' },
		{ image: '/images/HENNA/005-full.jpg', alt: '' },
		{ image: '/images/HENNA/007-full.jpg', alt: '' },
		{ image: '/images/HENNA/0012-full.jpg', alt: '' },
		{ image: '/images/HENNA/0014-full.jpg', alt: '' },
		{ image: '/images/HENNA/0029-full.jpg', alt: '' },
		{ image: '/images/HENNA/0019-full.jpg', alt: '' },
		{ image: '/images/HENNA/0020-full.jpg', alt: '' },
		{ image: '/images/HENNA/0021-full.jpg', alt: '' },
	];
	const gallerySection2 = [
		{ image: '/images/HENNA/101-full.jpg', alt: '' },
		{ image: '/images/HENNA/102-full.jpg', alt: '' },
		{ image: '/images/HENNA/103-full.jpg', alt: '' },
		{ image: '/images/HENNA/104-full.jpg', alt: '' },
		{ image: '/images/HENNA/105-full.jpg', alt: '' },
		{ image: '/images/HENNA/106-full.jpg', alt: '' },
		{ image: '/images/HENNA/107-full.jpg', alt: '' },
		{ image: '/images/HENNA/108-full.jpg', alt: '' },
		{ image: '/images/HENNA/109-full.jpg', alt: '' },
		{ image: '/images/HENNA/110-full.jpg', alt: '' },
		{ image: '/images/HENNA/111-full.jpg', alt: '' },
		{ image: '/images/HENNA/112-full.jpg', alt: '' },
	];
	const gallerySection3 = [
		{ image: '/images/HENNA/113-full.jpg', alt: '' },
		{ image: '/images/HENNA/114-full.jpg', alt: '' },
		{ image: '/images/HENNA/115-full.jpg', alt: '' },
		{ image: '/images/HENNA/116-full.jpg', alt: '' },
		{ image: '/images/HENNA/117-full.jpg', alt: '' },
		{ image: '/images/HENNA/118-full.jpg', alt: '' },
		{ image: '/images/HENNA/119-full.jpg', alt: '' },
		{ image: '/images/HENNA/130-full.jpg', alt: '' },
		{ image: '/images/HENNA/131-full.jpg', alt: '' },
		{ image: '/images/HENNA/132-full.jpg', alt: '' },
		{ image: '/images/HENNA/133-full.jpg', alt: '' },
		{ image: '/images/HENNA/135-full.jpg', alt: '' },
	];
	const gallerySection4 = [
		{ image: '/images/HENNA/125.jpg', alt: '' },
		{ image: '/images/HENNA/Banner-Contact-full.jpg', alt: '' },
		{ image: '/images/HENNA/Banner-Gallery-full.jpg', alt: '' },
		{ image: '/images/HENNA/126-full.jpg', alt: '' },
		{ image: '/images/HENNA/127-full.jpg', alt: '' },
		{ image: '/images/HENNA/128-full.jpg', alt: '' },
	];
	const gallerySection5 = [
		{ image: '/images/HENNA/120-full.jpg', alt: '' },
		{ image: '/images/HENNA/121-full.jpg', alt: '' },
		{ image: '/images/HENNA/122-full.jpg', alt: '' },
		{ image: '/images/HENNA/123-full.jpg', alt: '' },
		{ image: '/images/HENNA/124-full.jpg', alt: '' },
		{ image: '/images/HENNA/Grey-6-full.jpg', alt: '' },
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
		const src = target.src.slice(target.src.indexOf('/images'));
		setIsFirstImage(true);
		setModalImage({
			imageOne: { image: src, alt: target.alt },
			imageTwo: { image: src, alt: target.alt },
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
	}, [handleCloseModal, handleModalLeftClick, handleModalRightClick, modalImage]);
	return (
		<>
			<Head>
				<link rel='icon' type='image/png' href='/images/icon.png' />
				<title>Gallery | Millicent Mehndi</title>
				<meta
					name='description'
					content='A photo gallery showcasing the intricate and original Henna tattoo designs created by Millicent Mehndi.'
				/>
			</Head>
			<Nav />
			<div className={style.banner}>
				<h1>GALLERY</h1>
			</div>
			<GallerySection images={gallerySection1} onClick={handleImageClick} />
			<div
				className={style.headline}
				style={{ backgroundImage: "url('/images/HENNA/Center-1.jpg')" }}
			>
				<h2>UNIQUE SETUP</h2>
				<h4>VINTAGE VW CAMPERVAN</h4>
			</div>
			<GallerySection images={gallerySection2} onClick={handleImageClick} />
			<div
				className={style.headline}
				style={{ backgroundImage: "url('/images/HENNA/Center-2.jpg')" }}
			>
				<h2>BESPOKE DESIGNS</h2>
				<h4>FOR EVERY OCCASION</h4>
			</div>
			<GallerySection images={gallerySection3} onClick={handleImageClick} />
			<div
				className={`${style.headline} ${style.quote}`}
				style={{ backgroundImage: "url('/images/HENNA/125.jpg')" }}
			>
				<h4>“Beautifully intricate henna tattoo, leaving a lovely defined stain.”</h4>
				<p>— Caroline Scamell</p>
			</div>
			<GallerySection images={gallerySection4} onClick={handleImageClick} />
			<div
				className={`${style.headline} ${style.quote}`}
				style={{ backgroundImage: "url('/images/HENNA/129.jpg')" }}
			>
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
