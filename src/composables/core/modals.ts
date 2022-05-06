import { ref } from 'vue'
import { useModal } from './modal'
import CreateCustomer from '@/components/modals/customers/CreateCustomer.vue'
import SingleDetails from '@/components/modals/customers/SingleDetails/index.vue'
import Accounts from '@/components/modals/settings/Accounts.vue'
import CreateAccounts from '@/components/modals/Accounts/createAccount.vue'
import BusinessProfile from '@/components/modals/settings/BusinessProfile.vue'
import Currency from '@/components/modals/settings/Currency.vue'
import Payments from '@/components/modals/settings/Payments.vue'
import Security from '@/components/modals/settings/Security.vue'
import Team from '@/components/modals/settings/Team.vue'
import Webhooks from '@/components/modals/settings/Webhooks.vue'

type CustomerTypes = 'CreateCustomer' | 'SingleDetails'
type SettingTypes = 'Accounts' | 'BusinessProfile' | 'Currency' | 'Payments' | 'Security' | 'Team' | 'Webhooks'
type AccountTypes = 'CreateAccounts'

const CustomersModal = { CreateCustomer, SingleDetails } as Record<CustomerTypes, any>
const SettingsModal = { Accounts, BusinessProfile, Currency, Payments, Security, Team, Webhooks } as Record<SettingTypes, any>
const AccountsModal = { CreateAccounts } as Record<AccountTypes, any>

export const modal = useModal(ref([] as any))
const customerModal = modal.register('Customer', CustomersModal)
const settingModal = modal.register('Settings', SettingsModal)
const accountModal = modal.register('Accounts', AccountsModal)

export const useCustomerModal = () => customerModal
export const useSettingsModal = () => settingModal
export const useAccountsModal = () => accountModal
