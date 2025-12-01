export function toNFC(text: string): string {
	return text.normalize('NFC');
}

export function toNFD(text: string): string {
	return text.normalize('NFD');
}

export function isNFC(text: string): boolean {
	return text === text.normalize('NFC');
}

export function isNFD(text: string): boolean {
	return text === text.normalize('NFD');
}

export function detectNormalizationForm(text: string): 'NFC' | 'NFD' | 'Mixed' | 'Unnormalized' {
	if (!text) return 'Unnormalized';
	if (isNFC(text) && isNFD(text)) return 'NFC'; // NFC and NFD are identical for ASCII-only
	if (isNFC(text)) return 'NFC';
	if (isNFD(text)) return 'NFD';
	return 'Mixed';
}