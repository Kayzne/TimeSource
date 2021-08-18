// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

// let event = document.getElementById("search").value();
let title;
let description;
let url;
let image;

function execute() {
    let event = document.getElementById("search").value;
    let category = event;
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + event + "&page=0&sort=oldest&api-key=LKpLT018b4FWBiISRbWaw6hfGx0SbmgA";
    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
    };
    fetch(url, options).then(
      response => {
        console.log(response);
          return response.json();
        
      }) 
         
      .then(data => {
        urlContent = data.response.docs[0].web_url;
        imageContent = data.response.docs[0].img;
        descriptionContent = data.response.docs[0].abstract;
        titleContent = data.response.docs[0].headline.print_headline;

        var imageA = document.createElement("img");
        var titleA = document.createElement("h3");
        var descriptionA = document.createElement("p");

        var div = document.getElementById("A1");
        var div2 = document.getElementById("A2");
        var div3 = document.getElementById("A3");

        imageA.src = imageContent;
        titleA.innerHTML = titleContent;
        descriptionA.innerHTML = descriptionContent;

        document.div.getElementById("title").appendChild(titleA);
        document.div.getElementById("card-description").appendChild(descriptionA);

        document.div2.getElementById("title").appendChild(titleA);
        document.div2.getElementById("card-description").appendChild(descriptionA);

        document.div3.getElementById("title").appendChild(titleA);
        document.div3.getElementById("card-description").appendChild(descriptionA);
      })
      .catch(err => {
        console.error(err);
      });
  }

  //Youtube fetch

//   fetch("https://youtube66.p.rapidapi.com/", {
// 	method: POST,
// 	headers: {
// 		"x-rapidapi-key": "AIzaSyB8qCK9By8QcyUKzBV7NPVSJXJ6AXzpbrw",
// 		"x-rapidapi-host": "youtube66.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response.snippet);
// })
// .catch(err => {
// 	console.error(err);
// });
  
// // Url Open

function open() {
   window.open(url);
 }




