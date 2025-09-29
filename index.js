var text = [
        '_',
        '_',
        'm_',
        'ma_',
        'ma_',
        'mak_',
        'make_',
        'make_',
        'make',
        'make',
        'make_',
        'make_',
        'make',
        'make',
        'make_',
        'make_',
        'make'
    ];

var text2 = [
    'art_',
    'art_',
    'art ',
    'art ',
    'art_',
    'art_',
]

var i = 0;
var speed = 200;

function typeWriter() {
    if(i < text.length){
        document.getElementById("make").innerHTML = text[i];
        i++;
        setTimeout(typeWriter, speed);
    } else {
        i = 0;
        typeWriter2();
        artAnimation();
    }
}

function typeWriter2(){
    if(i < text2.length){
        document.getElementById("art").innerHTML = text2[i];
        i++;
        setTimeout(typeWriter2, speed);
    }else{
        document.getElementById("art").classList.add("rainbow");
        setTimeout(shrink, 2000);
    }
}

function artAnimation(){
    document.getElementById("art").style.display = 'block';
    document.getElementById("make").classList.add("scroll");
}

function shrink(){
    document.getElementById("intro").classList.add("shrink");
    document.getElementById("main").style.display = 'block';
}

typeWriter();