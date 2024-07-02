import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menus = [
	{ link: '/rent', caption: 'Аренда' },
	{ link: '/kiosk', caption: 'Киоск' },
	{ link: '/download', caption: 'Скачать приложение' },
]

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-20 bg-slate-200'>
			{menus.map((menu, i) => (
				<div className='w-full'>
					<Link key={i} href={menu.link} passHref>
						<button className='active:bg-slate-600 bg-slate-400 shadow-2xl flex items-center justify-center mx-auto rounded-2xl w-2/3 h-32 text-center text-4xl text-white drop-shadow-md'>
							{menu.caption}
						</button>
					</Link>
				</div>
			))}
		</main>
	)
}
