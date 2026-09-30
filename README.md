# Sistema de Consultas — App Mobile

Aplicativo React Native (Expo) para agendamento de consultas médicas, com
login de médico (CRM) e paciente (CPF), integração com backend Spring Boot,
tratamento de erros e detecção de servidor offline.

- **Frontend:** React Native + Expo + React Navigation
- **Backend:** Spring Boot (repositório [`backend-consultas`](https://github.com/pedro-alvarez/backend-consultas))

---

## Como rodar localmente

```bash
npm install
npm start
```

Em `src/services/api.ts`, ajuste a `BASE_URL` conforme o cenário:

| Cenário | BASE_URL |
|---|---|
| Backend no seu PC (Expo Web / iOS Simulator) | `http://localhost:8080` |
| Celular físico na mesma rede Wi-Fi | `http://192.168.x.x:8080` |
| APK com backend publicado no Render | `https://backend-consultas-4aru.onrender.com` |

---

## Deploy

### Backend

Hospedado no Render: `https://backend-consultas-4aru.onrender.com`

- `GET /health` → `{"status":"UP"}`
- `GET /medicos` → lista de médicos
- `GET /pacientes` → lista de pacientes

> O serviço dorme após 15 min de inatividade (free tier).
> A primeira requisição pode levar até 60 segundos (cold start) — o app já
> trata isso com o banner "Verificando conexão com o servidor...".

---

### Frontend — APK Android

Build gerado com **EAS Build** (perfil `preview`).

1. Escaneie o QR Code abaixo **ou** baixe pelo link do Expo.
2. Permita a instalação de fontes desconhecidas apenas para o app instalador.
3. Instale e abra o app.

#### QR Code do build (Expo Dashboard / EAS)

![QR Code EAS Build](./docs/qrcode-eas-build.png)

> Este QR é o da **página do build em expo.dev** — não o do `npx expo start`.

---

### Credenciais de teste

| Perfil | Campo | Valor |
|---|---|---|
| Médico | CRM | `789456` (Dr. Roberto Silva) |
| Médico | CRM | `123789` (Dra. Ana Ferreira) |
| Paciente | CPF | `12345678901` (Maria Silva) |
| Paciente | CPF | `98765432100` (João Santos) |

---

## Build do APK

```bash
npm install -g eas-cli
eas login
eas build:configure
npm run build:apk        # eas build -p android --profile preview
```

O APK fica disponível para download/QR na aba **Builds** do projeto em
[expo.dev](https://expo.dev).
