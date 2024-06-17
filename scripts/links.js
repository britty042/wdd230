const baseURL = "https://britty042.github.io/wdd230/";
const linksURL = "https://britty042.github.io/wdd230/data/links.json";

async function getLinkData() {
    const response = await fetch(linksURL);
    const data= await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    const linksList = document.querySelector(".links-box");

    weeks.forEach ((week) => {
        let currentItem = document.createElement("li");
        currentItem.textContent = `Week ${week.lesson}`;

        let list = document.createElement("ul");

        week.links.forEach((link) => {
            let item = document.createElement("li");
            let linkAnchor = document.createElement("a");

            linkAnchor.href = link.url;
            linkAnchor.textContent = link.title;

            item.appendChild(linkAnchor);
            list.appendChild(item);
        })

        currentItem.appendChild(list);
        linksList.appendChild(currentItem);

    })
    
}

getLinkData();