
const havarotMenahalot=['הראל פנסיה וגמל','כלל פנסיה וגמל',
  'מגדל מקפת קרנות פנסיה וקופות גמל','מנורה מבטחים פנסיה וגמל',
  'הפניקס פנסיה וגמל','אינפיניטי השתלמות, גמל ופנסיה','אלטשולר שחם גמל ופנסיה',
  'אנליסט קופות גמל','ילין לפידות ניהול קופות גמל','מור גמל ופנסיה','מיטב גמל ופנסיה'
]




function changehasifa(){
document.getElementById('allTheTables').style.display="none";	
}

function changehasifaMen(){
document.getElementById('allTheTables').style.display="none";
}


async function hasifotFilter(x,y) {

    if(document.getElementById('klalikoch0')){document.getElementById('allTheTables').innerHTML=''}
    
    try {
        const response = await fetch('dataJason.json');
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        } else {
            var data = await response.json();
              // יש להמיר את התגובה לאובייקט JSON
        }
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
        return;  // תוודא שהפונקציה לא ממשיכה במקרה של שגיאה
    }
   
    


    if(y==='נמוכה'){ 
        data = data.filter(item => Number(item.kvutzaAhuz4751) <30 && item.mozar===x); 
    }
    else if(y==='גבוהה'){
        data = data.filter(item => Number(item.kvutzaAhuz4751) > 60 && item.mozar===x);
    }
    else if(y==='בינונית'){
        data = data.filter(item => Number(item.kvutzaAhuz4751) >= 30 && Number(item.kvutzaAhuz4751) <=60 && item.mozar===x);
    }
    
    
    let maslulim = new Set();
    for (let countmas = 0; countmas< data.length; countmas++) {
        if(!data[countmas].mas.includes('פאסיבי')
        && !data[countmas].mas.includes('חו\"ל')
    && !data[countmas].mas.includes('קיימות')
&& !data[countmas].mas.includes('הלכה איסלאמית'))
        maslulim.add(data[countmas].mas)

    }
   
    let maslulimArray = Array.from(maslulim);
    var z = 0;var typamas;var dataY;
    
    
    
    for (let i = 0; i < maslulimArray.length; i++) {
    
    let za = 0;
        dataY =await filterMaslul(maslulimArray[i], x)

      
        
        dataY.forEach(item=>{
            if(item.tesuam){
                za=1;  
            }    
        })
        
        
         addtbleAll(i,maslulimArray[i])
        
         
            const table = document.getElementById(`klalikoch${i}`);
           // if (!table){continue;}
            table.innerHTML='';
            table.innerHTML=`<tr style="font-weight: bold;background-color: blue;color: white;
            border:none;">						
						<td>מה</td>
                        			<td>שם המסלול</td>
						<td>שיעור מניות</td>
						<td>שנה</td>
						<td>3 שנים</td>
						<td>5 שנים</td>
					</tr>`

          if (!dataY || !Array.isArray(dataY)) {
            console.error(`Data is not valid for typamas: ${typamas}, mozkoch: ${mozkoch}`);
            return; 
        }
        
            for (let tb = 0; tb < dataY.length; tb++) {
                if (dataY[tb].tesuam) {
                    const trm = document.createElement('tr');

                    // יצירת תא ראשון
                    let td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdmh";
                    td.style.boxSizing="border-box";
                    td.textContent = dataY[tb].mh;
                    trm.appendChild(td);

                    // יצירת תא שני עם קישור
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdbig";
                    td.style.boxSizing="border-box";
                    td.style.textAlign = "right";
                    td.style.boxSizing="border-box";
                    td.style.paddingRight = "5px";
                    let link = document.createElement('a');
                    link.href = '#';
                    link.className="linktdbig";
                    link.style.textDecoration = "none";
                   
                    link.textContent = dataY[tb].shemkupa;
                    td.appendChild(link);
                    trm.appendChild(td);

                    // יצירת תא שלישי עם נתון מ-fetchtuaa
                    td = document.createElement('td');
                    td.style.color = 'darkgreen';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="right";
                    td.textContent = dataY[tb].kvutzaAhuz4751 + "%";
                    trm.appendChild(td);

                    // יצירת תאים נוספים
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="right"
                    td.textContent = dataY[tb].tesuam + "%";
                    trm.appendChild(td);

                    td = document.createElement('td');
                    td.style.color = 'green';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="right"
                    if (dataY[tb].tesuam36) { td.textContent = dataY[tb].tesuam36 + "%"; }
                    trm.appendChild(td);
      label.id='label';              
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="right"
                    if (dataY[tb].tesuam60) { td.textContent = dataY[tb].tesuam60 + "%"; }
                    trm.appendChild(td);

                    table.appendChild(trm);
                }
            }
 
        }   
    addclick(); tablerek();   

   
}
  

function createForm() {
     
    chng(document.getElementById('tafrit'));
    
    const allTheTables=document.getElementById('allTheTables');
    allTheTables.style.display='none';
    if(window.innerWidth<600){
    document.getElementById('footer').style.display="none";}
    const filter=document.getElementById('filter');
    filter.style.display='flex';
    document.querySelector('.filterChoose').style.display='block';
    if(Window.innerWidth>768){document.getElementById('kothasifot').style.display='block';}

 
}

function createFormMen() { 
    chng(document.getElementById('tafrit'));
    const allTheTables=document.getElementById('allTheTables');
    allTheTables.style.display='none';
    if(document.getElementById('ifrm').style.display==='flex'){
	document.getElementById('ifrm').style.display='none'}
    document.getElementById('shimushbaatar').style.display="none";
    const filter=document.getElementById('filter');
    filter.style.display='none';
    const sugMenfirst=document.getElementById('sugMenfirst');
    const sugMensecond=document.getElementById('sugMensecond');

     sugMenfirst.innerHTML='';
     sugMensecond.innerHTML='';
	
		const opt1 = document.createElement('option');
		opt1.value='';
		opt1.textContent='בחר חברה מנהלת';
		opt1.disabled='true';
		opt1.selected='true';
  		sugMenfirst.appendChild(opt1);  

		const opta1 = document.createElement('option');
		opta1.value=``;
		opta1.textContent='בחר חברה מנהלת';
		opta1.disabled='true';
		opta1.selected='true';
  		sugMensecond.appendChild(opta1);
	
	
	for(let i=0;i<havarotMenahalot.length;i++){
	
		
	const opt = document.createElement('option');
	opt.value=havarotMenahalot[i];
	opt.textContent=havarotMenahalot[i];
  	sugMenfirst.appendChild(opt);  

	const opta = document.createElement('option');
	opta.value=havarotMenahalot[i];
	opta.textContent=havarotMenahalot[i];
  	sugMensecond.appendChild(opta);  
}	
}


async function tablhasifot(x) {
    event.preventDefault(); 
    const sugmM=document.getElementById('sugM').value;
    const shiuerH=document.getElementById('shiurH').value;
    const sugH=document.getElementById('sugH').value;
    if(sugH==='kvutzaAhuz4751'){var lbl="שיעור מניות" }
    else if(sugH==='kvutzaAhuz4752'){var lbl="שיעור חול" }
    else if(sugH==='kvutzaAhuz4761'){var lbl="שיעור מטח" }
    await maslulim(30,sugmM,0);
    const tables = document.querySelectorAll("[id^='klalikoch']"); 

    tables.forEach((table) => {
        const rows = table.querySelectorAll("tr"); 
        
        rows.forEach((row, index) => {
            if (index > 0) { // מתחיל מהשורה השנייה
                const firstCell = row.querySelector("td, th"); 
                
                if (firstCell) {
                    
                    const data = datanetunimKlaliX.filter(item => 
                        Number(item.mh) === Number(firstCell.textContent)
                        )
                    if (Number(shiuerH)===120){var q=60} 
                    if (Number(shiuerH)===60){var q=30} 
                    if (Number(shiuerH)===30){var q=0} 

                        if(Number(data[0][sugH])<Number(shiuerH)
                        && Number(data[0][sugH])>=q){
                            const firstRow = table.querySelector("tr");
                            if (firstRow) {
                                const secondCell = firstRow.children[2];
                                secondCell.textContent=lbl; 
                                row.children[2].textContent= data[0][sugH]+"%"; 
                            } 
                        }
                        else{                              
                            row.style.display="none";
                        }
                    
                }
            }
        });
    });
    
    const elements = document.querySelectorAll("[id^='klalikoch']"); 
    elements.forEach((element) => {
      const parent = element.parentNode.parentNode;
      const h4 = parent.querySelector("h4");
      
      const visibleRows = [...element.querySelectorAll("tr")].filter(row => 
        row.offsetParent !== null 
    );
    
      if(visibleRows.length<2) {
        h4.style.display = "none";
        element.style.display = "none";    
      }
    });
    document.getElementById("allTheTables").scrollIntoView({ behavior: "smooth" });
}



async function tablMen() {
    event.preventDefault(); 
    const sugmMMen=document.getElementById('sugMMen').value;
    const sugMenfirst=document.getElementById('sugMenfirst').value;
    const sugMensecond=document.getElementById('sugMensecond').value;
   console.log(sugmMMen,sugMenfirst,sugMensecond);
	
    sugMenfirst.innerHTML='';
     sugMensecond.innerHTML='';
    await maslulim(30,sugmMMen,0);
    const tables = document.querySelectorAll("[id^='klalikoch']"); 

    tables.forEach((table) => {
        const rows = table.querySelectorAll("tr"); 
        
        rows.forEach((row, index) => {
            if (index > 0) { // מתחיל מהשורה השנייה
                const firstCell = row.querySelector("td, th"); 
                
                if (firstCell) {
                    
                    const data = datanetunimKlaliX.filter(item => 
                        Number(item.mh) === Number(firstCell.textContent)			  
                        );
                           console.log(item.mh+":"+item.menahelet)
                            if (firstRow  &&  (item.menahelet.includes(sugMenfirst) || item.menahelet.includes(sugMensecond) ) ) {
                               row.style.display="block";  
                            } 
                        
                        else{                              
                            row.style.display="none";
                        }
                    
                }
            }
        });
    });
    
    const elements = document.querySelectorAll("[id^='klalikoch']"); 
    elements.forEach((element) => {
      const parent = element.parentNode.parentNode;
      const h4 = parent.querySelector("h4");
      
      const visibleRows = [...element.querySelectorAll("tr")].filter(row => 
        row.offsetParent !== null 
    );
    
      if(visibleRows.length<2) {
        h4.style.display = "none";
        element.style.display = "none";    
      }
    });
}





