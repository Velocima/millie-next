import { useState } from 'react';
import { IconContext } from 'react-icons';
import style from '../styles/icons.module.css';

export default function Icon({ color, children, href, text }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const iconStyle = {
		opacity: isHovered ? 0.7 : 1,
		backgroundColor: color,
	};

	return (
		<a
			className={style.link}
			href={href}
			target='_blank'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className={style.icon} style={iconStyle}>
				<IconContext.Provider value={{ color: 'white', size: '30px' }}>
					{children}
				</IconContext.Provider>
			</div>
			{text}
		</a>
	);
}
