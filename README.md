## SCRIPT LIMITAÇÃO DE VISUALIZAÇÕES DO VIMEO 

#### Fala pessoal, tudo certo? Como aqui é um lugar onde buscamos aprimorar a API do Memberkit e adicionar novas funcionalidades. Dessa vez, a funcionalidade vai para quem usa o Vímeo como plataforma de Hosting dos vídeos. Ela faz a limitação de views pelo usuário.


## Tecnologias Usadas

 HTML, JS




## Dúvidas

#### Como implementar?

R - Como o MemberKit não permite a alteração do lado do servidor, iremos aplicar o script no body do HTML na parte de configurações da plataforma.

![App Screenshot](https://github.com/rafaelpdemelo/ScriptVimeoLimitView/blob/main/images/ondeaplicar.png)

### OBS: Colocar o código entre a tag <body> --- </body>

#### Da para alterar o número de views?

R - Sim! O Script está todo comentado, você ao rolar vai achar a parte que informa o número de views que será aplicado. 

#### Funciona no Mobile?

R - Sim! O script também funciona no Mobile, a única exceção é que ele funciona baseado em cache, logo, se o mesmo usuário logar no Computador e atingir o limite e depois ir assistir no celular, ele vai funcionar como se não tivesse contabilizado nenhuma view no celular e o contador irá reinicializar até ele atingir o mesmo limite no dispositivo mobile.

#### Funciona em todos os tipos de contas?

R - Não! O Script é feito para Administradores, Moderadores e Atendimento usarem livremente, ele só se aplica a usuários considerados "comuns" ou "alunos".

#### Posso aplicar o script em apenas vídeos específicos?

R - Não! O Script funciona em toda a plataforma, logo, o número de views limite é aplicado em TODOS os vídeos da sua plataforma de forma igual. (Só em vídeos que são hospedados no vimeo)

#### Posso alterar o código?

R - Fiquem à vontade para trazer novas funcionalidades! :) 


## Autor

- [@rafaelpdemelo](https://www.github.com/rafaelpdemelo)



