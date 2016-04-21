'use strict';

function setBgColorById(id, sColor) {
    var elem;

    if (document.getElementById) {
        if (elem = document.getElementById(id)) {
            if (elem.style) {
                elem.style.backgroundColor = sColor;

                return 1;   // success
            }
        }
    }

    return 0;               // failure
}

setBgColorById('color-1', '#fea');
setBgColorById('color-2', '#7f7');
setBgColorById('color-3', '#fe7');
setBgColorById('color-4', '#5fa');
setBgColorById('color-5', '#f53');

function update1(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('color-1').style.backgroundColor = '#' + jscolor
}

function update2(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('color-2').style.backgroundColor = '#' + jscolor
}
function update3(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('color-3').style.backgroundColor = '#' + jscolor
}
function update4(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('color-4').style.backgroundColor = '#' + jscolor
}
function update5(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('color-5').style.backgroundColor = '#' + jscolor
}

update1('#fea');
update2('#7f7');
update3('#fe7');
update4('#5fa');
update5('#f53');
