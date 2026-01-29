//      BEAN & BREW SCRIPT


function formScript() {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('bookingForm');
        const message = document.getElementById('formMessage');

        if (form && message) {    
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                let valid = true;

                //this is to clear previous errors
                document.querySelectorAll('.error').forEach(e1 => e1.textContent = '');
                message.textContent = '';

                // this is to get values. (.trim removes any white space the user has entered)
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const date = document.getElementById('date').value.trim();
                const time = document.getElementById('time').value.trim();

                //this is to validate the input
                if (!name) {
                    document.getElementById('nameError').textContent = 'Name is required';
                    valid = false;
                }
                else if (!/^\S+@\S+\.\S+$/.test(email)) {
                    document.getElementById('emailError').textContent = 'Enter a valid email address';
                    valid = false;
                }

                // else if (!date){
                //     document.getElementById('dateError').textContent = 'Date is required.';
                // }

                // else if(!time){
                //     document.getElementById('timeError').textContent = 'Time is required';
                //     valid = false;
                // }
            
                else if(valid){
                    message.textContent = 'Enquiry successfully submitted!';
                    message.className = 'success';
                    form.reset();
                }
                else{
                    message.textContent = 'Please fix the errors above.';
                    message.className='error';
                }
            })
        }

        const navToggle = document.querySelector('.nav-toggle');
        const navbar = document.querySelector('.navbar');

        if (navToggle && navbar) {
            navToggle.addEventListener('click', () => {
                const isOpen = navbar.classList.toggle('open');
                navToggle.setAttribute('aria-expanded', isOpen)
            });
        }   

        const gallery = document.querySelector('.whatson-container-column-2');

        if (gallery) {
            gallery.addEventListener('wheel', (e) => {
                e.preventDefault();
                gallery.scrollLeft += e.deltaY;
            });
        }
    });

}

formScript();