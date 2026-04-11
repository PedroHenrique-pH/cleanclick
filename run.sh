#!/bin/bash

echo "Iniciando o ecossistema CleanClick..."

# 1. Derruba o que estiver rodando e limpa órfãos
docker compose down --remove-orphans

# 2. Sobe tudo. 
# O parâmetro --build garante que ele cheque por mudanças no Dockerfile
# Sem o -d para você ver os logs em tempo real no terminal
docker compose up --build