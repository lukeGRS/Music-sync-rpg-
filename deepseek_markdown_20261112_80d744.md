# 🎵 SyncTube Music

Ouça música **em tempo real** com amigos — YouTube + áudio direto, crossfade, fila compartilhada e chat.

## ✨ Funcionalidades

- 🎧 **Sala colaborativa** — todos controlam, votam e conversam
- 🔗 **Múltiplas fontes** — YouTube (player oficial) e links diretos (`.mp3`, `.ogg`, `.wav`, `.m4a`, `.flac`…)
- 🎚️ **Crossfade** de 0 a 12 s, com potência constante ou curva linear
- 🕒 **Sincronia real** — relógio NTP simplificado + correção fina de deriva por `playbackRate` (±6%)
- 💾 **Biblioteca local** (IndexedDB) com playlists, favoritos e histórico
- 🌗 **Tema claro/escuro**, atalhos de teclado, MediaSession
- 📴 **Sem build obrigatório** — é HTML+JS puro

## 🚀 Rodar localmente

```bash
git clone https://github.com/SEU-USUARIO/synctube-music.git
cd synctube-music
npm install
npm run dev      # abre em http://localhost:3000