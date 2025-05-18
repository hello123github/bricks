const newObject = document.getElementById("newObject");
const explorer = document.getElementById("explorer");

newObject.onclick = function () {
    explorer.insertAdjacentHTML('beforeend', '<p>default</p>');
};