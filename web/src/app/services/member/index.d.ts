declare interface IMember {
  id: number;
  number: number;
  appellation: number;
  name: string;
  forename: string;
  street: string;
  postalcode: string;
  city: string;
  phonePrivate: string;
  phoneWork: string;
  mobile: string;
  email: string;

  readonly appellationText: string;
}