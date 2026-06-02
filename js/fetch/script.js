const apiKey = "a8965ce1407ff7852333f4cdbea89b2b";
const main = document.getElementById("main");
const output = document.getElementById("output");

const fetchData = async (cityname)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`)
    const data = await response.json();
    console.log(data)
    output.innerHTML = `
        <h1>${data.main.temp}</h1>
    `
}


const fetchCity =(e) => {
    e.preventDefault();
    const cityname = document.getElementById("cityname").value.trim();
    console.log(cityname)
    fetchData(cityname)

}
main.addEventListener("submit", fetchCity)

