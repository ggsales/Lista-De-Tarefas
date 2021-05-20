
let tarefas = []            
let editarTarefa = null

function atualizaNome(){
    let atualizaTarefa =  document.getElementById("push-modal").value

    if(atualizaTarefa.length==0){
    return;
} 
tarefas[editarTarefa].titulo=atualizaTarefa


tarefasListaHTML="<ul>";
for(let i = 0;i < tarefas.length; i++){
tarefasListaHTML += "<li>" + tarefas[i].titulo + " - "+ tarefas[i].dataCriacao + "<button class='apagar' onClick=removerTarefa("+i+")>apagar</button> <button class='openModal' onClick=abrirModal("+i+")>editar</button> </li>";
}

tarefasListaHTML += "</ul>"

document.getElementById("tarefas-box").innerHTML = tarefasListaHTML;
document.getElementById("push-modal").value = "";
fecharModal()

}



function abrirModal(indice){
    editarTarefa= indice 
    document.getElementById("modal").style.display = "block";
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";  
}


function removerTarefa(indice){
    tarefas.splice(indice, 1)

    tarefasListaHTML="<ul>";
    for(let i = 0;i < tarefas.length; i++){
    tarefasListaHTML += "<li>" + tarefas[i].titulo + " - "+ tarefas[i].dataCriacao + "<button class='apagar' onClick=removerTarefa("+i+")>apagar</button> <button class='openModal' onClick=abrirModal("+i+")>editar</button> </li>";
}

tarefasListaHTML += "</ul>"

document.getElementById("tarefas-box").innerHTML = tarefasListaHTML;
document.getElementById("tarefa").value = "";
}


function dataAtualFormatada(){
    var data = new Date(),
    dia  = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0'+dia : dia,
    mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = (mes.length == 1) ? '0'+mes : mes,
    anoF = data.getFullYear();
return diaF+"/"+mesF+"/"+anoF;
}


function adicionarTarefas(){
    let tituloTarefa =  document.getElementById("tarefa").value
    if(tituloTarefa.length==0){
    alert("insira uma tarefa")
    return;
}

let tarefa ={                        
    titulo :tituloTarefa,
    dataCriacao: dataAtualFormatada()
}  
tarefas.push(tarefa)

tarefasListaHTML="<ul>";
for(let i = 0;i < tarefas.length; i++){
    tarefasListaHTML += "<li>" + tarefas[i].titulo + " - "+ tarefas[i].dataCriacao +
    "<button class='apagar' onClick=removerTarefa("+i+")>apagar</button>  <button class='openModal' onClick=abrirModal("+i+")>editar</button> </li>";
}

tarefasListaHTML += "</ul>"

document.getElementById("tarefas-box").innerHTML = tarefasListaHTML;
document.getElementById("tarefa").value = "";
}

//botao    
let botao = document.getElementById("btn-adicionar");
botao.addEventListener('click', adicionarTarefas)

