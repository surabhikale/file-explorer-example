const useTraverseTree = () => {
    // Add a file or folder in tree
    // Can be optimised using Dynamic Programming
    const insertNode = function (tree, folderId, item, isFolder) {
      if (tree.id === folderId && tree.isFolder) {
        tree.items.unshift({
          id:new Date().getTime(),
          name: item,
          isFolder: isFolder,
          items: []
        });
  
        return tree;
      }
  
      let latestNode = [];
      latestNode = tree.items.map((ob) => {
        return insertNode(ob, folderId, item, isFolder);
      });
  
      return { ...tree, items: latestNode };
    };
  
    const deleteNode = function (tree, folderId, item, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
          tree.items.shift({
            id:new Date().getTime(),
            name: item,
            isFolder: isFolder,
            items: []
          });
    
          return tree;
        }
          let latestNode = [];
          latestNode = tree.items.map((ob) => {
            return insertNode(ob, folderId, item, isFolder);
          });
      
          return { ...tree, items: latestNode };
        };
  
    const renameNode = () => {}; 
  
    return { insertNode, deleteNode, renameNode };
  };
  
  export default useTraverseTree;