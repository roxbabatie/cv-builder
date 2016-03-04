app.directive("contenteditable", function() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });

      element.bind("click", function(e) {
        e.toElement.focus(function () {
          console.log(this);
          if ($(this).text() === "Type your text in here...") {
            $(this).text("");
          }
        });
        element.removeClass("hover-class");
        element.addClass("focus-class");
      });

      element.bind("mouseenter", function() {
        attrs.$observe("class", function(value){
          if(value.indexOf("focus-class") !== -1){
            element.removeClass("hover-class");
          }else {
            element.addClass("hover-class");
          }
          })
      });

      element.bind("mouseleave", function() {
        attrs.$observe("class", function(value){
          if(value.indexOf("hover-class") > -1){
            element.removeClass("hover-class");
          }
          if(value.indexOf("focus-class")){
            element.removeClass("hover-class");
          }
        })
      });

      element.bind("blur", function() {
        element.removeClass("focus-class");
        element.addClass("");
      });
    }
  };
});

