<template>
	<default-layout>
		<div class="flex gap-4 p-4 flex-wrap justify-center items-center" >
                
			<div class=" bg-slate-800 rounded-md p-2" v-for="n in 10" :key="n">
				<img src="../assets/avatar.png" alt="avatar" class="w-10 h-10 rounded-full">
				<div id="controls" class="flex ">
					<i class="las la-speaker  text-black cursor-pointer" ></i>
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

const member = ref([])
onMounted(()=>{
	const socket = io('http://localhost:9000/')

	const myPeer = new Peer()
	const myVideo = document.createElement('audio')
	const ROOM_ID = useRoute().params.id
	myVideo.muted = true
	const peers = {}
	navigator.mediaDevices.getUserMedia({
		audio: false,
		audio: true
	}).then((stream) => {
		addVideoStream(myVideo, stream)

		myPeer.on('call', (call) => {
			call.answer(stream)
			const audio = document.createElement('audio')
			call.on('stream', (userVideoStream) => {
				addVideoStream(audio, userVideoStream)
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
		console.log(id)
		socket.emit('join-room', ROOM_ID, id)
	})

	function connectToNewUser(userId, stream) {
		const call = myPeer.call(userId, stream)
		const audio = document.createElement('audio')
		call.on('stream', (userVideoStream) => {
			addVideoStream(audio, userVideoStream)
		})
		call.on('close', () => {
			audio.remove()
		})

		peers[userId] = call
	}

	function addVideoStream(audio, stream) {
		audio.srcObject = stream
		audio.addEventListener('loadedmetadata', () => {
			audio.play()
		})
		audioGrid!.append(audio)
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