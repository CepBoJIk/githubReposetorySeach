import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestDataSource {
  private baseUrl: string;
  private headers: {[property: string]: HttpHeaders};

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.github.com/search/';
    this.headers = {
      headers: new HttpHeaders({
        Accept: "application/vnd.github.mercy-preview+json",
      })
    }
  }

  generateUrl(type: string, language: string, keywords: string): string {
    const url = `${this.baseUrl}${type.toLowerCase()}?q=${keywords}+language:${language}`;
    return url;
  }

  getData(url): Observable<any> {
    return this.http.get(url, this.headers);
  }
}