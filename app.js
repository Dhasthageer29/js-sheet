
                                                //Arrays
                                                // push array
// push();               values sa last la add pannum
// let model=["pen","marker","phone"];     
// model.push("laptop","water","can");
// console.log(model);

                                                          //pop array
// pop();             last  value("can") va revome pannidum
// let model=["pen","marker","phone","laptop","water","can"];
// model.pop();
// console.log(model);

                                                          //toSting array
// toString();   numbersa irunthalum string ga mathirum 
// let model=[97,54,66,77,29];
// let vall=model.toString()
// console.log(vall);
                                                          // concat array
// concat();       maltipule value sa onna sekkum
// let itemmodel=["pen","marker","phone","laptop"];
// let mark=["sharmila","imthiyas","sharuk","famitha"];
// let val=["water","can"];
// let value= itemmodel.concat(mark,val);
// console.log(value);
                      
                                                           //unshift array
// unshift();    values sa startig la add pannum
// let family=["sharmila","imthiyas","sharuk","famitha"];
//  family.unshift("Nizar Ahamed","immu");
//  console.log(family);
                                                           //shift array
//shift();     first la irukura value va delete pannum & ena delete achinum kamikum
//  let family=["sharmila","imthiyas","sharuk","famitha"];
// let val=family.shift();
//  console.log("deleted value",val);
//  console.log(family);

                                                             //slice array
 // slice();  idu slice(0) value sa ena eruka atha apadiyae output la irukum & 
//  slice(2) nu kudutha first rendu value delete pannidum  &
// first Arrayla irukura value change agathu 
                                                                         
 //  let family=["sharmila","imthiyas","sharuk","famitha"];
// let val=family.slice(2)
// console.log(val);  


// let vall=["sharmila","imthiyas","sharuk","famitha"]; 
// let val=vall.slice(0,2)
//  console.log(vall);
// console.log(val);

                                                        //spice array
//  splice() ithukula three value kudukanum first select pannanum intha value nu &
// secound delete anga irunthu ethana value delete va delete pannanymnu sollanum   &
// three anga entha value va replace panna porom nu kudukanum                                                                                                  
// splice();
// let family=["sharmila","imthiyas","sharuk","famitha"];
// family.splice(1,0,200);
// console.log(family);  

//splice();
// let arr=[1,2,3,4,5,6,7,]
//add element
// arr.splice(2,1,1222)
// console.log(arr);
//delete element
// arr.splice(3,1)
// console.log(arr);
//replace element
// arr.splice(3,1,500);
// console.log(arr)


                                                                //practice
// let companies=["microsoft","uber","google","IBM","netflix"];
// let val =["Amozon"];
// companies.splice(0,1,);
// companies.splice(1,1,"Ola")
// let result=companies.concat(val)
// console.log(result)

                                                                  // functions
//  function myfunction(){
//  console.log("hi iam sharuk");
//  console.log("web developer");
//  }
//  myfunction();

// function myMessage(x,y){
//  console.log(x+y);
// }
// myMessage(45,34);

//  function myMessage(x,y){
//     val=x+y;
//     return val;
//  }
// let tall=myMessage(39,1);
// console.log(tall);


                                                                //   Arrow function
// let val=(x,y)=>{
//     return x+y;
// }
// console.log(val(45,8))

// let mall=val(33,5)
// console.log(mall)

// let mall=(x,y)=>{
//     return x*y;
// }
                                                        //  practice

// function countVowels(str){
//     let conut=0;
//     for (const char of str) {
//         if(
//         char==="a"||
//         char==="e"||
//         char==="i"||
//         char==="o"||
//         char==="u"
//         ){
//             conut++;
//         }
//      console.log(conut);
//  }
// }

// const myMessage=(str)=>{
//     let conut=0;
//     for (const char of str) {
//         if(
//         char=="a"|| 
//         char=="e"||
//         char=="i"||
//         char=="o"||
//         char=="u"){
//             conut++;
//         }
// console.log(conut);
//  }
// }

                                                                //foreach 
// let Arr=[1,2,3,4,5,6,7,8,]
// Arr.forEach(function myMessage(mall,){
//     console.log(mall)
// })                                                  
                                                                 //foreach arrow method
// let arr=[1,2,3,4,5,6,7,8,]
// arr.forEach((val,)=>{
//     console.log(val)
// })

// ex:2
// let arr=["tamil","hindi","telugu","malayalam"]
// let sum=["karnataka"]
// let arrs=[123,1,2,3,4]
// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr.concat(sum,arrs))
// })                  
                                                                   //Practice

// let arr=[1,7,4,9,555,7,44,9];
// arr.forEach(function(num){
// console.log(num*num)
// })                        
  

// let prac=[222,4,66,7,3,];
// prac.forEach((arow)=>{
// console.log(arow*arow);
// })


                                        //another way to call, practice question
// let arr=[44,5,2,6,1,6,];
// let newType=(arow)=>{
//     console.log(arow*arow);
//     }
//     arr.forEach(newType);
//     console.log(arr);

                                                // map method
// let arr=[1,2,3,4,5,6,];
// let calnew=arr.map((val)=>{
// return val+val;
// })
// console.log(calnew);
                                        
                                                // filter method
// let arr=[3,5,2,7,1,8,25,55,22,88,44,98,];
// let wal=arr.filter((val)=>{
    // return val % 2 == 0;
    // return val % 2 != 0;
    // return val > 55;
    // return val < 55;
// })
// console.log(wal);

                                                //    reduce method 
// let arr=[1,2,3,4,5,55,3,4444,55,88,222,];

// let wal=arr.reduce((cal,val)=>{
//     // return res+val;
//     return cal>val?cal:val;
// })
// console.log(wal);

                                                    //practice
// let arr=[ 99,88,9,65,96,93,99,22,55,77];
// let call=arr.filter((val)=>{
//     return val>90;
// }) 
// console.log(call);

                                                    //practice no:2
// let num=prompt("enter the number:");
// let arr=[];
// for(let i=1;i<=num;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let ball=arr.reduce((res,mes)=>{
//     return res+mes;
// })
// console.log(ball);

// let tall=arr.reduce((res,mes)=>{
//     return res*mes;
// })
// console.log(tall);
                                        //   DOM propertys go to  kar.htmlpage
//TAGNAME PROPERTIES;                                       // 
// let texts=document.querySelector("div");
// console.dir(texts.tagName);    

//INNERHTML;
// let texts=document.querySelector("body");
// console.dir(texts.innerHTML);    

//INNERTEXT; idu hidden la irukura text ta kamikathu
// let texts=document.querySelector("body");
// console.dir(texts.innerText); 


// textcontent; idu hidden la irukura textta kuda kamikum
// let texts=document.querySelector("h3");
// console.dir(texts.textContent); 
                                                        //  practies
//  let prac=document.querySelector("h2")
//  prac.innerText=h2+"Apna College student";
//  console.dir(prac.innerText) ;
//  prac.innerText=prac.innerText+"Apna College student";  

// prac 2
// let boxes=document.querySelectorAll(".box");
// boxes[0].innerText="the another unice value1";   
// boxes[1].innerText="the another unice value2";
// boxes[2].innerText="the another unice value3";

// looping mothod this prac 2
// let idx=1
// for(box of boxes){
//     box.innerText=`hello ${idx}`;
//     idx++;
// }
                                                    // DOM class 2 Attributes
//  getAttribute;        ithu 2dum html la work pannum
// let headingtag=document.querySelector("h1");
// console.log(headingtag);
// let newline=headingtag.getAttribute("id");
// console.log(newline);

// setAttribute; 
// let idname =document.querySelector("#heading");
// console.log(idname.setAttribute("id","1232"));

// node.style  ithu css style la work pannum
// let stle=document.querySelector("h1")
// let set=stle.style.backgroundColor="orange";
// console.log(set);
// let mal=stle.style.fontSize="5rem";
// console.log(mal);
// let tal=stle.style.alignItems="center";
// console.log(tal);
                                 
                                                //insert Element idu html ilama elements sa add panna use agura 4types tags
// 1.Node.append()                idu div end la show agum
// let btn=document.createElement("button");
// btn.innerHTML="<i>Hai sharuk!<i>"
// console.log(btn);
// let app=document.querySelector("div");
// app.append(btn);
// console.log(app);

// 2.Node.prepend                  idu div starting la show agum
// let btn=document.createElement("button");
// btn.innerHTML="<i>Hai sharuk!<i>"
// console.log(btn);
// let app=document.querySelector("div");
// app.prepend(btn);
// console.log(app);

// Node.before                     idu div vuku mela show agum
// let btn=document.createElement("button");
// btn.innerHTML="<i>Hai sharuk!<i>"
// console.log(btn);
// let app=document.querySelector("div");
// app.before(btn);
// console.log(app);

// Node.after                         idu divuku kila show agum
// let btn=document.createElement("button");
// btn.innerHTML="<i>Hai sharuk!<i>"
// console.log(btn);
// let app=document.querySelector("div");
// app.after(btn);
// console.log(app);

                                        //Node.remove() elements sa remove panna use adum
// let remo =document.querySelector("p")
// remo.remove();

                                                  //practies  question
//  let newBtn=document.createElement("button")  ;
//  newBtn.innerHTML="click me";
//  newBtn.style.color="white";
//  newBtn.style.backgroundColor="red";     
//  newBtn.style.padding="10px";     
//  console.log(newBtn);  ;     
//  let prac= document.querySelector("body")
//   prac.prepend(newBtn);

                                     //practies  question 2      Classlist <-this a new tag notetis this add & remove
// let pract=document.querySelector("p");
// pract.classList.add("newPrac");

// pract.classList.remove("prac");

// pract.setAttribute("class","newPrac");



                                                // Events practies question
// let newBtn=document.querySelector("#mode");
// let crrntMode="light"
// newBtn.addEventListener ("click",()=>{
//     if(crrntMode === "light"){
//         crrntMode = "dark"
//         document.querySelector("body").style.backgroundColor="white";
        
//     }else{
//             crrntMode = "light"
//             document.querySelector("body").style.backgroundColor="black";
//         }
//         console.log(crrntMode)
    
// });

                                              //insert Element idu html ilama elements sa add panna use agura 4types tags
// 1.Node.append()                idu div end la show agum
// let btn=document.createElement("button");
// btn.innerHTML="<i>Hai sharuk!<i>"
// console.log(btn);
// let app=document.querySelector("div");
// app.append(btn);
// console.log(app);

// 2.Node.prepend                  idu div starting la show agum
// let btn=document.createElement("button");
// btn.innerHTML="<i>Hai sharuk!<i>"
// console.log(btn);
// let app=document.querySelector("div");
// app.prepend(btn);
// console.log(app);

// Node.before                     idu div vuku mela show agum
// let btn=document.createElement("button");
// btn.innerHTML="<i>Hai sharuk!<i>"
// console.log(btn);
// let app=document.querySelector("div");
// app.before(btn);
// console.log(app);

// Node.after                         idu divuku kila show agum
// let btn=document.createElement("button");
// btn.innerHTML="<i>Hai sharuk!<i>"
// console.log(btn);
// let app=document.querySelector("div");
// app.after(btn);
// console.log(app);

                                        //Node.remove() elements sa remove panna use adum
// let remo =document.querySelector("p")
// remo.remove();

                                                  //practies  question
//  let newBtn=document.createElement("button")  ;
//  newBtn.innerHTML="click me";
//  newBtn.style.color="white";
//  newBtn.style.backgroundColor="red";     
//  newBtn.style.padding="10px";     
//  console.log(newBtn);  ;     
//  let prac= document.querySelector("body")
//   prac.prepend(newBtn);

                                     //practies  question 2      Classlist <-this a new tag notetis this add & remove
// let pract=document.querySelector("p");
// pract.classList.add("newPrac");

// pract.classList.remove("prac");

// pract.setAttribute("class","newPrac");



                                                // Events practies question
// let newBtn=document.querySelector("#mode");
// let crrntMode="light"
// newBtn.addEventListener ("click",()=>{
//     if(crrntMode === "light"){
//         crrntMode = "dark"
//         document.querySelector("body").style.backgroundColor="white";
        
//     }else{
//             crrntMode = "light"
//             document.querySelector("body").style.backgroundColor="black";
//         }
//         console.log(crrntMode)
    
// });
                                        // class&object
               // prototype
// const sharuk={
//     fullName:"Sharuk Nizar ahamed",
//     age:"22",
//     marks:69.55,
// printmark:function(){
//     console.log("mark",this.marks);
// }
// }     

// const sharuk={
//     contax(){
//         console.log("tax 20%");

//     },
// };
// const imthiyas ={
//     salary:15000
// };
// const imthiyas2 ={
//     salary:15000
// };
// const imthiyas3 ={
//     salary:15000
// };
// const imthiyas4 ={
//     salary:15000,
//     contax(){
//         console.log("tax 30%");
//     }
// };
// const imthiyas5 ={
//     salary:15000
// };
// imthiyas.__proto__= sharuk;
// imthiyas2.__proto__= sharuk;
// imthiyas3.__proto__= sharuk;
// imthiyas4.__proto__= sharuk;
// imthiyas5.__proto__= sharuk;
 
                        // class
// class tataCars{
//     constructor(brand,milage){
//         console.log("hello");
//         this.brand=brand;
//         this.milage=milage;
//     }
// start(){
//     console.log("start");
// }
// stop(){
//     console.log("stop");
// }
// }

// const fortuner=new tataCars("fortuner",15);   
// console.log(fortuner);
// let lixes=new tataCars("lixes",30);
// console.log(lixes)       
                                //  Inheritance
// class sharuk{
//     constructor(){
//         console.log("im sharuk");
//     }
//     eat(){
//         console.log("eat")
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class immu extends sharuk{
// constructor(){
//     super()
//     console.log("i'm immu ")
// }
// }
// let obj= new immu;
// console.log(obj)