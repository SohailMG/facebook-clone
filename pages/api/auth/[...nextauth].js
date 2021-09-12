import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: "380619236931350",
      clientSecret: "cf0ea126c62733ee19eff8dadf23038c",
    }),
  ],
});