function playMusic(songName)
{
     const audioField = document.getElementById('audio-field');
     audioField.textContent = '';
     const div = document.createElement('div')
     div.innerHTML = `
         <h3 class="text-white mx-2">Now Playing: ${songName}.mp3</h3> 
          <audio src="audio/${songName}.mp3" controls autoplay class=" w-100 mt-3"></audio>
     `;
     audioField.appendChild(div);
}
playMusic('Maroon 5-Memories');
document.getElementById('maroon').addEventListener('click',function(){
    playMusic('Maroon 5-Memories');
})
document.getElementById('rewrite').addEventListener('click',function(){
    playMusic('Rewrite the stars');
})
document.getElementById('duure-duure').addEventListener('click',function(){
    playMusic('Duure Duure');
})
document.getElementById('photograph').addEventListener('click',function(){
    playMusic('Photograph');
})
document.getElementById('thousand-years').addEventListener('click',function(){
    playMusic('A Thousand Years');
})
document.getElementById('ekla-akash').addEventListener('click',function(){
    playMusic('Amar Ekla Akash');
})
document.getElementById('projapoti').addEventListener('click',function(){
    playMusic('Shoto Danar Projapoti');
})
document.getElementById('tomake-bujhina').addEventListener('click',function(){
    playMusic('Tomake Bujhina Priyo');
})
document.getElementById('uthshorgo').addEventListener('click',function(){
    playMusic('Uthshorgo');
})
document.getElementById('nam-chilona').addEventListener('click',function(){
    playMusic('Nam chilona');
})
document.getElementById('fire-eshona').addEventListener('click',function(){
    playMusic('Fire Eshona');
})
document.getElementById('aj-zane').addEventListener('click',function(){
    playMusic('Aj Zane Ki Jid');
})
document.getElementById('dhoro-jodi').addEventListener('click',function(){
    playMusic('Dhoro Jodi');
})
document.getElementById('valobasha-tarpor').addEventListener('click',function(){
    playMusic('Valobasha tarpor');
})
