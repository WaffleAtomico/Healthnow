import React from "react";

import "../../../styles/pages/generalstyles.css"
import Searchbar from "../../../components/Searchbar";
import Notification from "../../../components/Notification";

const notificationsData = [
  {
    id: 1,
    title: "Dr. Sánchez",
    date: "Hoy, 10:30 AM",
    subjet: "🩺 Recordatorio de cita",
    description: "Consulta de seguimiento programada para mañana a las 10:00 AM en el consultorio 3"
  },
  {
    id: 2,
    title: "Laboratorio Clínico",
    date: "Ayer, 2:15 PM",
    subjet: "📋 Resultados disponibles",
    description: "Hemograma completo y perfil lipídico listos para revisión"
  },
  {
    id: 3,
    title: "Farmacia Central",
    date: "Abril 24",
    subjet: "💊 Medicamento disponible",
    description: "Tu receta para Metformina está lista para ser recogida"
  },
  {
    id: 4,
    title: "Dr. López",
    date: "Abril 23",
    subjet: "📅 Confirmación de consulta",
    description: "Por favor confirma tu asistencia a la consulta de neumología del viernes"
  },
  {
    id: 5,
    title: "Seguro Médico",
    date: "Abril 22",
    subjet: "📄 Documentación requerida",
    description: "Necesitamos una copia actualizada de tu póliza de seguro"
  },
  {
    id: 6,
    title: "Enfermería",
    date: "Abril 21",
    subjet: "🩹 Curas programadas",
    description: "Recuerda tu cita para cambio de vendajes el próximo lunes"
  },
  {
    id: 7,
    title: "Dr. García",
    date: "Abril 20",
    subjet: "🦷 Revisión dental",
    description: "Resultados de tu última radiografía están disponibles en el portal"
  },
  {
    id: 8,
    title: "Nutrición Clínica",
    date: "Abril 19",
    subjet: "🍎 Plan alimenticio",
    description: "Hemos actualizado tu plan nutricional basado en tus últimos análisis"
  },
  {
    id: 9,
    title: "Psicología",
    date: "Abril 18",
    subjet: "🧠 Sesión de seguimiento",
    description: "¿Podemos reprogramar la sesión de esta semana? Por favor confirma horarios"
  },
  {
    id: 10,
    title: "Administración",
    date: "Abril 17",
    subjet: "💳 Pago recibido",
    description: "Hemos aplicado tu pago a la factura #1254. Gracias por tu prontitud"
  },
  {
    id: 11,
    title: "Dr. Fernández",
    date: "Abril 16",
    subjet: "🩺 Nueva prescripción",
    description: "He actualizado tu medicación. Revisa los detalles en tu perfil"
  },
  {
    id: 12,
    title: "Imagenología",
    date: "Abril 15",
    subjet: "📷 RMN Programada",
    description: "Tu resonancia magnética está agendada para el 20 de abril a las 8:00 AM"
  },
  {
    id: 13,
    title: "Rehabilitación",
    date: "Abril 14",
    subjet: "🏋️ Ejercicios actualizados",
    description: "Nuevo plan de rehabilitación disponible en la app"
  },
  {
    id: 14,
    title: "Alergología",
    date: "Abril 13",
    subjet: "🌡️ Resultados de pruebas",
    description: "Las pruebas de alergia muestran sensibilidad a ácaros del polvo"
  },
  {
    id: 15,
    title: "Oftalmología",
    date: "Abril 12",
    subjet: "👁️ Examen anual",
    description: "Es hora de programar tu revisión ocular anual"
  },
  {
    id: 16,
    title: "Cardiología",
    date: "Abril 11",
    subjet: "❤️ Monitoreo cardíaco",
    description: "Los datos de tu holter muestran mejoría. Revisa el informe completo"
  },
  {
    id: 17,
    title: "Pediatría",
    date: "Abril 10",
    subjet: "👶 Vacunación",
    description: "Recuerda la próxima vacuna de tu hijo/a el 15 de abril"
  },
  {
    id: 18,
    title: "Oncología",
    date: "Abril 9",
    subjet: "🔬 Análisis de biopsia",
    description: "Los resultados están disponibles. Por favor agenda una consulta"
  },
  {
    id: 19,
    title: "Ginecología",
    date: "Abril 8",
    subjet: "📅 Revisión anual",
    description: "Es momento de programar tu chequeo ginecológico preventivo"
  },
  {
    id: 20,
    title: "Emergencias",
    date: "Abril 7",
    subjet: "🚨 Protocolo COVID",
    description: "Actualizamos nuestros protocolos. Consulta las nuevas medidas aquí"
  }
];


function Notifications_container() {
    return (
      <div>
        <Searchbar />
        <div className="notifications-container GS-verticalContent" style={{cursor: "pointer"}}>
          {notificationsData.map(notification => (
            <Notification
              key={notification.id}
              title={notification.title}
              date={notification.date}
              subjet={notification.subjet}
              description={notification.description}
            />
          ))}
        </div>
      </div>
    );
  }

export default Notifications_container