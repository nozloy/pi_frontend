'use client'
import React from 'react'
import QRCodeSVG from 'qrcode.react'
import BackButton from '../components/BackButton'
import { env } from 'process'

export default function page() {
	const ID = env.SHAREMATE_ID?.toString() || '901'
	return (
		<div className='flex h-screen flex-col items-center justify-between p-10 bg-slate-200 gap-10'>
			<div className='flex flex-col justify-between gap-5 bg-neo-bg rounded-2xl p-5 shadow-neo-outset'>
				<h1 className='text-4xl text-slate-600 text-center font-bold'>
					КОД ЛАРЬКА
				</h1>
				<QRCodeSVG
					className='rounded-2xl'
					value={ID}
					size={400}
					bgColor='#e2e8f0'
					fgColor='#475569'
					level='H'
				/>
			</div>
			<BackButton />
		</div>
	)
}
