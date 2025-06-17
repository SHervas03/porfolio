import { saveAs } from 'file-saver';
import sticker from '../assets/79cdf393-940a-4aa8-9e53-1bf22b837072.webp'
import cv from '../assets/Hervas_Aragon_Sergio_CV.pdf'
import { Link } from 'react-router-dom';

export default function Home() {
    const handleDownloadCV = () => {
        saveAs(cv, 'Hervas_Aragon_Sergio_CV.pdf');
    };

    return (
        <section className="flex items-center justify-center p-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mx-auto mb-10 w-60 h-60 rounded-md p-2">
                    <img
                        src={sticker}
                        alt="sticker"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>

                {/* Frase célebre */}
                <blockquote className="mb-10">
                    <p className="text-3xl md:text-4xl font-medium text-gray-800 leading-tight">
                        "No me ascienden por ser un idealista,<br />
                        tengo que hacerlo lo mejor que pueda con lo que tengo"
                    </p>
                    <footer className="mt-4 text-xl text-gray-500">
                        - Gary Oldman (James Gordon)
                    </footer>
                </blockquote>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={handleDownloadCV}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 bg-[#0083bf] text-white rounded-lg shadow hover:bg-[#006a99] transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Descargar CV
                    </button>

                    <Link
                        to="/contacto"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 border-2 border-[#0083bf] text-[#0083bf] rounded-lg shadow hover:bg-[#0083bf] hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        Contacto
                    </Link>
                </div>
            </div>
        </section>
    );
}