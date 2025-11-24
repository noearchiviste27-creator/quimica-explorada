// Elementos del DOM
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const periodicTableBtn = document.getElementById('periodicTableBtn');
const toolsBtn = document.getElementById('toolsBtn');
const supportBtn = document.getElementById('supportBtn');
const homeLink = document.getElementById('homeLink');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const backToHomeFromTools = document.getElementById('backToHomeFromTools');
const toolsPeriodicTableBtn = document.getElementById('toolsPeriodicTableBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const supportModal = document.getElementById('supportModal');
const elementModal = document.getElementById('elementModal');
const closeBtns = document.querySelectorAll('.close-btn');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const heroSection = document.getElementById('heroSection');
const toolsSection = document.getElementById('toolsSection');
const periodicTableSection = document.getElementById('periodicTableSection');
const periodicTable = document.getElementById('periodicTable');
const elementModalTitle = document.getElementById('elementModalTitle');
const elementDetails = document.getElementById('elementDetails');
const compoundInput = document.getElementById('compoundInput');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');
const openCalculator = document.getElementById('openCalculator');
const openPeriodicTable = document.getElementById('openPeriodicTable');

// Datos completos de la tabla periódica
const elements = [
    // Fila 1
    { number: 1, symbol: "H", name: "Hidrógeno", category: "no-metal", mass: "1.008", description: "Elemento más abundante del universo. Gas inflamable usado en combustibles y producción de amoníaco." },
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    { number: 2, symbol: "He", name: "Helio", category: "noble-gas", mass: "4.0026", description: "Gas noble usado en globos, criogenia y como gas protector en soldadura." },
    
    // Fila 2
    { number: 3, symbol: "Li", name: "Litio", category: "alkali", mass: "6.94", description: "Metal más ligero, usado en baterías recargables y tratamientos para trastornos bipolares." },
    { number: 4, symbol: "Be", name: "Berilio", category: "alkaline-earth", mass: "9.0122", description: "Metal usado en aleaciones aeroespaciales y como moderador en reactores nucleares." },
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    { number: 5, symbol: "B", name: "Boro", category: "metalloid", mass: "10.81", description: "Metaloide usado en vidrio borosilicato (Pyrex) y como semiconductor en electrónica." },
    { number: 6, symbol: "C", name: "Carbono", category: "no-metal", mass: "12.011", description: "Base de la vida orgánica. Existe como diamante, grafito y fullerenos." },
    { number: 7, symbol: "N", name: "Nitrógeno", category: "no-metal", mass: "14.007", description: "Constituye 78% del aire. Esencial para la vida, usado en fertilizantes." },
    { number: 8, symbol: "O", name: "Oxígeno", category: "no-metal", mass: "15.999", description: "Esencial para la respiración. 21% del aire. Usado en medicina y soldadura." },
    { number: 9, symbol: "F", name: "Flúor", category: "halogen", mass: "18.998", description: "Elemento más electronegativo. Usado en pastas dentales y producción de teflón." },
    { number: 10, symbol: "Ne", name: "Neón", category: "noble-gas", mass: "20.180", description: "Gas noble que produce luz roja-anaranjada en letreros luminosos." },
    
    // Fila 3
    { number: 11, symbol: "Na", name: "Sodio", category: "alkali", mass: "22.990", description: "Metal alcalino reactivo usado en compuestos químicos y lámparas de vapor." },
    { number: 12, symbol: "Mg", name: "Magnesio", category: "alkaline-earth", mass: "24.305", description: "Metal esencial para la vida, usado en aleaciones ligeras y pirotecnia." },
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    { number: 13, symbol: "Al", name: "Aluminio", category: "other-metal", mass: "26.982", description: "Metal ligero y resistente a la corrosión. Usado en envases y construcción." },
    { number: 14, symbol: "Si", name: "Silicio", category: "metalloid", mass: "28.085", description: "Segundo elemento más abundante. Semiconductor esencial en electrónica." },
    { number: 15, symbol: "P", name: "Fósforo", category: "no-metal", mass: "30.974", description: "Esencial para la vida (ADN, ATP). Usado en fertilizantes y fósforos." },
    { number: 16, symbol: "S", name: "Azufre", category: "no-metal", mass: "32.06", description: "No metal amarillo usado en producción de ácido sulfúrico y fertilizantes." },
    { number: 17, symbol: "Cl", name: "Cloro", category: "halogen", mass: "35.45", description: "Gas reactivo usado para purificar agua y producir plásticos como PVC." },
    { number: 18, symbol: "Ar", name: "Argón", category: "noble-gas", mass: "39.948", description: "Gas noble más abundante en el aire. Usado en lámparas y soldadura." },
    
    // Fila 4
    { number: 19, symbol: "K", name: "Potasio", category: "alkali", mass: "39.098", description: "Metal alcalino esencial para funciones nerviosas y musculares." },
    { number: 20, symbol: "Ca", name: "Calcio", category: "alkaline-earth", mass: "40.078", description: "Esencial para huesos y dientes. Usado en construcción como cal." },
    { number: 21, symbol: "Sc", name: "Escandio", category: "transition", mass: "44.956", description: "Metal de transición usado en aleaciones ligeras para industria aeroespacial." },
    { number: 22, symbol: "Ti", name: "Titanio", category: "transition", mass: "47.867", description: "Metal fuerte y resistente a la corrosión. Usado en prótesis y aeronáutica." },
    { number: 23, symbol: "V", name: "Vanadio", category: "transition", mass: "50.942", description: "Metal usado en aceros resistentes y como catalizador." },
    { number: 24, symbol: "Cr", name: "Cromo", category: "transition", mass: "51.996", description: "Metal usado para cromar superficies y en aceros inoxidables." },
    { number: 25, symbol: "Mn", name: "Manganeso", category: "transition", mass: "54.938", description: "Metal esencial para funciones biológicas. Usado en aceros y baterías." },
    { number: 26, symbol: "Fe", name: "Hierro", category: "transition", mass: "55.845", description: "Metal esencial para la hemoglobina. Principal componente del acero." },
    { number: 27, symbol: "Co", name: "Cobalto", category: "transition", mass: "58.933", description: "Metal usado en imanes, aleaciones resistentes y colorantes azules." },
    { number: 28, symbol: "Ni", name: "Níquel", category: "transition", mass: "58.693", description: "Metal usado en aceros inoxidables, baterías y monedas." },
    { number: 29, symbol: "Cu", name: "Cobre", category: "transition", mass: "63.546", description: "Excelente conductor usado en cables eléctricos y aleaciones como bronce." },
    { number: 30, symbol: "Zn", name: "Zinc", category: "transition", mass: "65.38", description: "Metal usado para galvanizar hierro y en aleaciones como latón." },
    { number: 31, symbol: "Ga", name: "Galio", category: "other-metal", mass: "69.723", description: "Metal que se funde a temperatura ambiente. Usado en semiconductores." },
    { number: 32, symbol: "Ge", name: "Germanio", category: "metalloid", mass: "72.630", description: "Metaloide semiconductor usado en transistores y fibras ópticas." },
    { number: 33, symbol: "As", name: "Arsénico", category: "metalloid", mass: "74.922", description: "Metaloide tóxico usado en semiconductores y conservantes de madera." },
    { number: 34, symbol: "Se", name: "Selenio", category: "no-metal", mass: "78.971", description: "No metal esencial en pequeñas cantidades. Usado en fotocopiadoras." },
    { number: 35, symbol: "Br", name: "Bromo", category: "halogen", mass: "79.904", description: "Único halógeno líquido. Usado en retardantes de llama y medicamentos." },
    { number: 36, symbol: "Kr", name: "Kriptón", category: "noble-gas", mass: "83.798", description: "Gas noble usado en lámparas fluorescentes y flashes fotográficos." },
    
    // Fila 5
    { number: 37, symbol: "Rb", name: "Rubidio", category: "alkali", mass: "85.468", description: "Metal alcalino muy reactivo usado en relojes atómicos." },
    { number: 38, symbol: "Sr", name: "Estroncio", category: "alkaline-earth", mass: "87.62", description: "Metal usado en fuegos artificiales (color rojo) y en medicina." },
    { number: 39, symbol: "Y", name: "Itrio", category: "transition", mass: "88.906", description: "Metal de transición usado en superconductores y LEDs." },
    { number: 40, symbol: "Zr", name: "Circonio", category: "transition", mass: "91.224", description: "Metal resistente a la corrosión usado en reactores nucleares." },
    { number: 41, symbol: "Nb", name: "Niobio", category: "transition", mass: "92.906", description: "Metal usado en aceros especiales y superconductores." },
    { number: 42, symbol: "Mo", name: "Molibdeno", category: "transition", mass: "95.95", description: "Metal esencial para enzimas. Usado en aceros de alta resistencia." },
    { number: 43, symbol: "Tc", name: "Tecnecio", category: "transition", mass: "(98)", description: "Primer elemento artificial. Usado en medicina nuclear." },
    { number: 44, symbol: "Ru", name: "Rutenio", category: "transition", mass: "101.07", description: "Metal usado en aleaciones resistentes y como catalizador." },
    { number: 45, symbol: "Rh", name: "Rodio", category: "transition", mass: "102.91", description: "Metal precioso usado en convertidores catalíticos y joyería." },
    { number: 46, symbol: "Pd", name: "Paladio", category: "transition", mass: "106.42", description: "Metal usado en convertidores catalíticos y odontología." },
    { number: 47, symbol: "Ag", name: "Plata", category: "transition", mass: "107.87", description: "Mejor conductor eléctrico. Usado en joyería, electrónica y fotografía." },
    { number: 48, symbol: "Cd", name: "Cadmio", category: "transition", mass: "112.41", description: "Metal usado en baterías recargables y pigmentos amarillos." },
    { number: 49, symbol: "In", name: "Indio", category: "other-metal", mass: "114.82", description: "Metal blando usado en pantallas táctiles y semiconductores." },
    { number: 50, symbol: "Sn", name: "Estaño", category: "other-metal", mass: "118.71", description: "Metal usado para recubrir latas de comida y en soldaduras." },
    { number: 51, symbol: "Sb", name: "Antimonio", category: "metalloid", mass: "121.76", description: "Metaloide usado en retardantes de llama y aleaciones." },
    { number: 52, symbol: "Te", name: "Telurio", category: "metalloid", mass: "127.60", description: "Metaloide usado en paneles solares y aleaciones." },
    { number: 53, symbol: "I", name: "Yodo", category: "halogen", mass: "126.90", description: "Halógeno esencial para la tiroides. Usado en desinfectantes." },
    { number: 54, symbol: "Xe", name: "Xenón", category: "noble-gas", mass: "131.29", description: "Gas noble usado en lámparas y anestésicos." },
    
    // Fila 6
    { number: 55, symbol: "Cs", name: "Cesio", category: "alkali", mass: "132.91", description: "Metal alcalino más reactivo. Usado en relojes atómicos." },
    { number: 56, symbol: "Ba", name: "Bario", category: "alkaline-earth", mass: "137.33", description: "Metal usado en contrastes para rayos X y fuegos artificiales." },
    { number: 57, symbol: "La", name: "Lantano", category: "lanthanide", mass: "138.91", description: "Primer lantánido. Usado en lentes de cámaras y baterías." },
    { number: 72, symbol: "Hf", name: "Hafnio", category: "transition", mass: "178.49", description: "Metal usado en barras de control de reactores nucleares." },
    { number: 73, symbol: "Ta", name: "Tántalo", category: "transition", mass: "180.95", description: "Metal resistente a la corrosión usado en componentes electrónicos." },
    { number: 74, symbol: "W", name: "Wolframio", category: "transition", mass: "183.84", description: "Metal con punto de fusión más alto. Usado en filamentos de bombillas." },
    { number: 75, symbol: "Re", name: "Renio", category: "transition", mass: "186.21", description: "Uno de los metales más densos. Usado en catalizadores." },
    { number: 76, symbol: "Os", name: "Osmio", category: "transition", mass: "190.23", description: "Metal más denso. Usado en aleaciones duras y puntas de plumas." },
    { number: 77, symbol: "Ir", name: "Iridio", category: "transition", mass: "192.22", description: "Metal muy denso y resistente. Usado en puntas de estilográficas." },
    { number: 78, symbol: "Pt", name: "Platino", category: "transition", mass: "195.08", description: "Metal precioso usado en catalizadores y joyería." },
    { number: 79, symbol: "Au", name: "Oro", category: "transition", mass: "196.97", description: "Metal precioso maleable usado en joyería y electrónica." },
    { number: 80, symbol: "Hg", name: "Mercurio", category: "transition", mass: "200.59", description: "Único metal líquido a temperatura ambiente. Usado en termómetros." },
    { number: 81, symbol: "Tl", name: "Talio", category: "other-metal", mass: "204.38", description: "Metal tóxico usado en detectores de infrarrojos." },
    { number: 82, symbol: "Pb", name: "Plomo", category: "other-metal", mass: "207.2", description: "Metal denso usado en baterías y protección contra radiación." },
    { number: 83, symbol: "Bi", name: "Bismuto", category: "other-metal", mass: "208.98", description: "Metal pesado usado en medicamentos y cosméticos." },
    { number: 84, symbol: "Po", name: "Polonio", category: "metalloid", mass: "(209)", description: "Elemento radiactivo usado en fuentes de neutrones." },
    { number: 85, symbol: "At", name: "Astato", category: "halogen", mass: "(210)", description: "Elemento radiactivo muy raro, el halógeno más pesado." },
    { number: 86, symbol: "Rn", name: "Radón", category: "noble-gas", mass: "(222)", description: "Gas noble radiactivo, peligroso para la salud en interiores." },
    
    // Fila 7
    { number: 87, symbol: "Fr", name: "Francio", category: "alkali", mass: "(223)", description: "Elemento natural más inestable, extremadamente radiactivo." },
    { number: 88, symbol: "Ra", name: "Radio", category: "alkaline-earth", mass: "(226)", description: "Elemento radiactivo histórico, usado antiguamente en pinturas luminiscentes." },
    { number: 89, symbol: "Ac", name: "Actinio", category: "actinide", mass: "(227)", description: "Elemento radiactivo que da nombre a la serie de los actínidos." },
    { number: 104, symbol: "Rf", name: "Rutherfordio", category: "transition", mass: "(267)", description: "Elemento sintético nombrado en honor a Ernest Rutherford." },
    { number: 105, symbol: "Db", name: "Dubnio", category: "transition", mass: "(268)", description: "Elemento sintético altamente radiactivo." },
    { number: 106, symbol: "Sg", name: "Seaborgio", category: "transition", mass: "(269)", description: "Elemento sintético nombrado en honor a Glenn T. Seaborg." },
    { number: 107, symbol: "Bh", name: "Bohrio", category: "transition", mass: "(270)", description: "Elemento sintético nombrado en honor a Niels Bohr." },
    { number: 108, symbol: "Hs", name: "Hassio", category: "transition", mass: "(269)", description: "Elemento sintético muy pesado y radiactivo." },
    { number: 109, symbol: "Mt", name: "Meitnerio", category: "transition", mass: "(278)", description: "Elemento sintético nombrado en honor a Lise Meitner." },
    { number: 110, symbol: "Ds", name: "Darmstadtio", category: "transition", mass: "(281)", description: "Elemento sintético creado en Darmstadt, Alemania." },
    { number: 111, symbol: "Rg", name: "Roentgenio", category: "transition", mass: "(282)", description: "Elemento sintético nombrado en honor a Wilhelm Röntgen." },
    { number: 112, symbol: "Cn", name: "Copernicio", category: "transition", mass: "(285)", description: "Elemento sintético nombrado en honor a Nicolás Copérnico." },
    { number: 113, symbol: "Nh", name: "Nihonio", category: "other-metal", mass: "(286)", description: "Primer elemento descubierto en Asia, nombrado por Japón (Nihon)." },
    { number: 114, symbol: "Fl", name: "Flerovio", category: "other-metal", mass: "(289)", description: "Elemento sintético nombrado en honor al Laboratorio Flerov." },
    { number: 115, symbol: "Mc", name: "Moscovio", category: "other-metal", mass: "(290)", description: "Elemento sintético nombrado en honor a Moscú." },
    { number: 116, symbol: "Lv", name: "Livermorio", category: "other-metal", mass: "(293)", description: "Elemento sintético nombrado en honor al Laboratorio Livermore." },
    { number: 117, symbol: "Ts", name: "Teneso", category: "halogen", mass: "(294)", description: "Elemento sintético, halógeno superpesado." },
    { number: 118, symbol: "Og", name: "Oganesón", category: "noble-gas", mass: "(294)", description: "Elemento sintético nombrado en honor a Yuri Oganesián." }
];

// Lantánidos
const lanthanides = [
    { number: 58, symbol: "Ce", name: "Cerio", category: "lanthanide", mass: "140.12", description: "Lantánido más abundante. Usado en catalizadores y piedras de mechero." },
    { number: 59, symbol: "Pr", name: "Praseodimio", category: "lanthanide", mass: "140.91", description: "Usado en imanes permanentes y aleaciones para aviones." },
    { number: 60, symbol: "Nd", name: "Neodimio", category: "lanthanide", mass: "144.24", description: "Usado en imanes muy fuertes para motores y audífonos." },
    { number: 61, symbol: "Pm", name: "Prometio", category: "lanthanide", mass: "(145)", description: "Elemento radiactivo usado en baterías nucleares." },
    { number: 62, symbol: "Sm", name: "Samario", category: "lanthanide", mass: "150.36", description: "Usado en imanes permanentes y absorción de neutrones." },
    { number: 63, symbol: "Eu", name: "Europio", category: "lanthanide", mass: "151.96", description: "Usado en fósforos rojos para televisiones y lámparas fluorescentes." },
    { number: 64, symbol: "Gd", name: "Gadolinio", category: "lanthanide", mass: "157.25", description: "Usado en medios de contraste para resonancia magnética." },
    { number: 65, symbol: "Tb", name: "Terbio", category: "lanthanide", mass: "158.93", description: "Usado en fósforos verdes y dispositivos de estado sólido." },
    { number: 66, symbol: "Dy", name: "Disprosio", category: "lanthanide", mass: "162.50", description: "Usado en imanes permanentes y reactores nucleares." },
    { number: 67, symbol: "Ho", name: "Holmio", category: "lanthanide", mass: "164.93", description: "Tiene las propiedades magnéticas más fuertes de cualquier elemento." },
    { number: 68, symbol: "Er", name: "Erbio", category: "lanthanide", mass: "167.26", description: "Usado en fibras ópticas y aleaciones para reactores nucleares." },
    { number: 69, symbol: "Tm", name: "Tulio", category: "lanthanide", mass: "168.93", description: "Elemento más raro de los lantánidos. Usado en equipos médicos." },
    { number: 70, symbol: "Yb", name: "Iterbio", category: "lanthanide", mass: "173.05", description: "Usado en aleaciones y como fuente de radiación en medicina." },
    { number: 71, symbol: "Lu", name: "Lutecio", category: "lanthanide", mass: "174.97", description: "Lantánido más pesado. Usado en catalizadores de craqueo petrolero." }
];

// Actínidos
const actinides = [
    { number: 90, symbol: "Th", name: "Torio", category: "actinide", mass: "232.04", description: "Actínido usado como combustible nuclear alternativo." },
    { number: 91, symbol: "Pa", name: "Protactinio", category: "actinide", mass: "231.04", description: "Elemento radiactivo muy raro y tóxico." },
    { number: 92, symbol: "U", name: "Uranio", category: "actinide", mass: "238.03", description: "Combustible principal de reactores nucleares." },
    { number: 93, symbol: "Np", name: "Neptunio", category: "actinide", mass: "(237)", description: "Primer elemento transuránico sintetizado." },
    { number: 94, symbol: "Pu", name: "Plutonio", category: "actinide", mass: "(244)", description: "Usado en armas nucleares y como combustible en reactores." },
    { number: 95, symbol: "Am", name: "Americio", category: "actinide", mass: "(243)", description: "Usado en detectores de humo y como fuente portátil de rayos gamma." },
    { number: 96, symbol: "Cm", name: "Curio", category: "actinide", mass: "(247)", description: "Elemento radiactivo usado en generadores termoeléctricos." },
    { number: 97, symbol: "Bk", name: "Berkelio", category: "actinide", mass: "(247)", description: "Elemento sintético nombrado en honor a Berkeley, California." },
    { number: 98, symbol: "Cf", name: "Californio", category: "actinide", mass: "(251)", description: "Produce neutrones espontáneamente, usado en reactores." },
    { number: 99, symbol: "Es", name: "Einstenio", category: "actinide", mass: "(252)", description: "Elemento sintético nombrado en honor a Albert Einstein." },
    { number: 100, symbol: "Fm", name: "Fermio", category: "actinide", mass: "(257)", description: "Elemento sintético nombrado en honor a Enrico Fermi." },
    { number: 101, symbol: "Md", name: "Mendelevio", category: "actinide", mass: "(258)", description: "Elemento sintético nombrado en honor a Dmitri Mendeléyev." },
    { number: 102, symbol: "No", name: "Nobelio", category: "actinide", mass: "(259)", description: "Elemento sintético nombrado en honor a Alfred Nobel." },
    { number: 103, symbol: "Lr", name: "Laurencio", category: "actinide", mass: "(266)", description: "Último actínido, nombrado en honor a Ernest Lawrence." }
];

// Colores para cada categoría de elementos (más vibrantes)
const categoryColors = {
    "alkali": "#FF6B6B",           // Rojo vibrante
    "alkaline-earth": "#4ECDC4",   // Turquesa
    "transition": "#45B7D1",       // Azul claro
    "other-metal": "#96CEB4",      // Verde menta
    "metalloid": "#FFEAA7",        // Amarillo suave
    "no-metal": "#FDCB6E",         // Amarillo dorado
    "halogen": "#A29BFE",          // Púrpura claro
    "noble-gas": "#6C5CE7",        // Púrpura vibrante
    "lanthanide": "#FD79A8",       // Rosa
    "actinide": "#E84393"          // Rosa fucsia
};

// Masas atómicas para la calculadora
const atomicMasses = {
    "H": 1.008, "He": 4.0026, "Li": 6.94, "Be": 9.0122, "B": 10.81,
    "C": 12.011, "N": 14.007, "O": 15.999, "F": 18.998, "Ne": 20.180,
    "Na": 22.990, "Mg": 24.305, "Al": 26.982, "Si": 28.085, "P": 30.974,
    "S": 32.06, "Cl": 35.45, "Ar": 39.948, "K": 39.098, "Ca": 40.078,
    "Sc": 44.956, "Ti": 47.867, "V": 50.942, "Cr": 51.996, "Mn": 54.938,
    "Fe": 55.845, "Co": 58.933, "Ni": 58.693, "Cu": 63.546, "Zn": 65.38,
    "Ga": 69.723, "Ge": 72.630, "As": 74.922, "Se": 78.971, "Br": 79.904,
    "Kr": 83.798, "Rb": 85.468, "Sr": 87.62, "Y": 88.906, "Zr": 91.224,
    "Nb": 92.906, "Mo": 95.95, "Tc": 98, "Ru": 101.07, "Rh": 102.91,
    "Pd": 106.42, "Ag": 107.87, "Cd": 112.41, "In": 114.82, "Sn": 118.71,
    "Sb": 121.76, "Te": 127.60, "I": 126.90, "Xe": 131.29, "Cs": 132.91,
    "Ba": 137.33, "La": 138.91, "Ce": 140.12, "Pr": 140.91, "Nd": 144.24,
    "Pm": 145, "Sm": 150.36, "Eu": 151.96, "Gd": 157.25, "Tb": 158.93,
    "Dy": 162.50, "Ho": 164.93, "Er": 167.26, "Tm": 168.93, "Yb": 173.05,
    "Lu": 174.97, "Hf": 178.49, "Ta": 180.95, "W": 183.84, "Re": 186.21,
    "Os": 190.23, "Ir": 192.22, "Pt": 195.08, "Au": 196.97, "Hg": 200.59,
    "Tl": 204.38, "Pb": 207.2, "Bi": 208.98, "Po": 209, "At": 210,
    "Rn": 222, "Fr": 223, "Ra": 226, "Ac": 227, "Th": 232.04,
    "Pa": 231.04, "U": 238.03, "Np": 237, "Pu": 244, "Am": 243,
    "Cm": 247, "Bk": 247, "Cf": 251, "Es": 252, "Fm": 257,
    "Md": 258, "No": 259, "Lr": 266, "Rf": 267, "Db": 268,
    "Sg": 269, "Bh": 270, "Hs": 269, "Mt": 278, "Ds": 281,
    "Rg": 282, "Cn": 285, "Nh": 286, "Fl": 289, "Mc": 290,
    "Lv": 293, "Ts": 294, "Og": 294
};

// Calculadora química avanzada
class ChemistryCalculator {
    // Balanceador de ecuaciones químicas simple
    static balanceEquation(equation) {
        // Esta es una implementación básica - en una app real necesitarías algoritmos más complejos
        const commonEquations = {
            "H2 + O2 -> H2O": "2H₂ + O₂ → 2H₂O",
            "CH4 + O2 -> CO2 + H2O": "CH₄ + 2O₂ → CO₂ + 2H₂O",
            "Fe + O2 -> Fe2O3": "4Fe + 3O₂ → 2Fe₂O₃",
            "Na + Cl2 -> NaCl": "2Na + Cl₂ → 2NaCl",
            "H2SO4 + NaOH -> Na2SO4 + H2O": "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O",
            "HCl + NaOH -> NaCl + H2O": "HCl + NaOH → NaCl + H₂O",
            "CaCO3 -> CaO + CO2": "CaCO₃ → CaO + CO₂",
            "Zn + HCl -> ZnCl2 + H2": "Zn + 2HCl → ZnCl₂ + H₂"
        };
        
        return commonEquations[equation] || "Ecuación no reconocida o muy compleja para esta versión. Intenta con: H2 + O2 -> H2O";
    }

    // Calculadora de concentraciones
    static calculateConcentration(mass, volume, molarMass) {
        if (!mass || !volume || !molarMass) return "Error: Faltan datos";
        if (volume <= 0) return "Error: El volumen debe ser mayor a 0";
        return (mass / molarMass) / (volume / 1000); // mol/L
    }

    // Calculadora de pH
    static calculatePH(concentration, isAcid = true) {
        if (!concentration || concentration <= 0) return "Error: Concentración inválida";
        const pH = isAcid ? -Math.log10(concentration) : 14 + Math.log10(concentration);
        return Math.max(0, Math.min(14, pH));
    }

    // Calculadora de rendimiento teórico
    static calculateTheoreticalYield(actualYield, percentYield) {
        if (!actualYield || !percentYield) return "Error: Faltan datos";
        return (actualYield / percentYield) * 100;
    }
}

// Función para generar la tabla periódica
function generatePeriodicTable() {
    periodicTable.innerHTML = '';
    
    // Generar la tabla principal
    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        
        if (Object.keys(element).length === 0) {
            elementDiv.className = 'empty';
        } else {
            elementDiv.className = 'element';
            elementDiv.style.backgroundColor = categoryColors[element.category];
            elementDiv.innerHTML = `
                <div class="element-number">${element.number}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
            `;
            
            elementDiv.addEventListener('click', () => showElementDetails(element));
        }
        
        periodicTable.appendChild(elementDiv);
    });
    
    // Añadir lantánidos
    const lanthanidesRow = document.createElement('div');
    lanthanidesRow.className = 'lanthanides-row';
    lanthanidesRow.style.gridColumn = '1 / span 18';
    lanthanidesRow.style.display = 'grid';
    lanthanidesRow.style.gridTemplateColumns = 'repeat(14, 1fr)';
    lanthanidesRow.style.gap = '4px';
    lanthanidesRow.style.marginTop = '10px';
    
    lanthanides.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'element';
        elementDiv.style.backgroundColor = categoryColors[element.category];
        elementDiv.innerHTML = `
            <div class="element-number">${element.number}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name">${element.name}</div>
        `;
        
        elementDiv.addEventListener('click', () => showElementDetails(element));
        lanthanidesRow.appendChild(elementDiv);
    });
    
    periodicTable.appendChild(lanthanidesRow);
    
    // Añadir actínidos
    const actinidesRow = document.createElement('div');
    actinidesRow.className = 'actinides-row';
    actinidesRow.style.gridColumn = '1 / span 18';
    actinidesRow.style.display = 'grid';
    actinidesRow.style.gridTemplateColumns = 'repeat(14, 1fr)';
    actinidesRow.style.gap = '4px';
    actinidesRow.style.marginTop = '10px';
    
    actinides.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'element';
        elementDiv.style.backgroundColor = categoryColors[element.category];
        elementDiv.innerHTML = `
            <div class="element-number">${element.number}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name">${element.name}</div>
        `;
        
        elementDiv.addEventListener('click', () => showElementDetails(element));
        actinidesRow.appendChild(elementDiv);
    });
    
    periodicTable.appendChild(actinidesRow);
}

// Función para mostrar detalles del elemento
function showElementDetails(element) {
    elementModalTitle.textContent = `Elemento: ${element.name}`;
    
    elementDetails.innerHTML = `
        <div class="element-header">
            <div class="element-badge" style="background-color: ${categoryColors[element.category]}">
                <div style="font-size: 18px;">${element.symbol}</div>
                <div style="font-size: 10px;">${element.number}</div>
            </div>
            <div class="element-info">
                <h3>${element.name}</h3>
                <p>${getCategoryName(element.category)}</p>
            </div>
        </div>
        <div class="element-property">
            <span class="property-name">Número atómico:</span>
            <span class="property-value">${element.number}</span>
        </div>
        <div class="element-property">
            <span class="property-name">Símbolo:</span>
            <span class="property-value">${element.symbol}</span>
        </div>
        <div class="element-property">
            <span class="property-name">Masa atómica:</span>
            <span class="property-value">${element.mass}</span>
        </div>
        <div class="element-property">
            <span class="property-name">Categoría:</span>
            <span class="property-value">${getCategoryName(element.category)}</span>
        </div>
        <div class="element-description">
            <strong>Usos y aplicaciones:</strong><br>
            ${element.description}
        </div>
    `;
    
    elementModal.style.display = 'flex';
}

// Función para obtener el nombre de la categoría
function getCategoryName(category) {
    const categoryNames = {
        "alkali": "Metal alcalino",
        "alkaline-earth": "Metal alcalinotérreo",
        "transition": "Metal de transición",
        "other-metal": "Otro metal",
        "metalloid": "Metaloide",
        "no-metal": "No metal",
        "halogen": "Halógeno",
        "noble-gas": "Gas noble",
        "lanthanide": "Lantánido",
        "actinide": "Actínido"
    };
    
    return categoryNames[category] || category;
}

// Función MEJORADA para calcular masa molar
function calculateMolarMass(formula) {
    // Limpiar y preparar la fórmula
    formula = formula.replace(/\s/g, ''); // Eliminar espacios
    
    // Expresión regular mejorada para encontrar elementos y sus cantidades
    const regex = /([A-Z][a-z]*)(\d*\.?\d*)/g;
    let match;
    let totalMass = 0;
    let elementsFound = [];
    let isValid = true;
    let errorMessage = '';
    
    while ((match = regex.exec(formula)) !== null) {
        const element = match[1];
        const count = match[2] ? parseFloat(match[2]) : 1;
        
        if (atomicMasses[element]) {
            const elementMass = atomicMasses[element] * count;
            totalMass += elementMass;
            elementsFound.push({
                element: element,
                count: count,
                mass: atomicMasses[element],
                total: elementMass
            });
        } else {
            isValid = false;
            errorMessage = `Elemento '${element}' no reconocido`;
            break;
        }
    }
    
    // Verificar si se encontraron elementos
    if (elementsFound.length === 0 && formula !== '') {
        isValid = false;
        errorMessage = 'No se reconocieron elementos en la fórmula';
    }
    
    return isValid ? 
        { totalMass: totalMass, elements: elementsFound } : 
        { error: errorMessage };
}

// Función MEJORADA para mostrar resultado
function displayResult(formula, result) {
    const resultElement = document.getElementById('result');
    
    if (result.error) {
        resultElement.innerHTML = `<div class="calculation-error">
            <strong>Error:</strong> ${result.error}
            <br><small>Ejemplos válidos: H2O, NaCl, C6H12O6, H2SO4</small>
        </div>`;
        return;
    }
    
    let html = `<div class="calculation-result">
        <strong>Fórmula:</strong> ${formula}<br>
        <strong>Masa molar:</strong> ${result.totalMass.toFixed(3)} g/mol<br><br>
        <strong>Composición:</strong><br>`;
    
    result.elements.forEach(item => {
        html += `• ${item.element}: ${item.count} × ${item.mass} = ${item.total.toFixed(3)} g/mol<br>`;
    });
    
    html += `</div>`;
    resultElement.innerHTML = html;
}

// Función para inicializar todos los event listeners
function initializeEventListeners() {
    // Navegación principal
    toolsBtn.addEventListener('click', () => {
        heroSection.style.display = 'none';
        toolsSection.style.display = 'flex';
        periodicTableSection.style.display = 'none';
    });

    periodicTableBtn.addEventListener('click', () => {
        heroSection.style.display = 'none';
        toolsSection.style.display = 'none';
        periodicTableSection.style.display = 'flex';
    });

    toolsPeriodicTableBtn.addEventListener('click', () => {
        toolsSection.style.display = 'none';
        periodicTableSection.style.display = 'flex';
    });

    // Botones de volver
    backToHomeBtn.addEventListener('click', showHomeSection);
    backToHomeFromTools.addEventListener('click', showHomeSection);
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showHomeSection();
    });

    // Modales
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    registerBtn.addEventListener('click', () => {
        registerModal.style.display = 'flex';
    });

    supportBtn.addEventListener('click', () => {
        supportModal.style.display = 'flex';
    });

    // Cerrar modales
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            elementModal.style.display = 'none';
            supportModal.style.display = 'none';
        });
    });

    // Cambiar entre modales de login/registro
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'flex';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'none';
        loginModal.style.display = 'flex';
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === registerModal) registerModal.style.display = 'none';
        if (e.target === elementModal) elementModal.style.display = 'none';
        if (e.target === supportModal) supportModal.style.display = 'none';
    });

    // Calculadora de masa molar MEJORADA
    calculateBtn.addEventListener('click', () => {
        const formula = compoundInput.value.trim();
        if (!formula) {
            result.innerHTML = '<div class="calculation-error">Por favor ingresa una fórmula química</div>';
            return;
        }
        
        const calculation = calculateMolarMass(formula);
        displayResult(formula, calculation);
    });

    compoundInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculateBtn.click();
        }
    });

    // Enlaces desde recursos de apoyo
    openCalculator.addEventListener('click', (e) => {
        e.preventDefault();
        supportModal.style.display = 'none';
        toolsSection.style.display = 'flex';
    });

    openPeriodicTable.addEventListener('click', (e) => {
        e.preventDefault();
        supportModal.style.display = 'none';
        periodicTableSection.style.display = 'flex';
    });

    // Formularios
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        console.log('Iniciando sesión con:', { email, password });
        alert('¡Inicio de sesión exitoso! Bienvenido de nuevo.');
        loginModal.style.display = 'none';
        loginForm.reset();
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        const interests = document.getElementById('registerInterests').value;
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
            return;
        }
        
        console.log('Registrando usuario:', { name, email, password, interests });
        alert('¡Registro exitoso! Bienvenido a QuímicaExplorada.');
        registerModal.style.display = 'none';
        registerForm.reset();
    });

    // Inicializar pestañas de la calculadora
    initializeCalculatorTabs();
}

// Función para inicializar las pestañas de la calculadora
function initializeCalculatorTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const balanceBtn = document.getElementById('balanceBtn');
    const concentrationBtn = document.getElementById('concentrationBtn');
    const phBtn = document.getElementById('phBtn');

    // Pestañas
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones y paneles
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            btn.classList.add('active');
            
            // Mostrar el panel correspondiente
            const tabId = btn.getAttribute('data-tab');
            const tabPane = document.getElementById(`${tabId}-tab`);
            if (tabPane) {
                tabPane.classList.add('active');
            }
        });
    });

    // Balanceador de ecuaciones
    if (balanceBtn) {
        balanceBtn.addEventListener('click', () => {
            const equationInput = document.getElementById('equationInput');
            const equationResult = document.getElementById('equationResult');
            
            if (!equationInput || !equationResult) return;
            
            const equation = equationInput.value.trim();
            if (!equation) {
                equationResult.innerHTML = '<div class="calculation-error">Por favor ingresa una ecuación</div>';
                return;
            }
            
            const balanced = ChemistryCalculator.balanceEquation(equation);
            equationResult.innerHTML = `<div class="calculation-result">
                <strong>Ecuación balanceada:</strong><br>${balanced}
            </div>`;
        });
    }

    // Calculadora de concentraciones
    if (concentrationBtn) {
        concentrationBtn.addEventListener('click', () => {
            const massInput = document.getElementById('massInput');
            const volumeInput = document.getElementById('volumeInput');
            const molarMassInput = document.getElementById('molarMassInput');
            const concentrationResult = document.getElementById('concentrationResult');
            
            if (!massInput || !volumeInput || !molarMassInput || !concentrationResult) return;
            
            const mass = parseFloat(massInput.value);
            const volume = parseFloat(volumeInput.value);
            const molarMass = parseFloat(molarMassInput.value);
            
            const concentration = ChemistryCalculator.calculateConcentration(mass, volume, molarMass);
            if (typeof concentration === 'string') {
                concentrationResult.innerHTML = `<div class="calculation-error">${concentration}</div>`;
            } else {
                concentrationResult.innerHTML = `<div class="calculation-result">
                    <strong>Concentración:</strong> ${concentration.toFixed(4)} mol/L<br>
                    <strong>Molaridad:</strong> ${concentration.toFixed(4)} M<br>
                    <strong>Fórmula:</strong> M = masa / (masa molar × volumen en L)
                </div>`;
            }
        });
    }

    // Calculadora de pH
    if (phBtn) {
        phBtn.addEventListener('click', () => {
            const concentrationPHInput = document.getElementById('concentrationPHInput');
            const acidBaseSelect = document.getElementById('acidBaseSelect');
            const phResult = document.getElementById('phResult');
            
            if (!concentrationPHInput || !acidBaseSelect || !phResult) return;
            
            const concentration = parseFloat(concentrationPHInput.value);
            const isAcid = acidBaseSelect.value === 'acid';
            
            const pH = ChemistryCalculator.calculatePH(concentration, isAcid);
            if (typeof pH === 'string') {
                phResult.innerHTML = `<div class="calculation-error">${pH}</div>`;
            } else {
                const solutionType = isAcid ? 'Ácido' : 'Base';
                let strength = '';
                if (isAcid) {
                    if (pH < 3) strength = ' (Fuerte)';
                    else if (pH < 6) strength = ' (Débil)';
                    else strength = ' (Muy débil)';
                } else {
                    if (pH > 11) strength = ' (Fuerte)';
                    else if (pH > 8) strength = ' (Débil)';
                    else strength = ' (Muy débil)';
                }
                
                phResult.innerHTML = `<div class="calculation-result">
                    <strong>pH:</strong> ${pH.toFixed(2)}<br>
                    <strong>Tipo:</strong> ${solutionType}${strength}<br>
                    <strong>Concentración:</strong> ${concentration} mol/L<br>
                    <strong>Fórmula:</strong> pH = -log[H⁺] para ácidos, pOH = -log[OH⁻] para bases
                </div>`;
            }
        });
    }
}

// Función para mostrar la sección de inicio
function showHomeSection() {
    heroSection.style.display = 'flex';
    toolsSection.style.display = 'none';
    periodicTableSection.style.display = 'none';
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    generatePeriodicTable();
    console.log('QuímicaExplorada inicializada correctamente');
});