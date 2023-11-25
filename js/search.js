var pages = {
    "Visual Studio" : [
        "vs.html", 
        "",
        "Microsoft", [
            "C++", "C#"
        ]],
    "VS Code" : [
        "vscode.html", 
        "",
        "Microsoft", [
            "C++", "C#", "Java", "HTML", "CSS", "JavaScript"
        ]],
    "Intellij IDEA" : [
        "intellij.html",
        "",  
        "Jet Brains", [
            "Java"
        ]],
    "CLion" : [
        "clion.html", 
        "",
        "Jet Brains", [
            "C++"
        ]
    ],
    "Rider" : [
        "rider.html",  
        "",
        "Jet Brains", [
            "C#"
        ]
    ]
};

function enterPressed(){
    if(event.key !== "Enter") return;
    search();
}

function search() {
    var list = document.getElementById("filtered-page-list");
    
    list.replaceChildren();
    list.textContent = "Results:\n";
    
    var text = document.getElementById("search-field").value;
    var pl = document.querySelector('input[name="pl"]:checked').value;
    var dc = document.querySelector('input[name="dc"]:checked').value;

    var count = 0;
    for (var key in pages) {
        if (text.length != 0 && !key.toLowerCase().match(text.toLowerCase())) continue;
        if (dc != "" && dc != pages[key][2]) continue;
        if (pl != "" && !pages[key][3].includes(pl)) continue;
        
        var div = document.createElement('button');
        div.className = "result-block";
        div.innerHTML = key;
        div.setAttribute("onclick", 'window.location.href = \"' + pages[key][0] + '\"');
        list.append(div);
        count++;
    }
    if (count == 0) {
        list.textContent = "IDE not found!";
    }
}
