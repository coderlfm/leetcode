export {};

const URLMap = new Map();
const BaseURL = 'http://tinyurl.com/';

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  if (URLMap.has(longUrl)) return URLMap.get(longUrl);
  const shortUrl = `${BaseURL}${Date.now()}${Math.floor(Math.random() * 100)}`;
  URLMap.set(shortUrl, longUrl);
  return shortUrl;
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  return URLMap.get(shortUrl);
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
