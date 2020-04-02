OC.L10N.register(
    "ocr",
    {
    "OCR" : "OCR",
    "Optical character recognition" : "Optičko prepoznavanje znakova",
    "Text recognition for your images" : "Prepoznavanje teksta za vaše slike",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff, bmp) and saves the output PDF file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 16 and up](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract traineddata needs about 200 MB space on your server (will be installed automatically).\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Note\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort.\nMoreover this project is based on a webassembly port of tesseract. The maintainer stopped working on PDF processing in this app and will start working on separate app for pdf handling." : "# Opis\n\nNextcloud OCR (optičko prepoznavanje znakova) obrada slika i PDF datoteka s pomoću alata tesseract-js uvodi mogućnost optičkog prepoznavanja znakova u vaš Nextcloud.\nAplikacija upotrebljava tesseract-js za obradu slika (png, jpeg, tiff, bmp) i PDF datoteka u pregledniku i sprema izlaznu PDF datoteku u izvorišnu mapu u Nextcloudu nakon čega je možete pretraživati.\n\n## Preduvjeti, zahtjevi i ovisnosti\nAplikacija OCR ima određene preduvjete:\n\n - [Nextcloud 16 i noviji](https://nextcloud.com/)\n\n - Korištenje je moguće samo na najnovijim suvremenim internetskim preglednicima (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Potrebno je osigurati približno 200 MB na poslužitelju za Tesseract podatke (instaliraju se automatski)\n\n\n_* U pregledniku Safari trenutno postoji problem s [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) koji zahtijeva da administrator postavi 'script-src' na 'unsafe-eval' kako bi aplikacija ispravno radila. Budući da navedena radnja nije dovoljno sigurna, aplikacija je ne izvršava automatski i preporučuje da korisnik obavi navedeni postupak (trebate poznavati CSP i posljedice korištenja postavki kao što je unsafe-eval)._\n\n## Instalacija\nInstalirajte aplikaciju s [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) ili preuzmite paket s githuba (**NE** izvorni kod) i stavite sadržaj u **nextcloud/apps/ocr/**.\n\n## Izjava o odricanju od odgovornosti\nSoftver se distribuira na OSNOVI „TAKAV KAKAV JE“, BEZ JAMSTVA ILI\nUVJETA BILO KOJE VRSTE, bilo izričitih ili podrazumijevanih.\n\n## Napomena\nAutor više ne nudi podršku za i ne održava inačicu 3 i starije inačice. Za asinkrono pozadinsko obrađivanje provjerite repozitorij i koristite se granom „not-maintained“ kako biste uveli poboljšanja. Autor više ne podržava navedene inačice jer zahtijevaju previše posla.\nOvaj se projekt temelji na webassembly portu tesseracta. Održavatelj je prestao raditi na značajci obrade PDF datoteka u ovoj aplikaciji i počet će razvijati odvojenu aplikaciju za upravljanje PDF datotekama.",
    "Target file already exists:" : "Ciljna datoteka već postoji:",
    "An unexpected error occured during the load of your favorite languages. No language will be set instead." : "Došlo je do neočekivane pogreške tijekom učitavanja omiljenih jezika. Neće biti postavljen nijedan jezik.",
    "An unexpected error occured during the upload of the processed file." : "Došlo je do neočekivane pogreške tijekom otpremanja obrađene datoteke.",
    "An unexpected error occured during the deletion of the original file." : "Došlo je do neočekivane pogreške tijekom brisanja izvorne datoteke.",
    "An unexpected error occured during Tesseract processing." : "Došlo je do neočekivane pogreške tijekom obrađivanja korištenjem alata Tesseract.",
    "OCR processing failed:" : "Neuspješan OCR:",
    "MIME type not supported." : "Nije podržan ovaj MIME.",
    "Process" : "Postupak",
    "A large number of files may take a very long time." : "Obrađivanje većeg broja datoteka može potrajati neko duže vrijeme.",
    "{file}/{files} Files successfully processed" : "Uspješno obrađeno {file}/{files} datoteka",
    "_%n file is being processed:_::_%n files are being processed:_" : ["Obrađuje se %n datoteka:","Obrađuje se %n datoteke/datoteka:","Obrađuje se %n datoteke/datoteka:"],
    "_Delete original file (image)_::_Delete original files (images)_" : ["Izbriši izvornu datoteku (slika)","Izbriši izvorne datoteke (slika)","Izbriši izvorne datoteke (slika)"],
    "_%n file_::_%n files_" : ["%n datoteka","%n datoteka","%n datoteka"],
    "Afrikaans" : "Afrikaans",
    "Arabic" : "Arapski",
    "Azerbaijani" : "Azerski",
    "Belarusian" : "Bjeloruski",
    "Bengali" : "Bengalski",
    "Bulgarian" : "Bugarski",
    "Catalan" : "Katalonski",
    "Czech" : "Češki",
    "Chinese" : "Kineski",
    "Traditional Chinese" : "Tradicionalni kineski",
    "Cherokee" : "Cherokee",
    "Danish" : "Danski",
    "German" : "Njemački",
    "Greek" : "Grčki",
    "English" : "Engleski",
    "English (Old)" : "Engleski (stari)",
    "Esperanto" : "Esperanto",
    "Esperanto alternative" : "Alternativni esperanto",
    "Math" : "Matematika",
    "Estonian" : "Estonski",
    "Basque" : "Baskijski",
    "Persian (Farsi)" : "Perzijski (farsi)",
    "Finnish" : "Finski",
    "French" : "Francuski",
    "Frankish" : "Starofranački jezik",
    "French (Old)" : "Francuski (stari)",
    "Galician" : "Galicijski",
    "Ancient Greek" : "Starogrčki jezik",
    "Hebrew" : "Hebrejski",
    "Hindi" : "Hindski",
    "Croatian" : "Hrvatski",
    "Hungarian" : "Mađarski",
    "Indonesian" : "Indonezijski",
    "Icelandic" : "Islandski",
    "Italian" : "Talijanski",
    "Italian (Old)" : "Talijanski (stari)",
    "Japanese" : "Japanski",
    "Kannada" : "Kannada",
    "Korean" : "Korejski",
    "Latvian" : "Latvijski",
    "Lithuanian" : "Litavski",
    "Malayalam" : "Malajalamski",
    "Macedonian" : "Makedonski",
    "Maltese" : "Malteški",
    "Malay" : "Malajski",
    "Dutch" : "Nizozemski",
    "Norwegian" : "Norveški",
    "Polish" : "Poljski",
    "Portuguese" : "Portugalski",
    "Romanian" : "Rumunjski",
    "Russian" : "Ruski",
    "Slovakian" : "Slovački",
    "Slovenian" : "Slovenski",
    "Spanish" : "Španjolski",
    "Old Spanish" : "Starošpanjolski",
    "Albanian" : "Albanski",
    "Serbian (Latin)" : "Srpski (latinica)",
    "Swahili" : "Svahili",
    "Swedish" : "Švedski",
    "Tamil" : "Tamilski",
    "Telugu" : "Telugu",
    "Tagalog" : "Tagaloški",
    "Thai" : "Tajski",
    "Turkish" : "Turski",
    "Ukrainian" : "Ukrajinski",
    "Vietnamese" : "Vijetnamski",
    "Press enter to select" : "Pritisnite tipku za potvrdu unosa za odabir",
    "Press enter to remove" : "Pritisnite tipku za potvrdu unosa za uklanjanje",
    "Selected" : "Odabrano",
    "No matches found" : "Nema pronađenih podudaranja",
    "Select language" : "Izaberi jezik",
    "Save" : "Spremi",
    "An unexpected error occured during save of your favorite languages. Please try again." : "Došlo je do neočekivane pogreške tijekom spremanja omiljenih jezika. Pokušajte ponovno.",
    "An unexpected error occured during load of your favorite languages. Please try again." : "Došlo je do neočekivane pogreške tijekom učitavanja omiljenih jezika. Pokušajte ponovno.",
    "An error occured during save of your favorite languages. Please check your input." : "Došlo je do pogreške tijekom spremanja omiljenih jezika. Provjerite unos.",
    "Selected languages will be preselected by default in the OCR dialog." : "Odabrani jezici bit će unaprijed odabrani u dijaloškom okviru za OCR.",
    "Favorite languages" : "Omiljeni jezici"
},
"nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;");
