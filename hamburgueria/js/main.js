

// ivita que o programa HTML seja executado depois do js
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}
function ready() {
  // Função que contem a identificação de qual botão foi usado e assim chama e executa as demais funções
  var totalAmout = "0,00"
//-------------------------------------
  const RemoverPrudutosButtons = document.getElementsByClassName("remove-produtos-buttons")
  for (let i = 0; i < RemoverPrudutosButtons.length; i++) {
    RemoverPrudutosButtons[i].addEventListener("click", RemoverProduto)
  }

//-------------------------------------
   // Botão que alterar quantidade
  const QuantidadeInput = document.getElementsByClassName("Prod-qtd-Input")
  for (let i = 0; i < QuantidadeInput.length; i++) {
    QuantidadeInput[i].addEventListener("change", updatetotal)
  }
//-------------------------------------
//Botão que add ao carrinho
const AddCarrinhoButtons = document.getElementsByClassName("button-haver-backgroud")
for (var i = 0; i < AddCarrinhoButtons.length; i++) {
  AddCarrinhoButtons[i].addEventListener("click",AddProductToCar)
//-------------------------------------
// Botão que verifica se tem ou não item no carrinho / FINALIZAR COMPRA
const purchaseButton = document.getElementsByClassName("purchase-button")[0]
purchaseButton.addEventListener("click",makePuerchese)

}
}
//-------------------------------------
//Finalizar Compra
function makePuerchese(){
  if (totalAmout === "0,00"){

   alert("seu carrinho esta vazio!!!") 
  }else{
    alert(
      `
      Obrigado pela sua compra!!
      Valor da compra: R$${totalAmout}
      Volte sempre :)
      `
    )
}
// Esvaziar e atulizar carrinho
document>querySelector("cart-table tbody").innerHTML = ""
updatetotal();
}
//-------------------------------------
// faz a remoção automatica de produtos se o valor da quantidade for zero
function checkIfinputIsNull(event){
  if (event.target.value === "0"){
  
    event.target.parentElement.parentElement.remove()
  }
    updatetotal()
  }
//-------------------------------------
// Add produtos ao carrinho e mantem ele atulizado / Função principal
function AddProductToCar(event){
  // puxar informaçoes dos produtos, posteriormente vamos usar em newCartProduct
const button = event.target// pegar o botão certo
const ProdutoInfo = button.parentElement.parentElement
const ProdutoImagem = ProdutoInfo.getElementsByClassName("pruduct-image")[0].src
const TituloProduto = ProdutoInfo.getElementsByClassName("pruduct-title")[0].innerText
const ProdutoPrice = ProdutoInfo.getElementsByClassName("pruduct-price")[0].innerText

//Faz a identificação para que novos produtos do mesmo tipo e add no carrinho
const pruductCarName = document.getElementsByClassName("car-pruduct-title")//classe tirada do codigo -->" newCartProduct.innerHTML = "
for (let i = 0; i < pruductCarName.length; i++) {
  if (pruductCarName[i].innerText === TituloProduto){
    pruductCarName[i].parentElement.parentElement.getElementsByClassName("Prod-qtd-Input")[0].value++
return// evita a dupliocidade de produtos
}
}

// Add as informações do produto novo
let newCartProduct = document,createElent("tr")
newCartProduct.classList.add("cart-pruduct")

newCartProduct.innerHTML =
`
https://www.youtube.com/watch?v=wARWyPzNA9o
caracteristcas do produto que vão estar no td / 41:15
`
// Garante que o codigo seja puxado do local correto, e que a variavel criada estaja no local correto
const tabBody = document.querySelector("tbody")
tabBody.append(newCartProduct)

// Para atualizar o carrinhho apos add novos elementos
updatetotal()
newCartProduct.getElementsByClassName("Prod-qtd-Input")[0].addEventListener("charge", checkIfinputIsNull)
newCartProduct.getElementsByClassName("remove-produtos-buttons")[0].addEventListener("click",RemoverProduto)
}

//-------------------------------------
// remover itens do carrinho
  function RemoverProduto(event) {
    event.target.parentElement.parentElement.remove()
    updatetotal()
  }
//-------------------------------------
// atuliza o valor do carrinho
  function updatetotal() {
    totalAmout = 0

    const cartProducts = document.getElementsByClassName("cart-Products")
    for (let i = 0; i < cartProducts.length; i++) {
//-------------------------------      
      const ProdutoPreco = cartProducts[i].getElementsByClassName("car-products-price")[0].innerText.replace("R$", "").replace(",", ".")// pegar o valor do produto,[0].innerText --> pegar o texto da variavel,replace("R$", "") --> srve para substituir textos 
//-------------------------------------
      const ProdutoQuantidade = cartProducts[i].getElementsByClassName("Prod-qtd-Input")[0].value//pegar a quantidade

      totalAmout += ProdutoPreco * ProdutoQuantidade
    }
    totalAmout = totalAmout.toFixed(2) // serve para arredondar as casas decimais após a virgolá

    totalAmout = totalAmout, replace(".", ",")

    document.querySelector("colocar o ele mento que esta representando o toral do html /minuto 19:00 ").innerText = "R$ " + totalAmout
  }
























