

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { environment } from "../../environments/environments";


export abstract class ApiService extends BehaviorSubject<Array<any>> {
  public loading: boolean = false;
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient, protected tableName: string) {
    super([]);
  }

  public query(): void {
    this.fetch(this.tableName).subscribe((x) => super.next(x));
  }

  protected fetch(tableName: string): Observable<any[]> {
    this.loading = true;
    return this.http.get(`${this.BASE_URL}${tableName}`).pipe(
      map(
        (response: any) =>
          <any[]>response[`${tableName}`]
      ),
      tap(() => (this.loading = false))
    );
  }
}

@Injectable()
export class CustomersService extends ApiService {
  constructor(http: HttpClient) {
    super(http, "customers");
  }
  queryAll(): Observable<any> {
    return this.fetch(this.tableName);
  }
}

// EmployeesService à implémenter
@Injectable()
export class EmployeesService extends ApiService {
  constructor(http: HttpClient) {
    super(http, "employees");
  }
  queryAll(): Observable<any> {
    return this.fetch(this.tableName);
  }


}

