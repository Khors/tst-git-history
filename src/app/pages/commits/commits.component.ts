import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  arr: any[] = [];

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {

  }

  getCommitList(): void {
    this.githubService.getCommitList().subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  getCommit(): void {

  }

}
