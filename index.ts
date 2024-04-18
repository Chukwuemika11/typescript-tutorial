var firstName: string ='pedro'
const parents : number = 24

const increment = (counterVal: number) =>{
    return counterVal + 1
}

const counter: number = increment(20)



interface IUser{
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
}

const fetchData = (apiUrl:string):Promise<IUser> =>{
    return fetch(apiUrl)
    .then((response)=> response.json())
}

interface IProgrammingLanguage{
    name: string;
    awesome?: boolean;
}

const typescript : IProgrammingLanguage = {
    name: "typescript",
    awesome: true,
}


enum Cheese{
    cheddar = "cheddar",
    gouda = "gouda",
    goat = "goat",
    blueMould = "blueMould",
}

const serveCheese = (cheeseType: Cheese, servings:number)=>{
    console.log(`You want ${servings} of ${cheeseType}`)
}