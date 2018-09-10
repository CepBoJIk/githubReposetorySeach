import { Injectable } from '@angular/core';

@Injectable()
export class DisplayView {
  public VIEWS: {[key: string]: string} = {
    TILE: 'TILE',
    LINE: 'LINE'
  }
  private activeView = this.VIEWS.LINE;

  changeView(view) {
    this.activeView = view;
  }

  get view () {
    return this.activeView;
  }
}