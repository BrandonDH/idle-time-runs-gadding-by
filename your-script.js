// Function to remove the protocol from a URL
function removeProtocol(url) {
  return url.replace(/(^\w+:|^)\/\//, '');
}

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var rows = this.responseText.split("\n");
    var ul = document.getElementById("your-ul-id");
    for (var i = 0; i < rows.length; i++) {
      var columns = rows[i].split(",");
      var url = removeProtocol(columns[0]);
      var info = columns[1];
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = columns[0];
      a.textContent = url;
      li.appendChild(a);
      if (info) {
        var span = document.createElement("span");
        span.textContent = info;
        li.appendChild(span);
      }
      ul.appendChild(li);
    }
  }
};

xmlhttp.open("GET", "./data/dev-resources.csv", true);
xmlhttp.send();

