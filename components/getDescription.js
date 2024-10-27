class GetDescription{
    #descriptionElem;
    #callDescriptionElem;

    constructor(){
        this.#descriptionElem =  document.querySelector('.essence');

        this.#callDescriptionElem =  document.querySelector('.link__showmore');

        if(!this.#descriptionElem || !this.#callDescriptionElem) return;
        
        this.getDescription();
    }

    getDescription(){
        this.#callDescriptionElem.addEventListener('click', () =>{
            this.#descriptionElem.classList.add('show');

            this.closeDescription();

        })
    }

    closeDescription(){

        let closeDescriptionElem;
        closeDescriptionElem =  document.querySelector('.close__btn');

        closeDescriptionElem.addEventListener('click', () =>{
            this.#descriptionElem.classList.remove('show');
        })
    }

}

export default new GetDescription();