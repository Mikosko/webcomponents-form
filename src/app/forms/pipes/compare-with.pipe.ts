import { Pipe, PipeTransform } from '@angular/core';
import { path } from '../utils/key-path';

interface CompareWithCache {
  [keyPath: string]: <T>(a: T, b: T) => boolean;
}

var cache: CompareWithCache = Object.create(null);

@Pipe({
  name: 'cwcCompareWith',
  pure: true,
})
export class CwcCompareWithPipe implements PipeTransform {
  public transform(keyPath: string) {
    if (!cache[keyPath]) {
      cache[keyPath] = <T>(a: T, b: T) => {
        if (a && b) {
          return path(keyPath, a) === path(keyPath, b);
        }

        return false;
      };
    }

    return cache[keyPath];
  }
}
