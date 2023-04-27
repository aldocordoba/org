import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] =useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("manejar el envío")
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo

        }
        registrarColaborador(datosAEnviar)

    }

    const manejarNuevoEnvio = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }


    return <section className = "formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el navegador.</h2>
            <Campo
            titulo="Nombre"
            placeholder="Ingresar nombre"
            required={true}
            valor={nombre}
            actualizarValor={actualizarNombre}
            />
            <Campo
            titulo="Puesto"
            placeholder="Ingresar puesto"
            required
            valor={puesto}
            actualizarValor={actualizarPuesto}
            />
            <Campo
            titulo="Foto"
            placeholder="Ingresar enlace de foto"
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />

            <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
            
        </form>

        <form onSubmit={manejarNuevoEnvio}>
            <h2>Rellena el formulario para crear equipo.</h2>
            <Campo
            titulo="Título"
            placeholder="Ingresar título"
            required={true}
            valor={titulo}
            actualizarValor={actualizarTitulo}
            />
            <Campo
            titulo="Color"
            placeholder="Ingresar el color Hex"
            required
            valor={color}
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton>Registrar equipo</Boton>
            </form>

    </section>
}

export default Formulario