export class User{

    name: string;
    domain: string;
    experience: number;
    email: string;

    constructor(name: string, domain: string, experience: number, email: string) {
        this.name = name;
        this.domain = domain;
        this.experience = experience;
        this.email = email;
    }

}