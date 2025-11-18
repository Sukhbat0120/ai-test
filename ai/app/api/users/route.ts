import { User } from "@/utils/models/user.schema";
import { title } from "process";
import connectDB from "@/utils/mongodb";

export async function GET() {
  await connectDB();

  const users = await User.find();

  return Response.json({ users });
}

export async function POST(request: Request) {
  await connectDB();

  const body = await request.json();
  console.log(body);

  return Response.json({ message: "Hello" });
}
