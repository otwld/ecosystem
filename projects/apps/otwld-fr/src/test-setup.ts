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

jest.mock('../../../libs/ui/src/types/tailwind.types', () => {
  const original = jest.requireActual(
    '../../../libs/ui/src/types/tailwind.types'
  );
  Object.keys(original).forEach((key) => (original[key] = () => ''));

  return { ...original };
});
