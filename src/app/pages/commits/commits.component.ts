import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  branches: any[] = [];
  branchesState: any = {};
  commitDetails: any = null;

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches() {
    this.githubService.getBranches().subscribe((res: any) => {
      res.map((item) => {
        this.branches.push(item);
        this.branchesState[item.name] = {
          name: item.name,
          sha: item.commit.sha,
          commits: []
        };
      });
    }, (err) => {
      console.log(err);
    });
  }

  getCommitList(event): void {
    if (!event.nextState) return;
    this.githubService.getCommitList(this.branchesState[event.panelId].sha).subscribe((res: any) => {
      console.log(res);
      this.branchesState[event.panelId].commits = res.map(item => {
        return {
          commit: item.commit,
          url: item.html_url,
          sha: item.sha,
          apiUrl: item.url
        }        
      });
    }, (err) => {
      console.log(err);
    });
  }

  setCommitDetails(data) {
    this.commitDetails = data;
  }
}
