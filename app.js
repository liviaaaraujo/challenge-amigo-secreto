let amigos = [];

function adicionarAmigo(){
    const input = document.getElementById('amigo');
    let nome = input.value;

    if(nome===''){
        alert('Por favor insira um nome válido!')
        return;
    }

    if(amigos.includes(nome)){
        alert(`O nome ${nome} já está na lista`);
        return;
    }

    amigos.push(nome);
    console.log(amigos);

    input.value = '';

    atualizarLista();
}

function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0; i <amigos.length; i++){
       const li = document.createElement('li');
       li.textContent = amigos[i];
       listaAmigos.appendChild(li);
    }

}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Não tem amigos disponíveis para sortear. Digite pelo menos um nome!');
        return;
    }

    const nomeAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[nomeAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo(a) sorteado é: <li>${amigoSorteado}</li>`;

}

