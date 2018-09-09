import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { SavedRepositoryModel } from './saved-repository.model';

@Injectable()
export class RepositoryModel {
  private data: Array<Object> = [];
  public isDataReceived = false;

  constructor(private datasource: RestDataSource,
              private savedData: SavedRepositoryModel,
  ) { }

  sendRequest(type, language, keywords) {
    this.isDataReceived = false;
    const url = this.datasource.generateUrl(type, language, keywords);
    this.datasource.getData(url).subscribe(
      (response) => {
        this.isDataReceived = true;
        this.data = response.items;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  getData(): Array<Object> {
    return this.data;
  }

  toggleRepository(repository: Object) {
    const index = this.searchRepository(repository);
    if (index !== -1) {
      this.savedRepository.splice(index, 1);
    } else {
      this.savedRepository.push(repository);
    }
    console.log(this.savedRepository)
  }

  getSavedRepository(): Array<Object> {
    return this.savedRepository;
  }

  searchRepository(repository: {[key: string]: any}) {
    let indexItem = -1;
    const savedRepository = this.savedData.getData();
    savedRepository.forEach((item, index) => {
      if (item.id === repository.id) indexItem = index;
    })

    return indexItem;
  }
}