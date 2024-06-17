
fetch('https://api-fake-blog.onrender.com/postagens/').then(resposta=>{
    resposta.json().then((res=>{
        // console.log(res)
        for(let i=0;i<6;i++){
          document.querySelector(`.noticia${i}`).childNodes[1].childNodes[1].src = res[i].thumbImage
          document.querySelector(`.noticia${i}`).childNodes[1].childNodes[3].innerText = res[i].title

        }



    }))
})
