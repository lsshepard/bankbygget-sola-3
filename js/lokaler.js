
const propertieswrapper = document.getElementById("properties-wrapper")

fetch("js/lokaler.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.properties);
    for (let i=0; i<data.properties.length; i++) {
        property = data.properties[i];
        const wrapper = document.createElement("div");
        wrapper.className = "property-wrapper";

        const title = document.createElement("h2");
        title.textContent = property.title;

        const paragraph = document.createElement("p");
        paragraph.textContent = property.paragraph;

        const instruction_paragraph = document.createElement("p");
        instruction_paragraph.textContent = "Trykk på bildene under for å gjøre dem større."
        instruction_paragraph.className = "instruction-paragraph";

        const enlarged_image = document.createElement("img");
        enlarged_image.src = `media/properties/${property.folder}/1.jpg`;
        enlarged_image.alt = "selected property image";
        enlarged_image.className = "big-image"
        const images_wrapper = document.createElement("div");
        images_wrapper.className = "images-wrapper";
        for (let i=1; i<= property.imagesCount; i++) {
            const small_image = document.createElement("img");
            const source = `media/properties/${property.folder}/${i}.jpg`;
            small_image.src = source;
            small_image.alt = "image of property";
            small_image.className = "small-image"
            small_image.onclick = function() {enlarged_image.src = source};
            images_wrapper.appendChild(small_image);

        } 

        const row_wrapper = document.createElement("div");
        row_wrapper.className = "row-wrapper";

        const article = document.createElement("article");

        seperator = document.createElement("div");
        seperator.className = "line-seperator";

        article.appendChild(title);
        article.appendChild(paragraph);
        article.appendChild(instruction_paragraph);
        row_wrapper.appendChild(article);
        row_wrapper.appendChild(enlarged_image);
        wrapper.appendChild(row_wrapper);
        wrapper.appendChild(images_wrapper);
        propertieswrapper.appendChild(seperator);
        propertieswrapper.appendChild(wrapper);
    }
  });