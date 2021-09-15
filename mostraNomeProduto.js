// A regra de negócio diz que, caso o pedido não tenha produto, retorne vazio.
// Caso o parâmetro "mostrarTodos" seja verdadeiro, retorna o nome do produto.
// Caso contrário, mostrar o nome do produto apenas quando o índice for 0,1 ou 2.

function mostraNomeProduto(indice, pedido, mostrarTodos) {
    if(pedido == null || pedido == undefined) {
        return ""
    }
    else if((mostrarTodos == true) || ([0, 1, 2].includes(indice)) ) {
        return pedido.nomeProduto
    }
}