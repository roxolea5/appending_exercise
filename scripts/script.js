var allCommentsDiv = document.getElementById('all-coments-div');


function saveComment() {
    var newh2 = document.createElement("h2");
    var newp = document.createElement("p");
    var authorInfo = document.getElementById('author-name').value;
    var authorComment = document.getElementById('new-comment').value;

    if (authorInfo == "" || authorComment == "") {
        alert('Please fill all fields');
    } else {
        newh2.append(authorInfo);
        newp.append(authorComment);

        allCommentsDiv.appendChild(newh2);
        allCommentsDiv.appendChild(newp);


        var newauthorInfo = document.getElementById('author-name').value = '';
        var newauthorComment = document.getElementById('new-comment').value = '';

        $('#newCommentModal').modal('hide');
    }









}
