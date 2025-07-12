const { Router } = require('express')
const userModel = require('../models/users.model');

const router = Router();

router.get('/', async(req, res) => {
  try {
    let users = await userModel.find();
    res.send({ result: "success", payload: users})
  } catch(error) {
    console.log("Cannot get users with mongoose: ", error);
  }
})

module.exports = router