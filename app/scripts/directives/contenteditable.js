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

      element.bind("click", function() {
        element.removeClass("initial-class");
        element.removeClass("hover-class");
        element.addClass("focus-class");
      });

      element.bind("mouseenter", function() {
        if(element.hasClass("focus-class" )){
          element.removeClass("hover-class")
        }else {
          element.removeClass("initial-class");
          element.addClass("hover-class");
        }
      });

      element.bind("mouseleave", function() {
        if(element.hasClass("hover-class")){
          element.removeClass("hover-class")
        }else {
          element.removeClass("hover-class");
          element.addClass("initial-class");
        }
      });

      element.bind("blur", function() {
        element.removeClass("focus-class");
        element.addClass("initial-class");
      });
    }
  };
});

