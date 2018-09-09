import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.css']
})
export class RepositoryDisplayComponent implements OnInit {
  public repositoryView: string = 'tile';

  constructor() { }

  ngOnInit() {
  }

  @Input('data')
  data: any;

  getRepositories() {
    return this.data.getData();
  }

  toggleRepository(repository: Object) {
    this.data.toggleRepository(repository);
  }

  getSavedRepository() {
    return this.data.getSavedRepository;
  }

  isSavedRepository(repository: Object) {
    const result = this.data.searchRepository(repository);
    return !(result === -1);
  }

}
