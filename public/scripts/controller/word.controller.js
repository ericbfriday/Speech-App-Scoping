myApp.controller('WordController', function(WordService) {
    console.log('in Word Controller');
     
    const vm = this;
    vm.definition = WordService.definition;
    vm.wordResponse = WordService.wordResponse;

    vm.wordSearch = function(wordIn) {
        console.log('logging wordToDefine -> ', wordIn);
        WordService.findDefinition(wordIn);
    };

    // vm.filter("trustUrl", ['$sce', function ($sce) {
    //     return function (recordingUrl) {
    //         return $sce.trustAsResourceUrl(recordingUrl);
    //     };
    // }]);

 });