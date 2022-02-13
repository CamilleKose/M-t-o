let changerDeVille = document.querySelector('#changer');
var baliseIcon = document.createElement('img');
document.querySelector('#icon_label').append(baliseIcon); 

changerDeVille.addEventListener('click', () => {
    ville = prompt('De quelle ville souhaitez-vous connaître la météo ?');
    recevoirTemperatureVille(ville);
});

function recevoirTemperatureVille(ville){

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville +
               '&appid=22280904758d437e11e6be706e948053&units=metric';


    let requete = new XMLHttpRequest();

    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200) {
            let reponse = requete.response;
            let temperature = reponse.main.temp;
            let ville = reponse.name;
            var icon = reponse["weather"][0]["id"];
            document.querySelector('#temperature_label').textContent = parseInt(temperature);
            document.querySelector('#ville').textContent = ville;
            
            if(icon == 800){
                baliseIcon.src = 'img/sun.svg';
            }else if((200 <= icon && icon <= 232) || (300 <= icon && icon <= 321) || (500 <= icon && icon <= 531)){
                baliseIcon.src = 'img/rain.svg';
            }else if(600 <= icon && icon <= 622){
                baliseIcon.src = 'img/snow.svg';
            }else if(icon == 801 || icon == 802){
                baliseIcon.src = 'img/cloudy.svg';
            }else{
                baliseIcon.src = 'img/clouds.svg';};
            }
        }
    }  
}
