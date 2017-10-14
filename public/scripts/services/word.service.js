myApp.service('WordService', function($http){
    const sv = this;
    sv.definition = {
        data: []
    };
    sv.wordToDefine = {};

    sv.wordResponse = {data: []};
    sv.mp3URL = {};

    sv.findDefinition = function(wordIn) {
        // console.log('logging wordIn (service) ', wordIn);
        sv.wordToDefine = {
            word: wordIn,
            data: wordIn
        };
        // console.log('logging wordToDefine (service) ', sv.wordToDefine);
        $http ({
            method: 'POST',
            url: '/wordLookup',
            data: sv.wordToDefine
        }).then(function (response) {
            console.log('response', response);
            sv.wordResponse.data = response.data.results[0];
            if (response.data.results[0].lexicalEntries[0].pronunciations[0].audioFile != undefined){
                sv.mp3URL.data = response.data.results[0].lexicalEntries[0].pronunciations[0].audioFile;
            } else {
                sv.mp3URL.data = response.data.results[0].lexicalEntries[0].pronunciations[1].audioFile;
            }
            console.log('logging response.data.results.lexicalEntries in word.service POST route', sv.wordResponse);
            console.log('Logging sv.mp3URL in word.service POST route', sv.mp3URL);
            
        });
    };
});