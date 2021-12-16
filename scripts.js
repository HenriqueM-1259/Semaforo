const vermelho = document.getElementById('vermelho');
        const Vstyle = vermelho.style.background = 'red';
        const amarelo = document.getElementById('amarelo');
        const Astyle = amarelo.style.background = 'rgb(53, 53, 53)'
        const verde = document.getElementById('Verde');
        const cVermelho = 'blue'
        var contador = 9000;
        var parar = true;


        
            setInterval(function () {
                if (parar != false) {
                    document.getElementById('botao').innerText = 'Parar pedestre'
                    document.getElementById('botao').style.background = 'red'
                    farol();
                    console.log(parar)
                }else{
                    document.getElementById('botao').style.background = 'green'
                    document.getElementById('botao').innerText = 'Pedestre pode andar'
                    console.log(parar)
                    setTimeout(() => {
                        parar = true
                        
                    }, 10000);
                }
 
            
            }, contador)

        
        function pedestre() {
            parar = false
            
        }
        function farol() {
            console.log(1)
            setTimeout(function () {
                if (vermelho.style.background = 'red') {

                    vermelho.style.background = 'rgb(53, 53, 53)'
                    amarelo.style.background = 'yellow'
                    setTimeout(function () {
                        if (amarelo.style.background = 'yellow') {


                            amarelo.style.background = 'rgb(53, 53, 53)'
                            verde.style.background = 'green'

                            setTimeout(function () {
                                console.log('q')
                                if (verde.style.background = 'green') {
                                    vermelho.style.background = 'red';
                                    verde.style.background = 'rgb(53, 53, 53)'

                                }
                            }, 3000)

                        }
                    }, 3000);



                }



            }, 3000)





        }


