export function parseDouyinUrl(url: string): string | null {
  const match = url.match(/douyin\.com\/video\/(\d+)/);
  return match ? match[1] : null;
}

export function getDouyinShareUrl(videoId: string): string {
  return `https://www.douyin.com/video/${videoId}`;
}
