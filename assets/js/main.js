
loadData("https://private-d47a2-fenidorn.apiary-mock.com/questions", load);

function loadData(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            callback(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function load(storage) {
    console.log(storage);

    for (let i = 0; i < storage.topics.list.length; i++) {
        let topic = storage.topics.list[i];

        var viget = document.createElement("div");
        viget.classList.add("viget");

        {
            var imgres = document.createElement("img");
            imgres.src = topic.img;
            imgres.setAttribute("alt", "");
            imgres.classList.add("imgres");
            viget.appendChild(imgres);
        }

        {
            var theme = document.createElement("div");
            theme.setAttribute("class", "themeandpC mt-3 d-flex justify-content-between");
            viget.appendChild(theme);

            {
                var categorie = document.createElement("p");
                categorie.innerHTML = topic.categorie;
                categorie.setAttribute("class", "themeandpC mt-3 d-flex justify-content-between");
                theme.appendChild(categorie);
            }

            {
                var icons = document.createElement("div");
                icons.setAttribute("class", "iconstopicsC d-flex");
                theme.appendChild(icons);

                {
                    var comment = document.createElement("a");
                    comment.href = "#";
                    comment.setAttribute("class", "iconstopicsC d-flex");
                    icons.appendChild(comment);

                    {
                        var img = document.createElement("div");
                        img.setAttribute("class", "bcomment2");
                        comment.appendChild(img);
                    }
                }

                {
                    var share = document.createElement("a");
                    share.href = "#";
                    share.setAttribute("class", "iconstopicsC d-flex");
                    icons.appendChild(share);

                    {
                        var img = document.createElement("div");
                        img.setAttribute("class", "bshare2");
                        share.appendChild(img);
                    }
                }
            }
            {
                var titleands = document.createElement("div");
                titleands.setAttribute("class", "titleands mt-2");
                viget.appendChild(titleands);

                {
                    var titre = document.createElement("h3");
                    titre.innerHTML = topic.titre;
                    titleands.appendChild(titre);
                }
                {
                    var description = document.createElement("p");
                    description.innerHTML = topic.description;
                    titleands.appendChild(description);
                }
                {
                    var auteur = document.createElement("p");
                    auteur.innerHTML = topic.auteur;
                    titleands.appendChild(auteur);
                }
            }
        }

        let parent = "";
        if (i < 3) {
            parent = "colg";
        } else if (i < 5) {
            parent = "colm";
        } else if (i < 8) {
            parent = "cold";
        }
        document.getElementById(parent).appendChild(viget);
    }
}


function change(storage) {

}