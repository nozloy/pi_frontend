'use client'
import React from 'react'
import useAnimateNavigation from '../utils/useAnimateNavigation'

export default function BackButton() {
	const { handleBackClick } = useAnimateNavigation()
	return (
		<button
			onClick={handleBackClick}
			className='active:bg-neo-bg shadow-neo-outset active:shadow-neo-inset bg-neo-bg drop-shadow-xl py-4 px-10 mx-auto rounded-2xl text-4xl text-slate-600'
		>
			Назад
		</button>
	)
}
