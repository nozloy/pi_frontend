import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function useAnimateNavigation() {
	const [isExiting, setIsExiting] = useState(false)
	const [exitLink, setExitLink] = useState('')
	const router = useRouter()

	const handleMenuClick = (link: string) => {
		setIsExiting(true)
		setExitLink(link)
	}

	const handleAnimationComplete = () => {
		router.push(exitLink)
	}
	const handleBackClick = () => {
		router.back()
	}

	return {
		isExiting,
		handleMenuClick,
		handleAnimationComplete,
		handleBackClick,
	}
}
