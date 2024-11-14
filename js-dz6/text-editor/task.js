const editor = document.getElementById('editor');

function loadText() {
    const savedText = localStorage.getItem('editorContent');
    if (savedText) {
        editor.value = savedText;
    }
}

function saveText() {
    localStorage.setItem('editorContent', editor.value);
}

document.addEventListener('DOMContentLoaded', loadText);

editor.addEventListener('input', saveText);
