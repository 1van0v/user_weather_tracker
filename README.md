# How to run

1. Execute `npm install` in project root folder;
2. Build all packages `npm run build`;
3. Create `packages/api/.env` based on `packages/api/.env_example`;
4. Set `DB_CONNECTION_STRING` in `packages/api/.env` based on used DB;

    ### - A local version of MongDB can be used by:
    1. `cd docker_assets/mongo`;
    2. `docker build . -t mongodb`;
    3. `docker run -p 27017:27017 mongodb`;

    ### - To use hosted MongoDB just specify the need `DB_CONNECTION_STRING` in `packages/api/.env`

5. Start app by `npm run dev`.