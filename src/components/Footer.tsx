

import { MapPin, Phone, Clock, Facebook } from 'lucide-react';
import INFO from '../data/const';


export const Footer = () => (
  <footer className="bg-[#FFF0F5] pt-20 pb-10 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-pink-100 flex flex-col md:flex-row justify-between text-left gap-8 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-pink-50 p-3 rounded-2xl"><MapPin className="text-pink-400" /></div>
            <div>
              <h4 className="font-bold text-sm">Ubicación</h4>
              <p className="text-gray-400 text-xs">{INFO.ADDRESS}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-pink-50 p-3 rounded-2xl"><Clock className="text-pink-400" /></div>
            <div>
              <h4 className="font-bold text-sm">Horario de Atención</h4>
              <p className="text-gray-400 text-xs">{INFO.HOURS}</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-pink-50 p-3 rounded-2xl"><Phone className="text-pink-400" /></div>
            <div>
              <h4 className="font-bold text-sm">Teléfono</h4>
              <p className="text-gray-400 text-xs">{INFO.PHONE_TEXT}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <h4 className="font-bold text-sm mb-2">Nuestras Redes</h4>
              <div className="flex gap-4">
                <a href={`${INFO.FACEBOOK_URL}`}   target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="text-pink-400 w-5 h-5 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#FF4D8D] font-black text-xl mb-4 italic">Oco LALA</div>
      <p className="text-gray-400 text-[11px] mb-8 uppercase tracking-widest italic font-medium">Haciendo tus días más dulces desde Sausal</p>
      <p className="text-[10px] text-gray-300">© 2024 OCO LALA. TODOS LOS DERECHOS RESERVADOS.</p>
    </div>
    <br />
    <br />
    <br />
  </footer>
);