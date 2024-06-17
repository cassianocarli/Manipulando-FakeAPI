// angular.module('blog', [])
// .controller('Rest', function($scope, $http) {
//     $http.get('https://api-fake-blog.onrender.com/postagens')
//     .then(function(response) {
//         $scope.publicacoes = response.data;
//     }, function(error) {
//         console.error('Erro ao buscar as postagens:', error);
//     });
// })
// .controller('NoticiaDetalhesCtrl', function($scope, $http, $location) {
//     var params = new URLSearchParams($location.absUrl().split('?')[1]);
//     var id = params.get('id');

//     $http.get('https://api-fake-blog.onrender.com/postagens/' + id)
//     .then(function(response) {
//         $scope.noticia = response.data;
//     }, function(error) {
//         console.error('Erro ao buscar a notícia:', error);
//     });
// });

fetch('https://api-fake-blog.onrender.com/postagens/').then(resposta=>{
    resposta.json().then((res=>{
        // console.log(res)
        for(let i=0;i<6;i++){
          document.querySelector(`.noticia${i}`).childNodes[1].childNodes[1].src = res[i].thumbImage
          document.querySelector(`.noticia${i}`).childNodes[1].childNodes[3].innerText = res[i].title

        }



    }))
})