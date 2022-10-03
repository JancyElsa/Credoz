
    const students=[
    {
    rollNumber:101,
    Name:'elsa',
    class:10,
    section:'A',
    TotalMarks:474
},
{
    rollNumber:102,
    Name:'juli',
    class:10,
    section:'A',
    TotalMarks:480
},
{
    rollNumber:103,
    Name:'jancy',
    class:10,
    section:'A',
    TotalMarks:450
},
{
    rollNumber:104,
    Name:'lucky',
    class:10,
    section:'A',
    TotalMarks:380
},
{
    rollNumber:105,
    Name:'raja',
    class:10,
    section:'A',
    TotalMarks:390
}];
// const students=['juli','elsa','jancy','lucky']
// let dspval="";
// for(var i=0;i<=students.length;i++)
// {
// dspval+="<li>" + students[i] + "</li>"
// }
// document.getElementById("para").innerHTML=dspval;
var dspval="";
students.forEach(function(student){
    
    
    dspval+="<tr>";
    dspval+="<td>" + student.rollNumber + "</td>"
    dspval+="<td>" + student.Name + "</td>"
    dspval+="<td>" + student.class + "</td>"
    dspval+="<td>" + student.section + "</td>"
    dspval+="<td>" + student.TotalMarks + "</td>"
    dspval+="</tr>"
    
})

document.getElementById("tbl").innerHTML=dspval;

console.log(document.getElementById("tbl").innerHTML=dspval)

