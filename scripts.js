document.getElementById("mision").textContent = "Nuestra mision como empresa es ser un faro de innovación en el mundo de la tecnología. Estamos dedicados a liderar la vanguardia de la revolución digital y a proporcionar soluciones tecnológicas que potencien el progreso y mejoren la calidad de vida. "

document.querySelectorAll(' .modify').forEach(e => {
 console.log(e.tagName)
  if (e.tagName == "P") {
      if (e.classList.contains("email")) {
         e.textContent = "Email: nuevoemail@gmail.com"
      }
      else if (e.classList.contains("instagram")) {
         e.textContent = "Instagram: @nuevoaInstagram"
      }
   }
})










