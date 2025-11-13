exports.handler = async (event, context) => {
  // Apenas POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ erro: 'Método não permitido' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const dataHora = new Date().toLocaleString('pt-BR');
    const timestamp = Date.now();
    // Sanitizar nome da ficha para id (sem espaços, sem acentos, sem caracteres especiais)
    let nomeFicha = (data.nomeFicha || "").toString().trim();
    nomeFicha = nomeFicha
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
      .replace(/[^a-zA-Z0-9 ]/g, '') // remove caracteres especiais
      .replace(/\s+/g, '-') // troca espaços por hífen
      .substring(0, 40); // limita tamanho
  // Gerar código super curto: 4 caracteres alfanuméricos
  const shortCode = Math.random().toString(36).substring(2, 6).toUpperCase();
  const id_ficha = `ficha_${nomeFicha}_${shortCode}.json`;

    // Preparar dados
    const fichaCompleta = {
      id: id_ficha,
      nomeFicha: data.nomeFicha,
      _data_hora: dataHora,
      _timestamp: timestamp,
      ...data
    };

    // Contar arquivos recebidos
    let arquivos_salvos = 0;
    if (data._arquivos) {
      if (data._arquivos.cemig_file) arquivos_salvos++;
      if (data._arquivos.copasa_file) arquivos_salvos++;
      console.log('📎 Arquivos recebidos:', Object.keys(data._arquivos));
    }

    // Log (para verificar no Netlify)
    console.log('✅ Ficha recebida:', id_ficha);
    console.log('📊 Dados:', fichaCompleta);
    console.log('📎 Total de arquivos:', arquivos_salvos);

    // Retornar sucesso
    return {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        sucesso: true,
        mensagem: 'Ficha salva com sucesso!',
        id_ficha: id_ficha,
        data_hora: dataHora,
        dados: fichaCompleta,
        arquivos_salvos: arquivos_salvos
      })
    };

  } catch (error) {
    console.error('❌ Erro:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sucesso: false,
        erro: error.message
      })
    };
  }
};
