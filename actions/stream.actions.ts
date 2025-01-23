"use server";

import { currentUser as clerkCurrentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

async function currentUser() {
  return await clerkCurrentUser();
}

export const tokenProvider = async () => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("User is not authenticated");
    if (!STREAM_API_KEY) throw new Error("Stream API key secret is missing");
    if (!STREAM_API_SECRET) throw new Error("Stream API secret is missing");

    const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

    const expirationTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour expiration
    const issuedAt = Math.floor(Date.now() / 1000) - 60; // Issued 1 minute ago

    const token = streamClient.createToken(user.id, expirationTime, issuedAt);

    return token;
  } catch (error) {
    console.error("Error in tokenProvider:", error);
    throw error;
  }
};
