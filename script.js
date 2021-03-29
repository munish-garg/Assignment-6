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
        list.append(ele);
        input.value = '';
    }
}

function keyPressed(e){
    if(e.key === 'Enter' && input.value !== ''){
        //It means we have to add that event to the list...
        let ele = document.createElement('li');
        ele.innerText = input.value;
        list.append(ele);
        input.value = '';

    }
}

btn.addEventListener('click', addEvent);
input.addEventListener('keydown', keyPressed);