var addButton=document.getElementById('add')
addButton.addEventListener('click',addItem)


var removeButton=document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeAllButton= document.getElementById("removeAll")
removeAllButton.addEventListener('click',deleteAll)
var ul=document.getElementById('list')

var li;

function addItem(){
    var input= document.getElementById('input')
    var item=input.value;
    var textnode = document.createTextNode(item);

    if(item===''){
        var p=document.createElement('p');
        var message=document.createTextNode('Enter TODO')
        p.appendChild(message)
        
        // input.insertAdjacentElement('afterend',p)
        //               OR
           var q=input.parentNode;
           q.insertBefore(p,input.nextSibling)
        
        setTimeout(() => {
            p.style.opacity=0;
            p.remove();
        }, 5000);
        return false;
    }
    else{
        //create li
        li=document.createElement('li');
        
        //create checkbox
        var checkbox=document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('id','check')

        //create label
        var label=document.createElement('label')
        label.setAttribute('for','item') //optional

        //add these elements on webpage
        label.appendChild(textnode)
        li.appendChild(checkbox)
        li.appendChild(label)
        
        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(() => {
            li.className='visual'
        }, 100);
        input.value=''

        
    }
}
  
function removeItem(){
    li=ul.children; //this property gives an array of all the entries
    
    for(let index=0;index<li.length;index++){
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}

function deleteAll(){
    li=ul.children;
   
    while(li[0]){
        ul.removeChild(li[0])
    }
}