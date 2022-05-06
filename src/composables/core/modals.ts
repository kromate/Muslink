import { ref } from 'vue'
import { useModal } from './modal'
import UserName from '@/components/modals/userName.vue'


type UserTypes = 'UserName'


const UsersModal = { UserName } as Record<UserTypes, any>


export const modal = useModal(ref([] as any))
const userModal = modal.register('User', UsersModal)


export const useUserModal = () => userModal

