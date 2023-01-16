import {map, Observable} from 'rxjs';
import {Maybe} from 'graphql/jsutils/Maybe';
interface IPaginatedResponse {
  edges: Array<Maybe<{
    node: Maybe<{  }>
  }>>;
}
export function fromEdgesToArray<T extends IPaginatedResponse, N extends {}>(): (source: Observable<T>) => Observable<N[]> {
  return (source: Observable<T>) => {
    return source.pipe(
      map((data: IPaginatedResponse) => {
        if (data && data.edges) {
          return data.edges.map((edge: Maybe<{ node: Maybe<N>}>) => edge?.node).filter((n) => !!n) as N[];
        }
        return [];
      })
    );
  };
}
