<template>
    <div class="main-container">
        <h1>Lixo Eletrônico: Um Desafio do Nosso Tempo</h1>
        <h2>Informação, conscientização e ação para um futuro mais sustentável</h2>
        <h3>Sobre o projeto!</h3>
        <div class="linha"></div>

        <div class="about-the-project-text">
            <p>Este projeto foi desenvolvido com o objetivo de unir aprendizado e conscientização sobre um tema cada vez mais urgente: o lixo eletrônico. Criado como parte de uma iniciativa pessoal de estudos em desenvolvimento web e sustentabilidade, o projeto busca informar a população sobre o que é o lixo eletrônico, os impactos que ele causa ao meio ambiente e a forma correta de descartá-lo. Acreditamos que, por meio da informação, é possível promover atitudes mais conscientes e responsáveis, contribuindo para um futuro mais limpo e sustentável.</p>
        </div>

        <div class="data">
            <div class="row-container">
                <div class="eletronic-waste">
                    <p class="title">57,4</p>
                    <p class="text">Milhões de toneladas de lixo eletrônico produzidas globalmente por ano</p>
                </div>
                <div class="recycling">
                    <p class="title">17,4%</p>
                    <p class="text">Taxa global de reciclagem do lixo eletrônico</p>
                </div>
            </div>
            <div class="urban-waste">
                <p class="title">2%</p>
                <p class="text">Do lixo urbano é eletrônico, mas representa 70% dos resíduos tóxicos</p>
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

        h1 {
            color: $secondaryColor;
            margin-top: 35px;
        }

        h2 {
            color: $mainColor;
        }

        h3 {
            font-weight: bold;
            color: $mainColor;
            font-size: 25px;
            margin-top: 30px;
        }

        .linha {
            height: 4px;
            background-color: $secondaryColor;
            width: 120px;
            border-radius: 10px;
        }

        .about-the-project-text {
            margin-top: 50px;
            width: 720px;
            background-color: #FFF;
            padding: 20px;
            border-radius: 10px;
            text-align: justify;
            font-size: 18px;
        }

        .data {
            max-width: 720px;
            width: 100%;

            .row-container {
                display: flex;
                justify-content: space-around;
                width: 100%;
                margin-top: 30px;
                gap: 20px;

                .eletronic-waste, .recycling {
                    background-color: #FFF;
                    padding: 20px;
                    border-radius: 10px;
                    width: 400px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .title {
                        font-size: 40px;
                        color: $mainColor;
                        font-weight: bold;
                    }

                    .text {
                        text-align: center;
                        font-size: 18px;
                        color: $secondaryColor;
                    }
                }
            }

            .urban-waste {
                background-color: #FFF;
                padding: 20px;
                border-radius: 10px;
                width: 720px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 30px 0 60px 0;

                .title {
                    font-size: 40px;
                    color: $mainColor;
                    font-weight: bold;
                }

                .text {
                    text-align: center;
                    font-size: 18px;
                    color: $secondaryColor;
                }
            }
        }
    }
</style>