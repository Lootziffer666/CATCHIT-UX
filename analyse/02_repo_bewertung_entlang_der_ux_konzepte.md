Mein Urteil nach Sichtung von README, Projekt-Doku und zentralen UI-/State-Dateien: du liegst
architektonisch in mehreren Punkten schon erstaunlich nah an einer wirklich neuen Transit-UX, aber die
sichtbare Produktlogik und der aktuelle Hauptflow laufen an genau den radikalsten UX-Ideen noch
vorbei. Ich habe das Repo nur über die öffentlich sichtbaren Dateien/Dokus beurteilt, nicht als laufende
App in der Hand getestet.
Wo es schon passt
Am stärksten passt dein Repo zu meinem Konzept „Commitment-Based Mobility“. Nicht weil du schon
Confidence Scores zeigst, sondern weil deine Architektur bereits in Zuständen, Alarmstufen, Active Plan,
Szenen und Auswahl einer aktiven Journey denkt statt bloß in statischen Fahrplanlisten. Du hast
AlertLevel, TileColor, SceneLogic, ActivePlanTile, eine ausgewählte Journey und eine Timeline pro Leg —
das ist schon viel näher an „Die App trägt mich durch einen Zustand“ als klassische ÖPNV-Apps.
Auch bei „Stress-Adaptive Routing“ ist ein Fundament da. Deine Szene-/Alert-Logik koppelt Dringlichkeit
an visuelle Zustände, und Cathy ist ausdrücklich als spätere reibungsarme, ND-orientierte
Persona-/Accessibility-Schicht gedacht. Das heißt: Du modellierst bereits, dass Mobilität nicht nur ein
Informationsproblem ist, sondern ein Regulationsproblem für Aufmerksamkeit, Stress und Orientierung.
Das ist ein echter Differenzierungsansatz.
Zum Konzept „Zero-UI Journey Mode“ passt deine Richtung teilweise ebenfalls. Die LegTimeline ist
semantisch sauber gedacht, beschreibt Legs in ganzer Sprache für TalkBack und reduziert pro Leg auf
das Nächste, Relevante: von, nach, Zeit, Plattform, Delay, Umstieg. Das ist deutlich besser als ein roher
Tabellen- oder Listenabwurf.
Beim Konzept „Living Station Layer“ gibt es erste Anknüpfungspunkte. Dein Datenmodell berücksichtigt
Plattform, Transfer-Wait, Delay und Multi-Leg-Verläufe. Das ist noch kein „Bahnhof als Mikrowelt“, aber
du hast die richtigen Entitäten, um daraus später situationsbezogene Stationsintelligenz zu bauen.
Und noch etwas Wichtiges: dein Modularitätsgrad ist kein Selbstzweck, sondern für diese Produktvision
tatsächlich hilfreich. Provider sind getrennt, Core-/Feature-Module sauber abgegrenzt, Wizard, Home,
Cathy und Provider-Layer sind nicht wild vermischt. Für eine App, die später zwischen „Trust Core“,
„Calm UI“, „ND Layer“, „Provider Viability“ und „Group Logic“ balancieren soll, ist das ein echter Pluspunkt.
Wo du hart daneben liegst
Der größte Widerspruch zu einer radikal neuen Transit-UX ist: dein sichtbarer Hauptflow ist aktuell noch
zu stark provider-, test- und systemzentriert statt menschenzentriert. In den Dokumenten tauchen APIKey-Screen zuerst, Provider-Probe, Provider-Testscreen, Provider-Selektion, desk-like test surface und
Naveo-artige Testoberfläche als zentrale Realität auf. Das ist für Entwicklung legitim, aber als
Produktlogik genau das Gegenteil von „Intent Stream“, „Zero-UI“ und „Vertrauensmedium“. Der Nutzer
muss zu viel vom System verstehen, statt dass das System die Komplexität absorbiert.

Ganz konkret: Das aktuelle DepartureScreen startet mit Providerwahl, Suchfeld, Suchbutton, Trefferliste,
Departures. Das ist funktional, aber UX-konzeptionell klassisch. Der Nutzer sagt nicht „Ich will stressfrei
heim“, sondern muss intern wissen: Welcher Provider? Welche Haltestelle? Jetzt aktiv suchen. Das ist
weit weg von meinem Konzept „Intent Stream statt Routenplanung“.
Ähnlich bei CatchItHomeScreen: Dort sehe ich From/To-Suche, Provider-Auswahl, Module toggeln,
Probe-/Settings-/Options-Logik und eine deskartige Struktur. Das ist aktuell eher ein Operations Cockpit
als ein stiller Mobilitätsbegleiter. Für ein internes Testlab super; für eine Verhaltensänderung beim
Nutzer eher hinderlich.
Der zweite harte Punkt: Cathy ist in der Story dein USP, aber im Produktkern noch zu spät und zu
vorsichtig platziert. In der Doku steht explizit, Cathy sei vorhanden, aber bewusst nicht Eigentümerin der
Travel Truth. Architektonisch ist das vernünftig. UX-strategisch heißt es aber auch: Die eigentliche
emotionale, reibungsarme Interaktion ist noch ein Overlay, nicht das Primärmodell. Dadurch bleibt dein
Produkt im Kern noch näher an „Transit-App mit späterem Friendly Layer“ als an „neues
Mobilitätsparadigma“.
Der dritte harte Punkt: du modellierst Dringlichkeit, aber noch nicht Verlässlichkeit. Alert-Level und TileFarben sind ein Anfang, aber das ist noch nicht dasselbe wie: „Mit 92 % Wahrscheinlichkeit kommst du
ohne neue Entscheidung an“ oder „Fallback B ist schon vorbereitet“. Deine Doku nennt sogar OfflineCaching, Geo/Reconciliation, Viability und Realtime als noch fehlend oder vorläufig — genau diese
Bausteine wären nötig, damit die App echte Commitments geben kann.
Der vierte Punkt: Stress wird bei dir aktuell eher dargestellt als optimiert. Die Scene-/Mood-Logik zeigt
Nervensystem-Bewusstsein, aber ich sehe noch kein Routing, das explizit Hektik, Umstiegsrisiko,
Komplexität oder Entscheidungslast als Optimierungsziel behandelt. Deine Journey-Modelle enthalten
Leg-, Delay- und Transfer-Daten; daraus könnte man Stresskosten rechnen. Im jetzigen Repo scheint das
aber noch nicht der Entscheidungsalgorithmus zu sein.
Der fünfte Punkt: „Living Station Layer“ fehlt fast komplett als UX-Idee. Plattform wird angezeigt, aber
nicht in Handlungsintelligenz übersetzt. Es gibt noch keine Logik wie „stell dich vorne links hin“, „dieser
Wagen ist für deinen Ausgang optimal“, „dieser Übergang ist heute ruhiger“. Dafür fehlen auch laut Repo
noch Geo-, Realtime- und Reconcile-Tiefe.
Mein kompaktes Fazit pro Konzept
1. Intent Stream:
Derzeit eher daneben. Dein System fragt noch zu stark nach Suchparametern, Providern und expliziten
Aktionen. Es lebt mehr im Modell „Suche/Abfrage/Test“ als im Modell „Absicht ausdrücken, App
übersetzt“.
2. Zero-UI Journey Mode:
Teilweise passend. Timeline, Szenen, ND-/Cathy-Denken und reduzierte Leg-Semantik gehen in diese
Richtung. Aber der Gesamtflow ist noch zu UI-lastig, zu settings-lastig und zu sichtbar technisch.

3. Stress-Adaptive Routing:
Konzeptionell nah, operativ noch nicht da. Du verstehst Stress als Designfaktor, aber noch nicht als
primäre Routing-Währung.
4. Living Station Layer:
Noch weit weg. Gute Datengrundlage, aber noch keine stationsbezogene Verhaltensführung.
5. Commitment-Based Mobility:
Hier ist dein stärkstes Potenzial. Active Plan, Alert-Logik, Viability-/Offline-/Reconcile-Denke und multileg Timeline können genau dorthin wachsen. Aktuell fehlen aber die sichtbaren Vertrauensmetriken und
die robuste Datentiefe dahinter.
Die härteste, aber fairste Einordnung in einem Satz
Du baust gerade die richtige Maschine, zeigst dem Nutzer aber noch zu sehr den Maschinenraum.
Architektur: stark.

Produktkern-Idee: interessant und ungewöhnlich.
Der aktuelle UX-Flow: noch zu testlab-/provider-/debug-zentriert, um wirklich Verhalten zu verändern.
Was ich an deiner Stelle als Nächstes tun würde
Ich würde nicht zuerst noch mehr Provider-UI bauen, sondern eine einzige radikale Schicht über alles
legen:
„Bring me home“ als Primär-CTA.
Kein Provider, kein Suchformular, kein technisches Vokabular. Nur:
Heim
Arbeit
Sichere Route
Ruhige Route
Schnell genug
Ich bin schon unterwegs
Darunter darf dein bestehender Core weiterlaufen. Aber die Oberfläche sollte von Systemwahl auf
Zustandswahl kippen. Das wäre der Moment, in dem CatchIt wirklich eigen wird. Die vorhandene
Wizard-/State-/Timeline-/Scene-Architektur ist dafür schon brauchbar.

Wenn du magst, mache ich dir als Nächstes eine brutal ehrliche Soll-Ist-Matrix für CatchIt mit den
Spalten: passt schon / kritisch / kompletter Richtungsfehler / sofort umbaubar.
