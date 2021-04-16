# Planering FileUpload

Detta kommer att bli mitt slutprojekt i kurserna Webbutveckling 2 (WEUWEB02) & Webbserverprogrammering 1 (WESWEB01)
## Vad ska det bli?

"FileUpload" ska bli en sida där du ska kunna ladda upp filer och enkelt dela dem. För att få ladda upp en fil skall det krävas att man skapar ett konto samt verifierar kontot. Detta ger dig möjligheten att då ladda upp filer på upp till 250mb. (Denna max storleken på filer är ej huggen i sten). Sedan får du en länk som du kan dela så andra kan ladda ned dina filer. Vid uppladdning kommer du kunna välja hur länge filen ska sparas på server. Om den ska försvinna efter en vecka från uppladdning eller efter 3 nedladdningar. För att ladda ner kommer du ej behöva vara inloggad på sidan. 

## Varför "FileUpload"?

17 Septemper 2020 lade [Mozilla](https://www.mozilla.org/en-US/) ner projektet [Firefox Send](https://support.mozilla.org/sv/kb/what-happened-firefox-send). En hemsida där du enkelt kunde ladda upp och dela filer mellan personer. Jag personligen använda denna tjänst mycket då Discord har en låg gräns på hur stora filer man får ladda upp. Firefox Send hade support för större filer. Jag hittade inga bra liknande tjänster och har därför tänkt att göra en egen liknande tjänst som jag ska self-hosta. 


## Vilka tekniker?

Hemsidan kommer att använda många olika tekniker. Jag kommer att ha en backend som använder [NodeJS](https://nodejs.org/en/) som kommer att koppla till en [MongoDB](https://www.mongodb.com/) Databas. Som View Engine kommer jag att använda [EJS](https://ejs.co/) och för design på front-end kommer jag använda [Bootstrap 5](https://getbootstrap.com/) alternativt [TailwindCSS](https://tailwindcss.com/).

 - NodeJS
 - MongoDB
 - EJS
 - Bootstrap 5
 - TailwindCSS
 - 
## Databasens syfte

Jag kommer att använda MongoDB för att spara information kring de uppladdade filerna. Det kommer att vara information kring var filen ligger på servern, när filen ska tas bort från server, vilket konto som laddade upp filen samt hur många gånger den har laddats ned. När en fil skall tas bort från servern för att den är för gammal alternativt för många nedladdningar så skall även all information kring den filen i databasen att försvinna.

## Färger och Fonts

Färgerna jag kommer använda kommer att vara ganska neutrala. Om jag har tid kommer jag även att implementera Dark Mode som default välja det som ditt Operativ System har. (Det ska finnas en knapp att överskrida).
De fonts jag kommer välja är vanliga fonter som Arial, Roboto eller liknande. 


## Målgrupp, Persona och Scenarios

Målgruppen kommer vara ganska teknikintresserande som söker en sida att dela sina filer ut. Troligen 20-30 års-åldern.
Det kommer troligen vara teknikinstresserande och ej mer "vanligt folk" då de kommer troligen välja någon mer "Big Tech" företag som Google samt att jag också kommer mer fokusera på de teknikintresserande. 

### Persona:
Anders
22år / man 
Utvecklare

Han har problem då alla sidor att ladda upp filer idag har antingen massor med reklam eller
är en del av "Big Tech Company" såsom Google, Microsoft eller Amazon.

### Scenario:
Anders har letat efter en sida att dela sina filer sedan Firefox Send dog.
Han hittade sidan gemon en sökning på google. Den uppfyller hans krav där
du enkelt kan ladda upp.



