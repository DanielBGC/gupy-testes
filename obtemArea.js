
function obtemArea(forma, dimensoes) {
    switch(forma) {
        case "círculo": {
            return Math.PI * dimensoes.raio * dimensoes.raio;
        } 
        case "quadrado": {
            return dimensoes.lado * dimensoes.lado;
        } 
        case "retângulo": {
            return dimensoes.largura * dimensoes.altura;
        }
        case "triângulo": {
            return dimensoes.base * dimensoes.altura / 2;
        }
        case "hexágono": {
            return (3 * dimensoes.lado * dimensoes.lado * Math.sqrt(3) ) / 2;
        }

        default: {
            return "Essa forma geométrica não existe!";
        }
    }
}

console.log(obtemArea('círculo', {raio: 9.6}))
console.log(obtemArea('quadrado', {lado: 2.5}))
console.log(obtemArea('retângulo', {largura: 3, altura: 8}))
console.log(obtemArea('triângulo', {base: 3, altura: 8}))
console.log(obtemArea('hexágono', {lado: 3, altura: 8}))
console.log(obtemArea('formaInexistente', {lado: 3, altura: 8}))