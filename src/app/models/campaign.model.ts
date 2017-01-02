export class Campaign {
    _id: string;
    name: string;
    description: string;
    ownerName: string;
    ownerContact: string;
    creatorId: string;
    neededAmount: number;
    currentAmount: number;
    iban: string;
    image: string;

    constructor(name: string, description: string, ownerName: string, ownerContact: string, creatorId: string, neededAmount: number, currentAmount: number, iban: string, image: string) {
        this.name = name;
        this.description = description;
        this.ownerName = ownerName;
        this.ownerContact = ownerContact;
        this.creatorId = creatorId;
        this.neededAmount = neededAmount;
        this.currentAmount = currentAmount;
        this.iban = iban;
        this.image = image;
    }
};