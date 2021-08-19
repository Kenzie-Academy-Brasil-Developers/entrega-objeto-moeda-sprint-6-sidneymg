// Use "this.state" para acessar a propriedade "state".
// Configure de forma randômica a propriedade “state” do
// seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
const coin = {
    state: 0,
  
    flip: function () {
      let valor = Math.random() * (2 - 0) + 0
      this.state = Math.floor(valor)
    },

    // Se o valor de "state" for 0, retorne "Heads"
    // Se o valor de "state" for 1, retorne "Tails"
    toString: function () {
      let face = ''
      if(this.state === 1){
        return 'Tails'
      }else{
        return 'Heads'
      }
    },

    // Colocar uma imagem correspondente a essa valor.
    // return image;

  
    toHTML: function () {
      const image = document.createElement("img");
      let face = this.toString()
      if(face === 'Heads'){
        image.src = "../images/Heads.PNG"
        image.alt = "Heads"
      }
      if(face === 'Tails'){
        image.src = '../images/Tails.PNG'
        image.alt = 'Tails'
      }
      
      document.body.appendChild(image)
    },
  };
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.


  function display20Flips() {
    const results = [];
    let resultado = document.createElement('h3')
    for(let  i = 0; i < 20; i++){
      coin.flip()
      results.push(coin.toString())
      resultado.innerText += `(${coin.toString()})  `
    }
    document.body.appendChild(resultado)
    
    return results
  }
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
  
  function display20Images() {
    const results = [];
    for(let i = 0; i < 20; i++){
      coin.flip()
      results.push(coin.toString())
      coin.toHTML()
    }
    
    return results
  }


display20Flips()
display20Images()