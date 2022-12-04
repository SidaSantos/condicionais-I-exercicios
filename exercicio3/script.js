let nacionalidade = prompt("Qual a sua nacionalidade?")

const nacionalidades = ["brasileira", "argentina",
"uruguaia", "chilena", "colombiana"]


if(nacionalidades.includes(nacionalidade)){
    console.log(nacionalidade)
}else{
    console.log("nacionalidade nao encontrada")
}

