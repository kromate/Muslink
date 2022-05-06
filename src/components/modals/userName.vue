<template>
	<Modal
		modal="$atts.modal"
		title="	Create Customer"
	>
		<div class="flex flex-col w-full h-full justify-between">
			<div class="flex items-center justify-center w-full" />
			<div class="flex w-full justify-end mt-6" />
			<transition name="slideUp" appear>
				<form class="w-full overflow-y-auto" @submit.prevent="create">
					<div class="flex flex-col mt-2 ">
						<div class="field">
							<label for="bvn" class="font-medium text-base text-litBlack mb-3">
								Select Customers
							</label>
							<input
								id="Customer"
								type="text"
								name="Customer"
								class="input"
								placeholder="Customer List"
								required
							>
						</div>
						<div class="field">
							<label for="bvn" class="font-medium text-base text-litBlack mb-3">
								Currency
							</label>
							<input
								id="currency"
								type="text"
								name="currency"
								class="input"
								placeholder="Your Currency"
								required
							>
						</div>
					</div>

					<button class="btn bg-primary text-white self-end px-7 min-w-[140px] mt-5  text-sm !py-3" :disabled="loading">
						<span v-if="!loading"> Submit</span>  <Spinner v-else click="ml-6" />
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
