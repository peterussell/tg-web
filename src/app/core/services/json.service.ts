import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class JsonService {
    private basePath = 'http://localhost:4200/assets';

    constructor(private http: HttpClient) { }

    // public getJson(path: string): Observable<any> {
    //     // tmp
    //     const tmp = 'http://localhost:4200/assets/questions/navigation-flight-planning/1_navigation-fundamentals.json';
    //     return this.http.get(tmp);
    // }

    public getJson(relPath: string): Observable<any> {
        return this.http.get(`${this.basePath}/${relPath}`);
    }
}