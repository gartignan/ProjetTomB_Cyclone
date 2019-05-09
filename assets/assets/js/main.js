
loadData("https://private-d47a2-fenidorn.apiary-mock.com/questions", load);
var data;
function loadData(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            data = JSON.parse(xhttp.responseText);
            callback(copie(data));

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

//Tableau de Topics // Div HTML
function loadTopic(topics, cpt) {
    console.log(topics);
    document.getElementById("topics").innerHTML += '<div id="topics' + cpt + '" class="row"><div id = "colg' + cpt + '" class="col-lg-4 mt-5" ></div ><div id="colm' + cpt + '" class="col-lg-4 mt-5"></div><div id="cold' + cpt + '" class="col-lg-4 mt-5"></div></div >';
    for (let i = 0; i < topics.length; i++) {
        let topic = topics[i];

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

        var parent = "";
        if (i < 3) {
            parent = "colg" + cpt;
        } else if (i < 5) {
            parent = "colm" + cpt;
        } else if (i < 8) {
            parent = "cold" + cpt;
        }
        document.getElementById(parent).appendChild(viget);
    }

}
var numb = 0;
var pa = 0;
function load(storage) {


    var taille = storage.topics.list.length;
    var nbElement = (taille / ((numb + 1) * 8));


    var i = 0;
    var cpt = 0;
    console.log(pa);
    while (i < taille && cpt <= numb) {
        loadTopic(storage.topics.list.splice(pa, pa + 8), cpt);
        i += 8;
        cpt++;
    }

    // Genere pages


    var result = Math.floor(taille / ((numb + 1) * 8));
    if (result != nbElement) {
        result += 1;
    }

    document.getElementById('list').innerHTML = "";
    for (var w = 0; w < result; w++) {

        document.getElementById('list').innerHTML += ' <li><a href ="#topics" onclick="page(' + w + ')">' + format(w + 1) + '</a></li >';
    }
}

function format(i) {
    if (i < 10) return "0" + i;
    else return i;
}

function copie(objet) {
    return JSON.parse(JSON.stringify(objet));
}

function page(numPage) {
    pa = numPage * ((numb + 1) * 8);
    document.getElementById("topics").innerHTML = '<div class="row"><div id="topicstitle" class="col-md-12 mt-5"><h2>Hot Topics</h2></div></div>';
    load(copie(data));
}


function changeNumb() {
    numb += 1;
    document.getElementById("topics").innerHTML = '<div class="row"><div id="topicstitle" class="col-md-12 mt-5"><h2>Hot Topics</h2></div></div>';
    load(copie(data));
}

