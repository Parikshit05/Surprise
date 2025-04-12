var CountDownDateM = new Date("Feb 19, 2026 00:00:00").getTime();
        var x = setInterval(()=>{
            var now = new Date().getTime();
            var distance = CountDownDateM - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("mdays").innerHTML = days;
        document.getElementById("mhours").innerHTML = hours;
        document.getElementById("mminutes").innerHTML = minutes;
        document.getElementById("mseconds").innerHTML = seconds;
        },1000);
