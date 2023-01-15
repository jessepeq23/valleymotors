
function talk() {
    var know = {
        "who are you": "Hello, I am  the chat-bot for Valley Motors.",
        "Who are you": "Hello, I am  the chat-bot for Valley Motors.",
        "who are you?": "Hello, I am  the chat-bot for Valley Motors.",
        "Who are you?": "Hello, I am  the chat-bot for Valley Motors.",

        "how are you": "Good :)",
        "How are you": "Good :)",
        "How are you?": "Good :)",
        "how are you?": "Good :)",

        "what is the phone number": "Our phone number is (956) 701-5850.",
        "What is the phone number": "Our phone number is (956) 701-5850.",
        "what is the phone number?": "Our phone number is (956) 701-5850.",
        "What is the phone number?": "Our phone number is (956) 701-5850.",
      
        "where are you located": "Our address is 800 S Alamo Rd, Alamo, TX 78516.",
        "where are you located?": "Our address is 800 S Alamo Rd, Alamo, TX 78516.",
        "Where are you located": "Our address is 800 S Alamo Rd, Alamo, TX 78516.",
        "Where are you located?": "Our address is 800 S Alamo Rd, Alamo, TX 78516.",

        "what time are you open": "We are open Monday-Friday with hours from 9am-5pm.",
        "what time are you open?": "We are open Monday-Friday with hours from 9am-5pm.",
        "What time are you open": "We are open Monday-Friday with hours from 9am-5pm.",
        "What time are you open?": "We are open Monday-Friday with hours from 9am-5pm.",


        "how to schedule a service": "Please call (956) 701-5850 to schedule an appointments.",
        "How to schedule a service": "Please call (956) 701-5850 to schedule an appointments.",
        "how to schedule a service?": "Please call (956) 701-5850 to schedule an appointments.",
        "How to schedule a service?": "Please call (956) 701-5850 to schedule an appointments.",

        "are you a boy or girl": "I am a robot.",
        "are you a boy or girl?": "I am a robot.",
        "Are you a boy or girl": "I am a robot.",
        "Are you a boy or girl?": "I am a robot.",

        "when were you born": "I was created in the year 2022.",
        "when were you born?": "I was created in the year 2022.",
        "When were you born": "I was created in the year 2022.",
        "When were you born?": "I was created in the year 2022.",

        "do you offer discounts": "Please subscribe to our newsletter to receive weekly discounts.",
        "do you offer discounts?": "Please subscribe to our newsletter to receive weekly discounts.",
        "Do you offer discounts": "Please subscribe to our newsletter to receive weekly discounts.",
        "Do you offer discounts?": "Please subscribe to our newsletter to receive weekly discounts.",

        "how many locations are there": "We have locations world-wide in 5 different countries.",
        "How many locations are there": "We have locations world-wide in 5 different countries.",
        "how many locations are there?": "We have locations world-wide in 5 different countries.",
        "hHow many locations are there?": "We have locations world-wide in 5 different countries.",

        "do you have social media": "Yes! Follow us on Facebook, Twitter, Instagram, & TikTok.",
        "do you have social media?": "Yes! Follow us on Facebook, Twitter, Instagram, & TikTok.",
        "Do you have social media": "Yes! Follow us on Facebook, Twitter, Instagram, & TikTok.",
        "Do you have social media?": "Yes! Follow us on Facebook, Twitter, Instagram, & TikTok.",

        "what sound does a car make": "vroom vroom",
        "what sound does a car make?": "vroom vroom",
        "What sound does a car make": "vroom vroom",
        "What sound does a car make?": "vroom vroom",



        ok: "Thank You So Much ",
        Ok: "Thank You So Much ",
        Bye: "Okay! Will meet soon..",
        bye: "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry, I didn't understand, can you try again <br>";
    }
}
