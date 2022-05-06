<template>
	<default-layout>
		<div class="flex flex-col justify-center w-full h-screen">
	
			<div class="flex justify-center sm:hidden">
				<img src="../assets/image/logo.svg" alt="logo" class="h-14">
			</div>
			<div class="flex mx-auto my-12 flex-col p-10 py-16 gap-5 bg-[#0d2036] text-white sm:rounded-lg z-10 sm:w-[400px] w-full">
				<div class="flex gap-2 flex-col">
					<span class="text-[28px] font-bold">Welcome</span>
					<div class="flex-wrap">
						Have Fun chatting with friends and listening to conversations
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<button class=" outline-none text-center py-4 px-6 text-sm rounded-lg  bg-slate-700 hover:bg-slate-600  font-bold  mt-2" 
						@click="useUserModal().openUserName()"
					>
						Create a Room
					</button>
					<button class=" outline-none text-center py-4 px-6 text-sm rounded-lg  bg-slate-700 hover:bg-slate-600  font-bold  mt-2" >
						Join a Room
					</button>
				
				</div>
			</div>
			<div class="flex flex-row absolute bottom-0 w-full justify-between px-5 py-5 mt-auto items-center sm:px-7">
				<div class="hidden sm:flex">
					<img src="../assets/image/logo.svg" alt="logo" class="h-10">
				</div>
				<div class="flex flex-row gap-6 text-slate-100">
					<a href="" class="hover:text-primary-200 cursor-pointer">Github</a>
					<a href="" class="ml-2 hover:text-primary-200 cursor-pointer">Twitter</a>
					<a href="" class="ml-2 hover:text-primary-200 cursor-pointer">Youtube</a>
				
				</div>
			</div>
		</div>
	</default-layout>

</template>

<script setup lang="ts">
import { useUserModal } from '@/composables/core/modals'
import defaultLayout from '@/layouts/defaultLayout.vue'


</script>

  <style>

    

  </style>