const allCross = document.querySelectorAll('.visible-pannel img')

console.log(allCross);

allCross.forEach(element =>{
    element.addEventListener('click', function(){
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        let currentChoice =this.parentNode.parentNode.childNodes[3];
        //console.log(this.src);
        if(this.src.includes('croix.jpg')){
        this.src='/assets/images/logos_icones/croix.png';
        gsap.to(currentChoice,{"duration": "0.2", "height":height+25, "opacity":1,
        "padding": "20px 15px"}) 
    } else if(this.src.includes('croix.png')){
        this.src ='/assets/images/logos_icones/croix.jpg';
        
        gsap.to(currentChoice,{"duration":" 0.2", "height":0, "opacity":0,
            "padding": "0px 15px"}) 
    }

    })
})      

