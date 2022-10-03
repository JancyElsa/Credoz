class employee1{
    name:string;
    age:number;
    salary:number;
    tax:number;
    ageres:number;
    x:string;

    constructor(name:string,salary:number){
console.log('i am a constructor')
this.name=name
this.salary=salary

    }
    taxCalculator()
    {
        
        if(this.salary<=300000)
        {
            
             this.tax=(this.salary/100)*8
             console.log(`Name:${this.name} Tax amount to pay ${this.tax}`)
             
        }
        else if(this.salary>300000 && this.salary<500000)
        {
            
            this.tax=(this.salary/100)*10
            console.log(`Name:${this.name} Tax amount to pay ${this.tax}`)
            
        
           }
        else if(this.salary>500000 && this.salary<800000)
        {
            
            this.tax=(this.salary/100)*12
            console.log(`Name:${this.name} Tax amount to pay ${this.tax}`)
            
        }
        else if(this.salary>800000 && this.salary<1000000)
        {
            
            this.tax=(this.salary/100)*14
            console.log(`Name:${this.name} Tax amount to pay ${this.tax}`)
            
        }
        else if(this.salary>1000000)
        {
        
            this.tax=(this.salary/100)*16
            console.log(`Name:${this.name} Tax amount to pay ${this.tax}`)
            
        }
    }
    agelimit(age:number)
{
    
    this.age=age;
    if (this.age<18 || this.age>60)
    {
    
    this.ageres = (this.tax/100)*50;
    console.log(`Name:${this.name} Tax amount to pay after exemptions ${this.ageres}`)
    }
   
    else if (this.age>18 && this.age<60) {
        empobj.gender('female');
       }
      
   } 
   gender(x:string){
    this.x=x;
    if(this.x='female')
    {
        
        this.ageres = (this.tax/100)*10;
        console.log(`Name:${this.name} Tax amount to pay after exemptions ${this.ageres}`)
        
    }
    else if (this.x='male'){
  this.ageres = this.tax
    }
   }
}


var empobj=new employee1('elsa',300000);
empobj.taxCalculator();
empobj.agelimit(16);