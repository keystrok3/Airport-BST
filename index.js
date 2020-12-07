"use strict"

const bst = require('./bst');

let scheduler = new bst.BST();


scheduler.add(newTime(17, 13), 180000);
scheduler.add(newTime(17, 18), 180000);
scheduler.add(newTime(17, 19), 180000);
scheduler.add(newTime(17, 26), 180000);
scheduler.add(newTime(17, 34), 180000);
scheduler.add(newTime(17, 39), 180000);
scheduler.add(newTime(17, 50), 180000);
scheduler.add(newTime(18, 8), 180000);
scheduler.add(newTime(18, 16), 180000);
scheduler.add(newTime(18, 17), 180000);
scheduler.add(newTime(19, 39), 180000);

console.log(scheduler.inorder_tree_walk());

if(new Date().getTime() > scheduler.findMax()) {
    scheduler.remove(scheduler.findMax());
}

console.log(scheduler.inorder_tree_walk());


function newTime(hour, minute) {
    let time = new Date()
    time.setHours(hour, minute, 0, 0);
    return time;
}