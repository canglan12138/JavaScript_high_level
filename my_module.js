function my_module() {
    function name() {
      console.log('jack');
    }
    function age() {
      console.log(18);
    }
    return {
      name : name,
      age : age
    }
}
