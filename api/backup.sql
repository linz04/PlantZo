-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: plantzo
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `uid` int DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  KEY `uid` (`uid`),
  KEY `pid` (`pid`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `postid` int NOT NULL AUTO_INCREMENT,
  `uid` int DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `comment` varchar(255) NOT NULL,
  PRIMARY KEY (`postid`),
  KEY `uid` (`uid`),
  KEY `pid` (`pid`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `uid` int DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `total_cost` int DEFAULT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`tid`),
  KEY `uid` (`uid`),
  KEY `pid` (`pid`),
  CONSTRAINT `history_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`),
  CONSTRAINT `history_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(70) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `price` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `checked` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Moon Cactus - Ruby Ball Cactus','https://cdn.shopify.com/s/files/1/0416/7581/7109/products/Moon-Cactus-Yellow_2.jpg?v=1621595142',20,4,'Kaktus bola ruby, juga biasa dikenal sebagai kaktus bulan. Bagian atas berwarna merah, oranye, atau kuning adalah Gymnocalycium mihanovichii, nama yang mengacu pada kuncup bunga yang tidak memiliki rambut atau duri. Porsi inang kaktus hijau bawah dapat berupa sejumlah spesies tetapi biasanya kaktus Hylocereus.',5,NULL),(2,'Lidah Mertua','https://cf.shopee.co.id/file/99d5a1f72cfba2651705334670c5b2e4',12,4,'Tanaman yg tidak memerlukan banyak air dan dapat hidup tanpa sinar matahari Sangat di rekomendasikan untuk membersihkan udara tinggi 30cm-40 cm tergantung stok tersedia isi minimal 3 daun dikirim tanpa pot',10,NULL),(3,'Calathea Misto','https://cf.shopee.co.id/file/a2b094f3a17356c686432af919f6117f',10,5,'Tanaman hias indoor saran penanaman di tempat teduh atau di bawah naungan tinggi 22cm-30cm tergantung stok yang tersedia saran pot ukuran 18cm up dikirim tanpa pot',20,NULL),(4,'Melati ','https://cf.shopee.co.id/file/621c5078c78b9d710186eba1065e2a5e',12,3,'Tanaman melati wangi sangat bagus untuk menghias pekarangan rumah dengan wangi yang khas tinggi 20cm-25cm tergantung stok tersedia dikirim tanpa pot',4,NULL),(5,'Kucai Mini','https://cf.shopee.co.id/file/f856762a1299f1f225b1a72ad0fbbdb6',3,5,'Tanaman pendek yg di fungsikan untuk menghias lahan taman tempat panas ataupun yg tidak terkena matahari juga sebagai pengganti rumput',100,NULL),(6,'Sirih Gading','https://cf.shopee.co.id/file/dc7a5ce44afe04942c6552d266cd6062',15,2,'Tanaman merambat yang berfungsi membersihkan udara Media bisa hanya menggunakan air tinggi 20cm-25cm tergantung stok tersedia dikirim tanpa pot',11,NULL),(7,'Spider','https://cf.shopee.co.id/file/e83bc0a18a42ae61d3ff29e52f8d1b5a',12,5,'Cocok untuk menghias halaman rumah dengan warna yg cerah bisa juga di tempatkan di dalam ruangan dengan penyiraman 3 hari sekali tinggi 10cm-15cm tergantung stok tersedia dikirim tanpa pot',44,NULL),(8,'Blue Eyes','https://cf.shopee.co.id/file/c9beea3a0877056080df466932605bcc',8,2,'Tanaman hias dengan bunga warna biru penanaman di tempat panas terbuka penyiraman 1-2kali sehari pemupukan setiap 1 bulan sekali tinggi 12cm-17cm tergantung stok yang tersedia dikirim tanpa pot',12,NULL),(9,'Rosemary','https://cf.shopee.co.id/file/bc78ef1f5433b8fbfe1a3efd8a285081',10,1,'Rosemary adalah tanaman yang berasal dari Mediterania, merupakan tanaman herbal dengan aroma yang khas. Berbentuk seperti duri dan bunga berwarna putih. tinggi 15cm-20cm tergantung stok tersedia dikirim tanpa pot',12,NULL),(10,'Philodendron Selloum','https://cf.shopee.co.id/file/381b83e1012cdaea5c2d9bbcc5318ea2&quot',15,5,'Tanaman bisa hidup di daratan rendah maupun tinggi. Tinggi tanaman sekitar 15-20 cm. Dikirim minimal 4 daun. Dikirim tanpa pot dan media dikurangi.',25,NULL),(11,'Calathea Makoyana Peacock','https://cf.shopee.co.id/file/473b03d9db4e0e308e67d5e710a6a070&quot',40,5,'Tanaman hias yang cocok untuk koleksi Anda. Tinggi tanaman sekitar 15-20 cm. Dikirim minimal 2 daun. Dikirim tanpa pot dan media dikurangi.',25,NULL),(12,'Diffen Sparkle','https://cf.shopee.co.id/file/ce0b041cd8985ad4b28f040a4a419750&quot',30,5,'Tanaman dapat diletakkan di bawah sinar matahari. Tinggi tanaman sekitar 10-15 cm. Dikirim minimal 3 daun. Dikirim tanpa pot dan media dikurangi.',25,NULL),(13,'Paperomia Obtusifolia','https://cf.shopee.co.id/file/1bf30f6b27abe6fe737a45df54e4c674&quot',5,4,'Tanaman dapat diletakkan di bawah sinar matahari. Tinggi tanaman sekitar 15 cm. Dikirim minimal 1 daun. Dikirim tanpa pot dan media dikurangi.',25,NULL),(14,'Peace Lily','https://cf.shopee.co.id/file/c587facddd9a287d55956e7a9926885a&quot',10,4,'Tanaman cocok diletakkan di tempat yang teduh. Tinggi tanaman sekitar 15 cm. Dikirim tanpa pot dan media dikurangi.',20,NULL),(15,'Anggrek Cymbidium ensifolium','https://cf.shopee.co.id/file/ca2993b6c1eaaa814d80ccf644506594&quot',20,5,'Tanaman tersedia dengan keadaan segar dan dewasa. Tinggi tanaman sekitar 30 cm. Dikirim tanpa pot dan media dikurangi.',25,NULL),(16,'Tradencentia Nanouk','https://cf.shopee.co.id/file/0c90faf643016e376e17856965e47963&quot',35,5,'Tanaman sudah siap tanam. Tinggi tanaman 15-20 cm. Media tanam yaitu sekam mentah/sekam bakar. Dikirim tanpa pot dan media dikurangi.',20,NULL),(17,'Bromolia Tricolour Pink','https://cf.shopee.co.id/file/e8ee9b0425b620cc84d48abe5e8f5396&quot',15,5,'Tanaman dapat diletakkan di bawah sinar matahari. Tinggi tanaman sekitar 25-30 cm. Media tanam menggunakan sekam mentah. Dikirim tanpa pot dan media dikurangi.',20,NULL),(18,'Kastuba Merah','https://cf.shopee.co.id/file/826378582e00256f1af245b62eb21b87&quot',20,5,'Tanaman dapat diletakkan di bawah sinar matahari. Kondisi tanaman batang sudah berakar dan berdaun. Tinggi tanaman sekitar 20-40 cm. Dikirim tanpa pot dan media dikurangi.',20,NULL),(19,'Brahmi','https://cdn.shopify.com/s/files/1/0416/7581/7109/products/Brahmi_2.jpg?v=1621233713',10000,4,'Brahmi adalah ramuan India yang mengandung khasiat obat. Dari penggunaan kuliner hingga penyembuhan luka ringan, tanaman bijak kecil ini membuat Anda tetap bugar. Jika kesehatan adalah kekayaan, tanaman ini akan membuat Anda kaya!',10,NULL),(20,'Tulsi - Holy Basil','https://cdn.shopify.com/s/files/1/0416/7581/7109/products/Tulsi.jpg?v=1599295289',100,4,'Tulsi, tanaman berbunga milik keluarga mint; Lamiaceae adalah tumbuhan paling suci dalam agama Hindu. Ini sering ditanam karena daunnya yang berbau harum dan nilai obatnya.',10,NULL),(21,'Areca Palm','https://cdn.shopify.com/s/files/1/0416/7581/7109/products/Arecapalm.jpg?v=1611064841',13,4,'Tanaman dalam ruangan yang indah ini banyak ditanam karena dedaunannya yang menarik. Dia membuat pikiran Anda tenang dan rileks. Anda juga bisa menumbuhkannya di luar ruangan!',25,NULL),(22,'Buah Naga','https://cdn.shopify.com/s/files/1/0416/7581/7109/products/DragonFruit.png?v=1604307193',12,5,'Buah naga adalah tanaman gurun eksotis yang memberikan buah-buahan unik dan lezat. Anda dapat menggunakannya untuk membuat banyak persiapan makanan dan menambahkan sentuhan unik pada diet harian Anda!',5,NULL),(23,'Aquascape Amazon Sword','https://cf.shopee.co.id/file/5d367003498a8b44445d68745b8eda09',23,5,'Tanaman tahunan atau abadi, tumbuh emersed, berdaun mengambang, atau terendam musiman, daun gundul hingga puber seperti bintang. Akar tidak terpisah. Daun sesil atau petiolate, tangkai daun berbentuk segitiga.',11,NULL),(24,'Lee Kwan Yen','https://cf.shopee.co.id/file/278fd54b29a2ce97e94ff56714d386e5',23,4,'Cocok untuk dataran rendah maupun tinggi. Bisa ditanam di pot atau area taman. Kebutuhan sinar matahari : sepanjang hari. Penyiraman 1 hari sekali. Pemupukan 1 bulan sekali dg NPK daun. Media tanam tanah biasa, tanah humus, tanah berpasir',200,NULL),(25,'Miana Merah','https://cf.shopee.co.id/file/b859d94d16fad931aa415116fbb2decb',4,4,'Tanaman outdoor direkomendasikan di tanam di tempat  yang kena sinar matahari penyiraman sehari sekali pemupukan 3 minggu sekali tinggi 18cm - 23cm tergantung stok yg tersedia dikirim tanpa pot',99,NULL),(26,'Lavender','https://cf.shopee.co.id/file/542e2b9de378b872e004474de58defdd',100,5,'Tanaman lavender dengan warna ungu dan pink bisa menjadi pilihan koleksi tanaman hias anda. tinggi 20cm-25cm tergantung stok tersedia di kirim tanpa pot',111,NULL),(27,'Bonsai Adenium','https://cf.shopee.co.id/file/ca39c5d73cec93e218717e4f600e9db5',150,4,'Ini adalah semak sukulen yang selalu hijau atau kekeringan (yang juga bisa kehilangan daunnya selama musim dingin, atau menurut sub spesies atau kultivar).',23,NULL),(28,'Bonsati Serut','https://cf.shopee.co.id/file/5164c741e54a8ff2eeb6b5a293edb24d',100,5,'Bonsai serut hasil dongkelan langsung di Hutan dan berkarakter. Masih ada akarnya karena kami dongkel, ukuran dahan bervariasi, dan tinggi dahan 10 - 30 CM. ',3,NULL),(29,'Meranti Bali','https://cf.shopee.co.id/file/7a014cfaf496605f8ec2d0dd676c6354',85,3,'Tanaman Calathea Triostar atau biasa disebut Meranti Bali ini tanaman perdu yang tumbuh di tempat teduh memiliki warna daun merah corak putih berkembang biak melalui tunas sehingga tidak akan habis selalu bertambah tumbuhannya.',300,NULL),(30,'Anggrek Hantu','https://cf.shopee.co.id/file/cb39419e334f3c25d176e2cefe0fd7b0',600,5,'Tanaman hias langka yang tidak memerlukan banyak air serta dapat hidup tanpa sinar matahari Sangat di rekomendasikan untuk membersihkan udara tinggi 30cm-40cm tergantung stok tersedia isi minimal 3 daun dikirim tanpa pot',2,NULL),(31,'Puring','https://cf.shopee.co.id/file/e9d08bef15b2907d3d283a9dac9326d5',250,4,'Tanaman yg tidak memerlukan banyak air dan dapat hidup tanpa sinar matahari Sangat di rekomendasikan untuk membersihkan udara tinggi 30cm-40cm tergantung stok tersedia isi minimal 3 daun dikirim tanpa pot',50,NULL),(32,'Paku Sarang Burung','https://cf.shopee.co.id/file/5ad515a9ad7532ceeeb1934ab99e85d4',100,4,'Tanaman yg tidak memerlukan banyak air dan dapat hidup tanpa sinar matahari Sangat di rekomendasikan untuk membersihkan udara tinggi 30cm-40cm tergantung stok tersedia isi minimal 3 daun dikirim tanpa pot',70,NULL),(33,'Euphorbia','https://cf.shopee.co.id/file/d7f8142b090564336a147266ad25004a',500,5,'Tanaman yg tidak memerlukan banyak air dan dapat hidup tanpa sinar matahari Sangat di rekomendasikan untuk membersihkan udara tinggi 30cm-40cm tergantung stok tersedia isi minimal 3 daun dikirim tanpa pot',10,NULL),(34,'Kerang Lavender','https://cf.shopee.co.id/file/b71346f129077cb925ee72d6a1ab0e69',200,5,'Tanaman yg tidak memerlukan banyak air dan dapat hidup tanpa sinar matahari Sangat di rekomendasikan untuk membersihkan udara tinggi 30cm-40cm tergantung stok tersedia isi minimal 3 daun dikirim tanpa pot',40,NULL),(35,'Corcksrew Albuca','https://cf.shopee.co.id/file/4623c2915d78a2e766abb4f5924cff19',150,4,'Tanaman yg tidak memerlukan banyak air dan dapat hidup tanpa sinar matahari Sangat di rekomendasikan untuk membersihkan udara tinggi 30cm-40cm tergantung stok tersedia isi minimal 3 daun dikirim tanpa pot',40,NULL),(36,'Anthurium','https://cf.shopee.co.id/file/c175180c1f81ead1422c4afd250a3846',200,4,'Tanaman yg tidak memerlukan banyak air dan dapat hidup tanpa sinar matahari Sangat di rekomendasikan untuk membersihkan udara tinggi 30cm-40cm tergantung stok tersedia isi minimal 3 daun dikirim tanpa pot',20,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `password` char(60) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `handphone` char(20) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@plantzo.id','Admin','Plantzo','$2b$12$dSHeT16t6E6hPcKwFDSkTerMMmr8eIUK6yJtmq3Xt4.PeQU/R4P2.',NULL,NULL),(2,'a@gmail.com','a','a','$2b$12$E8HWcr9SpUOU3rbgtO8aT.rLZ3MWd9zFA92iTLqDg5T308d1NBgHy',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-14 22:47:38
