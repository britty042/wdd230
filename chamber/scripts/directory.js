const baseURL = "https://britty042.github.io/wdd230/";
const linksURL = "https://britty042.github.io/wdd230/chamber/data/members.json";

async function getLinkData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    sortMembers(data.companies);
}

const sortMembers = (companies) => {
    const goldSection = document.querySelector(".gold-display");
    const silverSection = document.querySelector(".silver-display");
    const bronzeSection = document.querySelector(".bronze-display");
    goldSection.innerHTML = "";
    silverSection.innerHTML = "";
    bronzeSection.innerHTML = "";


    companies.forEach ((company) => {
     //if the membership is Gold, then it needs to fit under the gold-display class....and
     //so on for each class.
        const memberDiv = document.createElement("div")
        memberDiv.classList.add("company-card"); 
        memberDiv.classList.add("member");

        memberDiv.innerHTML = `<img src="${company.img}" alt="${company.name} Logo"><br>
        <strong>${company.name}</strong><br>
        <p>${company.address}</p>
        <p>${company.phoneNumber}</p>
        <a href="${company.webURL}" target="_blank">${company.webURL}</a><br>
            `;

        

        if (company.membership === "Gold") {
            goldSection.appendChild(memberDiv);
        }

        else if (company.membership === "Silver") {
            silverSection.appendChild(memberDiv);
        }
        
        else {
            bronzeSection.appendChild(memberDiv);
        }
    });
};

getLinkData();
      
      
      
      
      
     