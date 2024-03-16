const body = document.querySelector('body')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener("click", function(e){
        
        // just for reference
        
        // console.log(e);        
        // console.log(e.target);
        // console.log(e.target.id);

        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = "rgb(255, 166, 0)"
        }

    })
})