'use strict';
app.factory('localStorage', function(localStorageService){
  var allData = [];
  var docIndex = 0;
  var emptyData = {
    title:  '',
    personal: {
      name: '',
      src: '',
      address: '',
      email: '',
      telephone: '',
      instant: ''
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
      localStorageService.set('allData', allData);
    }
    else {
      allData = localStorageService.get('allData');
    }
  }();

  var setLocalStorage = function() {
    localStorageService.set('allData', allData);
  };

  var newCv = function () {
    var create = angular.copy(emptyData);
    allData.push(create);
    console.log("allData: ", allData);
  };

  return {
    allData: allData,
    docIndex: docIndex,
    emptyData: emptyData,
    setLocalStorage: setLocalStorage,
    newCv: newCv
  }
});
