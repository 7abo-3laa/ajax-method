let container = document.getElementById('container');

function getApi(link) {
     var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
            var items = this.responseText; 
            var result = JSON.parse(items);
            for (let i = 0; i < result.length; i++) {
                let card = document.createElement('div');
                card.className = 'test';
                card.innerHTML = `
                <img src="${result[i].url}" alt="images${i + 1}" style="width: 300px; height: 400px;"/>
                <h3>${result[i].title}</h3>
                `;
                container.appendChild(card);
            }
        }
    }
     xhttp.open('GET', link);
     xhttp.send();
}

getApi("https://jsonplaceholder.typicode.com/photos");