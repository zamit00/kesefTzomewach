let datanetunimKlaliXP;
const mozkochX = [
  'קרנות חדשות'
];

const pensia=[
  "מניות",
  "50-60",
  "עד 50",  
  "60 ומעלה",
  "עוקב מדד s&p 500",
  "אשראי ואג\"ח",
  "כספי (שקלי)",
  "משולב סחיר",
  "עוקב מדדים - גמיש",
  "אג\"ח ממשלות",
  "הלכה יהודית",
  "מניות סחיר",
  "עוקב מדדי אג\"ח",
  "עוקב מדדי מניות",
  "אג\"ח סחיר"
  ];



async function maslulimP(t,moz,hev){ 
  
  
  const allTheTables=document.getElementById('allTheTables');
  if(t===30){allTheTables.innerHTML='';}
  allTheTables.style.display='flex';
  document.getElementById('shimushbaatar').style.display="block";

  var z = 0;var dataY;
    const sugmuzar=mozkochX[0];const sugmozP='קרנות פנסיה - אישית'
    const msll=`<h2 id="h2Hish" name="h2Hish" style="font-size:1rem;
    line-height:1.8rem;vertical-align:middle; margin-top:15px;text-align:right;
    padding-right:5px;">${sugmozP}<a onclick="maslulimP(30,'${sugmuzar}',0)"
    class="txta" id="spanHish" name="spanHish">כל המסלולים</a></h2>`
    allTheTables.innerHTML+=msll;
    const mesanen=document.getElementById('sanenMosdy')
    const sinonHevra=document.getElementById('sinonHevra')
    sinonHevra.selectedIndex = 0
    mesanen.style.display='none'
    if (t===30){
      const h2Elements = document.querySelectorAll('[name="h2Hish"]');
      const aElements = document.querySelectorAll('[name="spanHish"]');
       mesanen.style.display='flex'
    // עבור על כל ה-h2
    for (let i = 0; i < h2Elements.length; i++) {
        const a = aElements[i];
        // שנה את ה- onclick ב-a
        a.setAttribute('onclick', 'maslulim(1,0,0)');
        // שנה את הטקסט של ה-a
        a.textContent = 'חזור';
        a.className='spanHish back';
        a.style.color="orange";
        a.style.fontWeight = "bold";
    }
    } 
    var typamas;     
    typamas= pensia;
    for (let i = 0; i < typamas.length; i++) {  
      if (i>t){continue;}
         dataY = await filterMaslul(typamas[i], sugmuzar,hev);
          dataY.sort((a, b) => b.tesuam - a.tesuam);
        if(dataY.length===0){continue}
         addtbleX(z,typamas[i])
            const table = document.getElementById(`klalikochX${z}`);
            if (!table){continue;}
            table.innerHTML='';
            table.innerHTML=`<tr style="font-weight: bold;background-color: blue;color: white;
            border:none;">						
						<td >מה</td>
            <td>שם המסלול</td>
						<td>חודש</td>
						<td onclick='sortTable(this)'>שנה<i class="fa fa-sort"></i></td>
						<td onclick='sortTable(this)'>3 שנים<i class="fa fa-sort"></i></td>
						<td onclick='sortTable(this)'>5 שנים<i class="fa fa-sort"></i></td>
					</tr>`
          if (!dataY || !Array.isArray(dataY)) {
            console.error(`Data is not valid for typamas: ${typamas}, sugmuzar: ${sugmuzar}`);
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
                    link.className="linktdbigX";
                    link.style.textDecoration = "none";
                    link.textContent = dataY[tb].shemkupa;
              td.appendChild(link);
              trm.appendChild(td);
                    // יצירת תא שלישי עם נתון מ-fetchtuaa
                    td = document.createElement('td');
                    td.style.color = 'darkgreen';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="center";
                    td.textContent = dataY[tb].tusaAharona + "%";
                    trm.appendChild(td);
                    // יצירת תאים נוספים
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="center"
                    td.textContent = dataY[tb].tesuam + "%";
                    trm.appendChild(td);
                    td = document.createElement('td');
                    td.style.color = 'green';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="center"
                    if (dataY[tb].tesuam36) { td.textContent = dataY[tb].tesuam36 + "%"; }
                    trm.appendChild(td);
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="center"
                    if (dataY[tb].tesuam60) { td.textContent = dataY[tb].tesuam60 + "%"; }
                    trm.appendChild(td);
                    table.appendChild(trm);
                }
            }
            z++;           
    }
   
    addclickX(); tablerekX()
    document.querySelectorAll('[class^="klalikoch"] td').forEach(td => {
      let text = td.textContent.trim();
      if (text.startsWith("-")) {
          td.innerHTML = `<span style="direction: ltr; display: inline-block;">${text}</span>`;
      }
  });
  if(t===30){document.getElementById("allTheTables").scrollIntoView({ behavior: "smooth" });}
};
function addtbleX(x,mas){
    
  const allTheTables=document.getElementById('allTheTables');
  const htmlt=`<div class="tblMuzarim" id="tblMuzarimX${x}">`
	const tbladd=
  `<div class="tbl">
		    <h4>${mas}</h4>	
		    <div class="divTblNetunim">
			      <table class="klalikoch" id="klalikochX${x}"> 
			      </table>	
	      </div>
  </div>`
  const sgira=`</div>`
  if (Number(x)===0 || Number(x) % 2 ===0){
   
      allTheTables.innerHTML+=htmlt;
      document.getElementById(`tblMuzarimX${x}`).innerHTML+=tbladd;
      
     // allTheTables.innerHTML+=tbladd;
  }
  else{
    document.getElementById(`tblMuzarimX${x-1}`).innerHTML+=tbladd;
  }
}
function addclickX(){
    
  const elements = document.querySelectorAll(".linktdbigX"); 
  elements.forEach((element) => {
    const aTag = element.outerHTML.match(/<a [^>]+>/)[0];
    const updatedATag = aTag.replace(/<a /, `<a onclick="bringinfoX(this)" `);
    element.outerHTML = updatedATag + element.innerHTML + "</a>";
    //  element.addEventListener('click', function (event) {
   //       event.preventDefault();
   //       bringinfo(this);
   //   });
  });
  }
  function tablerekX(){
    const elements = document.querySelectorAll("[id^='klalikochX']"); 
    elements.forEach((element) => {
      let rowCount=0;
      const parent = element.parentNode.parentNode;
      const h4 = parent.querySelector("h4"); 
       rowCount = element.rows.length - 1; 
      if(rowCount < 1) {
        h4.style.display = "none";
        element.style.display = "none";
      }
    });
    }
async function bringinfoX(x) {
hidefooter();
document.getElementById("closeinfo").style.display='block';
document.getElementById('allTheTables').style.display='none';
document.getElementById('kupaInfo').style.display='block';	
    const table = x.closest("table"); // מקבל את אלמנט הטבלה
    const mhkupaf = x.parentNode.firstElementChild.textContent.trim(); ;// מקבל את הערך מהתא הראשון בשורה
    const rows = table.getElementsByTagName('tr'); // כל השורות בטבלה
    for (let i = 0; i < rows.length; i++) {
        const secondCell = rows[i].children[1];
        if (secondCell && secondCell.textContent.trim() === mhkupaf) {
            var mikom=i;break;
        }
    }
    var data;
  
  
 
    data = datanetunimKlaliXP.filter(item => 
        String(item.shemkupa).trim() === String(mhkupaf).trim() 
  );
  

 await bring(data,mikom);
  }
  

function sortTable(x) {
    var data = [];
    const table = x.closest('table');
    
    if (!table) {
        console.error('לא נמצאה טבלה.');
        return;
    }

    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const tds = rows[i].getElementsByTagName('td');

        if (tds.length >= 6) {
            data.push({
                mh: tds[0].textContent.trim(),
                shemkupa: tds[1]?.children[0]?.textContent.trim() || '',
                hodshi: tds[2].textContent.trim().replace('%', ''),
                tesuam: tds[3].textContent.trim().replace('%', ''),
                tesuam36: tds[4].textContent.trim().replace('%', ''),
                tesuam60: tds[5].textContent.trim().replace('%', '')
            });
        } else {
            console.warn(`שורה ${i} אינה מכילה מספיק עמודות.`);
        }
    }

    // מיון לפי הכותרת שנלחצה
    const options = ['חודשי', 'שנה', '3 שנים', '5 שנים'];
const selectedKey = options.find(opt => x.innerHTML.includes(opt));

const sortKey = selectedKey ? {
    'חודשי': 'hodshi',
    'שנה': 'tesuam',
    '3 שנים': 'tesuam36',
    '5 שנים': 'tesuam60'
}[selectedKey] : null;

    if (sortKey) {
        data.sort((a, b) => b[sortKey] - a[sortKey]);
    }

    // עדכון הנתונים בטבלה
    for (let i = 1; i < rows.length; i++) {
        const tds = rows[i].children;
        if (data[i - 1]) {
            tds[0].textContent = data[i - 1].mh;
            if (tds[1]?.children[0]) tds[1].children[0].textContent = data[i - 1].shemkupa;
            tds[2].textContent = data[i - 1].hodshi ? data[i - 1].hodshi + '%' : '';
            tds[3].textContent = data[i - 1].tesuam ? data[i - 1].tesuam + '%' : '';
            tds[4].textContent = data[i - 1].tesuam36 ? data[i - 1].tesuam36 + '%' : '';
            tds[5].textContent = data[i - 1].tesuam60 ? data[i - 1].tesuam60 + '%' : '';
        }
    }
}


