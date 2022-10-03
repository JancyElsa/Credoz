console.log('-------variable Annotations------');
let a: number = 20;
let b: number = 40;
let c: number = a + b;
console.log(c)
console.log('-------function Annotations------');
function add(a: number, b: number): number {
    return a + b;
}
let res = add(5, 10)
console.log('The addition of two numbers is ' + res);
console.log('--------object Annotations')
var stulist: {
    id: number,
    name: string,
    class: number,
    section: string,
    gender: string,
    age: number
}
stulist = {
    id: 101,
    name: 'jancy',
    class: 10,
    section: 'A',
    gender: 'female',
    age: 28
}
console.log(stulist);
console.log('Template string');
let fname: string = 'jancy';
let lname: string = 'mary';
let classicconcat: string = "My first name is" + " " + fname + " " + "and my last name is " + lname;
console.log(classicconcat);
let templatestringconcat: string = `My first name is ${fname} and my last name is ${lname}`;
console.log(`template string-${templatestringconcat}`);
console.log('--------Array annotations------')
let vehicles: string[] = ['car', 'bike', 'scooter']
// let vehicles:string[]
// vehicles=['car','bike','scooter']
let ids: Array<number> = [1, 2, 3, 4, 5];
console.log('-----any data type is dynamic data type-------')
let x: any = 'i am dynamic';
x = 100;
x = false;
x = null;
let person1: any[] = ['jancy', 22];
//function optional parameters
function greet(greeting: string, name?: string): string {
    return greeting + ' ' + name + '!'

}
console.log(greet('hello', 'elsa'))
console.log(greet('hi'))
//function default parameters
function greet1(greeting: string, name: string = 'jancy'): string {
    return greeting + ' ' + name + '!'

}
console.log(greet1('hello', 'elsa'))
console.log(greet1('hi', 'lucky'))
console.log('-----Anonymous function--------')
let addany = function (val1: number, val2: number) {
    return val1 + val2;
}
console.log(addany(10, 20));
console.log('------Arrow Functions---------')
let any = (num1: number, num2: number): number => num1 + num2
console.log(any(10, 40))
console.log('-----class-----')
class college {
    principalname:string
    noOfHOD:number
    

    constructor(name:string,HOD:number) {
        console.log('i am a constructor');
        this.principalname=name
        this.noOfHOD=HOD
    }
    Head() {
    console.log(`I am ${this.principalname} principal of ABC Engineering college.In our college we have ${this.noOfHOD} departments `)
        }
    }
//     let clg = new college();
// clg.Head()


        class dept extends college{
cseHOD:string
eeeHOD:string
eceHOD:string
civilHOD:string
mechHOD:string
automobHOD:string
position:string
constructor(pos:string)
{
    
    super('lucky',10)
    this.position=pos
    


}

HODnames(cse:string,ece:string,eee:string,civil:string,mech:string,auto:string,){
    this.cseHOD=cse
    this.eeeHOD=ece
    this.eceHOD=eee
    this.civilHOD=civil
    this.mechHOD=mech
    this.automobHOD=auto
    console.log(`Head of Department of CSE is ${this.cseHOD},
Head of Department of EEE is ${this.eeeHOD},
Head of Department of ECE is ${this.eceHOD},
Head of Department of CIVIL is ${this.civilHOD},
Head of Department of MECH is ${this.mechHOD},
Head of Department of AUTOMOBILE is ${this.automobHOD}`
)
console.log(`I am ${this.principalname} principal of ABC Engineering college.In our college we have ${this.noOfHOD} departments and my position is ${this.position}`)
}
        

}
let department=new dept('manager')
department.HODnames('jancy','elsa','juli','lucky','florance','fiona')





