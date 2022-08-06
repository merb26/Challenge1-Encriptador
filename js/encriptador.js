const encriptar = () => {
  let texto = document.querySelector("#txt").value

  let textoEncriptado = ""

  for (let item = 0; item < texto.length; item++) {
    let letra = texto[item]
    if (letra == "e") {
      textoEncriptado += "enter"
    } else if (letra == "i") {
      textoEncriptado += "imes"
    } else if (letra == "a") {
      textoEncriptado += "ai"
    } else if (letra == "o") {
      textoEncriptado += "ober"
    } else if (letra == "u") {
      textoEncriptado += "ufat"
    } else {
      textoEncriptado += letra
    }
  }

  console.log(textoEncriptado)
}
