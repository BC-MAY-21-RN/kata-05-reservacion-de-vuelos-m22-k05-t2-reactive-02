class LoginUser {
  constructor(input2 = '', input3 = '') {
    this.valuesLogin = {
      input2: input2,
      input3: input3,
    };
  }

  getValues() {
    return this.valuesLogin;
  }

  setValues(value) {
    this.valuesLogin = {...this.valuesLogin, ...value};
  }

  getBool() {
    if (
      this.valuesLogin.input2.length > 0 &&
      this.valuesLogin.input3.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default LoginUser;
