<template>
    <div class="main-container">
        <div class="what-is">
            <p class="title">O que é lixo eletrônico?</p>
            <div class="info">
                <div class="texts">
                    <p class="text1">Lixo eletrônico, ou e-lixo, é todo resíduo gerado a partir do descarte de aparelhos eletrônicos que já não têm mais utilidade ou funcionamento. Isso inclui itens como celulares, computadores, televisores, baterias, carregadores, fones de ouvido, eletrodomésticos e até pilhas.</p>
                    <p class="text2">Com o avanço da tecnologia e o consumo acelerado, é comum que esses equipamentos sejam substituídos com frequência, gerando uma enorme quantidade de lixo eletrônico em todo o mundo.</p>
                </div>
                <img src="../../assets/img/lixo-eletronico.jpg" alt="">
            </div>
        </div>

        <div class="harm-to-nature">
            <p class="title">Malefícios do lixo eletrônico para a natureza</p>
            <div class="info">
                <img src="../../assets/img/lixo-eletronico-na-natureza.webp" alt="">
                <div class="texts">
                    <p class="text1">O descarte incorreto do lixo eletrônico é extremamente prejudicial ao meio ambiente. Esses materiais contêm substâncias tóxicas como chumbo, mercúrio, cádmio e arsênio, que podem contaminar o solo, o ar e os lençóis freáticos..</p>
                    <p class="text2">Quando expostos ao tempo ou queimados, esses componentes químicos se espalham e causam sérios danos à fauna, flora e à saúde humana. Além disso, o acúmulo de lixo eletrônico em locais inapropriados contribui para a poluição visual e degradação ambiental.</p>
                </div>
            </div>
        </div>

        <div class="how-to-discard">
            <p class="title">Como descartar corretamente o lixo eletrônico?</p>
            <div class="info">
                <div class="texts">
                    <p class="text1">Para evitar os impactos negativos do lixo eletrônico, é fundamental realizar o descarte correto. O ideal é procurar por pontos de coleta especializados, como ecopontos, empresas de reciclagem certificadas, campanhas de recolhimento e até lojas de eletrônicos que oferecem coleta para reciclagem.</p>
                    <p class="text2">Alguns municípios também disponibilizam pontos fixos para esse fim. O importante é nunca jogar lixo eletrônico no lixo comum, pois ele exige um tratamento adequado para que os componentes sejam reciclados ou descartados com segurança.</p>
                </div>
                <img src="../../assets/img/descarte-consciente.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
    @use "../../assets/styles/variables.scss" as *;

    .main-container {
        width: 100%;
        min-height: 100vh;
        background-color: #ebebeb;
        display: flex;
        flex-direction: column;
        align-items: center;

        .what-is {
            padding: 30px;
            margin-top: 40px;
            width: 1000px;
            background-color: #FFF;
            border-radius: 16px;

            .title {
                font-size: 35px;
                font-weight: 600;
                color: $mainColor;
                padding-bottom: 10px;
                border-bottom: 3px solid $mainColor;
            }

            .info {
                display: flex;

                p {
                    font-size: 20px;
                    text-align: justify;
                    color: $secondaryColor;
                }

                img {
                    width: 421px;
                    height: 313px;
                    margin-left: 30px;
                }
            }

        }

        .harm-to-nature {
            padding: 30px;
            margin-top: 40px;
            width: 1000px;
            background-color: #FFF;
            border-radius: 16px;

            .title {
                font-size: 35px;
                font-weight: 600;
                color: $mainColor;
                padding-bottom: 10px;
                border-bottom: 3px solid $mainColor;
            }

            .info {
                display: flex;
                
                p {
                    font-size: 20px;
                    text-align: justify;
                    color: $secondaryColor;
                }

                img {
                    width: 421px;
                    height: 313px;
                    margin-right: 30px;
                }
            }

        }

        .how-to-discard {
            padding: 30px;
            margin: 40px 0 40px 0; 
            width: 1000px;
            background-color: #FFF;
            border-radius: 16px;

            .title {
                font-size: 35px;
                font-weight: 600;
                color: $mainColor;
                padding-bottom: 10px;
                border-bottom: 3px solid $mainColor;
            }

            .info {
                display: flex;

                p {
                    font-size: 20px;
                    text-align: justify;
                    color: $secondaryColor;
                }

                img {
                    width: 421px;
                    height: 313px;
                    margin-left: 30px;
                }
            }

        }


    }
</style>