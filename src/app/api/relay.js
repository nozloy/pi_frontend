// pages/api/relay.js
export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { port, action } = req.body

		if (action === 'on') {
			await fetch(`http://localhost:5000/relay/on`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ port }),
			})
			res.status(200).json({ message: `Relay ${port} turned on` })
		} else if (action === 'off') {
			await fetch(`http://localhost:5000/relay/off`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ port }),
			})
			res.status(200).json({ message: `Relay ${port} turned off` })
		} else if (action === 'temporary_on') {
			await fetch(`http://localhost:5000/relay/temporary_on`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ port }),
			})
			res
				.status(200)
				.json({ message: `Relay ${port} turned on for 15 seconds` })
		} else {
			res.status(400).json({ message: 'Invalid action' })
		}
	} else {
		res.status(405).json({ message: 'Method Not Allowed' })
	}
}
