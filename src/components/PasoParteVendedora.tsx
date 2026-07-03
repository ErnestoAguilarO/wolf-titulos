import React from 'react';
import {
  ParteVendedora,
  TipoVendedor,
  VendedorPersonaNatural,
  VendedorSociedad,
} from '../types';

interface Props {
  parteVendedora: ParteVendedora;
  onChange: (parteVendedora: ParteVendedora) => void;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '14px',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  fontSize: '13px',
  color: '#555',
  display: 'block',
  marginBottom: '6px',
  fontWeight: 500,
};

const campoStyle: React.CSSProperties = { marginBottom: '18px' };

const OPCIONES_TIPO_VENDEDOR: { value: TipoVendedor; label: string }[] = [
  { value: 'persona_natural', label: 'Persona natural' },
  { value: 'sociedad', label: 'Sociedad' },
  { value: 'comunidad_hereditaria', label: 'Comunidad hereditaria' },
  { value: 'inmobiliaria', label: 'Inmobiliaria' },
  { value: 'banco', label: 'Banco' },
  { value: 'otro', label: 'Otro' },
];

const personaNaturalVacia: VendedorPersonaNatural = {
  nombreCompleto: '',
  cedulaIdentidad: '',
  nacionalidad: '',
  estadoCivil: '',
  regimenMatrimonial: '',
  profesionUOficio: '',
  domicilio: '',
  correo: '',
  telefono: '',
  conyugeDebeComparecer: false,
};

const sociedadVacia: VendedorSociedad = {
  razonSocial: '',
  rut: '',
  tipoSocial: '',
  representanteLegal: '',
  rutRepresentante: '',
  facultades: '',
  vigenciaSociedad: '',
  poderes: '',
  escrituraSocial: '',
  certificadoVigencia: '',
  certificadoAnotaciones: '',
};

export default function PasoParteVendedora({ parteVendedora, onChange }: Props) {
  const seleccionarTipo = (tipo: TipoVendedor) => {
    if (tipo === 'persona_natural') {
      onChange({ tipoVendedor: tipo, personaNatural: personaNaturalVacia });
    } else if (tipo === 'sociedad') {
      onChange({ tipoVendedor: tipo, sociedad: sociedadVacia });
    } else {
      onChange({ tipoVendedor: tipo });
    }
  };

  const actualizarPersonaNatural = (
    campo: keyof VendedorPersonaNatural,
    valor: string | boolean
  ) => {
    if (!parteVendedora.personaNatural) return;
    onChange({
      ...parteVendedora,
      personaNatural: { ...parteVendedora.personaNatural, [campo]: valor },
    });
  };

  const actualizarSociedad = (campo: keyof VendedorSociedad, valor: string) => {
    if (!parteVendedora.sociedad) return;
    onChange({
      ...parteVendedora,
      sociedad: { ...parteVendedora.sociedad, [campo]: valor },
    });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '4px' }}>Parte vendedora</h2>
      <p style={{ color: '#777', marginBottom: '24px', fontSize: '14px' }}>
        ¿Quién vende?
      </p>

      {/* Selector de tipo de vendedor */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          marginBottom: '28px',
        }}
      >
        {OPCIONES_TIPO_VENDEDOR.map((op) => (
          <button
            key={op.value}
            onClick={() => seleccionarTipo(op.value)}
            style={{
              padding: '12px 8px',
              borderRadius: '8px',
              border:
                parteVendedora.tipoVendedor === op.value
                  ? '2px solid #1a1a2e'
                  : '1px solid #ddd',
              backgroundColor:
                parteVendedora.tipoVendedor === op.value ? '#1a1a2e' : '#fff',
              color: parteVendedora.tipoVendedor === op.value ? '#fff' : '#333',
              fontSize: '13px',
              cursor: 'pointer',
              fontWeight: parteVendedora.tipoVendedor === op.value ? 'bold' : 'normal',
            }}
          >
            {op.label}
          </button>
        ))}
      </div>

      {/* Formulario: Persona natural */}
      {parteVendedora.tipoVendedor === 'persona_natural' && parteVendedora.personaNatural && (
        <div>
          <div style={campoStyle}>
            <label style={labelStyle}>Nombre completo</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.personaNatural.nombreCompleto}
              onChange={(e) => actualizarPersonaNatural('nombreCompleto', e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={campoStyle}>
              <label style={labelStyle}>Cédula de identidad</label>
              <input
                style={inputStyle}
                type="text"
                value={parteVendedora.personaNatural.cedulaIdentidad}
                onChange={(e) => actualizarPersonaNatural('cedulaIdentidad', e.target.value)}
              />
            </div>
            <div style={campoStyle}>
              <label style={labelStyle}>Nacionalidad</label>
              <input
                style={inputStyle}
                type="text"
                value={parteVendedora.personaNatural.nacionalidad}
                onChange={(e) => actualizarPersonaNatural('nacionalidad', e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={campoStyle}>
              <label style={labelStyle}>Estado civil</label>
              <input
                style={inputStyle}
                type="text"
                value={parteVendedora.personaNatural.estadoCivil}
                onChange={(e) => actualizarPersonaNatural('estadoCivil', e.target.value)}
                placeholder="Ej: Casado, Soltero, Viudo"
              />
            </div>
            <div style={campoStyle}>
              <label style={labelStyle}>Régimen matrimonial (si corresponde)</label>
              <input
                style={inputStyle}
                type="text"
                value={parteVendedora.personaNatural.regimenMatrimonial}
                onChange={(e) => actualizarPersonaNatural('regimenMatrimonial', e.target.value)}
                placeholder="Ej: Sociedad conyugal, Separación de bienes"
              />
            </div>
          </div>

          <div style={campoStyle}>
            <label style={labelStyle}>Profesión u oficio</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.personaNatural.profesionUOficio}
              onChange={(e) => actualizarPersonaNatural('profesionUOficio', e.target.value)}
            />
          </div>

          <div style={campoStyle}>
            <label style={labelStyle}>Domicilio</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.personaNatural.domicilio}
              onChange={(e) => actualizarPersonaNatural('domicilio', e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={campoStyle}>
              <label style={labelStyle}>Correo</label>
              <input
                style={inputStyle}
                type="email"
                value={parteVendedora.personaNatural.correo}
                onChange={(e) => actualizarPersonaNatural('correo', e.target.value)}
              />
            </div>
            <div style={campoStyle}>
              <label style={labelStyle}>Teléfono</label>
              <input
                style={inputStyle}
                type="text"
                value={parteVendedora.personaNatural.telefono}
                onChange={(e) => actualizarPersonaNatural('telefono', e.target.value)}
              />
            </div>
          </div>

          <div style={campoStyle}>
            <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={parteVendedora.personaNatural.conyugeDebeComparecer}
                onChange={(e) => actualizarPersonaNatural('conyugeDebeComparecer', e.target.checked)}
              />
              ¿El cónyuge debe comparecer o autorizar?
            </label>
          </div>
        </div>
      )}

      {/* Formulario: Sociedad */}
      {parteVendedora.tipoVendedor === 'sociedad' && parteVendedora.sociedad && (
        <div>
          <div style={campoStyle}>
            <label style={labelStyle}>Razón social</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.sociedad.razonSocial}
              onChange={(e) => actualizarSociedad('razonSocial', e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={campoStyle}>
              <label style={labelStyle}>RUT</label>
              <input
                style={inputStyle}
                type="text"
                value={parteVendedora.sociedad.rut}
                onChange={(e) => actualizarSociedad('rut', e.target.value)}
              />
            </div>
            <div style={campoStyle}>
              <label style={labelStyle}>Tipo social</label>
              <input
                style={inputStyle}
                type="text"
                value={parteVendedora.sociedad.tipoSocial}
                onChange={(e) => actualizarSociedad('tipoSocial', e.target.value)}
                placeholder="Ej: SpA, Ltda., S.A."
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={campoStyle}>
              <label style={labelStyle}>Representante legal</label>
              <input
                style={inputStyle}
                type="text"
                value={parteVendedora.sociedad.representanteLegal}
                onChange={(e) => actualizarSociedad('representanteLegal', e.target.value)}
              />
            </div>
            <div style={campoStyle}>
              <label style={labelStyle}>RUT del representante</label>
              <input
                style={inputStyle}
                type="text"
                value={parteVendedora.sociedad.rutRepresentante}
                onChange={(e) => actualizarSociedad('rutRepresentante', e.target.value)}
              />
            </div>
          </div>

          <div style={campoStyle}>
            <label style={labelStyle}>Facultades</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.sociedad.facultades}
              onChange={(e) => actualizarSociedad('facultades', e.target.value)}
            />
          </div>

          <div style={campoStyle}>
            <label style={labelStyle}>Vigencia de la sociedad</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.sociedad.vigenciaSociedad}
              onChange={(e) => actualizarSociedad('vigenciaSociedad', e.target.value)}
            />
          </div>

          <div style={campoStyle}>
            <label style={labelStyle}>Poderes</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.sociedad.poderes}
              onChange={(e) => actualizarSociedad('poderes', e.target.value)}
            />
          </div>

          <p style={{ fontSize: '12px', color: '#999', marginTop: '20px', marginBottom: '10px' }}>
            Los siguientes documentos se cargarán formalmente en el Paso 5 (Documentos). Por ahora puedes anotar referencia si ya los tienes:
          </p>

          <div style={campoStyle}>
            <label style={labelStyle}>Escritura social</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.sociedad.escrituraSocial}
              onChange={(e) => actualizarSociedad('escrituraSocial', e.target.value)}
              placeholder="Referencia o notas"
            />
          </div>

          <div style={campoStyle}>
            <label style={labelStyle}>Certificado de vigencia</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.sociedad.certificadoVigencia}
              onChange={(e) => actualizarSociedad('certificadoVigencia', e.target.value)}
              placeholder="Referencia o notas"
            />
          </div>

          <div style={campoStyle}>
            <label style={labelStyle}>Certificado de anotaciones</label>
            <input
              style={inputStyle}
              type="text"
              value={parteVendedora.sociedad.certificadoAnotaciones}
              onChange={(e) => actualizarSociedad('certificadoAnotaciones', e.target.value)}
              placeholder="Referencia o notas"
            />
          </div>
        </div>
      )}

      {/* Otros tipos: mensaje temporal */}
      {parteVendedora.tipoVendedor &&
        !['persona_natural', 'sociedad'].includes(parteVendedora.tipoVendedor) && (
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', color: '#777', fontSize: '14px' }}>
            El formulario detallado para "{OPCIONES_TIPO_VENDEDOR.find((o) => o.value === parteVendedora.tipoVendedor)?.label}" se agregará en un próximo ajuste. Por ahora puedes continuar.
          </div>
        )}
    </div>
  );
}