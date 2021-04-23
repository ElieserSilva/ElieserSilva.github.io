window.addEventListener('DOMContentLoaded',(e)=>{
    console.log('Start main.js');

    if(localStorage.theme === 'dark'){
        document.querySelector('html').classList.add('dark');
        document.querySelector('#DarkModeButton').classList.remove('fa-sun');
        document.querySelector('#DarkModeButton').classList.add('fa-moon');
        // document.querySelector('#DarkModeButton').classList.add('text-blue');
        // document.
    }

    document.getElementById('mainBgVideo').addEventListener('loadeddata',(e)=>{
        e.target.play()
        console.log(e.target)
    })

    document.addEventListener('click',e=>{
        let DomId = e.target.getAttribute('id');

        console.log(DomId);

        switch(DomId){
            case 'ButtonShowMenu':{
                document.querySelector('#panelMenuLeft').classList.toggle('hidden');
                break;
            }

            case 'DarkModeButton':{
                e.target.classList.toggle('fa-sun');
                // e.target.classList.toggle('text-blue');
                e.target.classList.toggle('fa-moon');
                // e.target.classList.toggle('text-red');
                // document.querySelector('#DarkModeButton').classList.add('text-blue');

                let htmlClass = document.querySelector('html').classList;

                if(localStorage.theme == 'dark'){
                    htmlClass.remove('dark');
                    localStorage.removeItem('theme');
                }else{
                    htmlClass.add('dark');
                    localStorage.theme = 'dark';
                }

                break;
            }

            case 'proyectPTA':{
                window.open('https://fundaepicaweb.com','_blank');
                break;
            }

            case 'proyectGA':{
                window.open('https://grupoamenca.com','_blank');
                break;
            }

            case 'proyectFIY':{
                window.open('https://tucasadelinyector.com','_blank');
                break;
            }
        }


    })

})