// payment accept kerne k liye:   stripe, lemon squeezy,
// store images ==>>

import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    message: "Hello World",
  });
};
