var accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click',function() {

        

        let text = this.nextElementSibling;
        console.log(text);

        if (text.style.display == 'block') {
            text.style.display = 'none';
            this.classList.remove('active');
        }
        else {
            text.style.display = 'block';
            this.classList.add('active');
        }

    })
}