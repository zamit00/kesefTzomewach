const data = [
    'מחשבון ריבית דריבית', 'סימולטור הלוואות', 'מחשבון השוואת דמי ניהול',
    'השוואת חברות', 'קופות לפי חשיפות', 'שאלון סיכון',
    'מידע מקצועי', 'מדד השירות', 'מדד הפנדינג','מחשבו אבטלה לעצמאים'];

const searchBox = document.getElementById("searchBox");
const searchResults = document.getElementById("searchResults");

searchBox.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query.trim() === "") {
        searchResults.style.display = "none";
        return;
    }

    const filteredResults = data.filter(item => item.toLowerCase().includes(query));

    if (filteredResults.length === 0) {
        searchResults.style.display = "none";
        return;
    }

    filteredResults.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;

        li.addEventListener("click", () => handleSearchSelection(item));

        searchResults.appendChild(li);
    });

    searchResults.style.display = "block";
});

// **הפעלת פונקציה לפי הבחירה**
function handleSearchSelection(selectedText) {
    searchBox.value = selectedText; // הכנסת הבחירה לשדה החיפוש
    searchResults.style.display = "none"; // הסתרת התוצאות

    console.log("המשתמש בחר:", selectedText);

    // **בחירת פעולה בהתאם לטקסט שנבחר**
    switch (selectedText) {
    case "מחשבון ריבית דריבית":
searchBox.value ='';
   showSearch();
   hideTkufa();showIframe('ribitderibit.html') ;
            break;
            case "מחשבון אבטלה לעצמאים":
    searchBox.value ='';
   showSearch();
   hideTkufa();showIframe('pensiaLeAzmaim.html') ;
            break;
   case "קופות לפי חשיפות":
   searchBox.value ='';
   showSearch();
   showIframe('hashMenahalot.html')
            break;
    case 'שאלון סיכון':
      searchBox.value ='';
      showSearch();
      hideTkufa();showIframe('riskQuest.html')
      break;
     case 'מדד השירות' :
       searchBox.value ='';
       showSearch();
       hideTkufa();showIframe('madadHasherut.html');
       break;
      case 'מדד הפנדינג':
      searchBox.value ='';
      showSearch();
      hideTkufa();showIframe('madadhpending.html')
      break;
            
   case "סימולטור הלוואות":
    searchBox.value ='';
    showSearch();
    hideTkufa();showIframe('loan.html')
            break;
 case "מחשבון השוואת דמי ניהול":
  searchBox.value ='';
  showSearch();
  hideTkufa();showIframe('hashDmeyNihul.html');
            break;
 case 'מידע מקצועי':
 searchBox.value ='';
 showSearch();
 document.getElementById("menu").classList.toggle("open");
 document.querySelector(".menu-btn").classList.toggle("open");
  toggleDropdown('drp1');
  break;
  
 case "השוואת חברות":
  searchBox.value ='';
  showSearch();
  hideTkufa();showIframe('madadHasherut.html')
            break;
        default:
            console.log("אין פונקציה מוגדרת לבחירה הזו.");
    }
}

// **פונקציות לדוגמא**



// **הסתרת הרשימה בלחיצה מחוץ לחיפוש**
document.addEventListener("click", function(event) {
    if (!searchBox.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.style.display = "none";
    }
});
const clearSearch = document.getElementById("clearSearch");

clearSearch.addEventListener("click", function () {
    searchBox.value = "";
    searchResults.style.display = "none";
    clearSearch.style.display = "none";
});

searchBox.addEventListener("input", function () {
    clearSearch.style.display = this.value ? "block" : "none";
});
