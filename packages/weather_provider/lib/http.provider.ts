import { Observable } from 'rxjs';

export interface HttpProvider {
  get<T>(url: string, config: { params: any }): Observable<T>;
}
