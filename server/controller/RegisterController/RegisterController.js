const UserModel = require("../../model/UserModel/userModel")
const bcrypt = require("bcryptjs")


// Handle the user Registration
const RegisterController = async (req, res) => {
        try {
          const existingUser = await UserModel.find({email: req.body.email})
      
          if (existingUser) {
                  return res.status(200).send({
                          message: "User Already Exist",
                          success: false
                  });
          }
      
          const password = req.body.password;
      
          // bcrypt the userPassword
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          req.body.password = hashedPassword;
      
          // save new details in the database
          const newUser = new UserModel(req.body);
          await newUser.save();
      
          // handle successfull message
          res.status(201).send({
                  message: "Register Sucessfully",
                  success: true,
      
          });
      
      } catch (error) {
          console.log(error);
          res.status(500).send({
                  success: false,
                  message: `Register Controller ${error.message}`,
      
          });
      }
      
      
      
      
      };

module.exports = {RegisterController}