let env = process.env.NODE_ENV || 'local';
let envConfig = {
    local: {
        siteUrl: 'http://localhost:3300',
        port: 3300,
        googleAuth: {
            clientID: 'your google client Id',
            clientSecret: 'your CS',
            callbackUrl: '/api/auth/google/callback'
        },
        mongoURI: 'Your mongo URI',
        sessionSecret: 'aRandomString',
    },
    development: {
        //hope for the best
    },
    production: {
        //hope for the best
    }
};
module.exports = envConfig[env];