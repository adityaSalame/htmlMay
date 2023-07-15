const url="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
const container=document.getElementById("menuitem");
async function getMenu(){
    const response = await fetch(url);
      const data = await response.json();
     //console.log(data);
       const menuitems = data;
       menu(menuitems);
}

function menu(menuitems){
    let menuitem=[];
    for(let i=0;i<menuitems.length;i++){
        menuitem.push(menuitems[i]);
    }
    displaymenu(menuitem);
}

function displaymenu(menuitem){
    container.innerHTML=``;
    for (let i = 0; i < menuitem.length; i++) {
        const item = menuitem[i];
        console.log(menuitem[i]);
        let name=item.name;
        let price=item.price;
        let source=item.imgSrc;
        container.innerHTML += `
        
        <div class="card" >
            <img src="${source}" style="width:300px;">
            <h3 style="margin:2px;padding-left:2px">${name}</h3>

            <div style="display:flex;align-items:center;justify-content:space-between">            
            <h4 style="margin:2px;padding-left:2px">$${price}/-</h4><i class="fa-solid fa-plus" style="margin:2px;padding-right:2px" ></i>
            </div>
        </div>

        
          `;
      }

      TakeOrder();
  
}

async function TakeOrder(){
    let first=menuitem[Math.floor(Math.random()*menuitem.length)];
    let second=menuitem[Math.floor(Math.random()*menuitem.length)];
    let third=menuitem[Math.floor(Math.random()*menuitem.length)];
    let pr=[];
    pr.push(first);
    pr.push(second);
    pr.push(third);
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(resolve(pr),2500);
    });

    await myPromise.then(orderPrep());
    
    
}

async function orderPrep(){
    let prom= new Promise(function(resolve,reject){
        setTimeout(resolve({order_status:true, paid:false}))
    });

    await prom.then(payOrder());
//1500
//{order_status:true; paid:false}
}

async function payOrder(){
    let promise= new Promise(function(resolve,reject){
        setTimeout(resolve({order_status:true, paid:true}))
    });

    await promise.then(thankyouFnc());
// 1000
// {order_status:true; paid:true}
}

async function thankyouFnc(){
    window.alert("thankyou for eating with us today!");
}

getMenu();