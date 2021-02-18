import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = `https://api.github.com/repos/Khors/tst-git-history`;

  constructor(
    public http: HttpClient
  ) { }


  public getBranches() {
    return this.http.get(`${this.apiUrl}/branches`);
  }

  public getCommitList(branch: string) {
    // const params: HttpParams = new HttpParams().append('sha', branch);
    return this.http.get(`${this.apiUrl}/commits?sha=${branch}`);
  }

  public getCommit(sha: string) {
    return this.http.get(`${this.apiUrl}/commits/${sha}`);
  }

}
