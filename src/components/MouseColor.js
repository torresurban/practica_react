import { useEffect, useState } from "react"


export default function MouseColor() {

    const [color, setColor] = useState('orange')

    

    useEffect(() => {
        function onMouseMove(evento) {
            if (evento.clientX < window.innerWidth / 2) {
                setColor('orange')
            } else {
                setColor('blue')
            }
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            console.log('LIMPIANDO');
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [color]);

    console.log('Ocurrió el render');

  return  <div style={{height: '100vh', background: color}}/>
  
}
