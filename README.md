# Node RTSP Recorder

## Descrição
Este módulo Node.js utiliza a biblioteca node-rtsp-recorder para gravar fluxos de vídeo RTSP. Ele exporta três classes principais: Recorder, FileHandler e Stream.

## Instalação
Use o npm para instalar o node-rtsp-recorder:

```bash
Copy code
npm install node-rtsp-recorder
```
## Classes Exportadas
1. Recorder
A classe Recorder é responsável por gravar streams RTSP. Para detalhes de uso, consulte a documentação oficial da biblioteca aqui.

2. FileHandler
A classe FileHandler manipula arquivos resultantes da gravação dos streams RTSP. Documentação aqui.

3. Stream
A classe Stream (implementação não fornecida neste código) pode ser utilizada como helper para simplificar o uso do node-rtsp-recorder.

## Exemplo de Uso
Descomente e adapte o seguinte trecho para configurar e iniciar um streaming:

```javascript
Copy code
const { Recorder, FileHandler } = require("node-rtsp-recorder");
const { Stream } = require("./src/helpers/stream");

module.exports = {
  Recorder: Recorder,
  FileHandler: FileHandler,
  Stream: Stream
}

// Exemplo de uso:
// const streamingConfigs = [
//   { user: "admin", password: "cam", ip: '192.168.1.112:554', rtspPath: '/onvif1' },
// ];
// new Stream( app, {}, streamingConfigs)
```

Forneça as configurações corretas para o streaming, incluindo credenciais de usuário, senha, endereço IP e caminho RTSP.

### Contribuições
Contribuições são bem-vindas. Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto é licenciado sob a Licença MIT.