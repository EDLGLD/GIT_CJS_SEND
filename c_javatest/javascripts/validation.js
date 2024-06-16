function emailValidation(){
  const email = document.getElementById("form");
  form.addEventListener(`input`,function(e) {
    const alertElement = document.getElementsByClassName("alert")[0];
    if(form.email.value !== form.email_confirm.value){
      e.preventDefault();
      
      const incollectEmail = document.getElementById("email_confirm");
      incollectEmail.classList.add("background_red");

      if(!alertElement){
      const newAlertElement  = document.createElement("div");
      newAlertElement .innerText = "Emailが一致しません";
      newAlertElement .classList.add("alert");

      const target = document.getElementsByClassName("contact_content")[0];
      target.parentNode.insertBefore(newAlertElement,target);
      }
    }else{
      const incollectEmail = document.getElementById("email_confirm");
      incollectEmail.classList.remove("background_red");
      if(alertElement){
        alertElement.parentNode.removeChild(alertElement);
      }
    }
  });
};


window.onload = function(){
  emailValidation();
}


