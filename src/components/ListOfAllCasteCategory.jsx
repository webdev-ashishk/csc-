const CastesList = () => {
  const OBC = [
    'Arakh, Arakvanshiya (अरख, अरकवंशिया)',
    'Kachhi Kachhi-Kushwaha, Shakya (कच्छी कच्छी-कुशवाहा, शाक्य)',
    'Kahar, Tanwar, Singhariya (कहार, तनवार, सिंहरिया)',
    'Kewat or Mallah (केवट या मल्लाह)',
    'Kisan (किसान)',
    'Koeri Koiri (कोरी कोइरी)',
    'Kumhar, Prajapati (कुम्हार, प्रजापति)',
    'Kurmi, Kurmi-Sainthwar/Kurmi-Mall, Kurmi- Patanwar (कुर्मी, कुर्मी-सैन्थवार/कुर्मी-मल्ल, कुर्मी-पतनवार)',
    'Kasgar (कसगर)',
    'Kunjra or Rayeen (कुंजड़ा या रईन)',
    'Gosain (गोसाईं)',
    'Gujar (गुजर)',
    'Gaderia (गडेरिया)',
    'Gaddi, Ghosi (गड्डी, घोसी)',
    'Giri (गिरी)',
    'Chikwa Qassab, (Qureshi), Kasai/ Qassai, Chak (चिक्वा क़स्साब, (क़ुरैशी), कसाई/क़स्साई, चाक)',
    'Chhipi, Chhipe (छिपी, छिपे)',
    'Jogi (जोगी)',
    'Jhoja (झोझा)',
    'Dafali (दफाली)',
    'Tamoli, Barai, Chaurasia (तमोली, बाराई, चौरेशिया)',
    'Teli, Samani, Rogangar, Teli Malik (Muslim), Teli Sahu, Teli Rathore (तेली, समानी, रोज़ांगर, तेली मलिक (मुस्लिम), तेली साहू, तेली राठौर)',
    'Darzi (दरज़ी)',
    'Dhivar Dhiver (धिवर धिवेर)',
    'Naqqal (नक़्क़ाल)',
    'Nat (excluding those who are included in Scheduled Castes) (नट (उनके अलावा जो अनुसूचित जातियों में शामिल हैं))',
    'Nayak (नायक)',
    'Faqir (फकीर)',
    'Banjara, Mukeri, Ranki, Mekrani (बंजारा, मुकरी, रंगी, मेकरानी)',
    'Barhai, Badhai, Viswakarma, Ramgarhia (बरहाई, बदहाई, विश्वकर्मा, रामगढ़िया)',
    'Bari (बाड़ी)',
    'Bairagi (बैरागी)',
    'Bind (बिंद)',
    'Biyar (बियार)',
    'Bhar (भार)',
    'Bhurji, Bharbhuja, Bharbhunja, Bhooj, Kandu (भुरजी, भारभुजा, भारभुन्जा, भूज, कंदू)',
    'Bhathiara (भठियारा)',
    'Mali, Saini, Baghban (माली, सैनी, बाग़बान)',
    'Manihar, Kacher, Lakher, Lakhera (excluding Lakhera sub-caste of Brahmans in Tehri Garhwal region), Churihar (मणिहार, कचर, लखेर, लखेरा (तेहरी गढ़वाल क्षेत्र में ब्राह्मणों की लखेरा उपजाति को छोड़कर), चुरिहार)',
    'Murao or Murai Maurya (मुराओ या मुराई मौर्य)',
    'Momin (Ansar, Ansari), Julah (मोमिन (अंसार, अंसारी), जुलाह)',
    'Mirasi (मिरासी)',
    'Muslim Kayastha (मुस्लिम कायस्थ)',
    'Naddaf (Dhunia), Dhunia, Mansoori, Behna, Kandere, Kadere, Pinjara (नद्दाफ (धुनिया), धुनिया, मंसूरी, बहना, कंदरे, कदरे, पिंजारा)',
    'Marchha (मार्चा)',
    'Rangrez, Rangwa (रंगरेज़, रंगवा)',
    'Lodh, Lodha, Lodhi, Lodhi-Rajput (लोढ़, लोढ़ा, लोढ़ी, लोढ़ी-राजपूत)',
    'Lohar, Luhar, Saifi (लोहार, लुहार, सैफी)',
    'Lonia, Noniya, Luniya, Gole Thakur, Nunere (लोनिया, नोनीय, लुनिया, गोले ठाकुर, नुनेरे)',
    'Sonar, Sunar (सोनार, सुनार)',
    'Halwai (हलवाई)',
    'Hajjam (Nai), Salmani, Nai, Sain (Nai) (हज्जाम (नाई), सलमानी, नाई, सैण (नाई))',
    'Halalkhor, Hela, Lalbegi (other than those who are included in the list of Scheduled Castes) (हलालखोर, हेले, लालबेगी (उनके अलावा जो अनुसूचित जातियों की सूची में शामिल हैं))',
    'Dhobi (other than those who are already included in the list of Scheduled Castes for UP) (धोबी (उनके अलावा जो पहले से उत्तर प्रदेश के अनुसूचित जातियों की सूची में शामिल हैं))',
    'Mewati, Meo (मेवाती, मियो)',
    'Saqqa-Bhisti, Bhisti-Abbassi (सक्का-भिस्ती, भिस्ती-अब्बासी)',
    'Koshta/Koshti (कोष्ठा/कोष्टी)',
    'Khumra, Sangtarash, Hansiri (खुमरा, संगताराश, हंसीरी)',
    'Patwa, Patua, Pathar (excluding Agarwala, Deobansi, Kharewal or Khandelwal who are sub-caste of Baniya and Kharwar who claim to the rank of Rajput) Tatwa (पटवा, पटुआ, पत्थर (अगरवाला, देवबंसी, खरेवाल या खंडेलवाल जो बाणिया की उपजाति हैं और खारवार जो राजपूत का दर्जा दावा करते हैं) तत्वा)',
    'Atishbaz, Darugar (आतिशबाज़, दरुगर)',
    'Madari (मदारी)',
    'Nalband, Sais (नलबंद, सैस)',
    'Bhand (भंड)',
    'Mochi (excluding those who are included in the List of SC of Uttar Pradesh) (मोची (उनके अलावा जो उत्तर प्रदेश के अनुसूचित जाति की सूची में शामिल हैं))',
    'Raj (Memar) (राज (मेवार))',
    'Sheikh Sarvari (Pirai), Peerahi (शेख सरवरी (पीराई), पीराही)',
    'Aheria/ Aheriya (अहेरीया/अहेरीया)',
    'Bot (does not include ‘Bhotia’ who are already in the list of ST in UP) (बोट (इसमें ‘भोटिया’ शामिल नहीं हैं जो पहले से उत्तर प्रदेश की आदिवासी सूची में हैं))',
    'Kuthaliya Bora (belonging to Almora, Pithoragarh, Bageswar and Nainital Districts) (कुथालिया बोरा (अल्मोड़ा, पिथोरागढ़, बागेश्वर और नैनीताल जिलों से संबंधित))',
    'Kalal, Kalwar, Kalar (कलाल, कालवार, कालर)',
    'Dohar (डोहर)',
    'Kasera, Thathera, Tamrakar Kalaikar (कसेरा, ठठेरा, तम्रकार कालिकार)',
    'Rai Sikh (Mahatam) (राय सिख (महात्म))',
    'Unai Sahu (उन्नई साहू)',
    'Gada (गड़ा)',
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4" id="castesList">
      <div className="container mx-auto max-w-4xl">
        {/* SC List Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            SC (Scheduled Castes) List
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ahlawat (अहलावत)</li>
            <li>Balmiki (बाल्मीकि)</li>
            <li>Barber (नाई)</li>
            <li>Chamar (चमार)</li>
            <li>Dheemar (धेमर)</li>
            <li>Jatav (जाटव)</li>
            <li>Khatik (खटीक)</li>
            <li>Kori (कोरी)</li>
            <li>Pasi (पासी)</li>
            <li>Ravidas (रविदास)</li>
            <li>Sarkhel (सरखेल)</li>
            <li>Dhobi (धोबी)</li>
            <li>Mochi (मोची)</li>
            <li>Musahar (मुशहर)</li>
            <li>Tamboli (तम्बोली)</li>
          </ul>
        </div>

        {/* ST List Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ST (Scheduled Tribes) List
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bakarwals (बकरवाल)</li>
            <li>Gond (गोंड)</li>
            <li>Kharwar (खारवार)</li>
            <li>Koli (कोली)</li>
            <li>Kol (कोल)</li>
            <li>Lambani (लंबानी)</li>
            <li>Mala (माला)</li>
            <li>Meena (मीणा)</li>
            <li>Tharu (थारू)</li>
          </ul>
        </div>

        {/* Additional Castes List Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Other Castes (OBC)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {OBC.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CastesList;
