let arr = [1, 7, 3, 1, 0, 20, 77];
let startIndexE1 = document.getElementById("startIndexInput");
let deletecountE1 = document.getElementById("deleteCountInput");
let itemToAddInputE1 = document.getElementById("itemToAddInput");
let updateArrayE1 = document.getElementById("updatedArray");
let spliceBtnE1 = document.getElementById("spliceBtn");

function convertArtoJson() {
    const stringfiedArr = JSON.stringify(arr);
    updateArrayE1.textContent = stringfiedArr;
}
convertArtoJson();

spliceBtnE1.onclick = function spliceArray() {
    let startIndex = startIndexE1.value;
    let deletecount = deletecountE1.value;
    let itemToAddInput = itemToAddInputE1.value;

    if (startIndex === "") {
        alert("Please enter start Index");
        return;
    }
    if (deletecount === "") {
        deletecount = 0;
    }
    if (itemToAddInput === "") {
        arr.splice(parseInt(startIndex), parseInt(deletecount));
    } else {
        arr.splice(parseInt(startIndex), parseInt(deletecount), itemToAddInput);
    }
    startIndexE1.value = "";
    deletecountE1.value = "";
    itemToAddInputE1.value = "";
    convertArtoJson();
};