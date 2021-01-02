import style from '../styles/modal.module.css';

export default function Modal({ images, isVisible, onClose, nextImage, prevImage, isFirstImage }) {
	const modalStyle = {
		opacity: isVisible ? 1 : 0,
		pointerEvents: isVisible ? 'all' : 'none',
	};
	const imageOneStyle = {
		opacity: isFirstImage ? 1 : 0,
	};
	const imageTwoStyle = {
		opacity: isFirstImage ? 0 : 1,
	};
	return (
		<div className={style.modal} style={modalStyle}>
			<div className={style.close} onClick={onClose}>
				X
			</div>
			<div className={style.left} onClick={prevImage}>
				<span>&lt;</span>
			</div>
			<img
				className={style.image}
				src={images.imageOne.image}
				alt={images.imageOne.alt}
				style={imageOneStyle}
			/>
			<img
				className={style.image}
				src={images.imageTwo.image}
				alt={images.imageTwo.alt}
				style={imageTwoStyle}
			/>
			<div className={style.right} onClick={nextImage}>
				<span>&gt;</span>
			</div>
		</div>
	);
}
