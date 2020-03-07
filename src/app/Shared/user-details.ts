export class UserDetails {

    id: number;
    name: string;
    username: string;
    email: string;
    address: Address[];
    phone: number;
    website: string;
    company: Compony[];
}
export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo[];
}
export class Geo {
    lat: string;
    lng: string;
}
export class Compony {
    name: string;
    catchPhrase: string;
    bs: string;
}
