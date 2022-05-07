<template>
	<Modal
		modal="$atts.modal"
		title="Enter Your Name"
	>
		<div class="flex flex-col w-full h-full justify-between">
			<div class="flex items-center justify-center w-full" />
			<div class="flex w-full justify-end mt-6" />
			<transition name="slideUp" appear>
				<form class="w-full overflow-y-auto" @submit.prevent="">
					<div class="flex flex-col mt-2 ">
						<div class="field">
							<label for="bvn" class="font-medium text-base text-litBlack mb-3">
								Your Name
							</label>
							<input
								id="Customer"
								type="text"
								name="Customer"
								class="input"
								placeholder="Kromate"
								required
							>
						</div>
					
					</div>

					<button class="btn px-7 mt-5  text-sm !py-3 ml-auto" :disabled="false">
						<span v-if="true"> Submit</span>  <Spinner v-else  />
					</button>
				</form>
			</transition>
		</div>
	</Modal>
</template>

<script lang="ts" setup>
import Modal from '@/components/core/modal/index.vue'



</script>

<style scoped>
.slideUp-enter{
	opacity: 0;
/* transform: translateY(200px); */
}
.slideUp-leave-to{
opacity: 0;
/* transform: translateY(-200px); */
}

.slideUp-enter-active,
.slideUp-leave-active{
    transition: all 0.35s ease;
}
</style>
