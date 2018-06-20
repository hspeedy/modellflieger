import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private _members: Array<IMember>;

  constructor() {
    this._members = new Array<IMember>();
    this._members.push(new Member(
      1,
      700,
      1,
      'Mustermann',
      'Max',
      'Schlossallee 15',
      '77777',
      'Musterstadt',
      '0777-123456',
      undefined,
      '0111-123456',
      'max-mustermann@mail.xx'
    ));
    this._members.push(new Member(
      2,
      701,
      2,
      'Musterfrau',
      'Martina',
      'Schlossallee 15',
      '77777',
      'Musterstadt',
      '0777-123456',
      undefined,
      '0111-123456',
      'martina-musterfrau@mail.xx'
    ));
  }

  getMembers(): Promise<Array<IMember>> {
    return new Promise<Array<IMember>>((success, failed) => {
      success(this._members);
    });
  }
}
