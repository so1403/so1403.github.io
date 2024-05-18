function checkPasswort() {
  const givenPassword = document.createElementById("passwordInput").value;
  const correctPassword = "Ily,Martin<3";

  if (givenPassword == correctPassword) {
    window.location.href = "loveletter.html";
  } else {
    alert(
      "Tippfehler;) oder es geht dich nichts an. Das Passwort kannst du eh nicht erraten."
    );
  }
}
