function copyFunc(id) {
    var copyText = document.getElementById(id).innerText;

    navigator.clipboard.writeText(copyText);

    var tooltipText = id + "-tooltip";
    
    document.getElementById(tooltipText).innerText = "Copied!";
}

function revert(id){
    var tooltipText = id + "-tooltip";
    
    document.getElementById(tooltipText).innerText = "Copy";
}
