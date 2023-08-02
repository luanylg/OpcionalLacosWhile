var batatafrita = require("readline-sync");
var ka = 0;
var he = 1;
var rs = 0;
while (rs < 10) {
    rs++;
    var f = ka + he;
    console.log(f);
    he = ka;
    ka = f;
}
