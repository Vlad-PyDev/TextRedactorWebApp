function enterApp(){
  window.location.href = "main.html";
}

function saveFile(){
  const filename = document.getElementById('filename').value;
  const content = document.getElementById('editor').value;
  eel.save_file(filename, content)(function(response){
    alert(response);
    // Обновляем блок с подсветкой синтаксиса
    document.getElementById('highlighted').textContent = content;
    hljs.highlightElement(document.getElementById('highlighted'));
  });
}