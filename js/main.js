
//Two way to solve the sytuation

/*var inputs = document.querySelectorAll('input');

function changeParameters(event) {

    var colorPicker = document.querySelector('.colorPicker');
    var rangeSpacing = document.querySelector('.rangeSpacing');
    var rangeBlur = document.querySelector('.rangeBlur');
    var photo = document.querySelector('.photo');
    var spanJs = document.querySelector('h1 span');

    console.log(this.value);

    if (this == rangeSpacing) {
        photo.style.borderWidth = `${this.value}px`;
    }

    if (this == rangeBlur) {
        photo.style.filter = `blur(${this.value}px)`
    }
    
    if(this == colorPicker){
        photo.style.borderColor = `${this.value}`;
        spanJs.style.color = `${this.value}`;    
    }
    
}
inputs.forEach(input => input.addEventListener('change', changeParameters));
inputs.forEach(input => input.addEventListener('mousemove', changeParameters));
    */
    
var inputs = document.querySelectorAll('input');
    

function changeParameters(){
        
    var sufix = this.dataset.sizing || '';
    
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sufix);
}

   inputs.forEach(function(input){
        input.addEventListener('change', changeParameters)
    });
inputs.forEach(input => input.addEventListener('mousemove', changeParameters));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
