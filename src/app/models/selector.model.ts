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

  selectItem(event, list) {
    if (!this.$list) {
      this.$list = list
    };

    const target = event.target;

    if (target.tagName !== 'LI') return;

    this.selected = target.innerHTML;

    this.toggleListView(this.$list);
  }

  getSelectedValue() {
    return this.selected;
  }

  getDataArray() {
    return this.dataArray;
  }
}

