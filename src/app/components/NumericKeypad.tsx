import React, { useState } from 'react'

interface NumericKeypadProps {
	onSubmit: (code: string) => void
	codeLength?: number // длина кода, по умолчанию 4
}

const NumericKeypad: React.FC<NumericKeypadProps> = ({
	onSubmit,
	codeLength = 4,
}) => {
	const [code, setCode] = useState<string>('')

	const handleKeyClick = (digit: string) => {
		if (code.length < codeLength) {
			setCode(prev => prev + digit)
		}
	}

	const handleDelete = () => {
		setCode(prev => prev.slice(0, -1))
	}

	const handleSubmit = () => {
		if (code.length === codeLength) {
			onSubmit(code)
			setCode('') // Сброс ввода
		}
	}

	return (
		<div style={styles.container}>
			{/* Отображение текущего кода */}
			<div style={styles.codeDisplay}>
				{Array.from({ length: codeLength }).map((_, i) => (
					<span key={i} style={styles.digit}>
						{code[i] || '_'}
					</span>
				))}
			</div>

			{/* Клавиатура */}
			<div style={styles.keypad}>
				{[...Array(9)].map((_, i) => (
					<button
						key={i + 1}
						style={styles.key}
						onClick={() => handleKeyClick((i + 1).toString())}
					>
						{i + 1}
					</button>
				))}
				<button style={styles.key} onClick={handleDelete}>
					⌫
				</button>
				<button style={styles.key} onClick={() => handleKeyClick('0')}>
					0
				</button>
				<button style={styles.key} onClick={handleSubmit}>
					✓
				</button>
			</div>
		</div>
	)
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		gap: '16px',
	},
	codeDisplay: {
		display: 'flex',
		gap: '8px',
		fontSize: '24px',
		fontWeight: 'bold',
	},
	digit: {
		borderBottom: '2px solid black',
		width: '24px',
		textAlign: 'center' as const,
	},
	keypad: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: '8px',
	},
	key: {
		fontSize: '18px',
		padding: '12px',
		textAlign: 'center' as const,
		backgroundColor: '#f0f0f0',
		border: '1px solid #ccc',
		borderRadius: '8px',
		cursor: 'pointer',
	},
}

export default NumericKeypad
