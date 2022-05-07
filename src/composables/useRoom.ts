export const addStream = async (audio, stream, ref) => {
    audio.srcObject = stream
    audio.addEventListener('loadedmetadata', () => {
        audio.play()
    })

    const audioDiv = `
    <div class=" bg-slate-800 text-white rounded-md p-4" v-for="n in 10" :key="n">
        <img src =${await (await import('../assets/avatar.png')).default} alt="avatar" class="w-16 h-16 rounded-full" >
            <div id="controls" class="flex mt-4 text-2xl">
                <i class="las la-volume-up  text-white cursor-pointer"> </i>
            </div>
    </div>`
    console.log(ref.value)
    ref.value.innerHTML = audioDiv

    console.log(ref.value)
}

