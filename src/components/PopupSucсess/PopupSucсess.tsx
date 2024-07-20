import { motion } from 'framer-motion';
import React from 'react';

import Image from 'next/image';

const PopupSucсess: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
			className='popup'
		>
			<div className='popup-wrap'>
				<Image
					className='popup-image'
					src='/icons/icon-success-check.svg'
					width={20}
					height={21}
					priority
					alt='Picture of the success'
				/>
				<div className='popup-title'>Message Sent!</div>
			</div>
			<div className='popup-desc'>
				{`Thanks for completing the form. We'll be in touch soon!`}
			</div>
		</motion.div>
	);
};

export default PopupSucсess;
