Projeto DApp - Registro de Notas Fiscais
Descrição
Esta aplicação descentralizada (DApp) foi desenvolvida com fins educativos para simular o registro de notas fiscais em uma blockchain privada. O projeto visa proporcionar o aprendizado prático dos princípios de funcionamento de uma rede blockchain e do desenvolvimento de contratos inteligentes utilizando a linguagem Solidity.

Funcionalidades
Emissão de uma nota fiscal através de um formulário web.
Conexão da carteira MetaMask à blockchain local (Ganache).
Registro das notas fiscais em um contrato inteligente.
Exibição do sucesso da transação para o usuário.

Tecnologias Utilizadas
Solidity: Para criação do contrato inteligente (NotaFiscal.sol).
Ganache: Blockchain local para testes.
MetaMask: Carteira de criptomoedas para conexão e autorização de transações.
JavaScript: Interação com o contrato via Web3/ethers.js.
HTML/CSS: Desenvolvimento da interface de usuário.

Como Executar o Projeto
Instalar o Ganache:
Rodar o Ganache:
Abra o Ganache e crie uma blockchain local.
Copie o endereço RPC (ex.: HTTP://127.0.0.1:7545).

Configurar o MetaMask:
Instale a extensão MetaMask no navegador (caso ainda não tenha).
Adicione uma nova rede com o RPC do Ganache.
Importe uma das contas do Ganache usando a chave privada.

Deploy do contrato:
Utilize o Remix IDE (https://remix.ethereum.org/).
Compile o contrato NotaFiscal.sol.
Configure o Remix para usar o ambiente Web3 Provider e cole o endereço RPC do Ganache.
Faça o deploy do contrato.
Copie o endereço do contrato para ser usado no app.js.

Atualizar o Frontend:
No app.js, atualize o endereço do contrato inteligente.
Abrir o index.html com um servidor local ou, se preferir, use o VS Code com a extensão Live Server.
Acesse http://localhost:8000 ou a porta que for informada.
Acesse a aplicação pelo navegador.
Preencha o formulário e envie.
Aprove a transação pelo MetaMask.
A nota será registrada no contrato na blockchain local.

Resultados Esperados
A nota fiscal enviada será registrada permanentemente no contrato inteligente.
A interface web indicará sucesso ou erro da operação.

Licença
Projeto desenvolvido para fins educativos, sem intenção de uso comercial.
