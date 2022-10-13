class LLNode {
  next: LLNode | null = null;
  constructor(public data: number) {}
}

function mergeLists(head1: LLNode, head2: LLNode) {
  const curr1 = head1;
  const curr2 = head2;

  const merge = (h1: LLNode | null, h2: LLNode | null): LLNode | null => {
    if (!h1) return h2;
    if (!h2) return h1;

    let newNode: LLNode;

    if (h1.data > h2.data) {
      newNode = new LLNode(h2.data);
      newNode.next = merge(h1, h2.next);
    } else if (h2.data > h1.data) {
      newNode = new LLNode(h1.data);
      newNode.next = merge(h1.next, h2);
    } else {
      // values are equal, so add both and then merge the two nexted
      newNode = new LLNode(h1.data);
      const tempNode = new LLNode(h2.data);
      tempNode.next = merge(h1.next, h2.next);
      newNode.next = tempNode;
    }

    return newNode;
  };

  return merge(curr1, curr2);
}

const head1 = new LLNode(1);
head1.next = new LLNode(2);
head1.next.next = new LLNode(3);

const head2 = new LLNode(3);
head2.next = new LLNode(4);

mergeLists(head1, head2);
