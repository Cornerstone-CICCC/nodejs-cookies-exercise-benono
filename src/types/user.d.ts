interface User {
  username: string
  email: string
  password: string
}

interface UserRequestBody extends Omit<User, "email"> {}
