# Tools
## Apex Style templates for Angular

### Webstorm

The Apex_AngularJS.xml file in this directory contains WebStorm live templates which implement Angular components according to the Apex style guide. To use these live templates you must copy this file to your local WebStorm templates directory (c:\users\"yourUsername"\.WebStormX\config\templates).

### Sublime

Inside the Sublime folder is a folder containing snippets for these components. Copy this whole folder to your packages/user/ directory

### Atom

Inside the Atom folder is a folder containing snippets for these components. Copy this whole folder to your ~/.atom/packages/ directory

### What's included

* Controller - *ngc* (Note if you're using the existing AngularJS templates for Webstorm you'll need to disable the controller template)
```js
(function() {
    "use strict";

    angular.module("myApp")
      .controller("myController", myController);

    myController.$inject = [

    ];

    function myController(

    ){
      var ctrl = this;
      ctrl.helloWorld = function() {
          console.log("Hello World");
      };
    }
})();
```

* Directive - *ngd*
```js
(function() {
    "use strict";

    angular.module("app")
        .directive("myDirective", myDirective);

    myDirective.$inject = [

    ];

    function myDirective(

    ){
        return {
            require: "ngModel",
            restrict: "", // A, E, C
            templateUrl: "",
            scope: {},
            link: function(scope, element, attrs, ngModelController) {

            }
        };
    }
})();
```

* Factory - *ngf*
```js
(function() {
    "use strict";

    angular.module("app")
        .factory("myFactory", myFactory);

    myFactory.$inject = [

    ];

    function myFactory(

    ){
        return {

        };
    }
})();
```

* Service - *ngs*
```js
(function() {
    "use strict";

    angular.module("app")
        .service("myService", myService);

    myService.$inject = [

    ];

    function myService(

    ){
        var self = this;
        self.name = "Hello World";
    }
})();
```

* Filter - *ngft*
```js
(function() {
    "use strict";

    angular.module("app")
        .filter("myFilter", myFilter);

    myFilter.$inject = [

    ];

    function myFilter(

    ){
    }
})();
```

* Parser - *ngp*
```js
(function() {
    "use strict";

    angular.module("")
        .directive("myParser", myParser);

    myParser.$inject = [

    ];

    function myParser(

    ){
        return {
            require: "ngModel",
            link: function(scope, element, attrs, ngModelController) {
                ngModelController.$parsers.push(function(value) {
                    return String(value);
                });
            }
        };
    }
})();
```

* Formatter - *ngfo*
```js
(function() {
    "use strict";

    angular.module("app")
        .directive("myFormatter", myFormatter);

    myFormatter.$inject = [

    ];

    function myFormatter(

    ){
        return {
            require: "ngModel",
            link: function(scope, element, attrs, ngModelController) {
                ngModelController.$formatters.push(function(value) {
                    return String(value);
                });
            }
        };
    }
})();
```

* Run block - *ngr*
```js
(function() {
    "use strict";

    angular.module("app")
        .run(runBlock);

    runBlock.$inject = [

    ];

    function runBlock(

    ) {

    }
})();
```
