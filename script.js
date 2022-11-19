let superStrongChars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+ABCDEFGHIJKLMOPQRSTUVWXYZ";
let strongChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ";
let weakChars = "0123456789abcdefghijklmnopqrstuvwxyz";

let funny = ['password', 'incorrect', 'IdontKnow', 'tryAgain', 'date', 'oneToEight', 'onetwothree', 'myPHoneNumber', 'myAge', 'yourName'];

let hiddenInput = document.getElementById("hiddenInput");

let copyPassword = () => {
  hiddenInput.select();
  document.execCommand("copy");
}

let showModal = (pass) => {
  swal({
    title: "Your Password is: ",
    text: `${pass}`,
    buttons: ["ok", "copy"]
  })
    .then((copy) => {
      if (copy) {
        swal("Your Password has been copied", {
          icon: "success",
        });
      }
    });
}

let showPasswordModal = (index) => {
  let password = new Password();
  let pass = '';
  switch (index) {
    case 0:
      pass = password.generateSuperStrongPassword();
      showModal(pass);
      copyPassword();
      break;
    case 1:
      pass = password.generateStrongPassword();
      showModal(pass);
      copyPassword();
      break;
    case 2:
      pass = password.generateWeakPassword();
      showModal(pass);
      copyPassword();
      break;
    case 3:
      pass = password.generateFunnyPassword();
      showModal(pass);
      copyPassword();
      break;

  }
}

class Password {
  generateSuperStrongPassword() {
    let password = '';
    let length = 12;
    for (let i = 0; i <= length; i++) {
      let randomNumber = Math.floor(Math.random() * superStrongChars.length);
      password += superStrongChars.substring(randomNumber, randomNumber + 1);
    }
    hiddenInput.value = password;
    return password;
  }
  generateStrongPassword() {
    let password = '';
    length = 8;
    for (let i = 0; i <= length; i++) {
      let randomNumber = Math.floor(Math.random() * strongChars.length);
      password += strongChars.substring(randomNumber, randomNumber + 1);
    }
    hiddenInput.value = password;
    return password;
  }

  generateWeakPassword() {
    length = 6;
    let password = '';
    for (let i = 0; i <= length; i++) {
      let randomNumber = Math.floor(Math.random() * weakChars.length);
      password += weakChars.substring(randomNumber, randomNumber + 1);
    }
    hiddenInput.value = password;
    return password;
  }

  generateFunnyPassword() {
    let randomNumber = Math.floor(Math.random() * funny.length);
    let password = funny[randomNumber];
    hiddenInput.value = password;
    return password;
  }

}
