const coin = {
    state: 0,
  
    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      let valor = Math.random() * (2 - 0) + 0
      this.state = Math.floor(valor)
      // Configure de forma randômica a propriedade “state” do
      
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
    },
  
    toString: function () {
      // Se o valor de "state" for 0, retorne "Heads"
      let face = ''
      if(this.state === 1){
        return 'Tails'
      }else{
        return 'Heads'
      }
      // Se o valor de "state" for 1, retorne "Tails"
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      let face = this.toString()
      // Colocar uma imagem correspondente a essa valor.
      if(face === 'Heads'){
        image.src = "../assets/images/heads.png"
        image.alt = "Heads"
      }
      if(face === 'Tails'){
        image.src = '../assets/images/tails.png'
        image.alt = 'Tails'
      }
      
      // return image;
      document.body.appendChild(image)
    },
  };


  function display20Flips() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    let resultado = document.createElement('h3')

    for(let  i = 0; i < 20; i++){
      coin.flip()
      results.push(coin.toString())
      resultado.innerText += `(${coin.toString()})  `
    }
    document.body.appendChild(resultado)
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.

    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
    
    return results
  }
  
  function display20Images() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    for(let i = 0; i < 20; i++){
      coin.flip()
      results.push(coin.toString())
      coin.toHTML()
    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
    
    return results
  }


display20Flips()
display20Images()