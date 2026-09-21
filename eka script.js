/* BUKA YOUTUBE */

function bukaLagu(){

  window.open(
    "https://www.youtube.com/watch?v=4OL6d6NZ3I0",
    "_blank"
  );

}


/* BUKA PESAN */

function openLetter(id){

  document.getElementById(id).style.display = "block";

  document.body.style.overflow = "hidden";

}


/* TUTUP PESAN */

function closeLetter(id){

  document.getElementById(id).style.display = "none";

  document.body.style.overflow = "auto";

}


/* KLIK LUAR KERTAS */

document.querySelectorAll(".letter").forEach(function(letter){

  letter.addEventListener("click",function(event){

    if(event.target === letter){

      letter.style.display = "none";

      document.body.style.overflow = "auto";

    }

  });

});
