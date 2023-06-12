document.getElementById('calculate').addEventListener('click', function() {
    var inputDate = new Date(document.getElementById('date').value);
    var currentDate = new Date();

    // remove time from date 
    inputDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    if(inputDate >= currentDate){
        var diff = Math.ceil((inputDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
        document.getElementById('output').innerText = "There are " + diff + " days until the selected date.";
    } else {
        document.getElementById('output').innerText = "Please select a future date.";
    }
});
