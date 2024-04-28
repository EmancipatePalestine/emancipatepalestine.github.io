// let myCard = {
//     title: "A title",
//     date: "01/31/2000",
//     description: "lorem ipsum",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/800px-Flag_of_Palestine.svg.png",
//     alt: "Palestine flag",
//     articleLinks: ["https://www.google.com"]
// }

function CreateCard(CardInfo) {
    let card = document.createElement("div");

    card.classList.add(...["card","card-compact","bg-base-300","shadow-xl"]);
    
    let figureElement = document.createElement("figure");
    let imageElement = document.createElement("img");
    imageElement.classList.add("size-full");
    if (CardInfo.image != null) {
        imageElement.setAttribute("src", CardInfo.image);
    }
    if (CardInfo.alt != null) {
        imageElement.setAttribute("alt", CardInfo.alt);
    }
    figureElement.appendChild(imageElement);
    
    card.appendChild(figureElement);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let titleElement = document.createElement("h2");
    titleElement.classList.add("card-title");
    let titleText = document.createTextNode("");
    if (CardInfo.title != null) {
        titleText.nodeValue = CardInfo.title;
    }
    titleElement.appendChild(titleText);
    cardBody.appendChild(titleElement);

    let dateElement = document.createElement("h2");
    let dateText = document.createTextNode("");
    if (CardInfo.date != null) {
        dateText.nodeValue = CardInfo.date;
    }
    dateElement.appendChild(dateText);
    cardBody.appendChild(dateElement);

    let hrElement = document.createElement("hr");
    hrElement.classList.add(...["h-px", "bg-gradient-to-r","from-transparent","via-neutral","to-transparent","border-0"])
    cardBody.appendChild(hrElement);

    let descriptionElement = document.createElement("p");
    let descriptionText = document.createTextNode("");
    if (CardInfo.description != null) {
        descriptionText.nodeValue = CardInfo.description;
    }
    descriptionElement.appendChild(descriptionText);
    cardBody.appendChild(descriptionElement);

    if (CardInfo.articleLinks != null){
        if (CardInfo.articleLinks.length == 1) {
            let buttonElement = document.createElement("a");
            buttonElement.classList.add(...["btn","btn-success","btn-block"]);
            buttonElement.setAttribute("href", CardInfo.articleLinks[0]);
            let buttonText = document.createTextNode("Go to article! 👉");
            buttonElement.appendChild(buttonText);
            cardBody.appendChild(buttonElement);
        }
        else {
            let dropdownElement = document.createElement("div");
            dropdownElement.classList.add(...["card-actions","justify-end","dropdown"]);

            let dropdownButtonElement = document.createElement("div");
            dropdownButtonElement.setAttribute("tabindex", "0");
            dropdownButtonElement.setAttribute("role", "button");
            dropdownButtonElement.classList.add("btn", "btn-success", "btn-block", "group");
            let dropdownButtonText = document.createTextNode("Go to articles! ");
            let dropdownTextArrowElement = document.createElement("div");
            dropdownTextArrowElement.classList.add("group-focus:rotate-90");
            let dropdownTextArrowText = document.createTextNode("👉");
            dropdownTextArrowElement.appendChild(dropdownTextArrowText);
            dropdownButtonElement.appendChild(dropdownButtonText);
            dropdownButtonElement.appendChild(dropdownTextArrowElement);
            dropdownElement.appendChild(dropdownButtonElement);

            let dropdownUnorderedElement = document.createElement("ul");
            dropdownUnorderedElement.setAttribute("tabindex", "0");
            dropdownUnorderedElement.classList.add( "dropdown-content", "z-[1]", "menu", "shadow", "bg-base-100", "rounded-box", "btn-block" );
            CardInfo.articleLinks.forEach(element => {
                let href;
                let name;
                if (typeof(element) == "object") {
                    href = element.link;
                    name = element.name;
                } 
                else if(typeof(element) == "string") {
                    href = element;
                    name = (new URL(element)).host
                }
                let dropdownLiElement = document.createElement("li");
                let dropdownLiAElement = document.createElement("a");
                dropdownLiAElement.setAttribute("href", href);
                let dropdownLiAText = document.createTextNode(name);
                dropdownLiAElement.appendChild(dropdownLiAText);
                dropdownLiElement.appendChild(dropdownLiAElement);
                dropdownUnorderedElement.appendChild(dropdownLiElement);
            });

            dropdownElement.appendChild(dropdownUnorderedElement);

            cardBody.appendChild(dropdownElement);
        }
    }
    card.appendChild(cardBody);
    
    document.getElementById("main").appendChild(card);
}
articles.forEach(element => {
    CreateCard(element);
});