window.onload = function () {
  const container = document.querySelector(".main-container");
  const formData = localStorage.getItem("formData");

  const data = JSON.parse(formData);

  const card = document.createElement("div");

  card.classList.add("card");
  card.innerHTML = `
    <h1>
      Thank You <span class="fw-semibold">${data.firstname}</span> 
    </h1>
    <h4 class="fw-semibold">Here are your Details</h4>

    <h3> Your Email :<span>${data.email}</span></h3>
    <h3> Your Password :<span>${data.password}</span></h3>
    <h3> Your phone :<span>${data.phone}</span></h3>
    <h3> Your DateofBirth :<span>${data.DateofBirth}</span></h3>
    <h3> Your Department :<span>${data.Department}</span></h3>
  `;

  container.appendChild(card);
};
