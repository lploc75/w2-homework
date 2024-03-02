// This function updates the display area with the information of the image that is being hovered over.
function upDate(previewPic) {
    // Get the div element where the image will be displayed
    var imageDiv = document.getElementById('image');

    // Get the alt text and source of the preview image
    var altText = previewPic.alt;
    var src = previewPic.src;

    // Log the alt text and source of the image being hovered over
    console.log("Mouse over image: " + altText);
    console.log("Image source: " + src);

    // Set the innerHTML of the imageDiv to display the alt text
    imageDiv.innerHTML = altText;

    // Set the background image of the imageDiv to the source of the preview image
    imageDiv.style.backgroundImage = "url('" + src + "')";
}

// This function reverts the display area to its original state when the mouse leaves the image.
function unDo() {
    // Get the div element where the image is displayed
    var imageDiv = document.getElementById('image');

    // Log that the mouse has left the image
    console.log("Mouse leaves image");

    // Remove the background image from the imageDiv
    imageDiv.style.backgroundImage = "url('')";

    // Reset the innerHTML of the imageDiv to its default message
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
