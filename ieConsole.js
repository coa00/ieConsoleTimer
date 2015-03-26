
(function(){

    /**
     *  console.logger For not implemented　Browser
     */
    if (!this.console || !window.console)
    {
        window.console = {};

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

        window.console.log = function(value){
            var html = "";
            var i= 0;

            for(i;i<arguments.length;i++)
            {
                html += arguments[i];
            }

            div.innerHTML += html + "</br>";
        };
    }

    /**
     *  console.error For not implemented　Browser
     */
    if (window.console.error){
        window.console.error = window.console.log;
    }

    /**
     *  console.timer For not implemented　Browser
     */
    if (!window.console.time)
    {
        window.console.time = function(key){
            window.time || (window.time = {});

            window.time[key] = new Date().getTime();
        };

        window.console.timeEnd = function(key){
            window.time || (window.time = {});

            var processTime = +new Date() - window.time[key];
            window.console.log("Time " + key + ":" + processTime + "msec");

            delete window.time[key];
        };
    }
})(this);