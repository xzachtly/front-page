import { Observable } from 'rxjs';

export class Customer {

  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public streetNum: string,
    public streetName: string,
    public unit: string,
    public city: string,
    public state: string,
    public zip: string,
    public crossStreet: string,
    public buildingType: string,
    public dwellingType: string,
    public subdivisionName: string,
    public additionalDetails: string
  ) { }
}
