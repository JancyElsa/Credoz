// // document.getElementById("para").innerHTML="hi i am changed para text";
// // document.getElementById("para").style.backgroundColor="violet";
// // document.getElementById("para").style.color="yellow";
// // document.getElementsByClassName("para1")[0].style.color="pink";
// // document.getElementsByClassName("para2")[0].style.color="orange";
// // document.getElementsByClassName("para3")[0].style.color="red";
// // document.getElementById("para").src="./img/design-logo.JPG";
// // function changebgnColor()
// // {
// //     document.getElementById("btn").style.backgroundColor="blue";
// // }
// // function selectedCity()
// // {
// //     var cty=document.getElementById("country").value;
// //     document.getElementById("slcCty").innerHTML="Selected city:"+cty;
    
// // }
// // function changeColor()
// // {
// //     document.getElementById("btn1").style.color="orange";
// // }
// // function changeBgnColor()
// // {
// //     document.getElementById("btn2").style.backgroundColor="red";
// // }
// // function changeBackground()
// // {
// //     document.getElementById("fname").style.backgroundColor="pink";
// // }
// // Assignment.html
// function Addition()
// {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=+a + +b;
//     document.getElementById("rst").innerHTML=c;
// }
// function Subtraction()
// {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=a-b;
//     document.getElementById("rst").innerHTML=c;
// }
// function Multiplication()
// {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=a*b;
//     document.getElementById("rst").innerHTML=c;
// }
// function Division()
// {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=a/b;
//     document.getElementById("rst").innerHTML=c;
// }
// // Arithmetic operators using radio buttons
// function Addition1()
// {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=+a + +b;
//     document.getElementById("rst1").innerHTML=c;
// }
// function Subtraction2()
// {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=a-b;
//     document.getElementById("rst1").innerHTML=c;
// }
// function Multiplication3()
// {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=a*b;
//     document.getElementById("rst1").innerHTML=c;
// }
// function Division4()
// {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=a/b;
//     document.getElementById("rst1").innerHTML=c;
// }
// // Arithmetic operators using Drop down list

// // Arithmetic operators using conditions
// function calculator(actType)
// {
//     console.log(actType)
//     if(actType=='add')
//     {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=+a + +b;
//     document.getElementById("rst").innerHTML=c;
//     }
//     else if(actType=='sub')
//     {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=a-b;
//     document.getElementById("rst").innerHTML=c;
//     }
//     else if(actType=='mul')
//     {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=a*b;
//     document.getElementById("rst").innerHTML=c;
//     }
//     else if(actType=='div')
//     {
//     var a=document.getElementById("no1").value;
//     var b=document.getElementById("no2").value;
//     var c=a/b;
//     document.getElementById("rst").innerHTML=c;
//     }
// }
// //Taxcalculation Assignment
// function taxCalculator()
// {
//     var salary=document.getElementById("sal").value;
//     if(salary<=300000)
//     {
//         var tax;
//          tax=(salary/100)*8
//          document.getElementById("rst").innerHTML=tax;
//     }
//     else if(salary>300000 && salary<500000)
//     {
//         var tax;
//         tax=(salary/100)*10
//         document.getElementById("rst").innerHTML=tax;
    
//        }
//     else if(salary>500000 && salary<800000)
//     {
//         var tax;
//         tax=(salary/100)*12
//         document.getElementById("rst").innerHTML=tax;
//     }
//     else if(salary>800000 && salary<1000000)
//     {
//         var tax;
//         tax=(salary/100)*14
//         document.getElementById("rst").innerHTML=tax;
//     }
//     else if(salary>1000000)
//     {
//         var tax;
//         tax=(salary/100)*16
//         document.getElementById("rst").innerHTML=tax;
//     }

//     agelimit()
// function agelimit(){
    
//      age = document.getElementById("age").value;
//     if (age<18 || age>60)
//     {
//         var salary =  document.getElementById("rst").value ;
//     ageres = (x/100)*50;
//     document.getElementById("ageres").value = ageres;
    
//     }
   
//     else if (age>18 && age<60) {
//         gender();
//        }
      
//    } 
//    gender()
//    x=document.getElementById("result").value;
   
//    function gender(){
    
//     if (document.getElementById("female").checked)
//     {
//         x=document.getElementById("result").value;
//         ageres = (x/100)*10;
//         document.getElementById("ageres").value = ageres;
//         console.log(x);
//     }
//     else if (document.getElementById("male").checked){
//   document.getElementById("ageres").value = document.getElementById("result").value;
//     }
//    }
// }




