const e = "enter"
const i = "imes"
const a = "ai"
const o = "ober"
const u = "ufat"

const encriptar = () => {
  let texto = document.querySelector("#txt").value

  let textoEncriptado = ""

  for (let item = 0; item < texto.length; item++) {
    let letra = texto[item]
    if (letra == "e") {
      textoEncriptado += e
    } else if (letra == "i") {
      textoEncriptado += i
    } else if (letra == "a") {
      textoEncriptado += a
    } else if (letra == "o") {
      textoEncriptado += o
    } else if (letra == "u") {
      textoEncriptado += u
    } else {
      textoEncriptado += letra
    }
  }

  manejarElementos(textoEncriptado)
}

const desencriptar = () => {
  const texto = document.querySelector("#txt").value

  let textoDesencriptado = ""
  for (let index = 0; index < texto.length; index++) {
    const letra = texto[index]

    if (letra == "e") {
      textoDesencriptado += "e"
      index += --e.length
    } else if (letra == "i") {
      textoDesencriptado += "i"
      index += --i.length
    } else if (letra == "a") {
      textoDesencriptado += "a"
      index += --a.length
    } else if (letra == "o") {
      textoDesencriptado += "o"
      index += --o.length
    } else if (letra == "u") {
      textoDesencriptado += "u"
      index += --u.length
    } else {
      textoDesencriptado += letra
    }
  }
  manejarElementos(textoDesencriptado)
}

const manejarElementos = texto => {
  document.getElementById("muñeco").style.display = "none"
  document.getElementById("texto1").style.display = "none"
  document.getElementById("texto2").style.display = "none"
  document.getElementById("resultado").innerText = texto
  document.getElementById(
    "btnBuscar"
  ).innerHTML = `<button onclick=copiar() class="btn btn-success shadow-none btnBuscar">Copiar</button>`
}

const copiar = () => {
  var rango = document.createRange()
  rango.selectNode(document.getElementById("resultado"))
  window.getSelection().removeAllRanges() // clear current selection
  window.getSelection().addRange(rango) // to select text
  document.execCommand("copy")
}
