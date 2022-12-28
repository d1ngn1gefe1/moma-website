# Deploy

- Run `npm run build` locally
- `zip build`
- `scp PATH/TO/build.zip USERNAME@ai.stanford.edu:/afs/cs.stanford.edu/group/moma`
- `unzip build`
- remove current content in www folder through `rm www/* -rf`
- `mv build/* www/`
