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
            max-width: 1000px;
            background-color: #FFF;
            padding: 20px;
            border-radius: 10px;
            text-align: justify;
            font-size: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            color: $secondaryColor;
        }

        .data {
            max-width: 1000px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .row-container {
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-top: 30px;
                gap: 20px;

                .eletronic-waste, .recycling {
                    background-color: #FFF;
                    padding: 20px;
                    border-radius: 10px;
                    width: 450px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

                    .title {
                        font-size: 40px;
                        color: $mainColor;
                        font-weight: bold;
                    }

                    .text {
                        text-align: center;
                        font-size: 20px;
                        color: $secondaryColor;
                    }
                }
            }

            .urban-waste {
                background-color: #FFF;
                padding: 20px;
                border-radius: 10px;
                max-width: 1000px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 30px 0 60px 0;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

                .title {
                    font-size: 40px;
                    color: $mainColor;
                    font-weight: bold;
                }

                .text {
                    text-align: center;
                    font-size: 20px;
                    color: $secondaryColor;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .main-container {
            padding: 20px;

            h1 {
                text-align: center;
            }

            h2 {
                text-align: center;
            }

            .about-the-project-text {
                font-size: 16px;
            }

            .data {

                .row-container {

                    .eletronic-waste, .recycling {

                        .title {
                            font-size: 30px;
                        }

                        .text {
                            font-size: 16px;
                        }
                    }
                }

                .urban-waste {
                
                    .title {
                        font-size: 30px;
                    }

                    .text {
                        font-size: 16px;
                    }
                }
            }

        }
    }
</style>