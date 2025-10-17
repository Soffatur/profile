import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Portfolio() {
    const status = 'under'
    const datas = [
        {
            client_project: 'BISMA ERP Omni-Channel (Omnichannel Marketplace Integration)',
            client_name: 'Internal Product',
            desc: 'Sistem ERP yang terintegrasi dengan berbagai marketplace populer (Tokopedia, Shopee, Lazada, TikTok Shop) sehingga merchant dapat mengelola semua toko dalam satu platform, mirip dengan Jubelio. Aplikasi ini menyatukan alur pemesanan dari berbagai marketplace ke dalam satu sistem yang konsisten.',
            role: 'Tech Lead (Backend & System Integration)',
            company: 'PT Majapahit Teknologi Nusantara',
            contribution: [
                'Menganalisis dan merancang unified order flow dari berbagai marketplace, mencakup seluruh siklus: pemesanan → penerimaan → update status → packing → pengiriman → selesai/reject/return.',
                'Mengembangkan REST API untuk order management yang mampu menangani kompleksitas perbedaan flow tiap e-commerce.',
                'Membangun ERP Order CMS untuk memudahkan admin memantau semua pesanan lintas marketplace.',
                'Mengimplementasikan Node.js + Redis sebagai listener webhook dari masing-masing e-commerce, kemudian meneruskan data ke Laravel BISMA ERP menggunakan queue agar order lebih aman dan reliable.',
                'Berkolaborasi dengan developer lain yang fokus pada modul product (import/export API), sementara saya fokus pada core order management system dan API Product',
                'Berkoordinasi langsung dengan manajemen Antarestar karena proyek ini merupakan kebutuhan client sekaligus produk internal PT Majapahit.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL', 'Node.js', 'MongoDB', 'Redis'],
            result: 'BISMA ERP mampu mengintegrasikan banyak toko lintas marketplace dalam satu dashboard, mempermudah monitoring order, mempercepat proses operasional, dan meningkatkan efisiensi merchant dalam mengelola bisnis online mereka.'
        },
        {
            client_project: 'LPH Certification System (Halal Certification App)',
            client_name: 'Perorangan',
            desc: 'Aplikasi berbasis web untuk simulasi proses sertifikasi halal, dirancang agar lebih sederhana, ringan, dan user-friendly dibandingkan sistem resmi. Aplikasi ini dikembangkan untuk mendukung perorangan yang ingin membuat sistem internal mirip LPH (Lembaga Pemeriksa Halal).',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            contribution: [
                'Mendesain database dinamis agar tampilan halaman bisa menyesuaikan dengan role pengguna.',
                'Mengembangkan sistem role-based feature mapping, di mana Satu role dapat memiliki 3-4 fitur unik, Beberapa fitur bisa overlap dengan role lain & Semua dikelola secara dinamis melalui database, sehingga tidak perlu membuat banyak halaman terpisah per masing masing role',
                'Mengimplementasikan antarmuka modular per fitur, sehingga maintenance lebih efisien dan scalable.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'Aplikasi berhasil mendemonstrasikan alur sertifikasi halal secara sederhana, dengan role management dinamis yang memudahkan pengembangan dan mempercepat proses implementasi fitur.'
        },
        {
            client_project: 'Majapahit Revamp',
            client_name: 'Internal',
            desc: 'Revamp aplikasi company profile internal yang dilengkapi dengan role & permission system tingkat lanjut. Tidak hanya berbasis role standar, sistem ini memungkinkan konfigurasi menu dan action per user, sehingga setiap pengguna dapat memiliki hak akses berbeda meskipun berada pada level role yang sama',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            contribution: [
                'Menangani bug fixing secara menyeluruh pada modul role & permission yang kompleks.',
                'Memastikan sistem permission berbasis menu dan action berjalan dengan benar',
                'Melakukan optimasi kode agar sistem authorization lebih stabil dan mudah di-maintain.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'Role & permission system menjadi lebih stabil, aman, dan fleksibel, mendukung kebutuhan perusahaan dalam mengatur akses tiap user sesuai kebutuhan operasional.'
        },
        {
            client_project: 'HR System',
            client_name: 'Internal',
            desc: 'Aplikasi berbasis web untuk mendukung proses manajemen karyawan, mulai dari pengajuan cuti, izin, hingga pengelolaan data karyawan. Sistem juga dilengkapi dengan fitur blast email untuk komunikasi internal dan distribusi gaji.',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            contribution: [
                'Mengembangkan hampir seluruh fitur sistem secara mandiri, meliputi cuti, izin, manajemen karyawan, dan blast email.',
                'Mendesain database serta antarmuka agar mudah digunakan oleh HR dan karyawan.',
                'Mengembangkan fitur blast email yang dapat digunakan untuk Broadcast informasi umum ke seluruh karyawan, dan Distribusi slip gaji otomatis ke masing-masing email karyawan menggunakan upload file Excel sesuai template.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'HR System membantu perusahaan dalam mempercepat proses administrasi SDM, mengurangi proses manual, serta meningkatkan efektivitas komunikasi dan distribusi slip gaji secara aman dan efisien.'
        },
        {
            client_project: 'SIMONAS (Sistem Informasi Monitoring Alumni Sertifikasi)',
            client_name: 'Kementerian Kominfo',
            desc: 'Platform job portal yang menghubungkan alumni program pelatihan bersertifikat dengan perusahaan rekanan. Pengguna yang sudah memiliki sertifikat dapat login melalui SSO (Single Sign-On), mendaftar pekerjaan, dan dipantau hingga tahap penerimaan kerja. Saya terlibat dalam pengembangan fitur baru dan perbaikan bug pada sistem yang sudah berjalan.',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            contribution: [
                'Mengerjakan berbagai tiket bug fixing dan penambahan fitur sesuai kebutuhan tim pengembangan.',
                'Mengimplementasikan fitur notifikasi real-time yang mencakup seluruh proses: mulai dari user melamar pekerjaan, admin menerima notifikasi, hingga status user diterima kerja.',
                'Membangun server Socket.IO dengan Node.js sebagai pusat real-time notification.',
                'Mengintegrasikan Laravel sebagai client socket, sehingga sistem notifikasi berjalan mulus di aplikasi utama.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'Node.js', 'Socket.io', 'MySQL'],
            result: 'Aplikasi SIMONAS menjadi lebih interaktif dengan notifikasi real-time, meningkatkan pengalaman pengguna, dan mempercepat komunikasi antara pelamar, admin, dan perusahaan.'
        },
        {
            client_project: 'SP DNIA Mobile',
            client_name: 'PT Denso Indonesia',
            desc: 'Aplikasi mobile internal untuk karyawan PT Denso Indonesia yang berfungsi sebagai pusat informasi perusahaan, mencakup pengumuman umum, jadwal libur, hingga event internal. Saya berperan pada sisi backend REST API dan CMS.',
            role: 'Backend Developer (REST API & CMS)',
            company: 'PT Majapahit Teknologi Nusantara',
            contribution: [
                'Mengembangkan REST API backend untuk mendukung aplikasi mobile.',
                'Membangun CMS sebagai panel admin bagi pihak perusahaan untuk mengelola konten (informasi umum, jadwal libur, event, dan pengumuman lainnya).',
                'Menjamin integrasi antara aplikasi mobile dengan backend agar informasi dapat diperbarui secara real-time.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery'],
            result: 'Aplikasi SP DNIA Mobile mempermudah karyawan dalam mendapatkan informasi resmi perusahaan secara cepat dan terpusat, sekaligus memudahkan admin perusahaan dalam mengelola konten melalui CMS',
        },
        {
            client_project: 'Honda Power ID',
            client_name: 'PT Honda Power Products Indonesia',
            desc: 'Aplikasi mobile dengan barcode system untuk dealer dan toko resmi Honda Power, yang memudahkan pelanggan melihat ketersediaan sparepart, stok terdekat, serta mengikuti event promosi. Project ini dikerjakan bersama tim (2 developer mobile & 3 backend developer), sementara saya fokus pada REST API backend dan CMS',
            role: 'Backend Developer (REST API & CMS)',
            company: 'PT Majapahit Teknologi Nusantara',
            contribution_fase_1: [
                'Mengembangkan REST API backend untuk aplikasi dealer & toko.',
                'Membangun CMS sebagai panel admin untuk mengelola sparepart, stok, dealer, serta event.',
                'Mengimplementasikan fitur barcode event, di mana pengguna bisa mendapatkan barcode saat mengikuti event, lalu barcode tersebut dikonversi menjadi poin reward.',
                'Merancang sistem poin reward yang dapat ditukar dengan sparepart atau voucher tertentu, dengan batas waktu penggunaan.'
            ],
            contribution_fase_2: [
                'Menjadi core developer untuk pengembangan payout/disbursement poin ke e-wallet (GoPay/Ovo) menggunakan Midtrans API.',
                'Mendukung fixing kecil mobile (Flutter) pada fitur disbursement'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            additional_tech: ['Firebase FCM - digunakan untuk notifikasi push (Setup dilakukan oleh tim lain, saya hanya integrasi pemakaian)', 'Flutter - digunakan untuk aplikasi mobile (fase 2, kontribusi saya hanya sedikit di sisi API & Logic'],
            result: 'Aplikasi Honda Power ID digunakan oleh dealer, sub-dealer, dan pelanggan untuk mempermudah transaksi serta meningkatkan engagement melalui event & sistem poin. Integrasi dengan Midtrans memberikan fleksibilitas bagi pengguna untuk menukarkan poin menjadi e-wallet atau voucher.'
        },
        {
            client_project: 'Virtual Tour Platform',
            client_name: 'PT Akebono Brake Astra',
            desc: 'Website interaktif berbasis kamera 360° dan VR untuk kebutuhan company profile dan presentasi internal. Virtual tour dikembangkan oleh freelancer, sedangkan tim internal membangun CMS (Content Management System) untuk mengatur akses dan keamanan konten.',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            contribution: [
                'Menjadi developer inti (core) dalam pengembangan CMS dengan role Admin dan User, yang digunakan untuk mengatur akses dan periode aktif virtual tour.',
                'Mengintegrasikan virtual tour dari pihak freelancer dengan CMS yang saya kembangkan.',
                'Mengimplementasikan sistem security token secara penuh, sehingga virtual tour hanya bisa diakses melalui CMS dengan persetujuan Admin.',
                'Mengembangkan fitur time restriction, agar virtual tour hanya dapat diakses dalam jangka waktu tertentu.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'Virtual tour menjadi aman, terkontrol, dan sesuai kebutuhan perusahaan, dengan fleksibilitas pengaturan akses yang sepenuhnya berada di tangan Admin.'
        },
        {
            client_project: 'Supplier Portal',
            client_name: 'PT Akebono Brake Astra',
            desc: 'Aplikasi portal internal untuk manajemen supplier yang sebelumnya dibangun dengan PHP Native. Karena performa yang berat dan sulit dikembangkan, sistem dimigrasikan ke Laravel dengan optimasi query agar lebih ringan, stabil, dan scalable.',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            contribution: [
                'Modul Intransit: Mengembangkan sistem tracking keluar-masuk barang/material, mulai dari pencatatan barang masuk gudang, barang keluar untuk produksi, hingga status pergerakan material secara real-time.',
                'Modul Meal: Membuat fitur pengelolaan konsumsi/meal allowance untuk mendukung aktivitas supplier dan karyawan terkait.',
                'Modul QPR (Quality Problem Report): Membantu tim dalam membangun fitur pelaporan dan monitoring masalah kualitas material dari supplier.',
                'Migrasi Sistem: Melakukan migrasi dari PHP Native ke Laravel serta optimasi query database untuk meningkatkan kecepatan response aplikasi.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'Aplikasi menjadi lebih cepat, stabil, dan mendukung proses supply chain serta kontrol kualitas PT Akebono Brake Astra.'
        },
    ]

    if (status == 'under') {
        return (
            <>
                <div className="min-h-screen justify-center items-center flex flex-col">
                    <Navbar />
                    <img src="/loading.gif" alt="" width={200} />
                    <p className="text-xl text-reguler">Under Repair</p>
                    <Footer />
                </div>
            </>
        );
    }
    return (
        <>
            <Navbar />
            <div className="container mx-auto md:px-20 mb-15 mt-8">
                <div className="flex flex-wrap justify-center -mx-2">
                    {datas.map((item, index) => (
                        <div className="basis-4/12 px-2 mb-6 hover:scale-105 duration-300" key={index}>
                            <div className="bg-base-200 shadow-xl rounded-lg border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                                {/* <img src={`https://picsum.photos/id/${(index + 30)}/200/300`} className="h-48 w-96 object-cover" /> */}
                                <div className="p-3 ps-3 pe-3">
                                    <h2 className="text-reguler font-bold">{item.client_project} - {item.client_name}</h2>
                                    <span className="bg-slate-900 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl">{item.company}</span>
                                    <p className="text-xs text-blue-700 mt-2">Lihat Selengkapnya</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}