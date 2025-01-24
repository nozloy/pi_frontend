'use client'
import React from 'react'
import QRCodeSVG from 'qrcode.react'
import { env } from 'process'
import BackButton from '../components/BackButton'

export default function page() {
	const url = process.env.FRONTEND_URL?.toString() || '404'
	return (
		<div className='flex h-screen flex-col items-center justify-between p-10 bg-neo-bg gap-10'>
			<QRCodeSVG
				className='bg-neo-bg rounded-2xl p-10 shadow-neo-outset'
				value={url}
				size={400}
				bgColor='#e2e8f0'
				fgColor='#475569'
				level='H'
			/>
			<BackButton />
		</div>
	)
}
