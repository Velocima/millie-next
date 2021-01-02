import style from '../styles/gallerySection.module.css';

export default function GallerySection({ images, onClick }) {
	return (
		<div className={style.content}>
			{images.map((image) => {
				return (
					<div className={style.imageContainer} key={image.image}>
						<img src={image.image} alt={image.alt} onClick={onClick} />
					</div>
				);
			})}
		</div>
	);
}
