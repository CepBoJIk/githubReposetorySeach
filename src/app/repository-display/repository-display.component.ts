import { Component, OnInit } from '@angular/core';
import { RepositoryModel } from '../repository.model';
import { DisplayView } from '../display-view.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.css']
})
export class RepositoryDisplayComponent implements OnInit {
  public views;

  constructor(private repository: RepositoryModel, private displayView: DisplayView, private router: Router) {
    this.views = this.displayView.VIEWS;
  }

  ngOnInit() {
  }

  getRepositories() {
    return this.repository.getData();
  }

  toggleRepository(repository: Object) {
    this.repository.toggleRepository(repository);
  }

  isSavedRepository(repository: Object) {
    const result = this.repository.searchRepository(repository);
    return !(result === -1);
  }

  get view() {
    return this.displayView.view;
  }

  changeView(view) {
    this.displayView.changeView(view);
  }

  isResultFound() {
    if (this.repository.isDataReceived) {
      if (this.getRepositories().length === 0) return false;
      return true;
    }
    return true;
  }
  
  get url() {
    return this.router.url;
  }
}
