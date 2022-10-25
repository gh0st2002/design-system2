<?php

function resposta($codigo, $ok, $password) {
    header("Acess-Control-Allow-Origins");
    header("Acess-Control-Allow-Headers");
    header ("Content-Type: application.json");

    http_response_code($codigo);
    echo (json_encode([
        'ok' => $ok,
        'password' => $password
    ]));

    die;

}

if($_SERVER['REQUEST_METHOD']=='OPTIONS')
resposta(200, true,'');


if($_SERVER['REQUEST_METHOD']!= "POST")
resposta(400, false, 'Método inválido');

$conexao = new PDO('mysql:host=localhost;dbname=formulario-marcio', 'root', '');

$body = file_get_contents('php://input');

if(!$body)
resposta(400, false, "Corpo da requisicao não entrado");

$body = json_decode($body);

$body -> nome = filter_var($body -> nome, FILTER_UNSAFE_RAW);
$body -> email = filter_var($body -> email, FILTER_SANITIZE_EMAIL);
$body -> senha = filter_var($body -> senha, FILTER_UNSAFE_RAW);

if (!$body -> nome || !$body-> email || !$body -> senha)
resposta (400, false, "Dados inválidos");

$stm = $conexao->prepare('INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)');
$stm -> bindParam('nome' , $body->nome);
$stm -> bindParam('email' , $body->email);
$stm -> bindParam('senha' , $body->senha);
$stm -> execute();

resposta(200, true, "Cadastro feito com sucesso");