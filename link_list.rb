class Node 
  attr_reader :value
  attr_accessor :next, :prev

  def initialize(value)
    @value = value
    @next = nil
    @prev = nil 
  end 

end 

class Double_Linked_List 
  def initialize
    @head = nil
    @tail = nil 
  end 

  def set_head(node)
    # Existing head with new head
    if @head
      old_head = @head
      @head = node
      node.next = old_head
      old_head.prev = @head
    else 
      @head = node 
    end 

  end 

  def set_tail(node)
    
    if @tail 
      old_tail = @tail
      @tail = node 
      node.next = old_tail
      old_tail.next = @tail 
    else 
      @tail = node
    end 

  end 



end 