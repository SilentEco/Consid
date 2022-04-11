⚙️ Installation

⚡ Backend

⚠️ OBS Du måste vara i consid/backend foldern innan du börjar ⚠️

Steg 1. Kör en yarn install i terminalen
---------------------------------------------------------------------------------
Steg 2. Skapa en .env fil som ska ligga i roten av backendmappen med följande:
---------------------------------------------------------------------------------
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=OsjYsOnDY8HSy60pnDW+fQ==,4El1/XilOs9JQS7etcjUYA==,Gnfy6Qf50yJpXWSdoPpyMg==,hjhBksMhveWnFxJ/KSyrqQ==

DATABASE_HOST=ec2-34-242-84-130.eu-west-1.compute.amazonaws.com
DATABASE_NAME=d4stiohb20lmhm
DATABASE_PORT=5432
DATABASE_USERNAME=plpdwrfmgkiczi
DATABASE_PASSWORD=273ea2eae489eb3c220d359d938bc629462d000b06d4bf1280cf7af36a20f026
DATABASE_SSL=requireJWT_SECRET=659a8510-dbf3-4e24-864a-6b426eeadf2d
API_TOKEN_SALT=dc8baf8669fe579dadf4192b0cdd58c0
JWT_SECRET=a4264b32-cc3e-406e-bae4-e9b552d29ea8

CLOUDINARY_NAME=dld2qe0tx
CLOUDINARY_API_KEY=337776556649176
CLOUDINARY_API_SECRET=GhemB69nHyxUUp5yDSf1M16lcJQ
```

Steg 3. Starta servern med yarn develop i terminalen. (Låt denna vara igång eftersom frontend installationen kräver att backenden är igång)
---------------------------------------------------------------------------------
⚡ Frontend

⚠️ OBS Du måste vara i consid/frontend foldern innan du börjar ⚠️

Steg 1. Kör en yarn install i terminalen.
---------------------------------------------------------------------------------
Steg 2. Kör en yarn build i terminalen.
---------------------------------------------------------------------------------
Steg 3. Kör en yarn start i terminalen.
---------------------------------------------------------------------------------
📌 Användning

Sen är det bara att surfa in på http://localhost:3000 

För att använda strapi (CMS), surfa in på http://localhost:1337 och använd inloggningsuppgifterna:

Email: admin@admin.com

Password: Password1
