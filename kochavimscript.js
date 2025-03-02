let datanetunimKlaliX;let datanetunimKlaliXB;let datanetunimKlaliXM;
const mozkoch = [
  'קרנות השתלמות', 'תגמולים ואישית לפיצויים', 'קופת גמל להשקעה',
  "קופת גמל להשקעה - חסכון לילד", "פוליסות חסכון"
];


const hishtalmot=[
  "כללי",
  "עוקב מדד s&p 500",
  "מניות",
  "אשראי ואג\"ח",
  "אשראי ואג\"ח עם מניות",
  "כספי (שקלי)",
  "עוקב מדדים - גמיש",
  "אג\"ח ממשלות",
  "הלכה יהודית",
  "משולב סחיר",
  "עוקב מדדי אג\"ח",
  "עוקב מדדי מניות",
  "אג\"ח סחיר",
  "מניות סחיר"
];
const gemel=[
  "מניות",
  "50-60",
  "עוקב מדד s&p 500",
  "עד 50",  
  "60 ומעלה",
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
const layeled=['סיכון מועט','סיכון בינוני','סיכון מוגבר','הלכה יהודית']

const bituach=['הראל פנסיה וגמל','כלל פנסיה וגמל',
  'מגדל מקפת קרנות פנסיה וקופות גמל','מנורה מבטחים פנסיה וגמל',
  'הפניקס פנסיה וגמל'
]
const bateyhashkaot=['אינפיניטי השתלמות, גמל ופנסיה','אלטשולר שחם גמל ופנסיה',
  'אנליסט קופות גמל','ילין לפידות ניהול קופות גמל','מור גמל ופנסיה'
  ,'מיטב גמל ופנסיה','סלייס גמל'
]

async function maslulim(t,moz,hevra){ 
document.getElementById("closeinfo").style.display='none';	
 document.getElementById("menu").classList.remove("open");
  document.querySelector(".menu-btn").classList.remove("open");
  if (t===1){document.getElementById('filter').style.display='none';  
  document.querySelector('.filterChoose').style.display='none';}
  const allTheTables=document.getElementById('allTheTables');
  allTheTables.innerHTML='';
  allTheTables.style.display='flex';
  document.getElementById('shimushbaatar').style.display="block";
  document.getElementById('kothasifot').style.display='none';
  var z = 0;var dataY;
  for(let r=0;r<=4;r++){
    if(z!==0 && Number(z) % 2 !==0){
      z++;
    }
    const sugmuzar=mozkoch[r]
    if(moz!==0 && sugmuzar!==moz){continue}
    const msll=`<h2 id="h2Hish" name="h2Hish" style="font-size:1rem;
    line-height:1.8rem;vertical-align:middle; margin-top:15px;text-align:right;
    padding-right:5px;">${sugmuzar}<a onclick=" maslulim(30,'${sugmuzar}',0);"
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
        if(r===0 || r===2 || r===4){typamas=hishtalmot}
        else if(r===1){typamas=gemel} 
        else if(r===3){typamas=layeled}
    for (let i = 0; i < typamas.length; i++) {  
      if (i>t){continue;}
         dataY = await filterMaslul(typamas[i], sugmuzar,hevra);
          dataY.sort((a, b) => b.tesuam - a.tesuam);
        if(dataY.length===0){continue}
         addtble(z,typamas[i])
            const table = document.getElementById(`klalikoch${z}`);
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
  } 

    addclick(); tablerek()
    if(t!==30){await maslulimP(1,0,0)};
    document.querySelectorAll('[class^="klalikoch"] td').forEach(td => {
      let text = td.textContent.trim();
      if (text.startsWith("-")) {
          td.innerHTML = `<span style="direction: ltr; display: inline-block;">${text}</span>`;
      }
              window.scrollTo({ top: 0, behavior: "smooth" });    
  });
};
function addtble(x,mas){
  const allTheTables=document.getElementById('allTheTables');
  const htmlt=`<div class="tblMuzarim" id="tblMuzarim${x}">`
	const tbladd=
  `<div class="tbl">
		    <h4>${mas}</h4>	
		    <div class="divTblNetunim">
			      <table class="klalikoch" id="klalikoch${x}"> 
			      </table>	
	      </div>
  </div>`
  const sgira=`</div>`
  if (Number(x)===0 || Number(x) % 2 ===0){
      allTheTables.innerHTML+=htmlt;
      document.getElementById(`tblMuzarim${x}`).innerHTML+=tbladd;
     // allTheTables.innerHTML+=tbladd;
  }
  else{
    document.getElementById(`tblMuzarim${x-1}`).innerHTML+=tbladd;
  }
}
function addclick(){
  const elements = document.querySelectorAll(".linktdbig"); 
  elements.forEach((element) => {
    const aTag = element.outerHTML.match(/<a [^>]+>/)[0];
    const updatedATag = aTag.replace(/<a /, `<a onclick="bringinfo(this)" `);
    element.outerHTML = updatedATag + element.innerHTML + "</a>";
  });
  }
  function tablerek(){
    const elements = document.querySelectorAll("[id^='klalikoch']"); 
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
async function bringinfo(x) {

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
  data = datanetunimKlaliX.filter(item => 
      String(item.shemkupa).trim() === String(mhkupaf).trim() 
  );
  if(data.length===0){
    data = datanetunimKlaliXB.filter(item => 
      item.mh === mhkupaf 
  );
  }
  if(data.length===0){
    data = datanetunimKlaliXP.filter(item => 
      item.mh === mhkupaf 
  );
 
  }
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


