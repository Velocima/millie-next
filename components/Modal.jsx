import style from '../styles/modal.module.css';

export default function Modal({ image, isVisible }) {
	return (
		<div className='modal'>
			<div className='close'>X</div>
			<div className='left'>
				<span>&lt;</span>
			</div>
			<img className='image-1' src={image} alt='' />
			<div className='right'>
				<span>&gt;</span>
			</div>
		</div>
	);
}
