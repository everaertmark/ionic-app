import { Component } from '@angular/core';
import { MarkService } from './mark.service';

@Component({
  selector: 'page-mark',
  templateUrl: 'mark.html'
})

export class MarkPage {
    markList:Array<{age:number, surname:string}> = [];

    name:string = "Mark"
    
    constructor(private markService:MarkService) {
        this.markList = this.getMarkList();
    }

    getMarkList():Array<any> {
        return this.markService.getMarkList();
    }
}

