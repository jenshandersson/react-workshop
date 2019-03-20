function Alvaro() {
  this.name = "Alvaro";
  this.sayName = function() {
    return this.name;
  };
  this.sayInitial = () => this.name.charAt(0);
}
var person2 = {
  name: "Steve",
  sayName: new Alvaro().sayName,
  sayInitial: new Alvaro().sayInitial
};
console.log(person2.sayName() + " " + person2.sayInitial());
