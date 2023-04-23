function searchPokemon() {

    pokemonName = document.getElementById('inputPokemonName').value.toLowerCase()
    console.log(pokemonName)

    if(!pokemonName) {
        alert("Campo nome é obrigatório!")
    } else {

        document.querySelector('.pokedex').style.display = 'block'

        imagePokemon = document.getElementById('imagePokemon')
        nomePokemon = document.getElementById('name')
        // ability1 = document.getElementById('ability1')
        // ability2 = document.getElementById('ability2')

        hp = document.getElementById('hp')

        attack = document.getElementById('attack')

        defense = document.getElementById('defense')

        // specialAttack = document.getElementById('specialAttack')
        // specialDefense = document.getElementById('specialDefense')
        speed = document.getElementById('speed')
        type = document.getElementById('type')
        height = document.getElementById('valueHeight')
        weight = document.getElementById('valueWeight')
    
        document.querySelector('.progressBar').innerHTML = ''
        document.querySelector('.progressBar.attack').innerHTML = ''
        document.querySelector('.progressBar.defense').innerHTML = ''
        // document.querySelector('.progressBar.specialAttack').innerHTML = ''
        // document.querySelector('.progressBar.specialDefense').innerHTML  = ''
        document.querySelector('.progressBar.speed').innerHTML = ''
        type.innerHTML = ''
        type.style['grid-template-columns'] = '1fr'


        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    
        let res = axios
            .get(url)
            .then(response => {

                console.log("Pokemon encontrado")
                console.log(response.data)
    
                //imgPokemon = response.data.sprites.other.home.front_default;
                imgPokemon = response.data.sprites.other["official-artwork"].front_default;
                nome = response.data.forms[0].name
                pokemonAbility1 = response.data.abilities[0].ability.name
                pokemonAbility2 = response.data.abilities[1].ability.name
                pokemonHP = response.data.stats[0].base_stat
                pokemonAttack = response.data.stats[1].base_stat
                pokemonDefense = response.data.stats[2].base_stat
                pokemonSpecialAttack = response.data.stats[3].base_stat
                pokemonSpecialDefense = response.data.stats[4].base_stat
                pokemonSpeed = response.data.stats[5].base_stat
                pokemonType = response.data.types
                pokemonHeight = response.data.height
                pokemonWeight = response.data.weight
    
                imagePokemon.setAttribute('src', imgPokemon);
                
                nomePokemon.innerHTML = nome[0].toUpperCase() + nome.substring(1)
                
                for(i = 0; i < pokemonType.length; i++){
                    //type.innerHTML = '<p>' + pokemonTypes[0].toUpperCase() + pokemonTypes.substring(1) + '</p>'
                    console.log(pokemonType[i].type.name[0].toUpperCase() + pokemonType[i].type.name.substring(1))
                    type.innerHTML += '<p>' + pokemonType[i].type.name[0].toUpperCase() + pokemonType[i].type.name.substring(1) + '</p>'

                    if(pokemonType.length > 1){
                        type.style['grid-template-columns'] = 'repeat(2, 1fr)'
                    }

                    switch(pokemonType[i].type.name) {
                        case 'water':
                            type.children[i].style['background-color'] = '#6890f0'
                            break
                        case 'fire':
                            type.children[i].style['background-color'] = '#f05030'
                            break
                        case 'grass':
                            type.children[i].style['background-color'] = '#78c850'
                            break
                        case 'electric':
                            type.children[i].style['background-color'] = '#f8d030'
                            break
                        case 'psychic':
                            type.children[i].style['background-color'] = '#f85888'
                            break
                        case 'ice':
                            type.children[i].style['background-color'] = '#98d8d8'
                            break
                        case 'dragon':
                            type.children[i].style['background-color'] = '#7038f8'
                            break
                        case 'dark':
                            type.children[i].style['background-color'] = '#705848'
                            break
                        case 'normal':
                            type.children[i].style['background-color'] = '#a8a878'
                            break
                        case 'fight':
                            type.children[i].style['background-color'] = '#903028'
                            break
                        case 'flying':
                            type.children[i].style['background-color'] = '#a890f0'
                            break
                        case 'poison':
                            type.children[i].style['background-color'] = '#a040a0'
                            break
                        case 'ground':
                            type.children[i].style['background-color'] = '#e0c068'
                            break
                        case 'rock':
                            type.children[i].style['background-color'] = '#b8a038'
                            break
                        case 'ghost':
                            type.children[i].style['background-color'] = '#705898'
                            break
                        case 'steel':
                            type.children[i].style['background-color'] = '#b8b8d0'
                            break
                        case '???':
                            type.children[i].style['background-color'] = '#68a090'
                            break
                    }
                }

                height.innerHTML = pokemonHeight * 10
                weight.innerHTML = pokemonWeight / 10

                // ability1.innerHTML = `Ability 1: ${pokemonAbility1}`
                // ability2.innerHTML = `Ability 2: ${pokemonAbility2}`

                hp.innerHTML = `HP:`
                valueHP = (pokemonHP * 100) / 300
                document.querySelector('.progressBar.hp').innerHTML += `<div class="valueProgressBar" id="valueProgressBarHP"></div>`
                document.getElementById('valueProgressBarHP').style.width = valueHP + '%'
                document.querySelector('.progressBar').innerHTML += `<p>${pokemonHP} / 300</p>`
                
                attack.innerHTML = `Attack:`
                valueAttack = (pokemonAttack * 100) / 300
                document.querySelector('.progressBar.attack').innerHTML += `<div class="valueProgressBar" id="valueProgressBarAttack"></div>`
                document.getElementById('valueProgressBarAttack').style.width = valueAttack + '%'
                document.querySelector('.progressBar.attack').innerHTML += `<p>${pokemonAttack} / 300</p>`


                defense.innerHTML = `Defense:`
                valueDefense = (pokemonDefense * 100) / 300
                document.querySelector('.progressBar.defense').innerHTML += `<div class="valueProgressBar" id="valueProgressBarDefense"></div>`
                document.getElementById('valueProgressBarDefense').style.width = valueDefense + '%'
                document.querySelector('.progressBar.defense').innerHTML += `<p>${pokemonDefense} / 300</p>`

                // specialAttack.innerHTML = `Special Attack:`
                // valueSpecialAttack = (pokemonSpecialAttack * 100) / 300
                // document.querySelector('.progressBar.specialAttack').innerHTML += `<div class="valueProgressBar" id="valueProgressBarSpecialAttack"></div>`
                // document.getElementById('valueProgressBarSpecialAttack').style.width = valueSpecialAttack + '%'
                // document.querySelector('.progressBar.specialAttack').innerHTML += `<p>${pokemonSpecialAttack} / 300</p>`

                // specialDefense.innerHTML = `Special Defense:`
                // valueSpecialDefense = (pokemonSpecialDefense * 100) / 300
                // document.querySelector('.progressBar.specialDefense').innerHTML += `<div class="valueProgressBar" id="valueProgressBarSpecialDefense"></div>`
                // document.getElementById('valueProgressBarSpecialDefense').style.width = valueSpecialDefense + '%'
                // document.querySelector('.progressBar.specialDefense').innerHTML += `<p>${pokemonSpecialDefense} / 300</p>`

                speed.innerHTML = `Speed:`
                valueSpeed = (pokemonSpeed * 100) / 300
                document.querySelector('.progressBar.speed').innerHTML += `<div class="valueProgressBar" id="valueProgressBarSpeed"></div>`
                document.getElementById('valueProgressBarSpeed').style.width = valueSpeed + '%'
                document.querySelector('.progressBar.speed').innerHTML += `<p>${pokemonSpeed} / 300</p>`


            })
            .catch(error => {
                console.log(error.response)
                if(error.response.status == 404) {
                    alert("Pokemon não encontrado, verifique se digitou o nome correto!")
                }
            })

    }
    
}