import { Link } from "react-router-dom";
import { Envelope, Lock } from "phosphor-react";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Logo } from "../../Logo";


function HomePage (){
    return(
<div>

<body className='w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100'>
    
<Logo/>
<Text size='lg' className='text-gray-400 mt-0'>

<Button>
<Link to= '/register' > Se cadastre agora mesmo! </Link>
</Button>

</Text>

<Text size='lg' className='text-gray-400 mt-3'>

<Button>
<Link to= '/login' > Já tem conta? Faça login. </Link>
</Button>

</Text>
</body>

</div>

       

    )
    
}

export default HomePage;