function add_child() {
    //tạo phần tử p
    var p = document.createElement("p");
    //tạo phần tử text
    var node = document.createTextNode("Some new text");
    //gắn node vào p
    p.appendChild(node);
    //Thay đổi một số thuộc tính của p
    p.appendChild(node);
    p.style.backgroundColor = 'red';
    p.style.padding = "10px";
    p.style.color = "white";
    var div = document.getElementById("demo");
    //gắn p vào div
    div.appendChild(p);
}

function del_child() {
    var child = document.getElementById("p1");
    child.parentNode.removeChild(child);
}