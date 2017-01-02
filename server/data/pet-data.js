'use strict';

module.exports = (models) => {
    var Pet = models.Pet;

    var lala = [{
        id: 0,
        name: "Pesho",
        type: "dog",
        breed: "лабрадор",
        sex: "мъжки",
        years: 3,
        weight: 39,
        imgSrc: "http://cdn1-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-1.jpg",
        isAdopted: false,
        owner: "",
        about: "Весел и енергичен, млад Лабрадор",
        posts: [{ id: 0, caption: "Във Враца", info: { where: 'Парк "Мир и Дружба", Перник' }, imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmZQ6f6vXaFvi1lsKZzFK-9s8oxtJnduuNfjKLWSe8Yo7DjF1L", description: "Какъв прекрасен ден за разходка. Докато се разхождах из този чуден парк във Перник, спрях и се замислих, какво ли щях да правя сега във Враца ?", likes: [{}, {}, {}], comments: [{ creator: "Snoopy", content: "eh chiche, kvo malko kutre beshe, sa kuf zul mastiff stana :D" }, { creator: "Pesho", content: "vzimai primer i si qj pedigrito" }] },
        { id: 1, caption: "Със племенника", info: { where: 'Във: Парк "Нова Надежда", Врацa', with: "Snoopy" }, imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MO9gAVKGZwYVEK09PVI0__nYcn3qGmHk7CRyk47LJPFheySdOg", description: "#chill-вам с племенника.", likes: [{}], comments: [{ creator: "Snoopy", content: "lele kvo naprai ti we ?" }, { creator: "Pesho", content: "starite arhivi" }] }]
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
    }]

    return {
        createComment(petObject) {
            var pet = new Comment(petObject);

            return new Promise((resolve, reject) => {
                pet.save((err, dbPet) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(dbPet);
                });
            });
        },

        getAllPets() {
            return new Promise((resolve, reject) => {
                Pet.find({}, (err, pets) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(lala);
                });
            });
        },
        getPetById(id) {
            return new Promise((resolve, reject) => {
                return resolve(lala[id]);
            })
        }
    };
};