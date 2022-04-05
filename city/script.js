const data = {
  mainTitle: "Amazing Travel Destinations",
  cardContents: [
    {
      name: "Kerala",
      imageLink:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "London",
      imageLink:
        "https://images.unsplash.com/photo-1606757898266-5dcb04600340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9uZG9uJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Port Louis",
      imageLink:
        "https://images.unsplash.com/photo-1581953636842-74649fd3e004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Las Vegas",
      imageLink:
        "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
    },
    {
      name: "Tokyo",
      imageLink:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Zurich",
      imageLink:
        "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80",
    },
  ],
  userData: { name: "Crio.Do", tagLine: "Baby steps into the world of web!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
