import React from 'react'

export default function page() {
	return (
		<div className='flex h-screen flex-col items-center justify-between p-10 bg-neo-bg gap-10'>
			<p className='bg-neo-bg rounded-2xl p-10 shadow-neo-outset active:shadow-neo-inset text-slate-600 text-4xl text-center'>
				Произошла ошибка, наши специалисты уже работают над ее устранением.
			</p>
		</div>
	)
}
