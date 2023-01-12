export const b64zero = 'MA==';

// numberToBase64
export function ntb64(input: number): string {
  return Buffer.from(input.toString()).toString('base64');
}

// base64ToNumber
export function b64tn(input = b64zero): number {
  return parseInt(Buffer.from(input, 'base64').toString('ascii'), 10);
}
