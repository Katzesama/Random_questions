var questions = [];
var count = 0;

//https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
//Poornachander K
document.getElementById("inputfile").addEventListener("change", function () {
    var file = this.files[0];
    var reader = new FileReader();

    reader.addEventListener('load', function (e) {
        var file = e.target.result;
        var lines = file.split(/\r\n|\n/);
        // Reading line by line
        question = [];
        lines.forEach(line => questions.push(line));
        document.getElementById("question").innerHTML = "Questions Loaded";
    });

    reader.addEventListener('onerror', function (e) {
        alert(e.target.error.name);
    });

    reader.readAsText(file);
});

document.getElementById("next").addEventListener("click", function(){
  document.getElementById("question").innerHTML = questions[count];
  if (count < questions.length-1)
    count++;
});

document.getElementById("shuffle").addEventListener("click", function(){
  shuffle(questions);
  count = 0;
  document.getElementById("question").innerHTML = questions[count];
  count++;
});

function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
