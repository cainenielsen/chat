const styles = 'height: 48px; border-radius: 24px;color:white;background-color:green;font-size:16px;';

window.onload = (event) => {
  console.log('wow');
  alert('wow');
  
  var node = document.createElement("span");
  node.style.cssText += styles;
  var textnode = document.createTextNode("Help");        
  node.appendChild(textnode);                          
  document.body.appendChild(node);    
};
