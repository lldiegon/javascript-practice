function whatToWear(temp) {
    if(temp < 0) {
        document.write("Het vriest! Draag een jas met daaronder een trui. <br>")
    }
    else if(temp < 10) {
        document.write("Draag een Jas. <br>")
    }
    else if(temp < 20) {
        document.write("Draag een Trui. <br>")
    }
    else {
        document.write("Het is lekker weer! Draag een T-shirt. <br>")
    }
}

temperatuur = prompt("Wat is de temperatuur in graden Celcius?");
whatToWear(temperatuur);
