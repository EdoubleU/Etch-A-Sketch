const myGrid = document.querySelector("#container");

let firstDiv = document.createElement("div");

for(let i = 0; i < 256; i++){
    const square2 = document.createElement("div");
    square2.style.backgroundColor = "";
    square2.style.minHeight = "40px";
    square2.style.minWidth = "40px";
    square2.className = "square";
    square2.addEventListener("mouseover", () => {
        square2.style.backgroundColor = "black";
    });
    firstDiv.appendChild(square2);
}
myGrid.appendChild(firstDiv);


const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let numberSelected = prompt("How many squares do you want? (max 100)");
    let squareNumber = parseInt(numberSelected);
    if (squareNumber > 100){
        alert("Please, choose grid size (up to 100).");
    } else if(isNaN(squareNumber)){
        alert("Input must be a number");
    } else{
        myGrid.removeChild(firstDiv);
        firstDiv = document.createElement("div");
        for(let i = 0; i < (squareNumber*squareNumber); i++){
            const square3 = document.createElement("div");
            square3.style.backgroundColor = "";
            let squareHeight = 640/squareNumber;
            square3.style.height = `${squareHeight}px`;
            console.log(square3.style.height = 640/40);
            square3.style.width = `${squareHeight}px`;
            square3.className = "square";
            square3.addEventListener("mouseover", () => {
                square3.style.backgroundColor = "black";
            });
            firstDiv.appendChild(square3);
        }
        myGrid.appendChild(firstDiv);
    }
});