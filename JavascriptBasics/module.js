// Every file in JS is termed as a module, it could be a single statement or function or a complete application

var User = {
  name: "Name1",
  address: "US",
  sessionTraining: "MERNStack",
  getUserInfo: function () {
    return {
      name: this.name,
      session: this.sessionTraining
    }
  }
}

var aConstant = 3.1413;

globalThis.User = {
  User: "Second User"
}

module.exports = {
  User, aConstant
}