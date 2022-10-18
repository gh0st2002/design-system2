import { Heading } from './components/Heading';
import { Logo } from './Logo';
import {Text} from './components/Text';
import { Button } from './components/Button';


import './styles/global.css';
import { TextInput } from './components/TextInput';
import { Envelope, Lock, SignIn } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Signin } from './components/pages/Signin';

export function App(){
 return (
     <Signin />
  )
}