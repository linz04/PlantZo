import React from "react";

const ButHome = () => {
    return(
        <div>
        <div className="md:grid md:grid-cols-2 md:gap-4 md:mx-20">
            <div>
                <div className="flex justify-center text-2xl font-bold my-5">Bantuan</div>
                <ul>
                    <li className="my-5 flex justify-center text-lg">Bagaimana cara membuat akun?</li>
                    <li className="my-5 flex justify-center text-lg">Bagimana cara melakukan pemesanan?</li>
                    <li className="my-5 flex justify-center text-lg">Bagaimana cara mengubah kata sandi?</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex justify-center text-2xl font-bold mt-5">
                    <div className="bg-green-300">
                    Kontak
                    </div>
                </div>
                <ul className="text-lg">
                    <li className="flex justify-center">
                      <p className="bg-gradient-to-b from-green-500 to-green-100 mt-5"><img className="inline w-7 h-7 mr-2" src="../images/icons/email.png" alt="Email" />Plantzo@gmail.com</p>
                    </li>
                    <li className="flex justify-center">
                        <p className="bg-gradient-to-b from-green-500 to-green-100 mt-5"><img src="/images/icons/instagram.png" alt="Instagram" className="inline w-7 h-7 mr-2" />PlantZoofficial</p>
                    </li>
                    <li className="flex justify-center">
                        <p className="bg-gradient-to-b from-green-500 to-green-100 mt-5"><img src="/images/icons/facebook.png" alt="facebook" className="inline w-7 h-7 mr-2" />PlantZoofficial</p>
                    </li>
                    <li className="flex justify-center">
                        <p className="bg-gradient-to-b from-green-500 to-green-100 mt-5"><img src="/images/icons/twitter.png" alt="Twitter" className="inline w-7 h-7 mr-2" />PlantZoofficial</p>
                    </li>
                </ul>
            </div>
            
          </div>
          <div className="bg-local max-w-full h-full bg-no-repeat p-20" style={{backgroundImage: "url(/images/icons/gel.png)"}}>
            <div className="md:grid md:grid-cols-2 md:gap-4 md:mx-20 text-2xl font-bold mb-5">
                <div className="flex justify-center flex-col">
                    <div className="mt-20 md:mt-40"> </div>
                    <p className="flex justify-center  mt-32">Jasa Pengiriman</p>
                    <div className="flex justify-center mt-5">
                        <img className="inline-block object-contain w-20 h-20" src="/images/icons/jt.png" alt="jnt" />
                        <img src="/images/icons/jne.png" alt="jne" className="inline-block object-contain w-20 h-20 mx-5" />
                        <img src="/images/icons/jdid.png" alt="jdid" className="inline-block object-contain w-20 h-20" />
                    </div>
                </div>
                <div className="flex justify-center flex-col">
                    <div className="md:mt-40"></div>
                    <p className="flex justify-center mt-32">Metode Pembayaran</p>
                    <div className="flex justify-center mt-5">
                        <img src="/images/icons/dana.png" alt="jnt" className="inline-block object-contain w-20 h-20" />
                        <img src="/images/icons/cod.png" alt="jne" className="inline-block object-contain w-20 h-20 mx-5" />
                        <img src="/images/icons/ovo.png" alt="jdid" className="inline-block object-contain w-20 h-20" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
    };
    export default ButHome;