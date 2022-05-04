<template>
	<div class="min-h-screen overflow-hidden bg">
		<PageLoading />
		<Alert />
		<slot />
	</div>
</template>

<script lang="ts" setup>
import PageLoading from '@/components/core/PageLoading.vue'
import Alert from '@/components/core/Alert.vue'
</script>

<style scoped>
.bg{
	background:  rgba(0, 0, 0, 0.178) url('../assets/image/bg.svg');
}
</style>
 