function calculate() {
    let people = document.getElementById("people").value;
    let days = document.getElementById("days").value;
    let style = document.getElementById("style").value;

    let cost = people * days * 100 * style;

    document.getElementById("result").innerHTML =
        "Estimated Cost: $" + cost;
}