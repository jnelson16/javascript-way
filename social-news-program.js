class Link {
    constructor(title, url, author) {
        this.title = title;
        if ((url.startsWith("http://")) | (url.startsWith("https://"))) {
            this.url = url;
        }
        else {
            this.url = "http://" + url;
        };
        this.author = author;
    }
}

function showList(list) {
    if (list.length > 0) {
        let linkText = "";
        for (i=0; i < list.length; i++) {
            let link = list[i]
            linkText = linkText + `${i + 1}: ${link.title} (${link.url}). ` +
                                  `Author: ${link.author}\n`
        }
        alert(linkText)
    }
    else {
        alert("There are no links. Please add links by selecting option (2).")
    }
}

function addLink(list) {
    const title = prompt("Enter the title of the link:")
    const url = prompt("Enter the url of the link:")
    const author = prompt("Enter your name:")
    const link = new Link(title, url, author);
    list.push(link);
    return list;
}

function removeLink(list) {
    if (list.length > 0) {
        index = Number(prompt("Enter the number of the link to be removed:"))
        list.splice(index - 1, 1);
    }
    else {
        alert("There are no links. You must add links " +
              "before attempting to remove them.")
    }
    return list;
}

function main() {
    let list = [];
    let option = "";
    while (option != "0") {
        option = prompt("Choose an option:\n1: Show links\n" +
                        "2: Add a link\n3: Remove a link\n0: Quit")
        switch (option) {
            case "1":
                showList(list);
                break;
            case "2":
                list = addLink(list);
                showList(list);
                break;
            case "3":
                list = removeLink(list);
                showList(list);
                break;
            case "0":
                break;
            default:
                alert("Please enter a number between 0 and 3.")
        }
    }
}
