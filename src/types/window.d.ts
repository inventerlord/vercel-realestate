export { };

declare global {
    interface Window {
        env: {
            SERVER_URI: string;
            NODE_ENV: "development" | "production";
        };
    }
}
