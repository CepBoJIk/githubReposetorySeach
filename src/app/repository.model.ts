import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Router } from '@angular/router';

@Injectable()
export class RepositoryModel {
  private data: Array<Object> = [];
  public isDataReceived = false;
  private savedRepository: Array<any> = [];

  constructor(private datasource: RestDataSource, private router: Router) { }

  sendRequest(type, language, keywords) {
    this.isDataReceived = false;
    const url = this.datasource.generateUrl(type, language, keywords);
    this.datasource.getData(url).subscribe(
      (response) => {
        this.isDataReceived = true;
        this.data = response.items;
      },
      (error) => console.log(error)
    );
  }

  getData(): Array<Object> {
    if (this.router.url === '/my-list') {
      return this.savedRepository;
    }
    return this.data;
  }

  toggleRepository(repository: Object) {
    const index = this.searchRepository(repository);
    if (index !== -1) {
      this.savedRepository.splice(index, 1);
    } else {
      this.savedRepository.push(repository);
    }
  }

  searchRepository(repository: {[key: string]: any}) {
    let indexItem = -1;

    this.savedRepository.forEach((item, index) => {
      if (item.id === repository.id) indexItem = index;
    })

    return indexItem;
  }
}