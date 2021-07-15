javascript("
    console.log("Contacting server")
    function start() {
        answer = prompt("Type, PHP for PHP, And Node for Node")
        answer = answer.toLowerCase();
    }
    start()
    Prompt()
    if(answer == "php") {
        alert("PHP, is not yet supported")
        alert("Portaproxy 1.0, Try checking for new code at titan")
    } elseif(answer == "node") {
        node = promt("Type URL")
        window.location("https://nodeubyblock.herokuapp.com/" + node)
        console.log("data packets sent")
    } else {
        alert("Error, Please try again")
        start()
    }
")