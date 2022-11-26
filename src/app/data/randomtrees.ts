import { TreeNode } from '../models/treenode';
export const randomTrees: TreeNode[] = [ {
  id: 1,
  name: 'Food',
  children: [
    { id: 2, name: 'Soups', parentId: 1,
      children: [
        { id: 3, name: 'Sinigang', parentId: 2 },
        { id: 4, name: 'Bulalo', parentId: 2 },
        { id: 5, name: 'Chicken Tinola', parentId: 2 }
      ]
    },
    { id: 6, name: 'Main Courses', parentId: 1,
      children: [
        { id: 7, name: 'Bistek Tagalog', parentId: 6 },
        { id: 8, name: 'Adobo', parentId: 6  },
        { id: 9, name: 'Pancit', parentId: 6  }
      ]
    }
  ]
},
{ id: 10, name: 'Games',
  children: [
    { id: 11, name: 'Physical', parentId: 10,
      children: [
        { id: 12, name: 'Agawan Base', parentId: 11 },
        { id: 13, name: 'Siyato', parentId: 11 },
        { id: 14, name: '10-20', parentId: 11 }
      ]
    },
    { id: 15, name: 'Sit Down', parentId: 10,
      children: [
        { id: 16, name: 'Sungka', parentId: 15 },
        { id: 17, name: 'Jack Stone', parentId: 15 },
        { id: 18, name: 'Mah Jong', parentId: 15 }
      ]
    }
  ]
}]
