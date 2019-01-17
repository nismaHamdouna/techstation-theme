/*
This is in pure JavaScript so it would work in most of the browsers.
It would also disable backspace key but key will work normally inside input fields and textarea.
*/

(function (global) { 

  if(typeof (global) === "undefined") {
    throw new Error("window is undefined");
  }

  var _hash = "!";
  var noBackPlease = function () {
    global.location.href += "#";

        // making sure we have the fruit available for juice (^__^)
        global.setTimeout(function () {
          global.location.href += "!";
        }, 50);
      };

      global.onhashchange = function () {
        if (global.location.hash !== _hash) {
          global.location.hash = _hash;
        }
      };

      global.onload = function () {            
        noBackPlease();

        // disables backspace on page except on input fields and textarea..
        /*document.body.onkeydown = function (backspace) {
          var elm = backspace.target.nodeName.toLowerCase();
          if (backspace.which === 8 && (elm !== 'input' && elm  !== 'textarea')) {
            backspace.preventDefault();
          }
            // stopping event bubbling up the DOM tree..
            backspace.stopPropagation();
          }; */

        }

      })(window);
