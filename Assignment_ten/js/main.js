var quotes = [
    { quote : "Restment is Like Drinking Poison and waiting for your enemies to die" , author:  "Nelson Mandela" },
    {  quote : "Do Not Take Life too Seriously You Will Not Get Out A live" , author:"Elbert Hubbard" } ,
    {  quote : "You Miss 100% Of The Shots You Do Not Take" , author:"Wayne Gretzy"},
    {  quote : "It`s NOT What happens to you , but how you reat to it that matters" , author:"Epictetus"},
    {  quote : "The best revenge is massive Success" , author:"Frank Sinatra"}
];

var h2Container = document.getElementById("quoteCont");
var previousRandom = null;
function displayQuote() {    
    h2Container.innerHTML = "";

    do {
        var randome = Math.random() * quotes.length;  
        console.log(previousRandom)
    } while (Math.floor(randome) == previousRandom);     
    previousRandom = Math.floor(randome);

    setTimeout(function () {
        h2Container.innerHTML = 
        `
        <h2 class="d-flex flex-column justify-content-center gap-3  ">
        <span>${quotes[Math.floor(randome)].quote}</span>
        <span>--${quotes[Math.floor(randome)].author}</span>
        </h2>
        
        `;
    } , 800)
  
}
