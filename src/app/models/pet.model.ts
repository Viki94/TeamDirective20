export class Pet {
    id: number;
    name: string;
    type: string;
    breed: string;
    sex: string;
    years: number;
    weight: number;
    profilePicture: string;
    isAdopted: boolean;
    owner: string;
    about: string;
    posts: any[];

    constructor(name: string, type: string, breed: string, sex: string, years: number, weight: number, profilePicture: string, isAdopted: boolean,
        owner: string, posts: any[]) {
        this.id = 0;
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.sex = sex;
        this.years = years;
        this.weight = weight;
        this.profilePicture = profilePicture;
        this.isAdopted = isAdopted;
        this.owner = owner;
        this.posts = posts;
    }
};