// for loop
function forloop(){
    var i=document.getElementById("no").value
    for(;i<=10;i++)
    {
        console.log(i);
    }
}

// while loop
function whileloop()
{
    var i=0;
    while(i<=10)
{
    console.log(i);
    i++;
}
}
// do while
function dowhileloop(){
do {
    var i=11;
console.log(i);
i++;
}while( i<=10);
}
// switch
var a=1;
switch(a)
{
    case 1:
        a='one';
        break;
        case 2:
        a='two';
        break;
        case 3:
        a='three';
        break;
        default:
            a='not found';

}
console.log('the value is'+a);
var str='janu';
switch(str)
{
    case 'juli':
        console.log('this is juli');
        break;
        case 'elsa':
            console.log('this is elsa');
        break;
        case 'janu':
            console.log('this is janu');
        break;
        default:
            console.log('this is violet');

}






// forloop();
// whileloop();
// dowhileloop();