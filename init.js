const styles = 'height: 48px;border-radius:24px;color:white;background-color:green;font-size:16px;position:fixed;right:48px;bottom:24px;box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);';

window.onload = (event) => {
  console.log('wow');
  alert('wow');
  
  var node = document.createElement("div");
  node.style.cssText += styles;
  var textnode = document.createTextNode("Help");        
  node.appendChild(textnode);                          
  document.body.appendChild(node);    
};
