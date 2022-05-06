<template>
	<transition name="slide" appear :duration="500">
		<div
			:close="closeModal"
			class="bg transition-all"
		>
			<div  class=" bg-white   py-4 px-6 rounded-lg overflow-hidden shadow-xl transform transition-all w-full max-w-[85%] sm:max-w-lg ">
				<div class="flex w-full justify-between">
					<div class="flex flex-col items-center relative w-full">
						<div class="w-full flex">
							<i class="las la-times text-2xl text-black absolute right-[10px] top-[1px] cursor-pointer" @click.prevent="closeModal"></i>
							<h2 class="font-semibold text-xl text-center mx-auto mt-2">
								{{ title }}
							</h2>
						</div>
						<slot />
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
