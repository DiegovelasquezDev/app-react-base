import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme/theme";

const AboutUs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="ACERCA DE " subtitle="respuestas del aplicativo" />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Acerca de Mí - Diego Alejandro Velasquez Araque
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Soy un desarrollador en las primeras etapas de mi carrera,
            emocionado por la oportunidad de crear soluciones tecnológicas
            innovadoras. Mi segundo aplicativo representa un hito importante en
            mi desarrollo profesional, ya que es la primera vez que trabajo con
            tecnologías como .NET Core 7 y React. A pesar de estar en las
            primeras etapas, mi compromiso con la excelencia es innegable. Mi
            enfoque está en aprender y mejorar continuamente. Este aplicativo es
            un testimonio de mi dedicación para adquirir nuevas habilidades y
            aplicarlas en la práctica. Aunque mi experiencia es limitada, mi
            entusiasmo por la tecnología y la programación me impulsa a abordar
            desafíos con creatividad y determinación. Trabajar con estas
            tecnologías de vanguardia me ha brindado una valiosa experiencia y
            un profundo sentido de logro. Mi objetivo es seguir creciendo en el
            campo de desarrollo de software y convertirme en un profesional de
            referencia en el uso de estas tecnologías. Agradezco la oportunidad
            de aprender y crecer en cada proyecto y espero poder ser parte de tu
            viaje tecnológico. ¡Gracias por apoyar mi desarrollo profesional!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿Como se llevo a cabo el aplicativo?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El sistema se encuentra estructurado en dos componentes distintos:
            el backend y el frontend, con el fin de garantizar una arquitectura
            escalable y modular. En lo que respecta al backend, se ha empleado
            el patrón de diseño Repository, el cual ha sido descompuesto en tres
            capas fundamentales: Core, Business Logic y WebAPI. La capa "Core"
            se dedica a la gestión de las entidades fundamentales de la
            aplicación, encapsulando la lógica de dominio y asegurando la
            coherencia de los datos. La capa "Business Logic" constituye el
            núcleo funcional del sistema, encargándose de la implementación de
            las reglas de negocio y orquestando la interacción con la capa de
            acceso a datos. Por último, la capa "WebAPI" proporciona una
            interfaz de comunicación externa a través de la cual los clientes
            interactúan con el sistema. En lo que concierne al frontend, se ha
            optado por la utilización de React como tecnología principal. React
            es una biblioteca de JavaScript que se destaca por su eficiencia en
            la creación de interfaces de usuario interactivas y dinámicas. Esta
            elección permite una experiencia de usuario fluida y altamente
            receptiva. La utilización de .NET Core 7 en el backend demuestra un
            compromiso con la última versión de la plataforma .NET, aprovechando
            sus características más avanzadas y su rendimiento mejorado. Esto
            contribuye a la robustez y la escalabilidad del sistema, permitiendo
            una gestión eficiente de las operaciones y un manejo seguro de los
            datos. En resumen, la estructura del aplicativo se ha diseñado de
            manera meticulosa, con una clara separación de responsabilidades
            entre el backend y el frontend, y la adopción de tecnologías
            modernas en ambas partes para garantizar un rendimiento óptimo y una
            experiencia de usuario de alta calidad.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Como recuperar la cuenta en caso de olvidar contraseña
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Contacto y soporte
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Actualizaciones Futuras
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            La idea es terminar de implementar la funcionalidad del calendario
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Politicas de privacidad
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            La idea es terminar de implementar la funcionalidad del calendario
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Politicas de seguridad
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            La idea es terminar de implementar la funcionalidad del calendario
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Agradecimientos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            La idea es terminar de implementar la funcionalidad del calendario
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AboutUs;
