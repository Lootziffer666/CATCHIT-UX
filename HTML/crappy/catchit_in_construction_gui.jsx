export default function CatchItInConstructionGUI() {
  const sections = [
    {
      title: "Surface & State",
      items: [
        "surface_mode",
        "state_color_mode",
        "surface_density",
        "layout_axis",
        "dominance_region",
      ],
    },
    {
      title: "Anchor & Bubble",
      items: [
        "anchor_type",
        "anchor_position",
        "anchor_persistence",
        "bubble_mode",
        "bubble_scale",
        "bubble_position_mode",
        "dot_state",
      ],
    },
    {
      title: "Route / Chain / Map",
      items: [
        "route_presentation_mode",
        "route_selection_mode",
        "chain_mode",
        "map_mode",
        "map_style_mode",
        "map_frame_mode",
        "map_info_level",
        "path_mode",
      ],
    },
    {
      title: "Wizard / Search / Input",
      items: [
        "input_mode",
        "advance_mode",
        "wizard_question_type",
        "search_scope",
        "location_button",
        "suggestion_behavior",
      ],
    },
    {
      title: "Mobility Preferences",
      items: [
        "pref_walk_tolerance",
        "pref_transfer_tolerance",
        "pref_buffer_priority",
        "pref_speed_vs_calm",
        "pref_nearer_stop_vs_fewer_changes",
      ],
    },
    {
      title: "Family / Trust / Comfort",
      items: [
        "family_mode_enabled",
        "two_home_mode",
        "saved_tour_dot_mode",
        "favorite_validation_required",
        "animation_strength",
        "haptics_enabled",
        "sound_cues_enabled",
        "visual_mode",
      ],
    },
  ];

  const screens = [
    ["Main / Idle / Blue", "good", "canonical", "countdown", "triplet", "none"],
    ["Main / Ready / Green", "good", "canonical", "countdown", "triplet", "none"],
    ["Main / Adapting / Yellow", "good", "canonical", "countdown", "triplet", "none"],
    ["Main / Act Now / Orange", "good", "canonical", "instruction", "triplet_or_single", "none"],
    ["Main / Failed / Red", "good", "canonical", "failure", "suppressed", "none"],
    ["Main → Map Reveal", "crappy", "provisional", "countdown", "triplet", "reveal"],
    ["Map Focus", "crappy", "provisional", "split_top", "switchers", "focus"],
    ["Go Mode / Walk to Stop", "crappy", "provisional", "step_execution", "single_active", "go_support"],
    ["Recovery / Simple Switch", "crappy", "provisional", "recovery_decision", "alt_to_new", "none"],
    ["Recovery / Recheck nötig", "crappy", "provisional", "recovery_recheck", "likely_vs_unclear", "none"],
    ["Recovery / Kette angepasst", "crappy", "provisional", "recovery_chain_change", "stacked_segments", "none"],
    ["Wizard / Einstieg", "crappy", "provisional", "single_question", "none", "none"],
    ["Wizard / Kettenfrage", "crappy", "provisional", "single_question", "none", "none"],
    ["Wizard / Bewegungsstil", "crappy", "provisional", "single_question", "none", "none"],
    ["Chain Summary", "crappy", "provisional", "summary_segment", "stacked_segments", "none"],
    ["Quick Change", "crappy", "provisional", "quick_adjust", "option_stack", "none"],
    ["Haltestellensuche", "crappy", "provisional", "search_input", "suggestions", "none"],
  ];

  const badge = (text, tone = "default") => {
    const tones = {
      default: "bg-white/10 text-white/90 border-white/10",
      good: "bg-emerald-400/20 text-emerald-100 border-emerald-300/20",
      warn: "bg-amber-300/20 text-amber-50 border-amber-200/20",
      bad: "bg-rose-400/20 text-rose-50 border-rose-300/20",
      neutral: "bg-slate-300/20 text-slate-50 border-slate-200/20",
    };
    return (
      <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>
        {text}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl p-4 md:p-6">
        <div className="mb-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-slate-900 p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-300">
              {badge("In Construction", "warn")}
              <span>CatchIt Behilfs-Layer-2 GUI</span>
            </div>
            <h1 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">
              Nicht schön. Aber endlich ein Steuerpult statt Dateisuppe.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Diese Oberfläche ist eine provisorische Arbeits-GUI für Screen-Matrix, Parameter-Hölle und Settings, die noch keinen sauberen Platz im späteren Menüsystem haben.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {badge("good = Funktion + Optik vererbbar", "good")}
              {badge("crappy = nur Funktion vererbbar", "warn")}
              {badge("old = nur Referenz", "neutral")}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
              Aktueller Arbeitsmodus
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 font-semibold text-white">Ziel</div>
                <div>Layer 2 provisorisch steuerbar machen, ohne die hässlichen Zwischenstände zu kanonisieren.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 font-semibold text-white">Wichtig</div>
                <div>Settings hier sammeln, bis klar ist, was später in Wizard, Quick Change, Search oder Side Menu wohnen soll.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-xl md:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Screen Matrix</div>
                  <div className="mt-1 text-lg font-bold text-white">Aktive Screen-Landschaft</div>
                </div>
                {badge("Behilfs-Layer-2", "neutral")}
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <div className="grid grid-cols-[1.6fr_0.6fr_0.8fr_0.9fr_0.9fr_0.7fr] gap-2 bg-white/5 px-3 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  <div>Screen</div>
                  <div>Ordner</div>
                  <div>Visual</div>
                  <div>Anchor</div>
                  <div>Route</div>
                  <div>Map</div>
                </div>
                <div className="divide-y divide-white/10">
                  {screens.map((row) => (
                    <div key={row[0]} className="grid grid-cols-[1.6fr_0.6fr_0.8fr_0.9fr_0.9fr_0.7fr] gap-2 px-3 py-3 text-sm">
                      <div className="font-semibold text-white">{row[0]}</div>
                      <div>{row[1] === "good" ? badge("good", "good") : badge(row[1], row[1] === "crappy" ? "warn" : "neutral")}</div>
                      <div className="text-slate-300">{row[2]}</div>
                      <div className="text-slate-300">{row[3]}</div>
                      <div className="text-slate-300">{row[4]}</div>
                      <div className="text-slate-300">{row[5]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-xl md:p-5">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Offene Settings ohne finalen Platz</div>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  ["Walk tolerance", "medium", "Wizard/Profile später"],
                  ["Transfer tolerance", "allow_one", "noch kein sauberer UI-Ort"],
                  ["Buffer priority", "medium", "Wizard / Tageslage"],
                  ["Two-home mode", "false", "Family Setup später"],
                  ["Search scope", "stops_first_poi_later", "Search Settings später"],
                  ["Dot validation", "true", "Trust-Logik intern"],
                  ["Go guidance depth", "normal", "Go Settings später"],
                  ["Visual mode", "soft_gradient", "Appearance später"],
                ].map(([name, value, note]) => (
                  <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-1 text-sm font-semibold text-white">{name}</div>
                    <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-400">{value}</div>
                    <div className="text-sm text-slate-300">{note}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-4">
            {sections.map((section) => (
              <section key={section.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-xl md:p-5">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">{section.title}</div>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                      <div className="text-sm font-medium text-white">{item}</div>
                      <div className="flex gap-2">
                        {badge("provisional", "neutral")}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
