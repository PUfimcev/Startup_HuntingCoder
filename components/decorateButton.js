class DecorateButton{

    #button;

    constructor(){
        this.#button = document.querySelector(".main__btn");

        
        this.rippleButton();
    }
    
    mousePositionToCustomProp(event, element) {

        
        let posx = event.offsetX;
        let posy = event.offsetY;
        
        element.style.setProperty("--x", posx + "px");
        element.style.setProperty("--y", posy + "px");
        
    }
    
    rippleButton(){
    
        this.#button.addEventListener("click", (e) => {
            this.mousePositionToCustomProp(e, this.#button);
            this.#button.classList.add("pulse");
            this.#button.addEventListener("animationend", () =>{

                this.#button.classList.remove("pulse");
            }, { once: true });
        });
    }


}

export default new DecorateButton();