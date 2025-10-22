import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import NextAuth from "next-auth";
import { prisma } from './lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { LoginSchema } from './app/utils/validationSchemas';
import Credentials from 'next-auth/providers/credentials';
import * as bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) session.user.id = token.sub;
      return session;
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [ 
    Credentials({
      async authorize(data) {
        const validation = LoginSchema.safeParse(data);
        if(validation.success) {
          const { email, password } = validation.data;
          const user = await prisma.user.findUnique({ where: { email } });
          if(!user || !user.password) return null;

          const isPasswordMatch = await bcrypt.compare(password, user.password);
          if(isPasswordMatch) return user;
        }
        return null;
      }
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }), Google ],
})