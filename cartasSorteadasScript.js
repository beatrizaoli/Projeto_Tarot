    async function carregarCartas() {
      let inputcartas = parseInt(localStorage.getItem("quantCartas"));

      if (!inputcartas || inputcartas < 1 || inputcartas > 5) {
        document.getElementById("cartas-container").textContent = "Quantidade inválida.";
        return;
      }

      try {
        const resposta = await fetch("cards.json");
        const cartas = await resposta.json();

        for (let i = cartas.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
        }

        let selecionadas = cartas.slice(0, inputcartas);

        const container = document.getElementById("cartas-container");
        function mostrarCarta (carta) {
          const div = document.createElement("div");
          div.classList.add("carta");

          const img = document.createElement("img");
          img.src = carta.image;
          img.alt = carta.name;

          const h2 = document.createElement("h2");
          h2.textContent = carta.name;

          const p = document.createElement("p");
          p.textContent = carta.description;
          p.classList.add("MostraDesricao")  

          img.addEventListener("click", () => {
            p.classList.toggle("MostraDescricao")
            }); 

          div.appendChild(img);
          div.appendChild(h2);
          div.appendChild(p);
          container.appendChild(div);
        };
        
        selecionadas.forEach(carta => mostrarCarta(carta)); // Para cada carta dentro do array selecionadas, execute a função mostrarCarta(carta)

        const btnADD = document.createElement("button");
        btnADD.innerHTML = "Adicionar 1 carta"
        btnADD.id = "adicionarCarta"
        document.body.appendChild(btnADD);
        if (inputcartas >= 5) {btnADD.style.display = "none";}
        
        let proximaCarta = inputcartas; //Indica a quantidade escolhida, que será o indice da próxima carta
        
        btnADD.addEventListener("click", ()=>{
          const novaCarta = cartas[proximaCarta] 
          mostrarCarta(novaCarta);
          proximaCarta++;
          inputcartas++;
          if (inputcartas >= 5) {
            alert ("Chegou o limite de 5 cartas")
            btnADD.style.display = "none";
            return;
            }
          })
        
      } catch (erro) {
        console.error("Erro ao carregar cartas:", erro);
      }
    }
    carregarCartas();