let btn = document.getElementById('task');
let input = document.getElementById('inp');
let list = document.getElementById('list');

console.log(input);

function addEvent(){
    //Here, I have stored the input value inside of the text variable..
    let text = input.value;
    if(text !== ''){
        let ele = document.createElement('li');
        ele.innerText = text;
        let btn1 = document.createElement('button');
        btn1.innerText = "Delete";
        let btn2 = document.createElement('button');
        btn2.innerText = "Edit";
        ele.append(btn1);
        ele.append(btn2);
        btn1.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
        })
        list.append(ele);
        input.value = '';
    }
}

function keyPressed(e){
    if(e.key === 'Enter' && input.value !== ''){
        //It means we have to add that event to the list...
        let ele = document.createElement('li');
        ele.innerText = input.value;
        let btn1 = document.createElement('button');
        btn1.innerText = "Delete"
        let btn2 = document.createElement('button');
        ele.append(btn1);
        ele.append(btn2);
        btn1.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
        })
        btn2.innerText = "Edit"
        list.append(ele);
        input.value = '';

    }
}

btn.addEventListener('click', addEvent);
input.addEventListener('keydown', keyPressed);
