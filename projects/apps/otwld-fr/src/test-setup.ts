import 'jest-preset-angular/setup-jest';

const observe = jest.fn();
const unobserve = jest.fn();

// you can also pass the mock implementation
// to jest.fn as an argument
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as Window as any).IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

jest.mock('../../../libs/ui/src/types/tailwind/theme.types', () => {
  const original = jest.requireActual(
    '../../../libs/ui/src/types/tailwind/theme.types'
  );
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
