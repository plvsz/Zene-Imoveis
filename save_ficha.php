<?php
/**
 * save_ficha.php - Backend para salvar formulário de captação
 * Recebe dados POST e salva em JSON + arquivos
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['erro' => 'Método não permitido']);
    exit;
}

// Diretório para salvar fichas (criar se não existir)
$dir_fichas = __DIR__ . '/fichas_salvas';
if (!is_dir($dir_fichas)) {
    mkdir($dir_fichas, 0755, true);
}

// Diretório para salvar arquivos
$dir_arquivos = $dir_fichas . '/arquivos';
if (!is_dir($dir_arquivos)) {
    mkdir($dir_arquivos, 0755, true);
}

try {
    // Preparar dados
    $dados = $_POST;
    $data_hora = date('Y-m-d H:i:s');
    $timestamp = date('YmdHis_') . uniqid();
    
    // Processar arquivos enviados
    $arquivos_info = [];
    foreach (['cemig_file', 'copasa_file'] as $field) {
        if (isset($_FILES[$field]) && $_FILES[$field]['error'] === UPLOAD_ERR_OK) {
            $file = $_FILES[$field];
            $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
            $novo_nome = $timestamp . '_' . $field . '.' . $ext;
            $caminho_destino = $dir_arquivos . '/' . $novo_nome;
            
            if (move_uploaded_file($file['tmp_name'], $caminho_destino)) {
                $arquivos_info[$field] = [
                    'nome_original' => $file['name'],
                    'tamanho' => $file['size'],
                    'tipo' => $file['type'],
                    'arquivo_salvo' => $novo_nome
                ];
                // Remover do POST (não salvar no JSON)
                unset($dados[$field]);
            }
        }
    }
    
    // Adicionar metadata
    $dados['_data_hora'] = $data_hora;
    $dados['_arquivos'] = $arquivos_info;
    
    // Salvar como JSON
    $nome_arquivo = $timestamp . '.json';
    $caminho_json = $dir_fichas . '/' . $nome_arquivo;
    
    if (file_put_contents($caminho_json, json_encode($dados, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
        echo json_encode([
            'sucesso' => true,
            'mensagem' => 'Ficha salva com sucesso!',
            'id_ficha' => $nome_arquivo,
            'data_hora' => $data_hora,
            'arquivos_salvos' => count($arquivos_info)
        ]);
    } else {
        throw new Exception('Erro ao salvar arquivo JSON');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'sucesso' => false,
        'erro' => $e->getMessage()
    ]);
}
?>
