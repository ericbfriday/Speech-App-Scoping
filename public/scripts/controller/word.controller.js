myApp.controller('WordController', function(WordService) {
    console.log('in Word Controller');
     
    var vm = this;
    // vm.word = '';
    vm.definition = WordService.definition;

    vm.wordSearch = function(wordIn) {
        console.log('logging wordToDefine -> ', wordIn);
        WordService.findDefinition(wordIn);
    };

 });