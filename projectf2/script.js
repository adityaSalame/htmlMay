/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    

    let ans=[];
    
    let i=0;
    arr.map(match);
    function match(num){
        if(num.profession=="developer"){
            ans[i]=num;
            i++;
        }
        
    }
    console.log(ans);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let ans=[];
    
    let i=0;
    arr.forEach(match);
    function match(num){
        if(num.profession=="developer"){
            ans[i]=num;
            i++;
        }
        
    }
    console.log(ans);
  }
  let exist=false;
  function addData() {
    //Write your code here, just console.log
    let idpresent=arr.length+1;
    let a={id:idpresent++,name:"susan",age:"20",profession:"intern"};
    if(exist==false){
        exist=true;
        
        arr.push(a);
    }
    else{
        arr.filter(func);
        function func(num){
            if(num.name=="susan"){
                console.log("name:",num.name," already exists.");
            }
        }
    }
    
    
    
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr=arr.filter(func);
    function func(num){
        if(num.profession!="admin"){
            return num;
        }
    }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let ids=arr.length+1;
    let brr=[
        { id: ids++, name: "josh", age: "24", profession: "hr" },
        { id: ids++, name: "jim", age: "22", profession: "manager" },
        { id: ids++, name: "himesh", age: "23", profession: "security" },   
    ];
    let b=[],idx=0;
    let val=true;
    for(let i=0;i<brr.length;i++){
        val=true;
        for(let j=0;j<arr.length;j++){

            if(brr[i].name==arr[j].name){
                val=false;
                console.log(brr[i]);
            }
        }
        if(val==true){
           
            arr=arr.concat(brr[i]);
        }
        else{
            console.log("name:",brr[i].name," already exists.");
        }
    }
    
    
    console.log(arr);
  }