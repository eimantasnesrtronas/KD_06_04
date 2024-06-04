const forma = document.getElementById('forma');
const laukas = document.getElementById('task');
const uzduotys = document.getElementById('uzduotis');




forma.addEventListener('submit', (event)=> {
    event.preventDefault();

    const uzduotiesElementas = document.createElement('li');
    uzduotiesElementas.innerText = laukas.value;
    
    const check = document.createElement('laukas')
    check.type = 'checkbox';
   
    uzduotiesElementas.append(check)
    uzduotys.appendChild(uzduotiesElementas);
})