let precoProduto = Number(prompt("Informe o preço do produto: R$"))
const desconto = 0.05 * precoProduto
let total = precoProduto - desconto 

alert(`O Preço Promocional do produto é de: R$${total.toFixed(2)} reias`)