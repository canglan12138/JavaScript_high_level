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
    function info2() {
      this.name = function () {
        console.log('jack1');
      }
    }
    function run() {
      console.log('run~~~');
    }
    return {
      info : info,
      info2 : info2,
      run : run
    }
}
