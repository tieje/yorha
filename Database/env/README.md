# Database Environments
Place your `.env` files in this directory:

`.env.dev` - **Local development environment (required)**

`.env.prod` - Production environment

`.env.test` - Testing environment

. . . and any others you may want.

<b> <h3 style='color: red'>
IMPORTANT: NEVER UPLOAD ANY .env\* FILE TO GITHUB AS THEY MAY CONTAIN SECRETS</h3></b>

## Why this directory?

Certain aspects of this project require sensitive information, aka secrets (API keys, database passwords, etc.). It is a blatant security risk to place secrets in source code where it can be uploaded to GitHub for the world to see. Secrets should therefore be imported from environment variables.

Additionally, keeping environment variables in one place keeps projects organized.

