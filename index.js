const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll('.animated')[0].classList.add('fadeInLeft')
            document.querySelectorAll('.animated')[1].classList.add('fadeInRight')
            document.querySelectorAll('.animated')[2].classList.add('fadeInTop')

        }
    })
    
})

observer.observe(document.querySelector(".container"))