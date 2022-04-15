let root = document.querySelector("ul");
let index=0;
let max=5;


function addQuote(){
for(let i=index;i<=max;i++){
let li=document.createElement("li")
li.innerText=quotes[i].quoteText;
li.style.fontSize="2.35 rem";
let bq=document.createElement("blockquote")
bq.style.fontSize="2rem"
bq.innerText=quotes[i].quoteAuthor;
root.append(li,bq)
index++
}
return root;
}
addQuote();
document.addEventListener("scroll",()=>{
    let  top =  document.documentElement.scrollTop;
    let  height =  document.documentElement.clientHeight;
    let  total =  document.documentElement.scrollHeight;
    if(top+height <= total && index<quotes.length){
        addQuote();
    }
})

  window.addEventListener("DOMContentLoaded", () => {
    alert(`The Content Of DOM is Loaded.`);

  });