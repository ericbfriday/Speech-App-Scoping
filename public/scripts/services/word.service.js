myApp.service('WordService', function($http){
    var sv = this;
    sv.definition = {
        data: []
    };
    sv.wordToDefine = {};

    sv.wordResponse = {data: []};

    sv.findDefinition = function(wordIn) {
        console.log('logging wordIn (service) ', wordIn);
        sv.wordToDefine = {
            word: wordIn,
            data: wordIn};
 
        console.log('logging wordToDefine (service) ', sv.wordToDefine);
        $http ({
            method: 'POST',
            url: '/wordLookup',
            data: sv.wordToDefine
        }).then(function (response) {
            console.log('response', response);
            sv.wordResponse.data = response.data.results;
            console.log('logging response.data in word.service POST route', response);
        });
    };
});