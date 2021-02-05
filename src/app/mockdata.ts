import * as faker from 'faker';
import * as fakerTW from 'faker/locale/zh_TW';

interface UserData {
  name: string;
  age: number;
  address: string;
  email: string;
  birth: string;
}

export const User1: UserData = {
  name: `${fakerTW.name.lastName()} ${fakerTW.name.firstName()}`,
  age: fakerTW.random.number(),
  address:
    `${fakerTW.address.cityPrefix()} ${fakerTW.address.citySuffix()}` +
    `${fakerTW.address.city()} ${fakerTW.address.streetAddress()}`,
  email: fakerTW.internet.email(),
  birth: `${fakerTW.date.past()}`,
};

export const User2: UserData = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  age: faker.random.number(),
  address:
    `${faker.address.cityPrefix()} ${faker.address.citySuffix()}` +
    `${faker.address.city()} ${faker.address.streetAddress()}`,
  email: faker.internet.email(),
  birth: `${faker.date.past()}`,
};
