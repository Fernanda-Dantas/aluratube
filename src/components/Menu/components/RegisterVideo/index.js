import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            console.log(values);
            setValues({
                ...values,
                titulo: value,
            });
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {titulo: "Reading Vlog", url: "http://youtube.com" }
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
    
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +    
            </button>
            {formVisivel 
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(values);
                    }}>
                        <div>
                            <button className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input 
                                placeholder="Título de vídeo" 
                                value={formCadastro.values.titulo} 
                                onChange={formCadastro.handleChange}
                            />
                            <input 
                                placeholder="URl do vídeo" 
                                value={formCadastro.values.url} 
                                onChange={(evento) => {
                                const value = evento.target.value;
                                setValues({
                                    ...values,
                                    url: value,
                                });    
                            }} />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : null }
        </StyledRegisterVideo>
    )
}