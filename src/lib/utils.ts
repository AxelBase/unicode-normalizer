export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		// Fallback for older browsers / HTTP
		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.style.position = 'fixed';
		document.body.appendChild(textarea);
		textarea.focus();
		textarea.select();
		const success = document.execCommand('copy');
		document.body.removeChild(textarea);
		return success;
	}
}

export function encodeTextForUrl(text: string): string {
	return encodeURIComponent(text);
}

export function decodeTextFromUrl(encoded: string): string {
	try {
		return decodeURIComponent(encoded);
	} catch {
		return '';
	}
}

export function countCodePoints(text: string): number {
	return [...text].length;
}

export function countCharacters(text: string): number {
	return text.length;
}