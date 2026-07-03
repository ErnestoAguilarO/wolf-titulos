// ============================================
// TIPOS DE DATOS - WOLF TÍTULOS
// ============================================

// ---------- PASO 1: Datos generales ----------
export interface DatosOperacion {
  nombreOperacion: string;
  direccionInmueble: string;
  comuna: string;
  region: string;
  rolAvaluo: string;
  nombreComprador: string;
  nombreVendedor: string;
  precio: string;
  tipoOperacion: 'compraventa';
}

// ---------- PASO 2: Parte vendedora ----------
export type TipoVendedor =
  | 'persona_natural'
  | 'sociedad'
  | 'comunidad_hereditaria'
  | 'inmobiliaria'
  | 'banco'
  | 'otro';

export interface VendedorPersonaNatural {
  nombreCompleto: string;
  cedulaIdentidad: string;
  nacionalidad: string;
  estadoCivil: string;
  regimenMatrimonial: string;
  profesionUOficio: string;
  domicilio: string;
  correo: string;
  telefono: string;
  conyugeDebeComparecer: boolean;
}

export interface VendedorSociedad {
  razonSocial: string;
  rut: string;
  tipoSocial: string;
  representanteLegal: string;
  rutRepresentante: string;
  facultades: string;
  vigenciaSociedad: string;
  poderes: string;
  escrituraSocial: string;
  certificadoVigencia: string;
  certificadoAnotaciones: string;
}

export interface ParteVendedora {
  tipoVendedor: TipoVendedor | null;
  personaNatural?: VendedorPersonaNatural;
  sociedad?: VendedorSociedad;
}

// ---------- PASO 3: Parte compradora ----------
export type TipoComprador = 'persona_natural' | 'sociedad' | 'otro';
export type FormaPago = 'contado' | 'credito_hipotecario';

export interface CreditoHipotecario {
  bancoMutuante: string;
  ejecutivoBancario: string;
  estadoAprobacion: string;
  montoCredito: string;
  tieneCartaResguardo: boolean;
  tieneBancoAlzante: boolean;
}

export interface ParteCompradora {
  tipoComprador: TipoComprador | null;
  personaNatural?: VendedorPersonaNatural;
  sociedad?: VendedorSociedad;
  formaPago: FormaPago | null;
  creditoHipotecario?: CreditoHipotecario;
}

// ---------- PASO 4: Inmueble ----------
export type TipoInmueble =
  | 'casa' | 'departamento' | 'parcela' | 'sitio'
  | 'oficina' | 'local' | 'estacionamiento' | 'bodega' | 'otro';

export interface Inmueble {
  direccionCompleta: string;
  comuna: string;
  region: string;
  rolAvaluo: string;
  tipoInmueble: TipoInmueble | null;
  descripcionDominioVigente: string;
  deslindes: string;
  inscripcionDominio: string;
  fojas: string;
  numero: string;
  anio: string;
  conservadorBienesRaices: string;

  acogidoCopropiedad: boolean;
  reglamentoCopropiedad?: string;
  certificadoGastosComunes?: string;
  certificadoDeudaAdministracion?: string;
  tieneEstacionamiento?: boolean;
  tieneBodega?: boolean;
  derechosUsoGoceExclusivo?: string;
  rolIndependienteAsociado?: string;

  tieneHipoteca: boolean;
  tieneProhibiciones: boolean;
  tieneUsufructo: boolean;
  tieneServidumbre: boolean;
  estaArrendado: boolean;
  existeAlzamiento: boolean;
  aplicaIVA: boolean;
  haySubsidioHabitacional: boolean;
  haySubdivisionDL3516: boolean;
  terrenoTieneConstruccion: boolean;
  hayExpropiacion: boolean;
}

// ---------- PASO 5: Documentos ----------
export interface DocumentoRequerido {
  id: string;
  nombre: string;
  categoria: string;
  obligatorio: boolean;
  archivoUrl?: string;
  archivoNombre?: string;
  driveFileId?: string;
  fechaCarga?: string;
}

// ---------- PASO 6: Validación ----------
export interface ValidacionResultado {
  completo: boolean;
  documentosFaltantes: string[];
  generarConIncompletos: boolean;
}

// ---------- PASO 7-8: Análisis e Informe ----------
export interface AnalisisJuridico {
  individualizacionInmueble: string;
  titularidadVendedor: string;
  historiaDominio: string;
  inscripciones: string;
  gravamenes: string;
  prohibiciones: string;
  hipotecas: string;
  embargos: string;
  servidumbres: string;
  usufructos: string;
  expropiaciones: string;
  deudasContribuciones: string;
  deudasGastosComunes: string;
  problemasPersoneria: string;
  problemasComparecencia: string;
  necesitaAutorizacionConyuge: boolean;
  necesitaAlzamiento: boolean;
  riesgosDetectados: string[];
  requiereRevisionJuridica: boolean;
}

export type RecomendacionFinal = 'aprobar' | 'aprobar_con_observaciones' | 'rechazar_revision';

export interface InformeTitulos {
  datosOperacion: DatosOperacion;
  parteVendedora: ParteVendedora;
  parteCompradora: ParteCompradora;
  inmueble: Inmueble;
  analisis: AnalisisJuridico | null;
  observacionesJuridicas: string;
  conclusion: string;
  documentosFaltantes: string[];
  recomendacionFinal: RecomendacionFinal | null;
}

// ---------- ESTADO GLOBAL DEL WIZARD ----------
export type PasoWizard =
  | 'datos_operacion'
  | 'parte_vendedora'
  | 'parte_compradora'
  | 'inmueble'
  | 'documentos'
  | 'validacion'
  | 'informe_final';

export interface EstadoEstudioTitulos {
  pasoActual: PasoWizard;
  datosOperacion: DatosOperacion;
  parteVendedora: ParteVendedora;
  parteCompradora: ParteCompradora;
  inmueble: Inmueble;
  documentos: DocumentoRequerido[];
  validacion: ValidacionResultado | null;
  informe: InformeTitulos | null;
}