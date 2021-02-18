import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  commits: any[] = [];
  commitDetails: any = null;

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {

  }

  getBranches(){
    this.githubService.getBranches().subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  getCommitList(): void {
    this.githubService.getCommitList('0c0feff3f005ebec607bcccac0ae77f431472ec0').subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  getCommit(): void {

  }

}
