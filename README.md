# Kaj — APK banano (Android Studio chhara)

1. github.com e free account kholo → New repository (nam: kaj-app, Private rakho)
2. Ei folder er shob file (WWW, native, package.json, capacitor.config.json, .github, .gitignore) upload koro
   ("uploading an existing file" option diye drag-drop korlei hoy)
3. Repo te **Actions** tab → "Build APK" → **Run workflow**
4. ~5 minute por run shesh hole oi run e dhukle niche **Artifacts → kaj-apk** pabe. Download kore unzip koro → app-debug.apk
5. Phone e APK ta pathao, open koro, "Install unknown apps" allow koro → install.
6. Prothombar app khulle **Notification allow** koro. Settings > "Test notification" diye check koro.

Phone er jonno important:
- Battery setting e app ke "Unrestricted / Don't optimise" dao (Xiaomi/Oppo/Vivo/Samsung e eta lage, noyto notification late hote pare)
- Notification 21 din agam schedule hoy; app kholle abar refresh hoy.

Design/logic edit korte WWW/app.js ar WWW/styles.css edit koro — push korle APK abar build hobe.

## Home screen widget (countdown)
APK install korar por phone er home screen e fanka jayga-y lamba chap dao → **Widgets** → "Abir's Task":
- **Next task** (2x2): porer task er nam + live countdown
- **Upcoming tasks** (4x2): porer task er countdown + tarpor er 3 ta task
Widget tap korle app khule. Task add/done/edit korle widget nijei update hoy. Time (start) deya task-i widget e ashe; "shara din" task ashe na.
Native code: `native/android/` (GitHub Actions build er shomoy auto android/ e copy hoy).
Widget na dekhale: Battery setting e app ke Unrestricted koro, ar ekbar app khule bondho koro.

## Backup / SQLite
- Phone e data SQLite database e thake (app er private storage).
- Settings > Backup > "ব্যাকআপ ফাইল সেভ/শেয়ার" e chap dile .json file banabe; Google Drive/WhatsApp/Telegram e pathiye rakho.
- Notun phone/reinstall e: Settings > "ফাইল থেকে ফেরাও" diye oi file select koro.
