import type { LucideIcon } from 'lucide-react';
import { Code, Server, Smartphone, Database, Rocket, Users, Cog, Network, Globe } from 'lucide-react';

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skills: { [key: string]: SkillCategory } = {
  frontend: {
    title: 'Desarrollo Front-end',
    icon: Code,
    items: ['React', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'UI/UX'],
  },
  backend: {
    title: 'Desarrollo Back-end',
    icon: Server,
    items: ['Node js (Express)', 'Strapi (CMS Headless)', 'Graphql'],
  },
  mobile: {
    title: 'Desarrollo Móvil',
    icon: Smartphone,
    items: ['Flutter (Multiplataforma)', 'Dart'],
  },
  database: {
    title: 'Bases de Datos',
    icon: Database,
    items: ['SQL (PostgreSQL, MySQL)', 'MongoDB (NoSQL)', 'Firebase'],
  },
  devops: {
    title: 'Infraestructura/DevOps',
    icon: Rocket,
    items: ['Linux (Despliegue)', 'Git/GitHub', 'Docker'],
  },
  soft: {
    title: 'Soft Skills (Valores)',
    icon: Users,
    items: ['Trabajo en equipo', 'Compromiso', 'Dinamismo', 'Puntualidad', 'Creatividad'],
  },
};

export type Project = {
  title: string;
  period: string;
  imagePlaceholderId: string;
  imageSide: 'left' | 'right';
  focus: {
    quote: string;
    description: string;
  };
  role?: string;
  technologies: string[];
  deployment?: string;
  context?: string;
};

export const projects: Project[] = [
  {
    title: 'Desarrollo del Sistema Web de la Universidad Estatal de Bolívar',
    period: '2020 - 2021',
    imagePlaceholderId: 'ueb-web-system',
    imageSide: 'left',
    focus: {
      quote: "Diseño de Vistas Gráficas y Usabilidad.",
      description: "Muestra de la interfaz intuitiva y moderna desarrollada para el entorno académico.",
    },
    role: 'Apoyo como Desarrollador y Diseñador de vistas gráficas (UI/UX). Implementación de funcionalidades y optimización de la experiencia del usuario.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    deployment: 'Sistema desplegado y mantenido en entornos Linux, garantizando estabilidad y seguridad.',
  },
  {
    title: 'Aplicación Móvil para Vinculación con la Comunidad',
    period: '2021 - 2022',
    imagePlaceholderId: 'mobile-app-community',
    imageSide: 'right',
    focus: {
      quote: "Interfaz Nativa y Experiencia en Flutter.",
      description: "Capturas de pantalla de la app, destacando la fluidez y el diseño responsive en móvil.",
    },
    technologies: ['Flutter', 'Firebase', 'SQL', 'MongoDB', 'Strapi', 'Graphql'],
    context: 'Proyecto clave en convenio con el Seguro Social Campesino, demostrando mi capacidad para desarrollar soluciones tecnológicas con impacto social real.',
  },
];

type Infrastructure = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const infrastructure: Infrastructure[] = [
    {
        title: "Desarrollador de Software en UMPACTO",
        icon: Code,
        description: "Desarrollo de soluciones de software a medida, enfocado en el ciclo de vida completo y entrega de productos de calidad.",
    },
    {
        title: "Técnico en la Universidad Estatal de Bolívar",
        icon: Cog,
        description: "Soporte en la Dirección de Tecnologías de la Información y Comunicación (TICS) de la universidad durante 2019.",
    },
    {
        title: "Mantenimiento de Hardware y Software",
        icon: Cog,
        description: "Experiencia en el mantenimiento integral de hardware y software para asegurar la continuidad operativa y el rendimiento óptimo de los sistemas.",
    },
    {
        title: "Redes y Conectividad",
        icon: Network,
        description: "Mantenimiento e instalación de redes, switches y cableado estructurado.",
    }
];

export const testimonials = [
    {
        id: "umpacto-cert",
        quote: "Demostró un alto nivel de compromiso, profesionalismo y responsabilidad durante su colaboración, cumpliendo satisfactoriamente con todas las tareas asignadas. Es un activo valioso para cualquier equipo de desarrollo.",
        author: "Umpacto Soluciones Cía. Ltda.",
        role: "Certificado de Experiencia como Desarrollador de Software"
    },
    {
        id: "big-school-cert",
        quote: "Otorga el presente certificado por haber completado satisfactoriamente las jornadas formativas en '<span class=\"text-primary font-bold\">DESARROLLO CON IA</span>', impartidas por la prestigiosa academia <span class=\"text-primary font-bold\">BIG SCHOOL</span>.",
        author: "BIG school",
        role: "Certificado en Desarrollo con IA - Firmado por Romuald Fons y Brais Moure"
    },
    {
        id: "ueb-cert",
        quote: "Durante su colaboración con la Dirección de Tecnologías de la Información y Comunicación (<span class=\"text-primary font-bold\">TICS</span>), demostró excelentes habilidades en el soporte y mantenimiento de la infraestructura tecnológica de la <span class=\"text-primary font-bold\">Universidad</span>.",
        author: "Universidad Estatal de Bolívar",
        role: "Certificado de Experiencia como Técnico"
    },
    {
        id: "forense-cert",
        quote: "Certificación en Fundamentos de Cómputo Forense, que acredita conocimientos sólidos en seguridad informática y análisis forense digital.",
        author: "Seguridad Cero",
        role: "Certificado de Participación, Mayo 2021"
    },
    {
        id: "ciberseguridad-cert",
        quote: "Certificación en Gestión de la Ciberseguridad, que valida competencias para la protección de sistemas informáticos y datos.",
        author: "Seguridad Cero",
        role: "Certificado de Participación, Junio 2021"
    }
];


