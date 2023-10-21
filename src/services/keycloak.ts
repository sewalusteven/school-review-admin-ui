import Keycloak from 'keycloak-js';

export const keycloakInstance = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_BASE_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});