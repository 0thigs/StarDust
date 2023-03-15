import { CDN_URL } from '@env';

export function getImage(folder, resource) {
  return `${CDN_URL}/${folder}/${resource}`;
}
