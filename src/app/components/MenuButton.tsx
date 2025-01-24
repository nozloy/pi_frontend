import React from 'react'
import { motion } from 'framer-motion'
import { MenuButtonProps } from '../types'

const item = {
	hidden: {
		x: -10,
		opacity: 0,
		transition: { ease: 'easeInOut', duration: 0.75 },
	},
	show: { x: 0, opacity: 1, transition: { ease: 'easeInOut', duration: 0.75 } },
	exit: {
		x: -10,
		opacity: 0,
		transition: { ease: 'easeInOut', duration: 0.75 },
	},
}

export default function MenuButton({ caption, onClick }: MenuButtonProps) {
	return (
		<motion.div className='w-full' variants={item}>
			<button
				className='active:bg-neo-bg shadow-neo-outset active:shadow-neo-inset bg-neo-bg drop-shadow-xl flex items-center justify-center mx-auto rounded-2xl w-2/3 h-32 text-center text-4xl text-slate-600 font-bold'
				onClick={onClick}
			>
				{caption}
			</button>
		</motion.div>
	)
}
