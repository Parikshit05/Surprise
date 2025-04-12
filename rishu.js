var CountDownDateR = new Date("Apr 06, 2026 00:00:00").getTime();
        var x = setInterval(()=>{
            var now = new Date().getTime();
            var distance = CountDownDateR - now;

        var rdays = Math.floor(distance / (1000 * 60 * 60 * 24));
        var rhours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var rminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var rseconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("rdays").innerHTML = rdays;
        document.getElementById("rhours").innerHTML = rhours;
        document.getElementById("rminutes").innerHTML = rminutes;
        document.getElementById("rseconds").innerHTML = rseconds;
        },1000);
