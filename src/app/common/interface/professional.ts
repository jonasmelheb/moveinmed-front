import { Profession } from './profession';
export interface Professional {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: string
  profession: Profession
  active: number
}
