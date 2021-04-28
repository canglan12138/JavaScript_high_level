function my_module() {
    function info() {
      this.name = function () {
        console.log('jack');
      }
      this.age = function () {
        console.log(18);
      }
      this.sex = function () {
        console.log('男');
      }
    }
    return info
}
