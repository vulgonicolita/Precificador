    function calcular() {
      taxa = parseFloat(document.getElementById("taxa").value)
      custo = parseFloat(document.getElementById("custo").value)
      reajuste = parseFloat(document.getElementById("reajuste").value)
      imposto = parseFloat(document.getElementById("imposto").value)
      embalagem = parseFloat(document.getElementById("embalagem").value)
      margem = parseFloat(document.getElementById("margem").value)
      frete = parseFloat(document.getElementById("frete").value)

      document.getElementById('teste').textContent = preco(taxa,frete,margem,embalagem,imposto,reajuste,custo).toFixed(2);
    }

    function preco(taxa,frete,margem,embalagem,imposto,reajuste,custo){
      return ((custo*((reajuste/100)+1))+frete+embalagem)/(1-(imposto/100)-(margem/100)-(taxa/100))
    } 

    function limpar(){
      document.getElementById("taxa").value = ""
      document.getElementById("custo").value = ""
      document.getElementById("reajuste").value = ""
      document.getElementById("imposto").value = ""
      document.getElementById("embalagem").value = ""
      document.getElementById("margem").value = ""
      document.getElementById("frete").value = "0.00"
      document.getElementById("teste").innerText = ""

    }

    