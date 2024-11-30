const list_div = document.getElementById("list");


function add_element(value){
    const new_div = document.createElement("div");
    const new_value = document.createTextNode(value);
    new_div.appendChild(new_value);
    list_div.appendChild(new_div);
}
add_element("10");
add_element("11");
add_element("12");