app.js

Details

Activity

function talk() {
    var know = {
        "who are you": "Hello, Codewith_random here ",
        "how are you": "Good :)",
        "what can i do for you": "Search CodeWithRandom on Google>>Thank Me Later",
        "our followers":
            "I have my family of 200000 members, i don't have follower ,have supportive Famiy ",
        ok: "Thank You So Much ",
        Bye: "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}
