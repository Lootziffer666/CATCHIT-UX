## CatchIt State Spec Table

---

# 1. Main / Idle / Blue

| Feld                      | Definition                                                                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **State Name**            | Main / Idle / Blue                                                                                                                                                       |
| **Kurzdefinition**        | Noch kein akuter Handlungsdruck. CatchIt hält die Lage ruhig, klar und lesbar.                                                                                           |
| **Trigger**               | Route/Kette ist vorhanden, aber noch nicht operativ relevant. Keine störende Abweichung, kein unmittelbarer Entscheidungsdruck.                                          |
| **Nutzerrolle**           | Beobachten dürfen, nicht nachdenken müssen.                                                                                                                              |
| **CatchIt-Rolle**         | Überwachen, beruhigen, vorverdichten, aber nicht zuspitzen.                                                                                                              |
| **Primäre Wahrheit**      | „Es ist alles vorbereitet. Noch ist nichts akut.“                                                                                                                        |
| **Sichtbare Elemente**    | große Countdown-Bubble, 3 präferenzgebundene Optionen, ruhige Grundstruktur, minimale Zusatzinfos                                                                        |
| **Unterdrückte Elemente** | Karte, Recovery-Logik, aggressive Statussignale, detaillierte Vergleichsinfos                                                                                            |
| **Informationsdichte**    | niedrig                                                                                                                                                                  |
| **Tonalität**             | ruhig, souverän, beiläufig präsent                                                                                                                                       |
| **Visuelle Konsequenz**   | viel Luft, stabile Vertikalachse, keine operative Verdichtung                                                                                                            |
| **Darf nicht bedeuten**   | leer, unwichtig, datenarm, passiv                                                                                                                                        |
| **Kill Criteria**         | Wenn der Screen wie eine Startseite ohne Relevanz wirkt, wenn schon Hektik entsteht, wenn zu viele Details sichtbar sind, wenn die 3 Optionen wie Suchresultate aussehen |

---

# 2. Main / Ready / Green

| Feld                      | Definition                                                                                                                   |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Main / Ready / Green                                                                                                         |
| **Kurzdefinition**        | Jetzt wird es relevant, aber der Ablauf ist gut tragfähig.                                                                   |
| **Trigger**               | Ein sinnvoller Handlungszeitpunkt nähert sich. Keine problematische Änderung, keine nötige Umplanung.                        |
| **Nutzerrolle**           | Mental bereit sein, bald handeln können.                                                                                     |
| **CatchIt-Rolle**         | Relevanz erhöhen, ohne Stress zu erzeugen.                                                                                   |
| **Primäre Wahrheit**      | „Jetzt wird es wichtig, aber du bist gut aufgestellt.“                                                                       |
| **Sichtbare Elemente**    | Countdown-Bubble, 3 Optionen, leicht stärkere operative Zuspitzung, ggf. klarerer Fokus auf die plausibelste aktuelle Option |
| **Unterdrückte Elemente** | Karte, Recovery, übermäßige Vergleichstiefe                                                                                  |
| **Informationsdichte**    | niedrig bis leicht erhöht                                                                                                    |
| **Tonalität**             | zuversichtlich, vorbereitet, wach                                                                                            |
| **Visuelle Konsequenz**   | gleiche Hierarchie wie Blau, aber spürbar mehr Relevanz                                                                      |
| **Darf nicht bedeuten**   | Sieg, Optimierung, mathematisch beste Route                                                                                  |
| **Kill Criteria**         | Wenn Grün wie Alarm wirkt, wenn der Unterschied zu Blau nur dekorativ ist, wenn der Screen schon wie Exekution aussieht      |

---

# 3. Main / Adapting / Yellow

| Feld                      | Definition                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Main / Adapting / Yellow                                                                                              |
| **Kurzdefinition**        | Eine Änderung wurde erkannt. CatchIt reagiert bereits und versucht, wieder auf eine tragfähige Lage zu kommen.        |
| **Trigger**               | Verspätung, veränderte Lage, fragliche Anschlusslage, Alternativpfad wird geprüft oder vorbereitet.                   |
| **Nutzerrolle**           | Noch nicht handeln müssen, aber offen für eine Anpassung bleiben.                                                     |
| **CatchIt-Rolle**         | Kompensieren, neu bewerten, alternative tragfähige Wege vorbereiten.                                                  |
| **Primäre Wahrheit**      | „Etwas hat sich verändert. Ich kümmere mich.“                                                                         |
| **Sichtbare Elemente**    | weiter Countdown + Optionen, Hinweis auf veränderte Lage, subtile Zeichen von Anpassung, evtl. neue Passungsmarker    |
| **Unterdrückte Elemente** | harte Alarmästhetik, finale Handlungsaufforderung, Rot-Semantik                                                       |
| **Informationsdichte**    | mittel                                                                                                                |
| **Tonalität**             | aufmerksam, regulierend, kontrolliert                                                                                 |
| **Visuelle Konsequenz**   | leichte Reibung sichtbar, aber keine Panik; Änderung ist lesbar, ohne zum Problem-UI zu kippen                        |
| **Darf nicht bedeuten**   | Warnung, Scheitern, sofort handeln                                                                                    |
| **Kill Criteria**         | Wenn Gelb wie Orange aussieht, wenn es wie eine Fehlermeldung wirkt, wenn keine aktive CatchIt-Reaktion erkennbar ist |

---

# 4. Main / Act Now / Orange

| Feld                      | Definition                                                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Main / Act Now / Orange                                                                                                                   |
| **Kurzdefinition**        | Eine sinnvolle Lösung ist vorhanden, aber jetzt ist Nutzerhandlung nötig.                                                                 |
| **Trigger**               | Der Nutzer muss jetzt losgehen, wechseln, reagieren oder sich für eine noch tragfähige Option entscheiden.                                |
| **Nutzerrolle**           | Handeln. Nicht mehr nur beobachten.                                                                                                       |
| **CatchIt-Rolle**         | Interpretationslast reduzieren, nächsten Schritt glasklar machen.                                                                         |
| **Primäre Wahrheit**      | „Jetzt handeln, dann bleibt es machbar.“                                                                                                  |
| **Sichtbare Elemente**    | klare Exekutionssignale, verdichtete Informationen, nächste Handlung prominent, ggf. Raumhilfe/Karte stärker zugänglich                   |
| **Unterdrückte Elemente** | breite Vergleichsinfos, ruhige Neutralität, unnötige Nebendetails                                                                         |
| **Informationsdichte**    | mittel bis hoch, aber fokussiert                                                                                                          |
| **Tonalität**             | direkt, klar, exekutiv                                                                                                                    |
| **Visuelle Konsequenz**   | stärkere Verdichtung, weniger Optionalität, Fokus auf nächste Aktion                                                                      |
| **Darf nicht bedeuten**   | gescheitert, hoffnungslos, final verloren                                                                                                 |
| **Kill Criteria**         | Wenn Orange wie Rot aussieht, wenn der Nutzer nicht sofort versteht, was zu tun ist, wenn zu viele Optionen gleichzeitig sichtbar bleiben |

---

# 5. Main / Failed / Red

| Feld                      | Definition                                                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Main / Failed / Red                                                                                                    |
| **Kurzdefinition**        | Diese konkrete Option oder Kette ist sicher nicht mehr tragfähig.                                                      |
| **Trigger**               | Anschluss sicher verpasst, Route nicht mehr rettbar, Zeitfenster faktisch gebrochen.                                   |
| **Nutzerrolle**           | Alte Lösung loslassen. Neue Realität akzeptieren.                                                                      |
| **CatchIt-Rolle**         | Klar benennen, nicht beschönigen, neue Basis vorbereiten.                                                              |
| **Primäre Wahrheit**      | „Das klappt so nicht mehr.“                                                                                            |
| **Sichtbare Elemente**    | eindeutige Problembennung, ggf. neue nächste tragfähige Basis, minimale Rettungs-/Neustartlogik                        |
| **Unterdrückte Elemente** | kosmetische Zuversicht, weiche Sprache, unnötige Optimierungsdetails                                                   |
| **Informationsdichte**    | fokussiert niedrig bis mittel                                                                                          |
| **Tonalität**             | selten, klar, hart, ehrlich                                                                                            |
| **Visuelle Konsequenz**   | Rot nur in eindeutigen Scheiterfällen, kein dekorativer Einsatz                                                        |
| **Darf nicht bedeuten**   | knapp, fraglich, bitte beeilen                                                                                         |
| **Kill Criteria**         | Wenn Rot für bloße Unsicherheit genutzt wird, wenn es wie Orange-plus aussieht, wenn rote Zustände zu häufig auftreten |

---

# 6. Spatial Assist / Map Reveal

| Feld                      | Definition                                                                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **State Name**            | Spatial Assist / Map Reveal                                                                                |
| **Kurzdefinition**        | Der Main Screen verdichtet sich, und aus dem unteren Bereich wird räumliche Unterstützung freigelegt.      |
| **Trigger**               | Swipe-up, situativer Bedarf nach räumlicher Sicherheit, Annäherung an Exekution                            |
| **Nutzerrolle**           | Räumlich absichern, ohne den Kernscreen zu verlassen                                                       |
| **CatchIt-Rolle**         | Orientierung ergänzen, nicht übernehmen                                                                    |
| **Primäre Wahrheit**      | „Hier ist zusätzliche Raumhilfe, ohne dass du die Hauptwahrheit verlierst.“                                |
| **Sichtbare Elemente**    | gleiche Bubble-Hierarchie, gleiche Optionen, weich eingeblendete Map-Zone unten                            |
| **Unterdrückte Elemente** | Bottom Sheet, separater Kartenscreen, modulare Dashboard-Blöcke                                            |
| **Informationsdichte**    | mittel                                                                                                     |
| **Tonalität**             | ruhig, eingebettet, unterstützend                                                                          |
| **Visuelle Konsequenz**   | gleiche Oberfläche, höhere Dichte, Karte als untere Schicht                                                |
| **Darf nicht bedeuten**   | Map mode, Screenwechsel, Navigation takeover                                                               |
| **Kill Criteria**         | Wenn die Karte der Hero wird, wenn ein Bottom Sheet sichtbar ist, wenn die Bubble zur Nebenfigur schrumpft |

---

# 7. Map Focus

| Feld                      | Definition                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Spatial Assist / Map Focus                                                                                                 |
| **Kurzdefinition**        | Räumliche Orientierung wird dominanter, aber die Zeit- und Zustandswahrheit bleibt präsent.                                |
| **Trigger**               | Nutzer vertieft Raumhilfe oder nähert sich einem räumlich kritischen Moment                                                |
| **Nutzerrolle**           | Raum lesen, ohne den situativen Takt zu verlieren                                                                          |
| **CatchIt-Rolle**         | Karte lesbarer machen, aber Hauptlogik nicht aufgeben                                                                      |
| **Primäre Wahrheit**      | „Die Orientierung wird gerade wichtiger, aber die Zeit bleibt maßgeblich.“                                                 |
| **Sichtbare Elemente**    | größere Kartenfläche, klarer Fußweg/Stop-Fokus, Zeitanker weiterhin sichtbar                                               |
| **Unterdrückte Elemente** | reine Karten-App-Logik, Navigationschrome, überladene Kartendetails                                                        |
| **Informationsdichte**    | mittel                                                                                                                     |
| **Tonalität**             | fokussiert, ruhig, situativ                                                                                                |
| **Visuelle Konsequenz**   | Karte gewinnt Raum, aber nicht die komplette Identität                                                                     |
| **Darf nicht bedeuten**   | Google Maps, turn-by-turn takeover                                                                                         |
| **Kill Criteria**         | Wenn Zeitinformation verschwindet, wenn die Oberfläche wie eine Standard-Navi wirkt, wenn CatchIt-Hierarchie verloren geht |

---

# 8. Go Mode / Walk to Stop

| Feld                      | Definition                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **State Name**            | Go Mode / Walk to Stop                                                                                                                     |
| **Kurzdefinition**        | Exekutionszustand für den Weg zur Haltestelle. Denken runter, Handeln rauf.                                                                |
| **Trigger**               | Nutzer muss jetzt losgehen, um die tragfähige Option zu erreichen                                                                          |
| **Nutzerrolle**           | Gehen                                                                                                                                      |
| **CatchIt-Rolle**         | Nächsten Schritt maximal klar und belastungsarm machen                                                                                     |
| **Primäre Wahrheit**      | „Jetzt losgehen. Das ist der Weg.“                                                                                                         |
| **Sichtbare Elemente**    | verbleibende Zeit, verbleibender Weg, Zielhaltestelle, ruhige Raumhilfe                                                                    |
| **Unterdrückte Elemente** | Mehrfachvergleiche, breite Kettenübersicht, unnötige Nebendetails                                                                          |
| **Informationsdichte**    | fokussiert                                                                                                                                 |
| **Tonalität**             | direkt, ruhig, körpernah                                                                                                                   |
| **Visuelle Konsequenz**   | große Klarheit, wenig Auswahl, hohe Exekutionslesbarkeit                                                                                   |
| **Darf nicht bedeuten**   | normales Navigationstool, Sport-/Tracking-App                                                                                              |
| **Kill Criteria**         | Wenn der Screen wieder zum Analysieren einlädt, wenn zu viele alternative Optionen sichtbar bleiben, wenn die Handlung nicht eindeutig ist |

---

# 9. Go Mode / In Vehicle

| Feld                      | Definition                                                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Go Mode / In Vehicle                                                                                                                   |
| **Kurzdefinition**        | Exekutionszustand während der Fahrt. Weniger Losgehstress, mehr Begleitung und Übergangssicherheit.                                    |
| **Trigger**               | Nutzer ist eingestiegen oder befindet sich in der Transportphase                                                                       |
| **Nutzerrolle**           | Folgen, beobachten, sich rechtzeitig vorbereiten                                                                                       |
| **CatchIt-Rolle**         | Übergänge absichern, nächste Relevanz früh genug verdichten                                                                            |
| **Primäre Wahrheit**      | „Du bist unterwegs. Ich halte den nächsten sinnvollen Punkt für dich im Blick.“                                                        |
| **Sichtbare Elemente**    | nächster relevanter Schritt, verbleibende Stops/Zeit, Umstiegsrelevanz, ruhige Zustandsführung                                         |
| **Unterdrückte Elemente** | initiale Wizard-/Vergleichslogik, zu viele Planungsdetails                                                                             |
| **Informationsdichte**    | niedrig bis mittel                                                                                                                     |
| **Tonalität**             | begleitend, stabil, wachsam                                                                                                            |
| **Visuelle Konsequenz**   | weniger Hektik als Walk-State, aber klare kommende Relevanz                                                                            |
| **Darf nicht bedeuten**   | reine Fahrtstatusanzeige ohne Handlungsperspektive                                                                                     |
| **Kill Criteria**         | Wenn der Screen passiv wird, wenn der nächste relevante Schritt nicht klar lesbar ist, wenn es wie Live-Tracking ohne Entlastung wirkt |

---

# 10. Recovery / Simple Switch

| Feld                      | Definition                                                                                                                               |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Recovery / Simple Switch                                                                                                                 |
| **Kurzdefinition**        | CatchIt hat eine neue tragfähige Alternative gefunden, ohne den Nutzer unnötig zu belasten.                                              |
| **Trigger**               | ursprüngliche Option wird schlechter, aber eine einfache passende Alternative steht bereit                                               |
| **Nutzerrolle**           | zur Kenntnis nehmen, ggf. minimal mitgehen                                                                                               |
| **CatchIt-Rolle**         | Änderung erklären, ohne Drama zu erzeugen                                                                                                |
| **Primäre Wahrheit**      | „Es hat sich geändert. Ich habe eine einfache passende Alternative.“                                                                     |
| **Sichtbare Elemente**    | neue Option, knappe Begründung, klare Fortsetzung                                                                                        |
| **Unterdrückte Elemente** | große Problemkommunikation, Alternativenflut                                                                                             |
| **Informationsdichte**    | mittel                                                                                                                                   |
| **Tonalität**             | beruhigend, kompetent, kurz                                                                                                              |
| **Visuelle Konsequenz**   | Recovery als Entlastung, nicht als Fehlerzustand                                                                                         |
| **Darf nicht bedeuten**   | Fail, Alarm, unkontrollierte Lage                                                                                                        |
| **Kill Criteria**         | Wenn Recovery wie ein Defekt wirkt, wenn zu viele Wahlmöglichkeiten wieder aufgemacht werden, wenn die neue Tragfähigkeit nicht klar ist |

---

# 11. Recovery / Recheck nötig

| Feld                      | Definition                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **State Name**            | Recovery / Recheck nötig                                                                                                                         |
| **Kurzdefinition**        | CatchIt kann die Lage nicht glatt genug halten und braucht erneute Nutzeraufmerksamkeit.                                                         |
| **Trigger**               | Datenlage unsicher, Alternativen nicht belastbar genug, neue Prüfung nötig                                                                       |
| **Nutzerrolle**           | nochmal hinschauen, aktiv bestätigen oder neu bewerten                                                                                           |
| **CatchIt-Rolle**         | ehrlich Unsicherheit markieren, ohne Vertrauen zu verspielen                                                                                     |
| **Primäre Wahrheit**      | „Ich kann das gerade nicht sauber genug für dich übernehmen. Bitte prüf nochmal.“                                                                |
| **Sichtbare Elemente**    | Unsicherheitsgrund, Recheck-Aufforderung, reduzierte klare Optionen                                                                              |
| **Unterdrückte Elemente** | falsche Sicherheit, beschönigende Sprache                                                                                                        |
| **Informationsdichte**    | mittel                                                                                                                                           |
| **Tonalität**             | ehrlich, nüchtern, respektvoll                                                                                                                   |
| **Visuelle Konsequenz**   | nicht alarmistisch, aber klar von Simple Switch getrennt                                                                                         |
| **Darf nicht bedeuten**   | generischer Fehler, technischer Defekt, bloßes Gelb                                                                                              |
| **Kill Criteria**         | Wenn unklar bleibt, warum Recheck nötig ist, wenn der Nutzer keine klare nächste Handlung erkennt, wenn der Zustand sich wie ein App-Bug anfühlt |

---

# 12. Recovery / Kette angepasst

| Feld                      | Definition                                                                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Recovery / Kette angepasst                                                                                                       |
| **Kurzdefinition**        | Eine Änderung betrifft nicht nur einen Abschnitt, sondern den weiteren Ablauf der Kette.                                         |
| **Trigger**               | Zwischenstopp, Rückweg, Folgeverpflichtung oder Zeitkorridor werden durch Änderung mitbeeinflusst                                |
| **Nutzerrolle**           | neue Gesamtlage verstehen, aber nicht alles neu planen müssen                                                                    |
| **CatchIt-Rolle**         | Kettenfolge neu sortieren und als weiter tragfähig darstellen                                                                    |
| **Primäre Wahrheit**      | „Die Änderung betrifft mehr als diesen einen Schritt. Ich habe die Kette angepasst.“                                             |
| **Sichtbare Elemente**    | knappe Kettenfortsetzung, geänderte Folgepunkte, klare neue Logik                                                                |
| **Unterdrückte Elemente** | Planungschaos, vollständige Neuberechnung als Textwand                                                                           |
| **Informationsdichte**    | mittel bis hoch, aber strukturiert                                                                                               |
| **Tonalität**             | ordnend, souverän, entlastend                                                                                                    |
| **Visuelle Konsequenz**   | Kettenhaftigkeit wird sichtbar, ohne Projektplan-Charakter                                                                       |
| **Darf nicht bedeuten**   | Voll-Neuplanung durch den Nutzer                                                                                                 |
| **Kill Criteria**         | Wenn die Kette nicht visuell verständlich wird, wenn zu viel Text nötig ist, wenn es wie ein kompliziertes Planungstool aussieht |

---

# 13. Wizard / Einstieg

| Feld                      | Definition                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Wizard / Einstieg                                                                                                                     |
| **Kurzdefinition**        | CatchIt erklärt seinen Nutzen über Vorhaben und Alltag, nicht über Settings.                                                          |
| **Trigger**               | Erstnutzung oder relevante Neueinrichtung                                                                                             |
| **Nutzerrolle**           | Vorhaben und Bewegungsrealität grob mitteilen                                                                                         |
| **CatchIt-Rolle**         | Vertrauen aufbauen, nicht wie Setup wirken                                                                                            |
| **Primäre Wahrheit**      | „Ich will verstehen, wie du unterwegs wirklich funktionieren musst.“                                                                  |
| **Sichtbare Elemente**    | einfache, lebensnahe Einstiegsfrage, klare Nutzenkommunikation                                                                        |
| **Unterdrückte Elemente** | Fachparameter, Schalterfriedhof, technische Begriffe                                                                                  |
| **Informationsdichte**    | niedrig                                                                                                                               |
| **Tonalität**             | freundlich, konkret, alltagsnah                                                                                                       |
| **Visuelle Konsequenz**   | Wizard fühlt sich wie Hilfe an, nicht wie Konfiguration                                                                               |
| **Darf nicht bedeuten**   | Onboarding-Showcase, Formularstrecke                                                                                                  |
| **Kill Criteria**         | Wenn es wie Settings aussieht, wenn zu viele Entscheidungen auf einmal verlangt werden, wenn der Produktnutzen nicht sofort klar wird |

---

# 14. Wizard / Kettenfrage

| Feld                      | Definition                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Wizard / Kettenfrage                                                                                                       |
| **Kurzdefinition**        | CatchIt klärt, ob es um einen einzelnen Weg oder einen Tages-/Pflichtablauf mit Folgepunkten geht.                         |
| **Trigger**               | Nach Wizard-Einstieg oder bei erkennbarer Mehrfachlogik                                                                    |
| **Nutzerrolle**           | Art des Vorhabens beschreiben                                                                                              |
| **CatchIt-Rolle**         | Kettenlogik früh und einfach erfassen                                                                                      |
| **Primäre Wahrheit**      | „Geht es nur um einen Weg, oder hängt heute mehr daran?“                                                                   |
| **Sichtbare Elemente**    | alltagsnahe Frageform, einfache Auswahl-/Antwortstruktur                                                                   |
| **Unterdrückte Elemente** | Flowcharts, komplexe Multi-Step-Builder                                                                                    |
| **Informationsdichte**    | niedrig                                                                                                                    |
| **Tonalität**             | pragmatisch, lebensnah                                                                                                     |
| **Visuelle Konsequenz**   | Kettenlogik erscheint als normaler Alltag, nicht als Sonderfunktion                                                        |
| **Darf nicht bedeuten**   | Projektplanung, Business-Workflow                                                                                          |
| **Kill Criteria**         | Wenn Nutzer die Frage nicht sofort versteht, wenn Kette technisch statt lebensnah wirkt, wenn die UI zu builder-artig wird |

---

# 15. Wizard / Bewegungsstil / Tageslage

| Feld                      | Definition                                                                                                                                           |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **State Name**            | Wizard / Bewegungsstil / Tageslage                                                                                                                   |
| **Kurzdefinition**        | Präferenzen und aktuelle Belastungsfaktoren werden so erhoben, dass spätere Vorschläge realistisch passen.                                           |
| **Trigger**               | nach Kettenfrage oder bei relevanter Profilbildung                                                                                                   |
| **Nutzerrolle**           | Bewegungsrealität und Tagesbesonderheiten angeben                                                                                                    |
| **CatchIt-Rolle**         | Reibungsprofil statt Settings-Liste erfassen                                                                                                         |
| **Primäre Wahrheit**      | „Was heute oder grundsätzlich deine Bewegung verändert, soll mitgedacht werden.“                                                                     |
| **Sichtbare Elemente**    | einfache Auswahlfelder, alltagsnahe Formulierungen, kind-/stress-/geh-/wartebezogene Faktoren                                                        |
| **Unterdrückte Elemente** | technische Filter, schwere Parameterbegriffe                                                                                                         |
| **Informationsdichte**    | niedrig bis mittel                                                                                                                                   |
| **Tonalität**             | empathisch, praktisch, unprätentiös                                                                                                                  |
| **Visuelle Konsequenz**   | kein Klinik-/Assessment-Gefühl, keine Settings-Hölle                                                                                                 |
| **Darf nicht bedeuten**   | Diagnostik, Profiling, Formularprüfung                                                                                                               |
| **Kill Criteria**         | Wenn die Fragen klinisch oder technisch wirken, wenn Antworten später nicht sichtbar auf Vorschläge einzahlen, wenn es wie versteckte Settings wirkt |

---

# 16. Chain Summary

| Feld                      | Definition                                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **State Name**            | Chain Summary                                                                                                                                          |
| **Kurzdefinition**        | CatchIt zeigt, was es aus Vorhaben und Präferenzen verstanden hat und wie daraus tragfähige Vorschläge entstehen.                                      |
| **Trigger**               | Abschluss des Wizards oder relevante Neujustierung                                                                                                     |
| **Nutzerrolle**           | Verstanden fühlen, ggf. leicht korrigieren                                                                                                             |
| **CatchIt-Rolle**         | Verarbeitetes Alltagsmodell sichtbar machen                                                                                                            |
| **Primäre Wahrheit**      | „So denke ich deinen Ablauf und deine Bewegungsrealität mit.“                                                                                          |
| **Sichtbare Elemente**    | ruhige Kettenübersicht, Präferenzhinweise, verständliche Zusammenfassung                                                                               |
| **Unterdrückte Elemente** | Settings-Review-Look, rohe Parameterlisten                                                                                                             |
| **Informationsdichte**    | mittel                                                                                                                                                 |
| **Tonalität**             | ordnend, vertrauensbildend                                                                                                                             |
| **Visuelle Konsequenz**   | Summary wirkt wie Verständnis, nicht wie Konfiguration                                                                                                 |
| **Darf nicht bedeuten**   | „Bitte kontrollieren Sie 27 Optionen“                                                                                                                  |
| **Kill Criteria**         | Wenn die Summary wie ein Einstellungsmenü aussieht, wenn kein klarer Bezug zu späteren Vorschlägen entsteht, wenn zu viel technische Sprache auftaucht |

---

# 17. Quick Change / Snack oder späterer Bus

| Feld                      | Definition                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **State Name**            | Quick Change                                                                                                                               |
| **Kurzdefinition**        | Spontane Abweichung wird in die Kette integriert, ohne alles zu zerstören.                                                                 |
| **Trigger**               | Nutzer möchte kurz etwas einbauen, verschieben oder einen späteren Bus nehmen                                                              |
| **Nutzerrolle**           | Abweichung äußern, nicht neu planen                                                                                                        |
| **CatchIt-Rolle**         | Flexibel umsortieren, Tragfähigkeit erhalten                                                                                               |
| **Primäre Wahrheit**      | „Eine kleine Änderung muss nicht den ganzen Ablauf kaputtmachen.“                                                                          |
| **Sichtbare Elemente**    | kleine Änderungsoption, neue plausible Kettenfortsetzung, knappe Auswirkung                                                                |
| **Unterdrückte Elemente** | Voll-Neuplanung, lange Listen, komplexe Optionenbäume                                                                                      |
| **Informationsdichte**    | mittel                                                                                                                                     |
| **Tonalität**             | flexibel, gelassen, lösungsorientiert                                                                                                      |
| **Visuelle Konsequenz**   | Quick Change fühlt sich leicht an, nicht wie ein großer Eingriff                                                                           |
| **Darf nicht bedeuten**   | kompletter Rebuild, chaotische Re-Optimierung                                                                                              |
| **Kill Criteria**         | Wenn die Änderung zu viel UI-Komplexität erzeugt, wenn der Nutzer wieder alles entscheiden muss, wenn Kettenrobustheit nicht sichtbar wird |

---

## Kompakte Zusatzregel für alle States

| Feld                 | Regel                                                                         |
| -------------------- | ----------------------------------------------------------------------------- |
| **Invarianz**        | Countdown-/Zustandslogik bleibt fast immer Vertrauensanker                    |
| **Verdichtung**      | Mehr Relevanz = nicht automatisch mehr Module, sondern gezieltere Lesbarkeit  |
| **Map-Prinzip**      | Karte ist Unterstützung, nie Standard-Hero                                    |
| **Recovery-Prinzip** | Erst CatchIt trägt die Last, dann der Nutzer, erst zuletzt die harte Wahrheit |
| **Wizard-Prinzip**   | Vorhaben und Reibung erfassen, niemals wie Settings-Dschungel wirken          |

## Schnellformel für Drift-Erkennung

Wenn ein Screen aussieht wie:

* normale Transit-App,
* Karten-App,
* Dashboard,
* Ergebnisliste,
* Formular,
* Error-Center,

dann ist er von CatchIt weggedriftet.
