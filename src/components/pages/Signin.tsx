import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Logo } from "../../Logo";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { Text } from "../Text";
import { FormEvent, useState } from "react";
import axios from 'axios'

export function Signin() {
  
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)
  
  
  async function handleSignin(event: FormEvent){
    
event.preventDefault()

await axios.post('/sessions',{
  email: 'marciopvpsubs@gmail.com',
  password: '12345678',
})


    setIsUserSignedIn(true)
  }


return (
<div className='w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100'>
        
        <header className='flex flex-col items-center'>
        <Logo />

<Text size='lg' className='text-gray-400 mt-0'>
      Faça login e comece a usar!
</Text>
        </header>

        <form onSubmit={handleSignin} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
          
          { isUserSignedIn && <Text>Login realizado!</Text> }
          
          <label htmlFor='email' className='flex flex-col gap-3' >
            <Text className='font-semibold'>Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope/>
              </TextInput.Icon>
              <TextInput.Input id='email' type = 'email' placeholder='Digite seu e-mail'/>
            </TextInput.Root>
          </label>

          <label htmlFor='password' className='flex flex-col gap-3' >
            <Text className='font-semibold'>Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock/>
              </TextInput.Icon>
              <TextInput.Input type ='password' id='password' placeholder='**********'/>
            </TextInput.Root>
          </label>

          <label htmlFor='remember' className='flex items-center gap-2'>
            <Checkbox id='remember'/>    
            <Text size='sm' className='text-gray-100'>
              Lembrar de mim por 30 dias
              </Text>      
            
            </label>

            <Button type='submit' className='mt-4'>
              Entrar na plataforma
            </Button>

        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>

          <Text asChild size='sm'> 
          <a href='' className='text-gray-400 underline hover:text-gray-100'> Esqueceu senha?</a>
          </Text>

            <Text asChild size='sm'>
            <a href='' className='text-gray-400 underline hover:text-gray-100'> Não possui uma conta? Crie uma agora!</a>
            </Text>
          

        </footer>
      </div>

)

}

