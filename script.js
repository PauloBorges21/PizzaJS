const selector = (el)=>document.querySelector(el);
const selectorAll = (el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{

    let = pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true); 
    //Criando um clone da das divs com as class * true serve para pegar tudo que esta dentro dele

    //preencher as informações em pizzaitem que estão em um JSON

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    
    pizzaItem.querySelector('.pizza-item--price').innerHTML =`R$ ${item.price.toFixed(2)}` ; // trazendo preço com o formato correto

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        
        selector('.pizzaWindowArea').style.opacity = 0;
        
        selector('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            selector('.pizzaWindowArea').style.opacity = 1;    
        }, 200);
        
    });

    




    selector('.pizza-area').append( pizzaItem);
});

//CONCEITOS 

//.innerHTML- substitui os elementos
