var radiología = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];

var traumatología = [
  {
    HORA: "8:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];

var dental = [
  {
    HORA: "8:30",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:30",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "14:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
  },
];

var listadoCompleto = [];
listadoCompleto.push(radiología);
listadoCompleto.push(dental);
listadoCompleto.push(traumatología);
document.write("<h1>Estadisticas centro medico ñuñoa</h1>");
for (let i = 0; i < listadoCompleto.length; i++) {
  if (i == 0) {document.write("<h3>Radiología</h3>");}
  if (i == 1) {document.write("<h3>Traumatología</h3>");}
  if (i == 2) {document.write("<h3>Dental</h3>");}
  document.write(
    "<table><thead><tr><th>Paciente</th><th>RUT</th><th>Especialista</th><th>Previsión</th><th>Hora</th></tr></thead>"
  );
  document.write("<tr>");
  for (const element of listadoCompleto[i]) {
    document.write("<td>" + element.PACIENTE + "</td>");
    document.write("<td>" + element.RUT + "</td>");
    document.write("<td>" + element.ESPECIALISTA + "</td>");
    document.write("<td>" + element.PREVISION + "</td>");
    document.write("<td>" + element.HORA + "</td></tr>");
  }
  document.write("</table>");
}

function mostrar() {
    var texto = ""
  for (let i = 0; i < listadoCompleto.length; i++) {  
    let paciente = listadoCompleto[i].map((item) => item.PACIENTE);
    let prevision = listadoCompleto[i].map((item) => item.PREVISION);
    if(i == 0) {texto += "El primer paciente de Radiología es "}
    if(i == 1) {texto += "El primer paciente de Traumatología es "}
    if(i == 2) {texto += "El primer paciente de Dental es "}
    texto += 
        paciente[0] + " con previsión " + prevision[0]+
      " y el último es " + paciente[paciente.length-1] + " con previsión " + prevision[prevision.length-1] + ". " 
    ;
  }
  document.getElementById("pacientes").innerText = texto
}
