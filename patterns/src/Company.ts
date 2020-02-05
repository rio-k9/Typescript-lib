import faker from 'faker';
export class Company {
  name: string;
  ethos: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.companyName();
    this.ethos = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
