
const input = document.getElementById('country-inp');


const loadData = () => {
    loaderfunc(true);
    const key = input.value;
    fetch(`https://restcountries.com/v3.1/name/${key}?fullText=true`)
        .then(response => response.json())
        .then(data => diaplayInfo(data[0]))
        .catch(() => {
            if (input.length === 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        })
}




const diaplayInfo = (arr) => {
    // console.log(arr.name.common);
    // console.log(arr.flags.png);
    // console.log(arr.capital[0]);
    // console.log(arr.currencies.BDT);
    // console.log(arr.currencies[Object.keys(arr.currencies)].name);

    // console.log(Object.keys(arr.currencies)[0]);

    console.log(arr.currencies[Object.keys(arr.currencies)[0]]);
    // console.log(Object.values(arr.languages).toString());
    // console.log(Object.keys(arr.currencies)[0]);

    const result = document.getElementById('result')
    result.innerHTML =
        `
    <img src="${arr.flags.png}"
        class="flag-img" alt="">
        <p><b>Capital:</b>  ${arr.capital[0]}</p>
        <p><b>Continent:</b>  ${arr.continents[0]}</p>
        <p><b>Population:</b> ${arr.population} </p>
        <p><b>Currency:</b>  ${(arr.currencies[Object.keys(arr.currencies)].name)} - ${Object.keys(arr.currencies)[0]}</p>
        <p><b>Common Language:</b>  ${Object.values(arr.languages).toString()}</p>`;


    loaderfunc(false);
}


document.getElementById('search-btn').addEventListener("click", loadData);



const loaderfunc = (status) => {
    const loader = document.getElementById('loader')
    if (status) {
        loader.style.display = "block";
    }
    else loader.style.display = "none"
}