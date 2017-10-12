myApp.service('WordService', function($http){
    const sv = this;
    sv.definition = {
        data: []
    };
    sv.wordToDefine = {};

    sv.wordResponse = {data: []};

    sv.findDefinition = function(wordIn) {
        // console.log('logging wordIn (service) ', wordIn);
        sv.wordToDefine = {
            word: wordIn,
            data: wordIn};
 
        // console.log('logging wordToDefine (service) ', sv.wordToDefine);
        $http ({
            method: 'POST',
            url: '/wordLookup',
            data: sv.wordToDefine
        }).then(function (response) {
            console.log('response', response);
            sv.wordResponse.data = response.data.results[0].lexicalEntries[0];
            console.log('logging response.data.results.lexicalEntries in word.service POST route', sv.wordResponse);
        });
    };
});