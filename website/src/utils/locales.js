const base = import.meta.env.BASE_URL || '/';

export const locales = {
    es: {
        nav: {
            about: "Quiénes Somos",
            services: "Servicios",
            team: "Innovadores",
            payment: "Pagos",
            contact: "CONTACTAR"
        },
        hero: {
            title: "Innovación Tecnológica con Propósito Humano",
            subtitle: "Desde la tecnología hasta las ciencias, unimos conocimientos para abordar desafíos cotidianos o empresariales y construir productos mínimos viables escalables",
            btn1: "VER SERVICIOS",
            btn2: "CONTACTAR AHORA"
        },
        about: {
            title: "Quiénes Somos",
            p1: "Innovation Group es una asociación dedicada a diseñar y construir soluciones funcionales para personas, empresas y comunidades.",
            p2: "Creemos en una ingeniería práctica, elegante y orientada a resultados. Analizamos cada problema y lo resolvemos desplegando arquitecturas digitales escalables, inteligencia artificial y sistemas autónomos.",
            stats: [
                { num: 'Soluciones', label: 'Técnicas' },
                { num: 'Creatividad', label: 'Aplicada' },
                { num: 'Impacto', label: 'Real' }
            ]
        },
        services: {
            title: "Infraestructura Modular",
            btn: "Solicitar módulo >",
            consultingTitle: "Plan de Consultoría",
            consultingDesc: "Estrategia integral y Análisis de Datos Avanzado",
            consultingList: [
                "Auditoría de datos y estrategia de Business Intelligence",
                "Análisis de Datos Avanzado y Machine Learning orientado a Python (Pandas, Numpy, Scikit-learn)",
                "Creación de pipelines de datos y modelos predictivos MLOps",
                "Desarrollo de scripts de automatización a medida"
            ],
            academicTitle: "Asesoría académica integral",
            academicList: [
                "Tesis Completa(Elaboración integral de tu trabajo de grado o maestría con todos sus capítulos en formato APA.)",
                "Monografía(Documentos académicos sobre temas específicos con estructura rigurosa y fuentes verificadas.)",
                "Metodología & Congresos(Mentoría en metodología de la investigación con preparación para presentaciones en congresos académicos.)",
                "Asesoramiento(Acompañamiento continuo en tu proceso investigativo. Tú escribes, nosotros te guiamos.)"
            ],
            consultingBtn: "Programar asesoría >",
            layers: [
                { layer: 'CAPA 1', title: 'WEB & DATA CORE', desc: 'Enfoque en la base digital y la gestión de información.', items: ['Desarrollo de frontend reactivo', 'Arquitectura de bases de datos SQL', 'Paneles de control de usuario', 'Infraestructura en la nube'] },
                { layer: 'CAPA 2', title: 'ANALÍTICA AVANZADA', desc: 'Enfoque en Business Intelligence y análisis estadístico.', items: ['Dashboards interactivos', 'Inferencia estadística', 'Limpieza de datos', 'Identificación de KPIs'] },
                { layer: 'CAPA 3', title: 'IA DE AUTOMATIZACIÓN', desc: 'Enfoque en modelos predictivos e inteligencia aplicada.', items: ['Predicción de ventas', 'Detección de riesgos', 'Recomendación de productos', 'Agentes de Inteligencia artificial'] },
                { layer: 'CAPA 4', title: 'EDGE AI & IOT', desc: 'Enfoque en inteligencia en tiempo real integrada en hardware.', items: ['Creación de sistemas embebidos', 'Procesamiento offline', 'Integración de sensores', 'Monitoreo de equipos IoT'] }
            ]
        },
        innovators: {
            title: "Conoce a nuestros innovadores",
            subtitle: "Personas que se levantan cada día con la idea de crecer profesionalmente y compartir sus conocimientos para ayudar a otros a alcanzar sus metas.",
            role: "Cientifico de Datos",
            desc: "Tecnologo especializado en Sistemas embebidos, Vision por computación y en la creación de pipeline de datos y IoT",
            links: ['Página web', 'LinkedIn']
        },
        portfolio: {
            title: "Impacto y Casos de Éxito",
            problem: "Problema:",
            impact: "Impacto:",
            list: [
                { name: 'Predicción de Demanda', desc: 'Modelo ML para optimizar inventario retail.', prob: 'Exceso de inventario y quiebres de stock continuos', res: 'Reducción del 35% en costos y 90% menos quiebres' },
                { name: 'Analítica en Tiempo Real', desc: 'Dashboard de KPIs para logística.', prob: 'Falta de visibilidad sobre rutas y tiempos', res: 'Optimización de rutas en un 20%' },
                { name: 'Facturación con NLP', desc: 'Sistema de PNL para procesar facturas.', prob: '100+ horas/mes en entrada manual de datos', res: 'Automatización del 95% del proceso y 0 errores' }
            ]
        },
        benefits: {
            title: "¿Por qué Innovation Group?",
            list: [
                { title: 'Soluciones Personalizadas', desc: 'precio ajustado a demanda' },
                { title: 'Enfoque Técnico y Humano', desc: 'Combinamos rigor técnico con empatía' },
                { title: 'Trabajo Modular', desc: 'Implementación escalable por capas' },
                { title: 'Visión Estratégica', desc: 'Orientación a resultados medibles' },
                { title: 'Capacidad de Innovación', desc: 'Uso de tecnologías de vanguardia' },
                { title: 'Resultados Medibles', desc: 'Impacto real y cuantificable' }
            ]
        },
        testimonials: {
            title: "Sé uno de nuestros primeros clientes y aprovecha la oferta adaptabilidad",
            list: []
        },
        contact: {
            title: "Iniciemos un proyecto",
            desc: "Contacte con nuestro equipo.",
            email: "Correo electrónico",
            whatsapp: "WhatsApp",
            social: "Redes Sociales",
            form: {
                name: "Nombre completo",
                namePlaceholder: "Tu nombre",
                email: "Correo electrónico",
                emailPlaceholder: "tu@correo.com",
                message: "Mensaje o proyecto",
                messagePlaceholder: "¿En qué podemos ayudarte?",
                send: "Enviar consulta"
            }
        },
        footer: {
            desc: "Transformamos ideas en soluciones reales, optimizadas e inteligentes. Ingeniería avanzada a su alcance.",
            navTitle: "Navegación",
            nav: ["Inicio", "Quiénes Somos", "Servicios Modulares", "Innovadores"],
            contactTitle: "Contacto rápido",
            paidMethodsTitle: "Métodos de Pago",
            rights: "Todos los derechos reservados."
        },
        payment: {
            title: "Métodos de Pago",
            desc: "Elige tu método de pago preferido para comenzar tu proyecto"
        },
        news: {
            title: "Últimas Novedades",
            items: [
                { 
                    date: "Mayo - Agosto 2026", 
                    text: "Temporada de Adaptabilidad", 
                    description: "¡Es momento de transformar tu proyecto! Durante esta etapa de crecimiento, ofrecemos precios especiales en todos nuestros servicios de desarrollo tecnológico. Del 15 de Mayo al 13 de Agosto, accede a soluciones de IA, desarrollo web, analítica de datos e IoT a precios únicos.",
                    image: base + "News/Tempoara_adaptabilidad.png",
                    link: "#services"
                }
            ]
        }
    },
    en: {
        nav: {
            about: "About Us",
            services: "Services",
            team: "Innovators",
            payment: "Payment",
            contact: "GET STARTED"
        },
        hero: {
            title: "Technological Innovation with Human Purpose",
            subtitle: "From technology to science, we combine knowledge to address everyday or business challenges and build scalable minimum viable products",
            btn1: "VIEW SERVICES",
            btn2: "CONTACT NOW"
        },
        about: {
            title: "About Us",
            p1: "Innovation Group is an association dedicated to designing and building functional solutions for people, companies, and communities.",
            p2: "We believe in practical, elegant, and results-oriented engineering. We analyze every problem and solve it by deploying scalable digital architectures, artificial intelligence, and autonomous systems.",
            stats: [
                { num: 'Technical', label: 'Solutions' },
                { num: 'Applied', label: 'Creativity' },
                { num: 'Real', label: 'Impact' }
            ]
        },
        services: {
            title: "Modular Infrastructure",
            btn: "Request module >",
            consultingTitle: "Consulting Plan",
            consultingDesc: "Comprehensive Strategy and Advanced Data Analysis",
            consultingList: [
                "Data audit and Business Intelligence strategy",
                "Advanced Data Analysis and Machine Learning oriented to Python (Pandas, Numpy, Scikit-learn)",
                "Creation of data pipelines and predictive MLOps models",
                "Development of custom automation scripts"
            ],
            academicTitle: "Comprehensive academic advisory",
            academicList: [
                "Complete Thesis(Comprehensive development of your degree or master's work with all its chapters in APA format.)",
                "Monograph(Academic documents on specific topics with rigorous structure and verified sources.)",
                "Methodology & Congresses(Mentorship in research methodology with preparation for presentations at academic congresses.)",
                "Advising(Continuous accompaniment in your research process. You write, we guide you.)"
            ],
            consultingBtn: "Schedule advisory >",
            layers: [
                { layer: 'LAYER 1', title: 'WEB & DATA CORE', desc: 'Focus on the digital base and information management.', items: ['Reactive frontend development', 'SQL database architecture', 'User control panels', 'Cloud infrastructure'] },
                { layer: 'LAYER 2', title: 'ADVANCED ANALYTICS', desc: 'Focus on BI and statistical analysis.', items: ['Interactive dashboards', 'Statistical inference', 'Data cleaning', 'Identification of KPIs'] },
                { layer: 'LAYER 3', title: 'AUTOMATION AI', desc: 'Focus on predictive models and applied intelligence.', items: ['Sales prediction', 'Risk detection', 'Product recommendation', 'AI Agents'] },
                { layer: 'LAYER 4', title: 'EDGE AI & IOT', desc: 'Focus on real-time intelligence integrated into hardware.', items: ['Creation of embedded systems', 'Offline processing', 'Sensor integration', 'IoT equipment monitoring'] }
            ]
        },
        innovators: {
            title: "Meet our innovators",
            subtitle: "People who wake up every day with the idea of growing professionally and sharing their knowledge to help others achieve their goals.",
            role: "Data Scientist",
            desc: "Technologist specialized in Embedded Systems, Computer Vision and in the creation of data pipelines and IoT",
            links: ['Website', 'LinkedIn']
        },
        portfolio: {
            title: "Impact and Success Stories",
            problem: "Problem:",
            impact: "Impact:",
            list: [
                { name: 'Demand Prediction', desc: 'ML model to optimize retail inventory.', prob: 'Continuous inventory excess and stockouts', res: '35% reduction in costs and 90% fewer stockouts' },
                { name: 'Real-Time Analytics', desc: 'KPI dashboard for logistics.', prob: 'Lack of visibility over routes and times', res: '20% route optimization' },
                { name: 'NLP Invoicing', desc: 'NLP system for processing invoices.', prob: '100+ hours/month in manual data entry', res: '95% process automation and 0 errors' }
            ]
        },
        benefits: {
            title: "Why Innovation Group?",
            list: [
                { title: 'Custom Solutions', desc: 'demand-adjusted pricing' },
                { title: 'Technical and Human Approach', desc: 'We combine technical rigor with empathy' },
                { title: 'Modular Work', desc: 'Scalable implementation by layers' },
                { title: 'Strategic Vision', desc: 'Orientation to measurable results' },
                { title: 'Innovation Capacity', desc: 'Use of cutting-edge technologies' },
                { title: 'Measurable Results', desc: 'Real and quantifiable impact' }
            ]
        },
        testimonials: {
            title: "Be one of our first clients and take advantage of the adaptability offer",
            list: []
        },
        contact: {
            title: "Let's start a project",
            desc: "Contact our team.",
            email: "Email address",
            whatsapp: "WhatsApp",
            social: "Social Media",
            form: {
                name: "Full Name",
                namePlaceholder: "Your name",
                email: "Email address",
                emailPlaceholder: "you@email.com",
                message: "Message or project",
                messagePlaceholder: "How can we help you?",
                send: "Send inquiry"
            }
        },
        footer: {
            desc: "We transform ideas into real, optimized, and intelligent solutions. Advanced engineering at your fingertips.",
            navTitle: "Navigation",
            nav: ["Home", "About Us", "Modular Services", "Innovators"],
            contactTitle: "Quick Contact",
            paidMethodsTitle: "Payment Methods",
            rights: "All rights reserved."
        },
        payment: {
            title: "Payment Methods",
            desc: "Choose your preferred payment method to start your project"
        },
        news: {
            title: "Latest News",
            items: [
                { 
                    date: "May - August 2026", 
                    text: "Adaptability Season", 
                    description: "It's time to transform your project! During this growth stage, we're offering special prices on all our technology development services. From May 15 to August 13, access AI solutions, web development, data analytics, and IoT at unique prices.",
                    image: base + "News/Tempoara_adaptabilidad.png",
                    link: "#services"
                }
            ]
        }
    }
};
