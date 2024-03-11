import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Cochange} from "../Cochange";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:8080/api/awp3';

  constructor(private http: HttpClient) { }

  getFileNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/files`);
  }

  getCochanges(date: string): Observable<Cochange[]> {
    return this.http.get<Cochange[]>(`${this.baseUrl}/cochangesp`, { params: { date } });
  }

  getCochangesFromSingleFile(file: string, date: string): Observable<Cochange[]> {
    return this.http.get<Cochange[]>(`${this.baseUrl}/cochange-from-singlefile`, { params: { file, date } });
  }

  getCochangesFromPair(f1: string, f2: string): Observable<Cochange[]> {
    return this.http.get<Cochange[]>(`${this.baseUrl}/cochange-from-pair`, { params: { f1, f2 } });
  }


}
