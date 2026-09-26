"use client";

import Image from "next/image";
import { useState } from "react";

type SmartImageProps = {
  src?: string | null;
  alt: string;
  /** CSS aspect-ratio for the frame, e.g. "16/10". Sizing never depends on the file's intrinsic size. */
  ratio?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
};

const PLACEHOLDER = /^(your_|path_to|todo|tbd|#)|_here|placeholder/i;

function isUsable(src?: string | null): src is string {
  const value = src?.trim();
  if (!value) return false;
  return !PLACEHOLDER.test(value);
}

/**
 * Renders an image inside a fluid, ratio-driven frame.
 * Renders nothing at all when the source is missing, a leftover placeholder,
 * or fails to load — no broken icon, no grey box.
 */
export default function SmartImage({
  src,
  alt,
  ratio = "16/10",
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
}: SmartImageProps) {
  const [broken, setBroken] = useState(false);

  if (!isUsable(src) || broken) return null;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setBroken(true)}
        className={`object-cover transition-transform duration-700 ${imageClassName}`}
      />
    </div>
  );
}

export { isUsable as hasImage };
