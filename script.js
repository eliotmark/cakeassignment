function eat_cake(str) {
    var first = "";
    var last = "";
    var ending = "";
    if(str.length%2 == 0) {
        first = str.substring(0, str.length/2);
        last = str.substring(str.length/2, str.length);
    }else{
        first = str.substring(0, str.length/2+.5);
        last = str.substring(str.length/2+.5, str.length);
    }
    var y = 0;
    for(var i=0; i<last.length; i++) {
        if(last.substring(i, i+1) == first.substring(0, 1)) {
            y = 0;
            for(var j=i; j<last.length; j++) {
                if(last.substring(j, j+1) == first.substring(y, y+1)) {

                }else{
                    break;
                }
                y++;
                if(j == last.length-1) {
                    ending = first.substring(0, y);
                }
            }
        }
    }
    if(ending == "") {
        return 1;
    }
    return str.length/ending.length;
}

function tester() {
    document.getElementById("output").innerHTML += eat_cake("All peasants will get non-equal amounts and the same sequence of M&Ms.");
}