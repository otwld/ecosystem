import 'jest-preset-angular/setup-jest';

jest.doMock('./types/tailwind/theme.types', () => {
  const original = jest.requireActual('./types/tailwind/theme.types');
  Object.keys(original).forEach((key) => (original[key] = () => ''));
  return { ...original };
});

jest.doMock('./types/tailwind.types.ts', () => {
  const original = jest.requireActual('./types/tailwind.types.ts');
  Object.keys(original).forEach((key) => (original[key] = () => ''));
  return { ...original };
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
