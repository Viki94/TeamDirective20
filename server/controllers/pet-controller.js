/* globals module */

'use strict';

module.exports = (data) => {
    return {
        addPet(req, res) {
            data.createNewPetProfile(req.body.pet)
                .then(pet => {
                    res.status(201).json(pet);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },

        getPetsByPage(req, res) {
            const page = +req.params.page || 1;
            let totalPagesCount;
            let pageSize = 3;

            data.getPetsByPage(page)
                .then(petsObj => {
                    totalPagesCount = Math.ceil(petsObj.count / pageSize);
                    res.status(200).json({
                        totalPagesCount,
                        pets: petsObj.pets
                    });
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        },

        getPetById(req, res) {
            data.getPetById(req.body.id)
                .then(pet => {
                    res.status(200).json(pet);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        },

        addPhotoToPet(req, res) {
            let id = req.body.petId,
                photoUrl = req.body.photoUrl;
            data.addPhotoToPet(id, photoUrl)
                .then(pet => {
                    res.status(200).json(pet);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        }
    };
};