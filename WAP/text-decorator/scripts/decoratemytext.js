
var bigSelected = true;
var intervalId;

function setFont(){
document.getElementById('font').style.fontFamily ='Impact';
document.getElementById('font2').style.fontFamily ='Impact';
document.getElementById('main').style.marginLeft = '5%';
}



function legend() {
    ftype.styl
}


function stoper() {
    if (bigSelected) {
        intervalId = setInterval(big, 500);
        bigSelected = false;
    }
    else {
        clearInterval(intervalId);
        bigSelected = true;
    }
}

function big() {
    var x = window.getComputedStyle(document.getElementById('text')).fontSize;
    larger = parseInt(x) + 2 + 'px';
    document.getElementById('text').style.fontSize = larger;
}
function change() {
    if (document.getElementById('check-box').checked == true) {
        document.getElementById('text').style.fontWeight = 'bold';
        document.getElementById('text').style.color = 'green';
        document.getElementById('text').style.textDecoration = 'underline';
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }
    else {
        document.getElementById('text').style.fontWeight = 'normal';
        document.getElementById('text').style.color = 'black';
        document.getElementById('text').style.textDecoration = 'none';
        document.body.style.backgroundImage = 'none';
    }
}




