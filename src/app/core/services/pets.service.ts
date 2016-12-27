export class PetService {
    pets: any[] = [{
        id: 0,
        name: "Pesho",
        type: "dog",
        breed: "лабрадор",
        sex: "мъжки",
        years: 3,
        weight: 39,
        imgSrc: "http://cdn1-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-1.jpg"
    },
    {
        id: 1,
        name: "Merida",
        type: "cat",
        breed: "тигър",
        sex: "женски",
        years: 1,
        weight: 4,
        imgSrc: "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg"
    }];

    getAll(): any[] {
        return this.pets;
    }

    getById(id: number): any {
        return this.pets[id];
    }
}