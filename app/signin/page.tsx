'use client'

import { useAuthActions } from '@convex-dev/auth/react'
import { useState } from 'react'

export default function SignInPage() {
	const { signIn } = useAuthActions()
	const [result, setResult] = useState<string>()
	const [error, setError] = useState<string>()

	const doit = () => {
		void signIn('simple-auth', { email: 'test@domain.com' })
			.then((r) => setResult(`All clear: ${r.signingIn} ; ${r.redirect}`))
			.catch((error) => {
				console.error('Error:', error)
				setError(error && error.message)
			})
	}

	return (

		<div>
			<h1>Sign In Test</h1>
				{result && (
					<div style={{color: "blue"}}>
						{result}
					</div>
					)}
				{error && (
						<div style={{color: "red"}}>
							{error}
						</div>
					)}
				
					<button onClick={() => doit()}>
						signIn()
					</button>
		</div>
	)
}