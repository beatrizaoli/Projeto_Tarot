function PaginaTiragem(){  
        let botaoquantCartas = document.getElementsByClassName("botao")[1] 
        botaoquantCartas.classList.add("botaoQuantCartas");
        botaoquantCartas.innerHTML = `
            <p>
                <label for="inputCartas">Quantas cartas:</label>
                <input type="number" name="inputQuantCartas" id="inputCartas" min="1" max="5" required >
                <button id="botaoSortear">Sortear</button>
            </p> `
    }        
     
    const SortearCartas = document.getElementById("botaoSortear")
    SortearCartas.addEventListener("click" , () => { 
        const quantcartas = parseInt(document.getElementById("inputCartas").value);
        if (!quantcartas || quantcartas < 1 || quantcartas > 5) {
            alert("Escolha um número entre 1 e 5.");
            return;
        } 
        localStorage.setItem("quantidadeCartas", quantcartas);
        window.location.href = "cards.html";
    })

    