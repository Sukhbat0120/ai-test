import { InferenceClient } from "@huggingface/inference";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

const HF_TOKEN = process.env.HF_TOKEN;
const inference = new InferenceClient(HF_TOKEN);

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json({ error: "no image provided" }, { status: 404 });
    }
  } catch (error) {}
};
