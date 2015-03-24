/**
 * conosle.logger For IE6,7 etc..
 */

(function(){


    if (window.console === undefined)
    {
        window.conole = {};

        var div = document.createElement('div');
        div.setAttribute('id','d-log');
        div.setAttribute('class','d-log');
        div.style.position ='fixed';
        div.style.bottom ='10px';
        div.style.right = '10px';
        div.style.background = '#EEFFEE';
        div.style.height = '200px';
        div.style.overflow =  'scroll';

        var body = document.getElementsByTagName("body").item(0);
        body.appendChild(div);

        console.log = function(value){
            div.innerHTML += value + "</br>";
        }

        console.error = function(value){
            div.innerHTML += value + "</br>";
        }

        console.time = function(key){
            var time = (window.time || (window.time = {}));
            time[key] = new Date();
        }

        console.timeEnd = function(key){
            var time = (window.time || (window.time = {}));

            var processTime = new Date() - time[key];

            console.log(processTime);
        }

    }

})(this);