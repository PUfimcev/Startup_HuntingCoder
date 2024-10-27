// import axios from 'axios';

class GetPopUpSignUp{
    #signUpElem;
    #callSignUpElem;

    constructor(){
        this.#signUpElem =  document.querySelector('.signup__form');

        this.#callSignUpElem =  document.querySelector('.main__btn');

        if(!this.#signUpElem || !this.#callSignUpElem) return;
        
        this.getSignUpElem();
    }

    getSignUpElem(){
        this.#callSignUpElem.addEventListener('click', () =>{
            this.#signUpElem.classList.add('show');
            let input = document.querySelector('#inputData');
            input.value = '';

            this.closeSignUpElem();
            this.sendData();

        })
    }

    sendData(){
        let formBtn;
        formBtn =  document.querySelector('.form-btn');
        
        formBtn.addEventListener('click', (e) =>{
            e.preventDefault();
            let input = document.querySelector('#inputData');
            let inputData = null;
                
            if(input) inputData = input.value;

            if(inputData === '' || !inputData) {
                input.value = 'Вы не ввели данные';
                return;
            };

            if(inputData === 'Вы не ввели данные') return;
            
            let result = this.postAxios(inputData);

            if(result) {

                input.value = '';
                this.#signUpElem.classList.remove('show');
            }



        })
    }

    async postAxios(inputData){

        if(inputData !== '' && inputData !== 'Вы не ввели данные') return true;

        // try {
        //     const response = await axios.post(
        //         '/', {
        //             tg_wa_address: inputData,
        //         }
        //     );

        //     if(response.statusText === 'OK') return true;

        // } catch (error) {
        //     console.log(error);
        // }
    }

    closeSignUpElem(){

        let closeSignUpElem;
        closeSignUpElem =  document.querySelector('.close__signUp-btn');

        closeSignUpElem.addEventListener('click', () =>{
            let input = document.querySelector('#inputData');
            input.value = '';
            this.#signUpElem.classList.remove('show');
        })
    }
}

export default new GetPopUpSignUp();