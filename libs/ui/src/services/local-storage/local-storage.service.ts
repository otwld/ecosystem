import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { MemoryStorageService } from '../memory-storage/memory-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly storage: Storage;

  constructor(private platform: Platform,
              private memoryStorage: MemoryStorageService) {
    if (this.platform.isBrowser && window?.localStorage) {
      this.storage = window.localStorage;
    } else {
      this.storage = memoryStorage;
    }
  }

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
