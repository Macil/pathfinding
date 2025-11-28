export function reversePath<Entry, Key>(
  encounteredNodes: ReadonlyMap<Key, Entry>,
  extractParentNodeKey: (entry: Entry) => Key | undefined,
  startNodeKey: Key,
): Key[] {
  const list: Key[] = [];
  let nodeKey: Key | undefined = startNodeKey;
  while (nodeKey) {
    const entry = encounteredNodes.get(nodeKey);
    if (!entry) {
      break;
    }
    list.push(nodeKey);
    nodeKey = extractParentNodeKey(entry);
  }
  list.reverse();
  return list;
}
