# @macil/pathfinding [![JSR](https://jsr.io/badges/@macil/pathfinding)](https://jsr.io/@macil/pathfinding)

This library implements several pathfinding and graph algorithms. This library
works with Typescript and Javascript in both Deno and Node.

Where possible, this library does not need an entire graph to be provided to it
ahead of time. Many functions allow nodes and edges to be provided by a
successor function executed for each node encountered, meaning that graphs are
lazily initialized which allows for procedural and infinite graphs to be used.

## Algorithms

### Directed graphs

- [A*](https://en.wikipedia.org/wiki/A*_search_algorithm): find the shortest
  path in a weighted graph using an heuristic to guide the process.
- [Dijkstra](https://en.wikipedia.org/wiki/Dijkstra's_algorithm): find the
  shortest path in a weighted graph.

### Undirected graphs

- [connected components](https://en.wikipedia.org/wiki/Connected_component_(graph_theory)):
  find disjoint connected sets of vertices.

## Related Projects

This project was ported from the Rust
[pathfinding](https://github.com/samueltardieu/pathfinding) library.

## License

This code is released under a dual Apache 2.0 / MIT free software license.

## Contributing

You are welcome to contribute by opening
[issues](https://github.com/Macil/pathfinding/issues) or submitting
[pull requests](https://github.com/Macil/pathfinding/pulls).

Implementations of additional similar graph algorithms, especially those in the
Rust [pathfinding](https://github.com/samueltardieu/pathfinding) library, are
welcome.
