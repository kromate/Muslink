<template>
	<default-layout>
		<div class="flex gap-4 p-4 flex-wrap justify-center items-center" id="video-grid">
			<!-- <div class="w-1/2 min-h-[500px] bg-slate-800">

			</div> -->

			<div ></div>

			<!-- <div class="w-1/2 bg-slate-800">

			</div> -->
		</div>
	</default-layout>

</template>

<script setup lang="ts">
import defaultLayout from '@/layouts/defaultLayout.vue'
import { onMounted } from 'vue'
import {io} from 'socket.io-client'
import Peer from 'peerjs'

onMounted(()=>{

	const socket = io('https://muslink.herokuapp.com/')
	const videoGrid = document.getElementById('video-grid')
	const myPeer = new Peer()
	const myVideo = document.createElement('video')
	const ROOM_ID = '12345'
	myVideo.muted = true
	const peers = {}
	navigator.mediaDevices.getUserMedia({
		video: true,
		audio: true
	}).then((stream) => {
		addVideoStream(myVideo, stream)

		myPeer.on('call', (call) => {
			call.answer(stream)
			const video = document.createElement('video')
			call.on('stream', (userVideoStream) => {
				addVideoStream(video, userVideoStream)
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
		const video = document.createElement('video')
		call.on('stream', (userVideoStream) => {
			addVideoStream(video, userVideoStream)
		})
		call.on('close', () => {
			video.remove()
		})

		peers[userId] = call
	}

	function addVideoStream(video, stream) {
		video.srcObject = stream
		video.addEventListener('loadedmetadata', () => {
			video.play()
		})
		videoGrid.append(video)
	}

})
</script>

  <style>

    
    video {
      width: 100%;
      height: 100%;
	  max-width: 300px;
      object-fit: cover;
    }
  </style>