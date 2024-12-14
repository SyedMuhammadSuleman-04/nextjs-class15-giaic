import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json([
    {
      id: 1,
      name: "The Day",
      author: "Ali",
    },
    {
      id: 2,
      name: "The Night",
      author: "Aslam",
    },
  ]);
};

export const POST = () => {
  return NextResponse.json({
    message: "Success",
  });
};
