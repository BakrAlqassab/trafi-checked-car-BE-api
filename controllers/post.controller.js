const models = require("../models");
async function save(req, res)  {
  let existData;
  const allExistElements = models.CarInspectionInfo.findAll().then((result) => {
    this.existData = 'rrrr'
    return  result;
   
  });

//   const users = await models.CarInspectionInfo.findAll({}).Map(el => el.get({pass: true}))
let users = await models.CarInspectionInfo.findAll({});
users = JSON.stringify(users);
users = JSON.parse(users) 
  console.log("all exist data");
  console.log(users);
  const post = {
    plateNumber: req.body.plate_number,
    year: req.body.year,
    Model: req.body.model,
    rejectionReason1: req.body.rejection_reason1,
    rejectionReason2: req.body.rejection_reason2,
    rejectionReason3: req.body.rejection_reason3,
    pass: req.body.pass,
  };
  models.CarInspectionInfo.create(post)
    .then((result) => {
      res.status(201).json({
        message: "Post created succesfully",
        post: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

function showOneElementById(req, res) {
  const id = req.params.id;
  models.CarInspectionInfo.findByPk(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
}

function showAllElements(req, res) {
  models.CarInspectionInfo.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updatedPost = {
    plateNumber: req.body.plate_number,
    year: req.body.year,
    Model: req.body.model,
    rejectionReason1: req.body.rejection_reason1,
    rejectionReason2: req.body.rejection_reason2,
    rejectionReason3: req.body.rejection_reason3,
    pass: req.body.pass,
  };

  const userId = 1;updatedPost
  models.CarInspectionInfo.update(updatedPost, {
    where: { id: id, plateNumber: updatedPost.plateNumber },
  })
    .then((result) => {
      res.status(200).json({
        message: "Post Updated",
        post: updatedPost,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

module.exports = {
  save: save,
  show: showOneElementById,
  showAll: showAllElements,
  update: update,
};
