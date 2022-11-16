import 'jest-preset-angular/setup-jest';

jest.doMock('./types/tailwind.types', () => {
  const original = jest.requireActual('./types/tailwind.types');
  Object.keys(original).forEach((key) => (original[key] = () => ''));
  return { ...original };
});
