
declare namespace NodeJS{
    export interface ProcessEnv{
        MIKRO_ORM_DB_NAME:string;
        MIKRO_ORM_PASSWORD	:string;
        MIKRO_ORM_USER:string;
        MIKRO_ORM_HOST:string;
        MIKRO_ORM_PORT	:number;
        PORT: number;
    }
   
    
}