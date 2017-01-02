'use strict';
module.exports = (petData) => {
    return {
        createPet(req, res) {
            petData.createPet(req.body)
                .then(() => {
                    res.status(201).json({
                        success: true,
                        message: `Comment ${req.body.content} succesfully created!`
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        success: false,
                        message: err
                    });

                    console.log(err);
                });
        },

        getAllPets(req, res) {
            petData.getAllPets()
                .then((pets) => {
                    res.status(200).json(pets);
                })
                .catch((err) => {
                    res.status(500).json({
                        success: false,
                        message: err
                    });

                    console.log(err);
                });
        },
        getPetById(req, res) {
            petData.getPetById(req.params.id)
                .then((pet) => {
                    res.status(200).json(pet);
                })
                .catch((err) => {
                    res.status(500).json({
                        success: false,
                        message: err
                    });

                    console.log(err);
                });
        }
    }
};