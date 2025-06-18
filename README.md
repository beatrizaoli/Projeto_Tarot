# Projeto Tarot
## Prática de JS e Lógica de Programação

Criei um site que sorteia cartas de tarot a partir da quantidade de cartas escolhida para praticar JavaScript e Lógica de Programação. 

O site é voltado para dispositivos móveis. 

<a href="https://beatrizaoli.github.io/Projeto_Tarot/">Clique aqui para testar</a>


Na primeira página há dois botões: “Tiragem Aleatória” e “Fazer um Jogo”. Apenas o botão “Tiragem Aleatória” está funcional até o momento. Ao clicar nele, surgem:
- um campo para digitar a quantidade de cartas (com limite),
- um botão “Sortear” e
- um botão “Voltar”.

Quando o usuário insere o número de cartas e clica em “Sortear”, esse valor é armazenado e o usuário é redirecionado para a próxima página.
Nessa nova página: O arquivo cards.json com as cartas de Tarot é carregado, as cartas são embaralhadas aleatoriamente e as X primeiras cartas são selecionadas, sendo X o valor digitado pelo usuário.
Cada carta é exibida na tela com nome e imagem. E, ao clicar na imagem, a descrição da carta é revelada. 
Se o número de cartas sorteadas for menor que limite, aparece um botão “Adicionar 1 carta”, que adiciona mais uma nova carta aleatória (sem repetir as anteriores).


Cronograma de desenvolvimento do projeto:
Dia 1  (3/6)
> Criar design inicial do projeto
> Estruturar HTML, CSS e JS da primeira página 
Dia 2  (4/6)
> Criar funcionalidade do botão “Tiragem Aleatória” 
> Criar e armazenar as 78 cartas em um JSON 
Dia 3  (9/6)
> Adicionar input para definir quantidade de cartas (com controle)
> Adicionar botão “Sortear” que redirecione para nova página

Dia 4  (11/6)
> Conectar o JSON no código
> Desenvolver a função para embaralhar as cartas

Dia 5  (12/6)
> Pesquisar como recuperar valor do input
> Usar o valor do input para sortear as cartas
> Desenvolver função para sortear as cartas 

Dia 6  (14/6)
> Criar a página das cartas sorteadas
> Exibir cartas sorteadas dinamicamente

Dia 7  (17/06)
> Criar botão de “adicionar 1 carta” 
> Solucionar problema das imagens no  Github Pages
> Organizar o css: Centralizar cartas e corrigir tamanho, bordas e sombras 
> Adicionar clique na imagens para exibir a descrição 

Dia 8  (18/06)
> Corrigir botão de “voltar” ( tá criando vários botões no clique) 
> Corrigir o clique da imagem  





