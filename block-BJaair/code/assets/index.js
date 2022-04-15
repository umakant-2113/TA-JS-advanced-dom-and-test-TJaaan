let  root = document.querySelector('.userCard-Contianer');
let form = document.querySelector('form');
let title = document.querySelector('#noticeTitle');
let category = document.querySelector('#noticeCategory');
let userData = [];

// first input handler

function handleEdit(event,info,index){
let elm = event.target;
let input=document.createElement("input")

input.value=elm.innerText;

input.addEventListener("keyup",(e)=>{
if(e.keyCode===13){
   userData[index].category = e.target.value; 
   createUi(root,userData);
}
})
let parent=event.target.parentElement;
parent.replaceChild(input,elm)
}
// second handler title
function handleTitle(event,value,index){
    let val=event.target;
    let input2=document.createElement("input")
    input2.value=val.innerText;
    input2.addEventListener("keyup",(e)=>{
        if(e.keyCode===13){
            userData[index].title=e.target.value;
            createUi(root,userData);
        }
    })
    let parent=event.target.parentElement;
    parent.replaceChild(input2,val)
}

function  createUi(parentElement ,data ){
    root.innerHTML = "";
  data.forEach((eachItem, index) =>{
    let userCard  = document.createElement('div');
    userCard.classList.add("flex-50")
    userCard.classList.add('user-card');
    let userCategory = document.createElement('p');
    userCategory.addEventListener("dblclick",(event)=>handleEdit(event,eachItem.category,index))
    userCategory.setAttribute('id' , index);
    userCategory.innerText = eachItem.category ;
    let userTitle  = document.createElement('h2');
    userTitle.innerText = eachItem.title;
    userTitle.addEventListener("dblclick",(event)=>handleTitle(event,eachItem.title,index))
    userCard.append(userCategory,userTitle)
    root.append(userCard)
  })
return root;
}
createUi(root,userData)
function CreateObj(title,category){
    this.title  = title ;
    this.category = category ;
}
form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    let title  = form.elements[0].value;
    let category = form.elements[1].value;
    let obj =  new CreateObj(title,category);
    userData.push(obj);  
    createUi(root , userData);
})

