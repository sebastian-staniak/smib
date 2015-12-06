var data = [
    {
        question: "Jak zależy moc sygnału dochodzącego w próżni do odbiornika od jego odległości od nadajnika?",
        answer: "L z indexem p = A * d do potęgi minus alfa A i alfa : stałe propagacji d: odleg ł ość między nadajnikiem i odbiornikiem alfa : ma wartośc 3 ~ 4 w typowym miejskim obszarze"
    },

    {
        question: "2. Jaką rolę pełni w sieci MSC , co się w nim znajduje?",
        answer: "W MSC znajduje się HLR; W MSC urządzenie mobilne jest zarejestrowane i informacja o początkowym jego położeniu oraz o bilingu jest przechowywana."
    },
    {
        question: "3. Wyjaśnij pojęcie: „region przenoszenia połączenia radiowego”.",
        answer: "Handover to przenoszenie połączenia radiowego telefonu z jedną komórką na połączenie z inną (rozmowa telefoniczna ciągle trwa). Dzieje się tak: 1) gdy nowe połączenie może zapewnić lepszą jakość (jego parametry są ciągle sprawdzane przez stację bazową i telefon) 2) gdy telefon znajduje się na styku kilku komórek i może już korzystać z innych (powstałe wolne miejsce wykorzystują telefony, które są tylko w zasięgu \"starej\" komórki)."
    },
    {
        question: "4. Podaj orientacyjną wartość długości fal używanych w telefonii komórkowej.",
        answer: "30 cm",
    },
    {
        question: "5. Jaka jest główna różnica między systemami SMB generacji 1-szej i 2-giej?",
        answer: "GeneracjaI(1G) <br>- systemy oparte natechnice analogowej; <br>- świadczą głównie zwykłe rozmowy telefoniczne; <br>- funkcjonują na częstotliwości rzędu 450MHz,<br>GeneracjaII(2G) <br>- systemyopartenatechnicecyfrowej; <br>- funkcjonują na częstotliwości rzędu 900MHz; <br>- w ramach systemu GSM dostępne są między innymi usługi takie, jak: poczta głosowa, przeniesienie połączenia, blokowanie połączeń, oczekiwanie na połączenie, zawieszenie połączenia, połączenie konferencyjne, identyfikacja rozmówcy, biling (szczegółowy rachunek), możliwość przesyłania danych komputerowych i faksów, przesyłanie wiadomości tekstowych, w 1997 r. poprawiono funkcjonalność sieci - dodano dwie szybsze technologie transmisji danych: HSCSD (High Speed Circuit Swiched Data) do 115kb/s i GPRS (General Packed Radio Service) do 170kb/s;"
    },
    {
        question: "6. Wyjaśnij słownie pojęcie długości fali.",
        answer: "Długość fali (λ) - odległość zajmowana przez pojedynczy cykl sygnału <br>Np: Prędkość światła v = 3x108m/s. To długość fali λf = v (lub λ = vT)."
    },
    {
        question: "7. Oblicz średnią liczbę MS-ów żądających obsługi jeżeli średni czas obsługi wynosi 60sec, a obciążenie systemu jest równe 6 Erlangom?",
        answer: "",
    },
    {
        question: "8. Na czym polega technika TDMA?",
        answer: "Czas dzielony jest na ramki o stałej długości; Każda ramka składa się ze stałej liczby szczelin czasowych; Dla danego połączenia BS przydziela się jedną szczelinę czasową - tę samą w kolejnych ramkach"
    },
    {
        question: "9. Kiedy następuje odbicie fali?",
        answer: "Na odbicie fali wpływają obiekty, które są duże w porównaniu z długością fali - np. powierzchnia Ziemi, budynki, ściany, itp.",
    },
    {
        question: "10. Czym różnią się sieci ad hoc od sieci telefonii komórkowej?",
        answer: "Ad hoc - Składają się z urządzeń mobilnych wyposażonych w karty do komunikacji bezprzewodowej (w jednym określonym standardzie); Każde urządzenie potrafi „rozmawiać” z każdym znajdującym się w jego radiowym „polu widzenia”Sieć telefonii komórkowej działa na zasadzie od anteny do komórki",
    },
    {
        question: "11. Jaka jest główna cecha sieci komórkowej 3-ciej generacji?",
        answer: "MULTIMEDIA. zdolność do połączenia możliwości korzystania z komponentów naziemnych i satelitarnych o globalnym zasięgu, umożliwia integrację wszystkich systemów radiokomunikacyjnych, zaprojektowany pod kątem jak największej wydajności w transmitowaniu danych (384Kb/s - 2Mb/s).",
    },
    {
        question: "12. Ile kanałów radiowych jest potrzebnych, aby zrealizować rozm(…) komórkowej?",
        answer: "4",
    },
    {
        question: "13. Co oznacza termin „interferencja międzysymbolowa”?",
        answer: "Jest wynikiem wielotorowości sygnałów i spowodowanych tym opóźnień czasowych. Ma wpływ na stopę błędów kanału",
    },
    {
        question: "14. Na czym polega tzw. „efekt ping-ponga”?",
        answer: "Przeniesienie regionu nie powinno następować zbyt szybko, bo to mogłoby spowodować że MS zmienia BS zbyt często (efekt ping-ponga) Aby unikać efektu ping-ponga MS-owi pozwala się kontynuować podtrzymywanie radiowej komunikacji ze swoim BS-em tak długo jak długo siła sygnału od tego BS-a jest większa niż pewien, wcześniej ustalony próg",
    },
    {
        question: "15. Kiedy następuje załamanie fali?",
        answer: "Na droge radiową między nadajnikiem i odbiornikiem mają wpływ kształty z ostrymi nieregularnymi krawędziami Fale uginają się w pobliżu przeszkód gdy tylko obok nich przechodzą",
    },
    {
        question: "16. Wyjaśnij słownie pojęcie częstotliwości sygnału.",
        answer: "Liczba powtórzeń (cykli) sygnału w ciągu jednej sekundy; jednostką częstotliwości jest herc (Hz) odpowiadający jednemu powtórzeniu sygnału w ciagu 1 sekundy.",
    },
    {
        question: "17. Do czego służy VLR?",
        answer: "VLR (Visitor Location Register) jest zbiorem wskaźników, które zapewniają mobilność i używanie tego samego numeru na całym świecie. Zawiera informacje o wszystkich MS odwiedzających obszar danego MSC.",
    },
    {
        question: "18. Jaka jest główna różnica między sieciami ad hoc i sieciami komórkowymi?",
        answer: "Sieć typu Ad-Hoc – bezprzewodowa sieć o zdecentralizowanej strukturze, w której przyłączone mobilne urządzenia mogą pełnić funkcje zarówno klienta (terminala końcowego), jak I punktu dostępu. Do przekazywania danych nie jest wymagane istnienie żadnej infrastruktury sieciowej (brak punktów zarządzających), gdyż pakiety dostarczane są do odbiorcy poprzez inne, pośredniczące, dowolnie zlokalizowane urządzenia w tej sieci. W sieciach komórkowych musi być infeastruktura, urządzenie to albo klient albo punkt dostępu, nigdy oba jednocześnie.",
    },
    {
        question: "19. W jaki sposób tworzony jest sygnał cyfrowy?",
        answer: "podtrzymywana jest intensywność sygnału na stałym poziomie przez pewien okres czasu a następnie zmienia się on do innego stałego poziomu",
    },
    {
        question: "20. Na czym polega technika CDMA?",
        answer: "Technika polegająca na przypisaniu poszczególnym użytkownikom korzystającym z tego samego kanału do przesyłania danych, sekwencji rozpraszających, dzięki którym odbiornik jednoznacznie zidentyfikuje przeznaczoną dla niego transmisję.",
    },
    {
        question: "21. Wyjaśnij słownie pojęcie „okres sygnału”.",
        answer: "Wielkość czasu jaką zajmuje jedno powtórzenie sygnału.",
    },
    {
        question: "22. Od jakich parametrów zależy odległość powtórnego wykorzystania częstotliwości w komórce sześciokątnej?",
        answer: "Ten sam zakres częstotliwości (kanał) używany w komórce może być powtórnie wykorzystany w innej komórce jeżeli te komórki są dostatecznie oddalone i ich sygnały nie intereferują ze sobą <br>Dla komórek sześciokątnych, odległość wykorzystania wynosi D = sqrt(3N) * R <br>R -promień komórki <br>N jest wzorcem wykorzystania (rozmiar klastra czyli liczba komórek na klaster).",
    },
    {
        question: "23. Na czym polega technika „frequency hopping”?",
        answer: "frequency hopping – technika oparta na przeskokach częstotliwości (kombinacja FDMA i TDMA): <br>- pojedynczy użytkownik wykorzystuje jeden kanał przez określony czas, a następnie zmienia kanał na inny <br>- każdy użytkownik ma określoną własną sekwencję zmian kanałów <br>- ta technika oryginalnie była opracowana dla wojska w związku z problem, aby skutecznie przesyłać informację jeżeli nieprzyjaciel zagłusza określony zakres częstotliwości.",
    },
    {
        question: "24. Co znajduje się w HLR?",
        answer: "Wskaźniki, które zapewniają mobilność i używanie tego samego numeru na całym świecie.",
    },
    {
        question: "25. Co to jest 1 Erlang?",
        answer: "Natężenie ruchu odpowiadające zajętości kanału w ciągu 1 godz.",
    },
    {
        question: "26. Na czym polega „rozpostarcie opóźnienia”?",
        answer: "W czasie propagacji sygnału od nadajnika do odbiornika, sygnał odbija się raz lub więcej. To powoduje, że sygnał przychodzi różnymi drogami. Każda droga ma inną długość, tak więc czas przybycia sygnału różnymi drogami jest różny. Ten efekt, który powoduje rozpostarcie sygnału nazywany jest „rozpostarciem opóżnienia”.",
    },
    {
        question: "27. Na czym polega efekt Dopplera?",
        answer: "Effekt Dopplera: gdy fala od nieruchomej BS i odbiornik MS poruszają się naprzeciwko siebie, to częstotliwość otrzymywanego sygnału nie będzie taka sama jak u źródła",
    },
    {
        question: "28. Na czym polega technika FDMA?",
        answer: "(Frequency Division Multiple Access) (multipleksowanie z podzia łem cz ęstotliwo ści ) - w systemach 1G  Pasmo częstotliwości jest dzielone na podpasma nazywane kana ami  Pojedyńczy kanał jest przydzielany przez BS do uzytkownika",
    },
];