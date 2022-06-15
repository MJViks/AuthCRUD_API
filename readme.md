# AuthCRUD_API
## Headers
```
 token: JWT token
```

## Routs
### GET
1. **auth** - Authorization. Returns a token.
 headers params: 
 ```
  user-Name: "John"
  user-Pass: "TestPass"
 ```
2. **users** - Returns a list of all users.
### POST
1. **user** - Creates a new user 
body
 ```
userName: TestName
userPass: TestPass
userToken: Token
 ```
### PUT
1. **user** - Updates user data
body
 ```
userId: id
userName: TestName
userPass: TestPass
userToken: Token
 ```
### DELETE
1. **user** - Deletes 1 user
URL params
 ```
 id
localhost:3000/id=12345
 ```
