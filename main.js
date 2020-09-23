let txt1 = 'Uwielbiam JavaScript';
let txt2 = 'Jestem świetnym programistą';

function long(n, m) {
    if (n.length > m.length) {
        return n;
    } else {
        return m;
    }

}



console.log(long(txt1, txt2));