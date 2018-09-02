import { markList } from "./mark-data";
import { Injectable } from "@angular/core";

@Injectable()
export class MarkService {
    getMarkList():Array<any> {
        return markList;
    }
}