const styles = 'color:red;background-color:yellow';

window.onload = (event) => {
  console.log('wow');
  alert('wow');
  
  var node = document.createElement("span");
  node.style.cssText += styles;
  var textnode = document.createTextNode("Water");        
  node.appendChild(textnode);                          
  document.body.appendChild(node);    
};
