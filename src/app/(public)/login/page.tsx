import { LoginForm } from '@/app/_components/form';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HMSoft - Login',
  description: 'This is a description'
}


export default function Login() {
  return (
    <section className='grid place-content-center'>
      <LoginForm />
    </section>
  )
}
