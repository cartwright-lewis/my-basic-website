function submitComment() {
    let commentText = document.getElementById("commentText").value;
    if (commentText.trim()) {
        let commentList = document.getElementById("commentsList");
        let listItem = document.createElement("li");
        listItem.textContent = commentText;
        commentList.appendChild(listItem);
        document.getElementById("commentText").value = "";
    } else {
        alert("Please enter a comment.");
    }
}
