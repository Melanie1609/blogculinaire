function openNav(){
    document.getElementById("myNav").style.height = "100%"

}

function closeNav(){
    document.getElementById("myNav").style.height = "0%"
}

const ongletscat = document.querySelectorAll('.ongletscat');

const contenu = document.querySelectorAll('.contenu');
let index = 0;

ongletscat.forEach(onglet =>{
    
    onglet.addEventListener('click', () =>{
        if(onglet.classList.contains('active')){
            return;
        }else{
            onglet.classList.add('active');
        }

        index = onglet.getAttribute('data-anim');
        console.log(index);

        for(i = 0; i < ongletscat.length; i++){

            if(ongletscat[i].getAttribute('data-anim')
             != index){
                 ongletscat[i].classList.remove('active');
             }
        }
        for(j = 0; j < contenu.length; j++){

            if(contenu[j].getAttribute('data-anim') == index){
                contenu[j].classList.add('activeContenu')
            } else {
                contenu[j].classList.remove('activeContenu')
            }
        }

    }) 
})

