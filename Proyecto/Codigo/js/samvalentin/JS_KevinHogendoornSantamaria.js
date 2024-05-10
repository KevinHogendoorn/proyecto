function alonso(){
    let num1;
    let num2;
    let meme;

    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    meme = parseInt(num1) + parseInt(num2);

    if (meme == 33){
        let img = document.createElement('img');
    
        img.src = '../../img/samvalentin/samvalentinKevin/alonso.jpg';

        document.body.appendChild(img);
        img.style.width='300px';
    } else {
        alert('ERROR')
    }
}