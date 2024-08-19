import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nextCursor = searchParams.get("next_cursor") || undefined;

  try {
    const results = await cloudinary.api.resources({
      max_results: 10,
      next_cursor: nextCursor,
    });
    console.log(results)
    return NextResponse.json({
      resources: results.resources,
      next_cursor: results.next_cursor,
    });
  } catch (error) {
    console.error("Cloudinary API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch images from Cloudinary" },
      { status: 500 }
    );
  }
}
