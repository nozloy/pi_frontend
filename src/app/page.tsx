'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MenuList from './components/MenuList'
import useAnimateNavigation from './utils/useAnimateNavigation'
import Spinner from './components/Spinner'
import { menus } from './constants'

const staggerContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
}

export default function Home() {
	const { isExiting, handleMenuClick, handleAnimationComplete } =
		useAnimateNavigation()

	return (
		<AnimatePresence>
			<motion.div
				className={`flex min-h-screen flex-col items-center justify-${
					isExiting ? 'center' : 'between'
				} p-20 bg-slate-200`}
				variants={!isExiting ? staggerContainer : undefined}
				initial='hidden'
				animate='show'
				exit='hidden'
				onAnimationComplete={isExiting ? handleAnimationComplete : undefined}
			>
				{!isExiting ? (
					<MenuList menus={menus} handleMenuClick={handleMenuClick} />
				) : (
					<Spinner />
				)}
			</motion.div>
		</AnimatePresence>
	)
}
