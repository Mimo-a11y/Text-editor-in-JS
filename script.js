
//creating function to copy text in output
updateText = () => {
    let text = document.getElementById("in").value;
    document.getElementById("format").innerText = text;
}
//making bold
makeBold = (elem) => {
    elem.classList.toggle('active');
    document.getElementById("format").classList.toggle("bold");
}

//making italic
makeItalic = (elem) => {
    elem.classList.toggle('active');
    document.getElementById("format").classList.toggle("italic");
}

//making underlined
makeUnderline = (elem) => {
    elem.classList.toggle('active');
    let formattedText = document.getElementById("format");
    if(formattedText.classList.contains('underline'))
    {
        formattedText.classList.remove('underline');
    }else{
        formattedText.classList.add('underline');
    }

}

//functions for alignments
alignText = (elem, alignType) => {
    document.getElementById("format").style.textAlign = alignType;
    let buttonsList = document.getElementsByClassName('align');
    for(let button of buttonsList){
        button.classList.remove('active');
    }
    elem.classList.add('active');
}