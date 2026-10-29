// components/ImagePlaceholder.tsx
// A soft coloured box that stands in for a photo until real images exist.
//
// HOW TO SWAP IN A REAL IMAGE LATER:
//   1. Put the image file in the /public folder (e.g. /public/hero.jpg)
//   2. Replace <ImagePlaceholder ... /> with:
//        import Image from "next/image";
//        <Image src="/hero.jpg" alt="Describe the image" width={800} height={600} />

import { Image as ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;      // text shown inside, e.g. "Hero photo"
  className?: string; // extra Tailwind classes (size, aspect ratio, rounding)
};

export default function ImagePlaceholder({
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-lagoon via-mist to-lavender text-moss ${className}`}
      role="img"
      aria-label={`Placeholder for image: ${label}`}
    >
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
      <span className="px-2 text-center text-sm">[Image: {label}]</span>
    </div>
  );
}
