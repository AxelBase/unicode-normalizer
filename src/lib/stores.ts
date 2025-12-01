import { writable } from 'svelte/store';

export const inputText = writable<string>('');
export const outputText = writable<string>('');
export const detectedForm = writable<'NFC' | 'NFD' | 'Mixed' | 'Unnormalized'>('Unnormalized');