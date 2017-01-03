/* globals module */

'use strict';

module.exports = (models) => {
    let Pet = models.Pet,
        User = models.User;

    return {
        getPetById(petId) {
            return new Promise((resolve, reject) => {
                Pet.findOne({ _id: petId }, (err, pet) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(pet);
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
        },

        createNewPetProfile(pet) {
            let newPet = new Pet(pet);

            return new Promise((resolve, reject) => {
                newPet.save((err, pet) => {
                    if (err) {
                        return reject(err);
                    }

                    User.findOne({ username: pet.addedBy }, (err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        let animal = {
                            name: pet.name,
                            imgUrl: pet.pictures[0],
                            addedOn: Date.now,
                            id: pet._id
                        };

                        user.addedAnimals.push(animal);
                        user.save((err) => {
                            if (err) {
                                return reject(err);
                            }

                        });
                    });

                    return resolve(pet);
                });
            });
        },

        updatePetInfo(petId, newData) {
            return new Promise((resolve, reject) => {
                Pet.update({ _id: petId }, newData, (err, pet) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(pet);
                });
            });
        },

        getPetsByPage(page) {
            page = page || 1;
            const pageSize = 3;

            return new Promise((resolve, reject) => {
                Pet.find()
                    .skip((page - 1) * pageSize)
                    .sort({ 'addedOn': -1 })
                    .limit(pageSize)
                    .exec((err, pets) => {
                        if (err) {
                            return reject(err);
                        }

                        Pet.count((err, count) => {
                            if (err) {
                                return reject(err);
                            }

                            let result = {
                                pets,
                                count
                            };

                            return resolve(result);
                        });
                    });
            });
        },

        addPhotoToPet(petId, photoUrl) {
            return new Promise((resolve, reject) => {
                Pet.findOne({ _id: petId }, (err, pet) => {
                    if (err) {
                        return reject(err);
                    }

                    pet.pictures.push(photoUrl);
                    pet.save((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(res);
                    });
                });
            });
        }
    };
};