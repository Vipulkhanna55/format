const getJokes=async()=>{
    try {
        let data=await fetch('https://api.chucknorris.io/jokes/random');
        data=await data.json();
        const button = document.createElement('p');
        button.innerText = data.value;
        document.getElementById('temp_id').appendChild(button);
        
    } catch (error) {
        console.log(error);
        
    }
    

}
window.addEventListener("load",()=>{
    console.log("data");

    getJokes();
    const button_id=document.getElementById('buttonId');
button_id.addEventListener("click",()=>{
    console.log("Clicked");

})
});

