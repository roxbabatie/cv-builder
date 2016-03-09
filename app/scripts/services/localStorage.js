'use strict';
app.factory('localStorage', function(localStorageService){
  var allData = [];
  var docIndex = 0;
  var emptyData = {
    title:  '',
    personal: {
      name: '',
      address: '',
      email: '',
      telephone: '',
      instant: '',
    },
    experience: [
      {
        position: '',
        employer: '',
        location: '',
        description: ''
      }
    ],
    education : [
      {
        title: '',
        institution: '',
        location: '',
        description: ''
      }
    ],
    language: [
      {
        languageName: '',
        level: ''
      }
    ],

    skills: [
      {
        area: '',
        skill: ''
      }
    ],
    mentions: ''
  };

  var initialStorage = function () {
    if (localStorageService.get('allData') === null){

      allData.push(emptyData);

      localStorageService.set('allData', JSON.stringify(allData))
    }
  }();

  return {
    allData: allData,
    docIndex: docIndex,
    emptyData: emptyData
  }
});



