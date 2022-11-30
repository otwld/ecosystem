import 'jest-preset-angular/setup-jest';

jest.doMock('./types/theme.types', () => {
  const original = jest.requireActual('./types/theme.types');
  Object.keys(original).forEach((key) => (original[key] = () => ''));
  return { ...original };
});
