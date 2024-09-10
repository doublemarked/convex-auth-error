import { convexAuth } from '@convex-dev/auth/server'
import { ConvexCredentials } from '@convex-dev/auth/providers/ConvexCredentials'
import { ConvexError } from 'convex/values'

export const { auth, signIn, signOut, store } = convexAuth({
	providers: [
		ConvexCredentials({
			id: 'simple-auth',
			authorize: async () => {
				throw new ConvexError('Testing for @sshader')
			},
		}),
	],
})