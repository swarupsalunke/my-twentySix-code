function hasCycle(V, edges) {

  const graph = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(V).fill(false);

  function dfs(node, parent) {
    visited[node] = true;
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true; 
      }
    }
    return false;
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (dfs(i, -1)) return true;
    }
  }
  return false;
}


const V = 5;
const edges = [[0,1],[1,2],[2,3],[3,4],[4,0]];
console.log(hasCycle(V, edges)); 
