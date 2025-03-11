document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      setTimeout(() => {
        section.style.opacity = '1';
      }, 300);
    });
  });
  const form = document.getElementById("contact-form");
  const tudo_pronto = document.getElementById("tudo_pronto");
  const ocorreu_erro = document.getElementById("Ocorreu_um_erro");
  const email = document.getElementById("email");
  const tel = document.getElementById("tel");
document.addEventListener("submit", function(event) {
  event.preventDefault();
  if(email.value===""||tel.value ===""){
    ocorreu_erro.classList.remove("d-none");
    tudo_pronto.classList.add("d-none");
    return;
  }
  const formData = new FormData(form);
  fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:formData
  })
  .then(response => {
    if(!response.ok){
      throw new Error("Erro ao enviar a mensagem")
    }
    return response.json();
  })
  .then(data => {
    console.log("Resposta do Servidor:",data);
    tudo_pronto.classList.remove("d-none");
    ocorreu_erro.classList.add("d-none");
    form.reset();
  })
  .catch(error => {
    console.error("Erro:",error);
    tudo_pronto.classList.add("d-none");
    ocorreu_erro.classList.remove("d-none");
  })
  document.getElementById("contact-form").reset();
});
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (document.body.clientWidth < 992) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.remove('show');
      }
    });
  });
  navbarToggler.addEventListener('click', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
  });
});
document.addEventListener("scroll",function(){
  var navbar = document.querySelector(".bg-navbar");
  if (window.scrollY >50){navbar.classList.add('scrolled')}else{navbar.classList.remove("scrolled");}
});
document.addEventListener("scroll",function(){
  var ponto = document.getElementById("habilidades")
  var pontoPos = ponto.getBoundingClientRect().top + window.scrollY;
  var navbar_after = document.querySelector(".bg-navbar-after");
  if (window.scrollY >pontoPos){navbar_after.classList.add('after');}else{navbar_after.classList.remove('after');}
});
function abrirImagem(imageSrc){
  var modal = document.getElementById("imageModal");
  modal.style.display = "block";;
  var modalImage = document.getElementById("modalImage");
  modalImage.style.width = "4800px";
  modalImage.style.height = "auto";
  modalImage.src = imageSrc;
}
function closeModal(){
  var modal = document.getElementById("imageModal");
  modal.style.display = "none"; 
}
window.onclick = function(event){
  var modal = document.getElementById("imageModal")
  if(event.target == modal){
    modal.style.display = "none";
  } }
