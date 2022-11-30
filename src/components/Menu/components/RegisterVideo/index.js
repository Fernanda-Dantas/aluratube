import { createClient } from "@supabase/supabase-js";
import React from "react";
import { StyledRegisterVideo } from "./styles";

// Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}


const PROJECT_URL = "https://tgibqollpnxrthtsxosn.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaWJxb2xscG54cnRodHN4b3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MTE4MDksImV4cCI6MTk4NTM4NzgwOX0.zcMKc-fyF8Uw32CYgMrPwiIGohk7FZ-ffC0L4TakQn0";
const supabase = createClient(PROJECT_URL, API_KEY);

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {titulo: "Reading Vlog", url: "https://www.youtube.com/watch?v=5W3Jujl8iPQ" }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);
    
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +    
            </button>
            {formVisivel 
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(formCadastro.values);

                        supabase.from("video-playlists").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "reading vlogs",
                        })
                        .then((resposta) => {
                            console.log(resposta);
                        })
                        .catch((err) => {
                            console.log(err);
                        })

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input 
                                placeholder="Título de vídeo" 
                                name="titulo"
                                value={formCadastro.values.titulo} 
                                onChange={formCadastro.handleChange}
                            />
                            <input 
                                placeholder="URl do vídeo" 
                                name="url"
                                value={formCadastro.values.url} 
                                onChange={formCadastro.handleChange} />
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