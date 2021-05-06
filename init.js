const styles = 'user-select:none;min-width: 64px;text-align:center;line-height:48px;padding-left:16px;padding-right:16px;height: 48px;border-radius:24px;color:white;background-color:green;font-size:16px;position:fixed;right:48px;bottom:24px;box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);';

window.onload = (event) => {
  console.log('Chat loaded!');
  
  var node = document.createElement("div");
  node.onclick = function(){alert('wow')};
  node.style.cssText += styles;
  var textnode = document.createTextNode("HELP");        
  node.appendChild(textnode);                          
  document.body.appendChild(node);    
};
