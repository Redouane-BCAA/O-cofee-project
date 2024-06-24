export function SetUpSendMail() {
  /*********************** EMAIL JS *******************************/
  // récupération des données et éléments du formulaire
  const contactForm = document.getElementById("contact_form");
  const contactNameInput = document.getElementById("name_input");
  const contactEmailInput = document.getElementById("email_input");
  const contactMessage = document.getElementById("message_input");

  // Initialisation de EmailJS avec ton ID utilisateur
  (function () {
    emailjs.init({
      publicKey: "qosgqokJ8UJJhQQqw",
    });
  })();

  function sendEmail(e) {
    e.preventDefault();

    // Création objet params avec les valeurs des inputs
    const params = {
      name: contactNameInput.value,
      email: contactEmailInput.value,
      message: contactMessage.value,
    };

    // Envoi de l'email avec EmailJS
    emailjs.send("service_b81vh3s", "template_z8lvugs", params).then(
      () => {
        console.log("success");
        // Vide les champs de saisie
        contactNameInput.value = "";
        contactEmailInput.value = "";
        contactMessage.value = "";
      },
      (error) => {
        console.error("problème lors de l'envoi", error);
        alert("problème lors de l'envoi");
      }
    );
  }

  // Ajout de l'événement 'submit' au formulaire
  contactForm.addEventListener("submit", sendEmail);
}
