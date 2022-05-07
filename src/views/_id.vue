<template>
	<default-layout>
		<div class="flex gap-4 p-4 flex-wrap justify-center items-center" id="audioGrid" ref="audio" >

			<div class=" bg-[#3c4043] text-white rounded-md p-4 min-w-[234px] h-[132px] flex flex-col justify-center items-center relative " v-for="n in 10" :key="n">
				<img src ='../assets/avatar.png' alt="avatar" class="w-20 h-20 rounded-full" >
				<div id="controls" class="flex mt-4 text-2xl text-white px-3 justify-between">
					<i :class="[`las la-${allowMic ? 'microphone' :'microphone-slash'}`, 'cursor-pointer absolute bg-slate-600 p-2 rounded-full top-3 right-3']"> </i>

				</div>
			</div>

		
		</div>
	</default-layout>

</template>

<script setup lang="ts">
import defaultLayout from '@/layouts/defaultLayout.vue'
import { onMounted, ref } from 'vue'
import {io} from 'socket.io-client'
import Peer from 'peerjs'
import { useRoute } from 'vue-router'
import {addStream} from '@/composables/useRoom'

const member = ref([])
const audio = ref(null)
const allowMic = ref(false)
// const URL = 'https://muslink.herokuapp.com/'
const URL = 'http://localhost:9000/'
onMounted(()=>{
	const socket = io(URL)

	const myPeer = new Peer()
	const myAudio = document.createElement('audio')
	myAudio.muted = true
	const ROOM_ID = useRoute().params.id
	const peers = {}
	navigator.mediaDevices.getUserMedia({
		audio: true
	}).then((stream) => {
		console.log(stream);
		addStream(myAudio, stream, audio)

		myPeer.on('call', (call) => {
			call.answer(stream)
			const audio = document.createElement('audio')
			call.on('stream', (userAudioStream) => {
				addStream(audio, userAudioStream, audio)
			})
		})

		socket.on('user-connected', (userId) => {
			connectToNewUser(userId, stream) 
		})
	})

	socket.on('user-disconnected', (userId) => {
		if (peers[userId]) peers[userId].close()
	})

	myPeer.on('open', (id) => {
		socket.emit('join-room', ROOM_ID, id)
	})

	function connectToNewUser(userId, stream) {
		const call = myPeer.call(userId, stream)
		const audio = document.createElement('audio')
		call.on('stream', (userAudioStream) => {
			addStream(audio, userAudioStream, audio)
		})
		call.on('close', () => {
			audio.remove()
		})

		peers[userId] = call
	}



})
</script>

  <style>

    
    audio {
      width: 100%;
      height: 100%;
	  max-width: 300px;
      object-fit: cover;
    }
  </style>