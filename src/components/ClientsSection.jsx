import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export function ClientsSection() {
    const clients = [
        { id: 1, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349754/PrintDreams_mxynkq.png" },
        { id: 2, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349746/molinari_zpenyd.avif" },
        { id: 3, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349743/unnamed_xxwo3a.png" },
        { id: 4, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349753/Fiap-logo-novo_jpjqes.jpg" },
        { id: 5, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349751/logo-Mandic-oficial1_an4zn9.jpg" },
        { id: 6, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349753/seguros_unimed_hwl2cx.avif" },
        { id: 7, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349752/banco24hrs_zmk2jj.png" },
        { id: 8, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349744/edacba1a5eb567a9a66ccc861daabd7569e469a2_m1kzt2.jpg" },
        { id: 9, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349754/L_Or%C3%A9al_logo.svg_fvx7pr.png" },
        { id: 10, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349750/alma_studio_ewh0n0.avif" },
        { id: 11, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349743/instashop_pxfhhj.avif" },
        { id: 12, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349744/novamerica_c0lcwo.png" },
        { id: 13, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349746/vaideveg_xpcust.jpg" },
        { id: 14, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349743/wAWgmvBVdSdDVL0G9r8sRZPg2A_lsrmyg.avif" },
        { id: 15, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349749/hgp_yixpgu.png" },
        { id: 16, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349744/T-Systems-Logo.wine_q4w2qa.png" },
        { id: 17, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349743/BBVA_2019.svg_pwyb6q.png" },
        { id: 18, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349752/brf_be6l4i.avif" },
        { id: 19, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742407596/a8ec08192195075.Y3JvcCwxMDgwLDg0NCwwLDkw_khigtf.png" },
        { id: 20, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349745/lgElnqGsFgINgWfmeTIl5MVzAdo_fffkfe.avif" },
        { id: 21, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349743/farmacia_do_bem_tswc0k.avif" },
        { id: 22, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349753/Logo_do_Banco_Bmg.svg_hzmdv0.png" },
        { id: 23, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349748/Sebrae.svg_medfwp.png" },
        { id: 24, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349750/hsl_bj93vr.png" },
        { id: 25, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349747/rZRopHkjRdKrUwB0Ajri_logo-alta-impacta_optimized_ag7nkg.png" },
        { id: 26, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349743/Ita%C3%BA_Unibanco_logo_2023.svg_ogvoan.png" },
        { id: 27, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349749/hinode_eumlbc.png" },
        { id: 28, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349750/Logo_of_Cielo.svg_j8eyae.png" },
        { id: 29, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349748/carrefour-logo-01-01_tiocea.jpg" },
        { id: 30, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349747/carrefour_sf_i5nyej.png" },
        { id: 31, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349751/logosbk_nkosiv.png" },
        { id: 32, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349745/vise_hd0rip.avif" },
        { id: 33, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349745/Dinamica-Group-logo-768x311_abonlt.webp" },
        { id: 34, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349754/Logo_Fast_Frame_colorido_horizontal-1_krl6uq.png" },
        { id: 35, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349742/up_mvtfqv.webp" },
        { id: 36, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349749/mills_logo-1-Monique-Leme-Cesila_wu0ztz.png" },
        { id: 37, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349745/logo-somai_leermw.webp" },
        { id: 38, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349743/Oracle-Logo_xvtpei.webp" },
        { id: 39, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349752/scania_xmrm1l.avif" },
        { id: 40, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349753/honda-the-power-of-dreams-logo_rcglpu.png" },
        { id: 41, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349748/1024px-Mercedes_Benz_Logo_11_edfzqq.jpg" },
        { id: 42, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349751/Logo-Fiesp_gz1r1i.jpg" },
        { id: 43, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349748/ff_o2kkqs.jpg" },
        { id: 44, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349746/invora-bra_hkq1gp.png" },
        { id: 45, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349751/Caixa_Econ%C3%B4mica_Federal_logo.svg_hhhxgz.png" },
        { id: 46, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349750/magalu-logo-0_rpxsoz.png" },
        { id: 47, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349746/logo-segure.me__iyaqz9.png" },
        { id: 48, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349746/ceramic_pro_logo_light_bg_594x150_nqy9xk.png" },
        { id: 49, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349750/sambahoteisllogo2310_1_w3zxvl.jpg" },
        { id: 50, logo: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742349752/ABBC_3-1024x1024_neylac.png" }
    ];

    return (
        <section id="clientes" className="w-full bg-white py-12 sm:py-16 md:py-20">
            <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-[40px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
                        Empresas que confiam na Improve
                    </h2>

                    <div className="w-full relative">
                        <div className="absolute left-0 top-0 w-[100px] sm:w-[150px] md:w-[200px] h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 w-[100px] sm:w-[150px] md:w-[200px] h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                        
                        <div className="overflow-hidden">
                            <Marquee
                                gradient={false}
                                speed={30}
                                className="py-4 sm:py-6 md:py-8"
                            >
                                <div className="flex items-center">
                                    {clients.map((client) => (
                                        <div
                                            key={client.id}
                                            className="mx-4 sm:mx-6 md:mx-8"
                                        >
                                            <div 
                                                className="w-[120px] sm:w-[150px] md:w-[180px] h-[60px] sm:h-[75px] md:h-[90px] bg-white border border-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg"
                                            >
                                                <img 
                                                    src={client.logo} 
                                                    alt={`Logo do Cliente ${client.id}`}
                                                    className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 