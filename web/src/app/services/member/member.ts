export class Member implements IMember {

  constructor(private _id: number,
              private _number: number,
              private _appellation: number,
              private _name: string,
              private _forename: string,
              private _street: string,
              private _postalcode: string,
              private _city: string,
              private _phonePrivate: string,
              private _phoneWork: string,
              private _mobile: string,
              private _email: string) {

  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get number(): number {
    return this._number;
  }

  set number(number: number) {
    this._number = number;
  }

  get appellation(): number {
    return this._appellation;
  }

  set appellation(appellation: number) {
    this._appellation = appellation;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get forename(): string {
    return this._forename;
  }

  set forename(forename: string) {
    this._forename = forename;
  }

  get street(): string {
    return this._street;
  }

  set street(street: string) {
    this._street = street;
  }

  get postalcode(): string {
    return this._postalcode;
  }

  set postalcode(postalcode: string) {
    this._postalcode = postalcode;
  }

  get city(): string {
    return this._city;
  }

  set city(city: string) {
    this._city = city;
  }

  get phonePrivate(): string {
    return this._phonePrivate;
  }

  set phonePrivate(phonePrivate: string) {
    this._phonePrivate = phonePrivate;
  }

  get phoneWork(): string {
    return this._phoneWork;
  }

  set phoneWork(phoneWork: string) {
    this._phoneWork = phoneWork;
  }

  get mobile(): string {
    return this._mobile;
  }

  set mobile(mobile: string) {
    this._mobile = mobile;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get appellationText(): string {
    if (this._appellation === 1) {
      return 'Herr';
    } else if (this._appellation === 2) {
      return 'Frau';
    } else {
      return undefined;
    }
  }
}
