# Deploy

```console
GIT_USER=github_username USE_SSH=true yarn deploy
```

Faz o deploy no github pages

# Search Index Update

```console
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```
Atualiza os índices do search