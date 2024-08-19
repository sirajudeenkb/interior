"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import HeaderComponent from "../Components/HeaderComponent";
import ProjectsImage from "../../public/images/Projects.jpg";

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
}

interface CloudinaryResponse {
  resources: CloudinaryImage[];
  next_cursor: string | undefined;
}

const Projects: React.FC = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchImages = async (cursor?: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/images${cursor ? `?next_cursor=${cursor}` : ""}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data: CloudinaryResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching images:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const loadInitialImages = useCallback(async () => {
    const data = await fetchImages();
    if (data) {
      setImages(data.resources);
      setNextCursor(data.next_cursor);
      setHasMore(!!data.next_cursor);
    }
  }, []);

  const loadMoreImages = useCallback(async () => {
    if (!nextCursor || loading) return;
    const data = await fetchImages(nextCursor);
    if (data) {
      setImages((prevImages) => [...prevImages, ...data.resources]);
      setNextCursor(data.next_cursor);
      setHasMore(!!data.next_cursor);
    }
  }, [nextCursor, loading]);

  useEffect(() => {
    loadInitialImages();
  }, [loadInitialImages]);

  const lastImageElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreImages();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMoreImages]
  );

  const getImageSize = (index: number) => {
    if (index % 5 === 0 || index % 5 === 3) {
      return "large";
    }
    return "small";
  };

  return (
    <div>
      <HeaderComponent
        imageSrc={ProjectsImage}
        title="Our Projects"
        description="Explore our portfolio of completed projects and see our work in action."
      />
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {images.map((image, index) => (
            <div
              key={`${image.public_id}-${index}`}
              ref={index === images.length - 1 ? lastImageElementRef : null}
              className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                getImageSize(index) === "large" ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={image.secure_url}
                alt={image.public_id}
                layout="responsive"
                width={getImageSize(index) === "large" ? 400 : 200}
                height={getImageSize(index) === "large" ? 400 : 200}
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/fallback.jpg";
                }}
              />
            </div>
          ))}
        </div>
        {loading && (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
