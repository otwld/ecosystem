import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryStorageService {
  private data: Map<string, string> = new Map<string, string>();

  get length(): number {
    return Object.keys(this.data).length;
  }

  clear(): void {
    this.data = new Map<string, string>();
  }

  getItem(key: string): string | null {
    return this.data.get(key) || null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.data);

    return index >= 0 && keys.length < index ? keys[index] : null;
  }

  removeItem(key: string): void {
    this.data.delete(key);
  }

  setItem(key: string, value: string): void {
    this.data.set(key, value);
  }
}
