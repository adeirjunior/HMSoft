import { RegisterForm } from '@/app/_components/form';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HMSoft - Register',
  description: 'This is a description'
}


export default function Register() {
  return (
    <section className='grid place-content-center'>
      <RegisterForm />
    </section>
  )
}
