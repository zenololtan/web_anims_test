class NodeData {
	constructor(key, pos) {
		this.key = key; // key is als image, maybe put a deff on it
		this.pos = pos; // x and y for transform asigned with pos number
	}
}

class ListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
}

let parentElement = document.querySelector(".interface_container");
let list = new LinkedList();

document.addEventListener('click', () =>{
	// create new node
	var node = createNode();

	//add node to front of list
	if (list.head) {
		node.next = list.head;
	}
	list.head = node;
	// move nodes
	updateNodes(list);

	// delete last node if needed
	// add new node
})

function updateNodes(listnode) {
	let node = listnode.head;

	while (node) {
		node.data.pos += 1;
		// console.log(node.data.pos);
		node = node.next;
	}
}

function createNode() {
	let myElement = document.createElement("div");
	var data;
	var img = new Image();
	img.src = "https://cdn2.vectorstock.com/i/1000x1000/84/76/empty-keyboard-key-vector-1838476.jpg";

	myElement.classList.add("key");
	myElement.appendChild(img);

	parentElement.appendChild(myElement);
	data = new NodeData(myElement, 0);
	return new ListNode(data);
}