API Documentation

Get All Users
URL: /admin
Method: GET
Description: Get all user information.
Request Parameters: None

Response Parameters:

id (Long): User ID
username (String): User name
email (String): User email
Response Statuses:

200: Successful operation
204: No content
500: Internal server error
Get User by ID
URL: /admin/{id}
Method: GET
Description: Get user information by ID.
Request Parameters:

id (Long): User ID
Response Parameters:

id (Long): User ID
username (String): User name
email (String): User email
Response Statuses:

200: Successful operation
404: User not found
Update User
URL: /admin/{id}
Method: PUT
Description: Update user information by ID.
Request Parameters:

id (Long): User ID
Request Body:

The request body should contain a JSON object representing the updated user information. For example:

{
"username": "newusername",
"email": "newemail@example.com"
}

Response Parameters:

id (Long): User ID
username (String): User name
email (String): User email
Response Statuses:

200: Successful operation
404: User not found
