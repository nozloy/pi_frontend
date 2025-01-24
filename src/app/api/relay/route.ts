import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const { port, action } = req.body

	if (action === 'on') {
		await fetch(`http://localhost:5000/relay/on`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ port }),
		})
		return res.json({ message: `Relay ${port} turned on` })
	} else if (action === 'off') {
		await fetch(`http://localhost:5000/relay/off`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ port }),
		})
		return res.json({ message: `Relay ${port} turned off` })
	} else if (action === 'temporary_on') {
		await fetch(`http://localhost:5000/relay/temporary_on`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ port }),
		})
		return res.json({
			message: `Relay ${port} turned on for 15 seconds`,
		})
	} else {
		return res.status(400).json({ message: 'Invalid action' })
	}
}
