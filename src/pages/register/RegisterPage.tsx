import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock, Horse, Target   } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, Form, Navigate, useNavigate} from "react-router-dom";
import { Logo } from "../../Logo";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";



function RegisterPage(){

    return(  

         <form > 
        <div className='w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100'> 
         <header className='flex flex-col items-center'>

         <Link to= '/' > <Logo /> </Link>
         
            
<Text size='lg' className='text-gray-400'>
      ### Cadastre-se agora! ###
</Text>
        </header>



        <label htmlFor='name' className='flex flex-col gap-3 mt-10' >
    
    <TextInput.Root>
      <TextInput.Input name="name" id='name' type = 'name' placeholder='Digite seu nome'
      
      />
    </TextInput.Root>
  </label>
        
        <label htmlFor='email' className='flex flex-col gap-3 mt-5' >
    
            <TextInput.Root>
              <TextInput.Input name="email" id='email' type = 'email' placeholder='Digite seu e-mail'
              
              />
            </TextInput.Root>
          </label>


          <label htmlFor='password' className='flex flex-col gap-3 mt-5' >
            <TextInput.Root>
              <TextInput.Input name="senha" type ='password' id='senha' placeholder='Digite sua senha'
              
              />
            </TextInput.Root>

          </label>
          <Text> 

          <Button type='submit' className='mt-5'>
              Cadastre-se
            </Button>

          </Text>
            

            

        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        </form>
    )
}
export default RegisterPage;