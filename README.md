Feladat  - Check LISTA



Web-programozás 1 – Előadás Beadandó feladat 

Alakítsanak ki két-fős csoportokat és a feladatot közösen, projektmunkában oldják meg. A dokumentációban majd írják le, hogy a két főből ki melyik feladatrészt csinálta meg. 
Ha valaki nem talál társat (pl. páratlanul vannak), a GitHub-os feladatot akkor is projektmunkában csinálja meg két GitHub fiókot felhasználva.

A megoldásban csak kliens oldali nyelvek alkalmazhatóak (HTML, CSS, JavaScript, React), szerver oldali nem (PHP, NodeJS, …).

Összesen: 30 pont

Ha a Kötelező elem - el jelzett feladatok nincsenek megvalósítva, akkor a többi feladat nem kerül értékelésre.

A feladathoz segítséget a következő oldalon talál!

1. Feladat (18 pont)

    1. Készítsen több állományból álló egységesen megjelenő honlapot vízszintes menüvel.	(1 pont)
(Azért csak 1 pont, mert az Előadáson a hozzá tartozó feladat ezt valósította meg)
Kiinduló állomány: index.html
Az oldal struktúrája minden oldalon ugyanaz legyen: 
header, footer, aside, nav, div-content, A div-content (tartalmi) rész az, ami oldalanként egyedi.
A menüsoron jelölje, hogy melyik az aktív (kiválasztott) menü.
Fejlécbe írassa ki H1-es címsorral: Web-programozás-1 Előadás Házi feladat
Láblécbe írja be az elkészítők nevét és Neptun kódját.
    2. Táblázat menü: 											(4 pont)
- CRUD funkcionalitás (Create, Read, Update, Delete) megvalósítása táblázattal 
- legalább 4x4-es táblázat
- legyen validáció minden mezőre pl. kötelező, min, max hossz
- A táblázatot lehessen rendezni bármelyik oszlop alapján
- A táblázatban lehessen szűrni/keresni bármelyik oszlop alapján
    3. HTML5 menü											(3 pont)
Készítsen a következő témákhoz 1-1 kis példát:
Web Storage, Web Workers, Server-Sent Events, Geolocation API, Drag and drop API, Canvas, SVG
A példákat elkészítheti egy oldalra is, vagy használhat almenüket is.
    4. ChartJS menü											(3 pont)
Tegyen az oldalra legalább 5x5-ös számokat tartalmazó táblázatot. A táblázat bármelyik sorát kiválasztva ábrázolja az adatokat vonaldiagramon a táblázat alatt. 
Javasolt diagram: https://www.chartjs.org/
    5. AJAX menü											(4 pont)
A dokumentum végénél az API specifikációnál talál leírást az API-ról, amit fel kell használni a feladathoz.
Ellenőrizze cURL-el és Postman-al, hogy jól működnek-e a CRUD funkciók.
Az ellenőrzés lépéseit mutassa be a dokumentációban is.
Készítsen AJAX alkalmazást az API-t felhasználva és jelenítse meg az adatokat weboldalon.
A következő fájlokat kell elkészíteni: ajax.html, ajax.js
A Read funkciónál írassa ki az adott kódhoz tartozó adatokat egymás alá. Majd utána írassa ki a height értékekről: összeg, átlag, legnagyobb.
A Create és Update funkcióknál a beviteli mező nem lehetnek üresek és max 30 karakter értéket tartalmazhatnak. 	Ezeket ellenőrizze a JS fájlban (validation).
Az Update résznél legyen egy beviteli mező, amibe beírjuk az ID-t, és egy getDataForId gomb, amivel először kiolvastatjuk az adatokat beviteli mezőkbe, ahol módosíthatjuk azokat.
A Create, Update, Delete műveletek sikerességéről adjunk visszajelzést a weboldalon.
    6. OOJS menü											(3 pont)
Készítsen egy szabadon választott Objektumorientált JavaScript alkalmazást. Alkalmazza a következőket: class, constructor, metódusok, document.body.appendChild, extends, super

2. feladat (7 pont)

    7. React: Egyoldalas alkalmazás készítése (Single page application) 2 menüvel.
Kiinduló fájl: react.html
A „Fejlesztés Babel/standalone nélkül – React telepítése helyi gépre” módszert alkalmazza.
A két menüpontnál valósítson meg 1-1 szabadon választott React alkalmazást, amelyeknek a nehézségi foka legyen hasonló, mint az órán bemutatott Calculator, Tic-Tac-Toe játék alkalmazások nehézségi foka. 
Mindkettőben használjon komponenseket és useState állapotváltozókat.
A dokumentációban mutassa be a két alkalmazás működését és kódját.
A GitHub-on készítsen egy react mappát, amibe 1-1 mappába tegye fel a két alkalmazás src mappáinak a tartalmát.

Egyéb (5 pont)

    8. Alkalmazását töltse fel és valósítsa meg Internetes tárhelyen is. Bármelyik tárhely-szolgáltatót használhatja. (Kötelező elem! A működés ez alapján lesz javítva) 				(1 pont)
    9. Használja a GitHub verziókövető rendszert							(1 pont)
(Kötelező elem! A forrás ez alapján lesz javítva) Ne csak a kész alkalmazást töltse fel egy lépésben, hanem a részállapotokat is legalább 5 lépésben, időben arányosan elosztva. 
    10. A GitHub-on a projektmunka módszert alkalmazzák: látszódjék, hogy a csoport tagjai 	(2 pont)
melyik részt készítették el.									
A GIT-en saját nevet válasszanak, ami alapján be lehet azonosítani, hogy ki mit töltött fel.

Készítsen legalább 15 oldalas dokumentációt (PDF formátumban), 				(1 pont)
amiben bemutatja az alkalmazás működését képernyőképekkel. (Kötelező elem! a feladat ez alapján lesz javítva). A dokumentációban adja meg a weboldal és a GitHub projektjének URL címét és írja le részletesen, hogy az előző feladatpontokat az alkalmazásban hogy és hol valósította meg. Fontos, hogy ez utóbbit leírja a dokumentációban, mert a feladat ez alapján lesz javítva. A dokumentációban adja meg az internetes tárhely belépéséhez szükséges FTP és URL címet, felhasználónevet és jelszót, ami szükséges a megoldás ellenőrzéséhez.

Be kell adni a Teams-en keresztül a dokumentációt. Csak a dokumentációt kell beadni, egyéb fájlokat nem! Akik közösen csinálják a feladatot, mindenki adja be a dokumentációt.

Segítség az egyes részekhez

Feladatrész
Fejezet a tananyagban
Egységesen megjelenő honlap vízszintes menüvel
Egységesen megjelenő oldalak Vízszintes menüvel fejezet
és Gyakorlat: 2. gyakorlat
Táblázat menü
Táblázat feldolgozása JavaScript-el fejezet
HTML5 menü
A HTML5 további újdonságai ÉS ChartJS fejezet
ChartJS menü
A HTML5 további újdonságai ÉS ChartJS fejezet
AJAX menü
AJAX fejezet
OOJS menü
Objektum orientált JavaScript fejezet
React: Egyoldalas alkalmazás készítése
React alapok és
React - Fejlesztés Babel/standalone nélkül fejezetek
Megjelenítés az Interneten
Tarhely-hasznalat-Nethely.docx
GitHub használat
GITHUB használat.docx


API specifikáció az AJAX feladathoz
A következő oldalon található egy web szolgáltatás (API) a következő tulajdonságokkal:
http://gamf.nhely.hu/ajax2/ 
    • Az API a háttérben lévő adatbázisból olvas/ír.
    • CRUD műveleteket valósít meg: Create, Read, Update, Delete
    • POST kéréseket fogad paraméterekkel
    • A tábla minden adata String típusú (VARCHAR), hogy ne kelljen a típusegyezésekkel foglalkozni.
    • Minden kéréshez el kell küldeni a code paramétert, ami azonosítja a felhasználót
A code paraméter formája legyen: BBBBBBefg456
ahol BBBBBB a hallgató Neptun kód, efg456: pár karakteres kód, amit a hallgató talál ki és ír a Neptun kód után, így a kódot csak ő ismeri. A következő kéréseknél, csak a hallgató kódjához tartozó sorokhoz enged hozzáférést
    • op=read és code paraméterre:
Lekérdezi az adatbázistábla adatait. 
Visszadja a következő adatokat egy tömbben JSON formában:
        	"rowCount" 	a rekordok száma
        	"maxNum" 	maximálisan átadott rekordok száma, ami 100
"list" => array()	a rekordok egy listában kulcs-érték párokban:
	kulcsok: id, name, height, weight, code
    • op= create és name, height, weight, code paraméterekre:
A name, height, weight, code paraméterek első 100 karakteréből képzett rekordot beírja a táblába.
Visszaadja, hogy az utasítás hány rekordra volt hatással (0 vagy 1)
    • op= update és id, name, height, weight, code paraméterekre:
Módosítja az adott id-hez és code-hoz tartozó rekordot a magadott új értékekkel
Visszaadja, hogy az utasítás hány rekordra volt hatással (0 vagy 1) 
    • op= delete és id, code paraméterekre:
Törli az adott id-hez és code-hoz tartozó rekordot
Visszaadja, hogy az utasítás hány rekordra volt hatással (0 vagy 1)

