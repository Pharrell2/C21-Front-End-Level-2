    function hideMe(){
        console.log("hide")
        document.getElementById("hide").style.display = "none"; 
        document.getElementById("show").style.display = "block"; 
}

    function show(){ 
        console.log("show")
        document.getElementById("hide").style.display = "block";
        document.getElementById("show").style.display = "none";
    }