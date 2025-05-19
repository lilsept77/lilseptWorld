function contact(event) { 
    event.preventDefault()
    const loading = document.querySelector('.modal_overlay--loading')
    const success = document.querySelector('.modal_overlay--success')
    success.classList += " modal_overlay--visible"
    emailjs
    .sendForm(
    'service_sopud4t',
    'template_f7v5o9q',
    event.target,
    'Q-_DB9xv0HNigZ6fX' 
    ).then(() => {
       
         loading.classList.remove("modal_overlay--visible");
         success.classList += " modal_overlay--visible"
    }).catch(() =>{
        loading.classList += " modal_overlay--visible"
        alert(
            "The email service is temp. unavailable. Please contact me directly on: lilsept77@gmail.com"
        );
    // console.log('This worked')
    })
     
}


