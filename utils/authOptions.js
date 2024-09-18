import connectDB from "@/config/database";
import User from "@/models/User";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      // 1. Connect to database
      await connectDB();
      // 2. Check if user exists
      const userExists = await User.findOne({ email: profile.email });
      // 3. If not, then add user to database
      if (!userExists) {
        // Truncate user name if too long
        const username = profile.name.slice(0, 20);

        try {
          await User.create({
            email: profile.email,
            username,
            image: profile.picture,
          });
          console.log("User created successfully");
        } catch (error) {
          console.error("Error creating user:", error);
        }
      }
      // 4. Return true to allow sign in
      return true;
    },
    // Modifies the session object
    async session({ session }) {
      try {
        const user = await User.findOne({ email: session.user.email });
        if (!user) {
          console.error("User not found:", session.user.email);
          return null; // Or handle this case appropriately
        }
        session.user.id = user._id.toString();
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  },
};
