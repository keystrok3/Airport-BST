"use strict"

// Binary Search Tree
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data, kvalue) {
        if(this.root === null) {
            this.root = new TreeNode(data);
        } else {
            const recurse = function(node) {
                if(data < node.data) {
                    //check that diff btn current node and data is greater than or equal to kvalue
                    if(Math.abs(node.data - data) < kvalue) {
                        return null
                    };

                    if(node.left === null) {
                        node.left = new TreeNode(data);
                    } else {
                        return recurse(node.left);
                    }
                } else if(data > node.data) {
                    //check that diff btn current node and data is greater than or equal to kvalue
                    if(Math.abs(node.data - data) < kvalue) {
                        return null
                    };

                    if(node.right === null) {
                        node.right = new TreeNode(data);
                    } else {
                        return recurse(node.right);
                    }
                } else {
                    return;
                }
            };
            return recurse(this.root);
        }
    }

    findMax() {
        let temp = this.root;
        while(temp.right !== null) {
            temp = temp.right;
        }
        return temp.data;
    }

    inorder_tree_walk() {
        let arr = [];
        const walk = function(node) {
            if(node !== null) {
                walk(node.left);
                arr.push(new Date(node.data).toTimeString());
                walk(node.right);
            }
        };
        walk(this.root);
        return arr;
    }

    postorder_tree_walk() {
        let arr = [];
        const walk = function(node) {
            if(node !== null) {
                walk(node.left);
                walk(node.right);
                arr.push(node.data);
            }
        };
        walk(this.root);
        return arr;
    }

    remove(data) {
        if(this.root === null) {
            return null;
        } else {
            const recurse = function(node, data) {
                if(data === node.data) {
                    if(node.left === null && node.right === null) {
                        return null;
                    } 
                    // Node has no left child
                    if(node.left === null) {
                        return node.right;
                    }

                    // node has no right child
                    if(node.right == null) {
                        return node.left;
                    }

                    // Node has two children
                    let tempnode = node.right;  //set the the right node to a temporary variable

                    while(tempnode.left !== null) { //and move to the left-most node of that right node
                        tempnode = tempnode.left;
                    }

                    node.data = tempnode.data;  //set that left-most node's data to the 'removed' nodes data (replace)
                    node.right = recurse(node.right, tempnode.data);    //call recurse again to set up the tree appropriately
                    return node;
                } else if(data < node.data) {
                    node.left = recurse(node.left, data);
                    return node;
                } else {
                    node.right = recurse(node.right, data);
                    return node;
                }
            };
            this.root = recurse(this.root, data);
        }
    }
}

module.exports = { BST: BST };
