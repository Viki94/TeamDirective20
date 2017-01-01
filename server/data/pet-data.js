'use strict';

module.exports = (models) => {
    var Pet = models.Pet;

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

                    return resolve(pets);
                });
            });
        }
    };
};