# Movie DB Lanjutan

Pada Tugas ini, kalian diminta untuk membuat server backend baru, dengan migration dilakukan secara manual menggunakan sequelize-cli dengan mengikuti arahan dari API-doc

## Requirement

### 1. Struktur folder

Pada project ini kalian diminta untuk memisahkan logic pada repository kode kalian seperti gambar di bawah ini.
![Model-Controller Struktur Folder](./assets/folder-structure.png "Model-Controller Struktur Folder")

- Folder config : berisi config setup database
- Folder controllers: berisi logic untuk memproses request dari client.
- Folder migrations : berisi historikal perubahan/penambahan/penghapusan table pada database
- Folder seeders : berisi logic untuk mengisi table pada database
- Folder models : berisi file yang merepresentasikan entitas table di database
- Folder routes : berisi file routing endpoint
- Folder middleware : berisi file yg berfungsi sebagai middleware 

### 2. ERD IMDB

nama table: Movie (Bisa plural/singular)
kolom:

- id : PRIMARY KEY DataTypes.INTEGER NOT NULL
- title: DataTypes.STRING, NOT NULL
- description: DataTypes.TEXT, NOT NULL
- createdAt DataTypes.DATE, NOT NULL
- updatedAt: DataTypes.DATE, NOT NULL

nama table: Review (Bisa plural/singular)
kolom:

- id : PRIMARY KEY DataTypes.INTEGER NOT NULL
- title: DataTypes.STRING, NOT NULL
- description: DataTypes.TEXT, NOT NULL
- rating: DataTypes.INTEGER NOT NULL
- movieId: DataTypes.Integer NOT NULL
- userId: DataTypes.Integer NOT NULL
- createdAt DataTypes.DATE, NOT NULL
- updatedAt: DataTypes.DATE, NOT NULL

nama table: User (Bisa plural/singular)
kolom:

- id : PRIMARY KEY DataTypes.INTEGER NOT NULL
- name: DataTypes.STRING, NOT NULL
- email: DataTypes.STRING, NOT NULL, UNIQUE
- password: DataTypes.TEXT, NOT NULL
- isAdmin : DataTypes.Boolean, NOT NULL
- createdAt DataTypes.DATE, NOT NULL
- updatedAt: DataTypes.DATE, NOT NULL

### 3. ENDPOINT

Untuk detail endpoint requirement dapat dilihat pada folder assets/api-doc.md dan assets/imdb-api.postman_collection.json. Pastikan server kalian dapat berjalan sesuai dengan berkas tersebut.

### 4. MIGRATION

Pada requirement ini kalian diminta untuk melakukan migrasi database movie app menggunakan sequelize cli dan tidak diperbolehkan mengubah secara langsung table/kolom/tipe data melalui gui atau psql. Untuk detailnya akan dijelaskan oleh mentor dan berikut referensinya : https://sequelize.org/docs/v6/other-topics/migrations/

### 5. SEEDER

- Kalian diminta untuk membuat seeder sejumlah 5 data movie menggunakan sequelize-cli.
- Kalian diminta untuk membuat seeder untuk 1 user dengan value property isAdmin true.

reference: https://sequelize.org/docs/v6/other-topics/migrations/

### 6. Sequelize hooks n validation

Tambahkan fungsional pada models dengan hooks n validasi berikut:

-- kolom title

- tambahkan validasi hanya bisa menerima panjang string maksimal 255 karakter
- tambahkan validasi input tidak boleh null atau string kosong

-- kolom description

- tambahkan validasi input tidak boleh null atau string kosong

-- kolom rating pada table review

- tambahkan validasi input tidak boleh kurang dari 0 dan lebih dari 5

-- kolom email pada user

- tambahkan validasi input harus berupa email

-- kolom password pada user
- tambahkan validasi hanya bisa menerima panjang string maksimal 20 karakter dan minimal 8 karakter
- tambahkan validasi input tidak boleh null atau string kosong

-- kolom isAdmin pada user
- tambahkan default value false

### 6. Sequelize Association

Tambahkan association pada models movie dengan review, dengan asumsi satu movie bisa punya banyak review
sehingga saat find si movie atau si review, akan eager loading data relation nya

Tambahkan association pada models user dengan review, dengan asumsi satu user bisa punya banyak review
sehingga saat find si user atau si review, akan eager loading data relation nya

### Authentikasi dan Authorization
-- Endpoint Movie
- `POST /movie`, tambahkan authentication dan authorization sehingga yang dapat mengakses api ini hanyalah user yang isAdmin === true,
- `GET /movie`
- `GET /movie/:id`
- `PUT /movie/:id`, tambahkan authentication dan authorization sehingga yang dapat mengakses api ini hanyalah user yang isAdmin === true,
- `DELETE /movie/:id`, tambahkan authentication dan authorization sehingga yang dapat mengakses api ini hanyalah user yang isAdmin === true,

-- Endpoint Review
- `POST /review`, tambahkan authentication untuk user yang membawa token jwt valid. (tiap kali create akan memeberi value Review.userId = user.id)
- `GET /review`
- `PUT /review/:id`, tambahkan authentication dan authorization sehingga yang boleh mengakses api ini hanya user yang membuat review tersebut (Review.userId = user.id).
- `DELETE /review/:id`, tambahkan authentication dan authorization sehingga yang boleh mengakses api ini hanya user yang membuat review tersebut (Review.userId = user.id).
