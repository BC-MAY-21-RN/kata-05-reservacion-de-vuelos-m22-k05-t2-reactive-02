class RegisterUser {
  constructor(
    input1 = '',
    input2 = '',
    input3 = '',
    check1 = true,
    check2 = false,
  ) {
    this.valuesRegister = {
      input1: input1,
      input2: input2,
      input3: input3,
      check1: check1,
      check2: check2,
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
      this.valuesRegister.input2.length > 0 &&
      this.valuesRegister.input3.length > 0 &&
      this.valuesRegister.check1 === true
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default RegisterUser;
