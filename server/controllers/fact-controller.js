'use strict';

module.exports = (factData) => {
    return {
        createFact(req, res) {
            factData.createFact(req.body)
                .then(() => {
                    res.status(201).json({
                        success: true,
                        message: `Fact ${req.body.title} succesfully created!`
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

        getAll(req, res) {
            factData.getAll()
                .then((facts) => {
                     res.status(200).json(facts);
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