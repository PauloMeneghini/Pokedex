function seachPokemon() {

    pokemonName = document.getElementById('pokemonName').value.toLowerCase()
    console.log(pokemonName)

    if(!pokemonName) {
        alert("Campo nome é obrigatório!")
    } else {

        imagePokemon = document.getElementById('imagePokemon')
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
    
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    
        let res = axios
            .get(url)
            .then(response => {

                console.log("Pokemon encontrado")
                console.log(response.data)
    
                //imgPokemon = response.data.sprites.other.home.front_default;
                imgPokemon = response.data.sprites.other["official-artwork"].front_default;
                pokemonAbility1 = response.data.abilities[0].ability.name
                pokemonAbility2 = response.data.abilities[1].ability.name
                pokemonHP = response.data.stats[0].base_stat
                pokemonAttack = response.data.stats[1].base_stat
                pokemonDefense = response.data.stats[2].base_stat
                pokemonSpecialAttack = response.data.stats[3].base_stat
                pokemonSpecialDefense = response.data.stats[4].base_stat
                pokemonSpeed = response.data.stats[5].base_stat
                pokemonType = response.data.types[0].type.name
                pokemonHeight = response.data.height
                pokemonWeight = response.data.weight
    
                
                imagePokemon.setAttribute('src', imgPokemon);
                ability1.innerHTML = `Ability 1: ${pokemonAbility1}`
                ability2.innerHTML = `Ability 2: ${pokemonAbility2}`
                hp.innerHTML = `HP: ${pokemonHP}`
                attack.innerHTML = `attack: ${pokemonAttack}`
                defense.innerHTML = `defense: ${pokemonDefense}`
                specialAttack.innerHTML = `specialAttack: ${pokemonSpecialAttack}`
                specialDefense.innerHTML = `specialDefense: ${pokemonSpecialDefense}`
                speed.innerHTML = `speed: ${pokemonSpeed}`
                type.innerHTML = `type: ${pokemonType}`
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