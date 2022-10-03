class BSTNode<T> {
  value: T;
  left: BSTNode<T>;
  right: BSTNode<T>;
  freq: number;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.freq = 1;
  }
}

class BinarySearchTree<T> {
  root: BSTNode<T>;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const node = new BSTNode(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        current.freq++;
        return this;
      }
    }
  }

  find(value: T): BSTNode<T> {
    if (!this.root) return null;
    let current = this.root;
    let found = false;

    // eslint-disable-next-line no-constant-condition
    while (!found) {
      if (current.value === value) found = true;
      if (value > current.value) {
        if (!current.right) return this.root;
        current = current.right;
      }
      if (value < current.value) {
        if (!current.left) return this.root;
        current = current.left;
      }
    }

    if (!found) return this.root;
    return current;
  }

  private createQueueAndVisited() {
    const queue: BSTNode<T>[] = [];
    const visited: T[] = [];
    const node: BSTNode<T> = this.root;

    queue.push(node);

    return { queue, visited, node };
  }

  /**
   * goes step by step through the rows of
   * the tree to gather all the nodes and put them
   * in the array
   */
  bfs() {
    // eslint-disable-next-line prefer-const
    let { queue, visited, node } = this.createQueueAndVisited();

    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  /**
   * traverses nodes to end before traversing siblings
   * preOrder (at your local gamestop(r))
   *
   * add the current node to the list
   * explores all the way down the left, then explores the right as it moves back up
   *
   * works because all the left side functions are being added to the call stack first
   * the stack trace builds the tree from the bottom up
   * builds the tree diagonally from the left edge to the right vertex
   *
   * helper(10)
   * helper(5)
   * helper(2)
   * helper(6)
   * helper(14)
   * helper(13)
   * helper(16)
   */
  dfs_pre() {
    // eslint-disable-next-line prefer-const
    let { visited, node: rootNode } = this.createQueueAndVisited();

    function helper(node: BSTNode<T>) {
      visited.push(node.value);

      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }

    helper(rootNode);

    return visited;
  }

  /**
   * traverses nodes to end before traversing siblings
   * postOrder
   *
   * instead of "visiting" the node upon arrival, we're "visiting" it once we're
   * done traversing
   *
   * this gives the affect that we're traversing from a bottom up approach
   * instead of right edge to left vertex, it's bottom edge to top vertex
   * from a stack perspective it's the same as preOrder, but due to when we
   * "visit" the node, we get a different effect
   */
  dfs_post() {
    // eslint-disable-next-line prefer-const
    let { visited, node: rootNode } = this.createQueueAndVisited();

    function helper(node: BSTNode<T>) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      visited.push(node.value);
    }

    helper(rootNode);

    return visited;
  }

  /**
   * traverses nodes to end before traversing siblings
   * inOrder
   *
   * functionally the same as the two above, however this time
   * we "visit" the node after traversing the left side, but
   * before traversing the right
   *
   * again, stack trace is the same, just when we're recording
   * a "visit" is different here
   */
  dfs_in() {
    // eslint-disable-next-line prefer-const
    let { visited, node: rootNode } = this.createQueueAndVisited();

    function helper(node: BSTNode<T>) {
      if (node.left) helper(node.left);
      visited.push(node.value);
      if (node.right) helper(node.right);
    }

    helper(rootNode);

    console.log(visited);
    return visited;
  }
}
//     10
//   5     14
// 2  6  13  16

const tree = new BinarySearchTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(14);
tree.insert(2);
tree.insert(6);
tree.insert(13);
tree.insert(16);
tree.insert(10);

// console.log(tree.bfs());
// tree.bfs();
// tree.dfs_pre();
// tree.dfs_post();
// tree.dfs_in();
