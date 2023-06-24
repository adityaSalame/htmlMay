
async function fetchData() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  const table = document.getElementById('table');
  const tbody = document.createElement('tbody');
  
  let arr=[];
  fetchData()
    .then(data => {
        //name,id,image,symbol, current_price,total_volume
      console.log(data);
      for(let i=0;i<data.length;i++){
        arr.push(data[i]);
        const c6=document.createElement('td');
        
        const image = document.createElement('img');
        image.src = data[i].image;
        c6.appendChild(image);
        const tr=document.createElement('tr');
        const c1=document.createElement('td');
        c1.textContent=data[i].name;
        
        const c2=document.createElement('td');
        c2.textContent=data[i].symbol;
        const c3=document.createElement('td');
        c3.textContent=data[i].id;
        const c4=document.createElement('td');
        c4.textContent='$'+data[i].current_price;
        const c5=document.createElement('td');
        c5.textContent='$'+data[i].total_volume;
        const c7=document.createElement('td');
        c7.textContent='Mkt Cap: $'+data[i].market_cap;
        const c8=document.createElement('td');
        c8.textContent=data[i].market_cap_change_percentage_24h+'%';
        tr.appendChild(c6);
        tr.appendChild(c1);
        tr.appendChild(c2);
        tr.appendChild(c3);
        tr.appendChild(c4);
        tr.appendChild(c5);
       tr.appendChild(c7);
       tr.appendChild(c8);
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    console.log(arr);
    let x=document.getElementById('tableContainer');
    x.appendChild(table);
    function marketCap(){
        const temp=arr.slice().sort((a,b)=> a.market_cap - b.market_cap);
        const table = document.querySelector('#tableContainer table');
        const tbody = document.createElement('tbody');
        while (table.tBodies.length > 0) {
            table.tBodies[0].remove();
        }
        for(let i=0;i<temp.length;i++){
           
            const c6=document.createElement('td');
            
            const image = document.createElement('img');
            image.src = temp[i].image;
            c6.appendChild(image);
            const tr=document.createElement('tr');
            const c1=document.createElement('td');
            c1.textContent=temp[i].name;
            
            const c2=document.createElement('td');
            c2.textContent=temp[i].symbol;
            const c3=document.createElement('td');
            c3.textContent=temp[i].id;
            const c4=document.createElement('td');
            c4.textContent='$'+temp[i].current_price;
            const c5=document.createElement('td');
            c5.textContent='$'+temp[i].total_volume;
            const c7=document.createElement('td');
            c7.textContent='Mkt Cap: $'+temp[i].market_cap;
            const c8=document.createElement('td');
            c8.textContent=temp[i].market_cap_change_percentage_24h+'%';
            tr.appendChild(c6);
            tr.appendChild(c1);
            tr.appendChild(c2);
            tr.appendChild(c3);
            tr.appendChild(c4);
            tr.appendChild(c5);
           tr.appendChild(c7);
           tr.appendChild(c8);
            tbody.appendChild(tr);
          }
          table.appendChild(tbody);
    }
    function percentagesort(){
        const temp=arr.slice().sort((a,b)=> a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h);
        const table = document.querySelector('#tableContainer table');
        const tbody = document.createElement('tbody');
        while (table.tBodies.length > 0) {
            table.tBodies[0].remove();
        }
        for(let i=0;i<temp.length;i++){
           
            const c6=document.createElement('td');
            
            const image = document.createElement('img');
            image.src = temp[i].image;
            c6.appendChild(image);
            const tr=document.createElement('tr');
            const c1=document.createElement('td');
            c1.textContent=temp[i].name;
            
            const c2=document.createElement('td');
            c2.textContent=temp[i].symbol;
            const c3=document.createElement('td');
            c3.textContent=temp[i].id;
            const c4=document.createElement('td');
            c4.textContent='$'+temp[i].current_price;
            const c5=document.createElement('td');
            c5.textContent='$'+temp[i].total_volume;
            const c7=document.createElement('td');
            c7.textContent='Mkt Cap: $'+temp[i].market_cap;
            const c8=document.createElement('td');
            c8.textContent=temp[i].market_cap_change_percentage_24h+'%';
            tr.appendChild(c6);
            tr.appendChild(c1);
            tr.appendChild(c2);
            tr.appendChild(c3);
            tr.appendChild(c4);
            tr.appendChild(c5);
           tr.appendChild(c7);
           tr.appendChild(c8);
            tbody.appendChild(tr);
          }
          table.appendChild(tbody);
    }
    function results(){
        const searchInput=document.getElementById('searchInput').value.toLowerCase();
        const table=document.getElementById('table');
        const rows=table.getElementsByTagName('tr');

        for(let i=0;i<rows.length;i++){
            const curr=rows[i];
            const cells=curr.getElementsByTagName('td');
            for(let j=1;j<4;j++){
                const currCell=cells[j];
                const cellText=currCell.textContent.toLowerCase();
                if(cellText.includes(searchInput)){
                    curr.style.display= '';
                }
                else{
                    curr.style.display='none';
                }
            }

        }
    }


    

    
   
   
   
   
    