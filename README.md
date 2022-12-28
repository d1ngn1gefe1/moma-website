# Deploy

- Run `npm run build` locally
- `zip build`
- `scp PATH/TO/build.zip USERNAME@ai.stanford.edu:/afs/cs.stanford.edu/group/moma`
- ssh onto the ai.stanford.edu server and go to /afs/cs.stanford.edu/group/moma, and do the following:
  - `unzip build`
  - remove current content in www folder through `rm www/* -rf`
  - `mv build/* www/`
