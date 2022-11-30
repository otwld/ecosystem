import 'jest-preset-angular/setup-jest';

jest.doMock('./types/tailwind/theme.types', () => {
  const original = jest.requireActual('./types/tailwind/theme.types');
  Object.keys(original).forEach((key) => (original[key] = () => ''));
  return { ...original };
});
