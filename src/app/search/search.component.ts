import { Component, OnInit } from '@angular/core';
import { SelectorModel } from '../models/selector.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public selectorOfTypes: SelectorModel;
  public selectorOfLanguages: SelectorModel;

  constructor() {
    this.selectorOfTypes = new SelectorModel(['Repositories']);
    this.selectorOfLanguages = new SelectorModel(
      ['Javascript', 'css', 'html', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel']
    );
  }

  ngOnInit() {
    // this.selector.init(
    //   document.querySelector('.select-wrapper .options'),
    //   document.querySelector('.select-wrapper .select')
    // )
    
  }

}

