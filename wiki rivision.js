let searchEle = document.getElementById("searchInput");
let conainer = document.getElementById("searchResults");
let spinnerEle = document.getElementById("spinner")

function createAndAppendResults(eachResult) {

    let {
        description,
        link,
        title
    } = eachResult;
    let searchContainer = document.createElement("div");
    let titleELe = document.createElement("a")
    titleELe.href = link
    titleELe.target = "_blank"
    titleELe.textContent = title
    conainer.appendChild(searchContainer);
    searchContainer.appendChild(titleELe)
    let brELe = document.createElement("br")
    searchContainer.appendChild(brELe);
    let linkELe = document.createElement("a")
    linkELe.href = link
    linkELe.target = "_blank"
    linkELe.textContent = link
    searchContainer.appendChild(linkELe)

    let descriopEle = document.createElement("p")
    descriopEle.textContent = description
    searchContainer.appendChild(descriopEle)


}

function displayResults(search_results) {
    spinnerEle.classList.add("d-none")
    for (let eachResult of search_results)
        createAndAppendResults(eachResult)
}

function searchwikipedia(event) {

    if (event.key === "Enter") {
        spinnerEle.classList.remove("d-none")
        conainer.textContent = ""
        let userInputValue = searchEle.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + userInputValue;

        let options = {
            method: "GET"

        }

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let {
                    search_results
                } = data;
                displayResults(search_results)

            });
    }
}

searchEle.addEventListener("keydown", searchwikipedia);