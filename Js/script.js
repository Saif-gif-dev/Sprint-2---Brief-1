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
const cardContainer = document.querySelector(".card");

for (let i = 0; i < previousComplaints.length; i++) {
    const userComplaint = previousComplaints[i];
    const statiCard = document.createElement("div");
    statiCard.classList.add("onecard");

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
    userPriority.textContent = userComplaint.priority;
    userPriority.classList.add("rectwo");
    statiCard.appendChild(userPriority);


    const prioCatComplaint = document.createElement("div");
    prioCatComplaint.classList.add("likebuttons");
    prioCatComplaint.appendChild(userCategory);
    prioCatComplaint.appendChild(userPriority);
    statiCard.appendChild(prioCatComplaint);



    cardContainer.appendChild(statiCard);
}



/*==================================================================*/

const titreInput = document.getElementById("titreInput");
const descproblem = document.getElementById("descproblem");
const categoryProblem = document.getElementById("categoryProblem");
const priorityProblem = document.getElementById("priorityProblem");
const buttonAjouter = document.getElementById("buttonAjouter");
/*===================================================================*/



//recuperer value mn user//

buttonAjouter.addEventListener("click", function (event) {
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

    const priorityElement = document.createElement("span");
    priorityElement.classList.add("rectwo");
    priorityElement.textContent = priority;
    newCard.appendChild(priorityElement);

    //////////////////styling dial category o priority//////////////////////////////////

    const priocatContainer = document.createElement("div");
    priocatContainer.classList.add("likebuttons");
    priocatContainer.appendChild(categoryElement);
    priocatContainer.appendChild(priorityElement);
    newCard.appendChild(priocatContainer);

    titreInput.value="";
    descproblem.value="";
    categoryProblem.value="";
    priorityProblem.value="";

});