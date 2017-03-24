var theaterBody = document.getElementById("myPhotoDetail");
var imageBody = document.getElementsByClassName("front");
var imageSources = [];
var photoThumbs = document.getElementsByClassName("photoThumb");
var downAllContainer = document.getElementsByClassName("date-range")[0];

window.onload = function() {
  for(var i = 0; i < imageBody.length; i++) {
    var imgStr = imageBody[i].getElementsByTagName('img')[0].src;
    var cutStr = imgStr.slice(0, -12);
    imageSources[i] = cutStr + "webdetail";
    console.log(imageSources[i]);

    var newLink = document.createElement("a");
    newLink.href = imageSources[i];
    newLink.download = "photo.jpeg";
    newLink.innerHTML = "DOWNLOAD";
    newLink.id = "image-down-" + i;

    //style of link
    newLink.style.color = "#fff";
    newLink.style.backgroundColor = "#FF7043";
    newLink.style.borderRadius = "3px";
    newLink.style.padding = "5px 10px";
    newLink.style.marginTop = "5px";
    newLink.style.display = "inline-block";
    
    photoThumbs[i].style.height = "auto";
    photoThumbs[i].appendChild(newLink);
  }
};

var downAllBtn = document.createElement("a");
downAllBtn.innerHTML = "Download All";
downAllBtn.href = "#";

//style of link
downAllBtn.style.backgroundColor = "#FF7043";
downAllBtn.style.borderRadius = "3px";
downAllBtn.style.padding = "5px 10px";
downAllBtn.style.display = "inline-block";
downAllBtn.style.color = "#fff";

//paypal button
var paypal = document.createElement("span");
paypal.innerHTML = '<form style="display:inline-block" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
paypal.style.marginLeft = "10px";

downAllContainer.appendChild(paypal);

downAllContainer.appendChild(downAllBtn);

downAllBtn.onclick = function() {
  alert("Did this save you $50?\nPlease donate what you can in order to ensure this extension always works when you want your images.");
  for(var i = 0; i < imageSources.length; i++) {
    document.getElementById("image-down-" + i).click();
  }
};





