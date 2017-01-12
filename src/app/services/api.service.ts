import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    private options = new RequestOptions({
        headers: this.headers
    });

    constructor(private http: Http) {
        const token = localStorage.getItem('token');

        if (token) {
            this.options.headers.append('authorization', token);
        };
    }

    get(path: string): Observable<any> {
        return this.http.get(`/${path}`, this.options)
            .map(this.getJson);
    }

    post(path: string, body): Observable<any> {
        return this.http.post(`/${path}`, JSON.stringify(body), this.options)
            .map(this.getJson);
    }

    put(path: string, body): Observable<any> {
        return this.http.put(`/${path}`, JSON.stringify(body), this.options)
            .map(this.getJson);
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`/${path}`, this.options)
            .map(this.getJson);
    }

    private getJson(res: Response) {
        return res.json();
    }

    private checkForError(res: Response): Response {
        if (res.status >= 200 && res.status < 300) {
            return res;
        }

        let error = new Error(res.statusText);
        error['response'] = res;

        throw error;
    }
}
