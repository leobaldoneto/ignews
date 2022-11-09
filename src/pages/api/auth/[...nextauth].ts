import { query as q } from 'faunadb'

import NextAuth from "next-auth"
import GitHubProvider from 'next-auth/providers/github'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.SIGNING_KEY,
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'), 
                  q.Casefold(email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } },
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'), 
                q.Casefold(email)
              )
            )
          )
        )

        return true
      } catch(e) {
        console.error(`Erro no Fauna: ${e.message}`)

        return false
      }
    }
  }
})