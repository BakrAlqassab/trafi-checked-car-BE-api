const models = require("../models");

async function save(req, res) {
  const postedData = req.body;

  let existData = await models.CarInspectionInfo.findAll({});
  existData = JSON.stringify(existData);
  existData = JSON.parse(existData);

  var dataToUpdate = postedData.filter((post) =>
    existData.some(
      (selected) =>
        selected.model_year === post.model_year &&
        selected.make === post.make &&
        selected.model === post.model
    )
  );

   updateData(dataToUpdate);

  let dataToAdd = [];

  dataToAdd = postedData.filter(
    (o1) =>
      !dataToUpdate.some(
        (o2) =>
          o1.model_year === o2.model_year &&
          o1.make === o2.make &&
          o1.model === o2.model
      )
  );
  dataToAdd = JSON.stringify(dataToAdd);
  dataToAdd = JSON.parse(dataToAdd);
  if (dataToAdd) {
    try {
      for (let index = 0; index < dataToAdd?.length; index++) {
        const data = dataToAdd[index];
        const post = {
          model_year: data.model_year,
          make: data.make,
          model: data.model,
          rejection_percentage: data.rejection_percentage,
          reason_1: data.reason_1,
          reason_2: data.reason_2,
          reason_3: data.reason_3,
        };

        models.CarInspectionInfo.create(post)
          .then((result) => {
            if (data) {
              res.status(201).json({
                message: "Post created succesfully",
                post: result,
              });
            } else {
              res.sendStatus(204);
            }
          })
          .catch((error) => {
            res.status(500);
            console.log(error);
          });
      }
    } catch (error) {
      res.status(500);

      res.send({
        message: "Something went wrong",
        error: "error",
      });
    }
  } else {
    res.status(200).json({
      message: "No data To add, will be Updated",
      post: "No data to Add",
    });
  }
}

function updateData(data) {
    console.log(data.length)
  if (data) {
    try {
      for (let index = 0; index < data?.length; index++) {
        const updatedPost = {
          model_year: data[index].model_year,
          make: data[index].make,
          model: data[index].model,
          rejection_percentage: data[index].rejection_percentage,
          reason_1: data[index].reason_1,
          reason_2: data[index].reason_2,
          reason_3: data[index].reason_3,
        };

        models.CarInspectionInfo.update(updatedPost, {
          where: {
            model_year: updatedPost.model_year,
            make: updatedPost.make,
            model: updatedPost.model,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function showOneElementById(req, res) {
  const id = req.params.id;
  models.CarInspectionInfo.findByPk(id)
    .then((result) => {
      res.status(200).json(result);
      console.log("all ok");
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

  const userId = 1;
  updatedPost;
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
