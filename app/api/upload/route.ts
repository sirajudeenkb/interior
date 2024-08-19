import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const uploadPromises: any[] = [];

    formData.forEach((value, key) => {
      if (value instanceof File) {
        uploadPromises.push(
          (async () => {
            const arrayBuffer = await value.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            return new Promise<string>((resolve, reject) => {
              cloudinary.uploader
                .upload_stream(
                  { upload_preset: "t2mnmqoq" },
                  (error, result) => {
                    if (error) reject(error);
                    else resolve(result?.secure_url || "");
                  }
                )
                .end(buffer);
            });
          })()
        );
      }
    });

    const urls = await Promise.all(uploadPromises);
    return NextResponse.json({ urls });
  } catch (error) {
    console.error("Error in upload route:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
