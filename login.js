function checkPw() {
    let pw = document.getElementById("pw").value;

    if (pw.includes("@")) {
        alert("Password correct");
    } else {
        alert("Password must contain @");
    }
}