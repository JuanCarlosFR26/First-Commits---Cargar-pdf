document.querySelector('#btn__document').addEventListener('change', function() {
    let pdfFile = document.querySelector('#btn__document').files[0];
    let pdfFileURL = URL.createObjectURL(pdfFile);

    document.querySelector('#vistaPrevia').setAttribute('src', pdfFileURL);
});
