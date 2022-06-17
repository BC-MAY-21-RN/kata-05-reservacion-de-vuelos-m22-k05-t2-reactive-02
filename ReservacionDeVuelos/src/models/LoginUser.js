class LoginUser {
  constructor(input1 = '', input2 = '') {
    this.valuesRegister = {
      input1: input1,
      input2: input2,
    };
  }

  getValues() {
    return this.valuesRegister;
  }

  setValues(value) {
    this.valuesRegister = {...this.valuesRegister, ...value};
  }

  getBool() {
    if (
      this.valuesRegister.input1.length > 0 &&
      this.valuesRegister.input2.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default LoginUser;
