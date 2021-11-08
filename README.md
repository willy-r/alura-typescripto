# Curso de TypeScripto - Alura

Anotações e código do curso [TypeScript parte 1: Evoluindo seu JavaScript](https://cursos.alura.com.br/course/typescript-evoluindo-javascript) da Alura.


## Sobre o TypeScript

Linguagem criada pela Microsoft que é um superset do ECMAScript, ou seja, todo o JavaScript é utilizado pelo TypeScript, porém o TS adiciona alguns outros recursos como tipagem estática para tornar o código menos sujeito a defeitos, bugs, além de tornar a experiência do desenvolvedor uma experiência mais primorosa.

O TypeScript é muito utilizado no mercado e pode ser integrado com vários Frameworks como React, Angular, Vue, além de poder ser integrado também com o NodeJS no back-end.

### Infraestrutura do TypeScript

É necessário ter o **NodeJS** instalado na sua máquina para que o compilador do TypeScript funcione, esse projeto estará utilizando a versão do NodeJS *14.18.1*.

### Motivação do TypeScript

Ele é muito utilizado para que em **tempo de desenvolvimento**, problemas básicos que não se encaixam na regra de negócio da aplicação, sejam detectados e eliminados antes de ser enviado pra produção.


## Instalação do TypeScript

É necessário instalar o compilador do TypeScript utilizando o comando:

```bash
npm install --save-dev typescript
```

> Note que a flag `--save-dev` foi utilizada nesse caso, pois é uma dependência de desenvolvimento, que não precisará estar em produção.


## Configurando o TypeScript (compilador)

É necessário também configurar ele, pois ele não sabe como você quer que ele se comporte no seu projeto. E isso pode variar muito. Basicamente é necessário adicionar um arquivo chamado **tsconfig.json** na pasta raíz do projeto para que ele entenda o que tem que veirificar ou não.

Todo o código que for escrito em TypeScript ficará na pasta [`app`](app), quando o código estiver pronto, ele será transformado em código JavaScript e automicamente será movido para a pasta [`dist`](dist), pois tem que haver uma tradução (compilação) para o navegador entender.

### Configuração básica do TypeScript

Dentro do arquivo [`tsconfig.json`](tsconfig.json) você encontrará a configuração mais básica para utilizar o TypeScript.

### Algumas opções do arquivo de configuração do TypeSript

- **`compilerOptions`** - Contém opções do compilador
  - **`outDir`** - diretório para onde será enviado o arquivo compilado em JS
  - **`target`** - versão do ECMAScript em que o código JS será compilado
  - **`noEmitOnError`** - não gera arquivos se tiver erros nos arquivos TS que estiverem sendo monitorados

- **`include`** - Array contendo paths de arquivos que serão compilados, por exemplo: `["app/**/*"]`

### Rodando o TypeScript

Defina um comando no `package.json` e roda usando o npm:

```bash
npm run jesus
```


## Planejamento e modelagem dos dados

Os dados precisam ser modelados para que se aproximarem o mais perto possível da realidade, para isso é interessante antes de começar a escrever o código, preparar o que será necessário para a aplicação, nesse projeto algumas coisas precisam ser respeitadas, como por exemplo:

- Não pode ser modificada depois de criada
- Obrigatoriamente tem uma data, quantidade e valor
- Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado

Por isso o projeto é feito primeiramente em JavaScript (utilizando as mais modernas formas do ECMAScript), para ver se ele consegue atender a todos esses requesitos, e depois passado para TypeScript.


## Anotações rápidas e aleatórias

- Trabalhando com o sistema de módulos, todo arquivo JS é tratado como **módulo**.
- Não é possível alterar o valor de uma propriedade privada no JS.
- O JS é uma linguagem dinâmica, então ela consegue criar propriedades dinamicamente durante a ocorrência do código, isso pode ser bom, mas também pode ser mt ruim.
- O navegador não reconhece arquivos TS.
