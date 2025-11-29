import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Portfolio() {
    const status = 'pass'
    const datas = [
        {
            client_project: 'BISMA ERP Omni-Channel (Omnichannel Marketplace Integration)',
            client_name: 'Internal Product',
            desc: 'Sistem ERP yang terintegrasi dengan berbagai marketplace populer (Tokopedia, Shopee, Lazada, TikTok Shop) sehingga merchant dapat mengelola semua toko dalam satu platform, mirip dengan Jubelio. Aplikasi ini menyatukan alur pemesanan dari berbagai marketplace ke dalam satu sistem yang konsisten.',
            role: 'Tech Lead (Backend & System Integration)',
            company: 'PT Majapahit Teknologi Nusantara',
            status: "done",
            contribution: [
                'Menganalisis dan merancang unified order flow dari berbagai marketplace, mencakup seluruh siklus: pemesanan → penerimaan → update status → packing → pengiriman → selesai/reject/return.',
                'Mengembangkan REST API untuk order management yang mampu menangani kompleksitas perbedaan flow tiap e-commerce.',
                'Membangun ERP Order CMS untuk memudahkan admin memantau semua pesanan lintas marketplace.',
                'Mengimplementasikan Node.js + Redis sebagai listener webhook dari masing-masing e-commerce, kemudian meneruskan data ke Laravel BISMA ERP menggunakan queue agar order lebih aman dan reliable.',
                'Berkolaborasi dengan developer lain yang fokus pada modul product (import/export API), sementara saya fokus pada core order management system dan API Product',
                'Berkoordinasi langsung dengan manajemen Antarestar karena proyek ini merupakan kebutuhan client sekaligus produk internal PT Majapahit.'
            ],
            contribution_en: [
                'Analyzing and designing a unified order flow from various marketplaces, covering the entire cycle: order → receipt → status update → packing → shipping → completion/rejection/return.',
                'Developing a REST API for order management that can handle the complexities of different flows for each e-commerce platform.',
                'Building an ERP Order CMS to make it easier for admins to monitor all orders across marketplaces.',
                'Implementing Node.js + Redis as webhook listeners for each e-commerce platform, then forwarding data to Laravel BISMA ERP using queues to ensure order security and reliability.',
                'Collaborating with other developers who focused on the product module (import/export API), while I focused on the core order management system and Product API.',
                'Coordinating directly with Antarestar management because this project was both a client requirement and an internal product of PT Majapahit.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL', 'Node.js', 'MongoDB', 'Redis'],
            result: 'BISMA ERP mampu mengintegrasikan banyak toko lintas marketplace dalam satu dashboard, mempermudah monitoring order, mempercepat proses operasional, dan meningkatkan efisiensi merchant dalam mengelola bisnis online mereka.',
            result_en: 'BISMA ERP is able to integrate multiple stores across marketplaces in one dashboard, simplifying order monitoring, speeding up operational processes, and increasing merchant efficiency in managing their online business.'
        },
        {
            client_project: 'LPH Certification System (Halal Certification App)',
            client_name: 'Perorangan',
            desc: 'Aplikasi berbasis web untuk simulasi proses sertifikasi halal, dirancang agar lebih sederhana, ringan, dan user-friendly dibandingkan sistem resmi. Aplikasi ini dikembangkan untuk mendukung perorangan yang ingin membuat sistem internal mirip LPH (Lembaga Pemeriksa Halal).',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            status: "done",
            contribution: [
                'Mendesain database dinamis agar tampilan halaman bisa menyesuaikan dengan role pengguna.',
                'Mengembangkan sistem role-based feature mapping, di mana Satu role dapat memiliki 3-4 fitur unik, Beberapa fitur bisa overlap dengan role lain & Semua dikelola secara dinamis melalui database, sehingga tidak perlu membuat banyak halaman terpisah per masing masing role',
                'Mengimplementasikan antarmuka modular per fitur, sehingga maintenance lebih efisien dan scalable.'
            ],
            contribution_en: [
                "Designing a dynamic database so that page displays can adapt to user roles.",
                "Developing a role-based feature mapping system, where one role can have 3-4 unique features. Some features can overlap with other roles. All are managed dynamically through the database, eliminating the need to create multiple separate pages for each role.",
                "Implementing a modular interface per feature, making maintenance more efficient and scalable."
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'Aplikasi berhasil mendemonstrasikan alur sertifikasi halal secara sederhana, dengan role management dinamis yang memudahkan pengembangan dan mempercepat proses implementasi fitur.',
            result_en: 'The application successfully demonstrates a simple halal certification flow, with dynamic role management that simplifies development and speeds up the feature implementation process.'
        },
        {
            client_project: 'Majapahit Revamp',
            client_name: 'Internal',
            desc: 'Revamp aplikasi company profile internal yang dilengkapi dengan role & permission system tingkat lanjut. Tidak hanya berbasis role standar, sistem ini memungkinkan konfigurasi menu dan action per user, sehingga setiap pengguna dapat memiliki hak akses berbeda meskipun berada pada level role yang sama',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            status: "done",
            contribution: [
                'Menangani bug fixing secara menyeluruh pada modul role & permission yang kompleks.',
                'Memastikan sistem permission berbasis menu dan action berjalan dengan benar',
                'Melakukan optimasi kode agar sistem authorization lebih stabil dan mudah di-maintain.'
            ],
            contribution_en: [
                'Handled comprehensive bug fixing for the complex role and permission module.',
                'Ensured the menu-based and action-based permission system was working correctly.',
                'Optimized code to make the authorization system more stable and easier to maintain.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'Role & permission system menjadi lebih stabil, aman, dan fleksibel, mendukung kebutuhan perusahaan dalam mengatur akses tiap user sesuai kebutuhan operasional.',
            result_en: "The role & permission system is more stable, secure, and flexible, supporting the company's needs in managing each user's access according to operational needs."
        },
        {
            client_project: 'HR System',
            client_name: 'Internal',
            desc: 'Aplikasi berbasis web untuk mendukung proses manajemen karyawan, mulai dari pengajuan cuti, izin, hingga pengelolaan data karyawan. Sistem juga dilengkapi dengan fitur blast email untuk komunikasi internal dan distribusi gaji.',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            status: "done",
            contribution: [
                'Mengembangkan hampir seluruh fitur sistem secara mandiri, meliputi cuti, izin, manajemen karyawan, dan blast email.',
                'Mendesain database serta antarmuka agar mudah digunakan oleh HR dan karyawan.',
                'Mengembangkan fitur blast email yang dapat digunakan untuk Broadcast informasi umum ke seluruh karyawan, dan Distribusi slip gaji otomatis ke masing-masing email karyawan menggunakan upload file Excel sesuai template.'
            ],
            contribution_en: [
                "Independently developed almost all system features, including leave, permits, employee management, and email blasts.",
                "Designed a database and interface for ease of use by HR and employees.",
                "Developed an email blast feature that can be used to broadcast general information to all employees and automatically distribute payslips to each employee's email address using a templated Excel file upload.",
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'HR System membantu perusahaan dalam mempercepat proses administrasi SDM, mengurangi proses manual, serta meningkatkan efektivitas komunikasi dan distribusi slip gaji secara aman dan efisien.',
            result_en: 'HR System helps companies speed up HR administration processes, reduce manual processes, and increase the effectiveness of communication and distribution of pay slips safely and efficiently.',
        },
        {
            client_project: 'SIMONAS (Sistem Informasi Monitoring Alumni Sertifikasi)',
            client_name: 'Kementerian Kominfo',
            desc: 'Platform job portal yang menghubungkan alumni program pelatihan bersertifikat dengan perusahaan rekanan. Pengguna yang sudah memiliki sertifikat dapat login melalui SSO (Single Sign-On), mendaftar pekerjaan, dan dipantau hingga tahap penerimaan kerja. Saya terlibat dalam pengembangan fitur baru dan perbaikan bug pada sistem yang sudah berjalan.',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            status: "done",
            contribution: [
                'Mengerjakan berbagai tiket bug fixing dan penambahan fitur sesuai kebutuhan tim pengembangan.',
                'Mengimplementasikan fitur notifikasi real-time yang mencakup seluruh proses: mulai dari user melamar pekerjaan, admin menerima notifikasi, hingga status user diterima kerja.',
                'Membangun server Socket.IO dengan Node.js sebagai pusat real-time notification.',
                'Mengintegrasikan Laravel sebagai client socket, sehingga sistem notifikasi berjalan mulus di aplikasi utama.'
            ],
            contribution_en: [
                'Worked on various bug fixing tickets and added features as needed by the development team.',
                'Implemented a real-time notification feature that covers the entire process: from user job application, admin notification, to user acceptance.',
                'Developed a Socket.IO server with Node.js as a real-time notification hub.',
                'Integrated Laravel as a socket client, so the notification system runs smoothly in the main application.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'Node.js', 'Socket.io', 'MySQL'],
            result: 'Aplikasi SIMONAS menjadi lebih interaktif dengan notifikasi real-time, meningkatkan pengalaman pengguna, dan mempercepat komunikasi antara pelamar, admin, dan perusahaan.',
            result_en: 'The SIMONAS application becomes more interactive with real-time notifications, improving user experience, and speeding up communication between applicants, admins, and companies.'
        },
        {
            client_project: 'SP DNIA Mobile',
            client_name: 'PT Denso Indonesia',
            desc: 'Aplikasi mobile internal untuk karyawan PT Denso Indonesia yang berfungsi sebagai pusat informasi perusahaan, mencakup pengumuman umum, jadwal libur, hingga event internal. Saya berperan pada sisi backend REST API dan CMS.',
            role: 'Backend Developer (REST API & CMS)',
            company: 'PT Majapahit Teknologi Nusantara',
            status: "done",
            contribution: [
                'Mengembangkan REST API backend untuk mendukung aplikasi mobile.',
                'Membangun CMS sebagai panel admin bagi pihak perusahaan untuk mengelola konten (informasi umum, jadwal libur, event, dan pengumuman lainnya).',
                'Menjamin integrasi antara aplikasi mobile dengan backend agar informasi dapat diperbarui secara real-time.'
            ],
            contribution_en: [
                'Developing a backend REST API to support the mobile application.',
                'Building a CMS as an admin panel for the company to manage content (general information, holiday schedules, events, and other announcements).',
                'Ensuring integration between the mobile application and the backend so that information can be updated in real time.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery'],
            result: 'Aplikasi SP DNIA Mobile mempermudah karyawan dalam mendapatkan informasi resmi perusahaan secara cepat dan terpusat, sekaligus memudahkan admin perusahaan dalam mengelola konten melalui CMS',
            result_en: 'The SP DNIA Mobile application makes it easier for employees to obtain official company information quickly and centrally, while also making it easier for company admins to manage content via CMS',
        },
        {
            client_project: 'Honda Power ID',
            client_name: 'PT Honda Power Products Indonesia',
            desc: 'Aplikasi mobile dengan barcode system untuk dealer dan toko resmi Honda Power, yang memudahkan pelanggan melihat ketersediaan sparepart, stok terdekat, serta mengikuti event promosi. Project ini dikerjakan bersama tim (2 developer mobile & 3 backend developer), sementara saya fokus pada REST API backend dan CMS',
            role: 'Backend Developer (REST API & CMS)',
            company: 'PT Majapahit Teknologi Nusantara',
            status: "done",
            contribution_fase_1: [
                'Mengembangkan REST API backend untuk aplikasi dealer & toko.',
                'Membangun CMS sebagai panel admin untuk mengelola sparepart, stok, dealer, serta event.',
                'Mengimplementasikan fitur barcode event, di mana pengguna bisa mendapatkan barcode saat mengikuti event, lalu barcode tersebut dikonversi menjadi poin reward.',
                'Merancang sistem poin reward yang dapat ditukar dengan sparepart atau voucher tertentu, dengan batas waktu penggunaan.'
            ],
            contribution_fase_1_end: [
                'Developing a REST API backend for a dealer & store application.',
                'Building a CMS as an admin panel to manage spare parts, stock, dealers, and events.',
                'Implementing an event barcode feature, where users can earn barcodes when participating in events, which can then be converted into reward points.',
                'Designing a reward point system that can be exchanged for specific spare parts or vouchers, with a time limit.'
            ],
            contribution_fase_2: [
                'Menjadi core developer untuk pengembangan payout/disbursement poin ke e-wallet (GoPay/Ovo) menggunakan Midtrans API.',
                'Mendukung fixing kecil mobile (Flutter) pada fitur disbursement'
            ],
            contribution_fase_2_end: [
                "Become a core developer for developing payout/disbursement points to e-wallets (GoPay/Ovo) using the Midtrans API.",
                "Support minor mobile fixes (Flutter) for the disbursement feature."
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            additional_tech: ['Firebase FCM - digunakan untuk notifikasi push (Setup dilakukan oleh tim lain, saya hanya integrasi pemakaian)', 'Flutter - digunakan untuk aplikasi mobile (fase 2, kontribusi saya hanya sedikit di sisi API & Logic'],
            result: 'Aplikasi Honda Power ID digunakan oleh dealer, sub-dealer, dan pelanggan untuk mempermudah transaksi serta meningkatkan engagement melalui event & sistem poin. Integrasi dengan Midtrans memberikan fleksibilitas bagi pengguna untuk menukarkan poin menjadi e-wallet atau voucher.',
            result_en: "The Honda Power ID app is used by dealers, sub-dealers, and customers to simplify transactions and increase engagement through events and a points system. Integration with Midtrans gives users the flexibility to exchange points for e-wallets or vouchers."
        },
        {
            client_project: 'Virtual Tour Platform',
            client_name: 'PT Akebono Brake Astra',
            desc: 'Website interaktif berbasis kamera 360° dan VR untuk kebutuhan company profile dan presentasi internal. Virtual tour dikembangkan oleh freelancer, sedangkan tim internal membangun CMS (Content Management System) untuk mengatur akses dan keamanan konten.',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            status: "done",
            contribution: [
                'Menjadi developer inti (core) dalam pengembangan CMS dengan role Admin dan User, yang digunakan untuk mengatur akses dan periode aktif virtual tour.',
                'Mengintegrasikan virtual tour dari pihak freelancer dengan CMS yang saya kembangkan.',
                'Mengimplementasikan sistem security token secara penuh, sehingga virtual tour hanya bisa diakses melalui CMS dengan persetujuan Admin.',
                'Mengembangkan fitur time restriction, agar virtual tour hanya dapat diakses dalam jangka waktu tertentu.'
            ],
            contribution_en: [
                "Become a core developer in CMS development with Admin and User roles, which are used to manage access and the active period of virtual tours.",
                "Integrate virtual tours from freelancers with the CMS I developed.",
                "Implement a full security token system, so that virtual tours can only be accessed through the CMS with Admin approval.",
                "Develop a time restriction feature, so that virtual tours can only be accessed within a certain time period."
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'Virtual tour menjadi aman, terkontrol, dan sesuai kebutuhan perusahaan, dengan fleksibilitas pengaturan akses yang sepenuhnya berada di tangan Admin.',
            result_en: 'Virtual tours are safe, controlled, and tailored to company needs, with the flexibility of access settings completely in the hands of the Admin.'
        },
        {
            client_project: 'Supplier Portal',
            client_name: 'PT Akebono Brake Astra',
            desc: 'Aplikasi portal internal untuk manajemen supplier yang sebelumnya dibangun dengan PHP Native. Karena performa yang berat dan sulit dikembangkan, sistem dimigrasikan ke Laravel dengan optimasi query agar lebih ringan, stabil, dan scalable.',
            role: 'Fullstack Developer',
            company: 'PT Majapahit Teknologi Nusantara',
            status: "done",
            contribution: [
                'Modul Intransit: Mengembangkan sistem tracking keluar-masuk barang/material, mulai dari pencatatan barang masuk gudang, barang keluar untuk produksi, hingga status pergerakan material secara real-time.',
                'Modul Meal: Membuat fitur pengelolaan konsumsi/meal allowance untuk mendukung aktivitas supplier dan karyawan terkait.',
                'Modul QPR (Quality Problem Report): Membantu tim dalam membangun fitur pelaporan dan monitoring masalah kualitas material dari supplier.',
                'Migrasi Sistem: Melakukan migrasi dari PHP Native ke Laravel serta optimasi query database untuk meningkatkan kecepatan response aplikasi.'
            ],
            contribution_en: [
                'Intransit Module: Developing a system for tracking incoming and outgoing goods/materials, from recording incoming goods to warehouse operations, outgoing goods for production, to real-time material movement status.',
                'Meal Module: Creating a feature for managing consumption/meal allowances to support supplier and employee activities.',
                'QPR (Quality Problem Report) Module: Assisting the team in developing a feature for reporting and monitoring material quality issues from suppliers.',
                'System Migration: Migrating from PHP Native to Laravel and optimizing database queries to improve application response speed.'
            ],
            tech: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL'],
            result: 'Aplikasi menjadi lebih cepat, stabil, dan mendukung proses supply chain serta kontrol kualitas PT Akebono Brake Astra.',
            result_en: 'The application is faster, more stable, and supports the supply chain process and quality control of PT Akebono Brake Astra.'
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
                    <div className="col-span-12 mb-3">
                        <h1 className="text-center text-3xl font-bold">Work Experience</h1>
                        <p className='text-center mt-1'>Professional journey and key contributions in software and system development</p>
                    </div>
                    {datas.map((item, index) => (
                        <div className="basis-8/12 px-2 mb-6 hover:scale-105 duration-300" key={index}>
                            <div className="bg-base-200 shadow-xl rounded-lg border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                                {/* <img src={`https://picsum.photos/id/${(index + 30)}/200/300`} className="h-48 w-96 object-cover" /> */}
                                <div className="p-3 ps-3 pe-3">
                                    <h2 className="text-reguler font-bold mb-2">{item.client_project} - {item.client_name}</h2>
                                    <span className="bg-slate-900 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl">{item.company}</span>
                                    <p className="text-sm font-medium mt-1 mb-1">Status : <span className="text-xs font-medium bg-blue-500 text-white me-2 px-2.5 py-0.5 rounded-xl">{item.status}</span></p>
                                    <p className="text-sm font-medium">Contribution :</p>
                                    {item.contribution_en && item.contribution_en.length > 0 && (
                                        <ul className="list-disc text-sm mb-2 list-inside">
                                            {item.contribution_en.map((contribution, idx) => (
                                                <li key={idx}>{contribution}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {item.contribution_fase_1_end && item.contribution_fase_1_end.length > 0 && (
                                        <div>
                                            <span className="font-medium">Phase 1</span>
                                            <ul className="list-disc text-sm mb-2 list-inside">
                                                {item.contribution_fase_1_end.map((contribution, idx) => (
                                                    <li key={idx}>{contribution}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {item.contribution_fase_2_end && item.contribution_fase_2_end.length > 0 && (
                                        <div className="text-sm mb-2">
                                            <span className="font-medium">Phase 2</span>
                                            <ul className="list-disc list-inside">
                                                {item.contribution_fase_2_end.map((contribution, idx) => (
                                                    <li key={idx}>{contribution}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <p className="text-sm font-medium">Technologies : </p>
                                    {item.tech && item.tech.length > 0 && (
                                        <div className="mb-2">
                                            {item.tech.map((tc, idx) => (
                                                <span key={idx} className="bg-gray-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl">
                                                    {tc}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <p className="text-sm font-medium">Result :</p>
                                    <p className="text-sm">{item.result_en}</p>
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