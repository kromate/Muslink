export const addStream = (audio, stream, ref) => {
    audio.srcObject = stream
    audio.addEventListener('loadedmetadata', () => {
        audio.play()
    })

    ref.value.append(audio)

    console.log(ref.value)
}