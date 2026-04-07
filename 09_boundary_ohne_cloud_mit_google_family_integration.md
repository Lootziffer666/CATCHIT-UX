Und ehrlich: genau diese Grenze macht das Konzept stärker, nicht schwächer.

Denn du willst offenkundig keine Mobilitätsüberwachung, sondern gezielte Fürsorge-Signale mit
minimalem Datenabdruck.
Das ist ein riesiger Unterschied.

Was du da eigentlich willst
Nicht:
Tracking
Verlauf
Profile
Cloud-Historie
Zielwissen
Bewegungsprotokolle
Sondern:
zustandsbezogene Familien-Sicherheit ohne Verhaltensspeicherung
Also eher:
„Schulzone verlassen“
„Bitte kümmert euch jetzt“
„Ich bin gerade orientierungslos“
„Ich brauche Hilfe, aber nicht wegen eines Notfalls“
„Nur die relevanten Menschen sollen es wissen“
Das ist UX- und Ethik-seitig sehr stark.
Warum das so gut ist
Weil du damit zwei Dinge gleichzeitig schützt:
1. Die Würde des Kindes
Dein Sohn wird nicht zum überwachten Objekt.
2. Die Handlungsfähigkeit der Eltern
Ihr bekommt genau dann ein Signal, wenn es wirklich relevant ist.

Das ist viel besser als das übliche Muster:
„Wir sammeln erstmal alles, dann wird schon irgendwas nützlich sein.“
Du denkst genau andersherum:
„Wir übertragen nur das, was für Fürsorge im Moment nötig ist.“
Das ist die richtige Haltung.

🐈‍⬛

Das Produktprinzip dahinter sollte glasklar sein
Ich würde CatchIt in diesem Bereich auf einen harten Satz festnageln:
So viel Hilfe wie nötig, so wenig Wissen wie möglich.
Das ist der Kern.
Denn daraus folgt fast alles:
keine Ziele teilen
keine Dauerortung als Standard
keine Bewegungsverläufe
keine heimliche Beobachtbarkeit
keine unnötige Retention
keine „zur Sicherheit speichern wir mal alles“-Mentalität
Stattdessen:
Ereignisse
Zustände
explizite Hilfesignale
minimal nötige Kontextweitergabe
UX-seitig ist dein „Ich weiß gerade nicht weiter“-Button extrem stark
Der ist nicht bloß ein Feature.
Der ist ein Beziehungs-Interface.

❤️

Und zwar ein sehr gutes, weil er nicht dramatisiert.

Nicht:
SOS
Alarm
Notruf
Panik
sondern eher:
„Ich komme gerade nicht weiter.“
„Bitte helft mir kurz.“
„Ich brauche Führung.“
Das ist besonders für Kinder, aber auch für neurodivergente Menschen, eine sehr kluge Stufe zwischen:
alles okay
kompletter Notfall
Diese Zwischenstufe fehlt in vielen Systemen komplett.
Wichtig:
Dieser Button darf nicht wie Versagen wirken
Das ist UX-psychologisch entscheidend.
Er sollte nicht heißen oder wirken wie:
Hilfe, ich bin verloren
Problem melden
Fehler
Alarm auslösen
Sondern eher wie:
Ich brauche euch kurz
Bitte schaut mit mir drauf

Ich weiß gerade nicht weiter
Könnt ihr übernehmen?
Damit wird Hilfeholen normalisiert statt stigmatisiert.
Auch dein Wunsch mit der Schulzone ist sinnvoll — aber nur als Ereignis, nicht als Trackingspur
Das ist der zweite sehr gute Gedanke.
Du willst nicht:
„wo ist er jetzt genau?“
„wo war er vor 20 Minuten?“
„welche Route läuft er?“
„wohin fährt er?“
Du willst nur:
„Schulzone wurde verlassen“
Das ist ein Transition Event, kein Trackingmodell.
Und das passt perfekt zu deiner allgemeinen CatchIt-Logik, weil du ohnehin in Zuständen und
Übergängen denkst.
Also nicht:
permanenter Stream
sondern:
ein sinnvoller Zustandswechsel mit optionaler Benachrichtigung
Sehr gute Richtung.
Das bedeutet für die Architektur etwas sehr Schönes
Du musst nicht „Personen-Ortung“ bauen.
Du kannst stattdessen Event-basierte Fürsorgelogik bauen.
Zum Beispiel nur solche Ereignisse:
Schulzone verlassen
Hilfe-Button gedrückt

verabredete sichere Ankunft bestätigt
keine Bestätigung innerhalb eines erwartbaren Fensters
Übergabe an Elternteil A oder B nötig
Das ist viel sauberer als jede Tracking-App-Logik.
Mein Lieblingsprinzip für diesen Bereich
Keine Standortgeschichte, nur Fürsorge-Momente.
Das wäre fast schon ein Claim.
Denn genau das unterscheidet dich von fast allem, was in Family-Tech oft schiefläuft.
Was ich dir dafür klar empfehlen würde
1. Event statt Verlauf
Nicht „Wo ist Jake?“
Sondern „Jake hat den Schulbereich verlassen“ oder „Jake braucht Hilfe“.
2. Empfängerkreis explizit und klein
Nicht „Familie“ diffus, sondern:
Mama
Papa
optional weitere klar benannte Vertrauenspersonen
3. Hilfe-Signal mit sehr geringer Reibung
Ein Tap, keine Erklärungspflicht, keine Menühölle.
4. Keine Zieloffenlegung
Ganz wichtig und sehr stark von dir gedacht.
5. Hilfe ohne Stigma
Die Sprache muss weich, selbstverständlich und würdevoll sein.
Der entscheidende UX-Unterschied
Viele Systeme fragen:
Wie können Eltern mehr sehen?
Dein System fragt:
Wie können Eltern genau dann sinnvoll handeln, wenn ihr Kind sie wirklich braucht?

Das ist die viel bessere Frage.

Ein sehr wichtiger Designhinweis
Der Button für deinen Sohn sollte wahrscheinlich kein globaler „ich habe ein Problem“-Button sein,
sondern eher ein klarer sozialer Kanal:
Beispielhafte Logik
Tap
große Bestätigung: „Mama oder Papa Bescheid sagen?“
fertig
Vielleicht noch optional:
„Bitte ruft mich an“
„Bitte holt mich“
„Bitte helft mir beim Weiterkommen“
Aber nur, wenn es simpel bleibt.
Denn der eigentliche Wert liegt darin, dass der Moment nicht erst erklärt werden muss.
Was du auf jeden Fall vermeiden solltest
Live-Karte für Eltern als Standard
Bewegungsprotokolle
automatische Zielinterpretation
„zu deiner Sicherheit speichern wir...“
versteckte Telemetrie-Logik
unklare Datenweitergabe an Dritte
Denn das würde deiner ganzen Philosophie widersprechen.
Zu Google Family Integration
Als Produktidee passt das gut, wenn es nur als Brücke für definierte Familienereignisse und
Berechtigungen dient, nicht als Hintertür für Dauerüberwachung.
Die konkrete technische Umsetzbarkeit hängt allerdings davon ab, welche APIs, Berechtigungen und
Family-Funktionen Google aktuell tatsächlich freigibt. Da würde ich für die Implementierung später
einmal sauber die aktuelle Doku prüfen.

Mein klares Urteil
Das ist eine sehr starke Richtung.
Nicht nur moralisch, sondern auch UX-seitig.
Weil sie sagt:
CatchIt soll nicht wissen, was Menschen tun.
CatchIt soll helfen, wenn Menschen es schwer haben.
Das ist ein wunderschöner und sehr klarer Produktkern.

Meine Zuspitzung in einem Satz
Du willst keine Familienüberwachung, sondern ein datensparsames Fürsorge-Protokoll für genau die
Momente, in denen Orientierung oder Begleitung gebraucht wird.
Das ist stark. Sehr stark.
