// api/save-ficha.js - Backend para Vercel
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function handler(req, res) {
  // Apenas aceita POST
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  try {
    // Para Vercel, usamos /tmp para armazenar dados temporários
    // Para produção, use banco de dados (MongoDB, Supabase, etc)
    
    const dados = req.body;
    const dataHora = new Date().toLocaleString('pt-BR');
    const timestamp = Date.now();
    const id_ficha = `ficha_${timestamp}.json`;

    // Preparar dados para salvar
    const fichaCompleta = {
      id: id_ficha,
      _data_hora: dataHora,
      _timestamp: timestamp,
      ...dados
    };

    // Salvar em arquivo JSON (funciona no Vercel com /tmp)
    const caminhoArquivo = path.join('/tmp', id_ficha);
    await writeFile(caminhoArquivo, JSON.stringify(fichaCompleta, null, 2), 'utf8');

    // Responder com sucesso
    res.status(200).json({
      sucesso: true,
      mensagem: 'Ficha salva com sucesso!',
      id_ficha: id_ficha,
      data_hora: dataHora
    });

  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({
      sucesso: false,
      erro: error.message
    });
  }
}
