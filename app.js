// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

  function agregarAmigo()  {                          //Función para agregar nombre de amigo
  const input = document.getElementById("amigos"); 
  const nombre = input.value.trim();
if (!nombre) {                                     //verifica que el campo no esté vacío
    alert('Por favor ingrese un nombre')
    return;
}
    amigos.push(nombre)                            //añade el nombre al array "amigos"
    input.value = "";
        const lista = document.getElementById("listaAmigos");
         lista.innerHTML = ""
amigos.forEach((nombre) => {
  const li = document.createElement("li");
  li.textContent = nombre;
  lista.appendChild(li);
});
}

function sortearAmigo() {                           //Función para sortear amigo
if (amigos.length === 0) {
    alert ('Por favor ingrese al menos un nombre')
    return
}
else { 
    const indice = Math.floor(Math.random() * amigos.length)
const amigosecreto = amigos[indice]
const resultado = document.getElementById("resultado")
resultado.innerHTML = ""
const li = document.createElement("li")
li.textContent = amigosecreto
resultado.appendChild(li)
}
}


  
  
