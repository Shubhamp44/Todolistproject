const inputBox = document.getElementById("input-box");
const listContainer =document.getElementById("list-cantainer");
console.log(inputBox);

 function addtask(){
    if(inputBox.value ===''){
        alert('you must write samething')
    }else{

        let li = document.createElement("LI");
        li.innerHTML =inputBox.value ;
        listContainer.appendChild(li) ;
        let span = document.createElement("SPAN");
        span.innerHTML = "x" ;
        li.appendChild(span) ;

    }
    inputBox.value="";

 }

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName ==="LI"){
            e.target.classList.toggle("checked");
        }
        else if( e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData()
        }


    }, false)

    function saveData(){

        localStorage.setItem("data",listContainer.innerHTML)
    }

    function showTask(){
        listContainer.innerHTML=localStorage.getItem("data")

    }
    showTask();

    

