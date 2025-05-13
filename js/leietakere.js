
const businesses_wrapper = document.getElementById("businesses-wrapper")

fetch("js/leietakere.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.businesses.length)

    let isBeige = true;

    for (let i=0; i<data.businesses.length; i++) {
        let business = data.businesses[i];
        const wrapper = document.createElement("div");
        if (isBeige) {
            wrapper.className = "business-wrapper-beige";
            isBeige = false;
        } else {
            wrapper.className = "business-wrapper";
            isBeige = true;
        }

        //create right side with logo
        const rs = document.createElement("div");
        rs.className = "right-side";
        if (business.logosrc != "") {
            const logo = document.createElement("img");
            logo.src = "./media/logos/".concat(business.logosrc);
            logo.alt = "business logo"
            logo.className = "business-logo";
            rs.appendChild(logo);
        }

        //create left side with title and contact info
        const ls = document.createElement("div");
        ls.className = "left-side";
        const article = document.createElement("article")
        const title =  document.createElement("h2");
        title.textContent = business.name;
        const paragraph = document.createElement("p");

        //concat paragraph
        let ptext = "Lokasjon: ".concat(business.location);
        if (business.website != "") {
            let web_display_name = business.website;
            if (business.website.length > 30) {
                web_display_name = business.website.slice(0, 27).concat("...");
            }
            const link = `<a href="${business.website}" target="_blank">${web_display_name}</a>`;
            ptext = ptext.concat("<br>Hjemmeside: ", link);        
        }
        if (business.info != "") {
            ptext = ptext.concat("<br>", business.info);
        }

        paragraph.innerHTML = ptext;

        article.appendChild(title);
        article.appendChild(paragraph);
        ls.appendChild(article);
        
        wrapper.append(ls)
        wrapper.append(rs);

        //create line seperator
        seperator = document.createElement("div");
        seperator.className = "line-seperator";

        businesses_wrapper.appendChild(wrapper);
        businesses_wrapper.appendChild(seperator);
    }
  });