function searchPokemon() {

    pokemonName = document.getElementById('inputPokemonName').value.toLowerCase()
    console.log(pokemonName)

    if(!pokemonName) {
        alert("Campo nome é obrigatório!")
    } else {

        document.querySelector('.pokedex').style.display = 'block'

        imagePokemon = document.getElementById('imagePokemon')
        nomePokemon = document.getElementById('name')
        ability1 = document.getElementById('ability1')
        ability2 = document.getElementById('ability2')

        hp = document.getElementById('hp')

        attack = document.getElementById('attack')

        defense = document.getElementById('defense')

        specialAttack = document.getElementById('specialAttack')
        specialDefense = document.getElementById('specialDefense')
        speed = document.getElementById('speed')
        type = document.getElementById('type')
        height = document.getElementById('height')
        weight = document.getElementById('weight')
    
        document.querySelector('.progressBar').innerHTML = ''
        document.querySelector('.progressBar.attack').innerHTML = ''
        document.querySelector('.progressBar.defense').innerHTML = ''
        document.querySelector('.progressBar.specialAttack').innerHTML = ''
        document.querySelector('.progressBar.specialDefense').innerHTML  = ''
        document.querySelector('.progressBar.speed').innerHTML = ''


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
    
                pokemonTypes = ""

                for(i = 0; i < pokemonType.length; i++) {
                    console.log(pokemonType[i].type.name)
                    pokemonTypes += `${pokemonType[i].type.name} `
                }
                
                imagePokemon.setAttribute('src', imgPokemon);

                nomePokemon.innerHTML = nome[0].toUpperCase() + nome.substring(1)

                ability1.innerHTML = `Ability 1: ${pokemonAbility1}`
                ability2.innerHTML = `Ability 2: ${pokemonAbility2}`

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

                specialAttack.innerHTML = `Special Attack:`
                valueSpecialAttack = (pokemonSpecialAttack * 100) / 300
                document.querySelector('.progressBar.specialAttack').innerHTML += `<div class="valueProgressBar" id="valueProgressBarSpecialAttack"></div>`
                document.getElementById('valueProgressBarSpecialAttack').style.width = valueSpecialAttack + '%'
                document.querySelector('.progressBar.specialAttack').innerHTML += `<p>${pokemonSpecialAttack} / 300</p>`

                specialDefense.innerHTML = `Special Defense:`
                valueSpecialDefense = (pokemonSpecialDefense * 100) / 300
                document.querySelector('.progressBar.specialDefense').innerHTML += `<div class="valueProgressBar" id="valueProgressBarSpecialDefense"></div>`
                document.getElementById('valueProgressBarSpecialDefense').style.width = valueSpecialDefense + '%'
                document.querySelector('.progressBar.specialDefense').innerHTML += `<p>${pokemonSpecialDefense} / 300</p>`

                speed.innerHTML = `Speed:`
                valueSpeed = (pokemonSpeed * 100) / 300
                document.querySelector('.progressBar.speed').innerHTML += `<div class="valueProgressBar" id="valueProgressBarSpeed"></div>`
                document.getElementById('valueProgressBarSpeed').style.width = valueSpeed + '%'
                document.querySelector('.progressBar.speed').innerHTML += `<p>${pokemonSpeed} / 300</p>`

                type.innerHTML = `type: ${pokemonTypes}`
                height.innerHTML = `height: ${pokemonHeight}`
                weight.innerHTML = `weight: ${pokemonWeight}`

            })
            .catch(error => {
                console.log(error.response)
                if(error.response.status == 404) {
                    alert("Pokemon não encontrado, verifique se digitou o nome correto!")
                }
            })

    }
    
}