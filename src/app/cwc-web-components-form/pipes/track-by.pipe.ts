import { Pipe, PipeTransform } from '@angular/core';
import { path } from '../utils/key-path';

interface TrackByCache {
  [keyPath: string]: <T>(index: number, item: T) => any;
}

var cache: TrackByCache = Object.create(null);

@Pipe({
  name: 'cwcTrackBy',
  pure: true,
})
export class TrackByPipe implements PipeTransform {
  public transform(keyPath: string) {
    if (!cache[keyPath]) {
      cache[keyPath] = <T extends Record<string, any>>(
        index: number,
        item: T
      ) => {
        return keyPath === '$index' ? index : path(keyPath, item) || index;
      };
    }

    return cache[keyPath];
  }
}
