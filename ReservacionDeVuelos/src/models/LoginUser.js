class LoginUser {
  constructor(input1 = '', input2 = '') {
    this.valuesLogin = {
      input1: input1,
      input2: input2,
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
      this.valuesLogin.input1.length > 0 &&
      this.valuesLogin.input2.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default LoginUser;
