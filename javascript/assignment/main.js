//Find Grade of Students
function findGrade()
{
    var no=document.getElementById("rollno").value
    var name=document.getElementById("sname").value
    console.log(document.getElementById("sname").value)
    var clas=document.getElementById("sclass").value
    var section=document.getElementById("ssection").value
    var marks=document.getElementById("tmarks").value
    if(marks>90 && marks<100)
    {
        document.getElementById("para").innerHTML="Grade of" +" " + name +" "+ "is:S grade"
    }
    else if(marks>80 && marks<90)
    {
        document.getElementById("para").innerHTML="Grade of" +" " + name +" "+ "is:A grade"
    }
     else if(marks>70 && marks<80)
    {
        document.getElementById("para").innerHTML="Grade of" +" " + name +" "+ "is:B grade"
    }
    else if(marks>60 && marks<70)
    {
        document.getElementById("para").innerHTML="Grade of" +" " + name +" "+ "is:C grade"
    }
     else if(marks>50 && marks<60)
    {
        document.getElementById("para").innerHTML="Grade of" +" " + name +" "+ "is:D grade"
    }
    else if(marks>40 && marks<50)
    {
        document.getElementById("para").innerHTML="Grade of" +" " + name +" "+ "is:E grade"
    }
     else if(marks>0 && marks<40)
    {
        document.getElementById("para").innerHTML="Student" +" " + name +" "+ "has failed"
    }
    else{
        document.getElementById("para").innerHTML="Invalid marks"
    }
    

}
//Finding no.of days in a month
function noOfDays(){
    var a=document.getElementById("yr").value
    
    // console.log(document.getElementById("yr").value)
    // console.log(document.getElementById("month").value)
    if(a%4==0)
    {
        var b=document.getElementById("month").value
        
        switch (b){
            case "January":
                console.log("January has 31 days");
                break;
            case "Febraury":
                console.log("Febraury has 29 days");
                break;
            case "March":
                console.log("March has 31 days");
                break;
            case "April":
                console.log("April has 30 days");
                break;
            case "May":
                console.log("May has 31 days");
                break;
            case "June":
                console.log("June has 30 days");
                break;
            case "July":
                console.log("July has 31 days");
                break;
            case "August":
                console.log("August has 31 days");
                break;
            case "September":
                console.log("September has 30 days");
                break;
            case "October":
                console.log("October has 31 days");
                break;
            case "November":
                console.log("November has 30 days");
                break;
            case "December":
                console.log("December has 31 days");
                break;
        }
    }
    
    else
    {
        var b=document.getElementById("month").value
        switch (b){
            case "January":
                console.log("January has 31 days");
                break;
            case "Febraury":
                console.log("February has 28 days");
                break;
            case "March":
                console.log("March has 31 days");
                break;
            case "April":
                console.log("April has 30 days");
                break;
            case "May":
                console.log("May has 31 days");
                break;
            case "June":
                console.log("June has 30 days");
                break;
            case "July":
                console.log("July has 31 days");
                break;
            case "August":
                console.log("August has 31 days");
                break;
            case "September":
                console.log("September has 30 days");
                break;
            case "October":
                console.log("October has 31 days");
                break;
            case "November":
                console.log("November has 30 days");
                break;
            case "December":
                console.log("December has 31 days");
                break;
        }
        

        
    }
}
//India state and capital viceversa in dropdown
function state()
{
    let a=document.getElementById("state").value;
    document.getElementById("city").value=a;
    
}
function city()
{
    let b=document.getElementById("city").value;
    document.getElementById("state").value=b;
    
}

