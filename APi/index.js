const data = document.getElementById('btn');
data.addEventListener('click', function(){
    const user = document.getElementById('name').value;
    const text = document.getElementById('text').value;
    const result = user + " " + text;
    const totalResul = document.createElement('li').innerText = result;
    document.getElementById('result').innerText = totalResul;
})


const btn = document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('result').style.display = 'block';
})


 document.addEventListener('contextmenu', function(e){
     e.preventDefault(e);
 }, true)
