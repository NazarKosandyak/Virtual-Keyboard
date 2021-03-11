const GET_KEBOARD = document.querySelector('.keyboard')
const GET_FIRST_ROW = document.querySelector('.first-row')
const GET_ELEM1 = document.querySelector('.elem1')
const GET_TEXTAREA  = document.querySelector('textarea')

window.addEventListener('keydown',function(e){
  
   e.preventDefault()
    let key = e.key
    addClass(e)
    addClass1(e)
    addClass2(e)
    addClass3(e)
    addClass4(e)
    addClass5(e)
    addClass6(e)
    addClass7(e)
    
    // addClass8(e)
    
    if(e.code != "ShiftLeft" &&e.code != "ShiftRight" && e.code != "Tab" && e.code != 'ControlLeft'&& e.code != 'ControlRight'&& e.code != 'Escape'
    && e.code != 'AltLeft' && e.code != 'AltRight' && e.code != 'Backspace' && e.code != 'CapsLock' && e.code != 'Enter' && e.code != 'ArrowDown'
    && e.code != 'ArrowUp' && e.code != 'ArrowLeft'  && e.code != 'ArrowRight' ) 
    {
        GET_TEXTAREA.innerHTML += key
        
    }
    
    if(e.code == 'Enter'){
        GET_TEXTAREA.innerHTML += `\n`
    }
    if(e.code == 'Tab'){
        GET_TEXTAREA.innerHTML += `\t`
    }
    
    if(e.code === 'Backspace'){
        let backWord  = GET_TEXTAREA.value.slice(0,length-1)
       GET_TEXTAREA.innerText  = backWord
       
    }
  



    
    
})

// For key
window.addEventListener('keyup', function(event){
    addClass(event)
    
})

// For space
window.addEventListener('keyup', function(event1){
  
    addClass1(event1)
    
})
// Left shift
window.addEventListener('keyup', function(event2){
  
    addClass2(event2)
    
})


// Right shift
window.addEventListener('keyup', function(event3){
  
    addClass3(event3)
    
})

// For number
window.addEventListener('keyup', function(event4){
  
    addClass4(event4)
    
})

// For symbol
window.addEventListener('keyup', function(event5){
  
    addClass5(event5)
    
})

// For Escape

window.addEventListener('keyup', function(event6){
  
    addClass6(event6)
    
})






//  всі функції для головної події

// For key
function addClass(event){
    const allKey = document.querySelectorAll('.key');
    for (const elem of allKey) {
        if(elem.textContent === event.key){
            elem.parentElement.classList.toggle('active')
        }
       
    }

}



// For space
function addClass1(event1){

    const get_space = document.querySelector('.elem6')
    if(event1.key === " "){
        get_space.classList.toggle('active')
    }
    
}



// Left shift
function addClass2(event2){
    
        const get_shift_left = document.querySelector('.shift1')
            if(event2.code = 'ShiftLeft' && event2.location == 1){
                get_shift_left.parentElement.classList.toggle('active')
            }
        
    }
    
// Right shift
function addClass3(event3){
    
     const get_shift_right = document.querySelector('.shift2')
         if(event3.code = 'ShiftRight' && event3.location == 2){
              get_shift_right.parentElement.classList.toggle('active')
            }
        
    }


// For number
function addClass4(event4){
    const getNum = document.querySelectorAll('.number')

    for (const num of getNum) {
        if(num.textContent === event4.key ){
            num.parentElement.classList.toggle('active')
        }
    }
    
}


// For symbol

function addClass5(event5){
    const getSymbol = document.querySelectorAll('.symbol')

    for (const symb of getSymbol) {
        if(symb.innerText ===  event5.key){
            symb.parentElement.classList.toggle('active')
        }
    }
    
}



// For Escape
function addClass6(event6){
    const getEsc = document.querySelector(".elem1")

    if(event6.key === "Escape"){
        getEsc.classList.toggle('active')
    }
}   

//  For CapsLock

function addClass7(event7){
    const getCaps = document.querySelector('.Caps')
    if(event7.key === "CapsLock"){
        getCaps.parentElement.classList.toggle('active')
    }
    console.log(event7);
}