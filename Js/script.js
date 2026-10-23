const previousComplaints = [
    {
        Titre: "Wi-fi instable",
        Description: "Le réseau se déconnecte régulièrement.",
        Category: "Réseau",
        priority: "Haute"

    },
    {
        Titre: "Installation d’un logiciel",
        Description: "Installer un logiciel sur le poste.",
        Category: "Logiciel",
        priority: "Normale"

    },
    {
        Titre: "Clavier défectueux",
        Description: "Certaines touches ne fonctionnent plus.",
        Category: "Matériel",
        priority: "Basse"

    }
]

/////////////////////////////////////////STATIC CARDS///////////////////////////////////////////////////
const cardContainer = document.querySelector(".card");

for (let i = 0; i < previousComplaints.length; i++) {


    const userComplaint = previousComplaints[i];
    const statiCard = document.createElement("div");
    statiCard.classList.add("onecard");

    const iconALign = document.createElement("div");
    iconALign.classList.add("iconsAligned");


    const iconStyle = document.createElement("div");
    iconStyle.classList.add("icons");
    if (userComplaint.Category == "Réseau") {
        const netIcon = document.createElement("i");
        netIcon.classList.add("fa-solid", "fa-signal");
        iconStyle.appendChild(netIcon);
    }
    else if (userComplaint.Category == "Logiciel") {
        const logicielIcon = document.createElement("i");
        logicielIcon.classList.add("fa-solid", "fa-download");
        iconStyle.appendChild(logicielIcon);

    }
    else if (userComplaint.Category == "Matériel") {
        const materialIcon = document.createElement("i");
        materialIcon.classList.add("fa-solid", "fa-keyboard");
        iconStyle.appendChild(materialIcon);
    }


    const compteurStat = document.createElement("div");
    compteurStat.textContent = "HD-00" + [i + 1];
    compteurStat.classList.add("code")
    statiCard.appendChild(compteurStat);
    iconALign.appendChild(compteurStat);

    iconALign.appendChild(iconStyle);
    iconALign.appendChild(compteurStat);
    statiCard.appendChild(iconALign);




    const userTitle = document.createElement("h3");
    userTitle.textContent = userComplaint.Titre;
    userTitle.classList.add("card-head");
    statiCard.appendChild(userTitle);


    const userDescription = document.createElement("p");
    userDescription.textContent = userComplaint.Description;
    userDescription.classList.add("sous-card");
    statiCard.appendChild(userDescription);


    const userCategory = document.createElement("span");
    userCategory.textContent = userComplaint.Category;
    userCategory.classList.add("rectone");
    statiCard.appendChild(userCategory);

    const userPriority = document.createElement("span");

    if (userComplaint.priority == "Haute") {
        userPriority.textContent = userComplaint.priority;
        userPriority.classList.add("rectwo");
        statiCard.appendChild(userPriority);
    }
    else if (userComplaint.priority == "Normale") {
        userPriority.textContent = userComplaint.priority;
        userPriority.classList.add("normale-color");
        statiCard.appendChild(userPriority);
    }
    else if (userComplaint.priority == "Basse") {
        userPriority.textContent = userComplaint.priority;
        userPriority.classList.add("Basse-color");
        statiCard.appendChild(userPriority);
    }




    const prioCatComplaint = document.createElement("div");
    prioCatComplaint.classList.add("likebuttons");
    prioCatComplaint.appendChild(userCategory);
    prioCatComplaint.appendChild(userPriority);
    statiCard.appendChild(prioCatComplaint);

    const separatorCard = document.createElement("hr");
    separatorCard.classList.add("separator");
    statiCard.appendChild(separatorCard);

    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");
    deleteButton.textContent = "Supprimer";
    deleteButton.classList.add("delete");
    deleteButton.prepend(deleteIcon);
    statiCard.appendChild(deleteButton);

    deleteButton.addEventListener("click", (deLete) => {
        if(confirm("are you sure ?") == true ){
            statiCard.remove(deLete);
        }
    });


    const modifyButton = document.createElement("button");
    const modifyIcon = document.createElement("i");
    modifyIcon.classList.add("fa-solid", "fa-pencil");
    modifyButton.textContent = "Modifier";
    modifyButton.classList.add("modify");
    modifyButton.prepend(modifyIcon);
    statiCard.appendChild(modifyButton);

    const editdeleteContainer = document.createElement("div");
    editdeleteContainer.classList.add("edits");
    editdeleteContainer.appendChild(deleteButton);
    editdeleteContainer.appendChild(modifyButton);
    statiCard.appendChild(editdeleteContainer);

    cardContainer.appendChild(statiCard);
}

/////////////////////////////////////////dynamic CARDS///////////////////////////////////////////////////


/*==================================================================*/

const titreInput = document.getElementById("titreInput");
const descproblem = document.getElementById("descproblem");
const categoryProblem = document.getElementById("categoryProblem");
const priorityProblem = document.getElementById("priorityProblem");
const buttonAjouter = document.getElementById("buttonAjouter");

categoryProblem.value = "";
priorityProblem.value = "";
/*===================================================================*/



//recuperer value mn user//

buttonAjouter.addEventListener("click", (event) => {
    event.preventDefault();
    const titre = titreInput.value;
    const description = descproblem.value;
    const category = categoryProblem.value;
    const priority = priorityProblem.value;
    ////////////////////////////////verification dial les champs ila kano khawyin////////////////////////////////////
    if (titre == "" || description == "" || category == "" || priority == "") {
        alert("fill in the field pls");
        return;
    }
    console.log(titreInput.value);
    console.log(descproblem.value);
    console.log(categoryProblem.value);
    console.log(priorityProblem.value);

    const newCard = document.createElement("div");
    newCard.classList.add("onecard");
    cardContainer.appendChild(newCard);



    ///////////////////////////////////////////////////////////////////////////////////////

    const iconALignElement = document.createElement("div");
    iconALignElement.classList.add("iconsAligned");


    const iconStyleElement = document.createElement("div");
    iconStyleElement.classList.add("icons");
    if (categoryProblem.value == "Réseau") {
        const netIconElement = document.createElement("i");
        netIconElement.classList.add("fa-solid", "fa-signal");
        iconStyleElement.appendChild(netIconElement);
    }
    else if (categoryProblem.value == "Logiciel") {
        const logicielIconElement = document.createElement("i");
        logicielIconElement.classList.add("fa-solid", "fa-download");
        iconStyleElement.appendChild(logicielIconElement);

    }
    else if (categoryProblem.value == "Matériel") {
        const materialIconElement = document.createElement("i");
        materialIconElement.classList.add("fa-solid", "fa-keyboard");
        iconStyleElement.appendChild(materialIconElement);
    }

    const compteurStatElement = document.createElement("div");
    compteurStatElement.textContent = "HD-00" + (cardContainer.children.length);
    compteurStatElement.classList.add("code");

    iconALignElement.appendChild(iconStyleElement);
    newCard.appendChild(iconALignElement);
    iconALignElement.appendChild(compteurStatElement);

    //////////////////////////////////////////////////////////////////////////////////////

    const titreElement = document.createElement("h3");
    titreElement.textContent = titre;
    titreElement.classList.add("card-head");
    newCard.appendChild(titreElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("sous-card");
    descriptionElement.textContent = description;
    newCard.appendChild(descriptionElement);

    const categoryElement = document.createElement("span");
    categoryElement.classList.add("rectone");
    categoryElement.textContent = category;
    newCard.appendChild(categoryElement);


    ///////////////////////////////////////////////////////////////////////////////////////
    const priorityElement = document.createElement("span");

    if (priorityProblem.value == "Haute") {
        priorityElement.classList.add("rectwo");
        priorityElement.textContent = priority;
        newCard.appendChild(priorityElement);
    }
    else if (priorityProblem.value == "Normale") {
        priorityElement.classList.add("normale-color");
        priorityElement.textContent = priority;
        newCard.appendChild(priorityElement);
    }
    else if (priorityProblem.value == "Basse") {
        priorityElement.classList.add("Basse-color");
        priorityElement.textContent = priority;
        newCard.appendChild(priorityElement);
    }
    ////////////////////////////////////////////////////////////////////////////////////
    //////////////////styling dial category o priority//////////////////////////////////

    const priocatContainer = document.createElement("div");
    priocatContainer.classList.add("likebuttons");
    priocatContainer.appendChild(categoryElement);
    priocatContainer.appendChild(priorityElement);
    newCard.appendChild(priocatContainer);

    //////////////////styling dial category o priority//////////////////////////////////

    const separatorElement = document.createElement("hr");
    separatorElement.classList.add("separator");
    newCard.appendChild(separatorElement);

    const deleteElement = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");
    deleteElement.textContent = "Supprimer";
    deleteElement.classList.add("delete");
    deleteElement.prepend(deleteIcon);
    newCard.appendChild(deleteElement);

    deleteElement.addEventListener("click", (deLete) => {
        if(confirm("are you sure ?") == true ){
            newCard.remove(deLete);
        }
    });

    const modifyElement = document.createElement("button");
    const modifyIcon = document.createElement("i");
    modifyIcon.classList.add("fa-solid", "fa-pencil");
    modifyElement.textContent = "Modifier";
    modifyElement.classList.add("modify");
    modifyElement.prepend(modifyIcon);
    newCard.appendChild(modifyElement);

    const editdeletestyle = document.createElement("div");
    editdeletestyle.classList.add("edits");
    editdeletestyle.appendChild(deleteElement);
    editdeletestyle.appendChild(modifyElement);
    newCard.appendChild(editdeletestyle);


    titreInput.value = "";
    descproblem.value = "";
    categoryProblem.value = "";
    priorityProblem.value = "";
});