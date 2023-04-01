const volumeBtn = $('.btn-volume')
const volumeBar = $('.volume-selection input')
const volumeFill = $('.volume-selection progress')

volumeBtn.onclick = function(){
    volumeBar.style.toggle()
}