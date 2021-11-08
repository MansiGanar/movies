const headers = new Headers({
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzYzMDE5NjUsImV4cCI6MTYzNzUxMTU2NX0.eTqiwNwcNkFvVdXgdtFUwXdX_uJs1APAP89Ni_4F0R0",
});

const fetchRomance = () => {
  fetch("https://striveschool-api.herokuapp.com/api/movies/romance", {
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      // const movies = data
      let action = document.getElementById("romance");
      romance.innerHTML = "";
      //   console.log(data);
      data.map((m) => {
        console.log(m);
        let innerHtml = `
        <div class="card row" style="width: 18rem;">
        <img src=${m.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${m.name}</h5>
         
        </div>
      </div>
`;
        romance.innerHTML += innerHtml;
      });
    })
    .catch(error);
};

const fetchThriller = () => {
  fetch("https://striveschool-api.herokuapp.com/api/movies/thriller", {
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      // const movies = data
      let thriller = document.getElementById("thriller");
      thriller.innerHTML = "";
      console.log(data);
      data.map((m) => {
        let innerHtml = `
        <div class="card row" style="width: 18rem;">
        <img src=${m.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${m.name}</h5>
         
        </div>
      </div>
`;
        thriller.innerHTML += innerHtml;
      });
    })
    .catch(error);
};

const fetchAction = () => {
  try {
    fetch("https://striveschool-api.herokuapp.com/api/movies/action", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        // const movies = data
        let action = document.getElementById("action");
        action.innerHTML = "";
        console.log(data);
        data.map((m) => {
          console.log(m);
          let innerHtml = `
        <div class="card row" style="width: 18rem;">
        <img src=${m.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${m.name}</h5>
         
        </div>
      </div>
`;
          action.innerHTML += innerHtml;
        });
      });
  } catch (error) {
    console.log(error);
  }
};
