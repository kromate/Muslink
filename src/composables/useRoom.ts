export const addStream = async (audio, stream, ref) => {
    audio.srcObject = stream
    audio.addEventListener('loadedmetadata', () => {
        audio.play()
    })

    const audioDiv = `
    <div class=" bg-[#3c4043] text-white rounded-md p-4 min-w-[234px] h-[132px]" v-for="n in 10" :key="n">
        <img src =${await (await import('../assets/avatar.png')).default} alt="avatar" class="w-20 h-20 rounded-full" >
            <div id="controls" class="flex mt-4 text-2xl text-white px-3 justify-between">
                <i class="las la-volume-up  cursor-pointer"> </i>

                <i class="las la-microphone cursor-pointer bg-"></i>
            </div>
    </div>`
    console.log(ref.value)
    ref.value.innerHTML = audioDiv

    console.log(ref.value)
}

