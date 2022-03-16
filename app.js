document.querySelector('#menu').addEventListener('click',()=> {
     document.querySelector('nav ul').classList.toggle('showmenu')
     //classList.toggle showmenu classına geçiş yap demek
     //yani nav ul den showmenu ye geçiş yaptık
     //showmenu de display:block özelliği vardı bunun sayesinde li'ler alt alta blok şekilde sıralanacak.
})