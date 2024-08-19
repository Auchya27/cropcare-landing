import {
  alto,
  ata,
  cooler,
  khurpani,
  kolpani,
  other,
  pipe,
  poster,
  power,
  powert,
  prize,
  punch,
  ranger,
  seeder,
  shine,
  smartphone,
  spray,
  stp,
  sugar,
  tarpaulin,
  tools,
  tracktor,
  tv,
  unicorn,
  water,
  weed,
} from "./assets";
import { Navbar,Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <div className="grid gap-4 mt-10">
          <div>
            <img className="h-auto max-w-full" src={poster} alt="poster" />
          </div>
          <div className="grid grid-cols-4 gap-3 m-7">
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="  h-auto max-w-full rounded-sm"
                src={power}
                alt=""
              />
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="  h-auto max-w-full rounded-sm"
                src={tracktor}
                alt=""
              />
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="  h-auto max-w-full rounded-sm"
                src={unicorn}
                alt=""
              />
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="  h-auto max-w-full rounded-sm"
                src={shine}
                alt=""
              />
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
            <h5 className="mb-2 mt-20 text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-900 text-center">
              प्रत्येकास हमकास बक्षिस..!
            </h5>
            <p className="mt-5 font-normal text-gray-700 text-center text-3xl">
              नवीन संधी.. आता देईल उभारी..!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 mr-16 ml-16">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm p-7"
                src={punch}
                alt="punch"
              />
              <p className="text-center text-2xl font-semibold">टाटा पंच</p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm p-7 mt-6"
                src={alto}
                alt="alto"
              />
              <p className="text-center text-2xl font-semibold mt-12">
                मारुती आल्टो
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm p-7 ml-20 mt-12"
                src={unicorn}
                alt=""
              />
              <p className="text-center text-2xl font-semibold">
                होंडा युनिकॉर्न
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm p-7 ml-20"
                src={shine}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                25 विजेते
              </span>

              <p className="text-center text-2xl font-semibold">
                होंडा शाईन 100
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm p-7"
                src={tracktor}
                alt=""
              />
              <p className="text-center text-2xl font-semibold ">
                ट्रॅक्टर 45 एच.पी.
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-96 max-w-full rounded-sm p-7 ml-32"
                src={powert}
                alt=""
              />
              <p className="text-center text-2xl font-semibold mt-6">
                पावर ट्रीलर 15 एच.पी.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mr-16 ml-16 mt-20 mb-20">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm mt-16"
                src={power}
                alt="power-tiller"
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                02 विजेते
              </span>
              <p className="text-center text-lg font-semibold mt-11">
                मिनी पावर टिलर
              </p>
            </div>

            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm"
                src={weed}
                alt="weed"
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                10 विजेते
              </span>

              <p className="text-center text-lg font-semibold">कोळपणी यंत्र</p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img className="h-auto max-w-full rounded-sm" src={pipe} alt="" />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                25 विजेते
              </span>

              <p className="text-center text-lg font-semibold">
                लॅटरल - 3 बंडल
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm"
                src={seeder}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                25 विजेते
              </span>

              <p className="text-center text-lg font-semibold">
                मॅन्यअल सिडर मशीन
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm"
                src={water}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                50 विजेते
              </span>

              <p className="text-center text-lg font-semibold">
                वॉटर प्युरिफायर
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-72 max-w-full rounded-sm ml-10 mt-12"
                src={cooler}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                50 विजेते
              </span>

              <p className="text-center text-lg font-semibold">एअर कुलर</p>
            </div>

            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-52 max-w-full rounded-sm ml-10 mt-20"
                src={tools}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                150 विजेते
              </span>

              <p className="text-center text-lg font-semibold mt-12">
                शेती अवजारे किट
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm mt-7"
                src={tv}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                10 विजेते
              </span>

              <p className="text-center text-lg font-semibold mt-6">
                40 इंची एलईडी टीव्ही
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm mt-9"
                src={smartphone}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                11 विजेते
              </span>

              <p className="text-center text-lg font-semibold mt-1">
                स्मार्टफोन
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm ml-12 mt-12"
                src={stp}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                10 विजेते
              </span>

              <p className="text-center text-lg font-semibold mt-4">
                एस.टी.पी. स्प्रे पंप
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm mt-2"
                src={khurpani}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                25 विजेते
              </span>

              <p className="text-center text-lg font-semibold mt-14">
                खुरपनी यंत्र
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-64 max-w-full rounded-sm ml-20 mt-10"
                src={ata}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                20 विजेते
              </span>

              <p className="text-center text-lg font-semibold">आटा चक्की</p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm mt-12"
                src={ranger}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                50 विजेते
              </span>

              <p className="text-center text-lg font-semibold mt-4">
                रेंजर सायकल
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm"
                src={kolpani}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                2222 विजेते
              </span>

              <p className="text-center text-lg font-semibold">
                मिनी कोळपणी यंत्र
              </p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm ml-12 mt-10"
                src={tarpaulin}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                2755 विजेते
              </span>

              <p className="text-center text-lg font-semibold mt-3">ताडपत्री</p>
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                className="h-auto max-w-full rounded-sm ml-6 mt-10"
                src={spray}
                alt=""
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-3 py-1 text-center font-semibold text-white">
                5555 विजेते
              </span>

              <p className="text-center text-lg font-semibold">स्प्रे-पंप</p>
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mr-16 ml-16">
            <div>
              <img
                className="h-auto max-w-full rounded-smp-7"
                src={sugar}
                alt="crop"
              />
            </div>

            <div>
              <img
                className="h-auto max-w-full rounded-sm p-7"
                src={other}
                alt="other"
              />
            </div>
          </div>
        </>
      </section>

      <Footer />
    </div>
  );
}

export default App;
