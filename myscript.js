setInterval(function() {
    var notcounter = document.getElementsByClassName("count-inner")[0].innerHTML * 1 + document.getElementsByClassName("count-inner")[1].innerHTML * 1;
    console.log(notcounter);
    if (notcounter > 0) {
        if (confirm(`${notcounter} unread notifications on twitter! click OK if you wanna mark as read :)`)) {
            document.getElementsByClassName("count-inner")[0].innerHTML = "";
            document.getElementsByClassName("count-inner")[1].innerHTML = "";
        }
    }
}, 2000);