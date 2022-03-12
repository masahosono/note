declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production';
        readonly PORT: number;
        readonly SITE_URL: string;
        readonly SITE_LOCALHOST_URL: string;
        readonly SITE_NAME: string;
        readonly SITE_DEFAULT_DESCRIPTION: string;
        readonly ARTICLE_PER_PAGE: number;
    }
}
