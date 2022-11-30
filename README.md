# aluratube
Acesse o site [aqui.](https://aluratube-liard-kappa.vercel.app/)

![aluratube_gif](https://user-images.githubusercontent.com/81118959/204857993-6be3c747-96b9-4db0-85af-8089b5c13d3a.gif)

![form_aluratube](https://user-images.githubusercontent.com/81118959/204863247-c2aba3a6-2eca-4ec2-83f8-67fa20d0f985.jpg)


## Descrição
Projeto realizado durante a IMERSÃO REACT 5: ALURATUBE da Alura onde aprendi a criar uma interface com conteito BFF (Back End for Front End) para guardar meus vídeos favoritos de leitura e estilo de vida.

### Setup de ambiente:
- [Node LTS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [supabase](https://supabase.com/)

## aluratube Site

### Estrutura do projeto

- `./pages/_app.js`: É a página que o Next.js usa para montar o sistema de roteamento global
- `./pages/index.js`: É a página do projeto
- `./src/components/Menu/components`: São todos os pedaços primordiais da interface como componentes
- `./src/components/Menu/components/RegisterVideo`: São todos os arquivos para cadastrar novos vídeos pelo formulário
- `./src/components/Menu/components/Search.js`: É a página que guarda a parte de busca da aplicação
- `./src/components/ColorModeProvider`: Oferece o state de Light/Dark Mode para toda a aplicação
- `./src/components/services`: A pasta services possui todas as chamadas de serviço externo que temos no projeto.


### Como me localizar no projeto?
- Todas as páginas do projeto estão listadas em `./pages`
   - As chamadas de serviços externos estão na pasta `./src/components/services`
  - Todos os `componentes` que representam as páginas estão em `./src/components/Menu/components`
    - Uma vez dentro da pasta `./src/components` você pode ir navegando pelos componentes e outras partes da aplicação, como CSSReset, Timeline e Favoritos para fazer a alteração que deseja.
    
## Principais Aprendizados
- React;
- NextJS;
- Conceito BFF (Back End for Front End);
- Custom Hooks; 
- NPM scripts;
- StyledComponents;
- Props, Prop-drilling, useState e useEffect;
- Design Systems;
- Fetch API.

