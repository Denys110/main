let line = "";
let size = 8;
let letter1 = "#";
let letter2 = "-";
for (count = 0; count < (size * (size + 1)); count++) {
  if (count % (size + 1) == 0) {
    line = line + '\n';
  } else if (count % 2 == 0) {
    line = line + letter1;
  } else {
    line = line + letter2;
  }
}
console.log(line);


var dg=1;      
while(dg<100)                                                                
{
                                                      
  if (dg % 3 == 0)
  {
    console.log("buzz");
  }
  else{
    console.log(dg);
    
  }
  dg+=1;
  
}
   

var a= "" + 1 + 0;                                                         
console.log(a);
var b= "" - 1 + 0;                                                           
console.log(b);
var c=true + false;                                                           
console.log(c);
var d=6 / "3" ;                                                           
console.log(d);
var e="2" * "3" ;                                                           
console.log(e);
var f=4 + 5 + "px";                                                           
console.log(f);
var g="$" + 4 + 5;                                                           
console.log(g);
var h="4" - 2;                                                           
console.log(h);
var i="4px" - 2;                                                           
console.log(i);
var j=7 / 0;                                                           
console.log(j);
var k="-9\n" + 5;                                                           
console.log(k);
var l="  -9\n" - 5;                                                           
console.log(l);
var m=5 && 2;                                                           
console.log(m);
var n=2 && 5;                                                           
console.log(n);
var o=5 || 0;                                                           
console.log(o);
var p=0 || 5;                                                           
console.log(p);
var q=null + 1;                                                           
console.log(q);
var r=undefined + 1;                                                           
console.log(r);
var s=null == "\n0\n";                                                           
console.log(s);
var t=+null == +"\n0\n";                                                           
console.log(t);
