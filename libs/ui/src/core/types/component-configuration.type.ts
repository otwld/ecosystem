export type ComponentConfiguration = {
  type: 'page' | 'component' | 'smart' | 'container' | 'dumb';
  name: `${ComponentConfiguration['type']}-${string}`;
};
