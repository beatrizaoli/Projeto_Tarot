function PaginaTiragem(){  
        const botaoquantCartas = document.getElementsByClassName("botao")[1] 
        botaoquantCartas.classList.add("botaoQuantCartas");
        botaoquantCartas.innerHTML = `
            <p>
                <label for="inputCartas">Quantas cartas:</label>
                <input type="number" name="inputQuantCartas" id="inputCartas" min="1" max="5" required >
                <button id="botaoSortear">Sortear</button>
            </p> `;
        const btnVoltar = document.getElementById('IbtnVoltar');
        btnVoltar.style.display = "block"  
        btnVoltar.addEventListener("click", ()=> {
           botaoquantCartas.innerHTML = "Fazer um jogo";
           botaoquantCartas.className = ("botao") 
           btnVoltar.style.display = "none"
        })
     
        const btnSortear = document.getElementById("botaoSortear")
        btnSortear.addEventListener("click" , () => { 
            const inputcartas = parseInt(document.getElementById("inputCartas").value);
            if (!inputcartas || inputcartas < 1 || inputcartas > 5) {
                alert("Escolha um número entre 1 e 5.");
                return;
            } 
            localStorage.setItem("quantCartas", inputcartas);
            window.location.href = 'cartasSorteadas.html';
        });
    }

    