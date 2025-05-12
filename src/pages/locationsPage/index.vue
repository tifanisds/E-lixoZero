<template>
    <div class="container">
        <div class="row my-4">
            <div class="col-md-12">
                <h1>Encontre Pontos de Coleta de Lixo Eletrônico</h1>
                <select class="form-select form-select-lg" v-model="selectedCity">
                    <option value="">Selecione a cidade</option>
                    <option value="Salavdor">Salvador</option>
                    <option value="Lauro de Freitas">Lauro de Freitas</option>
                    <option value="Camaçari">Camaçari</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4" v-for="location in locations" :key="location.id">
                <div class="card mb-4">
                    <div class="card-header p-4">
                        <h5 class="card-title mb-0">{{ location.name }}</h5>
                        <p class="card-city mb-0">{{ location.city }}</p>
                    </div>
                    <div class="card-body">
                        <div class="other-information">
                            <div class="location-address">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                <p>{{ location.address }}</p>
                            </div>

                            <div class="location-contact">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                                <p>{{ location.contact }}</p>
                            </div>
                            <div class="operating-hour">
                                <h5>Horário de funcionamento:</h5>
                                <p>{{ location['operating-hour'] }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            locations: [],
            selectedCity: '',
        };
    },

    created() {
        axios
        .get('/fake-api/db.json')
        .then((response) => {
            this.locations = response.data.locations;
        })
        .catch((error) => {
            console.error("Erro ao carregar os dados:", error)
        });
    },
}

</script>

<style scoped lang="scss">
    @use "../../assets/styles/variables.scss" as *;

    .container {
        min-height: 100vh;
        align-items: center;

        h1 {
            color: $secondaryColor;
            font-size: 32px;
        }

        select {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .card {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            min-height: 350px;

            .card-header {
                background-color: $secondaryColor;
                color: #FFF;

                .card-city {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;
                    width: 130px;
                    height: 25px;
                    background-color: $mainColor;
                    margin-top: 10px;
                }
            }

            .card-body {

                .location-address, .location-contact {
                    display: flex;

                    svg {
                        width: 20px;
                        margin-right: 5px;
                        margin-top: 5px;
                    }
                }
            

                p {
                    font-size: 16px;
                    color: #5c5c5c;
                }

                .operating-hour {
                    p {
                        margin: 0;
                    }

                    h5 {
                    margin-top: 5px;
                    color: $secondaryColor;
                    }
                }
            }
        }

    }
</style>