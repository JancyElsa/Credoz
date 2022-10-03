//  Taxcalculation Assignment
function taxCalculator()
{
    var salary=document.getElementById("sal").value;
    if(salary<=300000)
    {
        var tax;
         tax=(salary/100)*8
         document.getElementById("rst").value=tax;
    }
    else if(salary>300000 && salary<500000)
    {
        var tax;
        tax=(salary/100)*10
        document.getElementById("rst").value=tax;
    
       }
    else if(salary>500000 && salary<800000)
    {
        var tax;
        tax=(salary/100)*12
        document.getElementById("rst").value=tax;
    }
    else if(salary>800000 && salary<1000000)
    {
        var tax;
        tax=(salary/100)*14
        document.getElementById("rst").value=tax;
    }
    else if(salary>1000000)
    {
        var tax;
        tax=(salary/100)*16
        document.getElementById("rst").value=tax;
    }

    agelimit()
function agelimit(){
    
     age = document.getElementById("age").value;
    if (age<18 || age>60)
    {
        var x =  document.getElementById("rst").value;
    ageres = (x/100)*50;
    document.getElementById("ageres").value = ageres;
    
    }
   
    else if (age>18 && age<60) {
        gender();
       }
      
   } 
   

   
   function gender(){
    
    if (document.getElementById("female").checked)
    {
        var x=document.getElementById("rst").value;
        ageres = (x/100)*10;
        document.getElementById("ageres").value = ageres;
        
    }
    else if (document.getElementById("male").checked){
  document.getElementById("ageres").value = document.getElementById("rst").value;
    }
   }
}