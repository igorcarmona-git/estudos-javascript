/*
JS é case-sensitive
JS aceita a cadeia de caracteres Unicode

Posso:
    - Iniciar com esses caracteres especiais: $ _
    - Iniciar com letras
    - Colocar acentos
    - Letras maíusculas e minísculas fazem diferença

Não Posso:
    - Iniciar com números
    - Colocar espaços vazios no nome

Ideal:
    - Criar nomes que fazem sentido (Que explique o que a variável é ou faz)
    - camelCase --> exemplo: checkIfNameExists
    - snake_case --> exemplo: check_if_name_exists
    - Escrever em inglês
*/
let nome = "Igor"
let checkIfNameExists = nome === "Igor"
console.log(checkIfNameExists)