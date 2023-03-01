export const supportedFileTypes: Record<FileCategory, string[]> = {
  image: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
  video: ['video/mp4'],
  url: []
}

export type FileCategory = 'image' | 'video' | 'url';
