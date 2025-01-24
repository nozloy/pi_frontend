// src/app/rent/page.tsx
'use client'

import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import NumericKeypad from '../components/NumericKeypad'
import { checkRentCode } from '@/lib/prisma'

export default function Rent() {
	const checkCode = async (code: number) => {
		const result = await checkRentCode(code)
		if (result) {
			alert('Код верный, ячейка сейчас откроется')
		} else {
			alert('Код неверный или срок действия истек')
		}
	}
	return (
		<div className='flex flex-col items-center justify-center h-screen p-10 gap-5 bg-neo-bg'>
			<NumericKeypad onSubmit={code => checkCode(Number(code))} />
		</div>
	)
}
