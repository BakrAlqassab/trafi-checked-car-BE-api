const models = require('../models')
function save(req,res) {
    const post = {
        plateNumber: req.body.plate_number,
        year: req.body.year,
        Model: req.body.model,
        rejectionReason1: req.body.rejection_reason1,
        rejectionReason2: req.body.rejection_reason2,
        rejectionReason3: req.body.rejection_reason3,
        pass: req.body.pass,
    }
    models.CarInspectionInfo.create(post).then(result => {
        res.status(201).json({
            message: "Post created succesfully",
            post: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    })
}

module.exports = {
    save : save
}