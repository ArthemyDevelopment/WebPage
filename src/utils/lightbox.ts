import type { ImageMetadata } from 'astro';

export type MediaType = 'image' | 'youtube' | 'drive';

const YOUTUBE_PATTERNS = [
  /youtu\.be\/([a-zA-Z0-9_-]{11})/,
  /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
  /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
];

/**
 * Classifies a Lightbox `src` value.
 * Anything that isn't a string is assumed to be an Astro `ImageMetadata`
 * object (i.e. a locally imported image).
 */
export function getMediaType(src: ImageMetadata | string): MediaType {
  if (typeof src !== 'string') return 'image';
  if (/youtu\.?be/i.test(src)) return 'youtube';
  if (/drive\.google\.com/i.test(src)) return 'drive';
  return 'image';
}

/**
 * Converts any common YouTube URL shape (watch, share, embed, shorts)
 * into a privacy-friendly (youtube-nocookie.com) embed URL.
 * Returns null if the URL doesn't match a known pattern.
 */
export function getYouTubeEmbedUrl(url: string): string | null {
  for (const pattern of YOUTUBE_PATTERNS) {
    const match = url.match(pattern);
    if (match) return `https://www.youtube-nocookie.com/embed/${match[1]}`;
  }
  return null;
}

/**
 * Converts a public Google Drive "view" link
 * (drive.google.com/file/d/<ID>/view or ?id=<ID>)
 * into the embeddable /preview URL.
 * Requires the file to be shared as "Anyone with the link".
 */
export function getDriveEmbedUrl(url: string): string | null {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) ?? url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (!match) return null;
  return `https://drive.google.com/file/d/${match[1]}/preview`;
}
