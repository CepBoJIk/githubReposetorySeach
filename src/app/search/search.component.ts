import { Component, OnInit } from '@angular/core';
import { SelectorModel } from '../models/selector.model';
import { RepositoryModel } from '../repository.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public selectorOfTypes: SelectorModel;
  public selectorOfLanguages: SelectorModel;
  public keywords: string = '';
  private isFormSubmit = false;

  constructor(private repository: RepositoryModel) {
    this.selectorOfTypes = new SelectorModel(['Repositories']);
    this.selectorOfLanguages = new SelectorModel(
      ['javascript', 'css', 'html', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel']
    );
  }

  sendRequest(keyword: NgModel) {
    this.isFormSubmit = true;

    if (keyword.invalid) return;

    this.isFormSubmit = false;

    const type = this.selectorOfTypes.getSelectedValue();
    const language = this.selectorOfLanguages.getSelectedValue();
    this.repository.sendRequest(type, language, this.keywords);
  }

  getValidation(keywords: NgModel) {
    if (this.isFormSubmit && keywords.invalid) return 'red';
    return ''
  }

  isResultFound() {
    if (this.repository.isDataReceived) {
      if (this.getRepositories().length === 0) return false;
      return true;
    }

    return true;
  }

  ngOnInit() { }

}

