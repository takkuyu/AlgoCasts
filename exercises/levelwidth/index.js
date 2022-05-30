// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, "s"];
  const counter = [0];

  while (arr.length >= 2) {
    // Take the first item
    const node = arr.shift();

    if (node === "s") {
      arr.push("s");
      counter.push(0);
      continue;
    }

    counter[counter.length - 1]++;
    arr.push(...node.children);
  }

  return counter;
}

module.exports = levelWidth;
