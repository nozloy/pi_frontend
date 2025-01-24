import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const { port, action } = await req.json()

	if (action === 'on') {
		await fetch(`http://localhost:5000/relay/on`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ port }),
		})
		return NextResponse.json({ message: `Relay ${port} turned on` })
	} else if (action === 'off') {
		await fetch(`http://localhost:5000/relay/off`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ port }),
		})
		return NextResponse.json({ message: `Relay ${port} turned off` })
	} else if (action === 'temporary_on') {
		await fetch(`http://localhost:5000/relay/temporary_on`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ port }),
		})
		return NextResponse.json({
			message: `Relay ${port} turned on for 15 seconds`,
		})
	} else {
		return NextResponse.json({ message: 'Invalid action' }, { status: 400 })
	}
}
