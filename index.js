// Write your code here!

let main = document.querySelector("main#main");
main.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Colin is the champion";
newHeader.className = "victory";
document.body.append(newHeader);
