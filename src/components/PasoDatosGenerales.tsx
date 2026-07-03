import React from 'react';
import { DatosOperacion } from '../types';

interface Props {
  datos: DatosOperacion;
  onChange: (datos: DatosOperacion) => void;
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

const campoStyle: React.CSSProperties = {
  marginBottom: '18px',
};

export default function PasoDatosGenerales({ datos, onChange }: Props) {
  const actualizar = (campo: keyof DatosOperacion, valor: string) => {
    onChange({ ...datos, [campo]: valor });
  };

  const manejarCargaPromesa = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0];
    if (!archivo) return;
    // Por ahora guardamos el archivo temporalmente en el navegador.
    // Más adelante esto se conecta a Google Drive.
    const urlTemporal = URL.createObjectURL(archivo);
    onChange({
      ...datos,
      promesaArchivoNombre: archivo.name,
      promesaArchivoUrl: urlTemporal,
    });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '4px' }}>Datos generales de la operación</h2>
      <p style={{ color: '#777', marginBottom: '24px', fontSize: '14px' }}>
        Información base para iniciar el estudio de títulos.
      </p>

      <div style={campoStyle}>
        <label style={labelStyle}>Nombre de la operación</label>
        <input
          style={inputStyle}
          type="text"
          value={datos.nombreOperacion}
          onChange={(e) => actualizar('nombreOperacion', e.target.value)}
          placeholder="Ej: Compraventa depto Las Condes - Familia Pérez"
        />
      </div>

      <div style={campoStyle}>
        <label style={labelStyle}>Dirección del inmueble</label>
        <input
          style={inputStyle}
          type="text"
          value={datos.direccionInmueble}
          onChange={(e) => actualizar('direccionInmueble', e.target.value)}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={campoStyle}>
          <label style={labelStyle}>Comuna</label>
          <input
            style={inputStyle}
            type="text"
            value={datos.comuna}
            onChange={(e) => actualizar('comuna', e.target.value)}
          />
        </div>
        <div style={campoStyle}>
          <label style={labelStyle}>Región</label>
          <input
            style={inputStyle}
            type="text"
            value={datos.region}
            onChange={(e) => actualizar('region', e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={campoStyle}>
          <label style={labelStyle}>Nombre del vendedor</label>
          <input
            style={inputStyle}
            type="text"
            value={datos.nombreVendedor}
            onChange={(e) => actualizar('nombreVendedor', e.target.value)}
          />
        </div>
        <div style={campoStyle}>
          <label style={labelStyle}>Nombre del comprador</label>
          <input
            style={inputStyle}
            type="text"
            value={datos.nombreComprador}
            onChange={(e) => actualizar('nombreComprador', e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={campoStyle}>
          <label style={labelStyle}>RUT del vendedor</label>
          <input
            style={inputStyle}
            type="text"
            value={datos.rutVendedor}
            onChange={(e) => actualizar('rutVendedor', e.target.value)}
            placeholder="Ej: 12.345.678-9"
          />
        </div>
        <div style={campoStyle}>
          <label style={labelStyle}>RUT del comprador</label>
          <input
            style={inputStyle}
            type="text"
            value={datos.rutComprador}
            onChange={(e) => actualizar('rutComprador', e.target.value)}
            placeholder="Ej: 12.345.678-9"
          />
        </div>
      </div>

      <div style={campoStyle}>
        <label style={labelStyle}>Nombre del corredor (si aplica)</label>
        <input
          style={inputStyle}
          type="text"
          value={datos.nombreCorredor}
          onChange={(e) => actualizar('nombreCorredor', e.target.value)}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={campoStyle}>
          <label style={labelStyle}>Precio</label>
          <input
            style={inputStyle}
            type="text"
            value={datos.precio}
            onChange={(e) => actualizar('precio', e.target.value)}
            placeholder="Ej: UF 3.500"
          />
        </div>
        <div style={campoStyle}>
          <label style={labelStyle}>Tipo de operación</label>
          <input
            style={{ ...inputStyle, backgroundColor: '#f5f5f5', color: '#777' }}
            type="text"
            value="Compraventa"
            disabled
          />
        </div>
      </div>

      <div style={{ ...campoStyle, marginTop: '10px' }}>
        <label style={labelStyle}>Promesa o Cierre de negocios</label>
        <div
          style={{
            border: '1px dashed #ccc',
            borderRadius: '8px',
            padding: '18px',
            textAlign: 'center',
            backgroundColor: '#fafafa',
          }}
        >
          {datos.promesaArchivoNombre ? (
            <div style={{ fontSize: '14px', color: '#333' }}>
              📄 {datos.promesaArchivoNombre}
              <div style={{ marginTop: '8px' }}>
                <label
                  style={{
                    fontSize: '13px',
                    color: '#1a1a2e',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Cambiar archivo
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={manejarCargaPromesa}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>
          ) : (
            <label style={{ cursor: 'pointer', display: 'block' }}>
              <div style={{ fontSize: '14px', color: '#777', marginBottom: '4px' }}>
                📎 Click para subir la Promesa o Cierre de negocios
              </div>
              <div style={{ fontSize: '12px', color: '#aaa' }}>PDF, DOC o DOCX</div>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={manejarCargaPromesa}
                style={{ display: 'none' }}
              />
            </label>
          )}
        </div>
        <p style={{ fontSize: '11px', color: '#aaa', marginTop: '6px' }}>
          Por ahora se guarda temporalmente en el navegador. Próximamente se conectará a Google Drive.
        </p>
      </div>
    </div>
  );
}