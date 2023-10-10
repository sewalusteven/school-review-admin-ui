import Keycloak from 'keycloak-js';

export const keycloakInstance = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'schoolrev',
    clientId: 'school-admin-ui'
});