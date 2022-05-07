import { onMounted, ref } from 'vue'


const member = ref([])

export const allowMic = ref(true)
export const userStream = ref()

export const addStream = async (audio, stream, ref, muted = false) => {
    audio.srcObject = stream
    audio.addEventListener('loadedmetadata', () => {
        audio.play()
    })

    const audioDiv = `
    <div class=" bg-[#3c4043] text-white rounded-md p-4 min-w-[234px] h-[132px] flex flex-col justify-center items-center relative ">
        <img src =${await (await import('../assets/avatar.png')).default} alt="avatar" class="w-20 h-20 rounded-full" >
            <div id="controls" class="flex mt-4 text-2xl text-white px-3 justify-between">
                <i class="[ 'la-${allowMic.value ? 'microphone' : 'microphone-slash'}', 'las la-microphone cursor-pointer absolute bg-slate-600 p-2 rounded-full top-3 right-3']" @click="toggleMic"> </i>

            </div>
    </div>`

    ref.value.innerHTML = audioDiv


}

