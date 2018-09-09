export class SelectorModel {
  private dataArray: Array<string>;
  private selected: string;
  private $list: HTMLElement;

  constructor(dataArray: Array<string>) {
    this.dataArray = dataArray;
    this.selected = this.dataArray[0];
  }

  toggleListView(list) {
    if (!this.$list) {
      this.$list = list;
    }
    list.classList.toggle('hidden');
  }

  selectItem(type, list) {
    if (!this.$list) {
      this.$list = list
    };
    
    this.selected = type;

    this.toggleListView(this.$list);
  }

  getSelectedValue() {
    return this.selected;
  }

  getDataArray() {
    return this.dataArray;
  }
}

