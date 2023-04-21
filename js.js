const container = document.querySelector(".container");
const all = document.querySelector(".all");
function c() {
    event.preventDefault();
    let a = all.innerHTML = "<h2>Loading...</h2>"
    console.log(a);
    document.querySelector("h1").style.display = "none";

    const input = document.querySelector("input").value;
    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/name/${input}?fullText=true`);

    request.send();
    request.addEventListener('load', function () {
        let data = JSON.parse(this.responseText);

        console.log(data)
        let error = (data) => {
            if (this.status === 404) {
                all.innerHTML = '<h2> Country not found</h2>';
                return;
            }

            all.innerHTML = `<img src="${data.flags.png}"> <div class="text">
    <p>Name:${data.name.common}</p>
    <p>Capital:${data.capital}</p>
    <p>Area:${data.area}KM²</p>
    <p>Continents:${data.continents}</p>
    <p>Population:${data.population}</p>
  </div>`;
        }
        error(data[0]);
    });

}
