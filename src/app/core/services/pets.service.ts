export class PetService {
    pets: any[] = [{
        id: 0,
        name: "Pesho",
        type: "dog",
        breed: "лабрадор",
        sex: "мъжки",
        years: 3,
        weight: 39,
        imgSrc: "http://cdn1-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-1.jpg",
        about: "Весел и енергичен, млад Лабрадор",
        posts: [{ caption: "Във Враца", info: { where: 'Парк "Мир и Дружба", Перник' }, imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmZQ6f6vXaFvi1lsKZzFK-9s8oxtJnduuNfjKLWSe8Yo7DjF1L", description: "Какъв прекрасен ден за разходка. Докато се разхождах из този чуден парк във Перник, спрях и се замислих, какво ли щях да правя сега във Враца ?" },
        { caption: "Със племенника", info: { where: 'Във: Парк "Нова Надежда", Врацa', with: "Snoopy" }, imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MO9gAVKGZwYVEK09PVI0__nYcn3qGmHk7CRyk47LJPFheySdOg", description: "#chill-вам с племенника." }]
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