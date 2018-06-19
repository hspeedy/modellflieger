import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private _members: Array<IMember>;

  constructor() {
    this._members = new Array<IMember>();
  }

  getMembers(): Promise<Array<IMember>> {
    return new Promise<Array<IMember>>((success, failed) => {
      success(this._members);
    });
  }
}
