
import Footer from "./components/Footer"
import poster from './assets/landing-poster.png'
import power from   './assets/power-tiller.webp'
import tracktor from './assets/tracktor.webp'
import unicorn from './assets/unicorn.jpg'
import shine from './assets/shine.jpg'
import weed from './assets/weed.jpg'
import pipe from './assets/lateral-pipe.webp'
import seeder from './assets/seeder-machine.webp'
import water from './assets/water-purifier.webp'
import cooler from './assets/air-cooler.webp'
import powert from './assets/powert.png'
import tools from './assets/farming-tools.png'
import tv from './assets/tv.png'
import smartphone from './assets/smartphone.png'
import stp from './assets/stp-spraypump.jpg'
import khurpani from './assets/khurpani-yantra.jpg'
import ata from './assets/ata-c.jpg'
import ranger from './assets/ranger.jpg'
import kolpani from './assets/kolpani-yantra.png'
import tarpaulin from './assets/Tarpaulin.jpg'
import spray from './assets/spray-pump.jpg'
import sugar from './assets/sugar-cane.png'
import other from './assets/other-crop.png'
import punch from './assets/punch-car.png'
import alto from './assets/alto-blue.jpg'
import prize from './assets/prize-title.png'


import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";



function App() {


  return (
<>
      <Navbar />
      
      
     
      <section id="home">
        <div className="grid gap-4 mt-10">
          <div>
            <img className="h-auto max-w-full" src={poster} alt="poster" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 m-7">
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img className="h-auto max-w-full rounded-sm" src={power} alt="" />
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img className="h-auto max-w-full rounded-sm" src={tracktor} alt="" />
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img className="h-auto max-w-full rounded-sm" src={unicorn} alt="" />
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img className="h-auto max-w-full rounded-sm" src={shine} alt="" />
            </div>
          </div>
        </div>
      </section>
     

<section id="prize">
        <div>
          <div>
            <img className="h-auto max-w-full" src={prize} alt="poster" />
          </div>
          <div className="m-7">
            <h5 className="mb-2 mt-20 text-3xl md:text-6xl font-bold tracking-tight text-gray-900 text-center">
              प्रत्येकास हमकास बक्षिस..!
            </h5>
            <p className="mt-5 font-normal text-gray-700 text-center text-xl md:text-3xl">
              नवीन संधी.. आता देईल उभारी..!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mr-4 md:mr-16 ml-4 md:ml-16">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center">
              <img className="h-auto max-w-full rounded-sm p-7" src={punch} alt="punch" />
              <p className="text-center text-lg md:text-2xl font-semibold">
                टाटा पंच
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center">
              <img className="h-auto max-w-full rounded-sm p-7 mt-6" src={alto} alt="alto" />
              <p className="text-center text-lg md:text-2xl font-semibold mt-12">
                मारुती आल्टो
              </p>
            </div>
            {/* Continue this pattern for other images */}
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
            <img className="h-auto max-w-full rounded-sm p-7 mt-12" src={unicorn} alt="" />
            <p className="text-center text-lg md:text-2xl font-semibold">
            होंडा युनिकॉर्न
            </p>
          
        </div>
    <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
            <img className="h-auto max-w-full rounded-sm p-7" src={shine} alt="" />
            <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">25 विजेते</span>

            <p className="text-center text-lg md:text-2xl font-semibold">
            होंडा शाईन 100
            </p>
          
        </div>
    <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
            <img className="h-auto max-w-full rounded-sm p-7" src={tracktor} alt="" />
            <p className="text-center text-lg md:text-2xl font-semibold ">
            ट्रॅक्टर 45 एच.पी.
            </p>
          
        </div>
    <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
            <img className="h-96 max-w-full rounded-sm p-7" src={powert} alt="" />
            <p className="text-center text-lg md:text-2xl font-semibold mt-6">
            पावर ट्रीलर 15 एच.पी.
            </p>
          
        </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mr-4 md:mr-16 ml-4 md:ml-16 mt-10 mb-10">
            {/* Use similar responsive classes for other items */}
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img className="h-auto max-w-full rounded-sm mt-16" src={power} alt="power-tiller" />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                02 विजेते
              </span>
              <p className="text-center text-sm md:text-lg font-semibold mt-11">
                मिनी पावर टिलर
              </p>
            </div>
            
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto max-w-full rounded-sm" src={weed} alt="weed" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">10 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold">
        कोळपणी यंत्र
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto max-w-full rounded-sm" src={pipe} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">25 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold">
        लॅटरल - 3 बंडल
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto max-w-full rounded-sm" src={seeder} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">25 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold">
        मॅन्यअल सिडर मशीन
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto md:h-[76%] md:mt-5 rounded-sm" src={water} alt=""/>
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">50 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold">
        वॉटर प्युरिफायर
        </p>
    </div>
    <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto md:h-72 max-w-full rounded-sm mt-12" src={cooler} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">50 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold">
        एअर कुलर
        </p>
    </div>

 
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-28 md:h-52 max-w-full rounded-sm mt-20" src={tools} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">150 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold mt-5">
        शेती अवजारे किट
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto max-w-full rounded-sm md:mt-7 mt-14" src={tv} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">10 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold mt-6">
        40 इंची एलईडी टीव्ही
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto max-w-full rounded-sm md:mt-9 mt-16" src={smartphone} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">11 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold mt-1">
        स्मार्टफोन
        </p>
    </div>
    <div className='transition-transform duration-300 ease-in-out transform hover:scale-10 grid place-content-center'>
        <img className="h-32 md:h-auto max-w-full rounded-sm mt-12" src={stp} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">10 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold mt-3">
        एस.टी.पी. स्प्रे पंप
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto max-w-full rounded-sm md:mt-2 mt-6" src={khurpani} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">25 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold mt-14">
        खुरपनी यंत्र
        </p>
    </div>
    <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-52 md:h-64 max-w-full rounded-sm mt-10" src={ata} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">20 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold">
        आटा चक्की
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto max-w-full rounded-sm md:mt-12 mt-16" src={ranger} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">50 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold mt-4">
        रेंजर सायकल
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-52 md:h-auto max-w-full rounded-sm" src={kolpani} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">2222 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold">
        मिनी कोळपणी यंत्र
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto max-w-full rounded-sm mt-10" src={tarpaulin} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">2755 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold mt-3">
        ताडपत्री
        </p>
    </div>
<div className='transition-transform duration-300 ease-in-out transform hover:scale-105 grid place-content-center'>
        <img className="h-auto max-w-full rounded-sm mt-10" src={spray} alt="" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">5555 विजेते</span>

        <p className="text-center text-lg md:text-2xl font-semibold">
        स्प्रे-पंप
        </p>
    </div>

          </div>
        </div>
      </section>



          
      {/* <section id="about">
        <>
       <div className='m-7'>
       <h5 className="mb-2 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">
       योजनेचे नियम, अटी व थोडक्यात माहिती</h5>
       <ol className="font-normal text-black text-base md:text-xl leading-7 md:leading-10 list-decimal mx-5 md:mx-28 my-16">
       <li>सदर उपक्रम शेती निविष्ठा यांच्या विक्रीमध्ये वाढ व्हावी या उद्देशाने आयोजीत केला आहे, याचा कसल्याही लॉटरी अथवा इतर कायदेशीर बाबींशी संबंध नाही.</li>
    <li>सदर योजना ही क्रॉप के अर इंडिया कंपनी मार्फत आयोजीत केली आहे. ही योजना 11000 ग्राहक संख्या करीता मर्यादित राहील.</li>
    <li>सदर योजनेत रूपये 3535 किंवा रुपये 3595 किमतीचे आमचे कोणतेही प्रोडक्ट विकत घेऊन सहभाग नोंदवता येईल. तसेच दिलेल्या कुपनमधील कोणतेही बक्षिस 3 लागल्यानंतर रुपये 1500 अतिरिक्त भरणे बंधनकारक राहील. या व्यतिरिक्त कोणताही चार्ज आकारला जाणार नाही याची ग्राहकांनी नोंद घ्यावी.</li>
    <li>बक्षिस विजेत्या ग्राहकांनी बक्षिस कार्यक्रम झाल्यानंतर 30 दिवसांच्या आत बक्षिस घेऊन जाणे बंधनकारक आहे.</li>
    <li>सदर बक्षिस वितरणामध्ये बक्षिस विजेत्या ग्राहकास बक्षिसच दिले जाईल, त्याबदल्यात अन्य मागणी करु नये, अथवा रोख रक्कम मिळणार नाही.</li>
    <li>आमचे प्रोडक्ट खरेदी करणाऱ्या ग्राहकांना योजनेचे माहिती कुपन निशुल्क दिले जाते.</li>
    <li>आमचे प्रोडक्ट खरेदी केल्याची पावती रितसर मिळते. बक्षिस विजेत्या ग्राहकास बक्षिस नेतेवेळी सोबत पावती असणे बंधनकारक आहे. त्याशिवाय बक्षिस मिळणार नाही.</li>
    <li>क्रॉप केअर इंडिया 1978, 1980 च्या S3 व S2C प्राइस लिस्ट व मनी सर्कुलर स्कीमबंदी कायदा यामध्ये दिलेल्या गाईडलाईननुसार काम करते.</li>
    <li>टुव्हिलर, फोर व्हिलर विजेत्या ग्राहकांना टॅक्स, रजिट्रेशन व विमा स्वतः भरावा लागेल. योजनेतील सर्व वाहने ही बेस मॉडेलची आहेत.</li>
    <li>बक्षिस जाहीर समारंभाचे ठिकाण, वेळ, दिनांक, ही संबधीत माहिती पुस्तकेवर दिलेली आहे. काही अपरिहार्य प्रसंगामुळे बक्षिस वितरणाच्या दिनांक, वेळ व ठिकाण बदलले तर सर्व ग्राहकांना या संबधीत प्रतिनिधीद्वारे कळविण्यात येईल.</li>
    <li>ग्राहकांना सुचित करण्यात येते की, सदर योजनेचा उद्देश फक्त वस्तू व सेवा विक्री करणे आहे, त्यामुळे कंपनीचे कोणतेही प्रोडक्ट खरेदी करणे बंधनकारक राहील. त्याशिवाय योजनेत ग्राहकांचा प्रवेश गृहीत धरला जाणार नाही.</li>
    <li>बक्षिस विजेत्या ग्राहकांची यादी संबधीत प्रतिनीधीकडे व कार्यालयात बक्षिस जाहीर संमारंभानंतर आठ दिवसाच्या आत उपलब्ध केली जाईल, याची ग्राहकांनी नोंद घ्यावी.</li>
    <li>सदर माहिती पुस्तकेवरील चित्रे निर्देशीत स्वरुपाची आहेत. प्रत्यक्षात असणारी वस्तू फरक असू शकते.</li>
    <li>प्रत्येत कंपनीच्या वस्तू विक्रीची पध्दत वेगवेगळी असते, त्यामुळे या योजनेतील प्रोडक्टची इतर कोणत्याही गोष्टींशी तुलना करु नये. (उदा. ऑनलाईन / इतर काऊंटर)</li>
    <li>ग्राहकांनी सदर माहिती पुस्तकेवर आपले नांव, मोबाईल क्रमांक मार्कर पेनने भरणे बंधनकारक आहे.</li>
    <li>बक्षिस हे आमच्या कार्यालयामधूनच वितरीत होणार.</li>
    <li>सर्व प्रतिनीधींनी दिनांक 31 ऑक्टोंबर 2024 रोजी संध्याकाळी 7.00 वाजेपर्यंत आपआपल्या ग्राहकांची यादी, रिपोर्ट स्लीप कंपनी कार्यालयात जमा करणे बंधनकारक आहे. त्यानंतर कोणाचीही दखल घेतली जाणार नाही.</li>
    <li>10 नोव्हेंबर 2024 रोजी सोडत विक्री प्रतिनिधींच्या समोर करणेत येईल. होणाऱ्या सोडतीचे थेट प्रक्षेपण युट्युवद्वारे करण्यात येईल. सर्व ग्राहकांना प्रतिनीधींनीकडून युट्यूब ची लिंक देण्यात येईल.</li>
    <li>ज्या ग्राहकास लागलेल्या वस्तू किंवा गाडीपैकी त्या वस्तू किंवा गाडीची कॅश पाहिजी असेल तर बेस किंमतपेक्षा 40% रक्कम कमी करून देण्यात येईल. याची ग्राहकांनी नोंद घेण्यात यावी.</li>
    <li>योजनेतील नियमांमध्ये कोण्यत्याही स्वरुपाचे बदल करण्याचे आधिकार कंपनीकडे राहतील.</li>
    <li>वरील सर्व नियम व अटी मी काळजीपुर्वक वाचून पाहून व समजून घेतलेल्या असून मला त्या मान्य आहेत. स्वखुशीने वस्तू खरेदी करून या योजनेत सहभाग घेत आहे व स्वाक्षरी करीत आहे.</li>
</ol>


 
</div> 

<div className="text-gray-800 text-lg mt-7 font-regular sm:text-base sm:mt-5">
  *नियम व अटी लागू.
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:mr-8 sm:ml-8 mr-16 ml-16">
  <div>
    <img className="h-auto max-w-full rounded-sm p-3 sm:p-7" src={sugar} alt="crop" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-sm p-3 sm:p-7" src={other} alt="other" />
  </div>
</div>


        </>
      </section> */}
      
      <section id="about">
        <>
          <div className="md:m-7">
            <h5 className="mb-2 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">
              योजनेचे नियम, अटी व थोडक्यात माहिती
            </h5>
            <ol className="leading-loose text-sm md:leading-loose text-black md:text-xl list-decimal mx-8 md:mx-28 my-8">
              <li>
                सदर उपक्रम शेती निविष्ठा यांच्या विक्रीमध्ये वाढ व्हावी या
                उद्देशाने आयोजीत केला आहे, याचा कसल्याही लॉटरी अथवा इतर कायदेशीर
                बाबींशी संबंध नाही.
              </li>
              <li>
                सदर योजना ही क्रॉप के अर इंडिया कंपनी मार्फत आयोजीत केली आहे. ही
                योजना 11000 ग्राहक संख्या करीता मर्यादित राहील.
              </li>
              <li>
                सदर योजनेत रूपये 3535 किंवा रुपये 3595 किमतीचे आमचे कोणतेही
                प्रोडक्ट विकत घेऊन सहभाग नोंदवता येईल. तसेच दिलेल्या कुपनमधील
                कोणतेही बक्षिस 3 लागल्यानंतर रुपये 1500 अतिरिक्त भरणे बंधनकारक
                राहील. या व्यतिरिक्त कोणताही चार्ज आकारला जाणार नाही याची
                ग्राहकांनी नोंद घ्यावी.
              </li>
              <li>
                बक्षिस विजेत्या ग्राहकांनी बक्षिस कार्यक्रम झाल्यानंतर 30
                दिवसांच्या आत बक्षिस घेऊन जाणे बंधनकारक आहे.
              </li>
              <li>
                सदर बक्षिस वितरणामध्ये बक्षिस विजेत्या ग्राहकास बक्षिसच दिले
                जाईल, त्याबदल्यात अन्य मागणी करु नये, अथवा रोख रक्कम मिळणार
                नाही.
              </li>
              <li>
                आमचे प्रोडक्ट खरेदी करणाऱ्या ग्राहकांना योजनेचे माहिती कुपन
                निशुल्क दिले जाते.
              </li>
              <li>
                आमचे प्रोडक्ट खरेदी केल्याची पावती रितसर मिळते. बक्षिस विजेत्या
                ग्राहकास बक्षिस नेतेवेळी सोबत पावती असणे बंधनकारक आहे. त्याशिवाय
                बक्षिस मिळणार नाही.
              </li>
              <li>
                क्रॉप केअर इंडिया 1978, 1980 च्या S3 व S2C प्राइस लिस्ट व मनी
                सर्कुलर स्कीमबंदी कायदा यामध्ये दिलेल्या गाईडलाईननुसार काम करते.
              </li>
              <li>
                टुव्हिलर, फोर व्हिलर विजेत्या ग्राहकांना टॅक्स, रजिट्रेशन व विमा
                स्वतः भरावा लागेल. योजनेतील सर्व वाहने ही बेस मॉडेलची आहेत.
              </li>
              <li>
                बक्षिस जाहीर समारंभाचे ठिकाण, वेळ, दिनांक, ही संबधीत माहिती
                पुस्तकेवर दिलेली आहे. काही अपरिहार्य प्रसंगामुळे बक्षिस
                वितरणाच्या दिनांक, वेळ व ठिकाण बदलले तर सर्व ग्राहकांना या
                संबधीत प्रतिनिधीद्वारे कळविण्यात येईल.
              </li>
              <li>
                ग्राहकांना सुचित करण्यात येते की, सदर योजनेचा उद्देश फक्त वस्तू
                व सेवा विक्री करणे आहे, त्यामुळे कंपनीचे कोणतेही प्रोडक्ट खरेदी
                करणे बंधनकारक राहील. त्याशिवाय योजनेत ग्राहकांचा प्रवेश गृहीत
                धरला जाणार नाही.
              </li>
              <li>
                बक्षिस विजेत्या ग्राहकांची यादी संबधीत प्रतिनीधीकडे व कार्यालयात
                बक्षिस जाहीर संमारंभानंतर आठ दिवसाच्या आत उपलब्ध केली जाईल, याची
                ग्राहकांनी नोंद घ्यावी.
              </li>
              <li>
                सदर माहिती पुस्तकेवरील चित्रे निर्देशीत स्वरुपाची आहेत.
                प्रत्यक्षात असणारी वस्तू फरक असू शकते.
              </li>
              <li>
                प्रत्येत कंपनीच्या वस्तू विक्रीची पध्दत वेगवेगळी असते, त्यामुळे
                या योजनेतील प्रोडक्टची इतर कोणत्याही गोष्टींशी तुलना करु नये.
                (उदा. ऑनलाईन / इतर काऊंटर)
              </li>
              <li>
                ग्राहकांनी सदर माहिती पुस्तकेवर आपले नांव, मोबाईल क्रमांक मार्कर
                पेनने भरणे बंधनकारक आहे.
              </li>
              <li>बक्षिस हे आमच्या कार्यालयामधूनच वितरीत होणार.</li>
              <li>
                सर्व प्रतिनीधींनी दिनांक 31 ऑक्टोंबर 2024 रोजी संध्याकाळी 7.00
                वाजेपर्यंत आपआपल्या ग्राहकांची यादी, रिपोर्ट स्लीप कंपनी
                कार्यालयात जमा करणे बंधनकारक आहे. त्यानंतर कोणाचीही दखल घेतली
                जाणार नाही.
              </li>
              <li>
                10 नोव्हेंबर 2024 रोजी सोडत विक्री प्रतिनिधींच्या समोर करणेत
                येईल. होणाऱ्या सोडतीचे थेट प्रक्षेपण युट्युवद्वारे करण्यात येईल.
                सर्व ग्राहकांना प्रतिनीधींनीकडून युट्यूब ची लिंक देण्यात येईल.
              </li>
              <li>
                ज्या ग्राहकास लागलेल्या वस्तू किंवा गाडीपैकी त्या वस्तू किंवा
                गाडीची कॅश पाहिजी असेल तर बेस किंमतपेक्षा 40% रक्कम कमी करून
                देण्यात येईल. याची ग्राहकांनी नोंद घेण्यात यावी.
              </li>
              <li>
                योजनेतील नियमांमध्ये कोण्यत्याही स्वरुपाचे बदल करण्याचे आधिकार
                कंपनीकडे राहतील.
              </li>
              <li>
                वरील सर्व नियम व अटी मी काळजीपुर्वक वाचून पाहून व समजून
                घेतलेल्या असून मला त्या मान्य आहेत. स्वखुशीने वस्तू खरेदी करून
                या योजनेत सहभाग घेत आहे व स्वाक्षरी करीत आहे.
              </li>
            </ol>

            <p className="text-gray-800 text-sm font-bold md:text-lg md:mt-7 font-regular md:mx-28">
              *नियम व अटी लागू.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:mr-8 sm:ml-8 mr-16 ml-16">
  <div>
    <img className="h-auto max-w-full rounded-sm p-3 sm:p-7" src={sugar} alt="crop" />
  </div>
  <div>
    <img className="h-full max-w-full rounded-sm p-3 sm:p-7" src={other} alt="other" />
  </div>
</div>
        </>
      </section>



      <Footer />
</>

  )
}

export default App
