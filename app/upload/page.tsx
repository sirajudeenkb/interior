"use client";
import { useState, useRef, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ImageUpload = () => {
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const removeImage = (index: number) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleUpload = async () => {
    if (images.length === 0) {
      Swal.fire({
        title: "Error!",
        text: "Please select at least one image to upload.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`file${index}`, image.file);
      });

      const response = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data.urls);
      Swal.fire({
        title: "Success!",
        text: "Images uploaded successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setImages([]);
    } catch (error) {
      console.error("Error uploading the images", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to upload images. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#1F1F1F]">
            Image Upload
          </h2>
          <div className="mb-6">
            <input
              type="file"
              multiple
              onChange={handleChange}
              ref={fileInputRef}
              className="hidden"
            />
            <button
              onClick={triggerFileInput}
              className="w-full bg-[#1F1F1F] hover:bg-[#444444] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            >
              Select Images
            </button>
            {images.length > 0 && (
              <p className="mt-2 text-sm text-gray-600">
                {images.length} image(s) selected
              </p>
            )}
          </div>
          {images.length > 0 && (
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-2">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <button
            onClick={handleUpload}
            disabled={uploading || images.length === 0}
            className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ${
              (uploading || images.length === 0) &&
              "opacity-50 cursor-not-allowed"
            }`}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
