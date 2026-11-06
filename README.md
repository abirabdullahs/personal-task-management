# Kaj — APK banano (Android Studio chhara)

1. github.com e free account kholo → New repository (nam: kaj-app, Private rakho)
2. Ei folder er shob file (www, package.json, capacitor.config.json, .github, .gitignore) upload koro
   ("uploading an existing file" option diye drag-drop korlei hoy)
3. Repo te **Actions** tab → "Build APK" → **Run workflow**
4. ~5 minute por run shesh hole oi run e dhukle niche **Artifacts → kaj-apk** pabe. Download kore unzip koro → app-debug.apk
5. Phone e APK ta pathao, open koro, "Install unknown apps" allow koro → install.
6. Prothombar app khulle **Notification allow** koro. Settings > "Test notification" diye check koro.

Phone er jonno important:
- Battery setting e app ke "Unrestricted / Don't optimise" dao (Xiaomi/Oppo/Vivo/Samsung e eta lage, noyto notification late hote pare)
- Notification 21 din agam schedule hoy; app kholle abar refresh hoy.

Design/logic edit korte www/index.html edit koro — push korle APK abar build hobe.

## Backup / SQLite
- Phone e data SQLite database e thake (app er private storage).
- Settings > Backup > "ব্যাকআপ ফাইল সেভ/শেয়ার" e chap dile .json file banabe; Google Drive/WhatsApp/Telegram e pathiye rakho.
- Notun phone/reinstall e: Settings > "ফাইল থেকে ফেরাও" diye oi file select koro.
