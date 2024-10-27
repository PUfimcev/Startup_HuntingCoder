class GetPopUpSignUp{
    #signUpElem;
    #callSignUpElem;
    #input;
    #checkbox;

    constructor(){
        this.#signUpElem =  document.querySelector('.signup__form');

        this.#callSignUpElem =  document.querySelector('.main__btn');

        this.#input = document.querySelector('#inputData');

        this.#checkbox = document.querySelector('.form-check-control');

        if(!this.#signUpElem || !this.#callSignUpElem || !this.#input) return;
        
        this.getSignUpElem();
    }

    getSignUpElem(){
        this.#callSignUpElem.addEventListener('click', () =>{

            this.#input.value = '';
            
            this.#checkbox.checked = false;
            
            const promise = new Promise((resolve) => setTimeout(() => { resolve(this.#signUpElem.classList.add('show'))}, 500));

            promise.then(res => {
                
                this.closeSignUpElem();
                this.sendData();
            })
        })
    }

    sendData(){
        let formBtn;
        formBtn =  document.querySelector('.form-btn');
        
        formBtn.addEventListener('click', (e) =>{
            e.preventDefault();
            let inputData = null;
                
            if(this.#input) inputData = this.#input.value;

            if(inputData === '' || !inputData) {
                this.#input.value = 'Вы не ввели данные';
                return;
            };

            if(inputData === 'Вы не ввели данные') return;

            console.dir(this.#checkbox);

            if(!this.#checkbox.checked) return;
            
            let result = this.postAxios(inputData);

            if(result) {

                this.#input.value = '';
                this.#checkbox.checked = false;
                this.#signUpElem.classList.remove('show');
            }

        })
    }

    async postAxios(inputData){

        if(inputData !== '' && inputData !== 'Вы не ввели данные') return true;

        const postData = {
            'tg_wa_address': inputData,
        }

        // try {
        //     const response = await axios.post('/', postData);

        //     if(response.status === 200) return true;

        // } catch (error) {
        //     console.log(error.message);
        // }
    }

    closeSignUpElem(){

        let closeSignUpElem;
        closeSignUpElem =  document.querySelector('.close__signUp-btn');

        closeSignUpElem.addEventListener('click', () =>{
            
            this.#input.value = '';
            this.#checkbox.checked = false;
            this.#signUpElem.classList.remove('show');
        })
    }
}

export default new GetPopUpSignUp();