const UserModel = require("../../model/UserModel/userModel");

const GetUserList = async (req, res) => {
  try {
    // Find users where isAccepted is true and select specific fields
    const users = await UserModel.find({ isAccepted: true }, 'firstName lastName DepartmentName _id');

    if (!users || users.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No users found with isAccepted true",
      });
    }

    // Send success response with the user list
    res.status(200).send({
      message: "Users retrieved successfully",
      success: true,
      users: users
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error retrieving users: ${error.message}`,
    });
  }
};

module.exports = { GetUserList };
