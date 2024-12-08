const list_div = document.getElementById("list");

var number = 10;

function add_element(){
    const new_div = document.createElement("div");
    const new_value = document.createTextNode(number);
    number += 10;
    new_div.appendChild(new_value);
    list_div.appendChild(new_div);
}

function remove_element(last_idx){
    let last_node = list_div.lastElementChild;
    list_div.removeChild(last_node);
    number -= 10;
}

class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
    get_value(){
        return this.val;
    }
}

class linked_list{
    constructor(){
        this.root = null;
        this.size = 0;
    }
    add_node(){
        const new_node = new Node(number);
        if(this.root === null){
            this.root = new_node;
            add_element(new_node.number);
            this.size++;
            return;
        }else{
            let current = this.root;
            while(current.next != null){
                current = current.next;
            }
            current.next = new_node;
            add_element(new_node.number);
            this.size++;
        }
    }
    remove_node(){//This will pop off the end
        if(this.root === null){
            return;
        }
        if(this.root.next === null){
            return;
        }
        let second_last_node = this.root;
        while(second_last_node.next.next != null){
            second_last_node = second_last_node.next;
        }
        second_last_node.next = null;

        this.size--;
        remove_element(this.size); 

    }
    get_size(){
        return this.size;
    }
}

const ll = new linked_list();

function print_size(){
    document.getElementById("ll_print").innerHTML = ll.get_size();
}

let warned = false;
function check_bound(){
    if(ll.get_size() > 10){
        document.getElementById("warning").innerHTML = "Stack Overflow!";
        if(!warned){
            window.alert("Stack Overflow!");
            warned = true;
        }
    }else{
        document.getElementById("warning").innerHTML = "Stack Data Structure";
        warned = false;
    }
}
