import Image, { ImageProps } from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function AppImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === 'string' ? assetPath(src) : src;
  return <Image src={resolvedSrc} {...props} />;
}
