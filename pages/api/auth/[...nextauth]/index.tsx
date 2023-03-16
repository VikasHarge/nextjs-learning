import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'



export const authOptions = {
    providers : [
        GithubProvider({
            clientId : process.env.GITHUBID as string,
            clientSecret : process.env.GITHUBSECRET as string,
        })
    ]
}


export default NextAuth(authOptions)

