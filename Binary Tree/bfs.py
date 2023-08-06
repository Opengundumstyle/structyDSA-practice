# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def breadth_first_values(root):
      if root == None:
        return []
      queue = [root]
      result = []
      while queue:
         curr = queue.pop(0)
         result.append(curr.val)
         if curr.left:
               queue.append(curr.left)
         if curr.right:
               queue.append(curr.right)
      return result