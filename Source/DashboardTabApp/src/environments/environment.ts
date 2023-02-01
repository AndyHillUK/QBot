export const environment = {
    production: false,
    apiBaseUrl: "https://chqbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "e6acfe5e-7f2a-455a-9d85-ecf93371f601",
        clientId: "a6d440e0-6e43-4266-84eb-3375d1dac0b3",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
