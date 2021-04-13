import axios from 'axios'

export const register = newUser => {
  return axios
    .post('api/signup', {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      confirmPassword: newUser.confirmPassword,
      termsConditions: newUser.termsConditions
    })
    .then(response => {
      console.log('Registered')
    })
}
