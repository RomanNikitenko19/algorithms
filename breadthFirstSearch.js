//поиск в ширину в графе

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']
console.log(graph);

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while (queue.length) {
    const current = queue.shift();

    if (!graph[current]) {
      graph[current] = []
    }

    if (graph[current].includes(end)) {
      return true;

    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
console.log(breadthSearch(graph, "a", "x"));
console.log("______________");