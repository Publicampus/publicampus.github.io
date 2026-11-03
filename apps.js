// Catálogo de Publicampus. Para agregar una app: añade un objeto aquí y listo.
// status: "live" (con página) | "soon" (próximamente)
const CATEGORIES = {
  aprendizaje: { label: "Aprendizaje", desc: "Apps para aprender a tu ritmo." },
  juegos:      { label: "Juegos",      desc: "Rompecabezas y pasatiempos." },
  herramientas:{ label: "Herramientas",desc: "Utilidades que corren en tu navegador." }
};

const APPS = [
  // --- Aprendizaje ---
  { id:"capitales", cat:"aprendizaje", name:"Capitales", desc:"Aprende las capitales del mundo jugando.",
    icon:"ic_capitales.svg", url:"capitales.html", status:"live" },
  { id:"xml",       cat:"aprendizaje", name:"Aprende XML",        desc:"De etiquetas a esquemas, paso a paso.",        emoji:"</>", status:"soon" },
  { id:"ruso",      cat:"aprendizaje", name:"Lee ruso",           desc:"Domina el cirílico y empieza a leer.",         emoji:"Я",   status:"soon" },
  { id:"historia",  cat:"aprendizaje", name:"Historia de México", desc:"De las culturas antiguas a la actualidad.",    emoji:"🇲🇽", status:"soon" },
  { id:"literatura",cat:"aprendizaje", name:"Literatura inglesa", desc:"Autores, obras y movimientos clave.",          emoji:"📚", status:"soon" },
  // --- Juegos ---
  { id:"quince", cat:"juegos", name:"Quince", desc:"Ordena las fichas deslizándolas.", emoji:"🔢", status:"soon" },
  { id:"sudoku", cat:"juegos", name:"Sudoku", desc:"El clásico de lógica numérica.",   emoji:"🧩", status:"soon" },
  { id:"cifra",  cat:"juegos", name:"Cifra",  desc:"Descifra el código oculto.",       emoji:"🔐", status:"soon" },
  { id:"crossmath", cat:"juegos", name:"Crossmath", desc:"Crucigrama de operaciones.", emoji:"➕", status:"soon" },
  // --- Herramientas ---
  { id:"img",  cat:"herramientas", name:"Conversor de imágenes", desc:"PNG, JPG y WebP sin subir nada.", emoji:"🖼️", status:"soon" },
  { id:"txt",  cat:"herramientas", name:"Conversor de texto",    desc:"Entre TXT, MD, HTML y más.",      emoji:"🔄", status:"soon" },
  { id:"vtxt", cat:"herramientas", name:"Visor de TXT",          desc:"Abre y lee archivos de texto.",   emoji:"📄", status:"soon" },
  { id:"vxml", cat:"herramientas", name:"Visor de XML",          desc:"Explora XML con formato y árbol.",emoji:"🌳", status:"soon" }
];
