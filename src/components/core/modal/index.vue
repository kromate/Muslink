<template>
	<transition name="slide" appear :duration="500">
		<div
			:close="closeModal"
			class="bg transition-all"
		>
			<div v-if="type === 'normal'" class=" bg-white   py-4 px-6 rounded-lg overflow-hidden shadow-xl transform transition-all w-full max-w-[76%] sm:max-w-lg ">
				<div class="flex w-full justify-between">
					<div class="flex flex-col items-center relative w-full">
						<div class="w-full flex">
							<Icon name="close" class="text-black absolute right-[10px] top-[10px] cursor-pointer" size="s" @click.prevent="closeModal" />

							<h2 class="font-semibold text-xl text-center mx-auto mt-2">
								{{ title }}
							</h2>
						</div>
						<slot />
					</div>
				</div>
			</div>
			<div v-else-if="type === 'settings'" class="h-screen bg-white max-w-[79%]  w-[190rem]  fixed py-9 px-12 right-0">
				<div class="flex w-full justify-between">
					<div class="flex items-center">
						<div class="btn-outline-2 mr-6 cursor-pointer" @click="closeModal">
							<Icon
								name="downArrow"
								size="s"
								class="rotate-90"
								@click.prevent="closeModal"
							/>
							close
						</div>
						<h2 class="font-semibold text-xl text-center mx-auto mt-2">
							{{ title }}
						</h2>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import { modal } from '@/composables/core/modals'

const props = defineProps({
  		modal: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: false
	},
	type: {
		type: String,
		default: 'normal'
	}
})

const closeModal = () => {
	modal.close(props.modal)
}

</script>

<style scoped>

.bg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.40);
  width: 100vw;
  max-width: 100vw;
  min-height: 100%;
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
}

.slide-enter-active,
.slide-leave-active {
  transition: all .5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: scale(0);
  opacity: 0
}

</style>
