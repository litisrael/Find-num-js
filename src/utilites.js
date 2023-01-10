function getRandomNumber() {
    return Math.floor(Math.random() * 50000) + 1;
  }

 export const arrMessy= [];
  
 
 export const arrIncludesClassic = (arr, number) => {
    return arr.includes(number);
  };
  
  export const arrSorted = [...arrMessy].sort((a, b) => a - b)
  export  const searchLog = (arr, target) => {
  if (arr.length < 1) {
    return arr[0]
  }
  const mid = Math.floor(arr.length / 2)
  if (arr[mid] === target) {
    return true
  } else if (arr[mid] < target) {
    return searchLog(arr.slice(mid), target)
  } else {
    return searchLog(arr.slice(0, mid), target)
  }
}

class Node {
  constructor(value){
    this.value = value
    this.next = null
  }

}
class LinkedList{
  constructor(head= null){
    this.head = head
}
  addNode(data) {
  const newNode = new Node(data);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
}

find(data) {
  let currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value[1] === data) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

}
const ll = new LinkedList();

for (let i = 0; i < 50000; i++) {

  ll.addNode([i,getRandomNumber()]);
  arrMessy.push(getRandomNumber());
}

console.log(ll.head)

console.log(ll.find(3456))