const error = {
  GET_error: "User does not exist with the given ID ",
  PUT_error: "Unable to update user details",
  DELETE_error:
    "Unable to perform  Delete / check if the user exists with given id",
  error_msg: "No matched records are found for the inputed data",
  connection_failure: "Unable to connect to the database...",
  null_qs: "Query string can not be null or empty",
  invalid_limit: " Limit cannot be zero/ string/null",
  invalid_route: "Invalid request ",
};
const successful = {
  connection: "Connection has been established successfully...",
  server: "Application is running on port",
  table: "A table has been created with schema as Model successfully..",
  DELETE_success: "SOFT DELETE is successfull",
};

module.exports = { error, successful };
