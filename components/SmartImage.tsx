// components/SmartImage.tsx
import Image, { ImageProps } from 'next/image';

// Require `alt` to satisfy a11y lint rule and improve DX
export type SmartImageProps = ImageProps & { alt: string };

export default function SmartImage({ alt, priority, sizes, quality, ...rest }: SmartImageProps) {
  return (
    <Image
      alt={alt}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      sizes={sizes ?? '100vw'}
      quality={quality ?? 90}
      {...rest}
    />
  );
}