import React from 'react'

const TestJs = () => {
   const arr = [1,2,3,4,5,6] 
   //2* reduce
   console.log(arr.reduce((iv,fv)=>{
    return fv=iv+fv
   },0))
   //3* filter
   console.log(arr.filter((iv,fv)=>{
    if(iv>2)
    return iv
   }))
   let result = []
   //4* forEach
   console.log(arr.forEach((v,i)=>{
    result.push(
        <div>{i+1} {v+1}</div>
    )
   }))
   //5* join
   const fruits = ['Apple', 'Grapes', 'Kela']
   console.log(fruits.join(' and '))
   //6 slice
   console.log(arr.slice( 1 ))
   //7 splice
   console.log(arr.splice( 1, 2, 12 ))
   //33 async-await
   const func = async () => {
    const querty = await dur
    return 2
   }
   //8 setTimeout
   setTimeout(()=>{
    console.log('Hi')
   },1000)
   //9 setInterval
   setInterval(()=>{
    console.log('tick')
   },1000)
   //10 Promise
   let prom = new Promise((res,rej)=>{
    let a = 10
    if(a==10) res('Hi')
    else rej('Bye')
   })

   //11* fetch 
   async function logJSONData() {
    const response = await fetch("http://example.com/movies.json");
    const jsonData = await response.json();
    console.log(jsonData);
  }

   //12callbacks
   function a(func){
    return func*2
   }

   a()

   const obj = {
    first: 'Gaurav',
    second: 'Kumar'
   }

   //13 Call 14 Apply 15 Bind
   let a = func.call(obj,'Gaurav','Kumar')
   let b = func.apply(obj,['Gaurav','Kumar'])
   let c = func.bind(obj,'Gaurav','Kumar')

   //17 Immediate invoked function
   (function (){
    return 1})()

   //18 HOF is Callback function

   //19 *this
   function Person1(name,age,gender){
    this.name = name
    this.age = age
    this.gender = gender
   }

   var person11 = new Person1('Vivek',76,'male')
   console.log(person11)

   function f(){
    console.log(this)
   }

   //20* 21* exec & test
   const regex1 = RegExp('foo*', 'g');
   const str1 = 'table football, football';
   let array1;

   while((array1 = regex1.exec(str1)) !== null){
    console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`)
   }

   const stry = 'table football';

   const regex = new RegExp('foo*')
   const globalRegex = new RegExp('foo*', 'g')

   console.log(regex.text(stry));

   console.log(globalRegex.lastIndex)

   console.log(globalRegex.test(stry))




   // 22 currying
   function first(){
    return function second(){
        return 1
    }
   }
   console.log(first())

   //23 closure

   function parent(){
    let a = 1
    function child(){
        let b = 2
        return a + b
    }
   }

   console.log(parent())

   //24* memoisation
   function memoizedAddTo256(){
    var cache = {}

    return function(num){
        if(num in cache){
            console.log('cached value')
            return cache[num]
        }
        else {
            cache[num] = num + 256
            return cache[num]
        }
    }
   }

   var memoizedFunc = memoizedAddTo256()

   memoizedFunc(20)
   memoizedFunc(20)

   //25 charAt()
   const str = 'GauravKumar' 
   console.log(str.charAt(0))

   //26 arrow
   let aaa = () => 3

   console.log(aaa())

   //27* Object creation methods
   function Person(name,age,gender){
    this.name = name
    this.age = age
    this.gender = gender
   }

   var person1 = new Person('Vivek',76,'male')
   console.log(person1)

   //28* Generator functions w & w/o arguments
   function* idMaker() {
    let index = 0
    while (true) {
        yield index++
    }
   }

   const gen = idMaker()

   console.log(gen.next().value)
   console.log(gen.next().value)
   console.log(gen.next().value)

   function* logGenerator() {
    console.log(0)
    console.log(1, yield)
    console.log(2, yield)
    console.log(3,yield)
   }

   const gens = logGenerator()

   gens.next()
   gen.next('parval')

   //33* Try catch
   try {
    try {
        throw new Error('oops')
    } finally {
        console.log('finally')
    } 
    }
    catch (ex) {
        console.error('outer',ex.message)
   }
   
   //31* Object Destructuring
   let [fot,bot,cot,dot] = [1,2,3,4]

   console.log(fot)
   const objName = {name: 'GauravKumar'}
   const {aName:bHume} = objName

   //32* Rest operator

   function spread(...args){
    console.log(...args)
    return 1
   }

   function sum(...theArgs) {
    let total = 0
    for (const arg of theArgs) {
        total += arg
    }
    return total
   }

   console.log(sum(1,2,3,4,5))

   //34* Spread Operator

   let array = [2,3,4,5]
   let allArr = [1, ...array, 6, 7]
   let objVal = {find: 'Astriya'}
   const objTot = {...objVal, to: 'him'}

   //16* Copy
    let cd = 1
    let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
    let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

    const original = { name: "MDN" };
    original.itself = original;

    // Clone it
    const clone = structuredClone(original);

   //29* WeakSet
   const ws = new WeakSet()
   const foo = {}
   const bar = {}

   ws.add(foo)
   ws.has(foo)
   ws.delete(foo)
   ws.has(foo)
   
   //30* WeakMap
   const wm1 = new WeakMap()
   const wm2 = new WeakMap()
   const wm3 = new WeakMap()

   const o1 = {};
   const o2 = function () {}
   const o3 = window

   wm1.set(o1, 37)
   wm1.set(o2, 'azerty')
   wm2.set(o1, o2)

   wm2.set(o3, undefined)
   wm2.set(wm1, wm2)

   wm1.get(o2)
   wm2.get(o2)
   wm2.get(o3)

   wm1.has(o2)
   wm2.has(o2)
   wm2.has(o3)

   wm3.set(o1, 37)
   wm3.get(o1)

   wm1.has(o1)
   wm1.delete(o1)
   wm1.has(o1)
   
  return (
    <div>
        {
            //1 Map
            arr.map((val,ind) => {
                return <p>{ind}{' '}{val}{' '}</p>
            })
        }
    </div>
  )
}

export default TestJs