var CountDownDateS = new Date("Sep 04, 2025 00:00:00").getTime();
        var x = setInterval(()=>{
            var now = new Date().getTime();
            var distance = CountDownDateS - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("sdays").innerHTML = days;
        document.getElementById("shours").innerHTML = hours;
        document.getElementById("sminutes").innerHTML = minutes;
        document.getElementById("sseconds").innerHTML = seconds;
        },1000);
