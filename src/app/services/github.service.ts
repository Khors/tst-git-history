import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = `https://api.github.com/repos/Khors/tst-git-history/commits`;

  constructor(
    public http: HttpClient
  ) { }

  public getCommitList() {
    return this.http.get(this.apiUrl);
  }

  public getCommit() {
    return this.http.get(this.apiUrl);
  }

}
