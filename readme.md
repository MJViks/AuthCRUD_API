# AuthCRUD_API
## Headers
1. **token** - JWT token
## Routs
### GET
1. **auth** - Authorization. Returns a token. _(headers params: user-Name, user-Pass)_
2. **users** - Returns a list of all users.
### POST
1. **user** - Creates a new user _(body: userName, userPass, userToken)_
### PUT
1. **user** - Updates user data _(body: userId, userName, userPass, userToken)_
### DELETE
1. **user** - Deletes 1 user _(URL params: id)_