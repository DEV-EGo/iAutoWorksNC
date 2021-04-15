// formspree JS boilerplate set up
// added iD of "my-form" onto html next to "post"

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();

      var status = document.getElementById("status");
      var data = new FormData(event.target);

      fetch(event.target.action, {

        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }

      }).then(response => {
        form.reset();
        status.classList.add("sucess");
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem submitting your form"
      });

    }
    form.addEventListener("submit", handleSubmit)