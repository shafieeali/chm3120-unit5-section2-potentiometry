window.APP_DATA = {
  "course": "CHM3120",
  "unit": "Unit 5 - Section 2",
  "title": "Potentiometry and Ion-Selective Electrodes",
  "repo": "chm3120-unit5-section2-potentiometry",
  "kind": "potentiometry",
  "slideCount": 54,
  "chunks": [
    {
      "id": "chunk1",
      "label": "Potentiometry Foundations",
      "range": "1-11",
      "start": 1,
      "end": 11,
      "goals": [
        "Use the ISE Nernst response",
        "Build calibration from potential data",
        "Interpret pH and activity effects"
      ],
      "slides": [
        {
          "number": 1,
          "title": "CHM 3120: Introduction to Analytical Chemistry",
          "text": "CHM 3120: Introduction to Analytical Chemistry\nUnit 5 - Section 2:\nPotentiometry\nChapters 19\nS UMM ER 2 0 2 6\nDR . ALI SH AFI EE\nali.shafiee@ufl.edu"
        },
        {
          "number": 2,
          "title": "Electroanalytical Methods:",
          "text": "Electroanalytical Methods:\nClassification\nPotentiometry belongs to static (no-current) interfacial\nmethods → we measure potential, not current.\n2\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 3,
          "title": "What Is Potentiometry?",
          "text": "What Is Potentiometry?\n• Potentiometry is a static (no-current) electrochemical technique.\n• It measures the potential difference between two electrodes in an\nelectrochemical cell under open-circuit conditions (no current flow).\n• The measured potential is related to the activity of ions in solution through the\nNernst equation.\n• The pH meter is the most common example of a potentiometric instrument,\nbased on a glass-membrane electrode selective to H⁺ activity.\n• Potentiometric methods are simple, reliable, and widely used for ion-selective\nmeasurements in analytical chemistry.\n• Potential varies logarithmically with ion activity (Nernst relationship).\n3\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 4,
          "title": "Measuring Potentials: From Galvanic to",
          "text": "Measuring Potentials: From Galvanic to\nPotentiometric Cells\nIn a galvanic cell: electrons flow — current In potentiometry: no current flows — only\nis measured (dynamic system). the potential difference is measured.\n4\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 5,
          "title": "Components and Cell Potential Equation",
          "text": "Components and Cell Potential Equation\nEvery potentiometric measurement consists of three\npotential contributions:\nBy convention, the reference electrode is\nThe indicator (working) electrode is\nalways treated as the left-hand electrode\nimmersed in the analyte solution and\nin potentiometric measurements.\ndevelops a potential that depends on\nthe activity of the target ion.\nThe salt bridge (or junction) connects the two half-cells, allowing charge\nbalance while minimizing ion mixing.\nIt introduces a small liquid junction potential that cannot be fully eliminated.\n5\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 6,
          "title": "Components and Cell Potential Equation",
          "text": "Components and Cell Potential Equation\nReference electrode | salt bridge | analyte solution | indicator (working) electrode\n𝐸 𝐸 𝐸\n𝑟𝑒𝑓 𝑗 𝑖𝑛𝑑\n𝐸 = 𝐸 − 𝐸 − 𝐸\n𝑐𝑒𝑙𝑙 𝑖𝑛𝑑 𝑟𝑒𝑓 𝑗\n• The measured cell potential (𝐸 ) is the difference between the indicator and reference electrode\n𝑐𝑒𝑙𝑙\npotentials, corrected for the small liquid junction potential.\n• 𝐸 is often small enough to be neglected, but it may cause minor systematic errors.\n𝑗\n• The magnitude of 𝐸 depends primarily on the activity of ions to which the indicator electrode is\n𝑐𝑒𝑙𝑙\nselective.\n6\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    },
    {
      "id": "chunk2",
      "label": "Electrodes and Cell Potential",
      "range": "12-22",
      "start": 12,
      "end": 22,
      "goals": [
        "Use the ISE Nernst response",
        "Build calibration from potential data",
        "Interpret pH and activity effects"
      ],
      "slides": [
        {
          "number": 12,
          "title": "What Is Activity? Why Not Just Concentration?",
          "text": "What Is Activity? Why Not Just Concentration?\nDiscussed in Chapter 8B Activity Coefficients\nActivity accounts for ionic interactions: In real solutions, ions interact with each other, so their effective\nconcentration (activity) is not equal to their molar concentration.\n𝑎 = [𝑋]𝛾\n𝑋 𝑋\n▪ At very low ionic strength: γ ≈ 1 → activity ≈ concentration\n▪ As ionic strength increases: effective concentration decreases→ γ decreases\n▪ Higher charge → larger deviation (e.g., Al3+, Fe(CN) 4-)\n6\n2\n0.51𝑧 𝜇\n−log 𝛾 = 𝑋\nThe Debye–Hückel equation relates the activity coefficient to ionic strength:\n𝑋\n1+3.3𝑎 𝜇\n𝑋\nfor very low ionic strength (𝜇 < 0.01 𝑀): Denominator ≈ 1 → limiting law:\n2\n−log 𝛾 ≈ 0.51𝑧 𝜇\n𝑋 𝑋\n▪ Activity coefficient γ decreases as ionic strength increases\n𝑎 : activity\n𝑋\n▪ Effect is stronger for highly charged ions 𝑋 : molar concentration\n𝛾 : activity coefficient (dimensionless)\n▪ Neutral molecules: 𝛾 ≈ 1 (almost no effect) 𝑋\n𝑧 = charge of the ion\n𝑋\n𝜇 = ionic strength\n12\nCHM3120 | Ali Shafiee | UF 𝑎 = effective hydrated ion diameter (nm)\n𝑋"
        },
        {
          "number": 13,
          "title": "Why Activity Matters in Electrochemistry",
          "text": "Why Activity Matters in Electrochemistry\n0.0592\nNernst equation uses activity 𝐸 = 𝐸∘ − log 𝑎 𝑠𝑖𝑛𝑐𝑒 𝑎 = [𝑋]𝛾\n𝑛\nElectrode potentials depend on both concentration AND ionic strength.\nReference electrodes rely on constant ionic strength\n∘\nExample: Ag/AgCl 𝐸 = 𝐸 − 0.0592log 𝑎\n−\n𝐴𝑔𝐶𝑙/𝐴𝑔 𝐶𝑙\nWith saturated KCl: 𝐶𝑙− fixed → 𝛾 approximately constant → activity is constant, giving a stable\n−\n𝐶𝑙\nreference potential.\nWhy E°′ appears: E°′ (formal potential) includes the effect of activity coefficients at a defined ionic strength\nFormal potentials for Fe3+/Fe2+half-reaction in five different solvents.\nHalf reaction E° (V) E°′ (V)\n0.70 in 1 M HCl\n0.767 in 1 M HClO\n4\nFe³⁺ + e⁻ ⇌ Fe²⁺ 0.771 0.746 in 1 M HNO\n3\n0.68 in 1 M H SO\n2 4\n0.44 in 0.3 M H PO\n3 4 13\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 14,
          "title": "Example: Activity of Cl⁻ in a Saturated KCl Ag/AgCl Electrode",
          "text": "Example: Activity of Cl⁻ in a Saturated KCl Ag/AgCl Electrode\nWe can determine the activity a₍ ₎ from the measured E of the saturated Ag/AgCl\nCl⁻\nreference electrode.\nHalf-reaction: 𝐴𝑔𝐶𝑙(𝑠) + 𝑒⁻ ⇌ 𝐴𝑔(𝑠) + 𝐶𝑙⁻(𝑎𝑞)\nNernst equation: 𝐸 = 𝐸° − 0.05916 log(𝑎₍ ₎)\n𝐶𝑙⁻\nKnown values at 25 °C:\nSolve for activity: 0.197 = 0.222 − 0.059 log(𝑎₍ ₎) → 𝑎₍ ₎ = 2.65\n𝐶𝑙⁻ 𝐶𝑙⁻\nCompare to formal concentration: 𝑎 = 𝛾 × 𝑐 → 𝛾 = 2.65/4.79 → 𝛾 ≈ 0.55\nEven though [Cl⁻]=4.79 M, it “behaves” like it’s only 2.6 M because γ < 1.\n14\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 15,
          "title": "Example: Activity of Cl⁻ in a Saturated KCl Ag/AgCl Electrode",
          "text": "Example: Activity of Cl⁻ in a Saturated KCl Ag/AgCl Electrode\n2\n−0.51𝑧 𝜇\nExtended Debye–Hückel Equation: 𝑙𝑜𝑔 𝛾 =\n1+(𝛼 𝜇/305)\nKnown values for Cl⁻ in saturated KCl: z = −1; μ ≈ 4.79(≈ [KCl], 1:1 electrolyte); α ≈ 300 pm\n−0.51(1)2 4.79\n𝑙𝑜𝑔 𝛾 = → 𝛾 ≈ 0.44\n300 4.79\n1 +\n305\nDebye–Hückel: γ ≈ 0.44 vs. From activity measurement: γ ≈ 0.55\nDebye–Hückel becomes inaccurate at high ionic strength (μ > 0.1 M). Saturated KCl is very concentrated, so activity must be obtained\nexperimentally.\nWhat does all these mean?\n• Activity coefficients must be considered in electrochemistry, especially when dealing with reference electrodes\nlike Ag/AgCl or calomel, where Cl⁻ concentration strongly affects the electrode potential.\n• Saturated KCl fixes both [Cl−] and γ −, giving a constant aCl−\nCl\n• A constant activity produces a stable and reproducible reference potential\n15\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 16,
          "title": "Example: Ag/AgCl Reference + Fe3+/Fe2+ System",
          "text": "Example: Ag/AgCl Reference + Fe3+/Fe2+ System\n− − o\nReference electrode: AgCl s + e ⇌ Ag s + Cl E = 0.199 V\n3+ − 2+ o\nIndicator electrode (responds to analyte): Fe + e ⇌ Fe E = 0.771 V\nReference\nIndicator\nElectrode\nElectrode\nReference Indicator\nElectrode Electrode\n• The voltmeter measures the difference between these two electrode (half cell) potentials.\n• The reference electrode provides a fixed, stable potential, while the indicator electrode responds to the 𝐹𝑒3+/𝐹𝑒2+ ratio.\n16\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 17,
          "title": ".",
          "text": ".\n− 2+ 3+\n𝐴𝑔| 𝐴𝑔𝐶𝑙(𝑠), 𝐶𝑙 (𝑎𝑞)|| 𝐹𝑒 (𝑎𝑞), 𝐹𝑒 (𝑎𝑞) | 𝑃𝑡 (𝑠)\n𝐹𝑒 3+ + 𝑒 − ⇌ 𝐹𝑒 2+ 𝐸 𝑜 = 0.771 𝑉\n𝐴𝑔𝐶𝑙 𝑠 + 𝑒 − ⇌ 𝐴𝑔 𝑠 + 𝐶𝑙 − 𝐸 𝑜 = 0.199 𝑉\n3+ − 2+\n𝐹𝑒 + 𝐴𝑔 𝑠 + 𝐶𝑙 ⇌ 𝐴𝑔𝐶𝑙 𝑠 + 𝐹𝑒\n𝐸 = 𝐸 − 𝐸 − 𝐸\n𝑐𝑒𝑙𝑙 𝑖𝑛𝑑 𝑟𝑒𝑓 𝑗\n0.0592 𝑉\n°\n𝐸 = 𝐸 − 𝑙𝑜𝑔𝑄\n𝑐𝑒𝑙𝑙 𝑐𝑒𝑙𝑙\n𝑛\n2+\n𝐹𝑒\n−\n𝐸 = 0.771 − 0.0592𝑙𝑜𝑔 − 0.199 − 0.059𝑙𝑜𝑔 𝐶𝑙\n𝐹𝑒3+\n17\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    },
    {
      "id": "chunk3",
      "label": "Activity and Nernst Equation",
      "range": "23-33",
      "start": 23,
      "end": 33,
      "goals": [
        "Use the ISE Nernst response",
        "Build calibration from potential data",
        "Interpret pH and activity effects"
      ],
      "slides": [
        {
          "number": 23,
          "title": "Limitations of First-Kind Electrodes",
          "text": "Limitations of First-Kind Electrodes\nWhy they are rarely used in potentiometry\n• Poor selectivity: Respond to other easily reduced metal ions.\n(Example: Cu electrode also responds to Ag⁺ → cannot determine Cu2+ accurately.)\n• Restrictions based on pH: Many metals dissolve in acids or bases → limited working range.\n• Oxygen effects: Some metals (e.g., Fe, Cr, Co, Ni) oxidize in air → unreliable potentials.\nMust deaerate (Bubble N or Ar gas) solutions → inconvenient.\n2\n• Irregular slopes: Experimental slopes often deviate significantly from the ideal −0.0592/n\nWhere they are used\n• Only a few first-kind systems are reliable:\n• Ag/Ag+, Hg/Hg2+\n• Cu/Cu2+, Zn/Zn2+, Cd/Cd2+\n• Bi3+/Bi, Tl+/Tl, Pb2+/Pb (in deaerated solutions)\n23\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 24,
          "title": "Electrodes of the Second Kind",
          "text": "Electrodes of the Second Kind\nA second-kind electrode is a metal coated with a sparingly soluble salt of that same metal. Its potential\nresponds to the anion associated with that salt.\nExample:\n0.0592\n°\nNernst Equation 𝐸 = 𝐸 − 𝑙𝑜𝑔 𝑎\nind 𝐴𝑔𝐶𝑙/𝐴𝑔 𝐶𝑙 −\n1\n°\nor using 𝑝𝐶𝑙 = log 𝑎 : 𝐸 = 𝐸 + 0.0592 𝑝𝐶𝑙\n𝐶𝑙 − ind 𝐴𝑔𝐶𝑙/𝐴𝑔\nKey Features\nResponds to anion, not the metal ion\n•\nPositive slope +59 mV per decade (for n=1, at 25°C)\n•\nVery reproducible and widely used\n•\n(Ag/AgCl reference electrode is the classic example)\n24\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 25,
          "title": "Inert Metallic Electrodes",
          "text": "Inert Metallic Electrodes\n• Made of chemically inert conductors such as Pt, Au, Pd, or carbon\n• Do not form their own ions or sparingly soluble salts\n• Provide only a surface for electron transfer\n• Used when the analyte is a redox couple in solution (no metal electrode possible)\nHow they work\nThe metal surface establishes equilibrium with a solution redox pair, for example:\n𝑂𝑥 + 𝑛𝑒− ⇌ 𝑅𝑒𝑑\nThe potential depends solely on the activities of the oxidized and reduced forms:\n0.0592 𝑎\n𝑂𝑥\n𝐸 = 𝐸0 + 𝑙𝑜𝑔 (using Ox/Red form → positive sign)\nind\n𝑛 𝑎\n𝑅𝑒𝑑\nThere is no metal ion in the Nernst equation: the electrode is just an electron conduit.\n25\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 26,
          "title": "Inert Metallic Electrodes",
          "text": "Inert Metallic Electrodes\nUnlike first- and second-kind electrodes, inert metallic electrodes do not have a fixed slope sign. The sign\ndepends on how the redox ratio is written:\n0.0592\nIf x-axis = log(Ox/Red) →+\n(using Ox/Red form → positive sign)\n𝑛\nIn all cases, the magnitude of the slope\n0.0592\nIf x-axis = log(Red/Ox) → − is 0.0592/n V per decade at 25 °C.\n𝑛\n2+\n𝐹𝑒\nIn the Fe3+/Fe2+ (Pt) example we defined: 𝑄 = So: 𝐸 = 𝐸0 − 0.0592𝑙𝑜𝑔 𝑄\n𝐹𝑒3+\nThis gave a –59 mV/decade slope in the calibration plot.\nThe slope was negative because of the definition of Q, not because Pt behaves like a “negative-slope electrode.\nWhere inert electrodes are used\n• Redox titrations (Fe2+/Fe3+, Ce3+/Ce4+, Cr2+/Cr3+)\n• Monitoring dissolved oxygen (Pt/O )\n2\n• Any system with no suitable metal-metal ion equilibrium\n26\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 27,
          "title": "Ion Selective Electrodes (ISE)",
          "text": "Ion Selective Electrodes (ISE)\nMembrane electrodes are sometimes called p-ion electrodes because the data obtained from them are\nusually presented as p-functions, such as pH, pCa, or pNO .\n3\nIon-selective electrodes are used to monitor many different chemical\nspecies.\nNo redox reaction occurs at the membrane (the potential arises from\nion-selective partitioning).\nA thin membrane is configured to bind only a single ion of interest.\nTwo reference electrodes measure the potential difference across the\nmembrane.\nThere are many physical constructions and chemical mechanisms, but\nonly a few types will be examined:\n• Liquid-Membrane Electrodes\n• Crystalline-Membrane Electrodes\n• The Glass Electrode for Measuring pH\n• Glass Electrodes for Other Cations\n27\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 28,
          "title": "Liquid-Membrane Electrodes",
          "text": "Liquid-Membrane Electrodes\nDeveloped for direct potentiometric measurement of polyvalent cations and certain anions.\nBasic Structure\n• A conducting membrane that selectively binds a specific ion\n(e.g., Ca2+).\n• An internal solution containing a fixed concentration of that\nion.\n• A silver electrode coated with AgCl serving as the internal\nreference.\nThe potential develops at the interface between:\n• the solution containing the analyte, and\n• a liquid ion exchanger that selectively binds the analyte ion.\n28\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    },
    {
      "id": "chunk4",
      "label": "Ion-Selective Electrodes",
      "range": "34-44",
      "start": 34,
      "end": 44,
      "goals": [
        "Use the ISE Nernst response",
        "Build calibration from potential data",
        "Interpret pH and activity effects"
      ],
      "slides": [
        {
          "number": 34,
          "title": ".",
          "text": ".\nsaturated calomel electrode\n• The internal solution has a fixed composition:\n• The analyte solution contains • The glass membrane separates\n• hydronium activity a\nhydronium ions with activity a . the external analyte solution from 2\n1 • chloride concentration [Cl⁻] = 0.1 M\n• This solution contacts the outer the internal reference solution.\n• solid AgCl (sat’d) present\nsurface of the glass membrane, • Two boundary potentials appear\n• This solution is in contact with a silver wire coated\ncreating a boundary potential across the membrane:\nwith AgCl.\nlabeled E . • E at the outer surface\n1 1 • silver/silver chloride electrode serves as the internal\n• E at the inner surface\n2 reference electrode for the glass electrode.\n34\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 35,
          "title": "What Controls the Potential?",
          "text": "What Controls the Potential?\nWhere the Measured Potential Comes From\n• The activity of hydrogen ions in the analyte solution establishes an interfacial equilibrium that gives rise to\nthe potential at the outer glass surface.\n• The difference in H+ activity across the membrane produces the potential difference measured by the pH\nmeter. This leads to a Nernst-type relationship:\n𝑎\n𝑜𝑢𝑡\n𝐸 ∝ log\n𝑎\n𝑖𝑛\nFunction of the Two Reference Electrodes\n• The internal and external reference electrodes only provide electrical contact to each side of the glass\nmembrane.\n• Their potentials are essentially constant, except for the junction potential, which changes slightly with the\nanalyte composition.\n• The potentials of the reference electrodes are set by the redox couples they contain.\n35\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 36,
          "title": "Single-Probe Glass Electrodes",
          "text": "Single-Probe Glass Electrodes\n• In a typical pH meter the glass electrode and its Ag/AgCl internal\nreference electrode are placed at the center of a cylindrical probe.\n• Surrounding them is ...the external reference electrode (typically\nAg/AgCl in KCl filling solution).\n• The external reference is less obvious than in the dual-probe setup,\nbut the combination design is more convenient and can be\nmade much smaller.\n36\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 37,
          "title": "Glass Composition Matters",
          "text": "Glass Composition Matters\n• Glass membranes used in pH electrodes are made from special silicate glasses.\n• Corning 015 glass (widely used) contains: 22% Na O, 6% CaO, 72% SiO\n2 2\n• These membranes show excellent specificity to H+ up to pH ≈ 9.\n• At higher pH, the membrane becomes somewhat responsive to Na+.\n• Other glass formulations replace Na+/Ca2+ with Ba2+ or Li+ to improve selectivity and lifetime.\nHydration Is Required\n• Both surfaces of the glass membrane must\nbe hydrated before the electrode works.\n• Non-hygroscopic glasses show no pH response.\n• Even hygroscopic glasses lose sensitivity after\ndehydration (e.g., storage over desiccant), but\nregain it when soaked in water.\n37\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 38,
          "title": "Boundary Potentials Across the Glass Membrane",
          "text": "Boundary Potentials Across the Glass Membrane\n𝑎\n1\n𝐸 = 𝐸 − 𝐸 = 0.0592 log\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1 2\n𝑎\n2\nNa+\nThe hydrogen ion activity of the internal\nsolution, a , is constant (𝐿′ = −0.0592 log 𝑎 )\n2 2\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 + 0.0592 log 𝑎\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1\nOr\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 − 0.0592 log 𝑝𝐻\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒\n38\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 39,
          "title": ".",
          "text": ".\n𝑎\n1\n𝐸 = 𝐸 − 𝐸 = 0.0592 log\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1 2\n𝑎\n2\nThe hydrogen ion activity of the internal\nsolution, a2, is constant (𝐿′ = −0.0592 log 𝑎 )\n2\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 + 0.0592 log 𝑎\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1\nOr\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 − 0.0592 log 𝑝𝐻\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒\n39\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    },
    {
      "id": "chunk5",
      "label": "Calibration and Practice",
      "range": "45-54",
      "start": 45,
      "end": 54,
      "goals": [
        "Use the ISE Nernst response",
        "Build calibration from potential data",
        "Interpret pH and activity effects"
      ],
      "slides": [
        {
          "number": 45,
          "title": "Potentiometry Measurement",
          "text": "Potentiometry Measurement"
        },
        {
          "number": 46,
          "title": "Potentiometry Measurement: Direct Potentiometry",
          "text": "Potentiometry Measurement: Direct Potentiometry\nThe simplest potentiometric measurement compares the potential of an indicator electrode in the analyte\nsolution with its potential in standard solutions of known analyte concentration.\nIf the electrode responds selectively to the analyte, no separation steps are required.\n0.0592\n𝐹𝑜𝑟 𝑎 𝑐𝑎𝑡𝑖𝑜𝑛 − 𝑠𝑒𝑙𝑒𝑐𝑡𝑖𝑣𝑒 𝑒𝑙𝑒𝑐𝑡𝑟𝑜𝑑𝑒: 𝐸 = 𝐶𝑜𝑛𝑠𝑡𝑎𝑛𝑡 − 𝑝𝐴\n𝑐𝑒𝑙𝑙\n𝑛\nAs the concentration (activity) of cation A increases: 𝑝𝐴 = – log 𝑎 decreases.\n𝐴\nTherefore, E increases with increasing cation concentration (Since pA decreases as concentration\ncell\nincreases, the negative sign causes 𝐸 to increase).\n𝑐𝑒𝑙𝑙\nInstrument Polarity Convention\n• Because this trend is opposite to the familiar pH scale, instrument manufacturers typically reverse the\nmeter leads for cation-sensitive electrodes (such as glass electrodes).\n• This ensures that the meter reading increases as pA increases, which corresponds to decreasing analyte\nconcentration.\n46\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 47,
          "title": "Potentiometry Measurement: Direct Potentiometry",
          "text": "Potentiometry Measurement: Direct Potentiometry\nThe simplest potentiometric measurement compares the potential of an indicator electrode in the analyte\nsolution with its potential in standard solutions of known analyte concentration.\nIf the electrode responds selectively to the analyte, no separation steps are required.\n0.0592\n𝐹𝑜𝑟 𝑎 𝑎𝑛𝑖𝑜𝑛 − 𝑠𝑒𝑙𝑒𝑐𝑡𝑖𝑣𝑒 𝑒𝑙𝑒𝑐𝑡𝑟𝑜𝑑𝑒: 𝐸 = 𝐶𝑜𝑛𝑠𝑡𝑎𝑛 − 𝑝𝐴\n𝑐𝑒𝑙𝑙\n𝑛\nAs the anion concentration (activity) 𝑎 increases, 𝑝𝐴 = − log 𝑎 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑒𝑠\n− −\n𝐴 𝐴\nBecause of the negative sign, a decrease in pA causes an increase in E ​.\ncell\nTherefore: Higher anion concentration → higher cell potential.\nInstrument Convention\n• For anion-sensitive electrodes, the normal polarity gives intuitive readings (higher meter reading\n(higher pA) → lower analyte concentration), so no lead reversal is required.\n• Result: The meter reading increases when analyte concentration decreases (just like the pH scale).\n47\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 48,
          "title": "The Electrode-Calibration Method",
          "text": "The Electrode-Calibration Method\nWhy Calibration Is Needed\nThe constant value in the Nernst-type equation contains several terms that cannot be calculated:\nJunction potential, Asymmetry potential, Standard-state reference terms. Therefore C must be\ndetermined experimentally.\n0.0592 𝑛 (𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 −𝐸 )\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 − 𝑝𝐴 solve for pA → 𝑝𝐴 = 𝑐𝑒𝑙𝑙\n𝑐𝑒𝑙𝑙\n𝑛 0.0592\nHow the Calibration Method Works\n• Measure 𝐸 for one or more standard solutions with known activity (or concentration).\n𝑐𝑒𝑙𝑙\n• Fit the data to obtain the slope and intercept (effective C).\n• Assume C remains unchanged between standards and the unknown sample.\n• Then solve for pA (or pX)\nImportant Notes\n• Multiple standards reduce error (slope often deviates from the ideal Nernst value).\n• Membrane electrodes drift → recalibrate if measurements extend for hours.\n48\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 49,
          "title": "[Ca2+] (M) E (V)",
          "text": "[Ca2+] (M) E (V)\nPractice Problem cell\n1.00×10-5 –0.125\n5.00×10-5 –0.103\n1.00×10-4 –0.093\nA series of Ca2+ standards were prepared, each containing 0.5 M KNO to maintain constant\n3\n5.00×10-4 –0.072\nionic strength. The measured cell potentials are shown below:\n1.00×10-3 –0.065\nWhat is the concentration of Ca2+ in a water sample if its cell potential is –0.084 V?\n5.00×10-3 –0.043\n1.00×10-2 –0.033\n(assuming activity ≈ concentration at constant ionic strength)\nCalibration equation from the graph is:\n𝐸 = 0.0303 log[𝐶𝑎2+] + 0.0272\ncell\nSubstitute the sample E into the calibration equation:\ncell\n−0.084 = 0.0303 log[𝐶𝑎2+] + 0.0272\n−0.084 − 0.0272\nlog 𝐶𝑎2+ = = −3.67\n0.0303\n2+\n𝐶𝑎2+ = 10log 𝐶𝑎 = 10−3.67 = 2.14 × 10−4 M\nNote: The experimental slope (0.0303) is slightly higher than the ideal Nernst slope for Ca2+ (0.05916/2 = 0.02958).\nThis small deviation is normal for real ion-selective electrodes and is one reason why we calibrate using several standards instead\nof assuming the theoretical value.\n49\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 50,
          "title": "The Standard Addition Method",
          "text": "The Standard Addition Method\nSingle-Point Standard Addition\n′\n0.0592 𝐸 − 𝐶\n′ 𝑐𝑒𝑙𝑙\n1. Measure the potential of the original sample: 𝐸 = 𝐶 + log 𝑎 → − log 𝑎 = −\nsamp samp\n𝑐𝑒𝑙𝑙 𝑛 0.0592\n𝑛\n2. Add a known volume of a standard solution, and measure the new potential:\n”\n0.0592 𝐸 − 𝐶\n” 𝑐𝑒𝑙𝑙\n𝐸 = 𝐶 + log 𝑎 → − log 𝑎 = −\n𝑐𝑒𝑙𝑙 𝑛 after after 0.0592\n𝑛\n𝑎samp𝑉samp+𝑎 𝑉\nstd std\nAccount for dilution of sample due to addition of the standard: 𝑎 =\nafter\n𝑉samp+𝑉\nstd\n𝑎 ” ′\nafter 𝑛 𝐸 −𝐸\n4. Eliminate the constant C: − log = 𝑐𝑒𝑙𝑙 𝑐𝑒𝑙𝑙\n𝑎samp 0.0592\nImportant notes\n• Assume the constant 𝐶remains unchanged between the two measurements.\n• If 𝑉 ≪ 𝑉 ,ionic strength and activity coefficients remain essentially constant.\nstd samp\n• In practice, activity is often approximated by concentration.\n• −log 𝑥 = 𝑝𝑥\n50\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    }
  ],
  "slides": [
    {
      "number": 1,
      "title": "CHM 3120: Introduction to Analytical Chemistry",
      "text": "CHM 3120: Introduction to Analytical Chemistry\nUnit 5 - Section 2:\nPotentiometry\nChapters 19\nS UMM ER 2 0 2 6\nDR . ALI SH AFI EE\nali.shafiee@ufl.edu"
    },
    {
      "number": 2,
      "title": "Electroanalytical Methods:",
      "text": "Electroanalytical Methods:\nClassification\nPotentiometry belongs to static (no-current) interfacial\nmethods → we measure potential, not current.\n2\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 3,
      "title": "What Is Potentiometry?",
      "text": "What Is Potentiometry?\n• Potentiometry is a static (no-current) electrochemical technique.\n• It measures the potential difference between two electrodes in an\nelectrochemical cell under open-circuit conditions (no current flow).\n• The measured potential is related to the activity of ions in solution through the\nNernst equation.\n• The pH meter is the most common example of a potentiometric instrument,\nbased on a glass-membrane electrode selective to H⁺ activity.\n• Potentiometric methods are simple, reliable, and widely used for ion-selective\nmeasurements in analytical chemistry.\n• Potential varies logarithmically with ion activity (Nernst relationship).\n3\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 4,
      "title": "Measuring Potentials: From Galvanic to",
      "text": "Measuring Potentials: From Galvanic to\nPotentiometric Cells\nIn a galvanic cell: electrons flow — current In potentiometry: no current flows — only\nis measured (dynamic system). the potential difference is measured.\n4\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 5,
      "title": "Components and Cell Potential Equation",
      "text": "Components and Cell Potential Equation\nEvery potentiometric measurement consists of three\npotential contributions:\nBy convention, the reference electrode is\nThe indicator (working) electrode is\nalways treated as the left-hand electrode\nimmersed in the analyte solution and\nin potentiometric measurements.\ndevelops a potential that depends on\nthe activity of the target ion.\nThe salt bridge (or junction) connects the two half-cells, allowing charge\nbalance while minimizing ion mixing.\nIt introduces a small liquid junction potential that cannot be fully eliminated.\n5\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 6,
      "title": "Components and Cell Potential Equation",
      "text": "Components and Cell Potential Equation\nReference electrode | salt bridge | analyte solution | indicator (working) electrode\n𝐸 𝐸 𝐸\n𝑟𝑒𝑓 𝑗 𝑖𝑛𝑑\n𝐸 = 𝐸 − 𝐸 − 𝐸\n𝑐𝑒𝑙𝑙 𝑖𝑛𝑑 𝑟𝑒𝑓 𝑗\n• The measured cell potential (𝐸 ) is the difference between the indicator and reference electrode\n𝑐𝑒𝑙𝑙\npotentials, corrected for the small liquid junction potential.\n• 𝐸 is often small enough to be neglected, but it may cause minor systematic errors.\n𝑗\n• The magnitude of 𝐸 depends primarily on the activity of ions to which the indicator electrode is\n𝑐𝑒𝑙𝑙\nselective.\n6\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 7,
      "title": "1. Reference Electrode",
      "text": "1. Reference Electrode\n• The reference electrode provides a stable and well-defined potential against which the indicator\nelectrode potential is measured.\n• It can be a standard hydrogen electrode (SHE), but this is rarely used because it is difficult to\nmaintain and impractical for routine measurements.\n• An ideal reference electrode should have a potential that is:\no Accurately known and highly reproducible.\no Constant over time and independent of the analyte composition.\no Insensitive to small current flow and environmental changes.\n• It should be also rugged, easy to assemble, and maintain a constant potential while passing minimal\ncurrent.\nCommon examples:\n• Calomel electrode (𝑯𝒈/𝑯𝒈 𝑪𝒍 , KCl)\n𝟐 𝟐\n• Silver/Silver chloride electrode (𝑨𝒈/𝑨𝒈𝑪𝒍, KCl)\n7\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 8,
      "title": "Calomel Reference Electrodes",
      "text": "Calomel Reference Electrodes\nThe calomel electrode consists of liquid mercury (Hg) in contact\nwith mercury(𝐼) chloride (𝐻𝑔₂𝐶𝑙₂: calomel) and a KCl solution of\nknown concentration.\nCell notation: 𝐻𝑔| 𝐻𝑔 𝐶𝑙 (𝑠𝑎𝑡’𝑑), 𝐾𝐶𝑙(𝑥 𝑀)||\n2 2\nwhere x indicates the molarity of 𝐾𝐶𝑙 (commonly 0.1 𝑀, 1.0 𝑀, or saturated).\nThe half-cell reaction is:\n− −\n𝐻𝑔 𝐶𝑙 𝑠 + 2𝑒 ⇌ 2𝐻𝑔 𝐼 + 2𝐶𝑙 (𝑎𝑞)\n2 2\n0.059\n° 2\n𝐸 = 𝐸 − 𝑙𝑜𝑔 𝑎\n−\n𝐻𝑔 𝐶𝑙 /𝐻𝑔 𝐶𝑙\n2 2 2\nFor saturated KCl (25 °C):\n0.059\n𝑎 = activity of 𝐶𝑙⁻ (≈ concentration at low 2\n𝐸 = 0.244 𝑉 − 𝑙𝑜𝑔 𝑎\n−\n𝐶𝑙\nionic strength; will be discussed shortly) 2\n8\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 9,
      "title": "Calomel Reference Electrodes",
      "text": "Calomel Reference Electrodes\n0.059\nl\nl\no\no\ng o\ng\npen bra\n𝑎\ncket open se2cond\n=\nparen\n2\na. s\nl\nub\no\n, s\ng\nuper\n𝑎\nscript base ,\n° 2 cap C l , end ba𝐶se 𝑙, −to the minus , end subscript , , clos𝐶e s𝑙e−cond 0.059\n𝐸 = 𝐸 − log 𝑎\n𝐻𝑔 𝐶𝑙 /𝐻𝑔 𝐶𝑙 − paren squared , close bracket equals 2log open second paren 𝐸 = 𝐸 ° − × 2 log 𝑎 −\n2 2 2 𝐻𝑔 2 𝐶𝑙 2 /𝐻𝑔 2 𝐶𝑙\n°\n𝐸 = 𝐸 − 0.059 log 𝑎\n−\n𝐻𝑔 𝐶𝑙 /𝐻𝑔 𝐶𝑙\n2 2\n𝒂 (=\nThe electrode potential depends on [𝑪𝒍⁻]), so the KCl concentration must\n−\n𝑪𝒍\nalways be specified.\nTypical potentials (vs SHE, at 25 °C):\n𝑆𝑎𝑡𝑢𝑟𝑎𝑡𝑒𝑑 𝐾𝐶𝑙 𝑆𝐶𝐸 → +0.2444 𝑉\n3.5 𝑀 𝐾𝐶𝑙 → +0.250 𝑉\n0.1 𝑀 𝐾𝐶𝑙 → +0.3356 𝑉\nOften we use Saturated Calomel Electrode (SCE):\n𝐻𝑔| 𝐻𝑔 𝐶𝑙 (𝑠𝑎𝑡’𝑑), 𝐾𝐶𝑙(𝑠𝑎𝑡’𝑑)||\n2 2\n9\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 10,
      "title": "Silver/Silver Chloride Electrodes",
      "text": "Silver/Silver Chloride Electrodes\n• The Ag/AgCl reference electrode consists of a silver wire coated\nwith silver chloride (AgCl) and immersed in a KCl solution of\nknown concentration.\n• The KCl solution is usually saturated or 3.5 M, ensuring stable\nand reproducible potential.\n• Cell notation: 𝐴𝑔| 𝐴𝑔𝐶𝑙(𝑠𝑎𝑡’𝑑), 𝐾𝐶𝑙(𝑠𝑎𝑡’𝑑)||\n− −\nThe half-cell reaction is: Ag𝐶𝑙 𝑠 + 𝑒 ⇌ 𝐴𝑔 𝑠 + 𝐶𝑙 (𝑎𝑞)\n°\nNernst equation (25 °C): 𝐸 = 𝐸 − 0.059 log 𝑎 −\n𝐴𝑔𝐶𝑙/𝐴𝑔 𝐶𝑙\nFor saturated KCl (25 °C): 𝐸 = 0.199 𝑉 − 0.059 log(𝑎 − )\n𝐶𝑙\nAdvantages over Calomel Electrode:\n• Ag/AgCl usable > 60 °C; Calomel unstable above this temperature.\n• Calomel (Hg) less reactive; Ag⁺ can bind proteins → junction clogging.\n• Provides reproducible potential and is easy to maintain.\n10\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 11,
      "title": "Reference Electrode Potentials (vs SHE)",
      "text": "Reference Electrode Potentials (vs SHE)\nTemperature\n0.1 M Calomel 3.5 M Calomel Sat’d Calomel 3.5 M Ag/AgCl Sat’d Ag/AgCl\n(°C)\n15 0.3362 0.254 0.2511 0.212 0.209\n20 0.3359 0.252 0.2479 0.208 0.204\n25 0.3356 0.250 0.2444 0.205 0.199\n30 0.3351 0.248 0.2411 0.201 0.194\n35 0.3344 0.246 0.2376 0.197 0.189\nThe diagram shows electrode potentials\nrelative to SHE, highlighting how different\nreference electrodes shift measured voltages.\n11\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 12,
      "title": "What Is Activity? Why Not Just Concentration?",
      "text": "What Is Activity? Why Not Just Concentration?\nDiscussed in Chapter 8B Activity Coefficients\nActivity accounts for ionic interactions: In real solutions, ions interact with each other, so their effective\nconcentration (activity) is not equal to their molar concentration.\n𝑎 = [𝑋]𝛾\n𝑋 𝑋\n▪ At very low ionic strength: γ ≈ 1 → activity ≈ concentration\n▪ As ionic strength increases: effective concentration decreases→ γ decreases\n▪ Higher charge → larger deviation (e.g., Al3+, Fe(CN) 4-)\n6\n2\n0.51𝑧 𝜇\n−log 𝛾 = 𝑋\nThe Debye–Hückel equation relates the activity coefficient to ionic strength:\n𝑋\n1+3.3𝑎 𝜇\n𝑋\nfor very low ionic strength (𝜇 < 0.01 𝑀): Denominator ≈ 1 → limiting law:\n2\n−log 𝛾 ≈ 0.51𝑧 𝜇\n𝑋 𝑋\n▪ Activity coefficient γ decreases as ionic strength increases\n𝑎 : activity\n𝑋\n▪ Effect is stronger for highly charged ions 𝑋 : molar concentration\n𝛾 : activity coefficient (dimensionless)\n▪ Neutral molecules: 𝛾 ≈ 1 (almost no effect) 𝑋\n𝑧 = charge of the ion\n𝑋\n𝜇 = ionic strength\n12\nCHM3120 | Ali Shafiee | UF 𝑎 = effective hydrated ion diameter (nm)\n𝑋"
    },
    {
      "number": 13,
      "title": "Why Activity Matters in Electrochemistry",
      "text": "Why Activity Matters in Electrochemistry\n0.0592\nNernst equation uses activity 𝐸 = 𝐸∘ − log 𝑎 𝑠𝑖𝑛𝑐𝑒 𝑎 = [𝑋]𝛾\n𝑛\nElectrode potentials depend on both concentration AND ionic strength.\nReference electrodes rely on constant ionic strength\n∘\nExample: Ag/AgCl 𝐸 = 𝐸 − 0.0592log 𝑎\n−\n𝐴𝑔𝐶𝑙/𝐴𝑔 𝐶𝑙\nWith saturated KCl: 𝐶𝑙− fixed → 𝛾 approximately constant → activity is constant, giving a stable\n−\n𝐶𝑙\nreference potential.\nWhy E°′ appears: E°′ (formal potential) includes the effect of activity coefficients at a defined ionic strength\nFormal potentials for Fe3+/Fe2+half-reaction in five different solvents.\nHalf reaction E° (V) E°′ (V)\n0.70 in 1 M HCl\n0.767 in 1 M HClO\n4\nFe³⁺ + e⁻ ⇌ Fe²⁺ 0.771 0.746 in 1 M HNO\n3\n0.68 in 1 M H SO\n2 4\n0.44 in 0.3 M H PO\n3 4 13\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 14,
      "title": "Example: Activity of Cl⁻ in a Saturated KCl Ag/AgCl Electrode",
      "text": "Example: Activity of Cl⁻ in a Saturated KCl Ag/AgCl Electrode\nWe can determine the activity a₍ ₎ from the measured E of the saturated Ag/AgCl\nCl⁻\nreference electrode.\nHalf-reaction: 𝐴𝑔𝐶𝑙(𝑠) + 𝑒⁻ ⇌ 𝐴𝑔(𝑠) + 𝐶𝑙⁻(𝑎𝑞)\nNernst equation: 𝐸 = 𝐸° − 0.05916 log(𝑎₍ ₎)\n𝐶𝑙⁻\nKnown values at 25 °C:\nSolve for activity: 0.197 = 0.222 − 0.059 log(𝑎₍ ₎) → 𝑎₍ ₎ = 2.65\n𝐶𝑙⁻ 𝐶𝑙⁻\nCompare to formal concentration: 𝑎 = 𝛾 × 𝑐 → 𝛾 = 2.65/4.79 → 𝛾 ≈ 0.55\nEven though [Cl⁻]=4.79 M, it “behaves” like it’s only 2.6 M because γ < 1.\n14\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 15,
      "title": "Example: Activity of Cl⁻ in a Saturated KCl Ag/AgCl Electrode",
      "text": "Example: Activity of Cl⁻ in a Saturated KCl Ag/AgCl Electrode\n2\n−0.51𝑧 𝜇\nExtended Debye–Hückel Equation: 𝑙𝑜𝑔 𝛾 =\n1+(𝛼 𝜇/305)\nKnown values for Cl⁻ in saturated KCl: z = −1; μ ≈ 4.79(≈ [KCl], 1:1 electrolyte); α ≈ 300 pm\n−0.51(1)2 4.79\n𝑙𝑜𝑔 𝛾 = → 𝛾 ≈ 0.44\n300 4.79\n1 +\n305\nDebye–Hückel: γ ≈ 0.44 vs. From activity measurement: γ ≈ 0.55\nDebye–Hückel becomes inaccurate at high ionic strength (μ > 0.1 M). Saturated KCl is very concentrated, so activity must be obtained\nexperimentally.\nWhat does all these mean?\n• Activity coefficients must be considered in electrochemistry, especially when dealing with reference electrodes\nlike Ag/AgCl or calomel, where Cl⁻ concentration strongly affects the electrode potential.\n• Saturated KCl fixes both [Cl−] and γ −, giving a constant aCl−\nCl\n• A constant activity produces a stable and reproducible reference potential\n15\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 16,
      "title": "Example: Ag/AgCl Reference + Fe3+/Fe2+ System",
      "text": "Example: Ag/AgCl Reference + Fe3+/Fe2+ System\n− − o\nReference electrode: AgCl s + e ⇌ Ag s + Cl E = 0.199 V\n3+ − 2+ o\nIndicator electrode (responds to analyte): Fe + e ⇌ Fe E = 0.771 V\nReference\nIndicator\nElectrode\nElectrode\nReference Indicator\nElectrode Electrode\n• The voltmeter measures the difference between these two electrode (half cell) potentials.\n• The reference electrode provides a fixed, stable potential, while the indicator electrode responds to the 𝐹𝑒3+/𝐹𝑒2+ ratio.\n16\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 17,
      "title": ".",
      "text": ".\n− 2+ 3+\n𝐴𝑔| 𝐴𝑔𝐶𝑙(𝑠), 𝐶𝑙 (𝑎𝑞)|| 𝐹𝑒 (𝑎𝑞), 𝐹𝑒 (𝑎𝑞) | 𝑃𝑡 (𝑠)\n𝐹𝑒 3+ + 𝑒 − ⇌ 𝐹𝑒 2+ 𝐸 𝑜 = 0.771 𝑉\n𝐴𝑔𝐶𝑙 𝑠 + 𝑒 − ⇌ 𝐴𝑔 𝑠 + 𝐶𝑙 − 𝐸 𝑜 = 0.199 𝑉\n3+ − 2+\n𝐹𝑒 + 𝐴𝑔 𝑠 + 𝐶𝑙 ⇌ 𝐴𝑔𝐶𝑙 𝑠 + 𝐹𝑒\n𝐸 = 𝐸 − 𝐸 − 𝐸\n𝑐𝑒𝑙𝑙 𝑖𝑛𝑑 𝑟𝑒𝑓 𝑗\n0.0592 𝑉\n°\n𝐸 = 𝐸 − 𝑙𝑜𝑔𝑄\n𝑐𝑒𝑙𝑙 𝑐𝑒𝑙𝑙\n𝑛\n2+\n𝐹𝑒\n−\n𝐸 = 0.771 − 0.0592𝑙𝑜𝑔 − 0.199 − 0.059𝑙𝑜𝑔 𝐶𝑙\n𝐹𝑒3+\n17\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 18,
      "title": ".",
      "text": ".\n2+\n𝐹𝑒\n−\n𝐸 = 0.771 − 0.0592 log − 0.199 − 0.059𝑙𝑜𝑔 𝐶𝑙\n𝐹𝑒3+\nIf [Cl⁻] is constant (saturated KCl):\n𝐸 = 0.572 𝑉 − 0.0592 𝑙𝑜𝑔𝑄\n𝑐𝑒𝑙𝑙\n0.65\n• Cell voltage decreases as the ratio Q=[Fe2+]/[Fe3+] increases.\ne • The reference potential is fixed; the indicator follows the\ng 0.60\na\nt lo Nernst equation.\nV\nl • The curve shows the measurable dependence of cell\nle\nC\n0.55 potential on the [Fe2+]/[Fe3+] ratio.\n0.50\n0 2 4 6 8 10\n2+ 3+\n[Fe / Fe ]\nQ\n18\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 19,
      "title": "..",
      "text": "..\nIf we rewrite: 𝐸 = 0.572 𝑉 − 0.0592 log 𝑄\n𝑐𝑒𝑙𝑙\nAs a linear expression: 𝐸 = − 0.0592 log 𝑄 + 0.572\n𝑐𝑒𝑙𝑙\nIf we create a calibration curve, we can use\nthat to find the concentration of an\nunknown\ny = m x + b\nThus, the slope is –0.0592 V = –59 mV per decade\nMeaning:\nc𝑆ap𝑙 S 𝑜l o p𝑝 e e𝑒qual=s minu−s 59 5m c9ap V𝑚 ove𝑉r d e/ c a𝑑. d 𝑒e 𝑐𝑎𝑑𝑒 A ten-fold change in Q=[Fe2+]/[Fe3+]​ changes the cell voltage by 59 mV.\nA probe to monitor Ferrous/Ferric\nNote: we commonly plot a semi-log graph Here we will assume that the activity of the solution is\nCHM3120 | Ali Shafiee | UF to show the calibration function. equal to the concentration (by way of the constant) 19"
    },
    {
      "number": 20,
      "title": "Recap: Components and Cell Potential Equation",
      "text": "Recap: Components and Cell Potential Equation\nEvery potentiometric measurement consists of three\npotential contributions:\nBy convention, the reference electrode is\nThe indicator (working) electrode is\nalways treated as the left-hand electrode\nimmersed in the analyte solution and\nin potentiometric measurements.\ndevelops a potential that depends on\nthe activity of the target ion.\nThe salt bridge (or junction) connects the two half-cells, allowing charge\nbalance while minimizing ion mixing.\nIt introduces a small liquid junction potential that cannot be fully eliminated.\n20\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 21,
      "title": "2. Indicator (Working) Electrodes",
      "text": "2. Indicator (Working) Electrodes\nAn ideal indicator electrode:\n• Responds rapidly and reproducibly to changes in analyte activity\n• Exhibits a Nernstian potential–activity (concentration) relationship\n• Provides reasonable selectivity toward the target ion or species\nMain Types of Indicator Electrodes:\n• Metallic Indicator Electrodes\n– First kind: metal in in equilibrium with its ions (e.g., 𝐶𝑢 | 𝐶𝑢²⁺)\n– Second kind: metal coated with a slightly soluble salt (e.g., Ag | AgCl)\n– Inert redox electrodes: Pt or Au sensing redox couples\n• Membrane Electrodes (Ion-Selective Electrodes, ISEs)\n– Include glass pH electrodes and polymer/plastic membranes\n– Selectively respond to specific ions (F⁻, Ca2+, K+, etc.)\n• Gas-Sensing Probes\n– Gas-permeable membrane + internal solution + indicator electrode\n– Used for CO , NH , and similar species that convert to ions after diffusion\n2 3\n• ISFET Electrodes\n– Solid-state, field-effect sensors\n– Fast, miniaturized pH and ion detection\n21\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 22,
      "title": "Electrodes of the First Kind",
      "text": "Electrodes of the First Kind\nA first-kind indicator electrode is a pure metal in direct equilibrium with its metal ion in solution.\nExample: the equilibrium between a copper and its cation Cu2+:\n𝐶𝑢2+(𝑎𝑞) + 2𝑒− ⇌ 𝐶𝑢(𝑠)\nFor such electrode the Nernst Equation (for a metal M) is:\n0.0592\n°\n𝐸 = 𝐸 + 𝑙𝑜𝑔 𝑎\nind 𝑀 𝑛+ /𝑀 𝑛 𝑀 𝑛+\n° 0.0592\nor using pX (where pX = –log a₍ ₎): 𝐸 = 𝐸 − 𝑝𝑋\nMⁿ⁺ ind 𝑀 𝑛+ /𝑀\n𝑛\n0.0592\nExpected slope (at 25°C) : − V per decade\n𝑛\na : the activity of the ion (or in dilute solution,\nMn+\napproximately its molar concentration, [Cu2+] 22\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 23,
      "title": "Limitations of First-Kind Electrodes",
      "text": "Limitations of First-Kind Electrodes\nWhy they are rarely used in potentiometry\n• Poor selectivity: Respond to other easily reduced metal ions.\n(Example: Cu electrode also responds to Ag⁺ → cannot determine Cu2+ accurately.)\n• Restrictions based on pH: Many metals dissolve in acids or bases → limited working range.\n• Oxygen effects: Some metals (e.g., Fe, Cr, Co, Ni) oxidize in air → unreliable potentials.\nMust deaerate (Bubble N or Ar gas) solutions → inconvenient.\n2\n• Irregular slopes: Experimental slopes often deviate significantly from the ideal −0.0592/n\nWhere they are used\n• Only a few first-kind systems are reliable:\n• Ag/Ag+, Hg/Hg2+\n• Cu/Cu2+, Zn/Zn2+, Cd/Cd2+\n• Bi3+/Bi, Tl+/Tl, Pb2+/Pb (in deaerated solutions)\n23\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 24,
      "title": "Electrodes of the Second Kind",
      "text": "Electrodes of the Second Kind\nA second-kind electrode is a metal coated with a sparingly soluble salt of that same metal. Its potential\nresponds to the anion associated with that salt.\nExample:\n0.0592\n°\nNernst Equation 𝐸 = 𝐸 − 𝑙𝑜𝑔 𝑎\nind 𝐴𝑔𝐶𝑙/𝐴𝑔 𝐶𝑙 −\n1\n°\nor using 𝑝𝐶𝑙 = log 𝑎 : 𝐸 = 𝐸 + 0.0592 𝑝𝐶𝑙\n𝐶𝑙 − ind 𝐴𝑔𝐶𝑙/𝐴𝑔\nKey Features\nResponds to anion, not the metal ion\n•\nPositive slope +59 mV per decade (for n=1, at 25°C)\n•\nVery reproducible and widely used\n•\n(Ag/AgCl reference electrode is the classic example)\n24\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 25,
      "title": "Inert Metallic Electrodes",
      "text": "Inert Metallic Electrodes\n• Made of chemically inert conductors such as Pt, Au, Pd, or carbon\n• Do not form their own ions or sparingly soluble salts\n• Provide only a surface for electron transfer\n• Used when the analyte is a redox couple in solution (no metal electrode possible)\nHow they work\nThe metal surface establishes equilibrium with a solution redox pair, for example:\n𝑂𝑥 + 𝑛𝑒− ⇌ 𝑅𝑒𝑑\nThe potential depends solely on the activities of the oxidized and reduced forms:\n0.0592 𝑎\n𝑂𝑥\n𝐸 = 𝐸0 + 𝑙𝑜𝑔 (using Ox/Red form → positive sign)\nind\n𝑛 𝑎\n𝑅𝑒𝑑\nThere is no metal ion in the Nernst equation: the electrode is just an electron conduit.\n25\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 26,
      "title": "Inert Metallic Electrodes",
      "text": "Inert Metallic Electrodes\nUnlike first- and second-kind electrodes, inert metallic electrodes do not have a fixed slope sign. The sign\ndepends on how the redox ratio is written:\n0.0592\nIf x-axis = log(Ox/Red) →+\n(using Ox/Red form → positive sign)\n𝑛\nIn all cases, the magnitude of the slope\n0.0592\nIf x-axis = log(Red/Ox) → − is 0.0592/n V per decade at 25 °C.\n𝑛\n2+\n𝐹𝑒\nIn the Fe3+/Fe2+ (Pt) example we defined: 𝑄 = So: 𝐸 = 𝐸0 − 0.0592𝑙𝑜𝑔 𝑄\n𝐹𝑒3+\nThis gave a –59 mV/decade slope in the calibration plot.\nThe slope was negative because of the definition of Q, not because Pt behaves like a “negative-slope electrode.\nWhere inert electrodes are used\n• Redox titrations (Fe2+/Fe3+, Ce3+/Ce4+, Cr2+/Cr3+)\n• Monitoring dissolved oxygen (Pt/O )\n2\n• Any system with no suitable metal-metal ion equilibrium\n26\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 27,
      "title": "Ion Selective Electrodes (ISE)",
      "text": "Ion Selective Electrodes (ISE)\nMembrane electrodes are sometimes called p-ion electrodes because the data obtained from them are\nusually presented as p-functions, such as pH, pCa, or pNO .\n3\nIon-selective electrodes are used to monitor many different chemical\nspecies.\nNo redox reaction occurs at the membrane (the potential arises from\nion-selective partitioning).\nA thin membrane is configured to bind only a single ion of interest.\nTwo reference electrodes measure the potential difference across the\nmembrane.\nThere are many physical constructions and chemical mechanisms, but\nonly a few types will be examined:\n• Liquid-Membrane Electrodes\n• Crystalline-Membrane Electrodes\n• The Glass Electrode for Measuring pH\n• Glass Electrodes for Other Cations\n27\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 28,
      "title": "Liquid-Membrane Electrodes",
      "text": "Liquid-Membrane Electrodes\nDeveloped for direct potentiometric measurement of polyvalent cations and certain anions.\nBasic Structure\n• A conducting membrane that selectively binds a specific ion\n(e.g., Ca2+).\n• An internal solution containing a fixed concentration of that\nion.\n• A silver electrode coated with AgCl serving as the internal\nreference.\nThe potential develops at the interface between:\n• the solution containing the analyte, and\n• a liquid ion exchanger that selectively binds the analyte ion.\n28\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 29,
      "title": "Liquid-Membrane Electrodes",
      "text": "Liquid-Membrane Electrodes\n• Uses a porous plastic membrane saturated with the cation exchanger\ndi-(n-decyl) phosphate\n• Outer reservoir: di-(n-decyl) phosphate dissolved in an immiscible\norganic phase (e.g., di-n-octylphenylphosphonate); this solution\nsaturates the porous membrane\n• Inner reservoir: aqueous standard Ca2+ solution (a ) and an Ag/AgCl\n2\nreference electrode\nCa²⁺-Selective Liquid-Membrane Electrode: 𝐶𝑎2+ 𝑎𝑞 + 2 𝐶 𝐻 𝑂 𝑃𝑂− 𝑚𝑒𝑚 ⇌ Ca 𝐶 𝐻 𝑂 𝑃𝑂 (𝑚𝑒𝑚)\n10 21 2 10 21 2 2 2\nA potential develops across the membrane when the extent of ion-exchanger dissociation differs on the two\nsides.\n0.0592 𝑎\n1\n𝐸 = 𝐸 − 𝐸 = log\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1 2\n2 𝑎\n2\nThe membrane potential depends on the ratio of Ca2+ activity outside (a ) vs inside (a ). Since a is\n1 2 2\nconstant, the potential becomes a linear function of pCa.\n0.0592 0.0592\n𝐸 = 𝑁 + log 𝑎 = 𝑁 − pCa\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1\n2 2\n29\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 30,
      "title": "Liquid-Membrane Electrodes",
      "text": "Liquid-Membrane Electrodes\n30\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 31,
      "title": "Crystalline-Membrane Electrodes (Solid-State ISEs)",
      "text": "Crystalline-Membrane Electrodes (Solid-State ISEs)\n• Ion-selective electrodes with membranes made from polycrystalline\ninorganic salts or single crystals.\n• Prepared by sealing a 1–2 mm pellet (e.g., Ag S or mixtures of Ag S with\n2 2\nother metal sulfides) into the end of a plastic cylinder.\n• The cylinder is filled with an internal solution (fixed activity of target\nion).\n• An Ag/AgCl reference electrode is placed in the internal solution.\n• The solid membrane makes contact with the sample solution.\n• A potential develops due to differences in the extent of the solubility\nequilibrium at the membrane surface.\n31\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 32,
      "title": "Crystalline-Membrane Electrodes (Solid-State ISEs)",
      "text": "Crystalline-Membrane Electrodes (Solid-State ISEs)\nExample: Silver Sulfide (Ag S) Membrane\n2\nAg S (𝑠) ⇌ 2Ag+(𝑎𝑞) + S2−(𝑎𝑞)\n2\nResponds to Ag+ with: 𝐸 = 𝐾 + 0.0592 𝑙𝑜𝑔 𝑎\n• cell Ag+\nAlso responds to:\n•\n0.0592\nS2-: 𝐸 = 𝐾 − 𝑙𝑜𝑔 𝑎\no cell S2−\n2\nCl-: 𝐸 = 𝐾 − 0.0592 𝑙𝑜𝑔 𝑎\nwhen AgCl is mixed with Ag S\no cell Cl−\n2\nMixed-Membrane Electrodes\nAg S mixed with:\n• 2\nCdS → selective for Cd2+\no\nCuS → selective for Cu2+\no\nPbS → selective for Pb2+\no\n0.0592\n𝐸 = 𝐾 + 𝑙𝑜𝑔 𝑎\ncell M2+\n2\n32\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 33,
      "title": "The Glass Electrode for Measuring pH",
      "text": "The Glass Electrode for Measuring pH\n• A typical pH cell consists of a glass indicator electrode (a thin pH-sensitive glass membrane) and a saturated\ncalomel reference electrode placed in the solution of unknown pH.\n• Inside the tube is a small volume of dilute HCl saturated with AgCl.\n• A silver wire in this solution forms an Ag/AgCl reference electrode,\nwhich is connected to the pH meter.\n• The calomel electrode is connected to the other terminal of the\nmeasuring device.\n• The glass electrode system therefore contains two reference\nelectrodes:\nthe external calomel electrode\no\nthe internal Ag/AgCl electrode\no\nThe glass membrane (0.03–0.1 mm thick)\nhas an electrical resistance of 50 to 500 MΩ.\n33\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 34,
      "title": ".",
      "text": ".\nsaturated calomel electrode\n• The internal solution has a fixed composition:\n• The analyte solution contains • The glass membrane separates\n• hydronium activity a\nhydronium ions with activity a . the external analyte solution from 2\n1 • chloride concentration [Cl⁻] = 0.1 M\n• This solution contacts the outer the internal reference solution.\n• solid AgCl (sat’d) present\nsurface of the glass membrane, • Two boundary potentials appear\n• This solution is in contact with a silver wire coated\ncreating a boundary potential across the membrane:\nwith AgCl.\nlabeled E . • E at the outer surface\n1 1 • silver/silver chloride electrode serves as the internal\n• E at the inner surface\n2 reference electrode for the glass electrode.\n34\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 35,
      "title": "What Controls the Potential?",
      "text": "What Controls the Potential?\nWhere the Measured Potential Comes From\n• The activity of hydrogen ions in the analyte solution establishes an interfacial equilibrium that gives rise to\nthe potential at the outer glass surface.\n• The difference in H+ activity across the membrane produces the potential difference measured by the pH\nmeter. This leads to a Nernst-type relationship:\n𝑎\n𝑜𝑢𝑡\n𝐸 ∝ log\n𝑎\n𝑖𝑛\nFunction of the Two Reference Electrodes\n• The internal and external reference electrodes only provide electrical contact to each side of the glass\nmembrane.\n• Their potentials are essentially constant, except for the junction potential, which changes slightly with the\nanalyte composition.\n• The potentials of the reference electrodes are set by the redox couples they contain.\n35\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 36,
      "title": "Single-Probe Glass Electrodes",
      "text": "Single-Probe Glass Electrodes\n• In a typical pH meter the glass electrode and its Ag/AgCl internal\nreference electrode are placed at the center of a cylindrical probe.\n• Surrounding them is ...the external reference electrode (typically\nAg/AgCl in KCl filling solution).\n• The external reference is less obvious than in the dual-probe setup,\nbut the combination design is more convenient and can be\nmade much smaller.\n36\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 37,
      "title": "Glass Composition Matters",
      "text": "Glass Composition Matters\n• Glass membranes used in pH electrodes are made from special silicate glasses.\n• Corning 015 glass (widely used) contains: 22% Na O, 6% CaO, 72% SiO\n2 2\n• These membranes show excellent specificity to H+ up to pH ≈ 9.\n• At higher pH, the membrane becomes somewhat responsive to Na+.\n• Other glass formulations replace Na+/Ca2+ with Ba2+ or Li+ to improve selectivity and lifetime.\nHydration Is Required\n• Both surfaces of the glass membrane must\nbe hydrated before the electrode works.\n• Non-hygroscopic glasses show no pH response.\n• Even hygroscopic glasses lose sensitivity after\ndehydration (e.g., storage over desiccant), but\nregain it when soaked in water.\n37\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 38,
      "title": "Boundary Potentials Across the Glass Membrane",
      "text": "Boundary Potentials Across the Glass Membrane\n𝑎\n1\n𝐸 = 𝐸 − 𝐸 = 0.0592 log\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1 2\n𝑎\n2\nNa+\nThe hydrogen ion activity of the internal\nsolution, a , is constant (𝐿′ = −0.0592 log 𝑎 )\n2 2\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 + 0.0592 log 𝑎\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1\nOr\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 − 0.0592 log 𝑝𝐻\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒\n38\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 39,
      "title": ".",
      "text": ".\n𝑎\n1\n𝐸 = 𝐸 − 𝐸 = 0.0592 log\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1 2\n𝑎\n2\nThe hydrogen ion activity of the internal\nsolution, a2, is constant (𝐿′ = −0.0592 log 𝑎 )\n2\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 + 0.0592 log 𝑎\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒 1\nOr\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 − 0.0592 log 𝑝𝐻\n𝑚𝑒𝑚𝑏𝑟𝑎𝑛𝑒\n39\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 40,
      "title": "Errors in Glass Electrode Measurements",
      "text": "Errors in Glass Electrode Measurements\nAcid Error (Low-pH Error)\nOccurs at around 𝑝𝐻 ≲ ~0.5 − 1.0.\n•\nMeasured pH is too high (𝑝𝐻 – 𝑝𝐻 > 0).\n• 𝑟𝑒𝑎𝑑 𝑡𝑟𝑢𝑒\nCaused by surface-site saturation: all exchange sites on the\n•\nglass become occupied by H+.\nWhen the surface is saturated, the electrode cannot\n•\nrespond to further increases in [H+], so the reading stops\ndecreasing.\nMagnitude varies between electrodes and is often poorly\n•\nreproducible.\n40\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 41,
      "title": "Errors in Glass Electrode Measurements",
      "text": "Errors in Glass Electrode Measurements\nAlkaline Error (Sodium Error)\nOccurs at high pH, usually 𝑝𝐻 ≳ 11 − 12.\n•\nMeasured pH is too low (𝑝𝐻 – 𝑝𝐻 < 0).\n• 𝑟𝑒𝑎𝑑 𝑡𝑟𝑢𝑒\nCaused by the glass responding to alkali ions (mainly\n•\nNa+) as well as H+.\nIon-exchange equilibrium on the glass surface:\n•\n𝐻+𝐺𝓁− + 𝐵 + ⇌ 𝐵+𝐺𝓁− + 𝐻 +\n𝑠𝑜𝑙𝑛 𝑠𝑜𝑙𝑛\nwhere B⁺ = Na⁺, K⁺, etc.\nThe effect increases when [Na+] is high and [H+] is very low,\n•\nmaking the electrode respond partly to B+ instead of H+.\n41\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 42,
      "title": "Recap: Components and Cell Potential Equation",
      "text": "Recap: Components and Cell Potential Equation\nEvery potentiometric measurement consists of three\npotential contributions:\nBy convention, the reference electrode is\nThe indicator (working) electrode is\nalways treated as the left-hand electrode\nimmersed in the analyte solution and\nin potentiometric measurements.\ndevelops a potential that depends on\nthe activity of the target ion.\nThe salt bridge (or junction) connects the two half-cells, allowing charge\nbalance while minimizing ion mixing.\nIt introduces a small liquid junction potential that cannot be fully eliminated.\n42\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 43,
      "title": "3. Liquid Junction Potentials (E )",
      "text": "3. Liquid Junction Potentials (E )\nj\nEⱼ develops at the interface between two electrolyte solutions of different composition or concentration, as a result\nof an unequal distribution of cations and anions across the boundary.\nIons diffuse at different rates when solutions of different concentrations meet.\nAt the interface of 0.1 M HCl | 0.01 M HCl\nExample:\n• Fast H⁺ diffusion into the dilute side causes it to accumulate excess\npositive charge.\n• The concentrated side is left with excess Cl⁻ and becomes negatively\ncharged.\n• Charge separation continues until an electrostatic potential builds up\nthat opposes further net diffusion.\nThis unequal mobility creates a charge separation, generating a\nmeasurable potential difference.\nThe side receiving more fast-moving ions becomes positively charged;\nBoth H⁺ and Cl⁻ diffuse from\nthe other side becomes negative → Eⱼ forms.\nconcentrated → dilute side.\nH⁺ diffuses faster than Cl⁻.\n43\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 44,
      "title": "Liquid Junction Potentials (E )",
      "text": "Liquid Junction Potentials (E )\nj\nMagnitude: The junction potential is typically on the order of a few millivolts and can reach tens of millivolts\nfor large concentration differences.\nIt depends on:\n• ion concentrations on each side,\n• ion mobilities.\nSalt Bridges Reduce Eⱼ\n• A salt bridge minimizes the junction potential by using a salt whose ions\nhave similar mobilities.\n• KCl is commonly used because K⁺ and Cl⁻ have similar ionic mobilities\n(transport numbers), which minimizes the junction potential..\n• A KCl salt bridge produces a junction potential of only a few millivolts.\n• Even with a well-designed bridge, a small residual Eⱼ always remains.\n44\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 45,
      "title": "Potentiometry Measurement",
      "text": "Potentiometry Measurement"
    },
    {
      "number": 46,
      "title": "Potentiometry Measurement: Direct Potentiometry",
      "text": "Potentiometry Measurement: Direct Potentiometry\nThe simplest potentiometric measurement compares the potential of an indicator electrode in the analyte\nsolution with its potential in standard solutions of known analyte concentration.\nIf the electrode responds selectively to the analyte, no separation steps are required.\n0.0592\n𝐹𝑜𝑟 𝑎 𝑐𝑎𝑡𝑖𝑜𝑛 − 𝑠𝑒𝑙𝑒𝑐𝑡𝑖𝑣𝑒 𝑒𝑙𝑒𝑐𝑡𝑟𝑜𝑑𝑒: 𝐸 = 𝐶𝑜𝑛𝑠𝑡𝑎𝑛𝑡 − 𝑝𝐴\n𝑐𝑒𝑙𝑙\n𝑛\nAs the concentration (activity) of cation A increases: 𝑝𝐴 = – log 𝑎 decreases.\n𝐴\nTherefore, E increases with increasing cation concentration (Since pA decreases as concentration\ncell\nincreases, the negative sign causes 𝐸 to increase).\n𝑐𝑒𝑙𝑙\nInstrument Polarity Convention\n• Because this trend is opposite to the familiar pH scale, instrument manufacturers typically reverse the\nmeter leads for cation-sensitive electrodes (such as glass electrodes).\n• This ensures that the meter reading increases as pA increases, which corresponds to decreasing analyte\nconcentration.\n46\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 47,
      "title": "Potentiometry Measurement: Direct Potentiometry",
      "text": "Potentiometry Measurement: Direct Potentiometry\nThe simplest potentiometric measurement compares the potential of an indicator electrode in the analyte\nsolution with its potential in standard solutions of known analyte concentration.\nIf the electrode responds selectively to the analyte, no separation steps are required.\n0.0592\n𝐹𝑜𝑟 𝑎 𝑎𝑛𝑖𝑜𝑛 − 𝑠𝑒𝑙𝑒𝑐𝑡𝑖𝑣𝑒 𝑒𝑙𝑒𝑐𝑡𝑟𝑜𝑑𝑒: 𝐸 = 𝐶𝑜𝑛𝑠𝑡𝑎𝑛 − 𝑝𝐴\n𝑐𝑒𝑙𝑙\n𝑛\nAs the anion concentration (activity) 𝑎 increases, 𝑝𝐴 = − log 𝑎 𝑑𝑒𝑐𝑟𝑒𝑎𝑠𝑒𝑠\n− −\n𝐴 𝐴\nBecause of the negative sign, a decrease in pA causes an increase in E ​.\ncell\nTherefore: Higher anion concentration → higher cell potential.\nInstrument Convention\n• For anion-sensitive electrodes, the normal polarity gives intuitive readings (higher meter reading\n(higher pA) → lower analyte concentration), so no lead reversal is required.\n• Result: The meter reading increases when analyte concentration decreases (just like the pH scale).\n47\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 48,
      "title": "The Electrode-Calibration Method",
      "text": "The Electrode-Calibration Method\nWhy Calibration Is Needed\nThe constant value in the Nernst-type equation contains several terms that cannot be calculated:\nJunction potential, Asymmetry potential, Standard-state reference terms. Therefore C must be\ndetermined experimentally.\n0.0592 𝑛 (𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 −𝐸 )\n𝐸 = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 − 𝑝𝐴 solve for pA → 𝑝𝐴 = 𝑐𝑒𝑙𝑙\n𝑐𝑒𝑙𝑙\n𝑛 0.0592\nHow the Calibration Method Works\n• Measure 𝐸 for one or more standard solutions with known activity (or concentration).\n𝑐𝑒𝑙𝑙\n• Fit the data to obtain the slope and intercept (effective C).\n• Assume C remains unchanged between standards and the unknown sample.\n• Then solve for pA (or pX)\nImportant Notes\n• Multiple standards reduce error (slope often deviates from the ideal Nernst value).\n• Membrane electrodes drift → recalibrate if measurements extend for hours.\n48\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 49,
      "title": "[Ca2+] (M) E (V)",
      "text": "[Ca2+] (M) E (V)\nPractice Problem cell\n1.00×10-5 –0.125\n5.00×10-5 –0.103\n1.00×10-4 –0.093\nA series of Ca2+ standards were prepared, each containing 0.5 M KNO to maintain constant\n3\n5.00×10-4 –0.072\nionic strength. The measured cell potentials are shown below:\n1.00×10-3 –0.065\nWhat is the concentration of Ca2+ in a water sample if its cell potential is –0.084 V?\n5.00×10-3 –0.043\n1.00×10-2 –0.033\n(assuming activity ≈ concentration at constant ionic strength)\nCalibration equation from the graph is:\n𝐸 = 0.0303 log[𝐶𝑎2+] + 0.0272\ncell\nSubstitute the sample E into the calibration equation:\ncell\n−0.084 = 0.0303 log[𝐶𝑎2+] + 0.0272\n−0.084 − 0.0272\nlog 𝐶𝑎2+ = = −3.67\n0.0303\n2+\n𝐶𝑎2+ = 10log 𝐶𝑎 = 10−3.67 = 2.14 × 10−4 M\nNote: The experimental slope (0.0303) is slightly higher than the ideal Nernst slope for Ca2+ (0.05916/2 = 0.02958).\nThis small deviation is normal for real ion-selective electrodes and is one reason why we calibrate using several standards instead\nof assuming the theoretical value.\n49\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 50,
      "title": "The Standard Addition Method",
      "text": "The Standard Addition Method\nSingle-Point Standard Addition\n′\n0.0592 𝐸 − 𝐶\n′ 𝑐𝑒𝑙𝑙\n1. Measure the potential of the original sample: 𝐸 = 𝐶 + log 𝑎 → − log 𝑎 = −\nsamp samp\n𝑐𝑒𝑙𝑙 𝑛 0.0592\n𝑛\n2. Add a known volume of a standard solution, and measure the new potential:\n”\n0.0592 𝐸 − 𝐶\n” 𝑐𝑒𝑙𝑙\n𝐸 = 𝐶 + log 𝑎 → − log 𝑎 = −\n𝑐𝑒𝑙𝑙 𝑛 after after 0.0592\n𝑛\n𝑎samp𝑉samp+𝑎 𝑉\nstd std\nAccount for dilution of sample due to addition of the standard: 𝑎 =\nafter\n𝑉samp+𝑉\nstd\n𝑎 ” ′\nafter 𝑛 𝐸 −𝐸\n4. Eliminate the constant C: − log = 𝑐𝑒𝑙𝑙 𝑐𝑒𝑙𝑙\n𝑎samp 0.0592\nImportant notes\n• Assume the constant 𝐶remains unchanged between the two measurements.\n• If 𝑉 ≪ 𝑉 ,ionic strength and activity coefficients remain essentially constant.\nstd samp\n• In practice, activity is often approximated by concentration.\n• −log 𝑥 = 𝑝𝑥\n50\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 51,
      "title": "Practice Problem",
      "text": "Practice Problem\nA cell made of a saturated calomel electrode and a lead-ion selective electrode gives a potential of –0.4706 V in\n50.00 mL of a water sample. After adding 5.00 mL of 0.0200 M Pb2+ standard, the potential changes to –0.4490 V.\nAssume activity ≈ concentration, Calculate the molar concentration of Pb2+ in the original sample.\n𝐸 −𝐶\nFor Pb²⁺ (n = 2): pPb = −𝑙𝑜𝑔[Pb2+] = − 𝑐𝑒𝑙𝑙\n0.0592\n2\n−0.4706 − 𝐶\nBefore addition: − 𝑙𝑜𝑔 Pb2+ = −\n0.0592\n2\nAfter addition:\nPb2+ × 50.00 + 0.0200 × 5.00\n[Pb2+] = = 0.9091[Pb2+] + 1.818 × 10−3\nafter\n50.0 + 5.00\n−0.4490 𝑉 − 𝐶\n− 𝑙𝑜𝑔 0.9091 Pb2+ + 1.818 × 10−3 = −\n0.0592\n2\n51\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 52,
      "title": ".",
      "text": ".\nA cell made of a saturated calomel electrode and a lead-ion selective electrode gives a potential of –0.4706 V in\n50.00 mL of a water sample. After adding 5.00 mL of 0.02000 M Pb2+ standard, the potential changes to –0.4490 V.\nAssume activity ≈ concentration, Calculate the molar concentration of Pb2+ in the original sample.\nSubtract the two Nernst equations to eliminate 𝐶:\n2+\n𝑃𝑏 2 −0.4490 − −0.4706\n−log =\n0.9091 𝑃𝑏2+ + 1.818 × 10−3 0.0592\n2 [−0.4490 − (−0.4706)] 0.0432\n→ = = 0.7297\n0.0592 0.0592\n2+ 2+\n𝑃𝑏 𝑃𝑏\n−0.7297\nSo: −log = −0.7297 → = 10 = 0.1863\n0.9091 𝑃𝑏2+ +1.818×10−3 0.9091 𝑃𝑏2+ +1.818×10−3\n2+\nNow solve for [𝑃𝑏 ]:\n2+ 2+ −3 2+ 2+ −4\n𝑃𝑏 = 0.1863 0.9091 𝑃𝑏 + 1.818 × 10 → 𝑃𝑏 = 0.1694 𝑃𝑏 + 3.388 × 10\n0.8306 𝑃𝑏2+ = 3.388 × 10−4\n2+ −4\n⟹ 𝑃𝑏 = 4.08 × 10 M\n52\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 53,
      "title": "The Standard Addition Method",
      "text": "The Standard Addition Method\nMultiple-Point Standard Addition\n1. Measure the initial potential 𝐸 .\nsamp\n2. Add small, known volumes of standard (𝑉 ) to the same beaker.\nstd\n3. After each addition, measure the new potential 𝐸 , 𝐸 , 𝐸 , …\n1 2 3\n𝑎samp𝑉samp+𝑎 𝑉\nstd std\nFor each addition, the analyte activity becomes: 𝑎 =\nafter\n𝑉samp+𝑉\nstd\n0.0592\nThe Nernst equation applies: 𝐸 = 𝐶 + 𝑙𝑜𝑔 𝑎\n𝑛\nStandard Additions Plot for Chloride in Celery Salt\nISE Slope = -52.4 mV, [KCl] = 0.09986 M\nL) 6.00\nm\n(\nepo ) 5.00\nSl\nE/\n(0\n1 4.00\nx\nV a o l t t 3.00\n=\nY\n2.00\nVs' = -23.8 mL\n1.00\nVolume of Added KCl (mL)\n0.00\n-30.00 -20.00 -10.00 0.00 10.00 20.00 30.00\n53\nCHM3120 | Ali Shafiee | UF\n6\n5\n4\n3\n2\n1\n0\n.0\n.0\n.0\n.0\n.0\n.0\n.0\n0\n0\n0\n0\n0\n0\n0-\n3 0 .0 0 - 2 0 .0 0 - 1 0 .0 0 0 .0 0 1 0 .0 0 2 0 .0 0 3 0 .0 0\n)\nL\nm\n(\n)e\np\no\nlS\n/E\n( 0\n1\nx\nla\nto\nVt\n=\nY\nV s ' = -2 3 .8 m L\nS t a n d a\nIS\nrE d A\nS\ndlo dp it io\ne =\nn\n-\ns P\n5 2\nV o\nlo t f o\n.4 m V\nlu m e\nr C\n, [ K\no f\nhC\nA\nlo r id e in\nl] = 0 .0 9\nd d e d K C\nC e le r\n9 8 6 M\nl ( m L\ny\n)\nS a lt\n• Because the constant 𝐶 is the same for all additions, plotting E vs.\nadded volume (𝑉 ) gives a straight line. std\n• The x-intercept gives the equivalent negative volume needed to\ndilute the analyte to zero: 𝑉′ = −(x−intercept) 𝑠\n• Then the sample concentration is:\n′\n𝑉 𝐶 = 𝐶 ( 𝑠 )\nsamp std\n𝑉samp"
    },
    {
      "number": 54,
      "title": "Thank you all for a wonderful semester.",
      "text": "Thank you all for a wonderful semester.\nI truly hope you enjoyed the course as much\nas I enjoyed teaching it this semester.\nPlease stay in touch, and best of luck on\nyour exams!\n54\nCHM4130 | Ali Shafiee | UF"
    }
  ],
  "practice": [
    {
      "number": 1,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "This practice problem set covers the following topics:",
      "key": "This practice problem set covers the following topics:",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 2,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "This set is for practice only and will not be graded.",
      "key": "This set is for practice only and will not be graded.\nPlease note that this key is provided for guidance only and is meant to help you check your work after you have attempted the problems.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 3,
      "topic": "Statistics",
      "difficulty": "Foundational",
      "prompt": "Potentiometry is described as a static electroanalytical method. What does static mean in terms of current during the measurement?",
      "key": "To get the most out of these practice problems, you should solve each question fully using your lecture notes, class examples, and course materials before looking at the final answer. Analytical chemistry is best learned by working through the reasoning, setup, calculations, units, and significant figures yourself, not just by looking at the answer.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 4,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "In one or two sentences, describe what potentiometry measures and why the Nernst equation matters for this method.",
      "key": "For calculation questions, make sure you can follow each step, choose the correct equation, use the correct units, and report your final answer with the appropriate significant figures. For conceptual questions, focus on understanding why the answer makes sense rather than memorizing the key.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 5,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "A galvanic cell and a potentiometric cell both involve electrodes. What is the key difference in how they are used analytically?",
      "key": "If you need help at any step, or if you would like someone to check your step-by-step work, please use the resources available to you. You can come to my office hours or the TA office hours, post your question on Campuswire and ask for peer or instructor/TA help, or use ChemGPT to guide your thinking through the problem.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 6,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "List the three main parts of a potentiometric measurement cell.",
      "key": "These practice problems are meant to prepare you for the type of thinking you may need on exams, but exam questions may not be identical to the practice set.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 7,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "By convention, which side of a potentiometric cell notation is the reference electrode placed on?",
      "key": "I ≈ 0; potential is measured with essentially no current flow.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 8,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Using the lecture convention, write the measured cell-potential expression in terms of Eind, Eref, and Ej.",
      "key": "Potential difference; related logarithmically to ion activity by Nernst.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 9,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What is the job of the indicator electrode in a potentiometric measurement?",
      "key": "Galvanic: current flows. Potentiometry: open-circuit potential only.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 10,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "What does the salt bridge/junction do in a potentiometric cell?",
      "key": "Reference electrode, salt bridge/junction, indicator electrode.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 11,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Why is the liquid junction potential, Ej, treated as an uncertainty or error source?",
      "key": "It develops a potential that responds to the target ion activity.",
      "hint": "For addition/subtraction combine absolute uncertainty; for multiplication/division combine relative uncertainty."
    },
    {
      "number": 12,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Why is the standard hydrogen electrode not practical as a routine reference electrode?",
      "key": "Maintains charge balance and limits solution mixing.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 13,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Give two important characteristics of an ideal reference electrode.",
      "key": "It cannot be fully eliminated and is hard to calculate exactly.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 14,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What are the main chemical components of a calomel reference electrode?",
      "key": "Requires H2 gas, Pt, and strict controlled conditions.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 15,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Write the half-reaction for the calomel electrode.",
      "key": "Known, reproducible, constant, and independent of analyte composition.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 16,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "At 25 °C, what is the potential of a saturated calomel electrode versus SHE?",
      "key": "Hg(l), Hg2Cl2 (s), and KCl solution.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 17,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Why does a saturated KCl reference electrode maintain a nearly constant potential?",
      "key": "Hg2Cl2 (s) + 2e- <=> 2Hg(l) + 2Cl-(aq).",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 18,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What are the main chemical components of an Ag/AgCl reference electrode?",
      "key": "Ag wire coated with AgCl in KCl solution.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 19,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Write the half-reaction for an Ag/AgCl reference electrode.",
      "key": "Sat'd Ag/AgCl: +0.199 V; SCE: +0.2444 V.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 20,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Which reference electrode is better for measurements above 60 °C: calomel or Ag/AgCl?",
      "key": "aX = [X]gammaX; ionic interactions make activity the effective concentration.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 21,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "At 25 °C, what are the approximate potentials versus SHE for saturated Ag/AgCl and saturated calomel electrodes?",
      "key": "Higher charge lowers gamma more strongly.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 22,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "Define activity, aX, and explain why it is not always the same as molar concentration.",
      "key": "E°' includes activity-coefficient effects at defined ionic strength.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 23,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "Calculate aCl- if [Cl-] = 0.100 M and gammaCl- = 0.755.",
      "key": "Activity, not concentration, controls the electrode response. Strong ion interactions in saturated KCl lower gammaCl- (0.55*4.75=2.65M)",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 24,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "According to Debye-Huckel behavior, how does higher ionic charge affect gamma?",
      "key": "K+ and Cl- have similar mobilities, minimizing Ej.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 25,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Why do we sometimes use a formal potential, E°', instead of the ideal standard potential E°?",
      "key": "Unequal diffusion/mobility of ions across a solution boundary.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 26,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "A saturated KCl solution has [Cl-] about 4.79 M but behaves like a_Cl- about 2.65 M. Explain why?",
      "key": "Dilute side; H+ diffuses faster than Cl-.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 27,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "Why is KCl commonly used in salt bridges?",
      "key": "Rapid, reproducible, Nernstian, and reasonably selective.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 28,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What causes a liquid junction potential?",
      "key": "A metal electrode in equilibrium with its own cation.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 29,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "At a 0.1 M HCl | 0.01 M HCl junction, which side initially becomes positive and why?",
      "key": "Poor selectivity; limited pH range; oxygen/air effects; irregular slopes.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 30,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "For the liquid junction 0.1 M KNO3 | 0.1 M NaCl, which side is expected to become negative?",
      "key": "A metal coated with a sparingly soluble salt of that metal.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 31,
      "topic": "Lecture practice",
      "difficulty": "Intermediate",
      "prompt": "A cell has Eind = 550.0 mV, Eref = 244.4 mV, and Ej = 2.5 mV.",
      "key": "Provides an electron-transfer surface for a redox couple.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 32,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "List three desirable properties of an ideal indicator electrode.",
      "key": "It depends on whether the x-axis is log(Ox/Red) or log(Red/Ox).",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 33,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What is an electrode of the first kind?",
      "key": "Results are often reported as p-functions such as pH, pCa, or pNO3.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 34,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "For a first-kind electrode Mn+/M, what is the expected slope versus pM at 25 °C?",
      "key": "No; the potential comes from selective partitioning/charge separation.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 35,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Give two limitations of first-kind indicator electrodes.",
      "key": "Provides a fixed ion activity on the inside of the membrane.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 36,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What is an electrode of the second kind?",
      "key": "Polycrystalline inorganic salts or single crystals.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 37,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "For Ag/AgCl used as an indicator electrode for Cl-, what is the slope versus pCl at 25 °C?",
      "key": "Cd2+ controls S2- activity, which controls Ag+ activity in the membrane.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 38,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What is the function of a Pt or Au inert redox electrode?",
      "key": "First kind senses metal cation; second kind senses related anion; inert senses redox ratio.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 39,
      "topic": "Electrochemical potentials",
      "difficulty": "Intermediate",
      "prompt": "Calculate E for a Pt electrode sensing Fe^3+/Fe2+ if E° = 0.771 V, [Fe3+] = 0.10 M, and [Fe2+] = 0.010 M.",
      "key": "External reference plus internal Ag/AgCl reference.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 40,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "For an inert redox electrode, why can the calibration slope be positive or negative?",
      "key": "Interfacial potential at the glass/solution surface.",
      "hint": "Build the line y = mx + b, then use the slope and intercept to convert signal back to concentration."
    },
    {
      "number": 41,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Why are membrane electrodes often called p-ion electrodes?",
      "key": "Hydration forms the gel layer required for H+ exchange.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 42,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Does a redox reaction occur at the membrane of an ion-selective electrode?",
      "key": "One probe containing both glass indicator and reference electrode.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 43,
      "topic": "Electrochemical potentials",
      "difficulty": "Intermediate",
      "prompt": "A Ca2+ liquid-membrane electrode has internal aCa = 0.0010 M and external aCa = 0.10 M. Calculate Emem at 25 °C.",
      "key": "At very low pH, measured pH is too high.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 44,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What does the internal solution do in a liquid-membrane ISE?",
      "key": "Strong alkaline error; electrode partly responds to Na+.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 45,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What materials are used to make crystalline-membrane electrodes?",
      "key": "Good H+ specificity to about pH 9; Na+ interference at higher pH.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 46,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "How can a mixed Ag2S/CdS membrane be selective for Cd2+?",
      "key": "The constant includes junction, asymmetry, and reference terms.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 47,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Compare first-kind, second-kind, and inert metallic indicator electrodes in one concise statement.",
      "key": "Corrects for sample-matrix and ionic-strength effects.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 48,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Name the two reference electrodes in a typical glass pH electrode system.",
      "key": "Keeps matrix and activity coefficients nearly constant.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 49,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What is the usual thickness range of the pH-sensitive glass membrane?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 50,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What is the boundary potential in a glass pH electrode?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 51,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Why must a glass pH electrode be hydrated before use?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 52,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What is the acid error, and what happens to the measured pH?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 53,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "What is the alkaline/sodium error, and what happens to the measured pH?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 54,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Why should a pH reading for 1.0 M NaOH be treated cautiously with a normal glass electrode?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 55,
      "topic": "Electrochemical potentials",
      "difficulty": "Intermediate",
      "prompt": "A glass electrode reads 0.000 V at pH 7.00. Assuming 59.2 mV per pH unit, what is the expected change in potential at pH 4.00?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 56,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "How does Corning 015 glass perform at high pH?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 57,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "For a cation-selective electrode, how does Ecell change as cation concentration increases?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 58,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Why is calibration needed instead of calculating the constant in the Nernst-type equation from theory?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Build the line y = mx + b, then use the slope and intercept to convert signal back to concentration."
    },
    {
      "number": 59,
      "topic": "Lecture practice",
      "difficulty": "Intermediate",
      "prompt": "A Ca2+ calibration is E_cell = 0.0303 log[Ca^2+] + 0.0272. If a sample gives Ecell = -0.084 V, calculate [Ca2+].",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Build the line y = mx + b, then use the slope and intercept to convert signal back to concentration."
    },
    {
      "number": 60,
      "topic": "Electrochemical potentials",
      "difficulty": "Foundational",
      "prompt": "Why should membrane electrodes be recalibrated during long measurement periods?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Write the half reaction, electron count, and reaction quotient before using the Nernst equation."
    },
    {
      "number": 61,
      "topic": "Electrochemical potentials",
      "difficulty": "Intermediate",
      "prompt": "A fluoride ISE calibration is E = -58.1 log[F-] + 125 mV. If E = 210 mV, calculate [F-].",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Build the line y = mx + b, then use the slope and intercept to convert signal back to concentration."
    },
    {
      "number": 62,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "What is the main purpose of the standard addition method in potentiometry?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 63,
      "topic": "Electrochemical potentials",
      "difficulty": "Advanced",
      "prompt": "A Pb2+ ISE gives E' = -0.4706 V in 50.00 mL sample. After 5.00 mL of 0.0200 M Pb2+ is added, E'' = -0.4490 V. What is [Pb2+] in the original sample?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 64,
      "topic": "Lecture practice",
      "difficulty": "Intermediate",
      "prompt": "A multiple-point standard addition plot has x-intercept -15.0 mL. If Vsample = 25.0 mL and Cstandard = 0.100 M, estimate Csample.",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 65,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "Why should the added standard volume be small compared with the sample volume in standard addition?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 66,
      "topic": "Electrochemical potentials",
      "difficulty": "Intermediate",
      "prompt": "A Mg2+ ISE is moved from 1.00 x 10-4 M MgCl2 to 1.00 x 10-3 M MgCl2. What potential change is expected at 25 °C?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    }
  ],
  "sourcePdfTagged": true,
  "tools": [
    "ISE Calibration Lab",
    "Nernst Slope Explorer",
    "pH Electrode Decision Coach"
  ]
};
