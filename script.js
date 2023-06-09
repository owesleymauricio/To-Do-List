const btn = document.querySelector('.btn-add-task')
const input = document.querySelector('.input-task')
const listComplete = document.querySelector('.list-task')

let myListTask = []

function adicionar(){
    if (input.value !== '') {
        myListTask.push({
          tarefa: input.value,
          concluida: false
        });
        input.value = '';
        mostrarTarefa();
      } else {
        alert('Por favor, insira uma tarefa válida.');
      }
}

function mostrarTarefa(){
    let novaLi = ''
    myListTask.forEach((item, posicao) => {
        novaLi = novaLi + `  <li class="task ${item.concluida && "done"}">
        <img src="assets/correto.png" alt="correto" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="assets/excluir.png" alt="lixeira" onclick="deletar(${posicao})">
    </li>`
    })
    listComplete.innerHTML= novaLi
    localStorage.setItem('lista', JSON.stringify(myListTask))
}

function concluirTarefa(posicao){
    myListTask[posicao].concluida = !myListTask[posicao].concluida
    mostrarTarefa()
}

function deletar(posicao){
    myListTask.splice(posicao, 1)
    mostrarTarefa()
}

function recarregarTarefa(){
    const tarefasLocalStorage = localStorage.getItem('lista') 
    if(tarefasLocalStorage){
        myListTask = JSON.parse(tarefasLocalStorage)

    }
    mostrarTarefa()
}

btn.addEventListener('click', adicionar)