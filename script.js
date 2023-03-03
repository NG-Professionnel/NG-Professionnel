// -- Theme menu animation --

const btn = $(".theme__btn");
const option = $(".theme__option");



// Statut ouvert ou fermé du "theme__btn"
const openClose = (btn, option) => {
  btn.toggleClass("open");
  btn.toggleClass("closed");
  option.toggleClass("open");
  option.toggleClass("closed");
};

let clickCount = 0;

btn.on("click", function () {
  if (clickCount == 0) {
    $(this).addClass("open");
    option.addClass("open");
    clickCount = 1;
  } else {
    openClose(btn, option);
  }
});


//  -- Date --

const printDate = () => {
  let t = new Date();
  let mois = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
  ];
  // Affichage date
  $(".date__full").html(
    `${t.getUTCDate()} ${mois[t.getUTCMonth()]} ${t.getUTCFullYear()}`
  );
  // Affichage heure
  $(".date__time").html(
    `${t.getHours()} : ${t.getMinutes()} : ${t.getSeconds()}`
  );
};
// Declenchement de la fonction printDate toute les secondes
setInterval(printDate, 1000);