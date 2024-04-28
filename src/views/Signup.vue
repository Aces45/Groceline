<template>
  <form @submit.prevent="handleSubmit">
    <h1>Signup</h1>
    <label>Email</label>
    <input type="email" v-model="email" @keyup="checkEmail" required />

    <label>Confirm email</label>
    <input type="email" v-model="confirmEmail" @keyup="checkEmail" required />
    <p v-if="emailError" class="error">
      {{ emailError }}
    </p>

    <label>Password</label>
    <input type="password" v-model="password" @keyup="checkPassword" required />

    <label>Confirm password</label>
    <input
      type="password"
      v-model="confirmPassword"
      @keyup="checkPassword"
      required
    />
    <p v-if="passwordError" class="error">{{ passwordError }}</p>

    <br />
    <router-link to="signup"> Forgot password? </router-link>
    <br />
    <button>Signup</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmEmail: '',
      confirmPassword: '',
      emailError: '',
      passwordError: '',
    }
  },
  methods: {
    handleSubmit() {
      this.passwordError = this.password.length > 8 ? '' : 'Password must be at least 8 chars long.'
      if (this.email != this.confirmEmail && this.password != confirmPassword) {
        this.passwordError = 'Email and passwords are not matching.'
      }
      else if (this.password != this.confirmPassword) this.passwordError = 'Passwords are not matching.'
      else this.passwordError = 'Signup successful!'
    },
    checkEmail() {
      if (this.confirmEmail != '') {
        this.emailError = this.email === this.confirmEmail ? '' : 'Emails are not matching.'
      }
    },
    checkPassword() {
      if (this.confirmPassword && this.password) {
        this.passwordError = this.password == this.confirmPassword ? '' : 'Passwords are not matching.'
      }
      if (this.password.length < 7) this.passwordError = 'Password must be at least 8 chars long.'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
form {
  border: solid 1px #93c47dff;
  max-width: 300px;
  min-height: 400px;
  margin: 50px auto;
  background: white;
  text-align: center;
  padding: 50px;
  border-radius: 20px;
}
label {
  color: #595959;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.9em;
  letter-spacing: 2px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #93c47dff;
  border-radius: 10px;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 10px 5px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  font-family: "Comfortaa";
  background: #93c47dff;
  font-size: 1rem;
  border: 0;
  padding: 10px 20px;
  margin-top: 50px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
}
button:hover {
  color: rgb(179, 179, 179);
  background-color: rgb(78, 143, 48);
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>