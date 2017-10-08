myApp.service('WordService', function($http){
    var sv = this;
    sv.definition = {
        data: []
    };
    sv.wordToDefine = {};

    sv.findDefinition = function(wordIn) {
        console.log('logging wordIn (service) ', wordIn);
        sv.wordToDefine = {
            data: wordIn
        };
        console.log('logging wordToDefine (service) ', sv.wordToDefine);
        $http ({
            method: 'GET',
            url: '/wordLookup',
            data: sv.wordToDefine
        }).then(function (response) {
            console.log('response', response);
            gs.wordResponse = response;
            console.log('logging response.data in word.service GET route', response.data);

        });
    };
});