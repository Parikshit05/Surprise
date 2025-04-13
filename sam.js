var CountDownDateG = new Date("Dec 08, 2025 00:00:00").getTime();
        var x = setInterval(()=>{
            var now = new Date().getTime();
            var distance = CountDownDateG - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("gdays").innerHTML = days;
        document.getElementById("ghours").innerHTML = hours;
        document.getElementById("gminutes").innerHTML = minutes;
        document.getElementById("gseconds").innerHTML = seconds;
        },1000);
