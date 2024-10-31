const elementProgress = document.getElementById("progress");
const url = "https://students.netoservices.ru/nestjs-backend/upload";
const sendBtn = document.getElementById("send");
const elementFile = document.getElementById("file");
const fileNameLabel = document.querySelector(".input__wrapper-desc");

function resetFileInput() {
    elementProgress.value = 0;
    elementFile.value = "";
    fileNameLabel.textContent = "Имя файла...";
}

function uploadFile(file) {
    let xhr = new XMLHttpRequest();

    const formData = new FormData();
    formData.append("file", file);

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            elementProgress.value = event.loaded / event.total;
        }
    };

    xhr.onload = function () {
        if (xhr.status === 201) {
            // Успешный ответ от сервера
            setTimeout(() => {
                alert('Файл "' + file.name + '" успешно загружен!');
                resetFileInput();
            }, 700);
        } else {
            alert("Ошибка при загрузке файла: " + xhr.status);
            resetFileInput();
        }
    };

    xhr.upload.onerror = function () {
        alert("Произошла ошибка при загрузке данных на сервер!");
        resetFileInput();
    };

    xhr.open("POST", url);
    xhr.send(formData);
}

sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (elementFile.files.length > 0) {
        uploadFile(elementFile.files[0]);
    } else {
        alert("Пожалуйста, выберите файл для загрузки.");
    }
});
