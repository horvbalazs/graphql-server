import { createServer } from './server';

const PORT = 4000;

createServer().then(server => {
    server.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT}/graphql`);
    });
});