var sessional;
var min = [95,85,75,60,50,40];
const gr = (5/3);
var lines;
function calc(sessional) {
    lines = '';
    lines += '<tr><th colspan = "6" id="top">Minimum marks required ( /100) for respective grades</th></tr>';
    lines += '<tr id="mid"><th>O (10)</th><th>E (9)</th><th>A+ (8)</th><th>A (7)</th><th>B+ (6)</th><th>B (5)</th></tr><tr>';
    if(sessional > 40) {
        alert('Enter Value <= 40');
        return;
    }
    var required;
    for(var i = 0; i < min.length; i++) {
        required = ((min[i]-sessional) * gr).toFixed(2);
        if(required <= 100)
            lines += '<td>'+Math.ceil(required)+'</td>';
        else
            lines += '<td>LOL</td>';
    }
    lines += '</tr>';
    document.getElementById('paste').innerHTML = lines;
}

