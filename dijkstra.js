const graph = {
  start: {
      a: 6,
      b: 2
  },
  a: {
      finish: 1
  },
  b: {
      a: 3,
      finish: 5
  },
  finish: null
};

const costs = {
    a: 6,
    b: 2,
    finish: Infinity
};

const parents = {
    a: 'start',
    b: 'start',
    finish: null
};


const processed = [];
let node = findClosestNode(costs);

function findClosestNode(nodes) {
    const result = Object.keys(nodes).reduce((acc, curr) => {
        if (!processed.includes(curr)) {
            if (acc.key === null) {
                acc.key = curr;
                acc.value = nodes[curr];
            } else if (acc.value > nodes[curr]) {
                acc.value = nodes[curr];
                acc.key = curr;
            }
        }

        return acc;
    }, { key: null, value: null});

    return result.key;
}

while (node) {
    const cost = costs[node];
    const neighbours = graph[node];

    for (const neighbour in neighbours) {
        const newCost = cost + neighbours[neighbour];

        if (costs[neighbour] > newCost) {
            costs[neighbour] = newCost;
            parents[neighbour] = node;
        }
    }

    processed.push(node);
    node = findClosestNode(costs);
}

console.log(costs, parents, processed);
