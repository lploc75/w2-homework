function upDate(previewPic) {
    var imageDiv = document.getElementById('image');
    var altText = previewPic.alt;
    var src = previewPic.src;

    console.log("Mouse over image: " + altText);
    console.log("Image source: " + src);

    imageDiv.innerHTML = altText;
    imageDiv.style.backgroundImage = "url('" + src + "')";
}

function unDo() {
    var imageDiv = document.getElementById('image');

    console.log("Mouse leaves image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
